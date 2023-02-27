import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { HomePage, DetailPage} from "../pages"

const router= (
    <Route>
        <Route path="/" element={<HomePage/>}/>
        <Route path=":id" element={<DetailPage/>}/>
    </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;