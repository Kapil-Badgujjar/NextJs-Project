import Link from "next/link"

export default function() {
    return (
        <nav className="w-full flex justify-between items-center text-white bg-[#031B89] py-2">
            <div className="flex-1 flex md:hidden">
                Mobile Menu
            </div>
            <ul className="hidden md:flex flex-1 justify-center items-center gap-[16px]">
                <li>Home</li>
                <li>Category</li>
                <li>About Us</li>
            </ul>
            <Link href='/' className="flex-1 flex justify-center md:text-2xl lg:text-3xl">
                SuperMART
            </Link>
            <div className="hidden md:flex flex-1 justify-center items-center gap-[16px]">
                {/* <div>Cart</div> */}
                <Link href='/login'>
                    Login
                </Link>
                <Link href='/signup'>
                    Signup
                </Link>
            </div>
            <div className="flex-1 flex justify-end md:hidden">
                Cart
            </div>
        </nav>
    );
}