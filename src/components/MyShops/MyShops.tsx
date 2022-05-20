import React, {useState} from "react";
import styles from "./MyShops.module.css";
import {Button} from "../Button";
import {AppCtx} from "../../Context/appContext";
import {Shop} from "../Shop";
import {Modal} from "../Modal";
import {Select} from "../Select";

export const MyShops = () => {
    const appContext = React.useContext(AppCtx);
    const [isShow, setIsShow] = useState(false);

    return (
        <div className={styles.wrapper}>
            <Button title={"Создать свой магазин"} className={"add"} onClick={() => setIsShow(true)}/>
            <div className={styles.title}>Управление магазинами</div>
            <div className={styles.tableBlock}>
                <table>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
            <Modal isShow={isShow} closeModal={setIsShow} title={"Создать магазин"}>
                <Select />
            </Modal>
        </div>
    );
};
