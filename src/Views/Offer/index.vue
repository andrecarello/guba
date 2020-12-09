<template>
  <skeletonOffer v-if="loading" />
  <section class="offer" v-else>
    <a
      href="/offer/goback"
      class="offer:close"
      @click.prevent.stop="$router.go(-1)"
    />

    <InterseptedImage
      :source="
        offer.image_secondary
          ? offer.image_secondary
          : require(`@/assets/images/default-img.gif`)
      "
      :alt="offer.subtitle"
      class="offer:figure"
    />

    <InterseptedImage
      :source="
        offer.company_logo
          ? offer.company_logo
          : require(`@/assets/images/default-img.gif`)
      "
      :alt="offer.company_name"
      class="offer:brand"
    />

    <div v-if="!isClient()" class="offer:container">
      <h1 class="offer:title" v-text="offer.title" />
      <p class="offer:description" v-text="offer.subtitle" />

      <div class="offer:discount" v-text="offer.discount" />

      <recharges />
    </div>

    <div v-else class="offer:container">
      <h1 class="offer:title" v-text="offer.title" />
      <p class="offer:description" v-text="offer.subtitle" />

      <div class="offer:discount" v-text="offer.discount" />
      <!-- BEGIN: SHOW COUPON BUTTON -->
      <a
        v-if="
          (!offer.has_link && offer.has_coupon) ||
          (offer.has_link && offer.has_code)
        "
        href="/oferta/resgatar"
        @click.prevent.stop="requestCoupon(offer.id)"
        class="offer:redeem"
      >
        <loading
          v-if="isLoadingVoucher"
          background="transparent"
          dots="#f8f8f8"
        />
        <span v-else>Resgatar</span>
      </a>
      <!-- END: SHOW COUPON BUTTON -->
      <!-- BEGIN: SHOW LINK BUTTON -->
      <a
        v-if="offer.has_link && !offer.has_code"
        :href="offer.discount_url"
        target="_blank"
        class="offer:redeem"
      >
        <loading
          v-if="isLoadingVoucher"
          background="transparent"
          dots="#f8f8f8"
        />
        <span v-else>Resgatar</span>
      </a>
      <!-- END: SHOW LINK BUTTON -->
    </div>

      <a
        href="/oferta/detalhe"
        class="offer:button"
        @click.prevent.stop="toggleModal"
      >
        Detalhes
      </a>

      <modalOffer
        :content="offer"
        :class="isOpenDetailModal ? 'modal:offer:active' : ''"
      />

    <slot v-if="isClient()">
      <modalCoupon
        v-if="offer.has_code"
        :class="isOpenCouponModal ? 'modal:coupon:active' : ''"
        :voucher="voucher"
        :offer="offer"
      />
    </slot>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
