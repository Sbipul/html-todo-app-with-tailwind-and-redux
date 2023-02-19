// dom elements 
const makeVariable = (id) =>{
    return document.getElementById(id);
}
const incrementEl = makeVariable("increment")
const decrementEl = makeVariable("decrement")
const valueEl = makeVariable("value")


// action creator
const fireAction = (type,payload)=>{
    return {type,payload}
}



// action creator 
const INCREMENT = 'increment'
const DECREMENT = 'decrement'



// initial state 
const initialState = {
    value:0
}



// reducer function 
function counterReducer (state=initialState,action){
    if (action.type===INCREMENT) {
        return {
            ...state,
            value : state.value+action.payload
        }
    }else if (action.type===DECREMENT) {
        return {
            ...state,
            value : state.value-action.payload
        }
    } else {
        return state
    }
}

// render()



// store the heart of redux
const store = Redux.createStore(counterReducer)
const render = ()=>{
    const currentState = store.getState()
    valueEl.innerText = currentState.value
}
store.subscribe(render)

incrementEl.addEventListener('click',()=>{
    store.dispatch(fireAction(INCREMENT,7))
})
decrementEl.addEventListener('click',()=>{
    store.dispatch(fireAction(DECREMENT,2))
})
