import React from 'react';
import { toast } from 'react-toastify';
import { EyeIcon } from "@heroicons/react/24/solid";
import "./Answerquiz.css";

const Answerquiz = ({ data }) => {
	// console.log(data)
	

	const { options, correctAnswer, question } = data;

	const Answer = (Iscorrect) => {

		if (Iscorrect === correctAnswer) {

			toast.success("your answer is correct", {
				autoClose: 500,
			});

		}
		
		else {
			toast.error("your answer is wrong", { autoClose: 500 });

			
		}

}


	return (
		<div>
			<div className="containere">
				<div className="flex justify-evenly flex-wrap">
					<div>
						<h1 className="text-2xl">
							{question}
						</h1>
					</div>

					<div className="tooltip  font-bold text-blue-500">
						Ans
						<span className="tooltiptext">
							{correctAnswer}
						</span>
					</div>

					{/* <div className="tooltip  font-bold text-blue-500">
						Ans
						<span className="tooltiptext">
							{correctAnswer}
						</span>
					</div> */}
				</div>

				<div className="btn-grid">
					{options.map((option) => (
						<button
							className="btn"
							onClick={() => Answer(option)}
						>
							{option}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Answerquiz;