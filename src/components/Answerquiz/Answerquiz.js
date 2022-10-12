import React, { useState } from 'react';
import "./Answerquiz.css";

const Answerquiz = ({ data }) => {
	// console.log(data)

	const { options, correctAnswer, question } = data;

	const Answer = (Iscorrect) => {
	console.log('helloo', Iscorrect)
}


	return (
		<div>
			<div className="container">
				<div className="flex justify-evenly flex-wrap">
					<div>
						<h1 className="text-2xl">
							{question}
						</h1>
					</div>

					<div className="tooltip  font-bold text-blue-500">
						Ans:
						<span className="tooltiptext">
							{correctAnswer}
						</span>
					</div>
				</div>

   <div className="btn-grid">
  {options.map((option) => (<button className="btn" onClick={()=>Answer(option)} >
    {option}
   </button>
))}
				</div>
			</div>
		</div>
	);
};

export default Answerquiz;