import ProtectedRoute from "@/components/route/ProtectedRoute";
import { Route, Routes, Navigate } from "react-router-dom";
import { protectedRoutes, publicRoutes } from "@/configs/routes";
import PageContainer from "@/components/template/PageContainer";
import { Suspense,memo } from "react";
import { Loading } from "@/components/ui";
import AppRoute from "@/components/route/AppRoute";
import PublicRoute from "@/components/route/PublicRoute";

interface App {
  [index: string | number]: string | number | boolean;
}

const AllRoutes = (props: App) => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        {protectedRoutes.map((route, index) => (
          <Route
            key={route.key + String(index)}
            path={route.path}
            element={
              <PageContainer {...props} setting={route.setting}>
                <AppRoute routePrivate component={route.component} setting={route.setting} />
              </PageContainer>
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/halo" replace />} />
      </Route>
      <Route path="/" element={<PublicRoute />}>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <AppRoute routePrivate={false} component={route.component} setting={route.setting} />
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

const Views = (props: App) => {
  return (
    <Suspense fallback={<Loading />}>
      <AllRoutes {...props} />
    </Suspense>
  );
};

export default memo(Views);
