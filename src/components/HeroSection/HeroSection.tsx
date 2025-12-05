import { ArrowRight, Clock, Store } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

function HeroSection() {
    return (
        <section className="p-5 relative flex items-center justify-center mt-16 max-w-7xl m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-80 md:h-144 items-center">
                <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:it">
                    <h1 className="text-gray-100 text-4xl font-extrabold">
                        Venda seus produtos como afiliado em um único lugar
                    </h1>


                    <div>
                        <div className="flex items-center gap-2">
                            <Clock className="text-cyan-100 h-4 w-4 " />
                            <span className="text-gray-200">Crie o seu site em menos de 5 minutos</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Store className="text-cyan-100 h-4 w-4 " />
                            <span className="text-gray-200">Acompanhe e otimize seu negócio online</span>
                        </div>
                    </div>

                    <div className="text-white flex flex-col gap-2 mt-5 items-center md:items-start lg:items-start">
                        <Button className="bg-blue-400 hover:bg-blue-500 rounded-full w-fit text-white" asChild >
                            <Link href="/criar-loja">
                                Criar Loja Grátis
                                <ArrowRight className="" />
                            </Link>
                        </Button>
                        <p className="text-gray-300 text-bold">Não precisa de cartão de crédito</p>
                    </div>
                </div>
                <div className="relative h-80 hidden md:h-full order-fisrt md:order-last items-center justify-center md:flex lg:flex">
                    <Image src="/background.svg" alt="desenho" width={200} height={400} className="h-full w-auto object-contain" />
                </div>

            </div>
        </section>
    )
}

export { HeroSection }