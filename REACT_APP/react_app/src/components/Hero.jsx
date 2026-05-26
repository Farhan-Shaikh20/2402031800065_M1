import "../css/Hero.css";
function Hero(){
    function show(){
        alert("pleas   log in first!!")
    }
    return(
        <div className="hero">
            <h1> lern react with me</h1>
            <p>We are build modern website for learning full stack</p>
            <button onClick={show}>Get started</button>
        
        </div>
    );
}
export default Hero;
