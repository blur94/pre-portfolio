import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const bio = {
    firstName: "Gilead",
    lastName: "Odo",
    role: "Software Developer",
  };
  return (
    <main className={`flex min-h-screen items-center ${inter.className}`}>
      <div className="h-screen  w-full p-20 flex flex-col justify-between">
        <div className="title">
          <p>
            {bio.firstName} {bio.lastName}
            <span>{bio.role}</span>
          </p>
          {/* <p>Software Developer</p> */}
        </div>
        <div>
          <p className="text-7xl">Hi, I'm {bio.firstName}.</p>
          <p className="text-sm">
            This page is currently under construction. But you can follow me on{" "}
            <Link
              href="https://twitter.com/balmofcodes"
              className="text-blue-700"
            >
              Twitter
            </Link>{" "}
            and{" "}
            <Link
              href="https://instagram.com/balmofcodes"
              className="text-blue-700"
            >
              Instagram
            </Link>{" "}
            for my thoughts on design, music and lots more.
          </p>
        </div>

        <div>
          <Link href="/contact">
            <button className="btn">Contact Me</button>
          </Link>
        </div>
      </div>
      <div className="h-screen flex items-center justify-center w-full ">
        <img
          src="https://images.unsplash.com/photo-1682905926517-6be3768e29f0?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
          className="image"
        />
      </div>
    </main>
  );
}
