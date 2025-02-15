"use client";

import { useState } from "react";
import { Card, CardBody, CardFooter, Image, Breadcrumbs, BreadcrumbItem, Button, Select, SelectItem } from "@heroui/react";

export default function Home() {
  const [sortOrder, setSortOrder] = useState("asc");

  const list = [
    {
      title: "Supreme Bed",
      img: "/images/nft1.jpg",
      price: 0.1,
    },
    {
      title: "Supreme Pillow",
      img: "/images/nft2.jpg",
      price: 0.2,
    },
    {
      title: "Cozy Bed",
      img: "/images/nft3.jpg",
      price: 0.3,
    },
    {
      title: "Starry Pillow",
      img: "/images/nft4.jpg",
      price: 0.4,
    },
    {
      title: "Mossy Pillow",
      img: "/images/nft5.jpg",
      price: 0.5,
    },
    {
      title: "Fuzzy Sleepmask",
      img: "/images/nft6.jpg",
      price: 0.1,
    },
    {
      title: "Happy Sleepmask",
      img: "/images/nft7.jpg",
      price: 0.2,
    },
    {
      title: "Soft Sleepmask",
      img: "/images/nft8.jpg",
      price: 0.3,
    },
  ];

  const sortedList = [...list].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

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
        <div className="px-6 md:px-0 max-w-6xl h-full py-8 md:py-20 mx-auto relative">
          <div className="max-w-3xl mb-10">
            <p className="text-2xl font-medium"><span className="text-primary font-bold">TURU</span> NFT Marketplace</p>
            <p className="text-1xl mb-4 text-primary">Get Exclusive NFTs & Start Earning Rewards from Your Sleep!</p>
            <p className="text-slate-500 text-sm">Welcome to the official Turu marketplace! Here, you can purchase NFTs that will grant access to exclusive features and sleep-quality-based rewards. Choose an NFT that fits your sleep style and start your journey towards healthier and more productive sleep!</p>
          </div>
          <div className="mb-4 flex">
            <div className="w-full md:max-w-sm">
              <Select defaultSelectedKeys={["asc"]} onChange={(e) => setSortOrder(e.target.value)} placeholder="Sort by">
                <SelectItem key="asc">Sort by Price: Low to High</SelectItem>
                <SelectItem key="desc">Sort by Price: High to Low</SelectItem>
              </Select>
            </div>
          </div>
          <div className="gap-4 grid grid-cols-1 md:grid-cols-5 w-full">
            {sortedList.map((item, index) => (
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
                    <p className="text-default-500">{item.price}ETH</p>
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
