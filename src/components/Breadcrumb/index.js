import {Breadcrumb} from "antd";
import React from "react";

export const BreadcrumbComponent = ({children}) => {
    return (
        <Breadcrumb className="breadcrumb">
            {children}
        </Breadcrumb>
    );
};

