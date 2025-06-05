import './App.css'
import {Task, TodolistItem} from './TodolistItem'
import {useState} from "react";

export const App = () => {
	
	
	const [tasks, setTasks] = useState<Task[]>(
		[
			{id: 1, title: 'HTML&CSS', isDone: true},
			{id: 2, title: 'JS', isDone: true},
			{id: 3, title: 'ReactJS', isDone: false},
			{id: 4, title: 'Redux', isDone: false},
			{id: 5, title: 'Typescript', isDone: false},
			{id: 6, title: 'RTK query', isDone: false},
		]
	)
	
	const deleteTask = (taskId: Task['id']) => {
		const nextState = tasks.filter(t => t.id !== taskId)
		setTasks(nextState)
	}
	
	
	return (
		<div className="app">
			<TodolistItem
				title="What to learn"
				tasks={tasks}
				deleteTask={deleteTask}
			/>
		</div>
	)
}
