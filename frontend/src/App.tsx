import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import AddHotel from "./pages/Add-hotel";
import { useAppContext } from "./contexts/AppContext";

function App() {
  const { isLoggedIn } = useAppContext();
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Home Page</p>
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <p>Search Page</p>
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Layout>
              <Signin />
            </Layout>
          }
        />
        {isLoggedIn && (
          <>
            <Route
              path="/addHotel"
              element={
                <Layout>
                  <AddHotel />
                </Layout>
              }
            />
          </>
        )}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
}

export default App;
