import React from "react";
import styles from "./Button.module.css";

type PropsType = {
    title: string
    className? : "primary" | "secondary" | "success" | "add" | "remove" | "edit"
}

export const Button = (props: PropsType) => {
    const {title, className} = props;
    return (<button className={className ? styles[className] : styles.primary}>{title}</button>
    );
};
