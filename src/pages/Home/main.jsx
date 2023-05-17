import "../style/main.scss";
import Headphone from "../../assets/Wireless-Headphone.png";
const Main = () => {
  return (
    <div className="container-main">
      <div className="title-wireless">
        <p>
          <strong>Beats Solo</strong>
        </p>
        <h2>
          <strong>Wireless</strong>
        </h2>
      </div>
      <div className="container-tittle">
        <h1>
          HEAD <span>ONE</span>
        </h1>
        <button>Shop By Category</button>
      </div>
      <div className="description ">
          <h5>
            <strong>Description</strong>
          </h5>
          <p>
            <br />
            There are many variations pages Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Maxime, nisi! Natus sint blanditiis
            officiis.
          </p>
        </div>
      <img src={Headphone} alt="Wireless-Headphone" />
    </div>
  );
};

export default Main;
