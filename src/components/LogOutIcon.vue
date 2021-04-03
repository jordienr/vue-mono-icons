<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="LogOutIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M2 6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2a1 1 0 1 1-2 0V6H4v12h9v-2a1 1 0 1 1 2 0v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm15.293 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 13H9a1 1 0 1 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 0-1.414z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'LogOutIcon',
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