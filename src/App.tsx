import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { cn } from "./utils/cn";
import WorkDialog from "./components/WorkDialog";
import { useTouchDevice } from "./hooks/useTouchDevice";
import type { Work } from "./types/Work";
import Works from "./components/Works";
import SkillGroup from "./components/SkillGroup";
import { tagCategories } from "./types/Tag";

function App() {
  const [displayingWork, setDisplayingWork] = useState<Work | null>(null);
  const isWorkDialogOpen = displayingWork !== null;
  const handleWorkClick = (work: Work) => {
    setDisplayingWork(work);
  };
  const setIsWorkDialogOpen = (isOpen: boolean) => {
    if (!isOpen) {
      setDisplayingWork(null);
    }
  };
  const isTouchDevice = useTouchDevice();

  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <img
        src="/two-ball.svg"
        alt="Background with two balls"
        className={cn(
          "absolute right-[-1vw] pointer-events-none",
          `top-[350px]`,
          isTouchDevice ? "fixed" : "absolute"
        )}
      />
      <main className="relative container 2xl:max-w-[1280px] mx-auto px-4 overflow-x-hidden">
        <hgroup className="my-[175px]">
          <h1 className="text-6xl font-extralight hidden sm:block">
            Hi, I am Isaac Wu.
          </h1>
          <h1 className="text-5xl font-semibold sm:hidden">Hi, Isaac here.</h1>
          <p className="text-xl font-extralight mt-7 ">
            I am a full-stack software engineer. I create mobile apps and
            websites.
          </p>
          <p className="text-xl font-extralight mt-2 sm:mt-1 ">
            I like gaming with my friends, floating on the sea, and going on an
            adventure.
          </p>
        </hgroup>
        <Works handleWorkClick={handleWorkClick} />
        <div id="skills" className="py-5 scroll-m-15">
          <Header
            title="Skills"
            textColorClassName="after:bg-green/15"
            className="pb-6 scroll-m-15"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Object.keys(tagCategories).map((category) => (
              <SkillGroup key={category} category={category} />
            ))}
          </div>
        </div>
        <div id="contact" className="py-5">
          <Header
            title="Contact"
            textColorClassName="after:bg-blue/10"
            className="pb-6 scroll-m-15"
          />
          <p className="text-lg font-extralight">
            Feel free to reach out to me via{" "}
            <a
              href="mailto:isaachkwu@gmail.com"
              className="text-blue-500 hover:underline"
            >
              email
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/isaachkwu"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
            , or{" "}
            <a
              href="https://github.com/isaachkwu"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </main>
      <footer className="bg-gray-100 py-5 text-center">
        <p className="text-sm text-gray-600">Have a nice day!</p>
      </footer>
      <WorkDialog
        isOpen={isWorkDialogOpen}
        onOpenChange={setIsWorkDialogOpen}
        work={displayingWork}
      />
    </div>
  );
}

export default App;
