import { ThemeBtn } from "@/features/ThemeBtn";
import { NavBar } from "@/shared/components/NavBar/NavBar";

export const Header = () => {
  return (
    <div className="fixed top-0 inset-x-0 flex justify-between items-center mx-auto">
      <NavBar className="w-1/2" activeItem="Home" items={["Home", "About", "Contact"]} />
      <ThemeBtn />
    </div>
  );
};
