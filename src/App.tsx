import "./App.css";
import AboutME from "./about_me";
import ContactPage from "./contact_me";
import CopyRight from "./copyright";
import ExperiencePage from "./experience";
import ExtraProjectPage from "./extra_projects";
import MainPage from "./main_page";
import NavBar from "./nav_bar";
import ProjectPage from "./projects_page";
import TechnicalSkills from "./technical_skills";
import CurveSeparator from "./components/curve_separator";
function App() {
  return (
    <>
      <div className="">
        <NavBar />
        <section id="1">
          <MainPage />
        </section>
        <CurveSeparator topType="primary" bottomType="secondary" variant="wave" />
        <div className="overflow-x-auto">
          <section id="2">
            <AboutME />
            <TechnicalSkills />
          </section>
          <CurveSeparator topType="secondary" bottomType="primary" variant="slope" />
          <section id="3">
            <ExperiencePage />
          </section>
          <div className="bg-Background">
            <svg viewBox="0 0 1200 80" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none" style={{ height: "80px" }}>
              <path d="M0 40 C300 80 600 0 900 40 C1050 60 1150 30 1200 40" stroke="url(#purpleGrad)" strokeWidth="4" fill="none" strokeLinecap="round" />
              <defs>
                <linearGradient id="purpleGrad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#B41992" />
                  <stop offset="50%" stopColor="#9C12DC" />
                  <stop offset="100%" stopColor="#DD94FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <section id="4">
            <ProjectPage />
            <ExtraProjectPage />
          </section>
          <CurveSeparator topType="primary" bottomType="secondary" variant="wave" />
          <section id="5" className="scroll-mt-20">
            <ContactPage />
          </section>
          <CopyRight />
        </div>
      </div>
    </>
  );
}

export default App;
