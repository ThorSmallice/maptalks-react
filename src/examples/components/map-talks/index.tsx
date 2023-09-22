import { Maptalks, useScene } from 'maptalks-react'
import { useEffect } from 'react'

export default () => {
    useEffect(() => {}, [])

    return (
        <div
            style={{
                height: '100%',
            }}
        >
            <Maptalks>
                <Test></Test>
            </Maptalks>
        </div>
    )
}
const Test = (props) => {
    const sss = useScene()
    console.log(sss)
    useEffect(() => {}, [])
    return <>12345</>
}
