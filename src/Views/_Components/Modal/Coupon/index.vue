<template>
  <div class="modal:coupon">
    <a href="/" class="modal:coupon-header" @click.prevent.stop="toggleModal">
      <ChevronLeftIcon class="modal:coupon-close" size="22" />
      <div class="modal:coupon-title">Retornar para a oferta</div>
    </a>
    <div class="modal:coupon-content" v-if="$parent.isOpenCouponModal">
      <h3 class="modal:coupon-content-title">
        Desconto especial de <strong>{{ offer.discount }}</strong>
      </h3>

      <div
        class="modal:coupon-field"
        data-before-text="Clique aqui para copiar o código:"
      >
        <input type="text" :value="voucher" readonly />
        <button
          class="modal:coupon-field-button"
          type="button"
          v-clipboard:copy="voucher"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
          v-if="!isCopiedVoucher"
        >
          <CopyIcon size="32" />
          <span>Copiar</span>
        </button>
        <div class="modal:coupon-field-button" v-else>
          <CheckIcon size="32" />
        </div>
      </div>

      <a
        v-if="!!offer.discount_url"
        :href="offer.discount_url"
        target="_blank"
        class="modal:coupon-button"
        >Ir para a oferta</a
      >
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
