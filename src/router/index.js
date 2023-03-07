import {createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom';
import { HomePage, ProductPage  } from '../pages';
import { LoginPage,RegisterPage ,SocialPage,SocialRegisterPage} from '../pages/Auth';

const router = (
    <Route path="/">
        <Route index element={<HomePage/>}  />
        <Route path=":id" element={<ProductPage/>}/>
        <Route path="auth">
            <Route path="login" element={<LoginPage/>}/>
            <Route path="register" element={<RegisterPage/>}/>
        </Route>
        <Route path="social">
            <Route index element={<SocialPage/>}/>
            <Route path="register" element={<SocialRegisterPage/>}/>
        </Route>
    </Route>
)

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;