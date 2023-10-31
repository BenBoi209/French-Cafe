import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pay = () => {
  useEffect(() => {
    localStorage.setItem("tokenNumber",1);
  },[])
  const [token] = useState(localStorage.getItem("tokenNumber"))

  return (
    <div className="pay">
      <div className="container">
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Name:
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Token No:
          </span>
          <input
            type="text"
            value={token}
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            disabled
          />
        </div>
        <Link to="/done">
          <button type="button" className="btn btn-primary" id="doneButton" onClick={() => localStorage.setItem("tokenNumber",(token*1)+1)}>
            Done
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pay;
