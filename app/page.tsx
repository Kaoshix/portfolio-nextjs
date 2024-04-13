import { HeroBanner } from "./components/hero-banner";
import { Header } from "./components/header";
import { ProjectsContainer } from "./components/projects-container";
import { ArrowHomeButton } from "./components/ui/arrow-home-button";

export default function Home() {

  return (

    <main className="max-w-screen-2xl m-auto overflow-hidden flex flex-col gap-5">

      <div className="min-h-screen mx-5 flex flex-col pb-20" id="home">
        <Header />
        <div className="flex flex-col justify-center gap-14 md:gap-20 grow">
          <HeroBanner />
          <div>
            <ArrowHomeButton />
          </div>
        </div>
      </div>

      <div className="min-h-screen" id="projects">
        <ProjectsContainer />
      </div>
    </main>



  );
}
