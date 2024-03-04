import React, { createContext, useContext, useState } from 'react';

type PageContextType = {
  paginaAtualProjects: number,
  setPaginaAtualProjects: React.Dispatch<React.SetStateAction<number>>,
  paginaAtualCourses: number,
  setPaginaAtualCourses: React.Dispatch<React.SetStateAction<number>>,
  exibition: boolean,
  setExibition: React.Dispatch<React.SetStateAction<boolean>>,
  lang: 'pt' | 'en',
  setLang: React.Dispatch<React.SetStateAction<'en' | 'pt'>>
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePageContext deve ser usado dentro de um PageProvider');
  }
  return context;
};

export function PageProvider({ children }: any) {
  const [paginaAtualProjects, setPaginaAtualProjects] = useState(1);
  const [paginaAtualCourses, setPaginaAtualCourses] = useState(1);
  const [exibition, setExibition] = useState(true);
  const [lang, setLang] = useState<'pt' | 'en'>('pt');

  const contextValue = {
    paginaAtualProjects,
    setPaginaAtualProjects,
    paginaAtualCourses,
    setPaginaAtualCourses,
    exibition,
    setExibition,
    lang,
    setLang,
  };

  return (
    <PageContext.Provider value={ contextValue }>
      {children}
    </PageContext.Provider>
  );
}
