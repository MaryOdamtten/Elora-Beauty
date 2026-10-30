import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-gray-200 px-6 pt-2 pb-5 mt-6">
            <div className="flex flex-col md:flex-row items-start justify-between md:items-center border-b border-[#C4A484]/50 gap-6 py-5 px-2 md:px-10 ">
                <div className="max-w-sm">
                    <img src={Logo} alt="image" className="w-20 h-20" />
                    <p className="font-medium">Your Glow, Your Rules.</p>
                    <p className="text-gray-500 text-sm leading-6">Skincare and beauty essentials for your everyday glow.</p>
                </div>
           
            <div className="flex flex-col text-gray-500 gap-1">
                <p className="font-medium text-black mb-2">Quick Links</p>
                <Link to="./">Home</Link>
                 <Link to="/about">About Us</Link>
                 <Link to="/contact">Contact</Link>
            </div>
             </div>

            <p className="mt-4 text-center text-gray-500 text-xs md:text-sm">&copy; 2026 Elora Skin & Beauty. All rights reserved.</p>
        </footer>
    )
}

export default Footer
