import { Request, Response } from 'express';
import { AboutRepositoryImpl } from '../../infrastructure/repositories/AboutRepository';
import { getAbout } from '../../application/use-cases/about/getAbout';
import { createAbout } from '../../application/use-cases/about/createAbout';
import { updateAbout } from '../../application/use-cases/about/updateAbout';
import { deleteAbout } from '../../application/use-cases/about/deleteAbout';
import { AboutModel } from '../../infrastructure/models/About.model';

const repo = new AboutRepositoryImpl();

// DTOs
export interface AboutResponseDTO {
  _id?: string;
  titulo: string;
  descripcion: string;
  orden: number;
}
export interface AboutRequestDTO {
  titulo: string;
  descripcion: string;
  orden: number;
}

export class AboutController {
  static async getAll(req: Request, res: Response) {
    const abouts = await getAbout(repo);
    const response: AboutResponseDTO[] = abouts.map(a => ({ _id: a.props._id, titulo: a.props.titulo, descripcion: a.props.descripcion, orden: a.props.orden }));
    res.json(response);
  }

  static async create(req: Request, res: Response) {
    const dto: AboutRequestDTO = req.body;
    // Validar unicidad de 'orden'
    const exists = await AboutModel.findOne({ orden: dto.orden });
    if (exists) {
      return res.status(400).json({ message: 'Ya existe un bloque con ese orden.' });
    }
    const created = await createAbout(repo, dto);
    const response: AboutResponseDTO = { _id: created.props._id, titulo: created.props.titulo, descripcion: created.props.descripcion, orden: created.props.orden };
    res.status(201).json(response);
  }

  static async update(req: Request, res: Response) {
    const dto: Partial<AboutRequestDTO> = req.body;
    // Validar unicidad de 'orden' (ignorando el propio bloque)
    if (dto.orden !== undefined) {
      const exists = await AboutModel.findOne({ orden: dto.orden, _id: { $ne: req.params.id } });
      if (exists) {
        return res.status(400).json({ message: 'Ya existe un bloque con ese orden.' });
      }
    }
    const updated = await updateAbout(repo, req.params.id, dto);
    if (!updated) return res.status(404).json({ message: 'No se encontró la sección para actualizar.' });
    const response: AboutResponseDTO = { _id: updated.props._id, titulo: updated.props.titulo, descripcion: updated.props.descripcion, orden: updated.props.orden };
    res.json(response);
  }

  static async delete(req: Request, res: Response) {
    const deleted = await deleteAbout(repo, req.params.id);
    if (!deleted) return res.status(404).json({ message: 'No se encontró la sección para eliminar.' });
    res.json({ message: 'Sección eliminada correctamente' });
  }
}