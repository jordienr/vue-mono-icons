<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="CaretDownIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M17 10l-5 6-5-6h10z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'CaretDownIcon',
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