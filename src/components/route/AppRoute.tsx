import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setLayout, setDefaultLayout } from "@/store/theme";
import React, { useEffect, memo } from "react";
import { useLocation } from "react-router-dom";

interface AppRouteType {
  component: React.FC;
  setting?: {
    [index: string]: string | boolean | number;
  };
  routePrivate: boolean;
}

const AppRoute = ({
  component: Component,
  setting,
  routePrivate,
  ...props
}: AppRouteType) => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleLayoutChange = () => {
      if (routePrivate) {
        if (setting && setting.layout) {
          dispatch(setLayout(setting.layout));
        }
      } else {
        if (!setting) {
          dispatch(setDefaultLayout());
        }
      }
    };

    handleLayoutChange(); 
  }, [dispatch, setting, location, routePrivate]);

  return <Component {...props} />;
};

export default memo(AppRoute);
