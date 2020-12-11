<template>
  <section class="_plans">
    <div class="_plans:title">
      <span>Migre para Oi Controle</span>
      e desbloqueie essa oferta:
    </div>

    <carouselPlans
      :arrows="true"
      :dots="true"
      :centerMode="false"
      centerPadding="15px"
      :draggable="true"
      :autoplay="false"
      :infinite="false"
    >
      <template #prevArrow="arrowOption">
        <div class="custom-arrow" :count="(arrowOption.currentSlide + 1) +' of '+ arrowOption.slideCount">
          <iconLeft />
        </div>
      </template>

      <template #nextArrow="arrowOption">
        <div class="custom-arrow" :count="(arrowOption.currentSlide + 1) +' of '+ arrowOption.slideCount">
          <iconRight />
        </div>
      </template>

      <item v-for="(plan, index) in plans" :key="index" :plan="plan" />
    </carouselPlans>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
