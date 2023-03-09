import React, { useState, useEffect } from "react";
import "../App.css";
import {
  collection,
  // addDoc,
  getDocs,
  // doc,
  // updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
// import localStorage from "localStorage";

const Test = () => {
  //   const [book, setBook] = useState(false);
  const [todos, setTodos] = useState([]);

  // const addTodo = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const docRef = await addDoc(collection(db, "todos"), {
  //       todo: todo,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };

  // function updateBooking(book, table, user) {
  //   const tableId = [
  //     "7clvepOH0BugOYWqiRqx",
  //     "BkzvILDCtBThE5jr2NcQ",
  //     "kZ2xCXLk6M3prWFJkRMd",
  //   ];
  //   const tableRef = doc(db, "booking", tableId[table]); //where("email", "==", email)
  //   console.log(tableRef);
  //   const data = {
  //     state: book,
  //     user: user,
  //   };
  //   updateDoc(tableRef, data)
  //     .then((tableRef) => {
  //       console.log("you have booked this table");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  const fetchPost = async () => {
    await getDocs(collection(db, "booking")).then((querySnapshot) => {
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

  // function verif(t, v) {
  //   if (v === "book") {
  //     if (localStorage.getItem("logged") && !t) {
  //       return false;
  //     } else return true;
  //   } else {
  //     if (JSON.parse(localStorage.getItem("email")) == t) {
  //       console.log("condition validé");
  //       return false; //false
  //     } else return true; //true
  //   }
  // }

  return (
    <section className="todo-container">
      <div className="todo">
        <h1 className="header">Test-App</h1>
        <div className="todo-content">
          <button onClick={fetchPost}>fetch all</button>
          <button onClick={() => console.log(todos[2].user)}>todos</button>
          {todos?.map((todo, i) => {
            // console.log(todo.user);
            // console.log(JSON.parse(localStorage.getItem("email")));

            return (
              <p key={i}>
                {todo.date} | {todo.idBooking} | {todo.tableRef} |{todo.user}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Test;
