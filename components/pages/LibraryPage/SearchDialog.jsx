"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import {
  ButtonsRegistry,
  MotionIconsRegistry,
} from "@/LibraryDatabase/registry";
import Link from "next/link";

const SearchDialog = ({ open, setOpen }) => {
  const comps = [...ButtonsRegistry];

  return (
    <>
      <CommandDialog className="dark" open={open} onOpenChange={setOpen}>
        <Command className="bg-main-bg">
          <CommandInput className={"bg-transparent"} placeholder="Search..." />
          <CommandList className="bg-main-bg mt-2 rounded-[12px]">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Components">
              {comps.map((registry, idx) => (
                <Link
                  href={`/library/components/${registry.name.replace(" ", "-").toLowerCase()}`}
                >
                  <CommandItem className="cursor-pointer" key={idx}>
                    <ArrowRight />
                    <span>{registry.name}</span>
                    <CommandShortcut>↵</CommandShortcut>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
            <CommandGroup heading="Motion Icons">
              {MotionIconsRegistry.map((registry, idx) => (
                <CommandItem key={idx}>
                  <ArrowRight />
                  <span>{registry.name}</span>
                  <CommandShortcut>↵</CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
};

export default SearchDialog;
