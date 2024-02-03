export type User = {
  id: number,
  login: string,
  password: string,
  name: string,
  profilePic: string,
  about: About[]
  skills: Skills[],
  contact: {
    linkedin: string,
    github: string,
    instagram: string,
    email: string,
    wpp: string // https://wa.me/5531998397442/?text=Olá%20Igor%20Righi
  }
};

export type Skills = {
  id: number,
  skill: string,
  icon: string,
};

export type About = {
  id: number,
  title: string,
  description: string,
};
