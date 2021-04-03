<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="EyeIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'EyeIcon',
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