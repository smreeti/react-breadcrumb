import React from "react";

const NestedChapter = (props) => {
    const params = props.match.params;
    console.log(params);


    return (
        <div>
            <h3>I am nested </h3>
        </div>
    )
};

export default NestedChapter;