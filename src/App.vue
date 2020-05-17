<template>
  <div id="app">
    <Header></Header>
    <section>
      <div class="wrapper">
        <div class="">
          <input type="text">
        </div>
        <div class="">
          <div>
            <span>Filter by region</span>
            <ul>
              <li>Africa</li>
              <li>America</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Oceania</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <main>
      <div class="wrapper">
        <article class="country">
          <img alt="Mexico" class="country-flag" src="https://restcountries.eu/data/mex.svg">
          <div class="country-details">
            <h1 class="country-details-name">México</h1>
            <ul>
              <li>
                <span>Population:</span>
                <span>122273473</span>
              </li>
              <li>
                <span>Region:</span>
                <span>Americas</span>
              </li>
              <li>
                <span>Capital:</span>
                <span>Mexico City</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </main>
  </div>
</template>

<script>
  import Header from "@/components/Header"

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
  
  :root {
    --darkBlue: hsl(209, 23%, 22%);
    --veryDarkBlue: hsl(207, 26%, 17%);
    --veryLightBlue: hsl(200, 15%, 8%);
    --darkGray: hsl(0, 0%, 52%);
    --veryLightGray: hsl(0, 0%, 98%);
    --white: hsl(0, 0%, 100%);
    
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    
  }
  
  #app {
    
    -webkit-font-smoothing: antialiased;
    
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100vh;
    
  }
  
  .wrapper {
    width: 100%;
    min-width: 375px;
    max-width: 1440px;
    border: 1px solid red;
    
    box-sizing: border-box;
    padding: 0 20px;
    
  }
  
  .country img {
    width: 100%;
    
  }
</style>
