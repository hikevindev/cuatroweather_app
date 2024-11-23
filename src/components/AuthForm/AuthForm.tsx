import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import './AuthForm.scss';
import { signIn } from '../../redux/slices/sessionSlice';

const loginSchema = z.object({
  email: z.string().email('Email invalido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

type LoginInputs = z.infer<typeof loginSchema>;

export const AuthForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginInputs> = (data: any) => {
    dispatch(signIn(data.email));
  };

  return (
    <section className="auth-form">
      <div className="auth-form__container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="auth-form__field">
            <label>Email</label>
            <input {...register('email')} />
            {errors.email && (
              <p className="auth-form__error">{errors.email.message}</p>
            )}
          </div>
          <div className="auth-form__field">
            <label>Contraseña</label>
            <input type="password" {...register('password')} />
            {errors.password && (
              <p className="auth-form__error">{errors.password.message}</p>
            )}
          </div>
          <button className="auth-form__submit-btn" type="submit">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </section>
  );
};
