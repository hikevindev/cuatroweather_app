import React from 'react';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CONTACT_FORM_SCHEMA } from '../../config/schemas/FormSchema';
import { zodResolver } from '@hookform/resolvers/zod';

import './ContactForm.scss';
import 'react-toastify/dist/ReactToastify.css';

type ContactInputs = z.infer<typeof CONTACT_FORM_SCHEMA>;

export const ContactForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactInputs>({
    resolver: zodResolver(CONTACT_FORM_SCHEMA),
  });

  const onSubmit: SubmitHandler<ContactInputs> = (data: ContactInputs) => {
    toast.success(t('contact-form.success'));
    reset();
  };

  const formValues = watch();
  const allFieldFilled =
    formValues.name &&
    formValues.phone &&
    formValues.email &&
    formValues.city &&
    formValues.birthDay;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <h2>{t('contact-form.title')}</h2>
        <div>
          <label>{t('contact-form.name')}</label>
          <input placeholder={t('contact-form.name')} {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label>{t('contact-form.bornDate')}</label>
          <input
            data-testid="datetime-input"
            placeholder={t('contact-form.bornDate')}
            type="date"
            {...register('birthDay')}
          />
          {errors.birthDay && <p>{errors.birthDay.message}</p>}
        </div>
        <div>
          <label>{t('contact-form.city')}</label>
          <input placeholder={t('contact-form.city')} {...register('city')} />
          {errors.city && <p>{errors.city.message}</p>}
        </div>
        <div>
          <label>{t('contact-form.email')}</label>
          <input placeholder={t('contact-form.email')} {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>{t('contact-form.phone')}</label>
          <input
            placeholder={t('contact-form.phone')}
            type="number"
            {...register('phone')}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <button type="submit" disabled={!allFieldFilled}>
          {t('contact-form.send')}
        </button>
      </form>
      <ToastContainer />
    </>
  );
};
