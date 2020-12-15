<template>
  <section class="collections">
    <div class="collections:header">
      <div class="collections:title">{{ content.name }}</div>
      <router-link
        :to="'/colecao/' + content.id + '/' + slugify(content.name)"
        class="collections:link"
        data-ga-name="Coleção"
        :data-ga="JSON.stringify({
          'nome': content.name,
          'id': content.id,
          'cluster usuário': cluster,
          'ddd': ddd
        })"
        >Ver tudo</router-link
      >
    </div>

    <div class="collections:items">
      <article
        class="collections:item"
        :style="'order: ' + offer.cluster"
        v-for="(offer, index) in content.offers"
        :key="index"
        data-ga-name="Oferta"
        :data-ga="JSON.stringify({
          'nome': offer.title,
          'id': offer.id,
          'coleção': content.name,
          'cliente': offer.company_name,
          'cluster usuário': cluster,
          'ddd': ddd
        })"
      >
        <!-- <div class="collections:share"><shareIcon size="20" /></div> -->
        <router-link :to="'/oferta/' + offer.id + '/' + slugify(offer.title)">
          <div style="position: relative">
            <permission v-if="!offerPermission(offer.cluster)" :cluster="offer.cluster" />
            <InterseptedImage
              :source="offer.image_tertiary ? offer.image_tertiary : require(`@/assets/images/default-img.gif`)"
              :alt="offer.company_name + ' - ' + offer.discount"
              class="collections:image"
            />
          </div>

          <InterseptedImage
            :source="offer.company_logo ? offer.company_logo : require(`@/assets/images/default-img.gif`)"
            :alt="offer.company_name"
            class="collections:brand"
          />

          <h2 class="collections:subtitle">{{ offer.title ? offer.title : offer.subtitle }}</h2>
          <h3 class="collections:company">{{ offer.company_name }}</h3>

          <footer>
            <discount
              class="collections:discount"
              :content="offer.discount"
              :tenths="
                !!offer.broke_discount ? offer.broke_discount.tenths : ''
              "
              :unity="!!offer.broke_discount ? offer.broke_discount.unity : ''"
            />
            <div class="collections:button">Resgatar</div>
          </footer>
        </router-link>
      </article>
      <div class="collections:spacer" style="order: 99" />
    </div>
    <div class="collections:next"><chevronIcon size="15" /></div>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
