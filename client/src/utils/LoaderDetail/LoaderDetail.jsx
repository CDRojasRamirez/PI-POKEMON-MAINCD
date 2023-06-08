import style from './LoaderDetail.module.css'

const LoaderDetail = () => {
  return (
    <div className={style.containLoader}>
      <div className={style.loader1}></div>
      <div className={style.vs}></div>
      <div className={style.loader2}></div>
    </div>
  );
};

export default LoaderDetail;
