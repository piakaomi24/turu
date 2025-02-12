"use client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import {Button} from "@heroui/react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  const list = [
    {
      title: "Supreme Bed",
      img: "/images/nft1.jpg",
      price: "0.1 ETH",
    },
    {
      title: "Supreme Pillow",
      img: "/images/nft2.jpg",
      price: "0.2 ETH",
    },
    {
      title: "Cozy Bed",
      img: "/images/nft3.jpg",
      price: "0.3 ETH",
    },
    {
      title: "Starry Pillow",
      img: "/images/nft4.jpg",
      price: "0.4 ETH",
    },
    {
      title: "Mossy Pillow",
      img: "/images/nft5.jpg",
      price: "0.5 ETH",
    },
    {
      title: "Fuzzy Sleepmask",
      img: "/images/nft6.jpg",
      price: "0.1 ETH",
    },
    {
      title: "Happy Sleepmask",
      img: "/images/nft7.jpg",
      price: "0.2 ETH",
    },
    {
      title: "Soft Sleepmask",
      img: "/images/nft8.jpg",
      price: "0.3 ETH",
    },
  ];

  return (
    <div>
      <section className="bg-slate-100">
        <div className="container h-full flex justify-center py-4 md:py-4 mx-auto">
          <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Shop</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </section>
      <section className="relative overflow-hidden">
        <div className="absolute top-0 h-full w-full bg-white">
          <div className="absolute left-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary opacity-20 blur-[80px]"></div>
          <div className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-y-[200px] rounded-full bg-primary opacity-20 blur-[80px]"></div>
        </div>
        <div className="max-w-6xl h-full py-8 md:py-20 mx-auto relative">
          <div className="max-w-3xl mb-10">
            <p className="text-2xl font-medium"><span className="text-primary font-bold">TURU</span> NFT Marketplace</p>
            <p className="text-1xl mb-4 text-primary">Dapatkan NFT Eksklusif & Mulai Menghasilkan Imbalan dari Tidur Anda</p>
            <p className="text-slate-500 text-sm">Selamat datang di marketplace resmi Turu! Di sini, Anda bisa membeli NFT yang akan membuka akses ke fitur eksklusif dan imbalan berbasis kualitas tidur. Pilih NFT yang sesuai dengan gaya tidur Anda dan mulai perjalanan menuju tidur yang lebih sehat dan produktif!</p>
          </div>
          <div className="gap-4 grid grid-cols-2 sm:grid-cols-5 w-full">
            {list.map((item, index) => (
              /* eslint-disable no-console */
              <Card key={index}>
                <CardBody className="overflow-visible p-0">
                  <Image
                    alt={item.title}
                    className="w-full object-cover"
                    radius="lg"
                    shadow="sm"
                    src={item.img}
                    width="100%"
                  />
                </CardBody>
                <CardFooter className="text-small flex-col">
                  <div className="flex justify-between mb-2 w-full">
                    <b>{item.title}</b>
                    <p className="text-default-500">{item.price}</p>
                  </div>
                  <Button color="primary" variant="shadow" size="sm" fullWidth>
                    Buy NFT
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
