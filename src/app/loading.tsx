import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Image
        src="/favicon.svg"
        alt="Loading…"
        width={80}
        height={80}
        className="animate-pulse"
        priority
      />
    </div>
  );
}
