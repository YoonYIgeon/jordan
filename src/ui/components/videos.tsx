"use client";

import ArrowBottom from "@/ui/svg/arrow_bottom.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

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
        <div className="-mx-3 grid grid-cols-3">
          {Array.from({ length: 21 }).map((_, index) => {
            const src = `https://picsum.photos/id/${index + 500}/300/400`;
            return (
              <div className="aspect-[0.64]" key={index}>
                <Image
                  src={src}
                  alt="video"
                  className="w-full h-full object-cover"
                  width={240}
                  height={374}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
