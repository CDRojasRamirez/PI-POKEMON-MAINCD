import style from "./PokemonsCard.module.css";
import { Link } from "react-router-dom";

const PokemonsCard = ({ id, name, image, types }) => {
  return (
    <>
      <Link to={`/detail/${id}`} className={style.link}>
        { types[0].name === "fire" || types[0].name === "dragon" ? (
          <li className={style.CardGrid} style={{ border: "3px solid red", backgroundImage: `url(${require('../../img/fire2Back.jpg')})`}}>
            <h1>{name}</h1>
            <img src={image} alt={name} className={style.image} />
            <p>
              TYPE:{" "}
              {types &&
                types?.map((e, index) => {
                  return (
                    <span key={e.name}>
                      {e.name}
                      {index !== types.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
            </p>
          </li>
        ) : types[0].name === "fighting" ? (
          <li className={style.CardGrid} style={{border: "5px solid rgb(5, 96, 85, .5)", backgroundImage: `url(${require('../../img/fightPack.jpg')})`}}>
            <h1>{name}</h1>
            <img src={image} alt={name} className={style.image} />
            <p>
              TYPE:{" "}
              {types &&
                types?.map((e, index) => {
                  return (
                    <span key={e.name}>
                      {e.name}
                      {index !== types.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
            </p>
          </li>
        ) : types[0].name === "water" ? (
          <li className={style.CardGrid} 
          style={{ border: "5px solid rgb(32, 43, 142, .6)", backgroundImage: `url(${require('../../img/fantasy.jpg')})` }}>
            <h1>{name}</h1>
            <img src={image} alt={name} className={style.image} />
            <p>
              TYPE:{" "}
              {types &&
                types?.map((e, index) => {
                  return (
                    <span key={e.name}>
                      {e.name}
                      {index !== types.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
            </p>
          </li>
        ) : types[0].name === "grass" ? (
          <li className={style.CardGrid} style={{ border: "5px solid rgb(50, 255, 81, .4)", backgroundImage: `url(${require('../../img/green2Back.jpg')})` }}>
            <h1>{name}</h1>
            <img src={image} alt={name} className={style.image} />
            <p>
              TYPE:{" "}
              {types &&
                types?.map((e, index) => {
                  return (
                    <span key={e.name}>
                      {e.name}
                      {index !== types.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
            </p>
          </li>
        ) : types[0].name === "electric" ? (
          <li className={style.CardGrid} style={{ border: "5px solid rgb(255, 217, 0, .5)", backgroundImage: `url(${require('../../img/electricBack.jpg')})` }}>
            <h1>{name}</h1>
            <img src={image} alt={name} className={style.image} />
            <p>
              TYPE:{" "}
              {types &&
                types?.map((e, index) => {
                  return (
                    <span key={e.name}>
                      {e.name}
                      {index !== types.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
            </p>
          </li>
        ) : types[0].name === "rock" ? (
          <li className={style.CardGrid} style={{ border: "5px solid rgb(75, 37, 27, .5)", backgroundImage: `url(${require('../../img/fantasy.jpg')})`}}>
            <h1>{name}</h1>
            <img src={image} alt={name} className={style.image} />
            <p>
              TYPE:{" "}
              {types &&
                types?.map((e, index) => {
                  return (
                    <span key={e.name}>
                      {e.name}
                      {index !== types.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
            </p>
          </li>
        ) : types[0].name === "fairy" ? (
          <li className={style.CardGrid} style={{ border: "5px solid rgb(255, 142, 189, .5)" , backgroundImage: `url(${require('../../img/pink2Back.jpg')})`}}>
            <h1>{name}</h1>
            <img src={image} alt={name} className={style.image} />
            <p>
              TYPE:{" "}
              {types &&
                types?.map((e, index) => {
                  return (
                    <span key={e.name}>
                      {e.name}
                      {index !== types.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
            </p>
          </li>
        ): types[0].name === "bug" ? (
          <li className={style.CardGrid} style={{ border: "5px solid rgb(166, 0, 255, .5)" , backgroundImage: `url(${require('../../img/purpleBack.jpg')})`}}>
            <h1>{name}</h1>
            <img src={image} alt={name} className={style.image} />
            <p>
              TYPE:{" "}
              {types &&
                types?.map((e, index) => {
                  return (
                    <span key={e.name}>
                      {e.name}
                      {index !== types.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
            </p>
          </li>
        ) : types[0].name === "psychic" ? (
          <li className={style.CardGrid} style={{ border: "5px solid rgb(255, 201, 101, .5)" , backgroundImage: `url(${require('../../img/fantasy.jpg')})`}}>
            <h1>{name}</h1>
            <img src={image} alt={name} className={style.image} />
            <p>
              TYPE:{" "}
              {types &&
                types?.map((e, index) => {
                  return (
                    <span key={e.name}>
                      {e.name}
                      {index !== types.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
            </p>
          </li>
        ) : types[0].name === "normal" ? (
          <li className={style.CardGrid} style={{ border: "5px solid rgba(87, 12, 33, 0.5)" , backgroundImage: `url(${require('../../img/forest2Back.jpg')})`}}>
            <h1>{name}</h1>
            <img src={image} alt={name} className={style.image} />
            <p>
              TYPE:{" "}
              {types &&
                types?.map((e, index) => {
                  return (
                    <span key={e.name}>
                      {e.name}
                      {index !== types.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
            </p>
          </li>
        ) : types[0].name === "poison" ? (
          <li className={style.CardGrid} style={{ border: "5px solid rgb(58, 19, 54, .5)" , backgroundImage: `url(${require('../../img/snakeBack.jpg')})`}}>
            <h1>{name}</h1>
            <img src={image} alt={name} className={style.image} />
            <p>
              TYPE:{" "}
              {types &&
                types?.map((e, index) => {
                  return (
                    <span key={e.name}>
                      {e.name}
                      {index !== types.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
            </p>
          </li>
        ) :  (
          <li className={style.CardGrid} style={{ border: "5px solid rgb(49, 49, 52, .5)" , backgroundImage: `url(${require('../../img/groundBack.jpg')})`}}>
            <h1>{name}</h1>
            <img src={image} alt={name} className={style.image} />
            <p>
              TYPE:{" "}
              {types &&
                types?.map((e, index) => {
                  return (
                    <span key={e.name}>
                      {e.name}
                      {index !== types.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
            </p>
          </li>
        )}
      </Link>
    </>
  );
};

export default PokemonsCard;


