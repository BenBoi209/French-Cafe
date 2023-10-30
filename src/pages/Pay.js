import { Link } from "react-router-dom";

const Pay = () => {
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
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <Link to="/done">
          <button type="button" class="btn btn-primary" id="doneButton">
            Done
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pay;
