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
        :uuid="uuid"
        :msisdn="msisdn"
      />
      <item
        :price="0"
        bonus="Outro<br />Valor"
        :uuid="uuid"
        :msisdn="msisdn"
        class="_recharges:item-last"
        />
    </div>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
