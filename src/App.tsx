import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./route";
import ProtectedRoute from "./route/ProtectedRoute";
import LazyFallback from "./components/ui/lazyfallback";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LazyFallback />}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.isProtected ? (
                  <ProtectedRoute layout={route.layout}>
                    <route.component />
                  </ProtectedRoute>
                ) : (
                  <route.component />
                )
              }
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
