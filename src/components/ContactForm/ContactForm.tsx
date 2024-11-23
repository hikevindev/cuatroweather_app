import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CONTACT_FORM_SCHEMA } from '../../config/schemas/FormSchema';
import { zodResolver } from '@hookform/resolvers/zod';

import './ContactForm.scss';

type ContactInputs = z.infer<typeof CONTACT_FORM_SCHEMA>;

export const ContactForm = () => {
  const { t } = useTranslation();
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
      <h2>{t('contact-form.title')}</h2>
      <div>
        <label>{t('contact-form.name')}</label>
        <input {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>{t('contact-form.bornDate')}</label>
        <input {...register('birthDay')} />
        {errors.birthDay && <p>{errors.birthDay.message}</p>}
      </div>
      <div>
        <label>{t('contact-form.city')}</label>
        <input {...register('city')} />
        {errors.city && <p>{errors.city.message}</p>}
      </div>
      <div>
        <label>{t('contact-form.email')}</label>
        <input {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>{t('contact-form.phone')}</label>
        <input {...register('phone')} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>
      <button type="submit">{t('contact-form.send')}</button>
    </form>
  );
};
