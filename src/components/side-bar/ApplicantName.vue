<template>
  <div class="resume-name">
    <h1>
      {{ config.applicant.name }}

      <small>
        {{ config.applicant.tagline }}
      </small>
    </h1>
  </div>
</template>

<script>
import config from '../../../config';

export default {
  data() {
    return {
      config,
    };
  },
};
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 3.2rem;

    small {
      display: inline-block;
      font-size: 1.2rem;

      @media print {
        margin-top: 10pt;
        font-size: 1rem;
      }
    }
  }
</style>
