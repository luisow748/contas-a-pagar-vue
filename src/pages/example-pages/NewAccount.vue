<template>
  <div class="wrapper landing-page">
    <div class="page-header page-header-small">
      <parallax class="page-header-image"
                style="background-image: url('img/bg26.jpg')">
      </parallax>
      <div class="content-center">
        <h1 class="title">Contas a pagar</h1>
        <div class="text-center">
          <a href="#pablo" class="btn btn-primary btn-icon  btn-round">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="#pablo" class="btn btn-primary btn-icon btn-round">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#pablo" class="btn btn-primary btn-icon btn-round">
            <i class="fab fa-google-plus"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Nova conta</h2>
        <p class="description">Insira abaixo os campos da nova conta.</p>

        <form @submit.prevent="submitForm">
        <div class="row">
          <div class="col-sm-6 col-lg-4">

            <fg-input
                class="input-lg"
                placeholder="Descrição"
                v-model="form.name"
                addon-left-icon="now-ui-icons ">
            </fg-input>
          </div>
          <div class="col-sm-6 col-lg-3">
            <fg-input
                class="input-lg"
                placeholder="Valor total"
                v-model="form.totalValue"
                addon-left-icon="now-ui-icons ">
            </fg-input>
          </div>
          <div class="col-sm-6 col-lg-3">
            <fg-input
                class="input-lg"
                placeholder="Parcelas"
                v-model="form.installmentQty"
                addon-left-icon="now-ui-icons">
            </fg-input>
          </div>
        </div>
        <div class="textarea-container">
                            <textarea class="form-control"
                                      name="name" rows="4" cols="80"
                                      v-model="form.installmentValue"
                                      placeholder="Observações"></textarea>
        </div>

        <div class="col-sm-6 col-lg-3">
          <div class="send-button">
            <button type="submit">
            <n-button type="submit" round block size="lg" @click>Send Message</n-button></button>
          </div>
        </div>
    </form>

      </div>

      <div v-for="reg in registers" v-bind:key="reg.id">
        {{reg.id}} - {{reg.name}} - Account ID {{reg.totalValue}}

      </div>

    </div>
  </div>

</template>
<script>
import {Card, Button, FormGroupInput, Tabs, TabPane} from '@/components';
import AccountApi from '@/api/AccountApi'
import RegisterApi from '@/api/RegisterApi'

export default {

  name: 'newaccount',
  bodyClass: 'landing-page',
  components: {
    Card,
    Tabs,
    TabPane,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        name: '',
        totalValue: '',
        installmentQty: null,
        installmentValue: ''
      },
      accounts: [],
      registers: [],
    }
  },
  mounted() {
    AccountApi.getAccounts().then(
        (acc) => {
          this.accounts = acc
        }
    )
  },
  methods: {
    submitForm(){
      console.log(this.form)
      console.log(this.form.totalValue)
      AccountApi.saveRegister(this.form).then(
          (acc) => {
            this.registers = acc
          }
      )
    }

  }
}
</script>
<style>
</style>
