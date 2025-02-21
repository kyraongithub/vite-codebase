import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LazyFallback from "./components/ui/lazyfallback";
import { routes } from "./route";
import ProtectedRoute from "./route/ProtectedRoute";

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
