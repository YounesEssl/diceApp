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
import localStorage from "localStorage";
import DateTimePicker from "react-datetime-picker";

const Todo = () => {
  //   const [book, setBook] = useState(false);
  const [todo, setTodo] = useState("");
  const [tables, setTable] = useState([]);
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState();

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

  function updateBooking(book, table, user, date, hour) {
    const tableId = ["table 1"];
    const tableRef = doc(db, "table", tableId[table]); //where("email", "==", email)
    console.log(tableRef);
    const data = {
      state: book,
      user: user,
      date: date,
      hour: hour,
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
    await getDocs(collection(db, "table")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTable(newData);
      console.log(tables, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  function verif(t, v) {
    if (v === "book") {
      if (localStorage.getItem("logged") && !t) {
        return false;
      } else return true;
    } else {
      if (JSON.parse(localStorage.getItem("email")) === t) {
        console.log("condition validé");
        return false; //false
      } else return true; //true
    }
  }

  // ---------function qui permet de mettre l'heure comme il faut
  const dateReform = (format) => {
    const date = value.toString().split(" ");
    if (format === "date") {
      return `${date[0]} - ${date[1]} - ${date[2]} - ${date[3]}`;
    } else {
      return `${date[4]}`;
    }
  };

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
          <button onClick={() => console.log(tables[2].user)}>todos</button>
          {tables?.map((t, i) => {
            // console.log(todo.user);
            // console.log(JSON.parse(localStorage.getItem("email")));

            return (
              <>
                <p key={i}>
                  {t.id} | {t.state ? "booked | " : "not booked | "}|
                  <button
                    hidden={verif(t.state, "book")}
                    onClick={() => {
                      setDate(value.toString().split(" "));
                      // dateReform();
                      updateBooking(
                        true,
                        i,
                        JSON.parse(localStorage.getItem("email")),
                        dateReform("date"),
                        dateReform()
                      );
                    }}
                  >
                    BOOK
                  </button>
                  <button
                    hidden={verif(t.user)}
                    onClick={() => {
                      updateBooking(false, i, "", "", "");
                    }}
                  >
                    UNBOOK
                  </button>
                </p>
                <DateTimePicker
                  onChange={onChange}
                  value={value}
                  // format={"y MMMM dd | HH-mm"}
                  // returnValue={"end"}
                />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Todo;
