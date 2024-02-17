import curriculo from '../resume/igor-righi-curriculo.pdf';

export const handleBtnDownload = () => {
  const link = document.createElement('a');
  link.href = curriculo;
  link.download = 'curriculo-igor-righi';
  link.click();
};
