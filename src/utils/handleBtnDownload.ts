import { user } from '../backend/userdb';

export const handleBtnDownload = (language: string) => {
  const link = document.createElement('a');
  if (language === 'en') {
    link.href = user.resume.en;
    link.download = 'resume-igor-righi-en';
    link.click();
  }
  link.href = user.resume.pt;
  link.download = 'resume-igor-righi';
  link.click();
};
