import Home from "./pages/Home";
import "./styles/global.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />



      </Routes>

    </BrowserRouter>
  );
}

