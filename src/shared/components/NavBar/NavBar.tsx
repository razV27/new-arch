'use client'
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

interface INavBarProps {
  items: string[];
  activeItem: string;
  className?: string
}

export const NavBar: React.FC<INavBarProps> = ({ items, activeItem, className }) => {
  return (
    <Navbar className={className}>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {items.map((item) => (
          <NavbarItem isActive={item === activeItem} key={item}>
            <Link color="foreground" href={`/${activeItem.toLowerCase()}`}>
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};
