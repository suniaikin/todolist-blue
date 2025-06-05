import "./App.css";
import { Task, TodolistItem } from "./TodolistItem";
import { useState } from "react";

export type FilteredValues = "all" | "active" | "completed";

export const App = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Redux", isDone: false },
        { id: 5, title: "Typescript", isDone: false },
        { id: 6, title: "RTK query", isDone: false },
    ]);

    const deleteTask = (taskId: Task["id"]) => {
        const nextState = tasks.filter((t) => t.id !== taskId);
        setTasks(nextState);
    };

    const [filter, setFilter] = useState<FilteredValues>("all");
    const filteredTasks = tasks.filter((task) => {
        if (filter === "all") return true;
        if (filter === "active") return !task.isDone;
        if (filter === "completed") return task.isDone;
        return true; // Fallback, should not happen
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
            />
        </div>
    );
};
