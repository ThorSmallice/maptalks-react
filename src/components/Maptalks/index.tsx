import { Context as MapContext, initStore, reducer } from '@context/index'

import cn from 'classnames'
import { find, first } from 'lodash-es'
import { Map } from 'maptalks'
import { FC, memo, useEffect, useReducer, useRef } from 'react'
import './index.pcss'
import { MaptalksProps } from './index.type'
const Maptalks: FC<MaptalksProps> = memo(
    ({ children, className, baseLayerId, ...options }: MaptalksProps) => {
        const [store, dispatch] = useReducer(reducer, initStore)

        const ref = useRef<HTMLDivElement>(null)

        useEffect(() => {
            const map = new Map(ref.current, {
                center: [107.71791425, 39.17770167],
                attribution: false,
                baseLayer:
                    find(store?.tileLayers, { id: baseLayerId })?.instance ||
                    (first(store?.tileLayers) as any)?.instance,
                zoom: 5,
                ...options,
            })
            dispatch({
                type: 'saveMapInstance',
                data: map,
            })
            return () => {
                map?.remove()
                dispatch({
                    type: 'saveMapInstance',
                    data: null,
                })
            }
        }, [options, store?.tileLayers])

        return (
            <MapContext.Provider
                value={{
                    store,
                    dispatch,
                }}
            >
                <div className={cn('maptalks-map-root', className)}>
                    <div id="maptalksMap" className={cn('maptalks-map')} ref={ref}></div>

                    <div className={cn('maptalks-map-children')}>{children}</div>
                </div>
            </MapContext.Provider>
        )
    }
)

export default Maptalks
