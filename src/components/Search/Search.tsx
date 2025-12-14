import { SearchIcon } from "lucide-react"
import { useRouter } from "next/router"
import { useCallback, useState } from "react";

function Search() {
    const router = useRouter();
    const q = router.query.q as string

    const [query, setQuery] = useState('')

    const handleSearch = useCallback(() => {

    }, [])

    return (
        <form className="relative">
            <SearchIcon className="text-gray-500 absolute left-3 top-1/2 -translate-y-1/2 size-4 transition-colors duration-200" />
            <input type="text" placeholder="Buscar" className="h-10 w-72 bg-transparent border border-gray-700 pl-9 rounded-md text-[14px] outline-none transition-all duration-200 focus-within:border-blue-900 focus-within:ring-1 focus-within:ring-blue-500 placeholder:text-gray-500" />
        </form>
    )
}

export { Search }