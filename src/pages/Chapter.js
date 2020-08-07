import React from "react";
import {Link} from "react-router-dom";

const Chapter = (props) => {
    const params = props.match.params;
    return (
        <div>
            <h3>I am {params.chapterId} page</h3>

            <li><Link to={`${props.match.url}/nested`}> Nested Route</Link></li>

        </div>
    )
};

export default Chapter;