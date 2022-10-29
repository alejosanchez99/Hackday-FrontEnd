import { useContext } from 'react'
import AppContext from '../context/context'
import { updateInput } from '../context/actions'

const Input = () => {
    const { dispatch } = useContext(AppContext)

    const handleChange = (e) => {
        updateInput(dispatch, e.target.value)
    }

    return (
        <input type="text" onChange={handleChange} />
    )
}

export default Input