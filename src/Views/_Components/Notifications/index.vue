<template>
  <div class="notifications" :class="isOpen ? 'active' : ''">
    <div class="backdrop" v-if="isOpen" @click="isOpen = !isOpen"></div>
    <a href="/notifications" @click.prevent.stop="isOpen = !isOpen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.381"
        height="23.978"
        viewBox="0 0 20.381 23.978"
      >
        <path
          class="a"
          d="M13.191,25.978a2.4,2.4,0,0,0,2.4-2.4h-4.8A2.4,2.4,0,0,0,13.191,25.978Zm7.793-7.193V12.191a7.715,7.715,0,0,0-5.994-7.553V3.8a1.8,1.8,0,1,0-3.6,0v.839A7.715,7.715,0,0,0,5.4,12.191v6.594L3,21.182v1.2H23.381v-1.2Zm-2.4,1.2H7.8V12.191a5.395,5.395,0,0,1,10.79,0Z"
          transform="translate(-3 -2)"
        />
      </svg>
      <span class="badge">10</span>
    </a>

    <div class="inner">
      <a href="/close-notifications" @click.prevent.stop="isOpen = !isOpen" class="close" ></a>
      <h4>Notificações</h4>

      <ul>
        <li class="not-read">Começou a Back Friday 70%OFF.</li>
        <li class="not-read">Aproveite e faça uma Recarga Acumulada.</li>
        <li>Conheça a Gift Card Store, a sua loja de benefícios resgatáveis.</li>
      </ul>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
