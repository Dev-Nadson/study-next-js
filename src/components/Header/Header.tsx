import Link from "next/link"
import { Button } from "../ui/button"

function Header() {
    return <>
        <header className="fixed top-0 z-50 w-full border border-b border-white/10 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background-60">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/">Logo</Link>

                    <nav className="flex items-center gap-6">
                        <Link href="/">Início</Link>
                        <Link href="/blog">Blog</Link>
                        <Button variant="secondary">Começar</Button>
                    </nav>
                </div>
            </div>
        </header>
    </>

}

export { Header }