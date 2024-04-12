import { Header } from "./components/header";
import { HeroBanner } from "./components/hero-banner";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen p-5 flex flex-col max-w-screen-2xl m-auto">
        <Header />
        <div className="grow flex items-center">
          <HeroBanner />
        </div>
        <div className="flex rotate-90">
          <div className="relative mx-auto mt-5 animate-[propel_5s_infinite_both] opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="h-12 w-12">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="min-h-screen p-5 flex justify-center">
        <h2 className="text-6xl">About</h2>
      </div>

    </main>
  );
}
