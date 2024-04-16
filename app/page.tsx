import { HeroBanner } from "./components/hero-banner";
import { ProjectsContainer } from "./components/projects-container";
import { ArrowHomeButton } from "./components/ui/arrow-home-button";
import { ContactContainer } from "./components/contact-container";

export default function Home() {
  return (

    <main className="max-w-screen-2xl m-auto overflow-hidden flex flex-col gap-5">

      {/* Home section */}
      <div className="min-h-screen mx-5 flex flex-col pb-20" id="home">
        <div className="flex flex-col justify-center gap-14 md:gap-20 grow">
          <HeroBanner />
          <ArrowHomeButton />
        </div>
      </div>

      {/* Projects section */}
      <div className="min-h-screen mb-20" id="projects">
        <ProjectsContainer />
      </div>

      {/* Contact section */}
      <div className="min-h-screen relative" id="contact">
        <ContactContainer />
      </div>

    </main>


  );
}
