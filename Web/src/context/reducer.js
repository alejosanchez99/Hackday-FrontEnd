import { SET_INPUT } from './actionsType'

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_INPUT:
            return {
                ...state,
                value: payload
            }

        default:
            return state;
    }
}

export default reducer 
