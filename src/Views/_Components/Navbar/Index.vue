<template>
  <nav class="navbar" :class="isOpenMenu ? 'active' : ''">
    <div class="brand">
      <OiIcon :width="39" :height="42" />
      <span>VANTAGENS</span>
    </div>

    <Notifications />
    <a href="/" class="togglr" @click.prevent.stop="isOpenMenu = !isOpenMenu">
      <span v-for="i in 3" :key="i" />
    </a>

    <div class="inner">
      <header>
        <div class="brand mr:20">
          <OiIcon :width="39" :height="42" />
        </div>
        <div class="center">
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
          <loadImage :container="true" :source="`icons/${item.icon}.svg`" :alt="item.text" />
          <span>{{ item.text }}</span>
        </router-link>
      </section>
    </div>
  </nav>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
