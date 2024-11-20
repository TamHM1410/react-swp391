
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InternalPage from "./pages/protected/404";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/"   />
          <Route path="*"   element={<InternalPage/>} />

        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
