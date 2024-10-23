import style from "./Header.module.css";
import Link from "next/link";

const Header = ()=>{
    return(
        <div className={style.container}>
            <div >
            <h1 className={style.heading}>Thursday class</h1>
            </div>
            <div>
            <ul className={style.list} >
           <li> <Link href="/"   >Home</Link></li>
           <li> <Link href="/about" target="_blank">About</Link></li>
           <li><Link href="/contact-us" target="_blank">Contact</Link></li>
           <li><Link href="/sign-up" target="_blank">Sign-up</Link></li>

            </ul>
            </div>
        </div>
    );
}

export default Header;