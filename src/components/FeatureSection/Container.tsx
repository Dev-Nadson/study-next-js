interface Icontainer {

}

function Container() {
    return (
        <section className="p-5 grid gap-6 md:grid-cols-2 pb-8 pt-8 md:py-10 max-w-7xl m-auto">
            <div className="flex flex-col gap-2 rounded-lg bg-zinc-900 md:p-12 space-y-1">
                <span className="text-blue-200 bg-blue-900 px-2 py-1 w-fit rounded-sm uppercase">Simples</span>
                <h2 className="text-2xl text-gray-100">Crie um catálogo de produtos online em poucos minutos</h2>
            </div>
        </section>
    )
}

export { Container }