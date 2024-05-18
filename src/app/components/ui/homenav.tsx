import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { AcmeLogo } from "../../AcmeLogo.jsx";
import { Link } from "@nextui-org/link";

export function NavHome() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Gallery", link: "/Gallery" },
    { name: "About Us", link: "/AboutUs" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="z-10"
      
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">NTB</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">NTB</p>
        </NavbarBrand>
        {menuItems.map((menuItem, index) => (
          <NavbarItem key={index} isActive={index === 0}>
            <Link color="foreground" href={menuItem.link}>
              {menuItem.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarMenu>
        {menuItems.map((menuItem, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="w-full"
              color={
                "foreground"
              }
              href={menuItem.link}
              size="lg"
            >
              {menuItem.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
