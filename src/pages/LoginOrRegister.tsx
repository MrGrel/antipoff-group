import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTypeDispatch, useTypeSelector } from '../hooks/redux';
import { useNavigate } from 'react-router';

import { getTokenRegistration } from '../store/actionCreator';
import { IFormValues } from '../types/login';

import '../styles/LoginOrRegister.scss';

const LoginOrRegister = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors },
    watch,
  } = useForm<IFormValues>();

  const navigate = useNavigate();
  const token = useTypeSelector((state) => state.tokenReducer.token);
  const dispatch = useTypeDispatch();

  useEffect(() => {
    if (token !== '') {
      navigate('/');
    }
  }, [token]);

  const onSubmit = (data: IFormValues) => {
    const userData = {
      email: data.email,
      password: data.password,
    };

    dispatch(getTokenRegistration(userData));
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-title">Регистрация</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__input-container">
            <label className="form__legend">Имя</label>
            <input
              type="text"
              className={errors.name ? 'form__input form__input-error' : 'form__input'}
              {...register('name', {
                required: 'Обязательное поле для заполнения',
                onBlur: (e) => {
                  const { value } = e.target;
                  e.target.value = (
                    value.slice(0, 1).toUpperCase() + value.slice(1, value.length).toLowerCase()
                  ).trim();
                },
              })}
            />
            {errors.name && <p className="form__error">{`${errors.name.message}`}</p>}
          </div>

          <div className="form__input-container">
            <label className="form__legend">Email</label>
            <input
              type="text"
              className={errors.email ? 'form__input form__input-error' : 'form__input'}
              {...register('email', {
                required: 'Обязательное поле для заполнения',
                validate: {
                  email: (value) =>
                    value.match(
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    ) !== null || 'Убедитесь в правильности написания email',
                },
              })}
            />
            {errors.email && <p className="form__error">{`${errors.email.message}`}</p>}
          </div>

          <div className="form__input-container">
            <label className="form__legend">Пароль</label>
            <input
              type="text"
              className={errors.password ? 'form__input form__input-error' : 'form__input'}
              {...register('password', {
                required: 'Обязательное поле для заполнения',
                validate: {
                  password: (value) => {
                    const isWord = value.match(/^[a-zA-Z]/) !== null;
                    return (
                      (value.length > 7 && !isWord) ||
                      'пароль должен состоять минимум из 8 символов и должен включать в себя хотя бы одну латинскую букву'
                    );
                  },
                },

                onBlur: (e) => {
                  const { value } = e.target;
                  e.target.value = value.trim();
                },
              })}
            />
            {errors.password && <p className="form__error">{`${errors.password.message}`}</p>}
          </div>

          <div className="form__input-container">
            <label className="form__legend">Подтвердите пароль</label>
            <input
              type="text"
              className={errors.passwordConfirm ? 'form__input form__input-error' : 'form__input'}
              {...register('passwordConfirm', {
                required: 'Обязательное поле для заполнения',
                onBlur: (e) => {
                  const value: string = e.target.value.trim();
                  const password = watch('password');
                  e.target.value = value;

                  if (value !== password) {
                    setError('passwordConfirm', { type: 'error', message: 'Пароли не совпадают' });
                  } else {
                    clearErrors('passwordConfirm');
                  }
                },
              })}
            />
            {errors.passwordConfirm && <p className="form__error">{`${errors.passwordConfirm.message}`}</p>}
          </div>

          <button type="submit" className="form__submit">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginOrRegister;
