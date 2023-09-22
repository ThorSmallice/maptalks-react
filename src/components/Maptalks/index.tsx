import { Context as MapContext, initStore, reducer } from '@context/index'
import useMap from '@hooks/useMap'
import cn from 'classnames'
import React, { Component, FC, useEffect, useReducer, useRef } from 'react'
import './index.pcss'
import { MaptalksProps } from './index.type'

const Maptalks: FC<MaptalksProps> = ({ children, className, ...options }) => {
    const [store, dispatch] = useReducer(reducer, initStore)

    const ref = useRef<HTMLDivElement>(null)
    const mapInstance = useMap({
        container: ref,
    })

    useEffect(() => {
        dispatch({
            type: 'saveMapInstance',
            data: mapInstance,
        })
    }, [mapInstance])
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

export default Maptalks
