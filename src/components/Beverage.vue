<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Creamer :name="creamer" v-if="creamer !== 'None'"/>
      </template>
      <template v-slot:mid>
        <Syrup :name="syrup" v-if="syrup !== 'None'"/>
      </template>
      <template v-slot:bottom>
        <Base :name="baseBeverage"/>
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

type Props = {
  isIced: boolean;
  creamer: string;
  syrup: string;
  baseBeverage: string;
};

defineProps<Props>();
</script>



<!-- Look over this page for not animating on none selection
  https://vuejs.org/guide/essentials/conditional.html -->