'use client'
import React, { useEffect, useState } from 'react'
import data from '../../../public/questions.json'
import { Quiz } from './Quiz'

export const AppComponent = () => {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-teal-700'>
			<Quiz questions={data} />
		</div>
	)
}
