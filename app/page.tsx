"use client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  const list = [
    {
      title: "Orange",
      img: "/images/nft1.jpg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/nft2.jpg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/nft3.jpg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/nft4.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/nft5.jpg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/nft6.jpg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/nft7.jpg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/nft8.jpg",
      price: "$12.20",
    },
  ];

  return (
    <div>
      <section>
        <div className="container h-[100%] flex flex-col items-center justify-center gap-4 py-8 md:py-10 mx-auto">
          <div className="gap-2 grid grid-cols-8 w-full">
            <div className="col-span-4 col-start-3  ">
              <div className="text-center justify-center">
                <div className="flex justify-center mb-6">
                  <Image
                    alt="turu"
                    className="object-cover h-[120px]"
                    radius="none"
                    src="/logo-2-glow.png"
                  />
                </div>
                <div className="mt-4 text-sm">
                  Selamat datang di Turu – platform Web3 yang memberi imbalan untuk tidur yang tercukupi. Tidur yang berkualitas bukan hanya meningkatkan produktivitas, tetapi juga kesehatan mental dan fisik Anda. Bergabunglah dengan kami untuk mendapatkan manfaat tidur yang lebih baik dan imbalan eksklusif melalui NFT!
                </div>
              </div>

              <div className="flex gap-3 justify-center mt-5">
                <Link
                  isExternal
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "shadow",
                  })}
                  href={siteConfig.links.docs}
                >
                  Bergabung Sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container h-full flex flex-col items-center justify-center gap-4 py-8 md:py-10 mx-auto">
          <div className="gap-2 grid grid-cols-2 sm:grid-cols-5 w-full">
            {list.map((item, index) => (
              /* eslint-disable no-console */
              <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
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
                <CardFooter className="text-small justify-between">
                  <b>{item.title}</b>
                  <p className="text-default-500">{item.price}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
