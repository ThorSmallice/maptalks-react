import { Coordinate, Layer, MapOptions, control } from 'maptalks'

export interface MaptalksProps {
    baseLayerId?: string | number // 当先显示的底图图层id
    center?: Coordinate | number[] | undefined
    zoom?: number | undefined
    spatialReference?: object | undefined
    baseLayer?: Layer | undefined
    layers?: Layer[] | undefined
    attribution?: boolean | control.AttributionOptions | undefined
    // allow map to drag pitching, true by default
    dragPitch?: boolean | undefined
    // allow map to drag rotating, true by default
    dragRotate?: boolean | undefined
    // enable map to drag pitching and rotating at the same time, false by default
    dragRotatePitch?: boolean | undefined
    dragPan?: boolean | undefined
    pitch?: number | undefined
    zoomControl?: boolean | object | undefined
    scaleControl?: boolean | object | undefined
    overviewControl?: boolean | undefined
    centerCross?: boolean | undefined
    minZoom?: number | undefined
    maxZoom?: number | undefined
    draggable?: boolean | undefined //  disable draggble
    scrollWheelZoom?: boolean | undefined //  disable scroll wheel zoom
    dblClickZoom?: boolean | undefined //  disable doubleclick
    touchZoom?: boolean | undefined
    doubleClickZoom?: boolean | undefined
    layerSwitcherControl?: object | undefined
    [key: string]: any
}
