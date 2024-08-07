import cls from "../main.module.css";

export default function About() {
    return (
        <section id="about">
            <div className={cls.section_head}>
                <h2 className="paragraph">ABOUT</h2>
            </div>
            <p style={{ paddingInline: ".7rem" }}>
                A year ago, I decided to delve into the world of frontend
                development, working as a Python developer at DGSC. Thanks to
                the support of colleagues who helped me move forward on the path
                of programming, I continued my work as an Frontend developer.
                Fast forward to today, and I had the opportunity to develop and
                enhance web components for the government company, integrate
                complex systems.
                <br />
                <br />I am currently focused on creating user-friendly and
                attractive user interfaces while integrating advanced server
                features. I thrive at the intersection of design and
                engineering, making sure that the software not only looks great,
                but also works exceptionally well. In my free time, I try to
                explore approaches to using different frameworks when creating a
                web platform.
                <br />
                <br />
                When I&apos;m not programming, you can find me reading books,
                watching movies or podcasts, as well as studying the latest
                trends in technology.
            </p>
        </section>
    );
}
