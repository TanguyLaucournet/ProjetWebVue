<template>
  <div id="app" class="container">
    <h1 class="mb-4">Quiz Bitcoin</h1>
    <b-alert v-if="fin" show>Votre score est : {{ score }} / {{ questions.length }}</b-alert>
    <b-card header="questions[index].question"
            header-tag="header">
      <b-list-group>
        <b-list-group-item 
          button 
          v-for="(item, index) in questions[index].answers" 
          :key="item.id"
          @click="action(index)"
          :variant="variants[index]">
          {{ item }}
        </b-list-group-item>
      </b-list-group>
      <b-button v-if="fin" @click="recommencer" class="mt-4">Recommencer !</b-button>
      <b-button v-if="voirReponse && !fin" @click="continuer" class="mt-4">Continuer !</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      fin: false,
      index: 0,
      score: 0,
      variants: [...Array(4)],
      voirReponse: false,
      questions: [
        {
          question: "En quelle année a été créé Bitcoin",
          answers: [
            '2008',
            '2009',
            '2010',
            '2011'
          ],
          ok: 1
        },
        {
          question: "Quelle est la quantité max de Bitcoin ?",
          answers: [
            'Elle est illimitée',
            '21 millions',
            '42 millions',
            '15 millions'
          ],
          ok: 1
        },
        {
          question: "Quelle est la durée moyenne de minage d'un bloc sur la blockchain Bitcoin ?",
          answers: [
            '15 secondes',
            '1 minute',
            '10 minute',
            '1 heure'
          ],
          ok: 2
        },
        {
          question: "Qui est le créateur de Bitcoin ?",
          answers: [
            'Brendan Eich',
            'Satoshi Nakamoto',
            'Craig Wright',
            'David Hyatt'
          ],
          ok: 1
        },
      ]
    }
  },
  methods: {
    action: function(index) {
      // Test bonne réponse
      if(index == this.questions[this.index].ok) {
        this.score++;
      } else {
        this.variants[index] = 'danger';
      }
      this.voirReponse = true;
      this.variants[this.questions[this.index].ok] = 'success';
      if(this.index == this.questions.length - 1) {
        this.fin = true;
      }
    },
    recommencer: function() {
      this.voirReponse = this.fin = this.index = this.score = 0;
      this.variants = [...Array(4)];
    },
    continuer: function() {
      this.voirReponse = false;
      this.variants = [...Array(4)];
      this.index++;  
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
