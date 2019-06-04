<template>
  <div id="app">
    <!-- <div class="test" /> -->
    <div class="side-bar">
      <SideBar :class="['info', { 'with-stripe': config.resume.stripe.enabled }]" />
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
    let breakAt = 1300;
    let potentialBreaks = [];
    document.querySelectorAll('.page-breakable')
      .forEach((elem) => {
        potentialBreaks.push(elem);
      });
    potentialBreaks = potentialBreaks.sort(
      (a, b) => a.getBoundingClientRect().bottom > b.getBoundingClientRect().bottom,
    );

    potentialBreaks.forEach((elem) => {
      const coords = elem.getBoundingClientRect();

      if (coords.bottom > breakAt) {
        elem.classList.add('break-page');
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

  .stripe {
    min-width: 10%;
    background: get('resume.stripe.color');
    min-height: 100vh;
  }
}

.resume-content {
  margin-left: 22%;
  width: 78%;
  padding: 40px;

  @media print {
    margin-left: 28%;
    width: 72%;
    padding: 10pt;
  }
}
</style>
