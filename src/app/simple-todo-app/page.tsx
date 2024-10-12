"use client";
import { z } from "zod";
import React from "react";
import { Button } from "@/components/ui/button";
const todoSchema = z.object({
    text: z.string(),
    isCompleted: z.boolean(),
});

type TodoType = z.infer<typeof todoSchema>;

type todoCheck = {
    todo: TodoType;
    index: number;
    completeTodo: (index: number) => void;
    deleteTodo: (index: number) => void;
};
function Todo({ todo, index, completeTodo, deleteTodo }: todoCheck) {
    return (
        <div className=" flex gap-2 justify-between  bg-white  items-center  border-2 border-gray-300 rounded-md p-2 hover:bg-gray-100 ">
            <div
                data-testid="todo-item"
                style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
                {todo.text}
            </div>
            <div className="flex gap-2">
                <Button variant={"default"} onClick={() => completeTodo(index)}>
                    ./
                </Button>
                <Button variant={"destructive"} onClick={() => deleteTodo(index)}>
                    X
                </Button>
            </div>
        </div>
    );
}

function TodoForm({ addTodo }: { addTodo: (text: string) => void }) {
    const [value, setValue] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input w-full border-2 border-gray-300 rounded-md p-2"
                value={value}
                data-testid="todo-input"
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add todo"
            />
        </form>
    );
}

function TodoApp() {
    const [todos, setTodos] = React.useState<TodoType[]>([
        { text: "Learn about React", isCompleted: false },
        { text: "Meet friend for lunch", isCompleted: false },
        { text: "Build really cool todo app", isCompleted: false },
    ]);

    const addTodo = (text: string) => {
        const newTodos = [...todos, { text, isCompleted: false, id: Math.random() * 1000 }];
        setTodos(newTodos);
    };

    const completeTodo = (index: number) => {
        const newTodos = [
            ...todos.slice(0, index),
            { text: todos[index].text, isCompleted: true },
            ...todos.slice(index + 1),
        ];
        setTodos(newTodos);
    };

    const deleteTodo = (index: number) => {
        const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
        setTodos(newTodos);
    };

    return (
        <div className="app h-screen flex flex-col bg-white gap-3 justify-center items-center">
            <h2 data-testid="title" className="text-3xl font-bold">
                Todo App
            </h2>
            <TodoForm addTodo={addTodo} />
            <div className=" flex flex-col gap-2  ">
                {todos.map((todo, index) => (
                    <Todo
                        deleteTodo={deleteTodo}
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoApp;
