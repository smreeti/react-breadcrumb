import React from "react";
import {Link} from "react-router-dom";

const Chapters = (props) => {
    const match = props.match;

    return (
        <div>
            <h2> I am Chapter page!!</h2>
            <ul>
                <li><Link to={`${match.url}/lifecycle`}> Component Life Cycle</Link></li>
                <li><Link to={`${match.url}/routing`}> Routing</Link></li>
            </ul>
        </div>
    )
};

export default Chapters