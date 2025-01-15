import Card from "../card/card";
import cls from "../main.module.css";

const experience = [
    {
        title: "Frontend Developer Intern",
        description:
            "Develop LIMS system, that helps laboratory staff effectively monitor and manage their inventory, including monitoring usage, inventory levels, and system alerts",
        badges: ["Angular", "Typescript", "RxJs", "Signal"],
        label: "Sep. 2024 – Dec 2024",
    },
    {
        title: "Software Engineer",
        description:
            "Develop an advanced web-based report builder, which will reduce staff costs and optimize processes in departments. Create websites for interactive data visualization using TypeScript and React to create and manage front-end components. Using Python and Dash to build web applications that boost the availability of government data to key stakeholders.",
        badges: [
            "React",
            "NextJS",
            "Typescript",
            "Javascript",
            "Scss",
            "Nginx",
            "Jest",
        ],
        label: "May 2023 – Dec 2024",
    },
];

export default function Experience() {
    return (
        <section id="experience">
            <div className={cls.section_head}>
                <h2 className="paragraph">EXPERIENCE</h2>
            </div>
            {experience.map((item) => {
                return <Card key={item.title} {...item} />;
            })}
        </section>
    );
}
