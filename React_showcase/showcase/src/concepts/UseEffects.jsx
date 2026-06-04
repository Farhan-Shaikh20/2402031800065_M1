import { useState,useEffext}from 'react'
import '../styles/UseEffects.css'

function useEffects(){

    //DEMO--1 START ONE
    const [seconds,setseconds]=useState(0);
    useEffect(()=>{
        const timer = setInterval(()=>{
            setseconds(prev=>prev+1)
        },1000)
        return ()=> clearInterval(timer)
    },[])

    //DEMO--2 TITLE CHANGE
    const [count,setcount]=useState(0);
    useEffect(()=>{
        document.title='Count: ${count}'
    },[count])

    //DEMO--3 FAKE API CALL
    const [user,setuser]=useState(null);
    const[loading,setloading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setuser({name:'farhan',age:20})
            setloading(false)
        },2000)
    },[])

return(
   <div id="useeffect" className="concept-section">
      <h2>🔄 useEffect</h2>
      <p className="concept-desc">The useEffect hook allows you to perform side effects in functional components.</p>
       {/* Demo 1 — Timer */}
      <div className="effect-timer">
          <span className="timer-num">{seconds}</span>
          <span className="timer-label">seconds since mount</span>
        </div>
        <p className="demo-note">
          useEffect(() =&gt; setInterval(...), [])
        </p>
      </div>

         {/* Demo 2 — Document title */}
      


)

}