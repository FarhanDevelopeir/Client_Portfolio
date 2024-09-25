import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Certificates from "./components/Certificates";
import Protected_Component from "./components/Admin_FIles/Protected_Component";
import Admin_component from "./components/Admin_FIles/Admin_component";
import Admin_Authentication from "./components/Admin_FIles/Admin_Authentication";

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
            <Route path="/admin_authentication" element={<Admin_Authentication/>} />
            <Route path="/adminpanel" element={<Protected_Component Component={Admin_component} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Main/> */}
    </>
  );
}

export default App;
