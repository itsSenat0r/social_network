import { createContext, useContext, useEffect, useState, type FC } from 'react';

export type PageData = {
  name: string;
  id: string;
  route: string;
};

export type PageContextType = {
  setPages: React.Dispatch<React.SetStateAction<PageData[]>>;
  pages: PageData[];
  currentPage: PageData;
  setCurrentPage: React.Dispatch<React.SetStateAction<PageData>>;
};

const allPages: PageData[] = [
  {
    name: 'лента',
    id: 'lenta',
    route: 'news',
  },
  {
    name: 'мои ачивки',
    id: 'achivies',
    route: 'achievements',
  },
  {
    name: 'профиль',
    id: 'profile',
    route: 'profile',
  },
];

const PageContext = createContext<PageContextType | undefined>(undefined);

export const usePageContext = (): PageContextType => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerContextProvider');
  }
  return context;
};

type PageContextProviderProps = {
  children: React.ReactNode;
};

export const PageContextProvider: FC<PageContextProviderProps> = ({ children }) => {
  const [pages, setPages] = useState<PageData[]>(allPages);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <PageContext.Provider value={{ setPages, pages, currentPage, setCurrentPage }}>{children}</PageContext.Provider>
  );
};
