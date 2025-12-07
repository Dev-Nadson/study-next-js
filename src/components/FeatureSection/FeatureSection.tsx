import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import { Container } from "./Container"
import Link from "next/link"
import Image from "next/image"

function FeatureSection() {
    return (
        <section className="p-5 grid gap-6 md:grid-cols-2 pb-8 pt-8 md:py-10 max-w-7xl m-auto ">
            <Container TagText="Simples" FeatureText="Crie um catálogo de produtos online em poucos minutos" />
            <Container TagText="Prático" FeatureText="Venda para seu público através de uma plataforma única" />

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 rounded-lg bg-zinc-900 p-6 md:p-12 space-y-1 hover:scale-103 transition-all">
                    <div className="flex flex-col gap-4 md:gap-0">
                        <span className="text-blue-200 bg-blue-900 px-2 py-1 w-fit rounded-sm uppercase">Personalizável</span>
                        <h2 className="text-2xl text-gray-100 font-bold">Tenha uma loja online personalizada com a cara da sua marca</h2>

                        <Button className=" items-center rounded-full mt-4 hidden md:mt-auto md:p-0 md:flex w-fit text-white bg-blue-500 hover:bg-blue-600" asChild >
                            <Link href="/criar-loja">
                                Criar Loja Grátis
                                <ArrowRight className="" />
                            </Link>
                        </Button>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full ">
                        <div className="w-full max-w-md overflow-hidden">
                            <Image src="./image.svg" alt="" width={440} height={330} className="object-cover w-full" />
                        </div>
                    </div>

                    <Button className=" rounded-full py-5 md:mt-auto md:hidden w-full text-white bg-blue-500 hover:bg-blue-600" asChild >
                        <Link href="/criar-loja">
                            Criar Loja Grátis
                            <ArrowRight className="" />
                        </Link>
                    </Button>
                </div>
            </div>

        </section>
    )
}

export { FeatureSection }