<template>
  <figure v-if="container">
    <img :src="require(`@/assets/images/${source}`)" :alt="alt" />
  </figure>

  <img v-else :src="require(`@/assets/images/${source}`)" :alt="alt" />
</template>
<script src="./index.js"></script>
