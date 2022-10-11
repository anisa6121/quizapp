import React from 'react';
import { useLoaderData } from 'react-router-dom';
import "./Quizdetails.css";
const Quizdetails = () => {

    const loadData = useLoaderData()
    // console.log(loadData)
const getData = loadData.data.questions
    console.log(getData)
    return (
        <div>
            
           <h1 className='text-7xl'>This is me</h1> 
        </div>
    );
};

export default Quizdetails;