import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import {
  Logo,
  PhoneIcon,
  InstagramIcon,
  WhatsappIcon,
  TelegramIcon,
} from "@/components/icons";

export const Navbar = () => {


  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="bg-default-100">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-primary">تک سرویس کار</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start mr-3">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "primary" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                 )}
                color="primary"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Telegram" href={siteConfig.links.telegram}>
            <TelegramIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Whatsapp" href={siteConfig.links.whatsapp}>
            <WhatsappIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Instagram" href={siteConfig.links.instagram}>
            <InstagramIcon className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="font-bold text-base"
            href={siteConfig.links.sponsor}
            endContent={<PhoneIcon strokeWidth="2"/>}
            variant="ghost"
            color="primary"
          >
            تماس فوری
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        
          <Button
            isExternal
            as={Link}
            className="text-sm"
            href={siteConfig.links.sponsor}
            endContent={<PhoneIcon strokeWidth="1.5"/>}
            variant="ghost"
            color="primary"
            size="sm"
          >
            تماس فوری
          </Button>
        
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
