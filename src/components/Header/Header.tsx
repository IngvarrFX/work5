import React from "react";
import styles from "./Header.module.css";
import {useLocation} from "react-router-dom";

export const Header = () => {
    const breadcrumbs: {[key: string]: string} = {
        "/main": "Главная",
        "/myshops": "Мои магазины",
        "/promo": "Промоматериалы",
        "/statistics": "Статистика",
        "/balance": "Баланс",
        "/personaldata": "Персональные данные",
        "/faq": "FAQ",
        "/support": "Техподдержка",
        "/out": "Выход",
    }
    let location = useLocation();

    return (
        <div className={styles.header}>
            <div className={styles.breadcrumb}>
                {breadcrumbs[location.pathname]}
            </div>
            <div className={styles.rightBlock}>
                <div className={styles.alert}></div>
                <div className={styles.profile}>
                    <div className={styles.image}></div>
                    <div className={styles.name}>Igor Nurov</div>
                </div>
            </div>
        </div>
    );
};
