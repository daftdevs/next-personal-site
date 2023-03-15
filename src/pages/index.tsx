import Layout from "@/components/Layout";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="pt-24 max-w-2xl">
        <h1 className="text-7xl font-serif">Hello, world-</h1>
        <div className="pt-12 text-neutral-400 tracking-wide text-xl">
          <p>I&apos;m Daffa, Software engineer mostly working on frontend.</p>
          <p>I enjoyed making beautiful UI for mobile and web applications.</p>
        </div>
        <div className="pt-8 text-neutral-400 tracking-wide text-xl">
          <p>
            Im currently working at{" "}
            <a
              target={"_blank"}
              href={"https://tinkerlust.com"}
              className="text-pink-400 cursor-pointer hover:text-pink-500"
            >
              Tinkerlust
            </a>
            , in my free time I like to read comics and play video games.
          </p>
          <p>
            You can check out my recent programming activities on my github
            below
          </p>
          <p className="text-white font-serif pt-4">
            TL;DR Frontend engineer, nerd hobbies, likes technology
          </p>
        </div>
        <div className="flex-row gap-4 hidden lg:flex pt-4 text-neutral-500">
          <LinkedInLogoIcon
            width={25}
            height={25}
            className="hover:text-white cursor-pointer"
          />
          <GitHubLogoIcon
            width={25}
            height={25}
            className="hover:text-white cursor-pointer"
          />
        </div>
      </div>
    </Layout>
  );
}
