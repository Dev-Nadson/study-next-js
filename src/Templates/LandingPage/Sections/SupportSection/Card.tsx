import type { LucideIcon } from "lucide-react"

interface ICardProps {
    title: string,
    text: string,
    icon: LucideIcon
    bgColor?: string
    iconColor?: string
}

function Card({ title, text, icon, bgColor, iconColor }: ICardProps) {
    const Icon = icon
    return (
        <div className={`flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 ${bgColor} bg-blue-900 hover:scale-103 transition-all duration-400`}>

            <div className={`flex h-12 w-12 items-center justify-center rounded-lg p-3 ${iconColor} bg-blue-500`}>
                {Icon && <Icon size={15} className="h-full w-full text-white" />}
            </div>

            <strong>{title}</strong>
            <p>{text}</p>
        </div>
    )
}

export { Card }