import { type FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NewsPage } from '../NewsPage/NewsPage';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { AchievementsPage } from '../AchievementsPage/AchievementsPage';
import { ProfilePage } from '../ProfilePage/ProfilePage';

type AppRouterProps = {
  props?: never;
};

const mokMedals: { text: string; isOpen: boolean }[] = [
  {
    isOpen: true,
    text: '🏅 "Скоростник" - решите кейс в первые 24 часа',
  },
  {
    isOpen: true,
    text: '🏅 "Серия побед" - 5 успешных решений подряд',
  },
  {
    isOpen: false,
    text: '❌ "Снайпер" - 3 решения приняты компанией с первого раза',
  },
  {
    isOpen: false,
    text: '❌  "React Guru" - выполните 3 фронтенд-кейса',
  },
];

const mokQuests: { text: string }[] = [
  {
    text: `✅ [Выполнен] "Новичок платформы"
    • Зарегистрируйтесь и заполните профиль
    • Награда: 100 XP`,
  },
  {
    text: `🔄 [В процессе] "Путь кода" (3/5)
    • Решите 5 кейсов от компаний
    • Награда: 500 XP + повышение ранга`,
  },
  {
    text: `🔒 [Заблокирован] "Командный игрок"
    • Участвуйте в 3 командных проектах
    • Требуется: Уровень 5
    • Награда: 800 XP`,
  },
];

export const AppRouter: FC<AppRouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/news" replace />}></Route>
      <Route path="news" element={<NewsPage />}></Route>
      <Route path="achievements" element={<AchievementsPage medals={mokMedals} quests={mokQuests} />}></Route>
      <Route path="profile" element={<ProfilePage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
};
