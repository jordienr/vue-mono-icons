<template>
    <div class="mono-icon" ref="monoIcon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 9.41421L8 15C8 15.5523 7.55228 16 7 16C6.44772 16 6 15.5523 6 15L6 7C6 6.44772 6.44772 6 7 6L15 6C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8L9.41421 8L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L8 9.41421Z" fill="#0D0D0D"/>
</svg>

    </div>
</template>

<script>
export default {
  name: 'ArrowLeftUpIcon',
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