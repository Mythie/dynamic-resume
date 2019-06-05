<template>
  <div id="app">
    <!-- <div class="test" /> -->
    <div class="side-bar">
      <div class="slide" />
      <SideBar :class="['info', { 'with-stripe': config.resume.stripe.enabled }, 'hide-mobile']" />
      <div
        v-if="config.resume.stripe.enabled"
        class="stripe"
      />
    </div>
    <div class="resume-content">
      <Resume />
    </div>
  </div>
</template>

<script>
import config from '../config';

import SideBar from '@/components/SideBar.vue';
import Resume from '@/components/Resume.vue';

export default {
  name: 'App',
  components: {
    SideBar,
    Resume,
  },
  data() {
    return {
      config,
    };
  },
  mounted() {
    // Okay so we want to try and break on each page programatically, but it's not so easy.

    // I think this is the one chrome uses?
    let breakAt = 1300;
    // For storing the nodelist so we can sort it
    let potentialBreaks = [];

    // Get all the places we can break
    document.querySelectorAll('.page-breakable')
      .forEach((elem) => {
        // Add them to our list
        potentialBreaks.push(elem);
      });

    // Sort based on where each item ends
    potentialBreaks = potentialBreaks.sort(
      (a, b) => a.getBoundingClientRect().bottom > b.getBoundingClientRect().bottom,
    );

    // This seems to fix a timing thing?
    console.log(potentialBreaks);

    // Foreach potential break area
    potentialBreaks.forEach((elem) => {
      // Get its coords
      const coords = elem.getBoundingClientRect();

      // If it would be greater than our page break
      if (coords.bottom > breakAt) {
        // Lets forcefully break there to preserve formatting
        elem.classList.add('break-page');
        // Increase to the next page.
        breakAt *= 2;
      }
    });
  },
};
</script>

<style lang="scss">
@import '../node_modules/normalize.css/normalize.css';
@import '../config.scss';

.break-page {
  @media print {
    page-break-before: always;
    margin-top: 20pt;
  }
}

.test {
  position: absolute;
  top: 1119px;
  left: 0;
  width: 100%;
  height: 1px;
  background: #000;
  z-index: 999;

}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: $textColor;
  // margin-top: 60px;
  font-size: 18px;
}

*, *::before, *::after {
  box-sizing: border-box;
}

hr {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 2px;
  background: $horizontalRuleColor;
  margin-bottom: 17px;
  border: 0;

  @media print {
    height: 1pt;
    margin-bottom: 5pt;
  }
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  margin-bottom: 12px;
}

h2 {
  color: $textColor;
}

p {
  margin: 7px 0;

  @media print {
    margin: 5pt 0;
  }
}

@media print {
  @page {
    height: 1300px;
    padding: 0;
    margin: 0;
  }

  html, body, #app {
    font-size: 10pt !important;
  }
}

.side-bar {
  position: fixed;
  display: flex;
  height: 100vh;
  width: 22%;

  @media print {
    width: 28%;
    maring-top: -20pt;
    height: 100vh;
  }

  .info {
    width: 100%;
    height: 100vh;
    padding: 20px;

    &.with-stripe {
      width: 90%;
    }

    @media print {
      padding: 7pt;
    }
  }

  .hide-mobile {
    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  .stripe {
    min-width: 10%;
    background: $stripeColor;
    min-height: 100vh;
  }
}

.resume-content {
  @media screen and (min-width: 600px) {
    margin-left: 22%;
    width: 78%;

  }
  padding: 40px;

  @media print {
    margin-left: 28%;
    width: 72%;
    padding: 10pt;
  }
}
</style>
