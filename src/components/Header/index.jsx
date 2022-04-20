import { Fragment, useContext, useRef } from "react";
import "./style.css";
import Logo from "../../assets/images/Logo.svg";
import iconSearch from "../../assets/images/icons/icon-search.svg";
import iconNight from "../../assets/images/icons/icon-night-top.svg";
import { GlobalContext } from "../../contexts/GlobalContext";

const index = ({ data }) => {
  const { setInput } = useContext(GlobalContext);

  function handleClick({ target }) {
    const valueInput = document.querySelector(".form input").value;
    setInput(valueInput);
  }

  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="Image logo climaEtempo" />
            </a>
          </div>

          <form className="form" onSubmit={(event) => event.preventDefault()}>
            <input
              type="text"
              required
              placeholder="Busque por uma cidade..."
            />
            <button onClick={handleClick}>
              <img src={iconSearch} alt="Icon it lupa and zoom" />
            </button>
          </form>
        </div>
      </header>

      <div className="prevision">
        <div className="container">
          <p>Clima e Previsão do tempo</p>
          <span>
            <img src={iconNight} alt="icon night moon" />
            {data ? (
              <p>
                {data && data.city} {data && data.temp + " °C"}
              </p>
            ) : (
              <p>Carregando...</p>
            )}
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default index;
