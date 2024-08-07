import Subitems from "../sub-items/sub-items";
import cls from "./card.module.css";

interface CardI {
    title: string;
    description: string;
    badges: string[];
    label: string;
}

export default function Card({ title, description, badges, label }: CardI) {
    return (
        <div className={cls.section}>
            <div className={cls.card}>
                <aside className="caption" style={{ textWrap: "nowrap" }}>
                    {label}
                </aside>
                <div className={cls.content}>
                    <p className="bold" style={{ color: "var(--color-title)" }}>
                        {title}
                    </p>
                    <p className="subtext noselect">{description}</p>
                    <div>
                        <Subitems items={badges} />
                    </div>
                </div>
            </div>
        </div>
    );
}
