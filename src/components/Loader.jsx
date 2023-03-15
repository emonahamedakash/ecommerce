import Spinner from "react-bootstrap/Spinner";
import "./Loader.css";
function Loader() {
  return (
    <div className="loader">
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;
