'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Instructions from "@/components/screens/instructions"
import Selection from "@/components/screens/selection"
import SetReminder from "@/components/screens/setTimer"
export default function GetStarted() {
  const [currentPage, setCurrentPage] = useState(0)
  
  // Array of screen components
  const screens = [
    <Instructions key="how-it-works" />,
    <Selection key="where-to-start" />,
    <SetReminder key = "set-reminder"/>
  ]

  const goToNextPage = () => {
    if (currentPage < screens.length - 1) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-customWhite pb-24">

      {screens[currentPage]}

      <div className="bottom-8 flex items-center gap-5 ">
        {currentPage > 0 && (
          <Button
            variant="outline"
            onClick={goToPreviousPage}
            className="bg-transparent border-white/20 text-white hover:bg-white"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        )}
        
        <Button
          onClick={goToNextPage}
          disabled={currentPage === screens.length - 1}
          className="bg-white text-black hover:text-white hover:bg-white/10"
        >
          {currentPage === screens.length - 1 ? 'Get Started' : 'Next'}
          {currentPage < screens.length - 1 && <ChevronRight className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}

