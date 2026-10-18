import Link from "next/link";
import { Logo } from "@/app/components/logo";

export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <div>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="animate-drift absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[140px]" />
        <div className="absolute bottom-0 right-0 size-[28rem] rounded-full bg-aurora/10 blur-[130px]" />
      </div>

      <div className="flex min-h-svh flex-col">
        <header className="w-full px-5 py-6 sm:px-8">
          <Link href="/" aria-label="taskmoon inicio" className="inline-flex w-fit">
            <Logo />
          </Link>
        </header>

        <main className="flex flex-1 items-center justify-center px-5 pb-16">
          {children}
        </main>
      </div>
    </div>
  );
}
