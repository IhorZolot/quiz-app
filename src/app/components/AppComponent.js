'use client'
import React, { useEffect, useState } from 'react'

import { Quiz } from './Quiz'

export const AppComponent = () => {
	const [questions, setQuestions] = useState([])

	useEffect(() => {
		fetch('/questions.json')
			.then(response => response.json())
			.then(data => setQuestions(data))
	}, [])

	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-teal-700'>
			{questions.length > 0 ? <Quiz questions={questions} /> : <p>Loading...</p>}
		</div>
	)
}
