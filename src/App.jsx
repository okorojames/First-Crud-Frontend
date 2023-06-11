import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import NewCrud from "./NewCrud";
import Home from "./Home";
import UpdateCrud from "./UpdateCrud";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <main className="container my-5 app__container">
      <Link to="/" className="home__link">
        Home
      </Link>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/new-crud" element={<NewCrud />} />
          <Route exact path="/update-crud/:id" element={<UpdateCrud />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
}

export default App;
