import "./App.css";
import AboutME from "./about_me";
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
      </div>
    </>
  );
}

export default App;
