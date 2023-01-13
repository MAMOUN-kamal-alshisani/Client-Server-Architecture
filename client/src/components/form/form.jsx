import { useState } from "react";
import axios from "axios";
import Model from "../modal/modal.jsx";
import "./css/form.css";
import Tippy from "@tippyjs/react";

function Form() {
  const [showModal, setShowModal] = useState(false);
  const [useInfo, setInformation] = useState({});
  const [strName, setStrName] = useState("");
  const [strEmail, setStrEmail] = useState("");
  const [strPassword, setStrPassword] = useState("");
  const [strProfileImgName, setStrProfileImgName] = useState("");
  const [dtmDOB, setDtmDOB] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await axios.post(`http://localhost:4000/api/create`, {
        strName,
        strEmail,
        strPassword,
        strProfileImgName,
        dtmDOB,
      });

      try {
        let data = await axios.get(
          `http://localhost:4000/api/getOne/${strName}`
        );
        setInformation(data.data);
        setShowModal(true);
      } catch (err) {
        throw new Error(err);
      }
    } catch (err) {
      alert(
        "userName is already used or there maybe another problem,please try again!"
      );
      console.log(err);
    }
  }

  return (
    <>
      {showModal && <Model useInfo={useInfo} />}
      <div className="allContainer">
        <div className="formDiv">
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <h2 className="formHeader">Enter Information</h2>
            <input
              type="text"
              onChange={(e) => setStrName(e.target.value)}
              name="strName"
              id="strName"
              placeholder="Enter Name"
              required
            />
            <input
              type="email"
              onChange={(e) => setStrEmail(e.target.value)}
              name="strEmail"
              id="strEmail"
              placeholder="Example@yahoo.com"
              required
            />
            <input
              type="password"
              onChange={(e) => setStrPassword(e.target.value)}
              name="strPassword"
              id="strPassword"
              placeholder="Enter Password"
              max={20}
              required
            />

            <input
              type="date"
              onChange={(e) => {
                let value = e.target.value.slice(
                  0,
                  e.target.value.indexOf("T")
                );
                setDtmDOB(value);
              }}
              name="dtmDOB"
              id="dtmDOB"
              placeholder="2023/1/12"
              required
            />

            <Tippy
              content={<h6>this is optional!</h6>}
              delay={500}
              placement="left"
              duration={500}
            >
              <input
                type="text"
                onChange={(e) => setStrProfileImgName(e.target.value)}
                name="strProfileImgName"
                id="strProfileImgName"
                placeholder="Enter img URL"
              />
            </Tippy>

            <button className="formBtn">submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
