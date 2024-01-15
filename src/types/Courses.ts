export type Courses = {
  id: number,
  name: string,
  school_id: number,
  description: string,
  tags: string[],
  certificate: {
    certificate_number: string,
    link: string,
    image: string,
  },
  date: {
    started_at: string,
    ended_at: string
  }
};
