<template>
    <div class="mono-icon" ref="monoIcon">
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.418 2.091A1 1 0 0 1 14 3v18a1 1 0 0 1-1.65.76L5.63 16H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2.63l6.72-5.76a1 1 0 0 1 1.068-.149zM12 5.175L6.65 9.76A1 1 0 0 1 6 10H4v4h2a1 1 0 0 1 .65.24L12 18.827V5.174zm4.293 4.119a1 1 0 0 1 1.414 0L19 10.586l1.293-1.293a1 1 0 1 1 1.414 1.414L20.414 12l1.293 1.293a1 1 0 0 1-1.414 1.414L19 13.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L17.586 12l-1.293-1.293a1 1 0 0 1 0-1.414z" fill="#0D0D0D"/></svg>
    </div>
</template>

<script>
export default {
  name: 'VolumeOffIcon',
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
</script>