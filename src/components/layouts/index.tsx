import { Loading } from "@/components/ui";
import { LAYOUT_TYPE_BLANK, LAYOUT_TYPE_DECKED } from "@/constants/theme";
import { useAppSelector } from "@/hooks/useAppDispatch";
import useAuth from "@/hooks/useAuth";
import { lazy, Suspense, memo, useMemo } from "react";

const layouts: Record<string, React.LazyExoticComponent<() => JSX.Element>> = {
  [LAYOUT_TYPE_DECKED]: lazy(() => import("./DeckedLayout")),
  [LAYOUT_TYPE_BLANK]: lazy(() => import("./BlankLayout")),
};

const Layout = () => {
  const { authenticated } = useAuth();
  const layoutType = useAppSelector((state) => state.theme.layout.type);


  const AppLayout = useMemo(() => {
    if (authenticated) {
      if (layoutType) return layouts[layoutType];
    }
    return lazy(() => import("./BlankLayout"));
  }, [layoutType, authenticated]);

  return (
    <Suspense fallback={<Loading />}>
      <AppLayout />
    </Suspense>
  );
};

export default memo(Layout);
