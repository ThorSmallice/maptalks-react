---
nav:
    title: 组件
group:
    title: 容器
---

# TileLayer

用于配置底图图源,配置后可以控制Maptalks的baseLayerId进行切换

```jsx
import { Maptalks, TileLayer } from 'maptalks-react'
import { useState } from 'react'
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
    }

    return (
        <div style={{ height: '500px' }}>
            <Maptalks options={options} baseLayerId={tileType}>
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
                        padding: 5,
                        backgroundColor: '#fff',
                        border: '1px solid #000',
                        borderRadius: 3,
                        pointerEvents: 'auto',
                        fontSize: 16,
                        color: 'red',
                        cursor: 'pointer',
                    }}
                    onClick={onClick}
                >
                    切换底图
                </button>
            </Maptalks>
        </div>
    )
}
```
