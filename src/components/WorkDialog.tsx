import type { Work } from "@/types/Work";
import { type CarouselApi } from "@/components/shadcn/carousel";
import { Dialog, DialogContent, DialogFooter } from "./shadcn/dialog";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
} from "./shadcn/drawer";
import { useTouchDevice } from "@/hooks/useTouchDevice";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./shadcn/carousel";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { Badge } from "./shadcn/badge";
import { getTagColor } from "@/types/Tag";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { Button } from "./shadcn/button";
import { Code, SquareArrowOutUpRight, X } from "lucide-react";

interface WorkDialogProps {
  isOpen: boolean;
  onOpenChange: (b: boolean) => void;
  work: Work | null;
}

const WorkDialog: React.FC<WorkDialogProps> = ({
  isOpen,
  onOpenChange,
  work,
}) => {
  const isTouchDevice = useTouchDevice();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const { height, width } = useWindowDimensions();
  const isScreenHorizontal = width > height;

  const [isScrollOnTop, setIsScrollOnTop] = useState(true);
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.scrollTop < 100) {
      setIsScrollOnTop(true);
    } else {
      setIsScrollOnTop(false);
    }
  };

  const content = work !== null && (
    <div
      className="flex flex-col items-center overflow-y-scroll overflow-x-hidden"
      onScroll={handleScroll}
    >
      <header
        className={cn(
          "sticky top-0 pt-3 px-7 self-start w-full bg-white z-10",
          "transition-all duration-100 ease-in-out",
          isScrollOnTop ? "" : "shadow pb-3"
        )}
      >
        <div className="flex flex-row items-baseline gap-4">
          <h3 className="font-light text-4xl text-gray-900">{work.title}</h3>
          <h4 className="font-light text-gray-600">
            {work.company && `@${work.company}`}
          </h4>
        </div>
      </header>
      <div
        className={cn(
          "px-7 pb-5 self-start w-full bg-white",
          "transition-all duration-100 ease-in-out",
          isScrollOnTop ? "shadow" : "shadow-none"
        )}
      >
        <h5 className={cn("text-sm mt-1 text-gray-600")}>{work.description}</h5>
        <div className="flex flex-row gap-x-2 gap-y-1 mt-2 flex-wrap">
          {work.tags?.map((tag, index) => (
            <Badge
              key={index}
              className={cn(getTagColor(tag))}
              variant="secondary"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <Carousel
        setApi={setApi}
        className={cn(
          isTouchDevice
            ? isScreenHorizontal
              ? "w-[70%]"
              : "w-full"
            : "w-[80%]",
          "mt-4",
          "border"
        )}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {work.imagesUrl?.map((image, index) => (
            <img
              key={index}
              src={"/" + image.imgUrl}
              alt={image.alt}
              className="object-contain object-center aspect-video"
            />
          ))}
        </CarouselContent>
        {!isTouchDevice && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
      <span className="text-gray-600 text-sm self-center mt-2 px-2">
        {work.imagesUrl?.[current - 1]?.alt ?? "Image " + current}{" "}
      </span>
      <div className="flex justify-center items-center gap-2 w-full mt-2">
        {Array.from({ length: work.imagesUrl?.length ?? 0 }).map((_, i) => (
          <span
            key={i}
            className={`rounded-full transition-all duration-200 ${
              i + 1 === current ? "bg-gray-700 w-2 h-2" : "bg-gray-400 w-1 h-1"
            }`}
            style={{ display: "inline-block" }}
          />
        ))}
      </div>
      {work.mainResponsibility && (
        <div className="px-7 py-3 text-gray-700 w-full">
          <h4 className="text-lg font-semibold mb-2">Main Responsibility</h4>
          <ul className="list-disc list-inside text-sm">
            {work.mainResponsibility.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      )}
      {work.detailDescription && (
        <div className="px-7 py-3 text-gray-700 w-full">
          <h4 className="text-lg font-semibold mb-2">Details</h4>
          {work.detailDescription.split("\n").map((line, index) => (
            <p key={index} className="text-sm mb-2">
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  );

  const footer = work !== null && (
    <>
      {work.sourceCodeUrl && (
        <Button asChild variant="outline">
          <a
            href={work.sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code />
            See the source code
          </a>
        </Button>
      )}
      {work.link && (
        <Button asChild>
          <a href={work.link} target="_blank" rel="noopener noreferrer">
            <SquareArrowOutUpRight /> Go to application
          </a>
        </Button>
      )}
    </>
  );

  const myOnOpenChange = (open: boolean) => {
    setIsScrollOnTop(true);
    onOpenChange(open);
  };

  if (work === null) {
    return null; // If no work is provided, return null to avoid rendering
  }
  if (!isTouchDevice) {
    return (
      <Dialog open={isOpen} onOpenChange={myOnOpenChange}>
        <DialogContent className="!w-3xl !max-w-[90vw] !h-[90vh] !max-h-[90vh] !px-0 !py-1 !gap-0">
          {content}
          <DialogFooter className="flex justify-between px-3 pb-2 pt-3 border-t gap-x-3">
            {footer}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  } else {
    return (
      <Drawer open={isOpen} onOpenChange={myOnOpenChange}>
        <DrawerContent className="pb-6">
          {content}
          <DrawerFooter className="border-t">
            <DrawerClose asChild>
              <Button variant="secondary">
                <X />
                Close
              </Button>
            </DrawerClose>
            {footer}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
};

export default WorkDialog;
