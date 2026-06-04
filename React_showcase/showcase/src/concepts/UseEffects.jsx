import { useEffect, useState } from 'react'
import '../style/UseEffects.css'

function UseEffects(){

    //DEMO--1 START ONE
    const [seconds,setseconds]=useState(0);
    useEffect(()=>{
        const timer = setInterval(()=>{
            setseconds(prev=>prev+1)
        },1000)
        return ()=> clearInterval(timer)
    },[])

    //DEMO--2 TITLE CHANGE
    const [count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`Count: ${count}`
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

return (
    <div id="useeffect" className="concept-section">
      <h2>🔄 useEffect</h2>
      <p className="concept-desc">
        Component screen pe aane ke baad kuch karna ho — useEffect use karo
      </p>

      {/* Demo 1 — Timer */}
      <div className="demo-box">
        <p className="demo-title">Demo 1 — Timer (sirf ek baar start)</p>
        <div className="effect-timer">
          <span className="timer-num">{seconds}</span>
          <span className="timer-label">seconds since mount</span>
        </div>
        <p className="demo-note">
          useEffect(() =&gt; setInterval(...), [])
        </p>
      </div>

      {/* Demo 2 — Document title */}
      <div className="demo-box">
        <p className="demo-title">Demo 2 — Browser Tab Title badlega</p>
        <div className="counter-row">
          <button onClick={() => setCount(count - 1)}>−</button>
          <span className="count-num">{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <p className="demo-note">
          Browser tab dekho — title change ho raha hai!
        </p>
      </div>

      {/* Demo 3 — Fake API */}
      <div className="demo-box">
        <p className="demo-title">Demo 3 — Fake API Call (2 sec delay)</p>
        {loading ? (
          <div className="loading-box">⏳ Data load ho raha hai...</div>
        ) : (
          <div className="user-card">
            <p className="user-name">{user.name}</p>
            <p className="user-role">Age: {user.age}</p>
          </div>
        )}
        <p className="demo-note">
          useEffect(() =&gt; setTimeout(...), [])
        </p>
      </div>

    </div>
  )
}

export default UseEffects
