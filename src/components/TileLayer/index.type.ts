import { TileLayer, TileLayerInstanceStatic, TileLayerOptions } from 'maptalks'
import { Ref } from 'react'

export type TileItem = {
    id: string | number // 图层id
    name: string // 图层名称
    instance: TileLayer // 图层实例对象
}
export type TileSourceData = {
    id: string | number // 图层id
    name: string // 图层名称
    options?: TileLayerOptions // tileLayer的配置项
}
export interface TileLayerProps {
    source: TileSourceData[] // 底图 图源列表
    layer?: Ref<TileItem[]> // 接收一个Ref,可以得到所有tileLayer组层的数组
}
