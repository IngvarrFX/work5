import React from "react";
import styles from "./Shop.module.css";
import {ShopType} from "../../Context/appContext";
import {Button} from "../Button";

type ShopPropsType = {
    shop: ShopType
}

export const Shop = (props: ShopPropsType) => {
    const {shop} = props;
    return (<tr className={styles.row}>
            <td>{shop.number}</td>
            <td>{shop.name}</td>
            <td>{shop.address}</td>
            <td>
                <div className={styles.btn}>
                    <Button title={"Редактировать"} className={"edit"}/>
                    <Button title={"Редактировать"} className={"remove"}/>
                </div>
            </td>
        </tr>
    );
};
