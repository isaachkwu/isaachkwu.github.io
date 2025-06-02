import { tagCategories } from "@/types/Tag";
import { cn } from "@/utils/cn";
import { Button } from "@/components/shadcn/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Badge } from "./shadcn/badge";

interface SkillGroupProps {
  category: keyof typeof tagCategories;
}

const SkillGroup: React.FC<SkillGroupProps> = ({ category }) => {
  const isSmallScreen =
    typeof window !== "undefined" && window.innerWidth < 640;
  const [isExpanded, setIsExpanded] = useState(!isSmallScreen);
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div
      key={category}
      className={cn(
        "w-full rounded-xl py-3 px-4 border-2 shadow bg-white",
        isExpanded ? "h-auto" : "h-min",
        tagCategories[category].borderColor
      )}
    >
      <div
        className="flex flex-row justify-between items-center"
        onClick={handleToggle}
      >
        <h5 className="text-lg font-light">
          {tagCategories[category].tagCategory}
        </h5>
        <Button variant="ghost" size="icon" className="text-gray-600">
          {isExpanded ? <Minus /> : <Plus />}
        </Button>
      </div>
      <div
        className={cn(
          isExpanded
            ? "max-h-100 opacity-100 my-2"
            : "max-h-0 overflow-hidden opacity-0 mt-0",
          "transition-all duration-300 ease-in-out",
          "flex flex-row flex-wrap gap-2"
        )}
      >
        {tagCategories[category].tags.map((tag) => {
          if (tag === "AWS") {
            return (
              <a
                href="https://www.credly.com/badges/5004d3cb-467a-4322-ba94-2995fe315fe8/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                key={tag}
              >
                <Badge
                  className={cn(
                    "text-xs",
                    tagCategories[category].color,
                    "hover:opacity-60 transition-opacity duration-200"
                  )}
                  variant="secondary"
                >
                  AWS(Solution Architect Associate)
                </Badge>
              </a>
            );
          }
          return (
            <Badge
              className={cn("text-xs", tagCategories[category].color)}
              variant="secondary"
            >
              {tag}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};

export default SkillGroup;
