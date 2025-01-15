import LinkArrow from "../../../assets/link-arrow";
import Card from "../card/card";
import cls from "../main.module.css";

const projects = [
    {
        title: "Ambulance and hospital monitoring system",
        description:
            "Create a platform that coordinates the work of ambulances, manages the distribution of calls, and coordinates interaction with hospitals to reduce response time.",
        badges: ["NextJS", "NestJS", "MySql", "OpenStreetMap", "Nginx"],
        label: "TurarHealth",
    },
];

export default function Projects() {
    return (
        <section id="projects">
            <div className={cls.section_head}>
                <h2 className="paragraph">PROJECTS</h2>
            </div>
            {projects.map((item) => {
                return <Card key={item.title} {...item} />;
            })}
        </section>
    );
}
