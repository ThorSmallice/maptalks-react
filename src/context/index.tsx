import { createContext } from 'react'

const Context = createContext<any>(null)

export interface initStoreOptions {
    [key: string]: any
}

const initStore: initStoreOptions = {}

const reducer = (preStore: any, action: any): any => {
    const { type, data } = action
    switch (type) {
        case 'saveMapInstance':
            return {
                ...preStore,
                map: data,
            }

        default:
            return {
                preStore,
                msg: '不支持的修改类型',
            }
    }
}
export { Context, initStore, reducer }
