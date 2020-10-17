
<template>
    <div class="mono-icon" ref="monoIcon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10ZM7 10C7 9.44772 7.44772 9 8 9H12C12.5523 9 13 9.44772 13 10C13 10.5523 12.5523 11 12 11H8C7.44772 11 7 10.5523 7 10Z" fill="#0D0D0D"/>
</svg>

    </div>
</template>

<script>
export default {
  name: 'SvgIcon',
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
  mounted() {
    this.$refs.monoIcon.children[0].children.forEach(child => child.setAttribute('fill', ''))
    this.$refs.monoIcon.children[0].setAttribute('fill', this.color)
    this.$refs.monoIcon.children[0].setAttribute('height', this.size)
    this.$refs.monoIcon.children[0].setAttribute('width', this.size)
  }
}
</script>4L18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071C16.904 18.3183 16.9024 17.6889 17.2879 17.2979L17.2929 17.2926C17.3 17.2851 17.3138 17.2701 17.3334 17.2478C17.3725 17.203 17.4347 17.1287 17.5125 17.025C17.6682 16.8175 17.8853 16.4933 18.1056 16.0528C18.5444 15.1751 19 13.8272 19 12C19 10.1728 18.5444 8.82494 18.1056 7.94723C17.8853 7.50674 17.6682 7.18255 17.5125 6.97501C17.4347 6.87131 17.3725 6.79704 17.3334 6.75227C17.3138 6.72989 17.3 6.71493 17.2929 6.70739L17.2879 6.70208C16.9024 6.31117 16.904 5.68176 17.2929 5.29291ZM15.2929 8.29291C15.6834 7.90238 16.3166 7.90238 16.7071 8.29291L16.7085 8.29434L16.7101 8.29587L16.7134 8.29923L16.7211 8.30715L16.7408 8.32779C16.7557 8.34369 16.7741 8.36388 16.7955 8.38838C16.8384 8.43736 16.8934 8.50371 16.9563 8.58751C17.0818 8.75498 17.2397 8.99329 17.3944 9.3028C17.7056 9.92509 18 10.8273 18 12C18 13.1728 17.7056 14.0749 17.3944 14.6972C17.2397 15.0067 17.0818 15.2451 16.9563 15.4125C16.8934 15.4963 16.8384 15.5627 16.7955 15.6116C16.7741 15.6361 16.7557 15.6563 16.7408 15.6722L16.7211 15.6929L16.7134 15.7008L16.7101 15.7042L16.7085 15.7057L16.7078 15.7064C16.3173 16.0969 15.6834 16.0976 15.2929 15.7071C14.9057 15.32 14.9024 14.6943 15.2829 14.303C15.2843 14.3015 15.2868 14.2987 15.2904 14.2946C15.3022 14.2811 15.3253 14.2537 15.3562 14.2125C15.4182 14.13 15.5103 13.9933 15.6056 13.8028C15.7944 13.4251 16 12.8272 16 12C16 11.1728 15.7944 10.5749 15.6056 10.1972C15.5103 10.0067 15.4182 9.87005 15.3562 9.78751C15.3253 9.74631 15.3022 9.71892 15.2904 9.70539C15.2868 9.70132 15.2843 9.69852 15.2829 9.69701C14.9024 9.30574 14.9057 8.68008 15.2929 8.29291Z" fill="#0D0D0D"/>
</svg>

    </div>
</template>

<script>
export default {
  name: 'SvgIcon',
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
  mounted() {
    this.$refs.monoIcon.children[0].children.forEach(child => child.setAttribute('fill', ''))
    this.$refs.monoIcon.children[0].setAttribute('fill', this.color)
    this.$refs.monoIcon.children[0].setAttribute('height', this.size)
    this.$refs.monoIcon.children[0].setAttribute('width', this.size)
  }
}
</script>    default: '24'
    },
    color: {
        type: String,
        default: '#434343'
    }
  },
  mounted() {
    this.$refs.monoIcon.children[0].children.forEach(child => child.setAttribute('fill', ''))
    this.$refs.monoIcon.children[0].setAttribute('fill', this.color)
    this.$refs.monoIcon.children[0].setAttribute('height', this.size)
    this.$refs.monoIcon.children[0].setAttribute('width', this.size)
  }
}
</script>