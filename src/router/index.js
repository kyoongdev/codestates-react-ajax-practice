import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { HomePage, DetailPage} from "../pages"
import { LoginPage,RegisterPage } from "../Auth";

const router= (
    <Route>
        <Route path="/" element={<HomePage/>}/>
        <Route path=":id" element={<DetailPage/>}/>
        <Route path="auth">
            <Route path="login" element={<LoginPage/>}/>
            <Route path="register" element={<RegisterPage/>}/>
        </Route> 
    </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;

