<template>
  <div class="side-bar">
    <ApplicantName />
    <ApplicantContact />
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
    justify-content: center;
    align-items: center;
    background: $sidebarColor;
    color: $sidebarTextColor;

    > div {
      position: relative;
      width: 100%;
    }
  }
</style>
