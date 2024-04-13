import { HeroBanner } from "./components/hero-banner";
import { Header } from "./components/header";
import { ProjectsContainer } from "./components/projects-container";
import { ArrowHomeButton } from "./components/ui/arrow-home-button";

export default function Home() {

  return (

    <main className="max-w-screen-2xl m-auto overflow-hidden flex flex-col gap-5">

      <div className="min-h-screen mx-5 flex flex-col" id="home-section">
        <Header />
        <div className="flex flex-col grow">
          <HeroBanner />
          <div className="min-h-[50px] md:min-h-0">
            <ArrowHomeButton />
          </div>
        </div>
      </div>

      <div className="min-h-screen" id="project-section">
        <ProjectsContainer />
      </div>
    </main>



  );
}
