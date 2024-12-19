import { ThemeBtn } from "@/features/ThemeBtn";
import { NavBar } from "@/shared/components/NavBar/NavBar";

export const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      <NavBar className="w-1/2" activeItem="Home" items={["Home", "About", "Contact"]} />
      <ThemeBtn />
    </div>
  );
};
