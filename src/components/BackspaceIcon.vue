<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="BackspaceIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M17.707 8.293a1 1 0 0 1 0 1.414L15.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L14 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L12.586 12l-2.293-2.293a1 1 0 1 1 1.414-1.414L14 10.586l2.293-2.293a1 1 0 0 1 1.414 0z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'BackspaceIcon',
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