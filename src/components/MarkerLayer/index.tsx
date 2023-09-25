import useVectorLayer from '@hooks/useVectorLayer'
import { isFunction } from 'lodash-es'
import { Marker } from 'maptalks'
import { useEffect, useMemo } from 'react'

const MarkerLayer = ({
    id = 'marker',
    name,
    fields = {
        x: 'x',
        y: 'y',
    },
    source,
    options,
    itemOptions = {
        symbol: {
            markerWidth: 20,
            markerHeight: 20,
            textName: 'marker',
        },
    },
}: any) => {
    const markers = useMemo(() => {
        source?.map((item: any) => {
            return new Marker(
                [item?.[fields?.x], item?.[fields?.y]],
                isFunction(itemOptions) ? itemOptions?.(item) : itemOptions
            )
        })
    }, [source])
    const layer = useVectorLayer({
        id,
        geometries: markers,
        options,
    })
    console.log(markers)

    return <></>
}
export default MarkerLayer
