import Layout from "@/components/Layout";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="font-normal pt-12">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-7xl font-bold">Hello, world-</h1>
          <div className="flex-row gap-4 hidden lg:flex">
            <LinkedInLogoIcon
              width={25}
              height={25}
              className="hover:text-blue-400 cursor-pointer"
            />
            <GitHubLogoIcon
              width={25}
              height={25}
              className="hover:text-blue-400 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
