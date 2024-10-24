import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Certificates from "./components/Certificates";
import Protected_Component from "./components/Admin_Components/Protected_Component";
import Admin_Main from "./components/Admin_Components/Admin_Main";
import Admin_Authentication from "./components/Admin_Components/Admin_Authentication";
import AllBlogs from "./components/Admin_Components/Blogs/AllBlogs";
import AllProjects from "./components/Admin_Components/Projects/AllProjects";
import AllCertificates from "./components/Admin_Components/Certificates/AllCertificates";
import AddContent from "./components/Admin_Components/AddContent";
import Deletebox from "./components/Admin_Components/DeleteBox";

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
            <Route
              path="/admin_authentication"
              element={<Admin_Authentication />}
            />
            <Route
              path="/adminpanel"
              element={<Protected_Component Component={Admin_Main} />}
            >
              <Route index element={<AllBlogs />} />
              <Route path="/adminpanel/projects" element={<AllProjects />} />
              <Route
                path="/adminpanel/certificates"
                element={<AllCertificates />}
              />
              <Route path="/adminpanel/:item/edit/:id" element={< AddContent/>} />
              <Route path="/adminpanel/:item/delete/:id" element={< Deletebox/>} />

            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Main/> */}
    </>
  );
}

export default App;
