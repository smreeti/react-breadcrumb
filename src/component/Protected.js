import React from "react";
import {Redirect, Route} from "react-router-dom";

export const ProtectedRoute = ({
                                   component: Component,
                                   ...rest
                               }) => {
    return (
        <Route
            {...rest}
            render={props => {

                if (localStorage.getItem('login')) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};