import { useState } from "react";
import TabButton from "./TabButton";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";

export default function MainContent({ language }) {
    const [selectedContent, setSelectedContent] = useState("about");
    let tabContent;
    if (selectedContent === "about") {
        tabContent = <About language={language}/>
    } else if (selectedContent === "education") {
        tabContent = <Education language={language}/>
    } else if (selectedContent === "experience") {
        tabContent = <Experience />
    } else if (selectedContent === "projects") {
        tabContent = <Projects language={language}/>
    }

    return (
        <div className="bg-stone-50 p-10">
            <div className="w-full max-w-5xl mx-auto">
                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-6 mb-10">
                    <TabButton isSelected={selectedContent === "about"}
                        onSelect={() => setSelectedContent("about")}
                    >{language === "en" ? "About" : "关于我"}</TabButton>
                    <TabButton isSelected={selectedContent === "education"}
                        onSelect={() => setSelectedContent("education")}
                    >{language === "en" ? "Education" : "教育经历"}</TabButton>
                    <TabButton isSelected={selectedContent === "experience"}
                        onSelect={() => setSelectedContent("experience")}
                    >{language === "en" ? "Experience" : "工作经历"}</TabButton>
                    <TabButton isSelected={selectedContent === "projects"}
                        onSelect={() => setSelectedContent("projects")}
                    >{language === "en" ? "Projects" : "项目"}</TabButton>

                </div>
                {/* content */}
                {tabContent}
            </div>
        </div>
    );
}