import style from "./Hero.module.css"

const Hero = ()=>{
    return(
        <div className={style.container}>
        <h1 className={style.heading}>Hero page</h1>
        <p className={style.para}>Next.js is a React framework that gives you building blocks to create web applications,By framework, we mean Next.js handles the tooling and configuration needed for React,</p>
        <p className={style.para}> and provides additional structure, features, and optimizations for your application.</p>
        <p className={style.para}> Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point.</p>
        <p className={style.para}> It might describe a place, character, or process; narrate a series of events; compare or contrast two or more things; classify items into categories; or describe causes and effects. </p>
        <p className={style.para}>Regardless of the kind of information they contain, all paragraphs share certain characteristics.One of the most important of these is a topic sentence.


            
        </p>




        
        </div>
    );
}

export default Hero;