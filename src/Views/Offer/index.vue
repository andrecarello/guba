<template>
  <section class="offer">
    <a href="/offer/voltar" class="offer:close" @click.prevent.stop="$router.go(-1)"></a>
    <figure class="offer:figure">
      <img :src="offer.image_secondary" :alt="offer.subtitle" />
    </figure>

    <figure class="offer:brand">
      <img :src="offer.company_logo" :alt="offer.company_name" />
    </figure>

    <div class="offer:container">
      <h1 class="offer:title" v-text="offer.title" />
      <p class="offer:description" v-text="offer.subtitle" />

      <div class="offer:discount" v-text="offer.discount" />

      <a href="/oferta/resgatar" class="offer:redeem">Resgatar</a>
    </div>

    <a
      href="/oferta/detalhe"
      class="offer:button"
      @click.prevent.stop="isOpenDetailModal = !isOpenDetailModal"
    >
      Detalhes
    </a>

    <modal :content="offer" />
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
