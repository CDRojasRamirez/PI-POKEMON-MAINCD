import { useDispatch, useSelector } from 'react-redux'
import style from './Paginado.module.css'
import { back, next } from '../../redux/action'

const Paginado = () => {

    const dispatch = useDispatch()
    const { currentPage } = useSelector(state => state)
    
    const handleBack = () => {
  
      dispatch(back())
  
    }
    const handleNext = () => {
  
      dispatch(next())
  
    }

    return <div className={style.paginado}>
    <button onClick={handleBack}>⪻ Back</button>
    <div className={style.containLabels}>
    {currentPage === 1? <label className={style.labelPrin} htmlFor="" style={{color: "yellow"}}> Initial </label> : <label className={style.labelPrin} htmlFor=""> Initial </label>}
    {currentPage === 1 ? <label className={style.labelPrin} htmlFor="" style={{color: "yellow", boxSizing: "border-box", transform: "scale(2)"}}>1</label> : <label className={style.labelPrin} htmlFor="">1</label>}
    {currentPage === 2 ? <label className={style.labelPrin} htmlFor="" style={{color: "yellow", boxSizing: "border-box", transform: "scale(2)" }}>2</label> : <label className={style.labelPrin} htmlFor="">2</label>}
    {currentPage === 3 ? <label className={style.labelPrin} htmlFor="" style={{color: "yellow", boxSizing: "border-box", transform: "scale(2)"}}>3</label> : <label className={style.labelPrin} htmlFor="">3</label>}
    {currentPage === 4 ? <label className={style.labelPrin} htmlFor="" style={{color: "yellow", boxSizing: "border-box", transform: "scale(2)"}}>4</label> : <label className={style.labelPrin} htmlFor="">4</label>}
    {currentPage === 5 ? <label className={style.labelPrin} htmlFor="" style={{color: "yellow", boxSizing: "border-box", transform: "scale(2)"}}>5</label> : <label className={style.labelPrin} htmlFor="">5</label>}
    {currentPage === 6 ? <label className={style.labelPrin} htmlFor="" style={{color: "yellow", boxSizing: "border-box", transform: "scale(2)"}}>6</label> : <label className={style.labelPrin} htmlFor="">6</label>}
    {currentPage === 7 ? <label className={style.labelPrin} htmlFor="" style={{color: "yellow", boxSizing: "border-box", transform: "scale(2)"}}>7</label> : <label className={style.labelPrin} htmlFor="">7</label>}
    {currentPage === 8 ? <label className={style.labelPrin} htmlFor="" style={{color: "yellow", boxSizing: "border-box", transform: "scale(2)"}}>8</label> : <label className={style.labelPrin} htmlFor="">8</label>}
    {currentPage === 9 ? <label className={style.labelPrin} htmlFor="" style={{color: "yellow", boxSizing: "border-box", transform: "scale(2)"}}>9</label> : <label className={style.labelPrin} htmlFor="">9</label>}
    {currentPage === 10 ? <label className={style.labelPrin} htmlFor="" style={{color: "yellow", boxSizing: "border-box", transform: "scale(2)"}}>10</label> : <label className={style.labelPrin} htmlFor="">10</label>}
    {currentPage === 11 ? <label className={style.labelPrin} htmlFor="" style={{color: "yellow", boxSizing: "border-box", transform: "scale(2)"}}>11</label> : <label className={style.labelPrin} htmlFor="">11</label>}
    {currentPage === 12 ? <label className={style.labelPrin} htmlFor="" style={{color: "yellow", boxSizing: "border-box", transform: "scale(2)"}}>12</label> : <label className={style.labelPrin} htmlFor="">12</label>}
    {currentPage === 12? <label className={style.labelPrin} htmlFor="" style={{color: "yellow"}}>Final</label> : <label className={style.labelPrin} htmlFor="">Final</label>}

    </div>
    <button onClick={handleNext}>Next ⪼</button>
  </div>
}

export default Paginado;