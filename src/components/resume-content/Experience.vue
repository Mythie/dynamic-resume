<template>
  <div class="experience">
    <h2>
      My Experience
    </h2>
    <hr>
    <div class="page-breakable" />
    <ExperienceItem
      v-for="(item, index) in config.experience.list"
      :key="index"
      :item="item"
      class="page-breakable"
    />
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

<style lang="scss" scoped>

</style>
