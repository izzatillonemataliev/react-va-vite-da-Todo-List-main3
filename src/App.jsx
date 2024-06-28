import { useState, useRef } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Modal from "./components/modal";
import { Provider } from 'react-redux';
import "./App.css";
function App() {
  const input = useRef();
  const [todos, setdodos] = useState([]);
  const [showModal, setshowModal] = useState({
    show: false,
    todoid: "",
  });
  function creat(e) {
    e.preventDefault();
    let data = new Date();
    let newTodo = {
      id: data.getTime(),
      text: input.current.value,
      complited: false,
      time: data.toLocaleString("uz-Uz", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    input.current.value = "";
    return setdodos((prev) => [...prev, newTodo]);
  }
  function deleteItem(itemid) {
    setdodos((prev) => prev.filter((todo) => todo.id !== itemid));
  }
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="orab">
            <form className="form" onSubmit={creat}>
              <input
                placeholder="Enter Todo"
                className="input"
                ref={input}
                required
                type="text"
              ></input>
              <div className="btn-orab">
                <button className="btn">Add</button>
              </div>
            </form>
          </div>
          <ul className="todos-list">
            {todos.map(({ id, text, time, complited }, ind) => {
              return (
                <li className="li" key={id}>
                  <p>{text}</p>
                  <p>{time}</p>
                  <div className="div">
                    <button
                      onClick={() =>
                        setshowModal((prev) => {
                          return { ...prev, show: true, todoid: id };
                        })
                      }
                      className="img1"
                    >
                      {" "}
                      edit
                    </button>

                    <button onClick={() => deleteItem(id)} className="img">
                      delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
      {/* <Footer /> */}
      {showModal.show && (
        <Modal
          setdodos={setdodos}
          itemid={showModal.todoid}
          closeModal={setshowModal}
        />
      )}
    </>
  );
}

export default App;
