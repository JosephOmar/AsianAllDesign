"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from 'next/navigation';
import { Link } from 'next-view-transitions'
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { CartOfProducts } from "./CartOfProducts";

const navListMenuItems = [
  {
    title: "BTS",
    description: "Iconos globales, pioneros del K-pop",
    image: '/logos/logo-bts.webp',
    url: '../categorias/bts'
  },
  {
    title: "BLACKPINK",
    description: "Grupo femenino con hits internacionales",
    image: '/logos/logo-black-pink.webp',
    url: '../categorias/black-pink'
  },
  {
    title: "STRAY KIDS",
    description: "Innovadores del sonido experimental",
    image: '/logos/logo-stray-kids.webp',
    url: '../categorias/stray-kids'
  },
  {
    title: "TWICE",
    description: "Grupo femenino con éxitos pegajosos",
    image: '/logos/logo-twice.webp',
    url: '../categorias/twice'
  },
  {
    title: "SEVENTEEN",
    description: "Autoproducidos, grandes en performance",
    image: '/logos/logo-seventeen.webp',
    url: '../categorias/seventeen'
  },
  {
    title: "ATEEZ",
    description: "Energía y performance dinámico",
    image: '/logos/logo-ateez.webp',
    url: '../categorias/ateez'
  },
  {
    title: "NCT 127",
    description: "Versátil y con conceptos innovadores",
    image: '/logos/logo-nct.webp',
    url: '../categorias/nct'
  },
  {
    title: "ITZY",
    description: "Femeninas, con mensaje empoderador",
    image: '/logos/logo-itzy.webp',
    url: '../categorias/itzy'
  },
  {
    title: "NEW JEANS",
    description: "Íconos de la generación actual",
    image: '/logos/logo-new-jeans.webp',
    url: '../categorias/new-jeans'
  },
];

const navListMenuItems2 = [
  {
    title: "ATTACK ON TITAN",
    description: "Humanos luchan contra gigantes",
    image: '/logos/logo-attack-on-titan.webp',
    url: '../categorias/attack-on-titan'
  },
  {
    title: "ONE PIECE",
    description: "Grupo femenino con hits internacionales",
    image: '/logos/logo-one-piece.webp',
    url: '../categorias/one-piece'
  },
  {
    title: "MY HERO ACADEMIA",
    description: "Jóvenes con superpoderes entrenan",
    image: '/logos/logo-my-hero-academia.webp',
    url: '../categorias/my-hero-academia'
  },
  {
    title: "DEMON SLAYER",
    description: "Cazadores luchan contra demonios",
    image: '/logos/logo-demon-slayer.webp',
    url: '../categorias/demon-slayer'
  },
  {
    title: "DEATH NOTE",
    description: "Cuaderno mortal cambia el destino",
    image: '/logos/logo-death-note.webp',
    url: '../categorias/death-note'
  },
  {
    title: "DRAGON BALL Z",
    description: "Guerreros luchan para salvar el mundo",
    image: '/logos/logo-dragon-ball-z.webp',
    url: '../categorias/dragon-ball-z'
  },
  {
    title: "FULLMETAL ALCHEMIST",
    description: "Hermano busca redención con alquimia",
    image: '/logos/logo-fullmetal-alchemist.webp',
    url: '../categorias/fullmetal-alchemist'
  },
  {
    title: "NARUTO",
    description: "Ninja joven con sueños de grandeza",
    image: '/logos/logo-naruto.webp',
    url: '../categorias/naruto'
  },
  {
    title: "SWORD ART ONLINE",
    description: "Jugadores atrapados en un MMO",
    image: '/logos/logo-sword-art-online.webp',
    url: '../categorias/sword-art-online'
  },
];

const NavListMenu= ({menuItems, titleList} : any) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = menuItems.map(
    ({ image, title, description, url } :any, key : any) => (
      <Link href={url} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 w-[48px] h-[48px]">
            <Image src={`${process.env.NEXT_PUBLIC_IMAGES_URL}${image}`} alt="Logo" width={40} height={40}/>
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    ),
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {titleList}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""}`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""}`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  )
};

const NavList = () => {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link
        href={`${process.env.NEXT_PUBLIC_MY_URL}`}
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Link>
      <NavListMenu menuItems={navListMenuItems} titleList="K-pop"/>
      <NavListMenu menuItems={navListMenuItems2} titleList="Animes"/>
      <Typography
        as="a"
        href="/categorias"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Categorias
        </ListItem>
      </Typography>
    </List>
  )
}

const NavbarMain = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();


  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  if (pathname.startsWith('/dashboard')) {
    return null;
  }

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return (
    <div className="sticky w-full mx-auto z-10 top-0 flex justify-center">
    <Navbar className="px-5 sm:px-[25vw] max-w-full py-2 rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div>
          <Link href="/" className="flex justify-center items-center gap-5">
            <Image src="/AsianAllDesign.svg" height={60} width={60}   alt="Logo Asian All Design"  priority></Image>
            <Image src="/AsianAllDesignText.svg" height={60} width={120}  alt="Logo Asian All Design"  priority></Image>
          </Link>
        </div> 
        <div className="hidden lg:block">
          <NavList />
        </div>
        {/* { session?.user ? (
            <div className="hidden gap-2 lg:flex items-center">
              <div>
                Bienvenido {session.user.name}
              </div>
              <Button onClick={() => signOut()} variant="gradient" size="sm">
                Logout
              </Button>
            </div>
          ) : (
            <div className="hidden gap-2 lg:flex items-center">
              <Link
                href="/login"
                className=""
              >
                Login
              </Link>
              <CartOfProducts />
            </div>
          )
        } */}
        <CartOfProducts />
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        {/* <div className="flex w-full flex-nowrap items-center justify-center gap-2 lg:hidden">
          { session?.user ? (
              <div className=" gap-4 flex flex-col items-center ">
                <div>
                  Bienvenido {session.user.name}
                </div>
                <Button onClick={() => signOut()} variant="gradient" size="sm">
                  Logout
                </Button>
              </div>
            ) : (
              <div className=" gap-5 flex items-center text-black">
                <Link
                  href="/login"
                  className="px-2 py-1 rounded-lg border border-black"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-2 py-1 rounded-lg border border-black"
                >
                  Register
                </Link>
              </div>
            )
          }
        </div> */}
      </Collapse>
    </Navbar>
    </div>
  )
}

export default NavbarMain