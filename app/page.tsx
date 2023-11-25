import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TailAdmin | Next.js E-commerce Dashboard Template",
  description: "This is Home Blog page for TailAdmin Next.js",
  // other metadata
};

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-black">
      <Link href={"/auth/signin"}><button className="bg-primary text-white rounded-md px-4 py-2 font-medium text-sm uppercase">Sign in/ Sign up</button></Link>
    </div>
  );
}
