import React from "react";
import styles from "./Container.module.css";

type ContainerPropsType = {
    children: React.ReactNode
}

export const Container = (props: ContainerPropsType) => {
    const {children} = props;
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};
