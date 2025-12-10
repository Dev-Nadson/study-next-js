import { Footer } from "@/components/Layout"
import { Header } from "@/components/Layout"

interface ILayoutProps {
    children: React.ReactNode
}

function Layout({ children }: ILayoutProps) {
    return (
        <div className="relative flex min-h-screen flex-col dark">
            <Header />
            <main className="flex-1 flex flex-col mb-12">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export { Layout }