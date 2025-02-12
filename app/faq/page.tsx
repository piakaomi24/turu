"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

export default function Home() {
  const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

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
            <p className="text-2xl font-medium">Pertanyaan yang Sering Diajukan (FAQ)</p>
          </div>
          <div className="max-w-3xl">
            <Accordion variant="splitted">
              <AccordionItem key="1" aria-label="Accordion 1" title="Apa itu Turu?" className="font-medium">
                <div className="text-slate-500 text-sm">
                  <p>Turu adalah platform Web3 yang memberi Anda imbalan hanya dengan tidur yang cukup dan berkualitas. Dengan membeli NFT, Anda dapat mulai mendapatkan reward setiap malam saat Anda tidur.</p>
                </div>
              </AccordionItem>
              <AccordionItem key="2" aria-label="Accordion 1" title="Bagaimana cara kerja Turu?" className="font-medium">
                <div className="text-slate-500 text-sm">
                  <p>Setelah membeli NFT, Anda hanya perlu tidur dengan cukup dan membiarkan aplikasi Turu melacak durasi serta kualitas tidur Anda. Semakin baik tidur Anda, semakin banyak imbalan yang Anda dapatkan!</p>
                </div>
              </AccordionItem>
              <AccordionItem key="3" aria-label="Accordion 1" title="Apakah saya perlu memiliki NFT untuk mendapatkan imbalan?" className="font-medium">
                <div className="text-slate-500 text-sm">
                  <p>Ya, memiliki NFT adalah syarat utama untuk bisa mengakses sistem reward di Turu. NFT ini berfungsi sebagai tiket masuk ke ekosistem imbalan berbasis blockchain kami.</p>
                </div>
              </AccordionItem>
              <AccordionItem key="4" aria-label="Accordion 1" title="Apa saja jenis imbalan yang bisa saya dapatkan?" className="font-medium">
                <div className="text-slate-500 text-sm">
                  <p>Anda bisa mendapatkan token kripto, NFT tambahan, akses ke fitur eksklusif, serta berbagai keuntungan lainnya sesuai dengan tingkat kualitas tidur Anda.</p>
                </div>
              </AccordionItem>
              <AccordionItem key="5" aria-label="Accordion 1" title="Bagaimana cara membeli NFT di Turu?" className="font-medium">
                <div className="text-slate-500 text-sm">
                  <p>Anda bisa membeli NFT langsung melalui halaman [Shop] di website kami menggunakan mata uang kripto yang didukung. Cukup hubungkan wallet Anda dan lakukan pembelian dengan mudah.</p>
                </div>
              </AccordionItem>
              <AccordionItem key="6" aria-label="Accordion 1" title="Apakah aplikasi Turu mendukung semua jenis perangkat?" className="font-medium">
                <div className="text-slate-500 text-sm">
                  <p>Saat ini, Turu tersedia untuk perangkat iOS dan Android, serta dapat diakses melalui browser untuk memantau progress Anda.</p>
                </div>
              </AccordionItem>
              <AccordionItem key="7" aria-label="Accordion 1" title="Apakah data tidur saya aman?" className="font-medium">
                <div className="text-slate-500 text-sm">
                  <p>Keamanan adalah prioritas kami. Semua data tidur Anda dienkripsi dan hanya digunakan untuk melacak progres serta menghitung reward Anda. Kami tidak membagikan data Anda kepada pihak ketiga.</p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
