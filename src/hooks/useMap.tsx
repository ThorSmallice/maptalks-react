import { Map, TileLayer } from 'maptalks'
import { useEffect, useState } from 'react'
const useMap = ({
    container,
    options = {
        center: [-0.113049, 51.498568],
        zoom: 14,
        baseLayer: new TileLayer('base', {
            urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
            subdomains: ['a', 'b', 'c', 'd'],
            attribution:
                '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',
        }),
    },
}: any) => {
    const [mapInstance, setMapInstance] = useState<any>(null)

    useEffect(() => {
        if (!container) {
            return setMapInstance(null)
        }
        const instance = new Map(container?.current, options)
        setMapInstance(instance)

        return () => {
            instance?.remove()
            setMapInstance(null)
        }
    }, [container])

    return mapInstance
}
export default useMap
