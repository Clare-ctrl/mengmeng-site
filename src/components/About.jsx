export default function About({ language }) {
    return (
        <section>
            <h2 className="text-3xl font-bold text-stone-900">
                {language === "en" ? "ABOUT ME" : "关于我"}
            </h2>
            <p className="mt-8 text-stone-600 space-y-1">
                {language === "en"
                    ? "Hi, I’m Mengmeng (Claire). I’m currently a Master’s student in Computer Science at UIUC. Before that, I worked as an Air Quality Engineer in California for over three years. I’m interested in full-stack web development, especially using React and Python, and I enjoy building projects that combine technology with real-world applications."
                    : "我叫方萌萌，目前在伊利诺伊大学香槟分校（UIUC）攻读计算机科学硕士。在此之前，我在加州大学戴维斯分校获得了环境工程硕士学位，并曾在美国加州 Monterey Bay Air Resources District 担任了三年半的大气质量工程师。我希望把计算机技术和环境工程结合起来，目前主要学习 React、Python 和全栈开发，也在做一些自己的项目，比如熊猫档案馆（Panda Explorer）网站。"
                }
            </p>
        </section>
    );
}