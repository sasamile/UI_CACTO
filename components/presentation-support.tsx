"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";


import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";

interface PresentationSupportProps {
  backgroundColor?: string;
  textColor?: string;
  reverse?: boolean;
  imageSrc: string;
  title: string;
  description: string;
}

export default function PresentationSupport({
  backgroundColor = "#fff",
  textColor = "#000",
  reverse = false,
  title,
  description,
  imageSrc,
}: PresentationSupportProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const maxDescriptionLength = 200; // Limit for visible description characters

  // Truncate description if it exceeds max length
  const truncatedDescription =
    description.length > maxDescriptionLength
      ? `${description.slice(0, maxDescriptionLength)}...`
      : description;

  // Toggle modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <div
        className={cn(
          "flex md:flex-row flex-col justify-center sm:max-w-[1100px] max-w-screen-sm mx-auto text-muted-foreground",
          reverse && "md:flex-row-reverse"
        )}
      >
        <div className="relative w-full md:min-w-[400px] h-[300px]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority={true}
            sizes="(max-width: 768px) 100vw, 400px"
            quality={85}
          />
        </div>
        <div
          className="py-6 lg:px-12 sm:px-8 px-4 md:translate-y-5 shadow-rounded"
          style={{ backgroundColor, color: textColor }}
        >
          <h3 className="text-[26px] font-semibold mb-4">{title}</h3>
          <p className="text-base">
            {truncatedDescription}
            {description.length > maxDescriptionLength && (
              <Button
                variant="link"
                className="p-0 h-auto text-blue-600 hover:underline"
                onClick={toggleModal}
              >
                Ver más
              </Button>
            )}
          </p>
        </div>
      </div>

      {/* Modal for full article */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              {title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div className="relative w-full h-[200px]">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover rounded-md"
                sizes="100vw"
                quality={85}
              />
            </div>
            <p className="text-base leading-relaxed">{description}</p>
          </div>
          <div className="mt-6 text-right">
            <Button onClick={toggleModal}>Cerrar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
