<template>

  <div class="wrapper landing-page">
    <div class="page-header page-header-small">
      <!--      <parallax class="page-header-image">-->
      <!--&lt;!&ndash;                style="background-image: url('img/bg26.jpg')"&ndash;&gt;-->
      <!--      -->
      <!--      </parallax>-->
      <div class="content-center">
        <h1 class="title">Minhas contas</h1>
        <!--        <div class="text-center">-->
        <!--          <a href="#pablo" class="btn btn-primary btn-icon  btn-round">-->
        <!--            <i class="fab fa-facebook-square"></i>-->
        <!--          </a>-->
        <!--          <a href="#pablo" class="btn btn-primary btn-icon btn-round">-->
        <!--            <i class="fab fa-twitter"></i>-->
        <!--          </a>-->
        <!--          <a href="#pablo" class="btn btn-primary btn-icon btn-round">-->
        <!--            <i class="fab fa-google-plus"></i>-->
        <!--          </a>-->
        <!--        </div>-->
      </div>
    </div>
    <div class="section section-contact-us text-center">
      <div class="container">
        <h3 class="title">Registros:</h3>

<!--        <div v-for="acc in accounts" v-bind:key="acc.id">-->
<!--          {{ acc.id }} - {{ acc.name }} - Account ID: {{ acc.totalValue }}-->
<!--          Conta criada: Nº {{ acc.id }} - Nome: {{ acc.name }}-->
<!--        </div>-->

        <table class="table table-striped border">
          <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Valor total</th>
            <th scope="col">Vencimento</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="acc in accounts" :key="acc.id">
            <th scope="row">{{acc.id}}</th>
            <td>{{acc.name}}</td>
            <td>{{acc.totalValue}}</td>
            <td>{{acc.expirationDate}}</td>
          </tr>

          </tbody>
        </table>


      </div>

    </div>
  </div>

</template>
<script>
import {Button, Card, FormGroupInput, TabPane, Tabs} from '@/components';
import AccountApi from '@/api/AccountApi'
import {Option, Select} from 'element-ui';

export default {

  name: 'newaccount',
  bodyClass: 'landing-page',
  components: {
    Card,
    Tabs,
    TabPane,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [Select.name]: Select,
    [Option.name]: Option,
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
      register: {},
      fields: ['ID', 'Nome', 'Valor total', 'Vencimento'],
    }
  },
  mounted() {
    AccountApi.getAccounts().then(
        (acc) => {
          this.accounts = acc
        }
    )
  },
  methods: {}
}
</script>
<style>
</style>
