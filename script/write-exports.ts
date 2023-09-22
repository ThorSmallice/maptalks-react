import { closeSync, openSync, readdirSync, writeSync } from 'fs'
import { camelCase, replace, upperFirst } from 'lodash-es'
import { resolve } from 'path'

const writeExports = () => {
    const filesName = readdirSync(resolve(__dirname, '../src/components'))

    let content = `
        import './styles/reset.pcss';  
    `

    filesName?.forEach((comp) => {
        content += `
            export { default as ${upperFirst(
                camelCase(replace(comp, '.tsx', ''))
            )} } from '@comps/${replace(comp, '.tsx', '')}';
        `
    })

    const hooks = readdirSync(resolve(__dirname, '../src/hooks'))?.filter(
        (item) => item?.startsWith('use')
    )

    hooks?.forEach((hook) => {
        content += `
            export { default as ${camelCase(replace(hook, '.tsx', ''))} } from '@hooks/${replace(
                hook,
                '.tsx',
                ''
            )}'; 
        `
    })

    const file = openSync(resolve(__dirname, '../src/index.ts'), 'w')
    writeSync(file, content)
    closeSync(file)
}

export default writeExports
