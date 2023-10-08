---
nav:
    title: 组件
group:
    title: 基础图层
    order: 1

order: 1
---

# MarkerLayer

标注图层

```tsx
import { Maptalks, TileLayer, MarkerLayer } from 'maptalks-react'
import { useState } from 'react'
const data = [
    {
        id: '36a0c510-f199-4706-a9b0-0a29c217d242',
        lng: 113.0,
        lat: 22.7434,
    },
    {
        id: '3f43418b-57d0-430f-a586-d125d6f99977',
        lng: 114.46382904,
        lat: 22.74399757,
    },
    {
        id: 'c34336e6-8fc8-4ecf-a7af-3e4f9acca42e',
        lng: 115.46382904,
        lat: 22.74399948,
    },
]
export default () => {
    const [options, setOptions] = useState({
        center: [110.71791425, 22.17770167],
        attribution: false,
        zoom: 5,
    })

    return (
        <div
            style={{
                height: '500px',
            }}
        >
            <Maptalks options={options}>
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
                                <ul></ul>
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
                    ]}
                ></TileLayer>
            </Maptalks>
        </div>
    )
}
```

<API id="MarkerLayer"></API>
