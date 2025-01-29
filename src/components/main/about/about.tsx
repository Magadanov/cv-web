import cls from "../main.module.css";

export default function About() {
    return (
        <section id="about">
            <div className={cls.section_head}>
                <h2 className="paragraph">ABOUT</h2>
            </div>
            <p style={{ paddingInline: ".7rem" }}>
                I am a Frontend Developer that hands-on experience with React,
                NextJS and Angular frameworks. Driven by the mantra &apos;Stay
                humble, stay hungry,&apos; I am committed to becoming a highly
                skilled and sought-after professional. In my previous role, I
                was involved in two projects and successfully implemented seven
                cases. Additionally, I collaborated with the backend team by
                creating endpoints and working with databases. I also interned
                at a life-science company, where I successfully implemented a
                LIMS.
                <br />
                <br />
                When I&apos;m not programming, you can find me reading books,
                watching movies or podcasts, as well as studying the latest
                trends in technology.
            </p>
        </section>
    );
}
