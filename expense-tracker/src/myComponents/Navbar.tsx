import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (

        <>
            <nav className="flex justify-between  items-center p-4  shadow-sm relative z-50">
                <div>
                    <img src="/logo.svg" alt="logo" />
                </div>
                <Button className="bg-indigo-700 hover:bg-indigo-600">Get started</Button>

            </nav>

        </>
    )
}
