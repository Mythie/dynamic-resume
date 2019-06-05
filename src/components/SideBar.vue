<template>
  <div class="side-bar">
    <div />
    <div>
      <ApplicantName class="spacer" />
      <ApplicantContact class="spacer" />
    </div>
    <div class="tiny">
      Made with VueJS <br>
      <a href="http://github.com/Mythie/dynamic-resume">Github</a>
    </div>
  </div>
</template>

<script>
import ApplicantName from '@/components/side-bar/ApplicantName.vue';
import ApplicantContact from '@/components/side-bar/ApplicantContact.vue';

export default {
  components: {
    ApplicantName,
    ApplicantContact,
  },
};
</script>

<style lang="scss" scoped>
  @import "../../config.scss";

  .side-bar {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background: $sidebarColor;
    color: $sidebarTextColor;

    > div {
      position: relative;
      width: 100%;
    }

    a, a:active, a:visited {
      color: mix(#FFFFFF, $sidebarTextColor, 88%) !important;
    }

    .tiny {
      font-size: 0.6rem;
    }

    .spacer {
      padding-bottom: 20px;
    }
  }
</style>
