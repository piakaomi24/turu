"use client";

import { useState } from "react";
import { Chip } from "@heroui/chip";
import { Select, SelectItem } from "@heroui/select";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";

export default function Home() {
  const [sortOrder, setSortOrder] = useState("asc");
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();

  const list = [
    {
      title: "Supreme Bed",
      img: "/images/nft1.jpg",
      price: 0.1,
      type: "Common",
      benefit: "Multiply rewards by 1.2x",
    },
    {
      title: "Supreme Pillow",
      img: "/images/nft2.jpg",
      price: 0.2,
      type: "Rare",
      benefit: "Multiply rewards by 1.5x",
    },
    {
      title: "Cozy Bed",
      img: "/images/nft3.jpg",
      price: 0.3,
      type: "Epic",
      benefit: "Multiply rewards by 2x",
    },
    {
      title: "Starry Pillow",
      img: "/images/nft4.jpg",
      price: 0.4,
      type: "Legend",
      benefit: "Multiply rewards by 3x",
    },
    {
      title: "Mossy Pillow",
      img: "/images/nft5.jpg",
      price: 0.5,
      type: "Common",
      benefit: "Multiply rewards by 1.2x",
    },
    {
      title: "Fuzzy Sleepmask",
      img: "/images/nft6.jpg",
      price: 0.1,
      type: "Rare",
      benefit: "Multiply rewards by 1.5x",
    },
    {
      title: "Happy Sleepmask",
      img: "/images/nft7.jpg",
      price: 0.2,
      type: "Epic",
      benefit: "Multiply rewards by 2x",
    },
    {
      title: "Soft Sleepmask",
      img: "/images/nft8.jpg",
      price: 0.3,
      type: "Legend",
      benefit: "Multiply rewards by 3x",
    },
  ];

  const sortedList = [...list].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  const handleSuccess = () => {
    modal1.onClose();
    modal2.onOpen();
  };

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
                <CardBody className="overflow-visible p-0 relative">
                  <Image
                    alt={item.title}
                    className="w-full object-cover"
                    radius="lg"
                    shadow="sm"
                    src={item.img}
                    width="100%"
                  />
                  {
                    item.type == "Common" && <Chip size="sm" className="mb-2 absolute top-2 left-2 z-10 px-4">Common</Chip>
                  }
                  {
                    item.type == "Rare" && <Chip size="sm" color="primary" className="mb-2 absolute top-2 left-2 z-10 px-4">Rare</Chip>
                  }
                  {
                    item.type == "Epic" && <Chip size="sm" color="secondary" className="mb-2 absolute top-2 left-2 z-10 px-4">Epic</Chip>
                  }
                  {
                    item.type == "Legend" && <Chip size="sm" color="danger" className="mb-2 absolute top-2 left-2 z-10 px-4">Legend</Chip>
                  }
                </CardBody>
                <CardFooter className="text-small flex-col items-start">
                  <div className="flex justify-between w-full">
                    <b>{item.title}</b>
                    <p className="text-default-500">{item.price}ETH</p>
                  </div>
                  <div className="flex justify-between mb-2 w-full">
                    {
                      item.type == "Common" && <p className="text-xs text-default-500">{item.benefit}</p>
                    }
                    {
                      item.type == "Rare" && <p className="text-xs text-primary">{item.benefit}</p>
                    }
                    {
                      item.type == "Epic" && <p className="text-xs text-secondary">{item.benefit}</p>
                    }
                    {
                      item.type == "Legend" && <p className="text-xs text-danger">{item.benefit}</p>
                    }
                  </div>
                  <Button color="primary" variant="shadow" size="sm" fullWidth onPress={modal1.onOpen}>
                    Buy NFT
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section >

      <Modal backdrop="blur" isOpen={modal1.isOpen} onOpenChange={modal1.onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Confirm Your Purchase</ModalHeader>
              <ModalBody>
                <p>Are you sure you want to purchase this NFT? Once confirmed, the transaction will be processed, and the NFT will be added to your wallet.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={handleSuccess}>
                  Confirm Purchase
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal backdrop="blur" isOpen={modal2.isOpen} onOpenChange={modal2.onOpenChange}>
        <ModalContent>
          {(onClose2) => (
            <>
              <ModalHeader className="flex flex-col gap-1">NFT Purchase Successful!</ModalHeader>
              <ModalBody>
                <p>Congratulations! You have successfully purchased [NFT Name]. Your NFT has been added to your wallet, and you can now start earning rewards while you sleep.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose2}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose2}>
                  View My NFTs
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div >
  );
}
