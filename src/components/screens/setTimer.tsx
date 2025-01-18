import { Input } from "@/components/ui/input"

export default function SetReminder() {
  return (
    <section className="py-28 px-7 leading-relaxed flex flex-col items-center">
      <h1 className="font-black text-4xl mb-8">
        Set your reminder
      </h1>
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <label htmlFor="time" className="block">Set your time</label>
          <Input 
            id="time"
            type="time" 
            className="bg-transparent border-white/20 text-white"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="website" className="block">Set Website</label>
          <Input 
            id="website"
            type="url" 
            placeholder="https://example.com"
            className="bg-transparent border-white/20 text-white"
          />
        </div>
      </div>
    </section>
  )
}

