import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countries: [],
      chosenCountry: ""
    },



    methods: {
      fetchInfo: function () {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then((data) => {
          this.countries = data;
        });
      }
    },
    computed: {

      totalPopulation: function() {
        var total = 0;
        this.countries.forEach(function(country){
          total += country.population
        })
        return total;
      }


      // filterCountries: function() {
      //   return this.countries.filter(country => country.name === this.chosenCountry );
      // }


    },
    mounted() {
      this.fetchInfo();
    }
  })
});
