import { Context } from '@context/index'
import { useContext } from 'react'

const useScene = () => {
    const { store } = useContext(Context)
    return store
}

export default useScene
