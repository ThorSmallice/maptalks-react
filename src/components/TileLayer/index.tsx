import { memo, useContext, useEffect, useImperativeHandle, useRef } from 'react'
import { TileLayer as tileLayer } from 'maptalks'
import { Context } from '@context/index'
const TileLayer = memo(({ source, layer }: any) => {
    const { store, dispatch } = useContext(Context)
    const ref = useRef<any>(null)
    useImperativeHandle(layer, () => ref?.current)
    useEffect(() => {
        const instances = source?.map(({ id, name, options }) => ({
            id,
            name,
            instance: new tileLayer(id, options),
        }))
        ref.current = instances

        dispatch({
            type: 'addTileLayers',
            data: instances,
        })

        return () => {
            instances?.forEach(({ instance }) => instance?.remove())
            dispatch({
                type: 'removeTileLayers',
                data: instances,
            })
            ref.current = null
        }
    }, [source])

    return <></>
})

export default TileLayer
