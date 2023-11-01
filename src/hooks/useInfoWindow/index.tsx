import { Ref, forwardRef, useContext, useEffect, useRef } from 'react'
import { ui, Coordinate } from 'maptalks'
import { Context } from '@context/index'
import classNames from 'classnames'
import './index.pcss'
export interface useInfoWindowOptions {
    options: {
        [key: string]: any
    }
    watchOptions?: any[]
    x: number
    y: number
}

const useInfoWindow = ({ options = {}, watchOptions = [], x = 0, y = 0 }: useInfoWindowOptions) => {
    const ref = useRef(null)
    const { store, dispatch } = useContext(Context)
    useEffect(() => {
        if (!x || !y) return
        const infoWindow = new ui.InfoWindow({
            autoOpenOn: false,
            eventsPropagation: false,
            custom: true,

            ...options,
        })
        infoWindow.addTo(store?.map)?.show(
            new Coordinate({
                x,
                y,
            })
        )
        ref.current = infoWindow
        return () => {
            infoWindow?.hide()
            infoWindow?.remove()
            ref.current = null
        }
    }, [...watchOptions])

    return ref?.current
}
export default useInfoWindow

export const InfoWindowWrap = forwardRef(({ className, children }: any, ref: Ref<any>) => {
    return (
        <div className={classNames('maptalks-uiwindow', className)} ref={ref}>
            {children}
        </div>
    )
})
