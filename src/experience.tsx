import ExperienceCard from "./components/experience_com";
import AnimatedHeading from "./components/animated_heading";
import swiggyLogo from "./assets/Swiggy_logo.svg";
import mpsedcLogo from "./assets/mpsedc.png";

const ExperiencePage = () => {
    return (
        <section className="relative overflow-hidden bg-Background px-6 py-16 sm:px-12 md:px-20 lg:px-28">
            {/* Background ambient glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-purple1/[0.04] blur-[120px]"></div>

            <AnimatedHeading title="Experience" />

            <div className="relative mx-auto mt-12 flex max-w-4xl flex-col">
                <ExperienceCard
                    role="Software Development Engineer"
                    company="Swiggy"
                    location="Bengaluru, India"
                    period="Jun 2024 - Present"
                    logo={swiggyLogo}
                    index={0}
                    bullets={[
                        "Architected Bolt PSLA V3 with distinct evaluation paths, rain-based disabling, and partner eligibility (EatClub), driving order compliance above 81% and rain-order compliance up by 10 percentage points",
                        "Built cart prediction caching (Redis, async writes, configurable TTL) eliminating cart-to-ETA dissonance across place-order calls for millions of daily users",
                        "Shipped 10-Min SLA Range V2 with high-variance flags and DS model integration across all SLTs; proactively caught edge cases degrading 99Stores/No-Rush SLAs",
                        "Implemented cohort-based banner factor modifications across Bolt, Express, IM-share DE flows; built custom Dash Order Transformer for IM/Genie replacing legacy transformer — validated against 1,200+ orders",
                        "Led FC logout prevention enabling DEs to keep earning after hitting limits — contributing to 114K incremental login hrs/week; owned monitoring across 6+ services (12+ Prometheus rules, Grafana dashboards, 50+ PR reviews)",
                        "Shipped 99 Stores PSLA, Express for non-Black users, and Non-Bolt Listing PSLA end-to-end with DS model integrations; delivered urgent Bolt distance change within a day for a critical Friday release",
                    ]}
                />
                <ExperienceCard
                    role="Software Developer Intern"
                    company="MPSeDC"
                    location="Bhopal, India"
                    period="Oct 2023 - May 2024"
                    logo={mpsedcLogo}
                    index={1}
                    isLast={true}
                    description="At MPSeDC, I contributed to the following projects:"
                    projects={[
                        {
                            title: "Government Employees Management System Web (eHRMS)",
                            bullets: [
                                "Collaborated with an 8-member team on an ASP.NET MVC project",
                                "Created new procedures through MS SQL and implemented and connected them in the project using Entity Framework. Also, created RESTful APIs for same",
                                "Enhanced the functionality of the UI with Angular by cleaning up previous code, resulting in a 40% faster load time, while ensuring and maintaining design consistency",
                                "Revamped PDF creation from basic HTML to PDF, which had various limitations and poor quality, to a custom JavaScript solution. This solution generates customized PDFs resulting in improved space efficiency by 50%, page reduction by 60%, with high quality and text selectability while maintaining original design",
                            ],
                        },
                        {
                            title: "Government Employees Management System Flutter App (eHRMS)",
                            bullets: [
                                "Contributed in adding new pages and tabs and also added WebView for their Flutter app",
                            ],
                        },
                        {
                            title: "Internal Employees (MPSeDC Employees) Management Project (HRMS)",
                            bullets: [
                                "Conducted bug fixes across the ASP.NET project",
                            ],
                        },
                    ]}
                />
            </div>
        </section>
    );
};

export default ExperiencePage;
