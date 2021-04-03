<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="SendIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M12 2a1 1 0 0 1 .894.553l9 18a1 1 0 0 1-1.11 1.423L12 20.024l-8.783 1.952a1 1 0 0 1-1.111-1.423l9-18A1 1 0 0 1 12 2zm1 16.198l6.166 1.37L13 7.236v10.962zM11 7.236L4.834 19.568 11 18.198V7.236z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'SendIcon',
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