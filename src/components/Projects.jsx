import pandaImg from "../images/panda.png";
import trip from "../images/trip.png";
import pokemon from "../images/pokemon.png";
import moneet from "../images/moneet.png";

export default function Projects({ language }) {
    return (
        <section className="space-y-16">
            {/* Project 1*/}
            <div className="flex flex-col justify-center items-center">
                <p className="text-sm uppercase tracking-[0.2em] text-stone-400">
                    {language === "en" ? "Project 01" : "项目一"}
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-stone-900">
                    {language === "en" ? "Moneet" : "Moneet小账本"}
                </h2>
                <a
                    href="https://moneet.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={moneet}
                        alt="moneet"
                        className="mt-6 w-70 max-w-3xl rounded-2xl shadow-sm
                       transition-transform duration-300 hover:scale-[1.5]"
                    />
                </a>

                <div className="mt-5 flex gap-6">
                    <a
                        href="https://moneet.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-stone-700 hover:text-stone-950"
                    >
                        {language === "en" ? "Click image to view ↗" : "点击图片查看"}
                    </a>
                </div>
            </div>

            {/* Project 2*/}
            <div className="flex flex-col justify-center items-center">
                <p className="text-sm uppercase tracking-[0.2em] text-stone-400">
                    {language === "en" ? "Project 02" : "项目二"}
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-stone-900">
                    {language === "en" ? "Panda Family Explorer" : "熊猫档案馆"}
                </h2>
                <a
                    href="https://panda-family-explorer.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={pandaImg}
                        alt="Panda Family Explorer"
                        className="mt-6 w-70 max-w-3xl rounded-2xl shadow-sm
                       transition-transform duration-300 hover:scale-[1.5]"
                    />
                </a>

                <div className="mt-5 flex gap-6">
                    <a
                        href="https://panda-family-explorer.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-stone-700 hover:text-stone-950"
                    >
                        {language === "en" ? "Click image to view ↗" : "点击图片查看"}
                    </a>
                </div>
            </div>

            {/* Project 3*/}
            <div className="flex flex-col justify-center items-center">
                <p className="text-sm uppercase tracking-[0.2em] text-stone-400">
                    {language === "en" ? "Project 03" : "项目三"}
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-stone-900">
                    {language === "en" ? "Japan Trip" : "我的旅行日记-日本"}
                </h2>
                <a
                    href="https://clare-ctrl.github.io/japan-trip/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={trip}
                        alt="Japan Trip"
                        className="mt-6 w-70 max-w-3xl rounded-2xl shadow-sm
                       transition-transform duration-300 hover:scale-[1.5]"
                    />
                </a>

                <div className="mt-5 flex gap-6">
                    <a
                        href="https://clare-ctrl.github.io/japan-trip/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-stone-700 hover:text-stone-950"
                    >
                        {language === "en" ? "Click image to view ↗" : "点击图片查看"}
                    </a>
                </div>
            </div>
            {/* Project 4*/}
            <div className="flex flex-col justify-center items-center">
                <p className="text-sm uppercase tracking-[0.2em] text-stone-400">
                    {language === "en" ? "Project 04" : "项目四"}
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-stone-900">
                    {language === "en" ? "Pokémon Explorer" : "探索神奇宝贝"}
                </h2>
                <a
                    href="https://clare-ctrl.github.io/typescript-react-pokemon-explorer/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={pokemon}
                        alt="Pokemon Explorer"
                        className="mt-6 w-70 max-w-3xl rounded-2xl shadow-sm
                       transition-transform duration-300 hover:scale-[1.5]"
                    />
                </a>

                <div className="mt-5 flex gap-6">
                    <a
                        href="https://clare-ctrl.github.io/typescript-react-pokemon-explorer/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-stone-700 hover:text-stone-950"
                    >
                        {language === "en" ? "Click image to view ↗" : "点击图片查看"}
                    </a>
                </div>
            </div>

        </section>
    );
}