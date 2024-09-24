import { Fragment } from 'react/jsx-runtime';
import { HeaderOnly } from '../components/Layout/HeaderOnly';
import { Following } from '../pages/Following';
import { Home } from '../pages/Home';
import { Search } from '../pages/Search';
import { Upload } from '../pages/Upload';
import { Profile } from '../pages/Profile';

interface Route {
    path: string;
    component: React.ComponentType;
    layout?: any;
}

const publicRoutes: Route[] = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/:nickname',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: Fragment,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
