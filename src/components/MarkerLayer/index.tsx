import useVectorLayer from 'maptalks-react/src/hooks/useVectorLayer'
import { isEmpty, isFunction } from 'lodash-es'
import { Marker } from 'maptalks'
import { nanoid } from 'nanoid'
import { FC, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Context } from '@context/index'
import useInfoWindow, { InfoWindowWrap } from 'maptalks-react/src/hooks/useInfoWindow'
import './index.pcss'
const ids = nanoid(4)
type triggers = 'click' | 'mouseenter' | 'mouseleave'
const MarkerLayer: FC<{
    /**
     * @description 图层id
     * @default
     */
    id?: string

    /**
     * @description 图层名称
     * @default '标注图层'
     */
    name?: string
    trigger?: triggers[]
    fields?: {
        x?: string
        y?: string
        id?: string
    }
    source: any[]
    options?: any
    customInfoWindow?: (data: any, close: () => void) => ReactNode
    infoWindow?: boolean
    itemOptions?: any
}> = ({
    id = 'marker' + '-' + ids,
    name = '标注图层',
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
}) => {
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
