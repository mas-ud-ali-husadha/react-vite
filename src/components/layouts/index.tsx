import { Loading } from "@/components/ui";
import { LAYOUT_TYPE_BLANK, LAYOUT_TYPE_DECKED } from "@/constants/theme";
import { useAppSelector } from "@/hooks/useAppDispatch";
import { lazy, Suspense, memo, useMemo } from "react";

const layouts: Record<string, React.LazyExoticComponent<() => JSX.Element>> = {
  [LAYOUT_TYPE_DECKED]: lazy(() => import("./DeckedLayout")),
  [LAYOUT_TYPE_BLANK]: lazy(() => import("./BlankLayout")),
};

const Layout = () => {
  const layoutType = useAppSelector((state) => state.theme.layout.type);

  const AppLayout = useMemo(() => {
    if (layoutType) return layouts[layoutType];
    return layouts[LAYOUT_TYPE_BLANK]
  }, [layoutType]);

  return (
    <Suspense fallback={<Loading />}>
      <AppLayout />
    </Suspense>
  );
};

export default memo(Layout);
