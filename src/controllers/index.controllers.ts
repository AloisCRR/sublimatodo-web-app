import { Request, Response } from 'express';

export function home(_: Request, res: Response): void {
	return res.status(200).render('index');
}
