import { FilteredValues } from "./App";
import { Button } from "./Button";

type Props = {
    title: string;
    tasks: Task[];
    deleteTask: (task: Task["id"]) => void;
    changeFilter: (nextFilter: FilteredValues) => void;
    addTask: (title: string) => void;
};

export type Task = {
    id: string;
    title: string;
    isDone: boolean;
};

export const TodolistItem = ({
    title,
    tasks,
    deleteTask,
    changeFilter,
    addTask,
}: Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input />
                <Button
                    title={"+"}
                    onClickHandler={() => {
                        addTask("New Task");
                    }}
                />
            </div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {tasks.map((task) => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone} />
                                <span>{task.title}</span>
                                <Button
                                    title={"x"}
                                    onClickHandler={() => deleteTask(task.id)}
                                />
                            </li>
                        );
                    })}
                </ul>
            )}
            <div>
                <Button
                    title={"All"}
                    onClickHandler={() => changeFilter("all")}
                />
                <Button
                    title={"Active"}
                    onClickHandler={() => changeFilter("active")}
                />
                <Button
                    title={"Completed"}
                    onClickHandler={() => changeFilter("completed")}
                />
            </div>
        </div>
    );
};
