import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function GameList() {
  const [gameList, setGameList] = useState([]);
  const [showList, setShowList] = useState(true);

  // const addGame = async (e) => {
  //   e.preventDefault();
  //   list.forEach(async (r) => {
  //     try {
  //       const docRef = await addDoc(collection(db, "gameList"), {
  //         name: r.name,
  //         quantity: r.quantity,
  //         condition: r.condition,
  //       });
  //       console.log("Document written with ID: ", docRef.id);
  //     } catch (e) {
  //       console.error("Error adding document: ", e);
  //     }
  //   });
  // };

  const fetchPost = async () => {
    await getDocs(collection(db, "gameList")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setGameList(newData);
      // console.log(gameList, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      {/* <button onClick={addGame}>add game list</button> */}
      <button
        onClick={() => {
          showList ? setShowList(false) : setShowList(true);
        }}
      >
        Show List
      </button>
      <table hidden={showList}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Condition</th>
          </tr>
        </thead>
        <tbody>
          {gameList?.map((game, i) => {
            return (
              <tr key={i}>
                <td>{game.name}</td>
                <td>{game.quantity}</td>
                <td>{game.condition}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
