import { Request, Response } from 'express';

export async function login(_: Request, res: Response): Promise<void> {
	res.status(200).render('administrador/login');
}

export async function dashboard(_: Request, res: Response): Promise<void> {
	res.status(200).render('administrador/inicio');
}
