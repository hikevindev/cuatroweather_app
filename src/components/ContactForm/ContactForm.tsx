import { z } from 'zod';
import { CONTACT_FORM_SCHEMA } from '../../config/schemas/FormSchema';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import './ContactForm.scss';

type ContactInputs = z.infer<typeof CONTACT_FORM_SCHEMA>;

export const ContactForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInputs>({
    resolver: zodResolver(CONTACT_FORM_SCHEMA),
  });

  const onSubmit: SubmitHandler<ContactInputs> = (data: any) => {
    console.log('Form', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <h2>Formulario de contacto</h2>
      <div>
        <label>Nombre</label>
        <input {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>Fecha de nacimiento</label>
        <input {...register('birthDay')} />
        {errors.birthDay && <p>{errors.birthDay.message}</p>}
      </div>
      <div>
        <label>Ciudad</label>
        <input {...register('city')} />
        {errors.city && <p>{errors.city.message}</p>}
      </div>
      <div>
        <label>Email</label>
        <input {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Teléfono</label>
        <input {...register('phone')} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};
