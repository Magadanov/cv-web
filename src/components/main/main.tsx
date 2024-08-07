import About from "./about/about";
import Experience from "./experience/experience";
import cls from "./main.module.css";

export default function Main() {
    return (
        <main id="content" className={cls.main}>
            <About />
            <Experience />
        </main>
    );
}
