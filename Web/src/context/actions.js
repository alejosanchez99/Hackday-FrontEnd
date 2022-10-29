import { SET_INPUT } from './actionsType'

export const updateInput = (dispatch, value) => {
    dispatch({
        type: SET_INPUT,
        payload: value
    });
}