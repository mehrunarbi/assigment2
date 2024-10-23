import Header from "../component/Header/Header";

import style from "./about.module.css"
const AboutPage = ()=>{
    return(
        <div>
         <Header></Header>
        <h1 className={style.green}>This is about page</h1>
        </div>
    );
}
export default AboutPage;