import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {BarChart,Bar,Cell,} from "recharts";
const Chart = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://openapi.programming-hero.com/api/quiz/2")

.then((data) => {
 const loadData = data.data.data.questions
const getData = loadData.map(data =>{

    const dataId = parseInt(data.id);
 const SingleData = {
	id: dataId,
	Answer: data.correctAnswer,
    };
    
    return SingleData
})
    
    setData(getData)
console.log(loadData)

});
       

    },[])
    
    return (
        <>
         
	<BarChart width={500} height={600} data={data} className='lg:m-auto md:m-auto'>
	<Bar dataKey="id" fill="#8884d8" />
	</BarChart>
		</>
    );
};

export default Chart;