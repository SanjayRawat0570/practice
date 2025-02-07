const initialState = {
    count:localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0
}

export const countReducer = (state = initialState, action) => {
        switch(action.type){
            case 'INCREMENT':
                localStorage.setItem('count', state.count + 1)
                return {
                    count: state.count + 1
                }
            case 'DECREMENT':
                localStorage.setItem('count', state.count - 1)
                return {
                    count: state.count - 1
                }
            default:
                return state
        }
        

}