import React from "react";
import cls from "../menu.module.css";

interface MenuItemI {
    text: string;
    link: string;
}

export default function MenuItem({ text, link }: MenuItemI) {
    const element = React.useRef<HTMLLIElement>(null);
    return (
        <li className={`caption bold menuItem`} ref={element}>
            <a href={link}>
                <span className={cls.line} /> &emsp;
                {text}
            </a>
        </li>
    );
}
