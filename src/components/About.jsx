export default function About({ language }) {
    return (
        <section>
            <h2 className="text-3xl font-bold text-stone-900">
                {language === "en" ? "ABOUT ME" : "关于我"}
            </h2>
            <p className="mt-8 text-stone-600 space-y-1">
                {language === "en"
                    ? "Hi, I’m Mengmeng (Claire). I’m currently a Master’s student in Computer Science at UIUC. Before that, I worked as an Air Quality Engineer in California for over three years. I’m interested in full-stack web development, especially using React and Python, and I enjoy building projects that combine technology with real-world applications."
                    : "我叫方萌萌，目前在伊利诺伊大学香槟分校（UIUC）攻读计算机科学硕士学位。此前，我在加州大学戴维斯分校获得环境工程硕士学位，并曾在加州 Monterey Bay Air Resources District 担任大气质量工程师三年半。我对全栈 Web 开发很感兴趣，主要使用 React 和 Python，也希望探索计算机技术在环境工程等实际领域中的应用。目前，我正在开发包括 Panda Family Explorer 在内的一些个人项目。"
                }
            </p>
        </section>
    );
}