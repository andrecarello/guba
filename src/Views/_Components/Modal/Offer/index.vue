<template>
  <div class="modal:offer">
    <div class="modal:offer-header">
      <ChevronLeftIcon class="modal:offer-close" size="22" />
      <div class="modal:offer-title">Retorna para a oferta</div>
    </div>
    <div class="modal:offer-content">
      <div class="modal:offer-rules">
        <p><strong>Regras</strong></p>
        <p v-text="content.rules" />
      </div>

      <div class="modal:offer-tutorial">
        <p><strong>Tutorial</strong></p>
        <div></div>
        <div></div>

        <div class="modal:offer-info">
          *Para acessar o site do parceiro é necessário estar conectado à
          internet.
        </div>
      </div>
    </div>
    <div class="modal:offer-footer">
      {{ content.discount }}
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
