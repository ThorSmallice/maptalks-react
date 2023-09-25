import { VectorLayer } from 'maptalks'
import { useEffect, useRef, useState } from 'react'

const useVectorLayer = ({ id, geometries, options }: any) => {
    const [layer, setLayer] = useState(null)
    useEffect(() => {
        const layer = new VectorLayer(id, geometries, options)

        setLayer(layer)
        return () => {
            layer?.remove()
            setLayer(null)
        }
    }, [id, geometries, options])

    return layer
}

export default useVectorLayer
