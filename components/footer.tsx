"use client";

import { Image } from "@heroui/react";
import { Link } from "@heroui/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-primary relative overflow-hidden">
      <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#2667FF_40%,#3B28CC_100%)]"></div>
      <div className="absolute top-0 h-full w-full">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#3F8EFC] blur-[80px]"></div>
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-y-[200px] rounded-full bg-[#3F8EFC] blur-[80px]"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="max-w-6xl h-full py-8 md:py-10 md:pb-20 mx-auto relative">
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-3">
            <Image
              alt="turu"
              className="w-full h-[50px]"
              radius="none"
              src="/logo.png"
            />
          </div>
          <div className="col-span-4">
            <p className="text-2xl text-white mb-6">About</p>
            <p className="text-sm text-white opacity-75 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quo aliquid incidunt sed sint consequatur nesciunt nisi laborum perspiciatis provident.</p>
            <p className="text-sm text-white opacity-75">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quo aliquid incidunt sed sint consequatur nesciunt nisi laborum perspiciatis provident.</p>
          </div>
          <div className="col-span-2 col-start-9">
            <p className="text-2xl text-white mb-6">Navigation</p>
            <ul>
              <li className="pb-1"><Link href="#" className="text-sm text-white opacity-75 hover:opacity-100">Home</Link></li>
              <li className="pb-1"><Link href="#" className="text-sm text-white opacity-75 hover:opacity-100">Shop</Link></li>
              <li className="pb-1"><Link href="#" className="text-sm text-white opacity-75 hover:opacity-100">Statistics</Link></li>
              <li className="pb-1"><Link href="#" className="text-sm text-white opacity-75 hover:opacity-100">How to Earn</Link></li>
              <li className="pb-1"><Link href="#" className="text-sm text-white opacity-75 hover:opacity-100">Whitepaper</Link></li>
              <li className="pb-1"><Link href="#" className="text-sm text-white opacity-75 hover:opacity-100">FAQ</Link></li>
            </ul>
          </div>
          <div className="col-span-2">
            <p className="text-2xl text-white mb-6">Lorem, ipsum.</p>
            <ul>
              <li className="pb-1"><Link href="#" className="text-sm text-white opacity-75 hover:opacity-100">Lorem, ipsum.</Link></li>
              <li className="pb-1"><Link href="#" className="text-sm text-white opacity-75 hover:opacity-100">Lorem, ipsum.</Link></li>
              <li className="pb-1"><Link href="#" className="text-sm text-white opacity-75 hover:opacity-100">Lorem, ipsum.</Link></li>
              <li className="pb-1"><Link href="#" className="text-sm text-white opacity-75 hover:opacity-100">Lorem, ipsum.</Link></li>
              <li className="pb-1"><Link href="#" className="text-sm text-white opacity-75 hover:opacity-100">Lorem, ipsum.</Link></li>
              <li className="pb-1"><Link href="#" className="text-sm text-white opacity-75 hover:opacity-100">Lorem, ipsum.</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
