import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (

        <>
            <nav className="flex justify-between  items-center p-4 shadow-sm">
                <div>
                    <img src="/logo.svg" alt="logo" />
                </div>
                <Button>Get started</Button>

            </nav>

        </>
    )
}
