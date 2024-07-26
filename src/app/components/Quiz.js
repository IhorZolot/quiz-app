import React, { useState } from 'react'
import { QuestionCircle } from './QuestionCircle'

export const Quiz = ({ questions }) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
	const [selectedAnswers, setSelectedAnswers] = useState({})
	const [score, setScore] = useState(0)

	const handleAnswerClick = (answerIndex, isCorrect) => {
		if (selectedAnswers[currentQuestionIndex] === undefined) {
			setSelectedAnswers({
				...selectedAnswers,
				[currentQuestionIndex]: { answerIndex, isCorrect },
			})
			if (isCorrect) {
				setScore(prevScore => (prevScore !== null ? prevScore + 1 : 1))
			}
		}
	}

	const handleNextQuestion = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(prevIndex => prevIndex + 1)
		}
	}

	const question = questions[currentQuestionIndex]

	return (
		<div className='w-full max-w-2xl bg-white p-6 rounded-lg shadow-md'>
			<div className='mt-6  border-b-2 border-gray-300 mb-4'>
				<h3 className='text-teal-700 text-lg py-2 font-semibold'>
					Questions {score} of {questions.length}
				</h3>
			</div>
			<div className='mb-4'>
				<h2 className='text-lg font-semibold mb-6'>{question ? question.question : <p>Loading...</p>}</h2>
				<div className='space-y-2'>
					{question?.answers.map((answer, index) => (
						<button
							key={index}
							className={`block w-full text-left p-3 rounded-lg border ${
								selectedAnswers[currentQuestionIndex]?.answerIndex === index
									? answer.isCorrect
										? 'bg-green-600  text-white'
										: 'bg-red-500 text-white'
									: 'bg-gray-300'
							}`}
							onClick={() => handleAnswerClick(index, answer.isCorrect)}
							disabled={selectedAnswers[currentQuestionIndex] !== undefined}
						>
							{answer.text}
						</button>
					))}
				</div>
			</div>
			<button
				className=' bg-teal-700 text-white py-2 px-8 rounded '
				onClick={handleNextQuestion}
				disabled={currentQuestionIndex >= questions.length - 1}
			>
				Next
			</button>
			<div className='mt-4 flex space-x-2'>
				{questions.map((_, index) => (
					<QuestionCircle key={index} isCorrect={selectedAnswers[index]?.isCorrect ?? null} />
				))}
			</div>
		</div>
	)
}
