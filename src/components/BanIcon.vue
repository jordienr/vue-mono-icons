<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="BanIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M5.68 7.094A8 8 0 0 0 16.905 18.32L5.68 7.094zM7.094 5.68L18.32 16.906A8 8 0 0 0 7.094 5.68zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'BanIcon',
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