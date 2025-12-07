interface IContainerProps {
    TagText: string
    FeatureText: string
}

function Container({ TagText, FeatureText }: IContainerProps) {
    return (
        <div className="flex flex-col gap-2 rounded-lg bg-zinc-900 p-6 md:p-12 space-y-1 hover:scale-103 transition-all">
            <span className="text-blue-200 bg-blue-900 px-2 py-1 w-fit rounded-sm uppercase">{TagText}</span>
            <h2 className="text-2xl text-gray-100 font-bold">{FeatureText}</h2>
        </div>
    )
}

export { Container }