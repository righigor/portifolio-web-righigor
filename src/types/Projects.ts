export type Projects = {
  id: number,
  name: string,
  school_id?: number,
  description: string,
  tags: string[],
  highlighted?: boolean,
  github_link: string,
  header: string,
  images: string[]
};
