import Image from "next/image"

const CostumerStory = [
    {
        content: 'Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.',
        author: {
            name: 'Annette Bones',
            role: 'CEO na Anne Corp',
            avatar: '/people02.png'
        }
    },
    {
        content: 'Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!',
        author: {
            name: 'Jacob Jones',
            role: 'CEO na JJ Corp',
            avatar: '/people.png'
        }
    }
]

function CostumerStorySection() {
    return (
        <section className="flex flex-col py-8 px-5 md:pt-40 md:pb-30  items-center">
            <div className="flex flex-col items-center gap-12 max-w-7xl">
                <h2 className="text-2xl md:text-5xl font-bold text-center max-w-185">
                    Quem utiliza, aprova!
                </h2>

                <div className="grid gap-8 md:grid-cols-2">

                    {CostumerStory.map((CostumerStory) => (
                        <div key={CostumerStory.author.name} className="flex flex-col bg-zinc-900 border border-zinc-800 p-12 rounded-2xl gap-12 hover:scale-103 transition-all duration-300">
                            <p className="font-serif text-lg text-justify">{CostumerStory.content}</p>

                            <div className="flex gap-4">
                                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                    <Image src={CostumerStory.author.avatar} alt={CostumerStory.author.name} fill className="object-cover" />
                                </div>

                                <div>
                                    <h3 className="font-bold">{CostumerStory.author.name}</h3>
                                    <p className="text-sm text-gray-400" >{CostumerStory.author.role}</p>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export { CostumerStorySection }