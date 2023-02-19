const makeVariable = (id) =>{
    return document.getElementById(id);
}
const incrementEl = makeVariable("increment")
const decrementEl = makeVariable("decrement")
const valueEl = makeVariable("value")


// initial state 
const initialState = {
    value:0
}

// reducer function 
function counterReducer (state=initialState,action){
    if (action.type==='increment') {
        return {
            ...state,
            value : state.value+1
        }
    }else if (action.type==='decrement') {
        return {
            ...state,
            value : state.value-1
        }
    } else {
        return state
    }
}

render()

// store 
const store = Redux.createStore(counterReducer)
const render = ()=>{
    const currentState = store.getState()
    valueEl.innerText = currentState.value
}
store.subscribe(render)

incrementEl.addEventListener('click',()=>{
    store.dispatch({
        type:'increment'
    })
})
decrementEl.addEventListener('click',()=>{
    store.dispatch({
        type:'decrement'
    })
})
