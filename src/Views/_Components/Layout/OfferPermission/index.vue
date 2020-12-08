<template>
  <div class="_permission">
    <div class="_permission:content" v-if="cluster === '2' || cluster === '3'">
      <div class="_permission:inner" :class="cluster === '2' ? 'red' : 'orange'">
        <slot v-if="cluster === '2'">
          <p>Faça uma</p>
          <p>RECARGA</p>
          <p><small>e</small> LIBERE</p>
        </slot>
        <slot v-else-if="cluster === '3'">
          <p>Exclusivo</p>
          <p>OI CONTROLE</p>
          <p>Mude já</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
