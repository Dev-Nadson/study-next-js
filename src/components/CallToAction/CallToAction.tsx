import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowRight, Store } from "lucide-react"

function CallToAction() {
    return (
        <section className="">
            <div className="flex w-fit bg-teal-900 p-2.5 md:p-4.5 rounded-full m-auto relative translate-y-1/2">
                <Store className="size-5.5 md:size-10 text-teal-300" />
            </div>

            <div className="flex flex-col gap-4 md:gap-12 py-8 bg-[url('/background-footer.svg')] bg-linear-to-b from-cyan-950/20 to-transparent px-5 md:py-40 items-center bg-cover bg-no-repeat bg-center">
                <h2 className="text-2xl md:text-5xl font-bold text-center max-w-185">
                    Crie uma loja online e inicie suas vendas ainda hoje!
                </h2>

                <Button className="bg-blue-500 hover:bg-blue-6 items-center rounded-full w-fit text-white" asChild >
                    <Link href="/criar-loja">
                        Criar Loja Grátis
                        <ArrowRight className="" />
                    </Link>
                </Button>
            </div>
        </section>
    )
}

export { CallToAction }