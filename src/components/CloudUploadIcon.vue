<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="CloudUploadIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M11 4a4 4 0 0 0-3.999 4.102 1 1 0 0 1-.75.992A3.002 3.002 0 0 0 7 15h1a1 1 0 1 1 0 2H7a5 5 0 0 1-1.97-9.596 6 6 0 0 1 11.169-2.4A6 6 0 0 1 16 17a1 1 0 1 1 0-2 4 4 0 1 0-.328-7.987 1 1 0 0 1-.999-.6A4.001 4.001 0 0 0 11 4zm.293 5.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L13 12.414V20a1 1 0 1 1-2 0v-7.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'CloudUploadIcon',
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