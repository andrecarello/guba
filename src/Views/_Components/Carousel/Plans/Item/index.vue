<template>
  <article class="_plans:item" :id="plan.code_m4u + '-' + plan.class">
    <header class="_plans:header">
      <p class="_plans:data">
        <small v-text="plan.class" />
        {{ plan.data }}GB
      </p>
      <div class="_plans:apps">
        <loadImage
          v-for="(app, index) in apps(plan.apps)"
          :key="index"
          class="_plans:app"
          :source="'apps/' + app + '.svg'"
          :alt="'Logo do aplicativo ' + app.toUpperCase()"
        />
      </div>
    </header>
    <section class="_plans:buttons">
      <a
        :href="
          'https://plano.mobi/migracao/checkout/' +
          slugify(plan.class) +
          '/credit_card'
        "
        target="_blank"
        class="_plans:button"
        >Selecione</a
      >
    </section>
    <footer class="_plans:footer">
      <div class="_plans:info">
        <strong>Sem fidelização</strong>, exclusivo no cartão de crédito.
      </div>
      <div class="_plans:price">
        <div class="_plans:price-unity">{{ plan.price_broke.unity }}</div>
        <div class="_plans:price-tenths">,{{ plan.price_broke.tenths }}</div>
        <div class="_plans:price-month">/MÊS</div>
      </div>
      <div
        class="_plans:benefits"
        :class="show ? '_plans:benefits-show' : ''"
        @click="show = !show"
      >
        + Vantagens <chevronIcon size="20" />
      </div>
      <div class="_plans:benefits-content" v-if="show">
        <div class="_plans:benefits-row">
          <loadImage
            source="icons/phone.svg"
            alt="Ícone de um celular com minutos ilimitados"
          />
          <span>Minutos Ilimitados</span>
        </div>
        <div class="_plans:benefits-row">
          <loadImage source="icons/sva.svg" alt="Ícone de aplicativos online" />
          <span>
            Oi Jornais, Revista Coquetel, Portal Consumidor Inteligente
          </span>
        </div>
        <div class="_plans:benefits-row">
          <loadImage source="icons/4g.svg" alt="Ícone de internet 4G" />
          <span>Internet</span>
        </div>
        <div class="_plans:benefits-row">
          Consulte as <router-link to="/">Condições de compra</router-link>
        </div>
      </div>
    </footer>
  </article>
</template>

<script src="./index.js"></script>
