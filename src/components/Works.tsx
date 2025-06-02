import { works } from "@/constant/works";
import Header from "@/components/Header";
import { cn } from "@/utils/cn";
import type { Work } from "@/types/Work";

interface WorksProps {
  handleWorkClick: (work: Work) => void;
}

const Works: React.FC<WorksProps> = ({ handleWorkClick }) => {
  const isTouchDevice = true;
  return (
    <div id="works" className="py-5 scroll-m-15">
      <Header
        title="Works"
        textColorClassName="after:bg-red/10"
        className="pb-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work, i) => (
          <div
            data-aos="fade-up"
            key={i}
            className={cn(
              "bg-white rounded-lg shadow border flex flex-col items-stretch overflow-hidden hover:shadow-lg",
              "group cursor-pointer transition-all duration-300",
              isTouchDevice ? "h-70" : "h-35 sm:h-auto sm:aspect-video"
            )}
            onClick={() => handleWorkClick(work)}
          >
            <img
              src={"/" + work.thumbnailImgUrl}
              alt={work.title}
              className={cn(
                "w-full object-cover object-center transition-all duration-500",
                isTouchDevice ? "aspect-video flex-1" : ""
              )}
              style={{ minHeight: 0 }}
            />
            <div className="relative inset-shadow-sm py-1 px-3">
              <div
                className={cn(
                  "flex flex-row justify-between items-baseline",
                  isTouchDevice
                    ? "py-1"
                    : "pt-1 pb-0 group-hover:py-1 trnasition-all duration-500"
                )}
              >
                <h2 className="text-lg font-normal text-slate-900">
                  {work.title}
                </h2>
                {work.company && (
                  <span className="text-sm text-slate-600">
                    @{work.company}
                  </span>
                )}
              </div>
              <p
                className={cn(
                  "text-sm font-light pb-2 flex-1",
                  isTouchDevice
                    ? ""
                    : "opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[70px] transition-all duration-500"
                )}
              >
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
