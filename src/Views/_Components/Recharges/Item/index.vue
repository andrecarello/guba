<template>
  <a class="_recharges:item" :href="href()" target="_blank" v-if="price <= 35">
    <div class="_recharges:price" v-if="price > 0">
      <small>R$</small> {{ price }}
    </div>
    <div class="_recharges:bonus" v-if="!!bonus" v-html="bonus" />
  </a>
</template>

<script src="./index.js"></script>
