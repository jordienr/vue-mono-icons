<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="CheckIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M20.664 5.253a1 1 0 0 1 .083 1.411l-10.666 12a1 1 0 0 1-1.495 0l-5.333-6a1 1 0 0 1 1.494-1.328l4.586 5.159 9.92-11.16a1 1 0 0 1 1.411-.082z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'CheckIcon',
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