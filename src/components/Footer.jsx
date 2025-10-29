import { FaStackOverflow, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#1b1b1b] scale-z-50    text-gray-400 text-sm ">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Logo + Stack Overflow */}
                <div>
                    <div className="flex items-center mb-3">
                        <FaStackOverflow size={28} className="text-orange-500 mr-2" />
                    </div>
                    <h3 className="text-gray-300 font-semibold mb-2">STACK OVERFLOW</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-white">Questions</a></li>
                        <li><a href="#" className="hover:text-white">Help</a></li>
                        <li><a href="#" className="hover:text-white">Chat</a></li>
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h3 className="text-gray-300 font-semibold mb-2">PRODUCTS</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-white">Teams</a></li>
                        <li><a href="#" className="hover:text-white">Advertising</a></li>
                        <li><a href="#" className="hover:text-white">Talent</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-gray-300 font-semibold mb-2">COMPANY</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Press</a></li>
                        <li><a href="#" className="hover:text-white">Work Here</a></li>
                        <li><a href="#" className="hover:text-white">Legal</a></li>
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-white">Contact Us</a></li>
                        <li><a href="#" className="hover:text-white">Cookie Settings</a></li>
                        <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
                    </ul>
                </div>

                {/* Stack Exchange Network */}
                <div>
                    <h3 className="text-gray-300 font-semibold mb-2">STACK EXCHANGE NETWORK</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-white">Technology</a></li>
                        <li><a href="#" className="hover:text-white">Culture & recreation</a></li>
                        <li><a href="#" className="hover:text-white">Life & arts</a></li>
                        <li><a href="#" className="hover:text-white">Science</a></li>
                        <li><a href="#" className="hover:text-white">Professional</a></li>
                        <li><a href="#" className="hover:text-white">Business</a></li>
                        <li><a href="#" className="hover:text-white">API</a></li>
                        <li><a href="#" className="hover:text-white">Data</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-700 mt-6">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <div className="flex gap-4 mb-2 md:mb-0">
                        <a href="#" className="hover:text-white"><FaFacebook size={16} /></a>
                        <a href="#" className="hover:text-white"><FaTwitter size={16} /></a>
                        <a href="#" className="hover:text-white"><FaLinkedin size={16} /></a>
                        <a href="#" className="hover:text-white"><FaInstagram size={16} /></a>
                    </div>

                    <p className="text-center md:text-right leading-5">
                        Site design / logo © 2025 Stack Exchange Inc; user contributions licensed under{" "}
                        <a href="#" className="text-blue-400 hover:underline">CC BY-SA</a>.
                        <br />
                        rev 2025.10.16.35436
                    </p>
                </div>
            </div>
        </footer>
    );
}
