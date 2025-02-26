"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Tooltip } from "@heroui/tooltip";
import clsx from "clsx";

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from "wagmi";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const { isConnected, address } = useAccount();

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              alt="turu"
              className="w-full object-cover h-[40px]"
              radius="none"
              src="/logo-2.png"
            />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-10">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium font-medium",
                )}
                color="foreground"
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
        <NavbarItem className="hidden md:flex">
          {!isConnected && <Tooltip color="danger" content="You must connect wallet first">
            <div>
              <Button
                as={Link}
                className="text-sm font-normal me-2"
                href="#"
                isDisabled={!isConnected}
                variant="shadow"
                color="primary"
              >
                Connect Smartwatch
              </Button>
            </div>
          </Tooltip>
          }
          {
            isConnected && <Button
              as={Link}
              className="text-sm font-normal me-2"
              href="#"
              isDisabled={!isConnected}
              variant="shadow"
              color="primary"
            >
              Connect Smartwatch
            </Button>
          }
          <ConnectButton accountStatus="avatar" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link href={item.href}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
