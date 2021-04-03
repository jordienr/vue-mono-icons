<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="DocumentCheckIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M4 4a2 2 0 0 1 2-2h8a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm13.586 4L14 4.414V8h3.586zM12 4H6v16h12V10h-5a1 1 0 0 1-1-1V4zm3.707 8.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 15.586l3.293-3.293a1 1 0 0 1 1.414 0z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'DocumentCheckIcon',
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