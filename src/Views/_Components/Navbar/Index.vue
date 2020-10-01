<template>
  <nav class="navbar" :class="isOpenMenu ? 'active' : ''">
    <div class="brand">
      <OiIcon :width="39" :height="42" />
      <span>VANTAGENS</span>
    </div>

    <a href="/" class="togglr" @click.prevent.stop="isOpenMenu = !isOpenMenu">
      <span v-for="i in 3" :key="i" />
    </a>

    <div class="inner">
      <header class="flex:fs:c">
        <div class="flex:c:c circle:80 border:2 border:orange mr:30">
          <OiIcon :width="39" :height="42" />
        </div>
        <div class="flex:c:fs fd:c">
          <Msisdn />
          <Balance />
        </div>
        <a
          href="/"
          class="togglr"
          @click.prevent.stop="isOpenMenu = !isOpenMenu"
        >
          <span v-for="i in 3" :key="i" />
        </a>
      </header>

      <section>
        <router-link v-for="(item, index) in items" :key="index" :to="item.url">
          <loadImage :source="`icons/${item.icon}.svg`" :alt="item.text" />
          {{ item.text }}</router-link
        >
      </section>
    </div>
  </nav>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
