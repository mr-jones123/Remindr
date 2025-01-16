"use client";
import Link from "next/Link";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto py-8 px-4">
        <section className="flex flex-col items-center justify-center leading-loose space-y-2">
          <h1 className="text-5xl font-black tracking-tighter">Remindr.</h1>
          <h2 className="text-2xl font-semibold text-grey">Remind to Grind</h2>

          <div className="flex flex-col items-center gap-4">
            <Link href={"/get-started"}>
              <Button className="bg-white text-black hover:bg-black hover:text-white">
                Get Started
              </Button>
            </Link>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-darkGrey border-[0.6px] border-gray-800">
                  About Remindr.
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[calc(100vw-32px)] mx-auto left-1/2 -translate-x-1/2 p-4 text-black  rounded-lg border-none sm:w-[440px] md:w-[540px] lg:w-[640px]">
                <DialogTitle className="text-2xl font-bold">
                  About Remindr.
                </DialogTitle>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
                  voluptates natus dicta est doloribus, modi voluptate illum
                  odio iure ipsam, inventore hic ullam fugiat eum? Aut repellat
                  ipsam velit qui?
                </p>
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </div>
    </div>
  );
}
