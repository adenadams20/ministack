// src/pages/Home.jsx

import React from "react";
import { Link } from "react-router-dom";
import QuestionList from "../components/QuestonList";// 🔹 vérifie bien le nom du fichier !

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    href: "#",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    category: { title: "Sales", href: "#" },
    author: {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Improve your customer experience",
    href: "#",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    category: { title: "Business", href: "#" },
    author: {
      name: "Tom Cook",
      role: "Director of Product",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Home() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-white">
        {/* En-tête du blog */}
        <div className="mx-auto max-w-2xl lg:mx-0 mb-10">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg text-gray-300">
            Learn how to grow your business with our expert advice.
          </p>

          {/* Lien vers les utilisateurs */}
          <Link
            to="/UserProfile"
            className="text-indigo-400 hover:text-indigo-200 font-semibold"
          >
            Voir les utilisateurs
          </Link>
        </div>

        {/* Section des questions */}
        <div className="max-w-3xl mx-auto mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Liste des questions</h1>
            <Link to="/QuestionForm">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow">
                Poser une question
              </button>
            </Link>
          </div>
          <QuestionList />
        </div>
      </div>
    </div>
  );
}
