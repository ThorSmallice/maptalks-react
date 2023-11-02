import { Context } from '@context/index'
import { TileLayer as tileLayer } from 'maptalks'
import { FC, memo, useContext, useEffect, useImperativeHandle, useRef } from 'react'
import { TileLayerProps } from './index.type'
const TileLayer: FC<TileLayerProps> = memo(({ source, layer }) => {
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
