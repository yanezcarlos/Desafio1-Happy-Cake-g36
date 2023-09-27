import "./App.css";
import { BrowserRouter } from "react-router-dom";

import BarraNav from "./components/BarraNav/BarraNav";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Contacto from "./views/Contacto/Contacto";
import NotFound from "./views/NotFound/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <BarraNav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
