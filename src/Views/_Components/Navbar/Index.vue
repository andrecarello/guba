<template>
  <nav class="navbar" :class="isOpenMenu ? 'active' : ''">
    <div class="navbar:brand">
      <OiIcon :width="39" :height="42" />
      <span>VANTAGENS</span>
    </div>

    <Notifications />
    <a
      href="/"
      class="navbar:togglr"
      @click.prevent.stop="isOpenMenu = !isOpenMenu"
    >
      <span v-for="i in 3" :key="i" />
    </a>

    <div class="navbar:inner">
      <header class="navbar:header">
        <div class="navbar:brand mr:20">
          <OiIcon :width="39" :height="42" />
        </div>
        <div class="navbar:center">
          <Msisdn />
          <Balance />
        </div>
        <a
          href="/"
          class="navbar:togglr navbar:inner:togglr"
          @click.prevent.stop="isOpenMenu = !isOpenMenu"
        >
          <span v-for="i in 3" :key="i" />
        </a>
      </header>

      <section class="navbar:section">
        <router-link
          v-for="(item, index) in items"
          :key="index"
          :to="item.url"
          class="navbar:link"
          @click.native="isOpenMenu = !isOpenMenu"
        >
          <loadImage
            :container="true"
            :source="`icons/${item.icon}.svg`"
            :alt="item.text"
          />
          <span>{{ item.text }}</span>
        </router-link>
        <a href="/logout" @click.prevent.stop="logout" class="navbar:link">
          <loadImage :container="true" source="icons/logout.svg" alt="Sair" />
          <span>Sair</span>
        </a>
      </section>
    </div>
    <div class="navbar:logout" v-if="logoutLoading">
      <p class="navbar:logout-text">AGUARDE</p>
      <Loading background="rgba(0,0,0,.36)" />
    </div>
  </nav>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
