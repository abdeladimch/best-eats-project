import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Error, Login, ProtectedRoute, AuthWrapper } from "./pages";

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
};

export default App;
