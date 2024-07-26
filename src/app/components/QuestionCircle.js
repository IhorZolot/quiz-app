import React from 'react'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

export const QuestionCircle = ({ isCorrect }) => {
	return (
		<div
			className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
				isCorrect === null ? 'bg-gray-300' : isCorrect ? 'bg-green-600' : 'bg-red-500'
			}`}
		>
			{isCorrect === null ? null : isCorrect ? <AiOutlineCheck size={20} /> : <AiOutlineClose size={20} />}
		</div>
	)
}
