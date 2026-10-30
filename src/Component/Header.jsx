import Logo from "../assets/Logo.png"
import { useState } from "react"
import { Link } from "react-router-dom"

const Header = ({ searchTerm, setSearchTerm }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    return (
        <header className="bg-white relative z-50">
            <section className="flex justify-between items-center px-4 py-2 gap-3">
                <div className="w-25 h-25">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav className="hidden md:block flex-1">
                    <ul className=" flex justify-center gap-4">
                        <li className="hover:text-[#C4A484] text-lg"><Link to="./">Home</Link></li>
                        <li className="hover:text-[#C4A484] text-lg"><Link to="/about">About Us</Link></li>
                        <li className="hover:text-[#C4A484] text-lg"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <div className=" hidden md:flex items-center justify-center gap-2 border border-gray-300 px-3.5 py-2 rounded-full ">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                    <input type="text" name="" id="" placeholder="Search Beauty Products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <div className="flex justify-between items-center gap-3">
                    <button onClick={() => setSearchOpen(!searchOpen)} className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="30px" fill="#333333"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                    </button>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="30px" fill="#333333"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                    </button>
                </div>
            </section>
            {searchOpen && (

                <div className="md:hidden px-4 pb-3">
                    <div className="flex items-center justify-center gap-2 border border-gray-300 px-3.5 py-2 rounded-full ">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                        <input type="text" name="" id="" placeholder="Search Beauty Products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                </div>
            )}


            {menuOpen && (
                <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg px-6 py-2 ">
                    <ul className="flex flex-col gap-4">
                        <li className="hover:text-[#C4A484] text-lg"><Link to="./">Home</Link></li>
                        <li className="hover:text-[#C4A484] text-lg"><Link to="/about">About Us</Link></li>
                        <li className="hover:text-[#C4A484] text-lg"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            )}





        </header>
    )
}

export default Header
