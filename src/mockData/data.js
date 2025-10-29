import { FaHome, FaTags, FaUsers, FaBuilding } from "react-icons/fa";
import { MdQuestionAnswer, MdChat, MdArticle } from "react-icons/md";
import { PiFlaskBold } from "react-icons/pi";

export const NavbarMenu = [
    {
        id: 1,
        title: "About",
        link: "/",
    },
    {
        id: 2,
        title: "Products",
        link: "/",
    },
    {
        id: 3,
        title: "For Teams",
        link: "/",
    },
];

    export const menuItems = [
        { id: 1,
            icon: "FaHome",
            label: "Home", 
            link: "/home" },
        { id: 2,
            icon: "MdQuestionAnswer",
            label: "Questions",
            link: "/QuestionForm" },
        { id: 3,
            icon: "PiFlaskBold", 
            label: "reponses aux question",
            link: "/AnswerCard" },
        { id: 4,
            icon: "FaTags",
            label: "Tags", 
            link: "/TagBadge" },
        { id: 5,
            icon: "MdChat", 
            label: "Chat", 
            link: "#" },
        { id: 6,
            icon: "MdArticle",
            label: "Articles",
            link: "#" },
        { id: 7, 
            icon: "FaUsers",
            label: "Users",
            link: "/UserProfile" },
        { id: 8,
            icon: "FaBuilding",
            label: "Companies", 
            link: "#" },
    ];
