import { HeroBanner } from "./components/hero-banner";
import { Header } from "./components/header";
import { ProjectsContainer } from "./components/projects-container";
import { ArrowHomeButton } from "./components/ui/arrow-home-button";

export default function Home() {

  return (

    <main className="max-w-screen-2xl m-auto">

      <div className="min-h-screen flex flex-col mb-20" id="home-section">
        <Header />
        <div className="flex flex-col grow">
          <HeroBanner />
          <ArrowHomeButton />
        </div>
      </div>

      <div className="min-h-screen pt-10" id="project-section">
        <ProjectsContainer />
      </div>
    </main>



  );
}
