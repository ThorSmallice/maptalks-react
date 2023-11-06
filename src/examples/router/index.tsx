
        import { lazy } from 'react';
        import { createBrowserRouter } from 'react-router-dom';
        import App from '../App'; 
        
            const MapTalks = lazy(() => import("../components/map-talks"));
        



        const routers: any = createBrowserRouter([
            {
                path: '/',
                element: <App />,
                errorElement: <>出错啦！</>,
                children: [
                        {
                            path: "map-talks",
                            element: <MapTalks></MapTalks>
                        }
                    ] 
            },
        ]);

        export default routers  
    