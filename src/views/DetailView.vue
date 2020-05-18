<template>
  <main>
    <div class="wrapper">
      <div class="details-content">
        <button @click="back" class="button" type="button">
          <i class="back"></i>
          <span>Back</span>
        </button>
        <img :alt="country.name" :src="country.flag" class="country-flag">
        <article class="country-info">
          <h1>{{ country.name }}</h1>
          <ul>
            <li>
              <span>Native name:</span>
              <span>{{country.nativeName}}</span>
            </li>
            <li>
              <span>Population:</span>
              <span>{{ country.population.toLocaleString() }}</span>
            </li>
            <li>
              <span>Region:</span>
              <span>{{country.region}}</span>
            </li>
            <li>
              <span>Sub Region:</span>
              <span>{{country.subregion}}</span>
            </li>
            <li>
              <span>Capital:</span>
              <span>{{ country.capital }}</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>Top Level Domain:</span>
              <span>{{ topLevelDomain }}</span>
            </li>
            <li>
              <span>Currencies:</span>
              <span>{{currencies}}</span>
            </li>
            <li>
              <span>Languages:</span>
              <span>{{ languages }}</span>
            </li>
          </ul>
          <h2>Border Countries</h2>
          <div class="borders-countries">
            <button :key="border" class="button" v-for="border in borders">{{ border }}</button>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "DetailView",
    props: ['code'],
    data() {
      return {}
    },
    methods: {
      back() {
        this.$router.push({name: 'home'})
      }
    },
    computed: {
      topLevelDomain() {
        return this.country.topLevelDomain.join(', ')
      },
      currencies() {
        return this.country.currencies
          .map(function (el) {
            return el.name
          }).join(', ')
      },
      languages() {
        return this.country.languages
          .map(function (el) {
            return el.name
          }).join(', ')
      },
      borders() {
        return this.country.borders
      },
      ...mapState({
        country: state => state.country
      })
    }
  }
</script>

<style lang="scss" scoped>
  .details-content {
    padding-top: 1rem;
    font-size: 16px;
    
    .button {
      background-color: var(--modeElements);
      color: var(--textColor);
      box-shadow: var(--inputBoxShadow);
      font-family: 'Nunito Sans', sans-serif;
      font-size: 16px;
      border: none;
      outline: none;
      border-radius: 3px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      padding: .375rem 2rem;
      
      i.back {
        background: var(--backIcoon) no-repeat;
        width: 10px;
        height: 10px;
        margin-right: .5rem;
      }
    }
    
    img.country-flag {
      width: 100%;
      margin-top: 2rem;
    }
    
    .country-info {
      ul {
        list-style: none;
        padding: 0;
        margin: 0 0 2rem;
        
        li {
          margin-bottom: 1rem;
        }
        
        li span:first-of-type {
          font-weight: 600;
          margin-right: .3rem;
        }
      }
      
      .borders-countries {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
      }
    }
  }

</style>