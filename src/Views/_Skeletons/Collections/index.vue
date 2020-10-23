<template>
  <div class="skeleton">
    <div class="skeleton:title" />
    <div class="skeleton:items">
      <div class="skeleton:item" v-for="i in 5" :key="i">
        <div v-for="i in 4" :key="i"></div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
