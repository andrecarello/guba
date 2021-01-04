<template>
  <section class="contact">
    <div class="contact:header">
      <OiIcon class="contact:brand" />
      <h1 class="contact:title">
        FALE CONOSCO
        <strong>OI VANTAGENS</strong>
      </h1>
      <a
        v-if="!sended"
        href="/offer/goback"
        class="contact:close"
        @click.prevent.stop="$router.go(-1)"
      />
    </div>

    <FormulateForm @submit="submit" name="formulate-contact" v-if="!sended">
      <FormulateInput ref="oston" type="hidden" name="oston" value="" />

      <FormulateInput
        class="contact:group"
        element-class="contact:control"
        type="text"
        label="Nome"
        name="name"
        v-model="form.name"
        validation="bail|required"
        :validation-messages="{
          required: 'Campo obrigatório',
        }"
        error-behavior="blur"
      />

      <FormulateInput
        class="contact:group"
        element-class="contact:control"
        type="tel"
        label="Número Oi"
        name="msisdn"
        v-model="form.msisdn"
        validation="bail|required|msisdn|min:15|max:15"
        :validation-rules="{
          msisdn: ({ value }) => (this.form.msisdn = Masks.msisdn(value)),
        }"
        :validation-messages="{
          required: 'Campo obrigatório',
          msisdn: 'Preencha o campo corretamente',
          min: 'Preencha o campo corretamente',
          max: 'Preencha o campo corretamente',
        }"
        error-behavior="blur"
      />

      <FormulateInput
        class="contact:group"
        element-class="contact:control"
        type="text"
        label="Email"
        name="email"
        v-model="form.email"
        validation="bail|required|email"
        :validation-messages="{
          required: 'Campo obrigatório',
          email: 'Informe um email válido',
        }"
        error-behavior="blur"
      />

      <FormulateInput
        class="contact:group"
        element-class="contact:control"
        type="textarea"
        name="message"
        v-model="form.message"
        label="Mensagem"
        validation="required|max:300,length"
        :validation-messages="{
          required: 'Campo obrigatório',
          max: 'Atingido o número máximo de caracteres',
        }"
        :help="`
          ${
            300 - form.message.length >= 0
              ? form.message.length + ' de 300.'
              : 'Número máximo de caracteres foi atingido.'
          }
        `"
        error-behavior="blur"
      />

      <btn
        type="submit"
        class="contact:button"
        :class="this.loading ? 'contact:button:disabled' : ''"
        text="CONTINUAR"
        loadingText="AGUARDE ..."
        :state="this.loading"
      />
    </FormulateForm>

    <div class="contact:sended" v-else>
      <div class="contact:container">
        <p class="contact:text">Seu contato foi enviado com sucesso.</p>
        <p class="contact:text"><router-link to="/" class="contact:button">Voltar</router-link></p>
      </div>
    </div>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
