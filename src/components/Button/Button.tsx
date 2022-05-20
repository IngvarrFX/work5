import React from "react";
import styles from "./Button.module.css";

type PropsType = {
    title: string
    className?: "primary" | "secondary" | "success" | "add" | "remove" | "edit" | "close"
    onClick: () => void
}

export const Button = (props: PropsType) => {
    const {title, className, onClick} = props;
    return (<button className={className ? styles[className] : styles.primary} onClick={onClick}>{title}</button>
    );
};
