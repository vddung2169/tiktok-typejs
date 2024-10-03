import { Fragment } from 'react/jsx-runtime';
import { HeaderOnly } from '../components/Layout/HeaderOnly';
import { Following } from '../pages/Following';
import { Home } from '../pages/Home';
import { Search } from '../pages/Search';
import { Upload } from '../pages/Upload';
import { Profile } from '../pages/Profile';

import routesConfig from '../config/routes';

interface Route {
    path: string;
    component: React.ComponentType;
    layout?: any;
}

const publicRoutes: Route[] = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.profile,
        component: Profile,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.search,
        component: Search,
        layout: Fragment,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
