"use client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import {Button} from "@heroui/react";

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
        <div className="max-w-6xl h-full py-8 md:py-20 mx-auto relative">
        </div>
      </section>
    </div>
  );
}
