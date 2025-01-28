"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function SetReminder() {
  const [alarmTime, setAlarmTime] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = () => {
    // Store in localStorage
    localStorage.setItem("alarmTime", alarmTime);
    localStorage.setItem("alarmWebsite", website);
  };

  return (
    <section className="py-28 px-7 leading-relaxed flex flex-col items-center">
      <h1 className="font-black text-4xl mb-8">Set your remndr.</h1>
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <label htmlFor="time" className="block">
            Set your time
          </label>
          <Input
            id="time"
            type="time"
            className="bg-transparent border-white/20 text-white"
            value={alarmTime}
            onChange={(e) => setAlarmTime(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="website" className="block">
            Set Website
          </label>
          <Input
            id="website"
            type="url"
            placeholder="https://example.com"
            className="bg-transparent border-white/20 text-white"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <Button onClick={handleSubmit} disabled={!alarmTime || !website}>
          <Link href="/time">
            Start        
          </Link>
        </Button>
      </div>
    </section>
  );
} 