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

  // fonction qui récupère tous ce qui ce trouve dans la table gamList
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

      {/* button qui permet d'afficher ou nan la liste de jeux en changeant le la variable showList par true ou false */}
      <button
        onClick={() => {
          showList ? setShowList(false) : setShowList(true);
        }}
      >
        Show List
      </button>

      {/* balise html pour faire un tableau */}
      <table hidden={showList}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Condition</th>
          </tr>
        </thead>
        <tbody>
          {/* code permettant de faire la liste des jeux qui ce trouve dans la table gamList 
          
          - Le .map() récupère chaque objets de jeux
          - Les mets dans le tableau (la balise et non un array)
          - On récupère ce que l'on veut avec le game.name|quantity|condition

          - Le key={i} est la pour faire jolie et pour pas qu'on est une erreur dans la console
          
          */}
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
