"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

export default function Home() {
  return (
    <div>
      <section className="bg-slate-100">
        <div className="container h-full flex justify-center py-4 md:py-4 mx-auto">
          <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>FAQ</BreadcrumbItem>
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
            <p className="text-2xl font-medium">Frequently Asked Question (FAQ)</p>
          </div>
          <div className="max-w-3xl">
            <Accordion variant="splitted">
              <AccordionItem key="1" aria-label="Accordion 1" title="What is Turu?" className="font-medium">
                <div className="text-slate-500 text-sm">
                  <p>Turu is a Web3 platform that rewards you simply for getting enough and quality sleep. By purchasing an NFT, you can start earning rewards every night as you sleep.</p>
                </div>
              </AccordionItem>
              <AccordionItem key="2" aria-label="Accordion 1" title="How does Turu work?" className="font-medium">
                <div className="text-slate-500 text-sm">
                  <p>After purchasing an NFT, all you need to do is get enough sleep and let the Turu app track the duration and quality of your sleep. The better your sleep, the more rewards you’ll earn!</p>
                </div>
              </AccordionItem>
              <AccordionItem key="3" aria-label="Accordion 1" title="Do I need to own an NFT to earn rewards?" className="font-medium">
                <div className="text-slate-500 text-sm">
                  <p>Yes, owning an NFT is a key requirement to access the reward system on Turu. This NFT acts as your entry ticket to our blockchain-based reward ecosystem.</p>
                </div>
              </AccordionItem>
              <AccordionItem key="4" aria-label="Accordion 1" title="What types of rewards can I earn?" className="font-medium">
                <div className="text-slate-500 text-sm">
                  <p>You can earn cryptocurrency tokens, additional NFTs, access to exclusive features, and various other benefits based on the quality of your sleep.</p>
                </div>
              </AccordionItem>
              <AccordionItem key="5" aria-label="Accordion 1" title="How can I buy an NFT on Turu?" className="font-medium">
                <div className="text-slate-500 text-sm">
                  <p>You can purchase NFTs directly from the [Shop] page on our website using supported cryptocurrencies. Simply connect your wallet and complete your purchase with ease.</p>
                </div>
              </AccordionItem>
              <AccordionItem key="6" aria-label="Accordion 1" title="Does the Turu app support all device types?" className="font-medium">
                <div className="text-slate-500 text-sm">
                  <p>Turu is currently available for iOS and Android devices and can also be accessed through a browser to track your progress.</p>
                </div>
              </AccordionItem>
              <AccordionItem key="7" aria-label="Accordion 1" title="Is my sleep data secure?" className="font-medium">
                <div className="text-slate-500 text-sm">
                  <p>Security is our priority. All your sleep data is encrypted and used only to track your progress and calculate your rewards. We do not share your data with third parties.</p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
