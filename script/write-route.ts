import { resolve } from 'path'
import { closeSync, openSync, readdirSync, writeSync } from 'fs'
import { camelCase, replace, upperFirst } from 'lodash-es'

const writeRoutes = () => {
    const filesName = readdirSync(resolve(__dirname, '../src/examples/components'))
    const comps = filesName?.map((component) => ({
        componentName: upperFirst(camelCase(replace(component, '.tsx', ''))),
        pathName: replace(component, '.tsx', ''),
    }))

    let importCompsStr: string = ''
    comps?.forEach(({ componentName, pathName }) => {
        importCompsStr += `
            const ${componentName} = lazy(() => import("../components/${pathName}"));
        `
    })

    const content = `
        import { lazy } from 'react';
        import { createBrowserRouter } from 'react-router-dom';
        import App from '../App'; 
        ${importCompsStr}



        const routers: any = createBrowserRouter([
            {
                path: '/',
                element: <App />,
                errorElement: <>出错啦！</>,
                children: [${comps?.map(({ componentName, pathName }) => {
                    return `
                        {
                            path: "${pathName}",
                            element: <${componentName}></${componentName}>
                        }
                    `
                })}] 
            },
        ]);

        export default routers  
    `
    const routerFile = openSync(resolve(__dirname, '../src/examples/router/index.tsx'), 'w')
    writeSync(routerFile, content)
    closeSync(routerFile)
}

export default writeRoutes
