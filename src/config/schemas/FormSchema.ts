import { z } from 'zod';

export const LOGIN_SCHEMA = z.object({
  email: z.string().email('Email invalido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export const CONTACT_FORM_SCHEMA = z.object({
  name: z.string().min(0, 'Nombre requerido'),
  birthDay: z.string().date('Fecha no valida.'),
  city: z.string().min(3, 'Introduce una ciudad valida'),
  email: z.string().email('Email invalido.'),
  phone: z.string().min(1, 'Minimo 6 números').max(9, 'Maximo 10 números'),
});
