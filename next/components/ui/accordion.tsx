"use client";

import { useId, useState } from "react";
import ChevronDownIcon from "@/components/icons/chevron-down";
import type { AccordionItem } from "@/types/ui/accordion";

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const uid = useId();

  return (
    <div>
      {items.map((item, index) => {
        const open = item.id === openId;
        const headerId = `${uid}-${item.id}-header`;
        const panelId = `${uid}-${item.id}-panel`;

        return (
          <div key={item.id} className={index === items.length - 1 ? undefined : "mb-9.5"}>
            <h3>
              <button
                id={headerId}
                type="button"
                onClick={() => setOpenId(open ? null : item.id)}
                aria-expanded={open}
                aria-controls={panelId}
                className="group flex w-full items-center justify-between gap-6 text-left text-[17px] leading-6 font-medium lg:gap-12.5 lg:text-[20px] lg:leading-none"
              >
                {item.title}
                <span className="text-dark group-hover:bg-white-hover flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white transition-colors duration-200">
                  <ChevronDownIcon
                    className={`transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                      open ? "-rotate-180" : ""
                    }`}
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              inert={!open}
              className={`grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`pt-5 text-white/75 transition-opacity duration-300 motion-reduce:transition-none lg:pr-12.5 ${
                    open ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.content}
                </p>
              </div>
            </div>

            <hr className="mt-7.5 border-t border-white/50" />
          </div>
        );
      })}
    </div>
  );
}
