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
      <div className="">
        <NavBar />
        <section id="1">
          <MainPage />
        </section>
        <div className="overflow-x-auto">
          <section id="2">
            <AboutME />
          </section>
          <section id="3">
            <ProjectPage />
            <ExtraProjectPage />
          </section>
          <section id="4">
            <ContactPage />
          </section>
          <CopyRight />
        </div>
      </div>
    </>
  );
}

export default App;
