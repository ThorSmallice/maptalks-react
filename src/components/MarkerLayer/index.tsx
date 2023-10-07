import useVectorLayer from '@hooks/useVectorLayer'
import { isEmpty, isFunction } from 'lodash-es'
import { Marker } from 'maptalks'
import { nanoid } from 'nanoid'
import { ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Context } from '@context/index'
import useInfoWindow, { InfoWindowWrap } from '@hooks/useInfoWindow'
import './index.pcss'
const ids = nanoid(4)
const MarkerLayer = ({
    id = 'marker' + '-' + ids,
    name,
    trigger = ['click'],
    fields = {
        x: 'x',
        y: 'y',
        id: 'id',
    },
    source,
    options,
    customInfoWindow,
    infoWindow = false,
    itemOptions = {},
}: any) => {
    const { store, dispatch } = useContext(Context)
    const infoWindowRef = useRef<HTMLElement | ReactNode>(document.createElement('div'))

    const [currentData, setCurrentData] = useState<any>(null)
    const markers = useMemo(() => {
        return source?.map((item: any) => {
            const marker = new Marker(
                [item?.[fields?.x], item?.[fields?.y]],
                isFunction(itemOptions)
                    ? itemOptions?.(item)
                    : {
                          id: item?.[fields?.id],
                          ...itemOptions,
                      }
            )

            if (infoWindow) {
                marker?.on(`${trigger?.join(' ')}`, () => {
                    setCurrentData(item)
                })
            }

            return marker
        })
    }, [source])
    const layer = useVectorLayer({
        id,
        geometries: markers,
        options,
    })

    useEffect(() => {
        if (!layer) return

        dispatch({
            type: 'addLayers',
            data: {
                id,
                name,
                type: 'markersLayer',
                instance: layer,
            },
        })

        return () => {
            dispatch({
                type: 'removeLayers',
                data: {
                    id,
                    name,
                    type: 'markersLayer',
                    instance: layer,
                },
            })
        }
    }, [layer])

    useInfoWindow({
        options: {
            content: infoWindowRef?.current,
            autoOpenOn: false,
            eventsPropagation: false,
            custom: true,
            dy: -30,
        },
        watchOptions: [currentData],
        x: currentData?.[fields?.x],
        y: currentData?.[fields?.y],
    })

    const close = () => {
        setCurrentData(null)
    }
    return (
        <div className="marker-layer">
            <InfoWindowWrap ref={infoWindowRef} className={isEmpty(currentData) ? 'hidden' : ''}>
                {customInfoWindow?.(currentData, close)}
            </InfoWindowWrap>
        </div>
    )
}
export default MarkerLayer
