import { cn } from "../utils/cn";

export interface HeaderProps {
  title: string;
  textColorClassName: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  textColorClassName,
  className,
}) => {
  return (
    <header className={cn(className)}>
      <span
        className={cn(
          "font-extralight text-5xl isolate relative whitespace-nowrap ",
          "after:content-[''] after:absolute",
          `after:-bottom-1 after:left-4 after:w-full after:h-[70%] ${textColorClassName}`
        )}
      >
        # {title}
      </span>
    </header>
  );
};

export default Header;
