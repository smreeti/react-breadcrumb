import React from "react";
import {Link, Route} from "react-router-dom";

const crumb = (part, partIndex, parts) => {
    const path = ["", ...parts.slice(0, partIndex + 1)].join("/");
    return <Link key={path} to={path}>/{part}</Link>;
};

const BreadCrumb = () => {
    return (
        <Route
            render={props => {
                /* history.location is mutable so Therefore it is recommended to
                access the location from the render props of <Route>*/

                let parts = props.location.pathname.split("/");
                const lastPlace = parts[parts.length - 1];
                parts = parts.slice(1, parts.length - 1);

                return <p>{parts.map(crumb)}/{lastPlace}
                </p>;
            }}
        />
    )
};

export default BreadCrumb;