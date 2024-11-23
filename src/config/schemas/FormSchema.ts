import { z } from 'zod';

export const LOGIN_SCHEMA = z.object({
  email: z.string().email('Email invalido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export const CONTACT_FORM_SCHEMA = z.object({
  name: z.string().min(0),
  birthDay: z.string().date('Fecha no valida.'),
  city: z.string().min(1),
  email: z.string().email('Email invalido.'),
  phone: z.number().min(1),
});
