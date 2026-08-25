import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe, FaFileAlt } from "react-icons/fa";
import SocialIcon from "./SocialIcon";

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
                <SocialIcon
                    href="https://github.com/Clare-ctrl"
                    label="GitHub">
                    <FaGithub />
                </SocialIcon>
                <SocialIcon
                    href="https://www.linkedin.com/in/mengmeng-fang-04440b33/"
                    label="LinkedIn">
                    <FaLinkedin />
                </SocialIcon>

                <SocialIcon
                    href="mailto:mf57@illinois.edu"
                    label={language === "en" ? "Email" : "邮箱"}>
                    <FaEnvelope />
                </SocialIcon>

                <SocialIcon
                    href="/Mengmeng_Fang_Resume.pdf"
                    label={language === "en" ? "Download Resume" : "下载简历"}
                    download="Mengmeng_Fang_Resume.pdf">
                    <FaFileAlt />
                </SocialIcon>

            </div>
        </header>
    );
}