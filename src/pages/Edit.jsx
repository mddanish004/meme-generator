import React, { useState, createRef } from "react";
import { useSearchParams } from 'react-router-dom';
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";



const EditPage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);


    const memeRef = createRef();

    const addText = () => {
        setCount(count + 1);
    }

    return (
        <div className="flex flex-col items-center">
            <div style={{ border: '1px solid', width: '700px' }} ref={memeRef} className="border-2 border-gray-300 rounded-lg mt-5 mb-5 p-4 ">
                <img src={params.get('url')} className="w-full rounded" />
                {
                    Array(count)
                        .fill(0)
                        .map((e) => (
                            <Text />
                        ))}
            </div>
            <button onClick={addText} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Add Text</button>
            <button variant="success" onClick={e => exportComponentAsJPEG(memeRef)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-5">Save</button>
        </div>
    )
};
export default EditPage;