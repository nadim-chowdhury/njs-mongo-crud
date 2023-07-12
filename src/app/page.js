"use client";
import { useState } from "react";
import Todo from "@/model/todo";
import mongoose from "mongoose";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function newTodo(data) {
    let title = data.get("title")?.valueOf();
    let description = data.get("description")?.valueOf();

    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/crud.data", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      let newTodo = new Todo({ title, description });
      await newTodo.save();

      console.log(newTodo);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold py-4">CRUD Todo</h1>

      <form action={newTodo}>
        <div>
          <label htmlFor="title" className="text-lg text-green-500">
            Title
          </label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Your Title"
            value={title}
            className="border rounded w-full px-4 py-2 mt-2"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="title" className="text-lg text-green-500">
            Description
          </label>
          <br />
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Enter Your Description"
            value={description}
            className="border rounded w-full px-4 py-2 mt-2"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 mt-6 py-1 rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
