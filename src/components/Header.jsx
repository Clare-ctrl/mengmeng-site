import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Header({ language, onChangeLanguage }) {
    return (
        <header className="relative w-full pt-20 pb-10 text-center">
            <button onClick={onChangeLanguage}
                className="absolute top-10 right-15 flex items-center gap-2 text-xl bg-stone-100 text-stone-500 hover:text-stone-900 transition">
                <FaGlobe /> {language === "en" ? "中文" : "EN"}
            </button>
            <h1 className="text-5xl md:text-5xl font-bold text-stone-800 mb-10">
                {language === "en" ? "Mengmeng Fang (Claire)" : "方 萌萌"}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-stone-500">
                {language === "en" ? "MCS Student @ UIUC | Full-Stack Developer"
                    : "UIUC 计算机科学硕士 · 全栈开发"}

            </p>
            <div className="mt-8 flex justify-center items-center gap-8">
                <a
                    href="https://github.com/Clare-ctrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-stone-400 hover:text-stone-900 transition-colors">
                    <FaGithub />
                </a>
                <a
                    href="https://github.com/Clare-ctrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-stone-400 hover:text-stone-900 transition-colors">
                    <FaLinkedin />
                </a>
                <a
                    href="mailto:mf57@illinois.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-stone-400 hover:text-stone-900 transition-colors">
                    <FaEnvelope />
                </a>
            </div>
        </header>
    );
}