import React from "react";
import { Button } from "antd";

export const ButtonComponent = ({handleClick}) => {
    return (
        <Button onClick={handleClick}>Создать пост</Button>
    )
}