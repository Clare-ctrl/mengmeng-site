export default function TabButton({ children, onSelect, isSelected }) {
    return (
        <button
            onClick={onSelect}
            className={
                isSelected
                    ? "rounded-full bg-stone-600 px-5 py-2 font-bold text-white"
                    : "rounded-full bg-stone-100 px-5 py-2 font-bold text-stone-700 hover:bg-stone-200"
            }>
            {children}
        </button>
    );
}