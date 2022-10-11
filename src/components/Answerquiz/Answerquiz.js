import React, { useState } from 'react';
import "./Answerquiz.css";

const Answerquiz = ({data, Data}) => {
console.log(Data)
	const { question, options, correctAnswer } = data;
	


    return (
		<div>
			<div className="text-center text-2xl mt-16 mb-12">
				<h2 className=" text-sky-400 text-3xl font-bold">
					Quiz of {Data.name}
				</h2>
				<p>Total Question:{Data.total}</p>
				<h1>Score:</h1>
			</div>

			<div className="container">
				<div className="flex justify-evenly flex-wrap">
					<div>
						<h1 className="text-2xl">
							Question: {question}
						</h1>
					</div>

	<div className="tooltip  font-bold text-blue-500"> Ans:<span className="tooltiptext">{correctAnswer}</span>
	</div>
	</div>

				<div className="btn-grid">
					{options.map((option) => (
						<button className="btn">
							{option}
						</button>
					))}
				</div>
			</div>
		</div>
    );
};

export default Answerquiz;