import { useState } from "react";
export default function Modal({ closeModal, itemid, setdodos }) {
  let [text, settext] = useState("");
  function hendlsubmit(e) {
    e.preventDefault();
    setdodos((prev) =>
      prev.map((item) => {
        if (item.id === itemid) {
          return { ...item, text };
        }
        return item;
      })
    );
    settext("");
    closeModal((prev) => {
      return { show: false, todoid: null };
    });
  }
  return (
    <>
      <div className="modal">
        <div className="tepaorab">
          <h2 className="edittitle">Edit Modal</h2>
          <button
            onClick={() =>
              closeModal((prev) => {
                return { ...prev, show: false, todoid: "" };
              })
            }
            className="img"
          >
            Close
          </button>
        </div>
        <div className="pasorab">
          <form className="editform" onSubmit={hendlsubmit}>
            <input
              placeholder="Edit Modal"
              className="input editinput"
              type="text"
              value={text}
              required
              onChange={(e) => settext(e.target.value)}
            />
            <div className="btn-orab">
              <button type="submit" className="btn editbtn">
                Save Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
