"use client";

import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
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
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
          </Snippet>
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
