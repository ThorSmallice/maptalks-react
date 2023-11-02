import { ReactNode } from 'react'

export type triggers = 'click' | 'mouseenter' | 'mouseleave'

export interface MarkerLayerProps {
    id?: string
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
}
