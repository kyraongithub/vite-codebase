import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useMemo } from "react";
import { routes } from "./route";
import ProtectedRoute from "./route/ProtectedRoute";
import LazyFallback from "./components/ui/lazyfallback";
import "./App.css";

function App() {
  const renderRoute = (route: (typeof routes)[number], index: number) => {
    const Component = route.component;

    const element = route.isProtected ? (
      <ProtectedRoute layout={route.layout}>
        <Component />
      </ProtectedRoute>
    ) : (
      <Component />
    );

    return <Route key={index} path={route.path} element={element} />;
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<LazyFallback />}>
        <Routes>{routes.map(renderRoute)}</Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
