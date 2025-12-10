import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ActiveLink } from "@/components/ActiveLink"
import { Logo } from "@/components/Logo"

function Header() {
    return <>
        <header className="fixed top-0 z-50 w-full border border-b -white/ bg-background/10 backdrop-blur supports-backdrop-filter:bg-background-60">
            <div className="mx-auto transition-all max-w-7xl px-4 sm:px-6 lg:px-80">
                <div className="flex h-16 items-center justify-between">
                    <Logo />

                    <nav className="flex items-center gap-6">
                        <ActiveLink href="/">Início</ActiveLink> {/* Pode fazer tanto com tag, assim como com properties */}
                        <ActiveLink href="/blog" children="Blog" />
                        <Button variant="secondary" asChild>
                            <Link href="/comecar">Começar</Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    </>

}

export { Header }