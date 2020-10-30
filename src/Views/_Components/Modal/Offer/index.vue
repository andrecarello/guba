<template>
  <div class="modal:offer">
    <div class="modal:offer-header" @click.prevent.stop="$parent.isOpenDetailModal = !$parent.isOpenDetailModal">
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
        <div
          class="modal:offer-tutorial-content"
          v-if="content.has_link && content.has_code"
        >
          <div>
            <p>
              Clique abaixo no botão<br />
              <strong>Avançar</strong><br />
              para acessar o site.
            </p>
          </div>
          <ChevronRightIcon class="modal:offer-arrow" size="30" fill="#ffffff" />
          <div>
            Insira o seu<br />
            <strong>CÓDIGO DE DESCONTO</strong><br />
            no carrinho de compras.
          </div>
        </div>
        <!-- modal:offer-tutorial-content -->

        <div
          class="modal:offer-tutorial-content"
          v-if="content.has_link && !content.has_code"
        >
          <div>
            <loadImage source="icons/tap.svg" alt="Clique abaixo" />
            <p>
              Clique abaixo no botão<br />
              <strong>IR PARA A OFERTA</strong><br />
              para acessar o site.
            </p>
          </div>
          <ChevronRightIcon class="modal:offer-arrow" size="30" />
          <div>
            <loadImage
              source="icons/shopping-cart.svg"
              alt="Seu desconto é aplicado"
            />
            <p>
              Seu <strong>DESCONTO</strong><br />
              é aplicado<br />
              automaticamente.
            </p>
          </div>
        </div>
        <!-- modal:offer-tutorial-content -->

        <div
          class="modal:offer-tutorial-content"
          v-if="!content.has_link && content.has_code"
        >
          <div>
            <p>Clique abaixo no botão<br /><strong>VER CUPOM</strong></p>
          </div>
          <ChevronRightIcon class="modal:offer-arrow" size="30" />
          <div>
            Apresente na <br /><strong>RECEPÇÃO</strong><br />do estabelecimento
          </div>
        </div>
        <!-- modal:offer-tutorial-content -->

        <div class="modal:offer-info">
          *Para acessar o site do parceiro é necessário estar conectado à
          internet.
        </div>
      </div>
    </div>
    <div class="modal:offer-footer">
      <div class="modal:offer-discount" v-text="content.discount" />

      <a href="/offer/redeem" class="modal:offer-redeem">Resgatar</a>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
