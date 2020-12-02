<template>
  <container v-if="result.length || skeleton">
    <div class="search">
      <div class="search:header">
        <div class="search:title">
          Resultado da busca por <span>{{ query }}</span>
        </div>
        <router-link to="/" class="search:link">Voltar</router-link>
      </div>

      <SkeletonSearch v-if="skeleton" />
      <div class="search:items" v-else>
        <router-link
          :to="'/oferta/' + offer.id + '/' + slugify(offer.title)"
          class="search:item"
          v-for="(offer, index) in result"
          :key="index"
        >
          <InterseptedImage
            :source="offer.image_tertiary"
            :alt="offer.company_name + ' - ' + offer.discount"
            class="search:image"
          />

          <div class="search:body">
            <h2 class="search:subtitle">
              {{ !!offer.subtitle ? offer.subtitle : offer.title }}
            </h2>
            <h3 class="search:company">{{ offer.company_name }}</h3>
            <discount
              class="search:discount"
              :content="offer.discount"
              :tenths="
                !!offer.broke_discount ? offer.broke_discount.tenths : ''
              "
              :unity="!!offer.broke_discount ? offer.broke_discount.unity : ''"
            />
            <div class="search:button">Resgatar</div>
          </div>
        </router-link>
      </div>

      <a
        v-if="!skeleton && page < lastPage"
        :href="'/busca/' + slugify(query) + '/::' + page"
        class="search:more"
        :class="loading ? 'search:more:disabled' : ''"
        @click.prevent.stop="(e) => more(e)"
      >
        <slot v-if="loading">
          <LoadingIcon fill="#ff6d00" stroke="#ff6d00" /> Aguarde
        </slot>
        <slot v-else>Carregar mais</slot>
      </a>
    </div>
  </container>

  <container v-else>
    <div class="search">
      <div class="search:header">
        <router-link to="/" class="search:link">Voltar</router-link>
      </div>

      <div class="search:empty">
        <p>Infelizmente a busca por <strong>{{ query }}</strong> não teve nenhum resultado.</p>
        <p>Deseja pesquisar outro termo?</p>
        <form action="" @submit.prevent="submit">
          <input v-model="form.search" />
          <button type="submit" v-if="form.search.length > 2">Enviar</button>

          <span>digite ao menos 3 letras</span>
        </form>
      </div>
    </div>
  </container>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
