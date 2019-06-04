<template>
  <div class="current-role">
    <h2>Current Role</h2>
    <hr>
    <div class="page-breakable" />
    <ExperienceItem :item="config.currentRole" />
  </div>
</template>

<script>
import config from '../../../config';
import ExperienceItem from '@/components/resume-content/ExperienceItem.vue';

export default {
  components: {
    ExperienceItem,
  },
  data() {
    return {
      config,
    };
  },
};
</script>
