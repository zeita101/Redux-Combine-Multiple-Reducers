
const initialState = {
    b: 1,
}

const reducer = (state = initialState, action) => {

    if (action.type === 'UPDATE_B') {
        return {
            ...state,
            b: state.a + state.b
        }
    }
    return state;
}

export default reducerB;