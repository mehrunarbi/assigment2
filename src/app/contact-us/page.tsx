import Header from "../component/Header/Header";
import style from"./contact.module.css";

const ContactPage=()=>{
    return(
        <div>
            <Header></Header>
            <h1 className={style.contact}>This is contact page</h1>
        </div>
    );
}
export default ContactPage;