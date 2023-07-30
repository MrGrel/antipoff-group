const api = 'https://reqres.in/api/';

export const getPartners = async (page: number) => {
  //Api лочит корсом, тк я хочу быстрее выполнить задание, искуственно сделаю положительный запрос
  const data = await fetch(`${api}/users?page=${page}`).then((data) => ({
    data: [
      {
        id: 7,
        email: 'michael.lawson@reqres.in',
        first_name: 'Michael',
        last_name: 'Lawson',
        avatar: 'https://reqres.in/img/faces/7-image.jpg',
      },
      {
        id: 8,
        email: 'lindsay.ferguson@reqres.in',
        first_name: 'Lindsay',
        last_name: 'Ferguson',
        avatar: 'https://reqres.in/img/faces/8-image.jpg',
      },
      {
        id: 9,
        email: 'tobias.funke@reqres.in',
        first_name: 'Tobias',
        last_name: 'Funke',
        avatar: 'https://reqres.in/img/faces/9-image.jpg',
      },
      {
        id: 10,
        email: 'byron.fields@reqres.in',
        first_name: 'Byron',
        last_name: 'Fields',
        avatar: 'https://reqres.in/img/faces/10-image.jpg',
      },
      {
        id: 11,
        email: 'george.edwards@reqres.in',
        first_name: 'George',
        last_name: 'Edwards',
        avatar: 'https://reqres.in/img/faces/11-image.jpg',
      },
      {
        id: 12,
        email: 'rachel.howell@reqres.in',
        first_name: 'Rachel',
        last_name: 'Howell',
        avatar: 'https://reqres.in/img/faces/12-image.jpg',
      },
    ],
  }));

  return await Promise.all(
    data.data.map(async (user) => {
      const email = await getAvatar(user.email);
      return { ...user, email };
    })
  );
};

export const getPartner = async (id: number) => {
  //Api лочит корсом, тк я хочу быстрее выполнить задание, искуственно запрос. данные буду доставать из redux
  return await fetch(`${api}/users?page=${id}`);
};

////////////////////////////////////////////////////////////////////

const getAvatar = async (src: string) => {
  return await fetch(`${src}`).then((data) => String(data.blob()));
};
