export type User = {
  id: number,
  login: string,
  password: string,
  name: string,
  skills: string[],
  contact: {
    linkedin: string,
    github: string,
    instagram: string,
    email: string,
    wpp: string // https://wa.me/5531998397442/?text=Olá%20Igor%20Righi
  }
};
