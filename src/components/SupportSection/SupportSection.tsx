import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react"
import { Card } from "./Card"

function SupportSection() {
    return (
        <section className="flex py-5 md:py-40 bg-linear-to-r from-slate-900 to-transparent md:bg-[url('/support-background.svg')] bg-center bg-cover bg-no-repeat"> {/*bg-[url('/support-background.svg')]*/}

            <div className="m-auto p-5 max-w-7xl space-y-15">
                <div className="flex flex-col items-center">
                    <h2 className="text-5xl font-bold text-center max-w-185">Sua loja de afiliados, simples, do jeito que deveria ser</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card title="Personalize o seu site" text="Adicione sua logo, favicon, cores no seu catálogo e tenha tudo com a sua cara." icon={PaintbrushVertical} />
                    <Card title="Venda de qualquer loja" text="Não importa a loja, o Site.Set permite que você insera qualquer link de afiliado." icon={Store} bgColor="bg-teal-900" iconColor="bg-teal-700" />
                    <Card title="Receba suporte amigável" text="Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso." icon={HeartHandshake} />
                </div>
            </div>

        </section>
    )
}

export { SupportSection }