import { useContext } from 'react'
import AppContext from '../context/context'

const Result = () => {
    const { state } = useContext(AppContext)

    return (
        <div>{state.value}</div>
    )
}

export default Result