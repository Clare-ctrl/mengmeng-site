import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="mt-10">
            <h2 className="text-4xl font-bold text-stone-900">
                Contact Me
            </h2>
            <div className="mt-6">
                <div className="flex gap-30 text-4xl justify-center items-center">

                    <a
                        href="https://github.com/Clare-ctrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-300 hover:text-stone-800 transition-colors">
                        <FaGithub />
                    </a>
                    <a
                        href="https://github.com/Clare-ctrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-300 hover:text-stone-800 transition-colors">
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:mf57@illinois.edu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-300 hover:text-stone-800 transition-colors">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </section>
    );
}