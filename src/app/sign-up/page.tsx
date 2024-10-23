import Header from "../component/Header/Header";
import style from"./sign.module.css";

const singUp = ()=>{
    return(
        <div>
            <Header></Header>
            <h1 className={style.sign}>Please sing-up</h1>
        </div>
    );
}
export default singUp;