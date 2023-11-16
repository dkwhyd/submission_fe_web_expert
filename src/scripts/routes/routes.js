import Restaurant from '../views/pages/restaurant';
import Favorite from '../views/pages/favorite';
import Category from '../views/pages/category';
import Detail from '../views/pages/detail';

const routes = {
  '/': Restaurant,
  '/restaurant': Restaurant,
  '/favorite': Favorite,
  '/category': Category,
  '/detail/:id': Detail,
};

export default routes;
