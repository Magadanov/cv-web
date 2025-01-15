import { useEffect } from "react";
import MenuItem from "./menu-item/menu-item";
import cls from "./menu.module.css";

export default function Menu() {
    useEffect(() => {
        function setActiveClass() {
            const menuItems = document.querySelectorAll(".menuItem");
            const headers = document.getElementsByTagName("section");
            const headerOffsets = Array.from(headers).map((header) => {
                return {
                    id: header.id,
                    offsetTop: header.offsetTop,
                };
            });

            const scrollPosition =
                document.documentElement.scrollTop || document.body.scrollTop;
            const screenHeight = window.innerHeight / 2;
            let itemId: number;

            headerOffsets.forEach((header, index) => {
                if (scrollPosition + screenHeight >= header.offsetTop) {
                    itemId = index;
                }
            });
            menuItems.forEach((link, index) => {
                link.classList.remove(cls.active);
                if (index === itemId) {
                    link.classList.add(cls.active);
                }
            });
        }
        setActiveClass();

        window.addEventListener("scroll", setActiveClass);
    }, []);
    return (
        <ul className={cls.menu} style={{ marginTop: "1rem" }}>
            <MenuItem text="ABOUT" link="/#about" />
            <MenuItem text="EXPERIENCE" link="/#experience" />
            <MenuItem text="PROJECTS" link="/#projects" />
            <MenuItem text="COURSES" link="/#courses" />
        </ul>
    );
}
