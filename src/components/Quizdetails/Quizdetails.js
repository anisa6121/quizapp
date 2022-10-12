import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Answerquiz from '../Answerquiz/Answerquiz';
import "./Quizdetails.css";
const Quizdetails = () => {

    const loadData = useLoaderData()
    console.log(loadData)
    const getData = loadData.data.questions
    console.log(getData)




 return (
		<div>
			<div className="text-center text-2xl mt-16 mb-12">
				<h2 className=" text-sky-400 text-3xl font-bold">
					Quiz of {loadData.data.name}
				</h2>
				<p>Total Question: {loadData.data.total}</p>
				<h1>Score:</h1>
			</div>

			{getData.map((data) => (
				<Answerquiz
					data={data}
					key={data.id}
					
				></Answerquiz>
			))}
		</div>
 );
};

export default Quizdetails;