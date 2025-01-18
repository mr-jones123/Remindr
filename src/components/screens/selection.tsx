import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { SquareArrowOutUpRight } from 'lucide-react';

export default function Selection() {
  const selectionItems = [
    {
      name: "Github",
      description: (
        <p>
          Having a contribution streak on GitHub makes your account green. It is
          a flex.{" "}
          <span className="font-bold text-grey flex items-center align-baseline underline">
            <a href="https://youtu.be/r6tH55syq0o?si=CJm6hZk3Tqt7NYsv&t=233">
              Just ask this guy
            </a>
            <SquareArrowOutUpRight size={17} />
          </span>
        </p>
      ),
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-github"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      name: "LeetCode",
      description: (
        <p>
          Being consistent in Leetcode can sharpen your skills in Data
          Structures and Algorithms and land you a job at a big-tech company.
          Join the Leetcode clan now.
        </p>
      ),
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-code"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      name: "Gym",
      description: (
        <p>
          Grind and you can become like
          <span className="font-bold text-grey flex items-center align-baseline underline">
            <a href="https://www.youtube.com/@NoelDeyzel">Daddy Noel.</a>
            <SquareArrowOutUpRight size={17} />
          </span>
        </p>
      ),
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-dumbbell"
        >
          <path d="M14.4 14.4 9.6 9.6" />
          <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
          <path d="m21.5 21.5-1.4-1.4" />
          <path d="M3.9 3.9 2.5 2.5" />
          <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 px-7 leading-relaxed flex flex-col items-center">
      <h1 className="font-black text-4xl mb-8">
        Where do you wanna start?
      </h1>
      <div className="grid gap-4 w-full max-w-md">
        {selectionItems.map((item, index) => (
          <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors cursor-pointer">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-white/10 rounded-full">
                {item.logo}
              </div>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {item.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

