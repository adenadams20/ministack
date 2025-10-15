import { NavbarMenu } from "../mockData/data";
import { FaStackOverflow } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Button from "./buttons";
import React from "react";

function Navbar() {
    const [openMenu, setOpenMenu] = React.useState(false);
    const [showSearch, setShowSearch] = React.useState(false);

    return (
        <>
            {/* Navbar mobile */}
            <nav className="flex items-center justify-between bg-white shadow-md px-4 py-3 md:hidden">
                {/* Hamburger menu */}
                <div className="flex items-center mr-2" onClick={() => setOpenMenu(!openMenu)}>
                    {openMenu ? <MdClose size={28} /> : <MdMenu size={28} />}
                </div>

                {/* Logo */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <FaStackOverflow size={28} color="#F48024" />
                    <span className="text-lg font-semibold text-black">Stackoverflow</span>
                </div>

                {/* Right section */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <a
                        href="/products"
                        className="text-gray-700 font-medium px-2 py-1 hover:text-orange-500 whitespace-nowrap"
                    >
                        Produits
                    </a>

                    {/* Search icon / input toggle */}
                    <div className="relative">
                        {!showSearch && (
                            <CiSearch
                                size={20}
                                className="text-gray-600 cursor-pointer w-64 rounded-mb"
                                onClick={() => setShowSearch(true)}
                            />
                        )}
                        {showSearch && (
                            <input
                                type="text"
                                autoFocus
                                placeholder="Rechercher..."
                                className="absolute right-0 top-0 w-40 px-2 py-1 text-gray-700 outline-none border border-gray-300 rounded-md bg-white"
                                onBlur={() => setShowSearch(false)}
                            />
                        )}
                    </div>

                    <Button content="Connexion" bgColor="bg-orange-500" textColor="text-white" size="sm" />
                    <Button content="Inscription" bgColor="bg-gray-200" textColor="text-black" size="sm" />
                </div>
            </nav>

            {/* Mobile dropdown menu */}
            {openMenu && (
                <div className="md:hidden bg-white shadow-md w-full absolute top-16 left-0 z-50 flex flex-col items-start px-4 py-4 gap-4">
                    <ul className="flex flex-col gap-3 w-full">
                        {NavbarMenu.map((item) => (
                            <li key={item.id} className="w-full">
                                <a
                                    href={item.link}
                                    className="block py-2 px-3 w-full text-gray-700 hover:bg-gray-100 rounded"
                                    onClick={() => setOpenMenu(false)}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Navbar desktop */}
            <div className="hidden md:flex items-center justify-between bg-white shadow-md px-6 py-3">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <FaStackOverflow size={32} color="#F48024" />
                    <span className="text-xl font-semibold text-black">Stackoverflow</span>
                </div>

                {/* Menu desktop */}
                <ul className="flex items-center gap-6 text-gray-600">

                    {NavbarMenu.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.link}
                                className="inline-block py-1 px-3 hover:text-orange-500 transition"
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Recherche desktop */}
                <div className="flex items-center bg-gray-100 px-3 py-1 rounded-md">
                    <CiSearch size={20} className="text-gray-600" />
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        className="bg-transparent outline-none px-2 text-gray-700 w-[500px]"
                    />
                </div>

                {/* Boutons desktop */}
                <div className="flex items-center gap-4">
                    <Button content="Connexion" bgColor="bg-orange-500" textColor="text-white" />
                    <Button content="Inscription" bgColor="bg-gray-200" textColor="text-black" />
                </div>
            </div>
        </>
    );
}

export default Navbar;
