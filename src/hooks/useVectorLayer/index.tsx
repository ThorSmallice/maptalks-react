import { VectorLayer } from 'maptalks'
import { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '@context/index'
const useVectorLayer = ({ id, geometries, options }: any) => {
    const [layer, setLayer] = useState(null)
    const { store, dispatch } = useContext(Context)
    useEffect(() => {
        const layer = new VectorLayer(id, geometries, options)
        store?.map?.addLayer(layer)
        setLayer(layer)

        return () => {
            layer?.clear()
            layer?.remove()
            store?.map?.removeLayer(layer)
            setLayer(null)
        }
    }, [id, geometries, options, store?.map])

    return layer
}

export default useVectorLayer
