import Card from "../card/card";
import cls from "../main.module.css";

const courses = [
    {
        title: "Javascript | RS School",
        description: "",
        badges: ["React", "Typescript", "Javascript"],
        label: " Nov. 2023– May 2024",
    },
    {
        title: "Angular | RS School",
        description: "",
        badges: ["Angular"],
        label: "June 2023 – present",
    },
];

export default function Courses() {
    return (
        <section id="courses" style={{ marginBottom: "200px" }}>
            <div className={cls.section_head}>
                <h2 className="paragraph">COURSES</h2>
            </div>
            {courses.map((item) => {
                return <Card key={item.title} {...item} />;
            })}
        </section>
    );
}
