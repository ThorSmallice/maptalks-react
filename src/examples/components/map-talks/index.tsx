import { Maptalks, TileLayer, useScene, MarkerLayer } from 'maptalks-react'

import { useContext, useEffect, useState } from 'react'

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
                <MarkerLayer id="marker1" name="测试图层" source={[]}></MarkerLayer>
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
