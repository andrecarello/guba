<template>
  <section class="_recharges">
    <h3 class="_recharges:title">
      <strong>Recarregue o seu Oi</strong>
      e desbloqueie essa oferta:
    </h3>
    <div class="_recharges:items">
      <item
        v-for="(value, index) in values"
        :key="index"
        :price="value.price"
        :bonus="value.bonus"
      />
      <item bonus="Outro<br />Valor" class="_recharges:item-last" :price="0" />
    </div>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
