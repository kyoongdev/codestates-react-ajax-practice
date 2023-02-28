import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AuthPage, DetailPage, HomePage } from "../pages";

const router = (
    <Route>
      {/* 가장첫페이지인 인덱스페이지인경우 /붙여야되는데 두번째부턴 /안붙여도됨 */}
      <Route path="/" element={<HomePage />} />
      <Route path=":id" element={<DetailPage />} />
      <Route path="auth" element={<AuthPage />} />
    </Route>
);

// createBrowserRouter => 내가만든 라우터 정보를 기반으로 BrowserRouter로 감싸서 return하는 함수
// createRoutesFromElements => 라우트태그로 감싸져있는 라우팅정보들을 라우트객체로 변환하는 함수
const rootRouter = createBrowserRouter(createRoutesFromElements(router));
export default rootRouter;
