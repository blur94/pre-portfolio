import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Image
        src="/logo-mark-dark.svg"
        alt="Loading…"
        width={80}
        height={80}
        className="animate-pulse hidden dark:block"
        priority
      />
      <Image
        src="/logo-mark-light.svg"
        alt="Loading…"
        width={80}
        height={80}
        className="animate-pulse dark:hidden"
        priority
      />
    </div>
  );
}
