"use client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Alert } from "@heroui/react";

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
  ];

  const tech = [
    {
      title: "Typescript",
      img: "/images/techstack/typescript.png",
    },
    {
      title: "Javascript",
      img: "/images/techstack/javascript.png",
    },
    {
      title: "Tenderly",
      img: "/images/techstack/tenderly.png",
    },
    {
      title: "Solidity",
      img: "/images/techstack/solidity.png",
    },
    {
      title: "Next.js",
      img: "/images/techstack/nextjs.png",
    },
    {
      title: "Swift",
      img: "/images/techstack/swift.png",
    },
    {
      title: "SwiftUI",
      img: "/images/techstack/swiftui.png",
    },
    {
      title: "Rainbow Kit",
      img: "/images/techstack/rainbowkit.png",
    },
    {
      title: "Tailwind",
      img: "/images/techstack/tailwind.png",
    },
    {
      title: "Wagmi",
      img: "/images/techstack/wagmi.png",
    },
  ];

  return (
    <div>
      <section className="relative">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,rgba(38,103,255,.05)_2px,transparent_2px),linear-gradient(to_bottom,rgba(38,103,255,.05)_2px,transparent_2px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="container h-[100%] flex flex-col items-center justify-center gap-4 py-8 md:py-10 mx-auto">
          <div className="gap-2 grid grid-cols-8 w-full">
            <div className="col-span-8 md:col-span-4 md:col-start-3 px-8 md:px-0">
              <div className="text-center justify-center">
                <div className="flex justify-center mb-6">
                  <Image
                    alt="turu"
                    className="object-cover h-[90px] md:h-[120px]"
                    radius="none"
                    src="/logo-2.png"
                    isBlurred
                  />
                </div>
                <div className="mt-4 text-sm text-slate-500">
                  <span className="text-primary font-medium">Welcome to Turu</span> - A Web3 platform that rewards you for getting sufficient sleep. Quality sleep not only boosts productivity but also improves your mental and physical health. Join us to enjoy the benefits of better sleep and exclusive rewards through NFTs!
                </div>
              </div>

              <div className="flex gap-3 justify-center mt-5">
                <Link
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "shadow",
                  }) + " px-7"}
                  href="statistics"
                >
                  Bergabung Sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-visible z-10">
        <div className="absolute top-0 h-full w-full bg-white">
          <div className="absolute left-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary opacity-20 blur-[80px]"></div>
          <div className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-y-[200px] rounded-full bg-primary opacity-20 blur-[80px]"></div>
        </div>
        <div className="px-6 md:px-0 max-w-6xl h-full py-8 md:py-20 mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="max-w-3xl mb-6 md:mb-10">
              <p className="text-2xl font-medium text-center md:text-start"><span className="text-primary font-bold">TURU</span> NFT Marketplace</p>
              <p className="text-1xl text-primary text-center md:text-start">Get Exclusive NFTs & Start Earning Rewards from Your Sleep!</p>
            </div>
            <div className="flex justify-start mb-5 md:mb-0 md:justify-end">
              <Link href="shop">See More NFT</Link>
            </div>
          </div>
          <div className="gap-4 grid grid-cols-1 md:grid-cols-5 w-full">
            {list.map((item, index) => (
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

      <section className="relative overflow-hidden">
        <div className="px-6 md:px-0 max-w-6xl h-full py-8 md:py-20 mx-auto relative">
          <div className="grid grid-cols-12 gap-6">
            <div className="flex flex-col justify-center col-span-12 md:col-span-6">
              <p className="text-2xl font-medium mb-4"><span className="text-primary">Welcome to Turu</span> - Better Sleep, Better Life!</p>
              <p className="text-sm mb-4 text-slate-500">Getting enough sleep is not just a need, but an investment in your health and productivity. At Turu, we take your sleep experience to the next level with Web3 technology. Earn rewards simply by getting enough sleep and enjoy the benefits of quality rest every night!</p>
              <p className="text-sm mb-4 mt-5 font-bold text-primary">Ready to sleep better and earn rewards?</p>
              <Button color="primary" variant="shadow" className="px-10 w-fit">Join Now</Button>
            </div>
            <div className="flex items-center col-span-12 md:col-span-5 md:col-start-8">
              <Image
                alt="turu"
                className="w-full"
                radius="lg"
                src="/images/illustration-1-edit.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden z-10 bg-primary">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#2667FF_40%,#3B28CC_100%)]"></div>
        <div className="absolute top-0 h-full w-full">
          <div className="absolute left-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#3F8EFC] blur-[80px]"></div>
          <div className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-y-[200px] rounded-full bg-[#3F8EFC] blur-[80px]"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="px-6 md:px-0 max-w-6xl h-full py-8 md:py-24 mx-auto relative">
          <div className="flex justify-center">
            <div className="max-w-2xl mb-14">
              <p className="text-2xl font-medium text-center text-white">Usage of <span className="font-bold">TURU</span></p>
              <p className="text-1xl text-center text-white opacity-75">Start your journey to better sleep and earn real rewards by following these three simple steps:</p>
            </div>
          </div>
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-3 w-full">
            <Card className="py-4 bg-[rgba(255,255,255,.25)]">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-white opacity-75">Step 1</p>
                <h4 className="font-bold text-large text-white">Buy an NFT to Get Started.</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2 px-4">
                <p className="text-white text-sm">Choose an NFT that fits your sleep needs. Each NFT gives you access to premium features and exclusive rewards.</p>
              </CardBody>
            </Card>
            <Card className="py-4 bg-[rgba(255,255,255,.25)]">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-white opacity-75">Step 2</p>
                <h4 className="font-bold text-large text-white">Get Enough Sleep.</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2 px-4">
                <p className="text-white text-sm">Use the Turu app to track the quality of your sleep. Getting enough quality sleep opens up opportunities to earn more rewards.</p>
              </CardBody>
            </Card>
            <Card className="py-4 bg-[rgba(255,255,255,.25)]">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-white opacity-75">Step 3</p>
                <h4 className="font-bold text-large text-white">Earn Rewards.</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2 px-4">
                <p className="text-white text-sm">The better the quality of your sleep, the more rewards you can earn, including additional NFTs and other exclusive features.</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,rgba(38,103,255,.05)_2px,transparent_2px),linear-gradient(to_bottom,rgba(38,103,255,.05)_2px,transparent_2px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="container h-[100%] flex flex-col items-center justify-center gap-4 py-8 md:py-20 md:pb-0 mx-auto">
          <div className="gap-2 grid grid-cols-8 w-full px-6 md:px-0">
            <div className="col-span-8 md:col-span-4 md:col-start-3">
              <div className="text-center justify-center">
                <p className="text-2xl font-medium mb-2 text-center">It's Time for Quality Sleep <span className="text-primary">and Earning Rewards!</span></p>
                <div className="text-sm text-slate-500 mb-5">
                  Take the first step towards better sleep and earn rewards with every restful night!
                </div>
                <div className="flex gap-3 justify-center mb-10">
                  <Link
                    className={buttonStyles({
                      color: "primary",
                      radius: "full",
                      variant: "shadow",
                    }) + " px-7"}
                    href="statistics"
                  >
                    Join and Get Your NFT!
                  </Link>
                </div>
                <div className="flex justify-center mb-6">
                  <Image
                    alt="turu"
                    className="object-cover w-full md:w-auto md:h-[200px]"
                    radius="none"
                    src="/images/turu-cta.png"
                    isBlurred
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#FFF_40%,rgba(38,103,255,.5)_100%)]"></div>
        <div className="absolute top-0 h-full w-full">
          <div className="absolute left-0 top-0 h-[200px] w-[200px] -translate-x-[30%] translate-y-[50%] rounded-full bg-[#3F8EFC] blur-[80px] opacity-20"></div>
          <div className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-y-[200px] rounded-full bg-[#3F8EFC] blur-[80px] opacity-20"></div>
        </div>
        <div className="max-w-6xl h-full py-8 md:py-24 md:pb-44 mx-auto relative">
          <p className="text-2xl font-medium mb-4 text-center"><span className="text-primary">TURU</span> Techstack</p>
          <div className="gap-4 flex flex-wrap w-full justify-center">
            {tech.map((item, index) => (
              <div key={index} className="p-4 opacity-30 hover:opacity-100 grayscale hover:grayscale-0 transition-all">
                <Image
                  alt={item.title}
                  isBlurred
                  className="w-full object-contain h-[30px] md:h-[50px]"
                  src={item.img}
                  width="150px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
