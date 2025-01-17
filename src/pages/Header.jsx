import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-16 fixed top-0 w-full flex items-center justify-between bg-transparent z-50">
      {/* Logo */}
      <Link className="flex items-center justify-center" to="/">
        <span className=" text-xl text-white font-playwrite max-sm:mt-16">
          mỹ tứ
        </span>
      </Link>

      {/* Desktop Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className=" text-white bg-transparent max-sm:mt-16"
          >
            <Menu className="h-6 w-6 z-50" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="w-full h-screen opacity-75 flex flex-col sm:justify-between max-sm:overflow-y-auto"
        >
          <SheetHeader>
            <div className=" flex justify-between">
              <SheetClose asChild>
                <div></div>
              </SheetClose>
              <SheetClose asChild>
                <button className="h-12 w-12 rounded-xl text-white hover:bg-gray-800 justify-center items-center flex">
                  <X className="h-6 w-6" />
                </button>
              </SheetClose>
              <SheetTitle className="sr-only text-white">
                Navigation Menu
              </SheetTitle>
            </div>
          </SheetHeader>

          <div className=" flex max-sm:flex-col justify-center items-center max-sm:min-h-screen gap-8 font-playwrite">
            <SheetClose asChild>
              <Link to="/" className="flex items-center gap-2 max-sm:hidden">
                <span className="text-xl text-white">Mỹ Tứ</span>
              </Link>
            </SheetClose>

            <div className=" border-b w-1/4 border-gray-700 max-sm:hidden"></div>

            <SheetClose asChild>
              <Link to="/" className="flex items-center gap-2">
                <span className="text-xl text-white text-center">
                  Production process
                </span>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/" className="flex items-center gap-2">
                <span className="text-xl text-white">About</span>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/" className="flex items-center gap-2">
                <span className="text-xl text-white">Contact</span>
              </Link>
            </SheetClose>
          </div>

          <div className=" lg:grid lg:grid-cols-4 text-white gap-4 w-full font-roboto flex flex-col">
            <div className=" col-span-1 lg:border-r max-lg:border-b p-4 border-gray-700">
              <h2 className=" font-extrabold">2025</h2>
              <p className=" font-light">Minh Nova</p>
            </div>
            <div className=" col-span-1 lg:border-r max-lg:border-b p-4 border-gray-700">
              <h2 className=" font-extrabold">EMAIL</h2>
              <p className=" font-light">ngquangminh@gmail.com</p>
            </div>
            <div className=" col-span-1 lg:border-r max-lg:border-b p-4 border-gray-700">
              <h2 className=" font-extrabold">MINHNOVA</h2>
              <p className=" font-light">Instagram</p>
              <p className=" font-light">Facebook</p>
            </div>
            <div className=" col-span-1 p-4">
              <h2 className=" font-extrabold">Languages</h2>
              <p className=" font-light">English</p>
              <p className=" font-light">VietNamese</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
