import Layout from "@/components/Layout";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const UIPorto = [
  {
    id: 1,
    title: "News Landing Page",
    image: "/images/news-homepage.webp",
    url: "https://frontend-2023-hazel.vercel.app/news-home-page",
  },
  {
    id: 2,
    title: "Interactive Rating Form",
    image: "/images/interactive-rating.webp",
    url: "https://frontendmentor-daft2.vercel.app/interactive-rating",
  },
  {
    id: 3,
    title: "Sign Up Form",
    image: "/images/sign-up-form.webp",
    url: "https://frontendmentor-daft2.vercel.app/intro-signup-form",
  },
  {
    id: 4,
    title: "Rock Paper Scissors Game",
    image: "/images/rps.webp",
    url: "https://frontend-2023-daft2.vercel.app/rock-paper-scissors",
  },
  {
    id: 5,
    title: "Calculator App",
    image: "/images/Calculator.webp",
    url: "https://frontend-2023-daft2.vercel.app/calculator",
  },
];

export default function Home() {
  return (
    <Layout title="Home">
      <div className="pt-24 pb-4 max-w-2xl">
        <h1 className="text-7xl font-serif">Hello, world-</h1>
        <div className="pt-12 text-neutral-400 tracking-wide text-xl">
          <p>
            I&apos;m Daffa, I specialize in (but not limited to) crafting
            intuitive user experiences using technologies such as React Native,
            ReactJS, and Next.js.
          </p>
          <p>I enjoyed making beautiful UI for mobile and web applications.</p>
          <p className="pt-4">
            Ive been using this technology the most in my career:{" "}
            <span className="text-white font-serif">
              Javascript/Typescript, React, Next, React Native.
            </span>
          </p>
        </div>
        <div className="pt-4 text-neutral-400 tracking-wide text-xl">
          <p>
            Im currently working at{" "}
            <a
              target={"_blank"}
              href={"https://www.linkedin.com/company/inphosoft/mycompany/"}
              className="text-red-400 cursor-pointer hover:text-red-500"
            >
              Inphosoft
            </a>
            , I like to read comics and play video games.
          </p>
          <p className="text-white font-serif pt-4">
            TL;DR: Software engineer (specialize in frontend), nerd hobbies,
            likes technology
          </p>
        </div>

        <div className="pt-10">
          <h1 className="font-serif text-xl">
            I like doing UI Challenges like this in my free time
          </h1>
          <p className="text-neutral-500">
            all the codes are available on my github below
          </p>
          <div className="flex flex-row gap-4 py-4 px-2 overflow-x-auto">
            {UIPorto.sort((a, b) => b.id - a.id).map((item) => (
              <div
                key={item.id}
                className="flex flex-col min-w-[12rem] hover:scale-105 transition delay-50 cursor-pointer"
              >
                <a href={item.url} target={"_blank"}>
                  <Image
                    width={250}
                    height={250}
                    src={item.image}
                    alt={`Image of ${item.title}`}
                    className="rounded"
                  />
                  <h1 className="pt-2 text-center">{item.title}</h1>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-10">
          <h1 className="font-serif text-xl text-white">Others</h1>
          <div className="flex-row pt-2 gap-4 flex text-neutral-500">
            <a
              target={"_blank"}
              href="https://www.linkedin.com/in/muhammad-daffa-s"
            >
              <LinkedInLogoIcon
                width={25}
                height={25}
                className="hover:text-white cursor-pointer"
              />
            </a>
            <a target={"_blank"} href="https://github.com/daft2">
              <GitHubLogoIcon
                width={25}
                height={25}
                className="hover:text-white cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p>This website is a work in progress.</p>
      </div>
    </Layout>
  );
}
