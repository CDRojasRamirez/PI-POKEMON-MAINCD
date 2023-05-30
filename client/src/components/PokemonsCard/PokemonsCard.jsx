import style from "./PokemonsCard.module.css";
import { Link } from "react-router-dom";

const PokemonsCard = ({
  id,
  name,
  image,
  types,
}) => {

  
  return (
    <>
      <Link to={`/detail/${id}`} className={style.link}>
      {types && types?.map((e) => {
              
              if(e.name === "fire" || e.name === "dragon"){
                return <li className={style.CardGrid}  >
                <h1>{name}</h1>
                <img src={image} alt={name} className={style.image} />
                <p>
                      TYPE: {types &&
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
              }else if(e.name === "normal" ){
                return <li className={style.CardGrid} style={{"border":"10px solid rgb(79, 70, 12)"}} >
                <h1>{name}</h1>
                <img src={image} alt={name} className={style.image} />
                <p>
                      TYPE: {types &&
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
              }else if(e.name === "water"){
                return <li className={style.CardGrid} style={{"border":"10px solid rgb(50, 255, 255)"}}>
                <h1>{name}</h1>
                <img src={image} alt={name} className={style.image} />
                <p>
                      TYPE: {types &&
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
              }else if(e.name === "grass"){
                return <li className={style.CardGrid} style={{"border":"10px solid rgb(50, 255, 81)"}}>
                <h1>{name}</h1>
                <img src={image} alt={name} className={style.image} />
                <p>
                      TYPE: {types &&
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
              }
              else if(e.name === "bug"){
                return <li className={style.CardGrid} style={{"border":"10px solid rgb(166, 0, 255)"}}>
                <h1>{name}</h1>
                <img src={image} alt={name} className={style.image} />
                <p>
                      TYPE: {types &&
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
              }
                    })}
        
      </Link>
    </>
  );
};

export default PokemonsCard;
