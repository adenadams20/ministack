function Button({ content, bgColor = "bg-orange-500", textColor = "text-white" }) {
    return (
        <button
            className={`${bgColor} ${textColor} font-medium px-4 py-2 rounded-md hover:opacity-90 transition`}
        >
            {content}
        </button>
    );
}
export default Button