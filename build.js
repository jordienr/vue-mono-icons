const path = require('path')
// const mono = require('mono-icons')
const pascalCase = require('pascal-case')
const fs = require('fs-extra')
const parseHTML = require('node-html-parser').parse;

const monoIconsPath = 'node_modules/mono-icons/svg';

(async function main() {
  const data = await getSvgArrayFromPath(monoIconsPath)
  await buildComponentsDirectory(data)
  await buildMainJsFile(data)
  await buildIconListFile(data)
})()

const componentTemplate = (name, path) => `
<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="${name}"
      role="presentation"
      :fill="color"
    >
      ${path}
    </svg>
    </div>
</template>

<script>
export default {
  name: '${name}',
  props: {
    size: {
        type: [String, Number],
        default: '24'
    },
    width: {
      type: [String, Number]
    },
    color: {
        type: String,
        default: 'currentColor'
    }
  }
}
</script>
`.trim()

async function getSvgArrayFromPath(path) {
  const dir = await fs.promises.opendir(path)
  let data = []

  for await (const file of dir) {
    const filePath = path + '/' + file.name
    const fileName = file.name.split('.').shift() // Removes .svg from end of file name
    const svg = await fs.readFile(filePath, "utf8")
    const pascalCaseName = pascalCase.pascalCase(`${fileName}-icon`)

    data.push({
      name: fileName,
      path: filePath,
      svg: svg,
      pascalCaseName: pascalCaseName
    })
  }
  return data
}

async function buildComponentsDirectory(data) {
  const componentsPath = './src/components/'


  data.forEach(component => {
    const { svg, pascalCaseName } = component
    const componentPath = `${componentsPath + pascalCaseName}.vue`
    const svgEl = parseHTML(svg)
    const svgPath = svgEl.firstChild

    // Add fill attr to svg
    svgEl.fill = 'currentColor'
    // Remove fill attrs from child elements
    svgPath.childNodes.forEach(i => i.removeAttribute('fill'))

    const componentCode = componentTemplate(pascalCaseName, svgPath.firstChild.toString())

    fs.ensureDir(path.dirname(componentPath)).then(() => fs.writeFile(componentPath, componentCode, 'utf-8')).catch(err => console.log(err))
  })
}

async function buildIconListFile(data) {
  const iconNames = data.map(component => `"${component.pascalCaseName}"`)

  const iconListExportString = `export const iconList = [${iconNames.toString()}]`

  return fs.outputFile('./src/iconList.js', iconListExportString)
}

async function buildMainJsFile(data) {

  const mainFileContent = data.map(component => `export { default as ${component.pascalCaseName} } from './components/${component.pascalCaseName}.vue';`).join('\n')

  return fs.outputFile('./src/index.js', mainFileContent, 'utf-8')


}


