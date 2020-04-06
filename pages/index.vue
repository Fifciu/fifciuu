<template>
  <div class="container">
    <div class="intro flex-center fullheight">
      <div>
        <h2 class="subheader-1">
          Hi! I am
        </h2>
        <h1 class="title">
          Fifciuu
        </h1>
        <h3 class="subheader-2">
          I am website's programmist, Vue Storefront expert.
        </h3>
        <div class="skills">
          <div
            class="skill-wrapper"
            v-for="skill in skills"
            :key="skill.src"
          >
            <img
              :src="skill.src"
              :alt="skill.title"
              class="skill"
            />
          </div>
        </div>
        <h4 class="subheader-4">
          You can contact with me via email: <a href="mailto: filip.jdrasik@gmail.com">filip.jdrasik@gmail.com</a>
        </h4>
      </div>
    </div>
<!--    <div class="projects fullheight">-->
<!--      aaa-->
<!--    </div>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      skills: [
        {
          src: require('~/assets/vue.svg'),
          title: 'Vue'
        },
        {
          src: require('~/assets/nuxt.svg'),
          title: 'Nuxt'
        },
        {
          src: require('~/assets/vsf.png'),
          title: 'Vue Storefront'
        },
        {
          src: require('~/assets/node.svg'),
          title: 'Node'
        },
        {
          src: require('~/assets/typescript.svg'),
          title: 'Typescript'
        },
        {
          src: require('~/assets/varnish.svg'),
          title: 'Varnish'
        },
        {
          src: require('~/assets/redis.svg'),
          title: 'Redis'
        }
      ]
    }
  }
})
</script>

<style>

  .fullheight {
    min-height: 100vh;
  }

  /*.intro {*/
  /*}*/

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
  padding: 0 15px;
}

.title {
  display: block;
  font-weight: 700;
  font-size: 70px;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 0;
}

.subheader-1 {
   font-weight: 300;
   font-size: 34px;
   color: #526488;
   word-spacing: 5px;
   margin-bottom: -15px;
 }

.subheader-2 {
  font-weight: 300;
  font-size: 26px;
  color: #526488;
  word-spacing: 5px;
  margin-top: -15px;
  margin-bottom:  .5em;
}

.subheader-4 {
  font-weight: 300;
  font-size: 16px;
  color: #526488;
  margin-top: 15px;
  margin-bottom:  .5em;
}

  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .skill {
    height: 50px;
    padding: 3px;
  }

@media screen and (min-width: 980px) {
  .title {
    font-size: 100px;
  }
  .subheader-1 {
    font-size: 42px;
  }
  .subheader-2 {
    font-size: 42px;
  }
  .skills {
    flex-wrap: nowrap;
  }
  .skill {
    height: 90px;
    padding: 0 10px;
  }
  .subheader-4 {
    font-size: 25px;
  }
}

</style>
