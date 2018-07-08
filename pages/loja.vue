<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <v-card class="card">
        <v-card-media
          src="https://i1.wp.com/dicanordeste.com.br/wp-content/uploads/2016/01/01-1.jpg"
          height="300px"
        >
          <v-layout
            column
            fill-height
          >
            <v-card-title>
              <v-btn dark icon>
                <v-icon>chevron_left</v-icon>
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-card-title>

            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">Loja da Dona Maria</div>
            </v-card-title>
          </v-layout>
        </v-card-media>

        <v-list two-line>
          <v-list-tile @click="">
            <v-list-tile-action></v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Comércio de moda feminina e infantil</v-list-tile-title>
              <v-list-tile-sub-title>Famosa por seu preço justo e bom atendimento</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo"></v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>(81) 0000-0000</v-list-tile-title>
              <v-list-tile-sub-title>Telefone</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action></v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>(81) 00000-0000</v-list-tile-title>
              <v-list-tile-sub-title>Celular</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>e-mail@exemplo.com</v-list-tile-title>
              <v-list-tile-sub-title>Contato profissional</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">location_on</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Bloco 13, Rua Vermelha</v-list-tile-title>
              <v-list-tile-sub-title>Feira da Sulanca</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
}
</style>
