import { useState } from 'react';
function States(){
    let [count, setcount] = useState(0);
    let [confirmedFeedback, setConfirmedFeedback] = useState("");

    let increas = () => {
        setcount(count === 5 ? 0 : count + 1);
    };

    let confirm = () => {
        setConfirmedFeedback(`thaks for Your feedback: ${count}`);
    };

    return(
        <div>
            <h3>feedback(1-5):{count}</h3>
           <div style={{margin:10}}> <button onClick={increas}>feedback</button></div>
          <div style={{margin:10}}>  <button onClick={confirm}>confirm</button></div>
            <p>{confirmedFeedback}</p>
        </div>
    );

}
export default States
  
