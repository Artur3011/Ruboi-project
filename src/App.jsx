import { useState, useRef } from "react";
import "./global.scss";
import { data } from "./store/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [add, setAdd] = useState("");
  const [edit, setEdit] = useState(NaN);

  function changeItem(id) {
    setEdit(id);
  }

  function addfn(id) {
    if (add == "") return;
    data.map((el) => {
      if (el.id == id) {
        el.title = add;
      }
    });
    setEdit(NaN);
    setAdd("");
  }

  return (
    <div className="App">
      <div className="listContainer">
        <h1>My Lessons</h1>
        <div className="list">
          {data.map((item) => (
            <div className="listItem" key={item.id}>
              <p>{item.id}</p>
              {/* {edit ? (
                <input value={add} onChange={(e) => setAdd(e.target.value)} />
              ) : (
                <h2>{item.title}</h2>
              )} */}
              {item.id === edit ? (
                <input
                  type="text"
                  value={add}
                  onChange={(e) => setAdd(e.target.value)}
                />
              ) : (
                <h2>{item.title}</h2>
              )}

              {edit ? (
                <div className="buttons">
                  <button onClick={() => addfn(item.id)} className="changeBtn">
                    V
                  </button>
                  <button onClick={() => setEdit(false)} className="changeBtn">
                    X
                  </button>
                </div>
              ) : (
                <div className="buttons">
                  <button
                    onClick={() => changeItem(item.id)}
                    className="changeBtn"
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
