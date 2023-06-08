import { useState } from "react";
import style from "./CreatePokemon.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createPokemonR } from "../../redux/action";
import { Link } from "react-router-dom";
import { validate } from "./validate";

const CreatePokemon = () => {
  const dispatch = useDispatch();
  const { Poke120 } = useSelector(state => state)

  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    types: [],
  });
  const [errors, setErrors] = useState({});

  const handleTypes = (e) => {
    e.preventDefault();
    const selectedType = e.target.value;
    if (formData.types.includes(selectedType)) {
      // Eliminar el tipo del array
      setFormData({
        ...formData,
        types: formData.types.filter((type) => type !== selectedType),
      });
    } else {
      // Agregar el tipo al array
      setFormData({
        ...formData,
        types: [...formData.types, selectedType],
      });
    }
    setErrors({
      ...errors,
      ...validate({ ...formData, types: [...formData.types, selectedType] }),
    });
  };

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validate({ ...formData, [name]: value })[name],
    }));
  };

  const handleCreate = () => {

    if ((Object.keys(errors).length === 0 || typeof errors.name === "undefined") && formData.name !== "") {
      const arr = Poke120.filter(e => e.name === formData.name)
      if(arr.length !== 0){
        alert("El nombre del pokemon ya existe!");
      }else{
        dispatch(createPokemonR(formData));
        alert("Pokemon created!");
        setFormData({
          name: "",
          hp: "",
          attack: "",
          defense: "",
          speed: "",
          height: "",
          weight: "",
          image: "",
          types: [],
        })
        setErrors({})
      }

    } else {
      alert("Llena los campos vacios o corrige los errores del formulario");
    }
  };

  console.log(formData.types);
  console.log(errors)
  console.log(formData.name);

  return (
    <div className={style.containCreate}>
      <Link className={style.Back} to="/home">
        ⋘ Back
      </Link>
      <h1>POKEMON CREATE</h1>
      <div className={style.gifP}></div>
      <div className={style.imagePng} style={{opacity: "10%"}}></div>
      <div className={style.imagePokemons} style={{opacity: "10%"}}></div>
      <form className={style.formCreate} action="">
        <div className={style.errorContainer}>
          <label htmlFor="" className={style.inputLabel}>Name</label>
          <input
            onChange={handleInput}
            name="name"
            type="text"
            placeholder="Enter a name"
            value={formData.name} 
            className={style.inputCreate}
          />
          {errors.name? (
            <label className={style.errorLabel}>{errors.name}</label>
          ): formData.name ? <label className={style.errorLabel}>✅</label> : <label className={style.errorLabel}></label>}
        </div>
        <div className={style.errorContainer}>
        <label htmlFor="" className={style.inputLabel}>Hp </label>
          <input
            onChange={handleInput}
            name="hp"
            type="number"
            placeholder="Enter a hp"
            value={formData.hp} 
            className={style.inputCreate}
          />
          {errors.hp ? <label className={style.errorLabel}>{errors.hp}</label> : formData.hp ? <label className={style.errorLabel}>✅</label> : <label className={style.errorLabel}></label>}
        </div>
        <div className={style.errorContainer}>
        <label htmlFor="" className={style.inputLabel}>Attack</label>
          <input
            onChange={handleInput}
            name="attack"
            type="number"
            placeholder="Enter an attack"
            value={formData.attack} 
            className={style.inputCreate}
          />
          {errors.attack ? (
            <label className={style.errorLabel}>{errors.attack}</label>
          ) : formData.attack ? <label className={style.errorLabel}>✅</label> : <label className={style.errorLabel}></label>}
        </div>
        <div className={style.errorContainer}>
        <label htmlFor="" className={style.inputLabel}>Defense</label>
          <input
            onChange={handleInput}
            name="defense"
            type="number"
            placeholder="Enter a defense"
            value={formData.defense} 
            className={style.inputCreate}
          />
          {errors.defense ? (
            <label className={style.errorLabel}>{errors.defense}</label>
          ) : formData.defense ? <label className={style.errorLabel}>✅</label> : <label className={style.errorLabel}></label>}
        </div>
        <div className={style.errorContainer}>
        <label htmlFor="" className={style.inputLabel}>Speed </label>
          <input
            onChange={handleInput}
            name="speed"
            type="number"
            placeholder="Enter a speed"
            value={formData.speed} 
            className={style.inputCreate}
          />
          {errors.speed ? (
            <label className={style.errorLabel}>{errors.speed}</label>
          ): formData.speed ? <label className={style.errorLabel}>✅</label> : <label className={style.errorLabel}></label>}
        </div>
        <div className={style.errorContainer}>
        <label htmlFor="" className={style.inputLabel}>Height</label>
          <input
            onChange={handleInput}
            name="height"
            type="number"
            placeholder="Enter a height"
            value={formData.height} 
            className={style.inputCreate}
          />
          {errors.height ? (
            <label className={style.errorLabel}>{errors.height}</label>
          ) : formData.height ? <label className={style.errorLabel}>✅</label> : <label className={style.errorLabel}></label>}
        </div>
        <div className={style.errorContainer}>
        <label htmlFor="" className={style.inputLabel}>Weight</label>
          <input
            onChange={handleInput}
            name="weight"
            type="number"
            placeholder="Enter a weight"
            value={formData.weight} 
            className={style.inputCreate}
          />
          {errors.weight ? (
            <label className={style.errorLabel}>{errors.weight}</label>
          ): formData.weight ? <label className={style.errorLabel}>✅</label> : <label className={style.errorLabel}></label>}
        </div>
        <div className={style.errorContainer}>
        <label htmlFor="" className={style.inputLabel}>Image</label>
          <input
            onChange={handleInput}
            name="image"
            type="text"
            placeholder="Enter a link of image"
            value={formData.image} 
            className={style.inputCreate}
          />
          {errors.image ? (
            <label className={style.errorLabel}>{errors.image}</label>
          ) : formData.image ? <label className={style.errorLabel}>✅</label> : <label className={style.errorLabel}></label>}
        </div>
        <div className={style.errorContainer}>
          <select
            id="genre-filter"
            className={style.SelectOption}
            onChange={handleTypes}
            value={formData.types} 
          >
            <option className={style.SelectOption}>Types</option>
            <option value="normal" className={style.SelectOption}>
              Normal
            </option>
            <option value="rock" className={style.SelectOption}>
              Rock
            </option>
            <option value="fire" className={style.SelectOption}>
              Fire
            </option>
            <option value="flying" className={style.SelectOption}>
              Flying
            </option>
            <option value="fighting" className={style.SelectOption}>
              Fighting
            </option>
            <option value="poison" className={style.SelectOption}>
              Poison
            </option>
            <option value="ground" className={style.SelectOption}>
              Ground
            </option>
            <option value="grass" className={style.SelectOption}>
              Grass
            </option>
            <option value="bug" className={style.SelectOption}>
              Bug
            </option>
            <option value="ghost" className={style.SelectOption}>
              Ghost
            </option>
            <option value="water" className={style.SelectOption}>
              Water
            </option>
            <option value="electric" className={style.SelectOption}>
              Electric
            </option>
            <option value="steel" className={style.SelectOption}>
              Steel
            </option>
            <option value="psychic" className={style.SelectOption}>
              Psychic
            </option>
            <option value="ice" className={style.SelectOption}>
              Ice
            </option>
            <option value="dragon" className={style.SelectOption}>
              Dragon
            </option>
            <option value="fairy" className={style.SelectOption}>
              Fairy
            </option>
            <option value="unknown" className={style.SelectOption}>
              Unknown
            </option>
            <option value="dark" className={style.SelectOption}>
              Dark
            </option>
          </select>
          {formData.types.length > 0 && formData.types.length < 3
          ? <label className={style.errorLabel}>✅</label>
          : <label className={style.errorLabel}>{errors.types}</label>}

        </div>

        <label htmlFor="" className={style.labelOption}>
        Selected:{" "}
        {formData.types.length > 0
          ? formData.types.join(", ")
          : ""}
      </label>
        <button type="button" onClick={handleCreate} className={style.btnCreate}>
          CREATE
        </button>
      </form>
    </div>
  );
};
export default CreatePokemon;
