import Home from '../pages/Home';
import Following from '../pages/Following';
import Explore from '../pages/Explore';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/explore', component: Explore },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
