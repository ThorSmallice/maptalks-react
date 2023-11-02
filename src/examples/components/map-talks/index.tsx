import { isObject, keys } from 'lodash-es'
import { Maptalks, TileLayer, useScene, MarkerLayer } from '@maptalks-react'

import { useContext, useEffect, useState } from 'react'

const data = [
    {
        id: '36a0c510-f199-4706-a9b0-0a29c217d242',
        lng: 113.0,
        lat: 22.7434,
        radius: null,
        meta: {
            id: '36a0c510-f199-4706-a9b0-0a29c217d242',
            cruiseMonitoringId: 'b783fcad-c18d-404a-9faf-775170dbff61',
            monitoringTime: '2023-08-25T03:35:29.000Z',
            longitude: '114.46382904',
            latitude: '22.74399948',
            substances: [
                {
                    substanceName: '丙酮',
                    concentration: 9.657,
                    concentrationUnit: 'ug/m3',
                },
            ],
        },
    },
    {
        id: '3f43418b-57d0-430f-a586-d125d6f99977',
        lng: 114.46382904,
        lat: 22.74399757,
        radius: null,
        meta: {
            id: '3f43418b-57d0-430f-a586-d125d6f99977',
            cruiseMonitoringId: 'b783fcad-c18d-404a-9faf-775170dbff61',
            monitoringTime: '2023-08-25T03:35:38.000Z',
            longitude: '114.46382904',
            latitude: '22.74399757',
            substances: [
                {
                    substanceName: 'TVOC',
                    concentration: 127.58,
                    concentrationUnit: 'ug/m3',
                },
            ],
        },
    },
    {
        id: 'c34336e6-8fc8-4ecf-a7af-3e4f9acca42e',
        lng: 115.46382904,
        lat: 22.74399948,
        radius: null,
        meta: {
            id: 'c34336e6-8fc8-4ecf-a7af-3e4f9acca42e',
            cruiseMonitoringId: 'b783fcad-c18d-404a-9faf-775170dbff61',
            monitoringTime: '2023-08-25T03:35:47.000Z',
            longitude: '114.46382904',
            latitude: '22.74399948',
            substances: [
                {
                    substanceName: 'TVOC',
                    concentration: 91.032,
                    concentrationUnit: 'ug/m3',
                },
            ],
        },
    },
]

export default () => {
    const [options, setOptions] = useState({
        center: [107.71791425, 39.17770167],
        attribution: false,
        zoom: 5,
    })
    const [tileType, setTileType] = useState('vec')
    const onClick = () => {
        setTileType((pre) => {
            return pre === 'vec' ? 'img' : 'vec'
        })
        setOptions((pre) => {
            return {
                ...pre,
                zoom: pre.zoom + 1,
            }
        })
    }
    return (
        <div
            style={{
                height: '100%',
            }}
        >
            <Maptalks baseLayerId={tileType} options={options}>
                <MarkerLayer
                    id="marker1"
                    name="测试图层"
                    source={data}
                    fields={{
                        x: 'lng',
                        y: 'lat',
                        id: 'id',
                    }}
                    trigger={['click']}
                    infoWindow={true}
                    customInfoWindow={(data: any, close) => {
                        return (
                            <div className={'bg-white p-4 rounded min-w-[500px]'}>
                                <p className="flex justify-between">
                                    <span>详情:</span>
                                    <span className=" text-red-500" onClick={close}>
                                        ×
                                    </span>
                                </p>
                                <ul>
                                    {keys(data?.meta)
                                        ?.filter((item) => !isObject(data?.meta?.[item]))
                                        ?.map((key: string) => {
                                            return (
                                                <li key={key}>
                                                    <span>{key}:</span>
                                                    <span>{data?.meta?.[key]}</span>
                                                </li>
                                            )
                                        })}
                                </ul>
                            </div>
                        )
                    }}
                ></MarkerLayer>

                <TileLayer
                    source={[
                        {
                            id: 'vec',
                            name: '矢量',
                            options: {
                                crossOrigin: 'Anonymous',
                                urlTemplate: `https://t1.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=33061c75c51ca613f16e360f15134e13`,
                                subdomains: ['a', 'b', 'c', 'd'],
                            },
                        },
                        {
                            id: 'img',
                            name: '卫星',
                            options: {
                                crossOrigin: 'Anonymous',
                                urlTemplate: `https://t1.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=33061c75c51ca613f16e360f15134e13`,
                                subdomains: ['a', 'b', 'c', 'd'],
                            },
                        },
                    ]}
                ></TileLayer>
                <button
                    style={{
                        pointerEvents: 'auto',
                        fontSize: 20,
                        color: 'red',
                        cursor: 'pointer',
                    }}
                    onClick={onClick}
                >
                    点我
                </button>

                <button
                    style={{
                        pointerEvents: 'auto',
                        fontSize: 20,
                        color: 'red',
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        setOptions((pre) => {
                            return {
                                ...pre,
                                zoom: pre.zoom - 1,
                            }
                        })
                    }}
                >
                    点我
                </button>
            </Maptalks>
        </div>
    )
}
