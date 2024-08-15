import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from "../routes";
import NotFound from '../pages/NotFound';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';

const AppRouter = observer(() => {

    const { user } = useContext(Context);
    // console.log(user);
    const isAuth = user.isAuth;

    return (
        <Routes>
            {isAuth && authRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} exact />
            ))}
            {!isAuth && publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} exact />
            ))}
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
    
});

export default AppRouter;