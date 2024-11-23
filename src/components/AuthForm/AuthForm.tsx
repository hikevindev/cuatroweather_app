import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { signIn } from '../../redux/slices/sessionSlice';
import { zodResolver } from '@hookform/resolvers/zod';

import './AuthForm.scss';
import { LOGIN_SCHEMA } from '../../config/schemas/FormSchema';

type LoginInputs = z.infer<typeof LOGIN_SCHEMA>;

export const AuthForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(LOGIN_SCHEMA),
  });

  const onSubmit: SubmitHandler<LoginInputs> = (data: any) => {
    dispatch(signIn(data.email));
  };

  return (
    <section className="auth-form">
      <div className="auth-form__container">
        <h2>{t('signIn')}</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="auth-form__field">
            <label>{t('email')}</label>
            <input {...register('email')} />
            {errors.email && (
              <p className="auth-form__error">{errors.email.message}</p>
            )}
          </div>
          <div className="auth-form__field">
            <label>{t('password')}</label>
            <input type="password" {...register('password')} />
            {errors.password && (
              <p className="auth-form__error">{errors.password.message}</p>
            )}
          </div>
          <button className="auth-form__submit-btn" type="submit">
            {t('signIn')}
          </button>
        </form>
      </div>
    </section>
  );
};
