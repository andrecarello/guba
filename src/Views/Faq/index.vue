<template>
  <section class="faq">
    <div class="faq:header">
      <OiIcon class="faq:brand" />
      <h1 class="faq:title">
        PERGUNTAS FREQUENTES
        <strong>OI VANTAGENS</strong>
      </h1>
      <a
        href="/offer/goback"
        class="faq:close"
        @click.prevent.stop="$router.go(-1)"
      />
    </div>

    <v-collapse-group :onlyOneActive="true" class="faq:accordion">
      <v-collapse-wrapper class="faq:accordion-wrapper">
        <div class="faq:accordion-content" v-collapse-content>
          <p>
            O Oi Vantagens é um canal de descontos e benefícios para todos os
            clientes Oi Controle e Pré-pago da Oi. Nele são disponibilizadas
            diversas ofertas de lojas parceiras! Aproveite!
          </p>
          <p>
            <strong>Funciona assim:</strong><br />Se a sua última recarga foi
            feita há mais de 30 dias, você pode aproveitar as ofertas já
            liberadas no canal quantas vezes quiser. Para liberar mais ofertas,
            você precisará fazer uma recarga no seu número Oi. <br /><br />Se
            você já fez uma recarga nos últimos 30 dias, você tem direito amais
            ofertas. Para liberar todas elas, deverá fazer uma migração para um
            plano Oi Controle.<br /><br />E se você já possui um plano Oi
            Controle, poderá utilizar todos os descontos do canal, quantas vezes
            quiser.
          </p>
        </div>
        <div class="faq:accordion-header" v-collapse-toggle>
          <h3>Como funciona?</h3>
          <ChevronDownIcon />
        </div>
      </v-collapse-wrapper>
      <v-collapse-wrapper class="faq:accordion-wrapper">
        <div class="faq:accordion-content" v-collapse-content>
          <p>
            Todos os clientes Oi Controle e Pré-pago da Oi têm direito a
            utilizar o serviço.
          </p>
        </div>
        <div class="faq:accordion-header" v-collapse-toggle>
          <h3>Quem tem direito ao Oi Vantagens?</h3>
          <ChevronDownIcon />
        </div>
      </v-collapse-wrapper>
      <v-collapse-wrapper class="faq:accordion-wrapper">
        <div class="faq:accordion-content" v-collapse-content>
          <p>
            Para resgatar as ofertas disponíveis, basta clicar na promoção
            desejada e seguir as instruções para utilizá-la.
          </p>
        </div>
        <div class="faq:accordion-header" v-collapse-toggle>
          <h3>Como faço para resgatar uma oferta?</h3>
          <ChevronDownIcon />
        </div>
      </v-collapse-wrapper>
      <v-collapse-wrapper class="faq:accordion-wrapper">
        <div class="faq:accordion-content" v-collapse-content>
          <p>
            Para resgatar ofertas bloqueadas, você deve fazer uma recarga de
            qualquer valor em seu Oi. Se quiser liberar todas as ofertas do
            canal e aproveitar muito mais, é preciso migrar para um plano Oi
            Controle.
          </p>
        </div>
        <div class="faq:accordion-header" v-collapse-toggle>
          <h3>Como faço para resgatar uma oferta bloqueada?</h3>
          <ChevronDownIcon />
        </div>
      </v-collapse-wrapper>
      <v-collapse-wrapper class="faq:accordion-wrapper">
        <div class="faq:accordion-content" v-collapse-content>
          <p>
            Não há valor mínimo de recarga. Qualquer valor que você recarregar
            irá liberar mais ofertas para você!
          </p>
        </div>
        <div class="faq:accordion-header" v-collapse-toggle>
          <h3>Qual valor preciso recarregar para liberar as ofertas?</h3>
          <ChevronDownIcon />
        </div>
      </v-collapse-wrapper>
      <v-collapse-wrapper class="faq:accordion-wrapper">
        <div class="faq:accordion-content" v-collapse-content>
          <p>
            O tempo que você tem para resgatar as ofertas depende do seu nível.
            Se você não tiver feito nenhuma recarga nos últimos 30 dias, você
            terá menos ofertas disponíveis para resgatar. Se você tiver feito
            uma recarga nos últimos 30 dias, você terá mais ofertas para
            resgatar. Essas ofertas ficarão disponíveis por 30 dias, começando a
            contar pelo dia da sua última recarga, por isso, faça uma recarga
            todo mês e aproveite os descontos quando quiser! E não esqueça: para
            liberar todas as ofertas do canal por tempo indeterminado, você deve
            fazer um plano Oi Controle.
          </p>
        </div>
        <div class="faq:accordion-header" v-collapse-toggle>
          <h3>Quanto tempo tenho para resgatar as ofertas?</h3>
          <ChevronDownIcon />
        </div>
      </v-collapse-wrapper>
      <v-collapse-wrapper class="faq:accordion-wrapper">
        <div class="faq:accordion-content" v-collapse-content>
          <p>
            A data de validade, assim como as regras são específicas para cada
            oferta. Quando a validade de uma oferta expirar, ela sairá
            automaticamente do canal.
          </p>
        </div>
        <div class="faq:accordion-header" v-collapse-toggle>
          <h3>Qual a data de validade das ofertas do canal?</h3>
          <ChevronDownIcon />
        </div>
      </v-collapse-wrapper>
    </v-collapse-group>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
