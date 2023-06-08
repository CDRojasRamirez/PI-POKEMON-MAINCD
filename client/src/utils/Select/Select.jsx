
import style from './Select.module.css'
import { useDispatch, useSelector } from "react-redux"
import {reset, orderType, orderAD, orderAZ, orderApiDb, orderAttack } from '../../redux/action';
import { useState } from 'react';


const Select = () => {

  const [selectedType, setSelectedType] = useState("Types")
  const [selectedDA, setSelectedDA] = useState("Destiny")
  const [selectedAttack, setSelectedAttack] = useState("Attack")
  const [selectedAZ, setSelectedAZ] = useState("A-Z-A")
  const [selectedAscDes, setSelectedAscDes] = useState("Ascending")

  const dispatch = useDispatch()
  const { PokemonsFiltereds } = useSelector(state => state)

  const handleDestino = (e) => {

      e.preventDefault()
      const { value } = e.target

      
      setSelectedDA(value)
      dispatch(orderApiDb(value))
      if(PokemonsFiltereds.length === 0){
        return setSelectedDA("Destiny")
      }

  }

  console.log(selectedDA)

  const handleTypeFilter = (e) => {
        e.preventDefault()
        setSelectedType(e.target.value)
      return dispatch(orderType(e.target.value))
  }

  const handleOrderAZ = (e) => {

        e.preventDefault()
        setSelectedAZ(e.target.value)
        
      dispatch(orderAZ(e.target.value))
  }
  console.log(selectedType)

  const handleFilterAttack = (e) => {
    e.preventDefault()

    setSelectedAttack(e.target.value)
    dispatch(orderAttack(e.target.value))
  }
  
  const handleAscDes = (e) => {
    e.preventDefault()
    
    setSelectedAscDes(e.target.value)
    dispatch(orderAD(e.target.value))
    
  }

  const handleReset = () => {

    setSelectedType("Types");
    setSelectedDA("Destiny");
    setSelectedAttack("Attack");
    setSelectedAZ("A-Z-A");
    setSelectedAscDes("Ascending");
      dispatch(reset())
      
  }

  console.log(selectedType)
  console.log(selectedAZ)
  console.log(selectedAttack)
  console.log(selectedDA)
  console.log(selectedAscDes)
  
    return (
        <div className={style.containSelect}>
            
            <div className={style.containSelectOption}>
            <label htmlFor="destiny-filter" className={style.LabelSelectOption}>Filters:</label>
              <select
                id="genre-filter"
                value={selectedType}
                onChange={handleTypeFilter}
                className={style.SelectOption}
              >
                <option value={selectedType} className={style.SelectOption}>{selectedType}</option>
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
              
              <select
                id="destiny-filter"
                value={selectedDA}
                // onChange={handleOrderFilter}
                className={style.SelectOption}
                onChange={ handleDestino }
              >
                <option value={selectedDA} className={style.SelectOption}>{selectedDA}</option>
                <option value="DB" className={style.SelectOption}>DB</option>
                <option value="API"  className={style.SelectOption}>API</option>
              </select>
            </div>

            <div className={style.containSelectOption}>
            <label htmlFor="destiny-filter" className={style.LabelSelectOption}>Orders:</label>
              <select
                id="order-filter"
                onChange={handleAscDes}
                className={style.SelectOption}
                value={selectedAscDes}
              >
                {/* <option value={selectedAscDes} className={style.SelectOption} >{selectedAscDes}</option> */}
                <option value="asc" className={style.SelectOption}>Ascending</option>
                <option value="desc" className={style.SelectOption}>Descending</option>
              </select>
            </div>

            <div className={style.containSelectOption}>
              {/* <label htmlFor="order-filter" className={style.LabelSelectOption}>Orden:</label> */}
              <select
                id="order-filter"
                value={selectedAZ}
                onChange={handleOrderAZ}
                className={style.SelectOption}
              >
                <option value={selectedAZ} className={style.SelectOption}>{selectedAZ}</option>
                <option value="A-Z" className={style.SelectOption}>A-Z</option>
                <option value="Z-A" className={style.SelectOption}>Z-A</option>
              </select>
            </div>
            <div className={style.containSelectOption}>
              {/* <label htmlFor="order-filter" className={style.LabelSelectOption}>Orden:</label> */}
              <select
                id="order-filter"
                value={selectedAttack}
                onChange={handleFilterAttack}
                className={style.SelectOption}
              >
                <option value={selectedAttack} className={style.SelectOption}>{selectedAttack}</option>
                <option value="(+-) Attack" className={style.SelectOption}>(+-) Attack</option>
                <option value="(-+) Attack" className={style.SelectOption}>(-+) Attack</option>
              </select>
            </div>

            <div className={style.containSelectOption}>
              <label onClick={ handleReset } className={style.SelectOption}>Reset</label>
            </div>


          </div>
    )
}

export default Select;