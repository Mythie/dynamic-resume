<template>
  <div class="references">
    <h2>My References</h2>
    <hr>
    <div class="page-breakable" />

    <div
      v-for="(items, i) in rows"
      :key="i"
      class="row page-breakable"
    >
      <ReferenceItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        class="item"
      />
    </div>
  </div>
</template>

<script>
import { chunk } from 'lodash';

import config from '../../../config';
import ReferenceItem from '@/components/resume-content/ReferenceItem.vue';

export default {
  components: {
    ReferenceItem,
  },
  data() {
    return {
      config,
    };
  },
  computed: {
    rows() {
      return chunk(this.config.references.list, 2);
    },
  },
};
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }

  .item {
    width: 50%;
    padding: 15px;
  }
</style>
