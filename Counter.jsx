import React, { useReducer } from 'react'


function counterReducer(state, action) {
    switch (action.type){
        case"INCREMENT":
        return { count:state.count + 1 };
        case"DECREMENT":
        return {count:state.count - 1 };
        case"RESET":
        return { count: 0 }; 
        default:
        return Error("Invalid action");

    }
}
function Counter() {
    const[ state,dispatch] = useReducer(counterReducer, {count:0});

  return (
    <div className='text-center pt-40'>
       <p >{state.count}</p>
       <div>
       <button className='w-28 h-10 bg-green-500 rounded-lg my-5' onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
       </div>
       <div>
       <button className='w-28 h-10 bg-red-500 rounded-lg my-5' onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
       </div>
      <div>
      <button className='w-28 h-10 bg-white rounded-lg my-5' onClick={() => dispatch({ type: "RESET" })}> RESET</button>
      </div>
      
    </div>
  )
}

export default Counter;