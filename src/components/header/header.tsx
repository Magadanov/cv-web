import styles from "./header.module.css";
import GithubIcon from "../../assets/github";
import LinkedinIcon from "../../assets/linkedin";
import MailboxIcon from "../../assets/mainbox";
import Menu from "../menu/menu";

const links = [
    {
        icon: GithubIcon,
        alt: "github",
        link: "https://github.com/Magadanov",
    },
    {
        icon: LinkedinIcon,
        alt: "linkedin",
        link: "https://www.linkedin.com/in/bekdaulet-magadanov-760a21229/",
    },
    {
        icon: MailboxIcon,
        alt: "Mail",
        link: "mailto:magadanovbekdaulet@gmail.com",
    },
];

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <a href="/">
                    <h1>Magadanov Bekdaulet</h1>
                </a>
                <h2 style={{ marginTop: ".2rem" }}>Frontend Engineer</h2>
                <p
                    style={{
                        marginTop: "1rem",
                        color: "var(--color-medium-blue)",
                        width: "320px",
                    }}
                >
                    I build pixel-perfect, engaging, and accessible digital
                    experiences.
                </p>
                <br />
                <br /> <Menu />
            </div>
            <div className={styles.links}>
                {links.map((item) => {
                    return (
                        <a key={item.alt} href={item.link}>
                            {item.icon({ fill: "var(--color-medium-blue)" })}
                        </a>
                    );
                })}
            </div>
        </header>
    );
}
