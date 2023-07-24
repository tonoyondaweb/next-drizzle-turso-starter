import ThemeMenu from "@/components/theme-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold uppercase antialiased">
          Build your full stack app
        </h1>
        <p className="text-2xl font-semibold uppercase">
          next + drizzle + turso + tailwind + shadcn ui{" "}
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Theme
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <ThemeMenu />
          </DropdownMenuContent>
        </DropdownMenu>
        <li className="flex gap-x-3">
          <ul>
            <Link
              className="underline transition-colors hover:text-muted-foreground"
              href="https://nextjs.org/docs"
            >
              next.js
            </Link>
          </ul>
          <ul>
            <Link
              className="underline transition-colors hover:text-muted-foreground"
              href="https://ui.shadcn.com/docs"
            >
              shadcn-ui
            </Link>
          </ul>
          <ul>
            <Link
              className="underline transition-colors hover:text-muted-foreground"
              href="https://orm.drizzle.team/docs/quick-start"
            >
              drizzle-orm
            </Link>
          </ul>
          <ul>
            <Link
              className="underline transition-colors hover:text-muted-foreground"
              href="https://docs.turso.tech/"
            >
              turso
            </Link>
          </ul>
        </li>
      </div>
    </main>
  );
}
