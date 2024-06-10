import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [val, setVal] = useState('Double Click to edit');
    return (
    <Draggable>
    {
        editMode ? <input
        type="text"
        onDoubleClick={() => setEditMode(false)}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        /> : <h1 className="text-3xl font-bold text-black dark:text-black" onDoubleClick={() => setEditMode(true)}>
        {val}</h1>
    }
    </Draggable>
)};

export default Text;