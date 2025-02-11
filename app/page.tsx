"use client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Card, CardBody, CardFooter, Image, Button, Alert } from "@heroui/react";

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
                  <span className="text-primary font-medium">Selamat datang di Turu</span> - platform Web3 yang memberi imbalan untuk tidur yang tercukupi. Tidur yang berkualitas bukan hanya meningkatkan produktivitas, tetapi juga kesehatan mental dan fisik Anda. Bergabunglah dengan kami untuk mendapatkan manfaat tidur yang lebih baik dan imbalan eksklusif melalui NFT!
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

      <section className="relative overflow-visible z-10">
        <div className="absolute top-0 h-full w-full bg-white">
          <div className="absolute left-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary opacity-20 blur-[80px]"></div>
          <div className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-y-[200px] rounded-full bg-primary opacity-20 blur-[80px]"></div>
        </div>
        <div className="max-w-6xl h-full py-8 md:py-10 mx-auto relative">
          <div className="grid grid-cols-2">
            <div className="max-w-3xl mb-10">
              <p className="text-2xl font-medium"><span className="text-primary font-bold">TURU</span> NFT Marketplace</p>
              <p className="text-1xl mb-4 text-primary">Dapatkan NFT Eksklusif & Mulai Menghasilkan Imbalan dari Tidur Anda</p>
            </div>
            <div className="flex justify-end">
              <Link href="shop">Lihat Lainnya</Link>
            </div>
          </div>
          <div className="gap-4 grid grid-cols-2 sm:grid-cols-5 w-full">
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
        <div className="max-w-6xl h-full py-8 md:py-10 mx-auto relative">
          <div className="grid grid-cols-12">
            <div className="flex flex-col justify-center col-span-6">
              <p className="text-2xl font-medium mb-4">Selamat Datang di Turu - Better Sleep, Better Life!</p>
              <p className="text-sm mb-4">Tidur yang cukup bukan hanya kebutuhan, tetapi juga investasi untuk kesehatan dan produktivitas Anda. Di Turu, kami membawa pengalaman tidur ke level baru dengan teknologi Web3. Dapatkan imbalan hanya dengan tidur yang cukup dan nikmati manfaat tidur berkualitas setiap malam!</p>
              {/* <div key="primary1" className="w-full flex items-center my-3">
                <Alert hideIcon color="primary" title="Step 1 - Beli NFT Untuk Mulai" description="Beli NFT Anda untuk memulai perjalanan tidur yang lebih baik" />
              </div>
              <div key="primary2" className="w-full flex items-center my-3">
                <Alert hideIcon color="primary" title="Step 2 - Tidur Dengan Baik" description="Tidur dengan cukup dan biarkan sistem bekerja untuk Anda" />
              </div>
              <div key="primary3" className="w-full flex items-center my-3">
                <Alert hideIcon color="primary" title="Step 3 - Dapatkan Imbalan" description=" Dapatkan imbalan karena tubuh dan pikiran Anda beristirahat dengan optimal" />
              </div> */}
              <p className="text-sm mb-4 mt-5 font-bold text-primary">Siap untuk tidur lebih nyenyak dan mendapatkan imbalan?</p>
              <Button color="primary" variant="shadow" className="px-10 w-fit">Gabung Sekarang</Button>
            </div>
            <div className="flex items-center col-span-5 col-start-8">
              <Image
                alt="turu"
                className="w-full"
                radius="lg"
                src="/images/illustration-1.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
