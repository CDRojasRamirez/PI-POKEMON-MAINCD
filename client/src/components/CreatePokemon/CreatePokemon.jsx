import { useState } from 'react'
import style from './CreatePokemon.module.css'
import { useDispatch } from 'react-redux'
import { createPokemonR } from '../../redux/action'
import { Link } from 'react-router-dom'

const CreatePokemon = () => {

    const dispatch = useDispatch()
    const [inputState, setInputState] = useState({
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

    const handleTypes = (e) => {
        e.preventDefault();
        const selectedType = e.target.value
        setInputState({
           ...inputState,
           types: [...inputState.types, selectedType] 
        })
      };
    const handleInput = (e) => {
        e.preventDefault()

        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        })
    }

    const handleCreate = () => {

        dispatch(createPokemonR(inputState))
        alert("Pokemon created!");
    }
    
    console.log(inputState)
    return (
        <div className={style.containCreate}>
            <Link className={style.Back} to='/home'>⋘ Back</Link>
            <h1>POKEMON CREATE</h1>
            <div className={style.gifP}></div>
            <form className={style.formCreate} action="">
                <input onChange={handleInput} name='name' type="text" placeholder="Enter a name" className={style.inputCreate}/>
                <input onChange={handleInput} name='hp' type="number" placeholder="Enter a hp" className={style.inputCreate}/>
                <input onChange={handleInput} name='attack' type="number" placeholder="Enter a attack" className={style.inputCreate}/>
                <input onChange={handleInput} name='defense' type="number" placeholder="Enter a defense" className={style.inputCreate}/>
                <input onChange={handleInput} name='speed' type="number" placeholder="Enter a speed" className={style.inputCreate}/>
                <input onChange={handleInput} name='height' type="number" placeholder="Enter a height" className={style.inputCreate}/>
                <input onChange={handleInput} name='weight' type="number" placeholder="Enter a weight" className={style.inputCreate}/>
                <input onChange={handleInput} name='image' type="text" placeholder="Enter a link of image" className={style.inputCreate}/>
                <select
                id="genre-filter"
                className={style.SelectOption}
                onChange={handleTypes}
              >
                <option className={style.SelectOption}>Types</option>
                <option value="normal" className={style.SelectOption}>Normal</option>
                <option value="rock" className={style.SelectOption}>Rock</option>
                <option value="fire" className={style.SelectOption}>Fire</option>
                <option value="flying" className={style.SelectOption}>Flying</option>
                <option value="fighting" className={style.SelectOption}>Fighting</option>
                <option value="poison" className={style.SelectOption}>Poison</option>
                <option value="ground" className={style.SelectOption}>Ground</option>
                <option value="grass" className={style.SelectOption}>Grass</option>
                <option value="bug" className={style.SelectOption}>Bug</option>
                <option value="ghost" className={style.SelectOption}>Ghost</option>
                <option value="water" className={style.SelectOption}>Water</option>
                <option value="electric" className={style.SelectOption}>Electric</option>
                <option value="steel" className={style.SelectOption}>Steel</option>
                <option value="psychic" className={style.SelectOption}>Psychic</option>
                <option value="ice" className={style.SelectOption}>Ice</option>
                <option value="dragon" className={style.SelectOption}>Dragon</option>
                <option value="fairy" className={style.SelectOption}>Fairy</option>
                <option value="unknown" className={style.SelectOption}>Unknown</option>
                <option value="dark" className={style.SelectOption}>Dark</option>

              </select>
              <label htmlFor="" className={style.labelOption}>Selected: {inputState.types.length > 1 ? (inputState.types.slice(0, -1).join(", ") + inputState.types[inputState.types.length - 1]) : inputState.types.map(e => e)}</label>
              <button onClick={handleCreate} className={style.btnCreate}>CREATE</button>

            </form>
        </div>
    )
}


export default CreatePokemon;