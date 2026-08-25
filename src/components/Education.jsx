export default function Education({ language }) {
    return (
        <section>
            <h2 className="text-3xl font-bold text-stone-900">
                {language === "en" ? "Education Record" : "学习经历"}
            </h2>
            <div className="mt-6 bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold"></h3>
                <p>{language === "en" ? "Colorado State University" : "美国科罗拉多州立大学 (CSU)"}</p>
                <p>{language === "en" ? "Major: Chemistry / Environmental Health" : "专业：化学 / 环境健康"}</p>
                <p>{language === "en" ? "Degree: Bachalor of Science (2014)" : "理学学士 （2014）"}</p>
            </div>
            <div className="mt-6 bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold"></h3>
                <p>{language === "en" ? "University of California, Davis" : "美国加州大学戴维斯分校 (UCD)"}</p>
                <p>{language === "en" ? "Major: Civil and Environmental Engineering" : "专业：土木与环境工作"}</p>
                <p>{language === "en" ? "Degree: Master of Science (2016)" : "理学硕士学位 （2016)"}</p>
            </div>
            <div className="mt-6 bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold"></h3>
                <p>{language === "en" ? "University of Illinois at Urbana-Champaign" : "美国伊利诺伊大学香槟分校 (UIUC)"}</p>
                <p>{language === "en" ? "Major: Computer Science" : "专业：计算机科学"}</p>
                <p>{language === "en" ? "Degree: pending, expected December 2026" : ""}</p>
            </div>
        </section>
    );
}