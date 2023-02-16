import React, { useState, useEffect } from "react";
import "../App.css";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const Todo = () => {
  //   const [book, setBook] = useState(false);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: todo,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  function updateBooking(book, table) {
    const tableId = [
      "7clvepOH0BugOYWqiRqx",
      "BkzvILDCtBThE5jr2NcQ",
      "kZ2xCXLk6M3prWFJkRMd",
    ];
    const tableRef = doc(db, "tables", tableId[table]); //where("email", "==", email)
    console.log(tableRef);
    const data = {
      state: book,
    };
    updateDoc(tableRef, data)
      .then((tableRef) => {
        console.log("you have booked this table");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const fetchPost = async () => {
    await getDocs(collection(db, "tables")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(newData);
      console.log(todos, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <section className="todo-container">
      <div className="todo">
        <h1 className="header">Todo-App</h1>
        <div>
          <div>
            <input
              type="text"
              placeholder="What do you have to do today?"
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>

          <div className="btn-container">
            <button type="submit" className="btn" onClick={addTodo}>
              Submit
            </button>
          </div>
        </div>
        <div className="todo-content">
          <button onClick={fetchPost}>fetch all</button>
          {todos?.map((todo, i) => (
            <p key={i}>
              {todo.table} | {todo.state ? "booked | " : "not booked | "}|
              <button
                onClick={() => {
                  // setBook(true);
                  // console.log("btn : " + book);
                  updateBooking(true, i);
                }}
              >
                BOOK
              </button>
              <button
                onClick={() => {
                  // setBook(false);
                  // console.log("btn : " + book);
                  updateBooking(false, i);
                }}
              >
                UNBOOK
              </button>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Todo;
