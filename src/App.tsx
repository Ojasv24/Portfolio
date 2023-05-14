import "./App.css";
import AboutME from "./about_me";
import ContactPage from "./contact_me";
import CopyRight from "./copyright";
import ExtraProjectPage from "./extra_projects";
import MainPage from "./main_page";
import NavBar from "./nav_bar";
import ProjectPage from "./projects_page";
function App() {
  return (
    <>
      <div className="fex">
        <NavBar />
        <MainPage />
        <AboutME />
        <ProjectPage />
        <ExtraProjectPage />
        <ContactPage />
        <CopyRight />
      </div>
    </>
  );
}

export default App;
