import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Certificates from "./components/Certificates";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<HeroSection />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Main/> */}
    </>
  );
}

export default App;
