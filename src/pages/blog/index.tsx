import { CallToAction } from "@/Templates/LandingPage/Sections";

export default function BlogPage() {
    return (
        <div className="flex flex-col py-24 grow h-full">

            <header className="p-5 flex flex-col items-center justify-center mt-16 max-w-7xl">
                <div className="flex flex-col items-start justify-between md:flex-row md:items-end ">

                    <div className="flex flex-col gap-4 px-4 md:px-0">
                        <span className="text-teal-300 bg-teal-900 px-2 py-1 text-sm md:text-md md:px-4 md:py-2 w-fit rounded-sm uppercase">
                            BLOG
                        </span>

                        <h1 className="text-2xl md:text-5xl font-bold text-start md:text-left text-balance max-w-2xl text-gray-100">
                            Dicas e estratégias para impulsionar o seu negócio
                        </h1>
                    </div>

                </div>

            </header>



            {/*
            <div className="">
                <CallToAction />
            </div>
            */}
        </div>
    )
}