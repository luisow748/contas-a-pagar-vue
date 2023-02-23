<template>
    <footer class="footer"
            :class="{[`footer-${type}`]: type}"
            :data-background-color="backgroundColor">
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <a href="/#/index">
                            Contas a pagar
                        </a>
                    </li>
                    <li>
                        <a href="/#/about">
                            Sobre
                        </a>
                    </li>
<!--                    <li>-->
<!--                        <a href="https:///blog.creative-tim.com">-->
<!--                            Blog-->
<!--                        </a>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <a href="https://www.creative-tim.com/license">-->
<!--                            License-->
<!--                        </a>-->
<!--                    </li>-->
                </ul>
            </nav>
            <div class="copyright">
                &copy; {{year}}, Designed by
                <a href="#" target="_blank">748</a>. Coded by
                <a href="@" target="_blank">Luís Porto</a>.
            </div>
        </div>
    </footer>
</template>
<script>
  export default {
    props: {
      backgroundColor: String,
      type: String
    },
    data(){
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>
<style>
</style>
