import { Container, Navbar, Nav, Button, Row, Col, ToastContainer } from 'react-bootstrap';
import ClinicStats from './components/ClinicStats';
import FeatureCard from './components/FeatureCard';
import './App.scss';
import { AuthProvider } from './hooks/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import publicRoutes from './routes/PublicRoutes';
import protectedRoutes from './routes/ProtectedRoutes';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {publicRoutes?.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          <Route
            path="/"
            element={<ProtectedRoute />}
          >
            {protectedRoutes?.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
