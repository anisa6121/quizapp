import React, { useState } from 'react';
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
const [open, setopen] = useState(false)

	return (
		<div>
			<div className="containere">
				<div className="flex justify-evenly flex-wrap">
					<div>
						<h1 className="text-2xl">
							{question}
						</h1>
					</div>

					<div
						onClick={() => setopen(!open)}
						className="h-6 w-6  text-blue-500"
					>
						{open ? <EyeIcon /> : <EyeIcon></EyeIcon>}
					</div>
<ul
className={`bg-purple-200 md:flex justify-end  absolute duration-500 ease-in  w-auto p-3  rounded-lg ${open? "right-10": "top-[-120px]"
	}`}>{correctAnswer}
	</ul>
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