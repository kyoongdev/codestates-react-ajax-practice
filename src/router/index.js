const {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} = require("react-router-dom");
const { HomePage } = require("../pages");

const router = (
  <Route>
    <Route path="/*" element={<HomePage />} />
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));
export default rootRouter;
