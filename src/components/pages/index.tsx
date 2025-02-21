import { ComponentType, lazy, Suspense } from "react";
import LazyFallback from "../ui/lazyfallback";

const Suspensed = (Element: ComponentType) =>
  function suspense(props: any) {
    return (
      <Suspense fallback={<LazyFallback />}>
        <Element {...props} />
      </Suspense>
    );
  };

export default {
  Homepage: Suspensed(lazy(() => import("./homepage"))),
  Login: Suspensed(lazy(() => import("./login"))),
  Dashboard: Suspensed(lazy(() => import("./dashboard"))),
};
