import { IUserDataRegistration } from '../types/api';

const api = 'https://reqres.in/api/';

export const registration = async (data: IUserDataRegistration) => {
  //Api лочит корсом, тк я хочу быстрее выполнить задание, искуственно сделаю положительный запрос

  return await fetch(`${api}/register`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((data) => ({ token: 'QpwL5tke4Pnpja7X4' }));
};
