import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Answerquiz from '../Answerquiz/Answerquiz';
import "./Quizdetails.css";
const Quizdetails = () => {

    const loadData = useLoaderData()
    // console.log(loadData)
    const Data = loadData.data
    console.log(Data)

const getData = loadData.data.questions
    // console.log(getData)
    return (
        <div>
            {
                getData.map(data =>
                    <Answerquiz
                        data={data}
                        key={data.id}
                    Data ={Data}
                    ></Answerquiz>)
}
          
        </div>
    );
};

export default Quizdetails;