<template>
  <carousel
    class="banner:home"
    :arrows="false"
    :dots="true"
    :centerMode="true"
    centerPadding="15px"
    :draggable="true"
    lazyLoad="true"
    :autoplay="false"
    :autoplaySpeed="5000"
    v-if="this.cluster !== 3"
  >
    <div class="item">
      <img
        v-if="this.cluster <= 2 && giftcardDay()"
        src="@/assets/images/banner/topo-migração.jpg"
        alt=""
        class="img-click"
        @click="redirectGiftMigration"
      />
      <img
        v-else-if="this.cluster === 5 && (giftcardDay() || migrationGiftcardDays())"
        src="@/assets/images/banner/topo-gift.jpg"
        alt=""
        class="img-click"
        @click="redirectRedeem"
      />
      <img
        v-else
        class="img-click"
        src="@/assets/images/banner/topo-migração-sem-gift.jpg"
        alt=""
        @click="redirectMigration({ name: 'plans' })"
      />
    </div>
  </carousel>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
