<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="FavoriteIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M12 2.5a1 1 0 0 1 .895.553l2.578 5.158 5.671.824a1 1 0 0 1 .554 1.706l-4.127 4.024.928 5.674a1 1 0 0 1-1.455 1.044L12 18.807l-5.044 2.676a1 1 0 0 1-1.455-1.044l.928-5.674-4.127-4.024a1 1 0 0 1 .554-1.706l5.67-.824 2.58-5.158A1 1 0 0 1 12 2.5zm0 3.236l-1.918 3.836a1 1 0 0 1-.75.543l-4.184.608 3.05 2.973a1 1 0 0 1 .289.878L7.8 18.771l3.731-1.98a1 1 0 0 1 .938 0l3.731 1.98-.687-4.197a1 1 0 0 1 .289-.877l3.05-2.974-4.183-.608a1 1 0 0 1-.75-.543L12 5.736z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'FavoriteIcon',
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