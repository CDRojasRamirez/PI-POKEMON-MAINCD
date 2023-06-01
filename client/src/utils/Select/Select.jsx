
import style from './Select.module.css'
import { useDispatch, useSelector } from "react-redux"
import {reset, orderType, orderAD, orderApiDb } from '../../redux/action';
import { useState } from 'react';


const Select = () => {

  const [selectedType, setSelectedType] = useState("Types")


  const dispatch = useDispatch()
  const { PokemonsFiltereds } = useSelector(state => state)

  const handleDestino = (e) => {

      e.preventDefault()
      const { value } = e.target
      return dispatch(orderApiDb(value))

  }

  const handleTypeFilter = (e) => {
        e.preventDefault()
        setSelectedType(e.target.value)
        if(PokemonsFiltereds.length === 0){
          setSelectedType("Types")
        }
      return dispatch(orderType(e.target.value))
  }

  const handleOrderFilter = (e) => {

        e.preventDefault()
        setSelectedType("Types")
        
      return dispatch(orderAD(e.target.value))
  }
  console.log(selectedType)
  
  const handleReset = () => {

      return dispatch(reset())
  }
  
    return (
        <div className={style.containSelect}>
            
            <div className={style.containSelectOption}>
              <select
                id="genre-filter"
                value={selectedType}
                onChange={handleTypeFilter}
                className={style.SelectOption}
              >
                <option value={selectedType} className={style.SelectOption} selected={selectedType === 'types'}>{selectedType}</option>
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
            </div>


            <div className={style.containSelectOption}>
              {/* <label htmlFor="order-filter" className={style.LabelSelectOption}>Orden:</label> */}
              <select
                id="order-filter"
                // value={orderFilter}
                onChange={handleOrderFilter}
                className={style.SelectOption}
              >
                <option value="asc" className={style.SelectOption}>Ascendente</option>
                <option value="desc" className={style.SelectOption}>Descendente</option>
              </select>
            </div>


            <div className={style.containSelectOption}>
              {/* <label htmlFor="destiny-filter" className={style.LabelSelectOption}>Destino:</label> */}
              <select
                id="destiny-filter"
                // value={orderFilter}
                // onChange={handleOrderFilter}
                className={style.SelectOption}
                onChange={ handleDestino }
                defaultValue={"DEFAULT"}
              >
                <option className={style.SelectOption} value="DEFAULT">Destino</option>
                <option value="db" className={style.SelectOption}>DB</option>
                <option value="api"  className={style.SelectOption}>API</option>
              </select>
            </div>

            <div className={style.containSelectOption}>
              <label onClick={ handleReset } className={style.SelectOption}>Reset</label>
            </div>


          </div>
    )
}

export default Select;