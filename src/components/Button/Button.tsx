import React from "react";
import styles from "./Button.module.scss";

type PropsType = {
    title: string
    className?: "primary" | "secondary" | "success" | "add" | "remove" | "edit" | "close"
    onClick: () => void
    children?:React.ReactNode
}

export const Button = (props: PropsType) => {
    const {title, className, onClick, children} = props;
    return (<button className={className ? styles[className] : styles.primary} onClick={onClick}>
            {children}
            {title}
    </button>
    );
};
