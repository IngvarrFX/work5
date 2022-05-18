import React from "react";
import styles from "./MyShops.module.css";
import {Button} from "../Button";
import {AppCtx} from "../../Context/appContext";
import {Shop} from "../Shop";

export const MyShops = () => {
    const appContext = React.useContext(AppCtx);
    return (
        <div className={styles.wrapper}>
            <Button title={"Создать свой магазин"} className={"add"}/>
            <div className={styles.title}>Управление магазинами</div>
                <table className={styles.tableBlock}>
                    <tr className={styles.tableHeader}>
                        <th>№</th>
                        <th>Название</th>
                        <th>Адрес</th>
                        <th>Действие</th>
                    </tr>
                    {appContext?.map((shop) => {
                        return (<Shop key={shop.id} shop={shop}/>
                        )
                    })}
                </table>
        </div>
    );
};
