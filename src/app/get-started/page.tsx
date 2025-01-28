"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Instructions from "@/components/screens/instructions";
import Selection from "@/components/screens/selection";
import SetReminder from "@/components/screens/setTimer";
import Link from "next/link";
export default function GetStarted() {
  const [currentPage, setCurrentPage] = useState(0);
  const [click, setHandleClick] = useState(false);
  const handleClick = () => {
    setHandleClick(!click);
  };
  const screens = [
    <Instructions key="instructions" />,
    <Selection key="selection" onClick={handleClick} />,
    <SetReminder key="reminder" />,
  ];

  const goToNextPage = () => {
    if (currentPage < screens.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-customWhite pb-24">
      {
        // traversing through the array with indicies
        screens[currentPage]
      }

      <div className="bottom-8 flex items-center gap-5 ">
        {currentPage > 0 && (
          <Button
            variant="outline"
            onClick={goToPreviousPage}
            className="bg-transparent border-white/20 text-white hover:bg-white"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
          </Button>
        )}

        {currentPage === 0 && (
          <Link href={"/"}>
            <Button
              variant="outline"
              disabled={currentPage === screens.length - 1}
              className="bg-transparent border-white/20 text-white hover:bg-white"
            >
              <ChevronLeft className=" h-4 w-4" />
            </Button>
          </Link>
        )}

        {currentPage < screens.length - 1 ? (
          <Button
            variant="outline"
            onClick={goToNextPage}
            disabled={currentPage === screens.length - 1}
            className="bg-white text-black hover:text-white hover:bg-white/10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}
