import * as Fa from "react-icons/fa";
import * as Md from "react-icons/md";
import { PiFlaskBold } from "react-icons/pi";
import { menuItems } from "../mockData/data";

function getIcon(name) {
    if (name === "PiFlaskBold") return <PiFlaskBold size={18} />;
    if (Fa[name]) {
        const Icon = Fa[name];
        return <Icon size={18} />;
    }
    if (Md[name]) {
        const Icon = Md[name];
        return <Icon size={18} />;
    }
    return null;
}

function Sidebar() {
    return (
        <aside className="hidden!important md:flex flex-col overflow-y-scroll bg-white border-r border-gray-200 w-56 py-20  h-screen  fixed top-0  z-0 left-0  p-4">
            {/* Menu principal */}
            <ul className="flex flex-col gap-1">
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <a
                            href={item.link}
                            className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
                        >
                            {getIcon(item.icon)}
                            <span className="text-sm">{item.label}</span>
                        </a>
                    </li>
                ))}
            </ul>

            {/* Section Collectives */}
            <div className="mt-6 border-t border-gray-200 pt-4">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-2">
                    Collectives
                </p>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                    Explore all Collectives
                </a>
            </div>

            {/* Section Teams */}
            <div className="mt-6 border-t border-gray-200 pt-4">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-2">
                    Teams
                </p>
                <p className="text-sm text-gray-700">
                    Collaborate with your team privately.
                </p>
            </div>
        </aside>
    );
}

export default Sidebar;
