import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import { routes } from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            element={
              item.isProtected ? (
                <ProtectedRoute layout={item.layout}>
                  {item.component}
                </ProtectedRoute>
              ) : (
                item.component
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
