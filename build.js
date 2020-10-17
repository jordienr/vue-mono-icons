const path = require('path')
// const mono = require('mono-icons')
const pascalCase = require('pascal-case')
const fs = require('fs-extra')

const monoIconsPath = 'node_modules/mono-icons/svg';

(async function main() {
  const data = await getSvgArrayFromPath(monoIconsPath)
  await buildComponentsDirectory(data)
  await buildMainJsFile(data)
})()

const componentTemplate = (name, svg) => `
<template>
    <div class="mono-icon" ref="monoIcon">
        ${svg}
    </div>
</template>

<script>
export default {
  name: '${name}',
  props: {
    size: {
        type: String,
        default: '24'
    },
    color: {
        type: String,
        default: '#434343'
    }
  },
  methods: {
    update() {
      this.$refs.monoIcon.children[0].children.forEach(child => child.setAttribute('fill', ''))
      this.$refs.monoIcon.children[0].setAttribute('fill', this.color)
      this.$refs.monoIcon.children[0].setAttribute('height', this.size)
      this.$refs.monoIcon.children[0].setAttribute('width', this.size)
    }
  },
  watch: {
    size() {
      this.update()
    },
    color() {
      this.update()
    }
  },
  mounted() {
    this.update()
  }
}
</script>`

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
    const componentCode = componentTemplate(pascalCaseName, svg)

    fs.ensureDir(path.dirname(componentPath)).then(() => fs.writeFile(componentPath, componentCode, 'utf-8')).catch(err => console.log(err))
  })
}

async function buildMainJsFile(data) {

  const mainFileContent = data.map(component => `export { default as ${component.pascalCaseName} } from './components/${component.pascalCaseName}.vue';`).join('\n')

  return fs.outputFile('./src/index.js', mainFileContent, 'utf-8')


}


