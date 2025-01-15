import LinkArrow from "../../assets/link-arrow";
import About from "./about/about";
import Courses from "./courses/courses";
import Experience from "./experience/experience";
import cls from "./main.module.css";
import Projects from "./projects/projects";

export default function Main() {
    return (
        <main id="content" className={cls.main}>
            <About />
            <Experience />
            <Projects />
            <Courses />
            <br />
            <a
                style={{ color: "var(--color-contrast)" }}
                href="/MagadanovBekdauletCV.pdf"
            >
                View full CV <LinkArrow fill="var(--color-contrast)" />
            </a>
            <div style={{ marginBottom: "200px" }} />
        </main>
    );
}
