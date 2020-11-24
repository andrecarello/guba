<template>
  <div class="skeleton:collection">
    <div class="skeleton:collection-title" />
    <div class="skeleton:collection-content" v-for="i in 3" :key="i">
      <div class="skeleton:collection-figure" />
      <div class="skeleton:collection-body">
        <div v-for="j in 4" :key="j"></div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
