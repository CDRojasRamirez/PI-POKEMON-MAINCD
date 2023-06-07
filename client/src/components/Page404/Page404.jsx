import style from './Page404.module.css'
import { Link } from 'react-router-dom';

const Page404 = () => {

    return (
        <div className={style.contain404}>
            <h1 className={style.titulo404}>Error 404</h1>
             <p className={style.info404}>The page doesn't exist.</p>
             <div className={style.gif404}></div>
             <Link to='/' className={style.btn404}>Inicio</Link>
        </div>
    )
}

export default Page404;