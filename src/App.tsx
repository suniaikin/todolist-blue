import { v1 } from "uuid";
import "./App.css";
import { Task, TodolistItem } from "./TodolistItem";
import { useState } from "react";

export type FilteredValues = "all" | "active" | "completed";

export const App = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "Redux", isDone: false },
        { id: v1(), title: "Typescript", isDone: false },
        { id: v1(), title: "RTK query", isDone: false },
    ]);

    const deleteTask = (taskId: Task["id"]) => {
        const nextState = tasks.filter((t) => t.id !== taskId);
        setTasks(nextState);
    };

    const addTask = (title: string) => {
        const newTask: Task = {
            id: v1(),
            title: title,
            isDone: false,
        };
        setTasks([...tasks, newTask]);
    };

    const [filter, setFilter] = useState<FilteredValues>("all");
    const filteredTasks = tasks.filter((task) => {
        if (filter === "all") return true;
        if (filter === "active") return !task.isDone;
        if (filter === "completed") return task.isDone;
        return true;
    });

    const changeFilter = (nextFilter: FilteredValues) => {
        setFilter(nextFilter);
    };

    return (
        <div className="app">
            <TodolistItem
                title="What to learn"
                tasks={filteredTasks}
                deleteTask={deleteTask}
                changeFilter={changeFilter}
                addTask={addTask}
            />
        </div>
    );
};
