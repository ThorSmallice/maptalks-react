import '../styles/app.pcss'
import { Outlet } from 'react-router-dom'
function App() {
    return (
        <div id="app">
            <Outlet></Outlet>
        </div>
    )
}

export default App
