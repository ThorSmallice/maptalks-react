import { differenceBy, uniqBy } from 'lodash-es'
import { createContext } from 'react'

const Context = createContext<any>(null)

export interface initStoreOptions {
    [key: string]: any
}

const initStore: initStoreOptions = {
    map: null,
    tileLayers: [],
}

const reducer = (preStore: any, action: any): any => {
    const { type, data } = action
    switch (type) {
        case 'saveMapInstance':
            return {
                ...preStore,
                map: data,
            }
        case 'addLayers':
            return {
                ...preStore,
                [`${data?.type}s`]: [...preStore?.[data?.type + 's'], data?.instance],
            }
        case 'removeLayers':
            return {
                ...preStore,
                [`${data?.type}s`]: [...preStore?.[data?.type + 's']]?.filter(
                    (item) => item?._id !== data?.id
                ),
            }
        case 'addTileLayers':
            return {
                ...preStore,
                tileLayers: uniqBy([...preStore.tileLayers, ...data], 'id'),
            }
        case 'removeTileLayers':
            return {
                ...preStore,
                tileLayers: differenceBy([...preStore.tileLayers], data, 'id'),
            }
        default:
            return {
                preStore,
                msg: '不支持的修改类型',
            }
    }
}
export { Context, initStore, reducer }
