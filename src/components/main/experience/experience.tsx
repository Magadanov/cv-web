import LinkArrow from "../../../assets/link-arrow";
import Card from "../card/card";
import cls from "../main.module.css";

const experience = [
    {
        title: "Frontend Developer",
        description:
            "Develop an advanced web-based report builder, which will reduce staff costs and optimize processes in departments. Create websites for interactive data visualization using TypeScript and React to create and manage front-end components.",
        badges: ["React", "Typescript", "Javascript", "Scss", "Nginx"],
        label: "Dec. 2023 – present",
    },
    {
        title: "Python Developer",
        description:
            "Using Python, Dash, and Streamlit to build web applications that boost the availability of government data to key stakeholders. Improved the ETL process for the data warehouse, leading to better data quality and easier access.",
        badges: ["Python", "Dash", "Streamlit", "Plotly", "Selenium", "Pandas"],
        label: "May 2023 – Dec. 2023",
    },
    {
        title: "ML Engineer Intern",
        description:
            "Built a chatbot using OpenAI’s GPT-4 model to deliver instant responses and assistance from a knowledge base. Developed a multilingual speech-to-speech translation system, facilitating smooth communication across various languages.",
        badges: ["Python", "Fast API", "OpenAI"],
        label: "Sep. 2023",
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
            <br />
            <a
                style={{ color: "var(--color-contrast)" }}
                href="/MagadanovBekdauletCV.pdf"
            >
                View full CV <LinkArrow fill="var(--color-contrast)" />
            </a>
        </section>
    );
}
