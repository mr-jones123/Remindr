
  export default function Instructions() {
    return (
      <div className="flex flex-col items-center bg-black text-customWhite">
        <section className="py-20 md:py-20 leading-relaxed flex flex-col items-center">
          <h1 className="font-black text-3xl md:text-4xl mb-4 md:mb-6 lg:mb-8 text-center">
            How does it remind you?
          </h1>
          <div className="max-w-xs px-4 md:max-w-md lg:max-w-2xl space-y-4 md:space-y-6">
            <p className="text-xl md:text-base lg:text-lg text-center">
              Remindr makes phone calls instead of regular notifications. Set your
              daily goal, add a website link, and choose a time. When it&apos;s
              time, you&apos;ll receive a call. Swipe{" "}
              <span className="font-bold text-green-500">up</span> to open your
              website or
              <span className="text-red-500 font-bold"> down</span> to dismiss.{" "}
              <br />
            </p>
            <p className="text-xl md:text-base lg:text-lg text-center">
              Your privacy matters - we don&apos;t store any personal data or
              phone numbers. Remindr simulates calls through your device&apos;s
              notification system for a more engaging reminder experience.
            </p>
          </div>
        </section>
      </div>
    );
  }
