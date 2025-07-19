import { Request, Response } from 'express';
import { HomeCertificationsRepositoryImpl } from '../../infrastructure/repositories/HomeCertificationsRepository';
import { getHomeCertifications } from '../../application/use-cases/homeCertifications/getHomeCertifications';
import { updateHomeCertifications } from '../../application/use-cases/homeCertifications/updateHomeCertifications';
import { EducationModel } from '../../infrastructure/models/Education.model';

const repo = new HomeCertificationsRepositoryImpl();

export class HomeCertificationsController {
  static async get(req: Request, res: Response) {
    const homeCertifications = await getHomeCertifications(repo);
    res.json(homeCertifications ? { certifications: homeCertifications.props.certifications } : { certifications: [] });
  }

  static async update(req: Request, res: Response) {
    const { certifications } = req.body;
    if (!Array.isArray(certifications)) return res.status(400).json({ message: 'El campo certifications debe ser un array de IDs.' });
    // Buscar las certificaciones y crear snapshots
    const found = await EducationModel.find({ _id: { $in: certifications }, tipo: 'certificacion' });
    if (found.length !== certifications.length) return res.status(400).json({ message: 'Uno o más IDs de certificaciones no existen.' });
    const snapshots = found.map(c => ({
      _id: String((c._id as any)),
      titulo: c.titulo,
      institucion: c.institucion,
      estado: c.estado,
      fecha_inicio: c.fecha_inicio,
      fecha_fin: c.fecha_fin
    }));
    const updated = await updateHomeCertifications(repo, snapshots);
    res.json({ certifications: updated.props.certifications });
  }
} 