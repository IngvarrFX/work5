import React from "react";
import styles from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";
import {Logo} from "../../icons/Logo";
import {LinksSvgSelector} from "../../icons/linksSvgSelector";

export const Sidebar = () => {
    //const navLinks = ["Главная", "Мои магазины", "Проматериалы", "Статистика", "Баланс", "Персональные данные", "FAQ", "Техподдержка", "Выход"];
    const navLinks: Array<{ id: number, name: string, className: string, img: string }> = [
        {
            id: 1,
            name: "Главная",
            className: "main",
            img: "#",
        },
        {
            id: 2,
            name: "Мои магазины",
            className: "myShops",
            img: "#",
        },
        {
            id: 3,
            name: "Промоматериалы",
            className: "promo",
            img: "#",
        },
        {
            id: 4,
            name: "Статистика",
            className: "statistics",
            img: "#",
        },
        {
            id: 5,
            name: "Баланс",
            className: "balance",
            img: "#",
        },
        {
            id: 6,
            name: "Персональные данные",
            className: "personalData",
            img: "#",
        },
        {
            id: 7,
            name: "FAQ",
            className: "FAQ",
            img: "#",
        },
        {
            id: 8,
            name: "Техподдержка",
            className: "support",
            img: "#",
        },
        {
            id: 9,
            name: "Выход",
            className: "out",
            img: "#",
        },


    ]
    return (
        <nav className={styles.sidebar}>
            <div className={styles.logo}>
                <Logo/>
            </div>
            <div className={styles.links}>
                {navLinks.map((page) => {
                    return (<div key={page.id}>
                        <NavLink
                            className={(navData: { isActive: boolean }) => navData.isActive ? styles["Active"] : ""}
                            key={page.id}
                            to={`/${page.className.toLowerCase()}`}>
                            <LinksSvgSelector name={page.className}/>
                            {page.name}
                        </NavLink>
                    </div>)
                })
                }
            </div>
        </nav>
    );
};
