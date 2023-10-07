---
nav:
    title: 组件
    order: 1
group:
    title: 容器
---

# Maptalks

地图容器，其他所有图层组件必须在该组件内部使用

```jsx
import { Maptalks, TileLayer } from 'maptalks-react'

export default () => {
    return (
        <div style={{ height: '500px' }}>
            <Maptalks
                options={{
                    center: [107.71791425, 39.17770167],
                    attribution: false,
                    zoom: 5,
                }}
            >
                <TileLayer
                    source={[
                        {
                            id: 'vec',
                            name: '矢量',
                            options: {
                                urlTemplate:
                                    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                                subdomains: ['a', 'b', 'c', 'd'],
                                attribution:
                                    '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',
                            },
                        },
                    ]}
                ></TileLayer>
            </Maptalks>
        </div>
    )
}
```
