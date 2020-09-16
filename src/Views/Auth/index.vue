<template>
  <container view="auth">
    <HeadersAuth />

    <div class="partners">
      <img src="@/assets/images/simbolo-marisa.svg" alt="Marisa" />
      <img src="@/assets/images/burger-king.svg" alt="BK" />
      <img src="@/assets/images/tok-e-stock.svg" alt="Tok&amp;Stock" />
      <img src="@/assets/images/compra-certa.svg" alt="Compra Certa" />
      <img src="@/assets/images/netshoes.svg" alt="Netshoes" />
    </div>

    <FormulateForm @submit="submitMsisdn" v-if="msisdnForm">
      <h1 class="auth-title mb:55">
        Migre para Oi Controle e tenha
        <br />acesso a descontos exclusivos.
      </h1>

      <FormulateInput
        class="group"
        type="tel"
				label="Número Oi"
        name="msisdn"
        placeholder="(ddd) + número Oi"
        v-model="form.msisdn"
        validation="bail|required|msisdn|min:15|max:15"
        :validation-rules="{
            msisdn: ({value}) => this.form.msisdn = Masks.msisdn(value),
        }"
        :validation-messages="{
            required: 'Campo obrigatório',
            msisdn: 'Preencha o campo corretamente',
            min: 'Preencha o campo corretamente',
            max: 'Preencha o campo corretamente'
        }"
        error-behavior="submit"
      />

      <btn
        type="submit"
        class="button:orange text:yellow mt:15"
        :class="this.loading ? 'disabled' :''"
        text="CONTINUAR"
        :state="this.loading"
      />
    </FormulateForm>

    <FormulateForm @submit="submitPin" v-if="pinForm">
      <h1 class="auth-title mb:55">
        Aproveite seus
        <br />descontos exclusivos.
      </h1>
      <FormulateInput
        class="group"
        type="tel"
        name="pin"
        placeholder="* * * *"
        v-model="form.pin"
        label="Insira o código que enviamos para você"
        validation="bail|required|pin|min:4,length|max:4,length"
        :validation-rules="{
					pin: ({value}) => this.form.pin = Masks.pin(value),
				}"
        :validation-messages="{
            required: 'Campo obrigatório',
						pin: 'Preencha o campo corretamente',
						min: 'Preencha o campo corretamente',
						max: 'Preencha o campo corretamente'
				}"
        error-behavior="submit"
      />

      <btn
        type="submit"
        class="button:orange text:yellow mt:15"
        :class="this.loading ? 'disabled' :''"
        text="CONTINUAR"
        :state="this.loading"
      />

      <a href="/auth" @click.prevent.stop="resendPin()" class="button:orange:outline font:xs mt:15">
        <v-icon name="refresh-cw" width="15px" height="15px" class="mr:5"></v-icon>
        <strong class="font:900 mr:5">Não recebeu?</strong> Enviar novo código
      </a>
      <a
        href="/auth"
        @click.prevent.stop="changeMsisdn()"
        class="button:orange:outline font:xs mt:15"
      >Trocar número</a>
    </FormulateForm>
  </container>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
