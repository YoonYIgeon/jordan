"use client";

import ArrowBottom from "@/ui/svg/arrow_bottom.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { VideoDialog } from "./video-dialog";
import { Button } from "./button";
import { ApplicateWorkshop } from "./applicate-workshop";

const Thumbnail = ({ src }: { src: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="aspect-[0.64]">
        <Image
          onClick={() => setOpen(true)}
          src={src}
          alt="video"
          className="w-full h-full object-cover"
          width={240}
          height={374}
        />
      </div>
      <VideoDialog open={open} onClose={() => setOpen(false)}>
        <div className="aspect-[320/498]">
          <Image
            src={src}
            alt="video"
            className="w-full h-full object-cover"
            width={320}
            height={498}
          />
        </div>
      </VideoDialog>
    </>
  );
};

export default function Videos() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      window.scrollBy({ top: 300, left: 0, behavior: "smooth" });
    }
  }, [open]);

  return (
    <>
      <button onClick={() => setOpen(!open)}>
        <ArrowBottom className="size-4 mx-auto" />
      </button>
      {open && (
        <>
          <div className="-mx-3 grid grid-cols-3">
            {Array.from({ length: 21 }).map((_, index) => {
              const src = `https://picsum.photos/id/${index + 500}/300/400`;
              return <Thumbnail src={src} key={index} />;
            })}
          </div>
          <ApplicateWorkshop />
        </>
      )}
    </>
  );
}
