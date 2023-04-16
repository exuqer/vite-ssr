import About from './About.vue';
import childrenRoutes from './pages';

export default {
  path: '/about',
  component: About,
  children: childrenRoutes,
};