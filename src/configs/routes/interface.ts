import { LazyExoticComponent } from "react";

export interface RouteConfig {
  key: string;
  path: string;
  component: LazyExoticComponent<() => JSX.Element>;
  authority: never[];
  setting?: {
    layout?: string;
    nopadding?: boolean;
  };
}
