export type User = {
  id: number,
  login: string,
  password: string,
  name: string,
  profilePic: string,
  about: string,
  skills: Skills[],
  contact: {
    linkedin: string,
    github: string,
    instagram: string,
    email: string,
    wpp: string // https://wa.me/5531998397442/?text=Olá%20Igor%20Righi
  }
  resume: Resume,
};

export type Skills = {
  id: number,
  skill: string,
  icon: string,
};

export type Resume = {
  en: string,
  pt: string,
};
