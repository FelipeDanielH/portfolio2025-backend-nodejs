import { Request, Response } from 'express';
import { Home } from '../models/Home.model';

// Obtener el documento actual (único)
export const getHome = async (_req: Request, res: Response) => {
  try {
    const home = await Home.findOne();
    if (!home) return res.status(404).json({ message: 'No se encontró información de inicio.' });
    res.json(home);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener información de inicio', error });
  }
};

// Crear un nuevo documento
export const createHome = async (req: Request, res: Response) => {
  try {
    const existing = await Home.findOne();
    if (existing) return res.status(400).json({ message: 'Ya existe información de inicio. Usa PUT para actualizar.' });

    const newHome = new Home(req.body);
    const saved = await newHome.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear información de inicio', error });
  }
};

// Actualizar el documento existente
export const updateHome = async (req: Request, res: Response) => {
  try {
    const updated = await Home.findOneAndUpdate({}, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'No se encontró información para actualizar.' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar información de inicio', error });
  }
};

// Eliminar el documento
export const deleteHome = async (_req: Request, res: Response) => {
  try {
    const deleted = await Home.findOneAndDelete();
    if (!deleted) return res.status(404).json({ message: 'No se encontró información para eliminar.' });
    res.json({ message: 'Información de inicio eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar información de inicio', error });
  }
};
