"use client";

import dynamic from 'next/dynamic';
import { useState } from "react";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import {Input} from "@heroui/input";
import {Link} from "@heroui/link";

const SleepChart = dynamic(() => import('../../components/SleepChart'), {
  ssr: false,
});
const SleepTimelineChart = dynamic(() => import('../../components/SleepTimelineChart'), {
  ssr: false,
});
const HRVChart = dynamic(() => import('../../components/HRVChart'), {
  ssr: false,
});
const RHRChart = dynamic(() => import('../../components/RHRChart'), {
  ssr: false,
});

export default function Home() {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const [isOnProcess, setIsOnProcess] = useState<boolean>(false);

  const handleInputAChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setInputA(value);
      setInputB(value ? (parseFloat(value) * 10 / 100).toFixed(0) : "");
      if (parseFloat((parseFloat(value) * 10 / 100).toFixed(0)) > 0) {
        setIsSubmitDisabled(false);
      } else {
        setIsSubmitDisabled(true);
      }
    }
  };

  const handleSubmit = () => {
    setIsOnProcess(true);
  };

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
        <div className="px-6 md:px-0 max-w-6xl h-full py-8 md:py-20 mx-auto relative">
          <div className="max-w-3xl mb-5">
            <p className="text-2xl font-medium">Your <span className="text-primary font-bold">TURU</span> Points</p>
            <p className="text-1xl mb-4 text-primary">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="mb-2">
            <p className="text-xs text-slate-500 mb-2">Your Points:</p>
            <p className="text-3xl font-bold">4000 <span className="text-primary text-sm">TURU Points</span></p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div>
              <Card className="w-100 h-100 shadow-none">
                <CardHeader className="flex gap-3 pb-0">
                  <div className="flex flex-col text-start">
                    <p className="text-sm font-medium">Points to withdraw</p>
                  </div>
                </CardHeader>
                <CardBody>
                  <Input
                    type="number"
                    label="Insert amount to withdraw"
                    placeholder="0"
                    min={0}
                    value={inputA}
                    onChange={handleInputAChange}
                    labelPlacement="inside"
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">Points</span>
                      </div>
                    }
                  />
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="w-100 shadow-none">
                <CardHeader className="flex gap-3 pb-0">
                  <div className="flex flex-col text-start">
                    <p className="font-medium text-sm">$TRU Amount</p>
                  </div>
                </CardHeader>
                <CardBody>
                  <Input
                    type="number"
                    label="Amount $TRU you will get"
                    placeholder="0"
                    min={0}
                    isReadOnly={true}
                    labelPlacement="inside"
                    value={inputB}
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">$TRU</span>
                      </div>
                    }
                  />
                </CardBody>
              </Card>
            </div>
            <div>
              <Button
                onPress={handleSubmit}
                isDisabled={isSubmitDisabled || isOnProcess}
                fullWidth
                size="md"
                color="primary"
                variant="shadow"
                aria-label="Swap">
                Swap
              </Button>
              <div
                hidden={!isOnProcess}>
                <Card className="w-100 shadow-none mt-4">
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col text-start w-full">
                      <p className="text-md">Action</p>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div className="bg-content2 p-3 rounded-lg flex flex-col gap-3">
                      <div className="flex gap-4 items-center">
                        <div className="p-2 bg-content1 rounded-md px-4 font-bold text-sm">1</div>
                        <p className="mb-0 text-sm min-w-32">Claim $TRU</p>
                        <p className="mb-0 text-sm font-bold">{inputB} <span className="opacity-50">$TRU</span></p>
                        <Button
                          className="ms-auto min-w-24"
                          size="sm"
                          color="primary"
                          variant="shadow">
                          Claim
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mb-10">
            <p className="text-2xl font-medium">Your <span className="text-primary font-bold">TURU</span> Statistics</p>
            <p className="text-1xl mb-4 text-primary">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4">
              <Card className="shadow-sm backdrop-blur-md bg-[rgba(255,255,255,.5)] md:h-full">
                <CardHeader className="px-6">
                  <div className="flex flex-col">
                    <p className="text-md font-medium text-primary">Today Sleep</p>
                    <p className="text-sm text-slate-500">Lorem ipsum dolor sit amet.</p>
                  </div>
                </CardHeader>
                <CardBody className="px-6">
                  <SleepChart />
                </CardBody>
                <CardFooter className="px-6">
                  <Link isExternal showAnchorIcon href="#" className="text-sm">
                    Learn About Your Sleep Type
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="col-span-12 md:col-span-3">
              <Card className="shadow-sm backdrop-blur-md bg-[rgba(255,255,255,.5)] md:h-full">
                <CardBody className="px-6">
                  <div className="flex flex-col mb-6">
                    <p className="text-md font-medium text-primary">You Sleep At</p>
                    <p className="text-sm text-slate-500 mb-2">Lorem ipsum dolor sit amet.</p>
                    <p className="text-4xl font-bold text-slate-600">22.00</p>
                  </div>
                  <div className="flex flex-col mb-6">
                    <p className="text-md font-medium text-primary">You Wake Up At</p>
                    <p className="text-sm text-slate-500 mb-2">Lorem ipsum dolor sit amet.</p>
                    <p className="text-4xl font-bold text-slate-600">06.00</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-md font-medium text-primary">Your Sleep Duration</p>
                    <p className="text-sm text-slate-500 mb-2">Lorem ipsum dolor sit amet.</p>
                    <p className="text-4xl font-bold text-slate-600">8 <span className="font-medium">Hours</span></p>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="col-span-12 md:col-span-5">
              <Card className="shadow-sm backdrop-blur-md bg-[rgba(255,255,255,.5)] md:h-full">
                <CardHeader className="px-6">
                  <div className="flex flex-col">
                    <p className="text-md font-medium text-primary">Your Sleep Timeline</p>
                    <p className="text-sm text-slate-500">Lorem ipsum dolor sit amet.</p>
                  </div>
                </CardHeader>
                <CardBody className="px-6">
                  <SleepTimelineChart />
                </CardBody>
              </Card>
            </div>
            <div className="col-span-12 md:col-span-6">
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
                    Learn What HRV Is
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="col-span-12 md:col-span-6">
              <Card className="shadow-sm backdrop-blur-md bg-[rgba(255,255,255,.5)] md:h-full">
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
                    Learn What RHR Is
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
