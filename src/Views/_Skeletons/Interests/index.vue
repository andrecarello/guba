<template>
  <div class="skeleton:interests">
    <div class="skeleton:interests-items">
      <div
        class="skeleton:interests-item"
        v-for="i in 17"
        :key="i"
        :style="'max-width: ' + Math.floor(Math.random() * 150) + 'px'"
      ></div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
