import { Suspense, lazy } from "react";
import {
  BrowserRouter as RootRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Loading from "./component/Loading";

import { PAGE_URL } from "./config/path";

import AppStyles from "./AppStyles";

const SignIn = lazy(() => import("./page/auth/signIn/SignInPage"));
const BasicTest = lazy(() => import("./page/chat/ChatPage"));

const PageRouter = () => (
  <Suspense fallback={<Loading />}>
    <RootRouter>
      <AppStyles />
      <Routes>
        <Route>
          <Route index element={<Navigate to={PAGE_URL.SignIn} replace />} />
          <Route path={PAGE_URL.SignIn} element={<SignIn />} />
          <Route path={PAGE_URL.Chat} element={<BasicTest />} />
        </Route>
      </Routes>
    </RootRouter>
  </Suspense>
);

export default PageRouter;
