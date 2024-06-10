import React, { useEffect, useState } from "react";
import MemeCard from "../components/card";
import {getAllMemes} from '../api/memes'

const Homepage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getAllMemes().then(memes => setData(memes.data.memes));
    }, []);
    return(
        <div class="container mx-auto p-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                data.map(el => <MemeCard img={el.url} title={el.name}/>)
            }
        </div>
        </div>

    )
};

export default Homepage;


