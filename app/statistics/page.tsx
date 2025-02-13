"use client";

import { Card, CardHeader, CardBody, CardFooter, Link } from "@heroui/react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import SleepChart from "@/components/SleepChart";
import HRVChart from "@/components/HRVChart";
import RHRChart from "@/components/RHRChart";

export default function Home() {
  return (
    <div>
      <section className="bg-slate-100">
        <div className="container h-full flex justify-center py-4 md:py-4 mx-auto">
          <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Statistics</BreadcrumbItem>
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
            <p className="text-2xl font-medium">Statistics <span className="text-primary font-bold">TURU</span> Anda</p>
            <p className="text-1xl mb-4 text-primary">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <Card className="shadow-sm backdrop-blur-md bg-[rgba(255,255,255,.5)] h-full">
                <CardHeader className="px-6">
                  <div className="flex flex-col">
                    <p className="text-md font-medium text-primary">Tidur Anda Hari Ini</p>
                    <p className="text-sm text-slate-500">Lorem ipsum dolor sit amet.</p>
                  </div>
                </CardHeader>
                <CardBody className="px-6">
                  <SleepChart />
                </CardBody>
                <CardFooter className="px-6">
                  <Link isExternal showAnchorIcon href="#" className="text-sm">
                    Pelajari tipe tidur Anda
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="col-span-4">
              <Card className="shadow-sm backdrop-blur-md bg-[rgba(255,255,255,.5)] h-full">
                <CardHeader className="px-6">
                  <div className="flex flex-col">
                    <p className="text-md font-medium text-primary">HRV (Heart Rate Variability)</p>
                    <p className="text-sm text-slate-500">Lorem ipsum dolor sit amet.</p>
                  </div>
                </CardHeader>
                <CardBody className="px-6">
                  <HRVChart />
                </CardBody>
                <CardFooter className="px-6">
                  <Link isExternal showAnchorIcon href="#" className="text-sm">
                    Pelajari apa itu HRV
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="col-span-4">
              <Card className="shadow-sm backdrop-blur-md bg-[rgba(255,255,255,.5)] h-full">
                <CardHeader className="px-6">
                  <div className="flex flex-col">
                    <p className="text-md font-medium text-primary">RHR (Resting Heart Rate)</p>
                    <p className="text-sm text-slate-500">Lorem ipsum dolor sit amet.</p>
                  </div>
                </CardHeader>
                <CardBody className="px-6">
                  <RHRChart />
                </CardBody>
                <CardFooter className="px-6">
                  <Link isExternal showAnchorIcon href="#" className="text-sm">
                    Pelajari apa itu RHR
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
