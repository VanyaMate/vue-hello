<script setup lang="ts">
import { computed, ref } from 'vue';


const steps            = ref([
  {
    step       : '1',
    title      : 'Основы',
    description: 'Основы - текст 1',
  },
  {
    step       : '2',
    title      : 'Компоненты',
    description: 'Компоненты - текст 2',
  },
  {
    step       : '3',
    title      : 'Роутер',
    description: 'Роутер - текст 3',
  },
  {
    step       : '4',
    title      : 'Vuex',
    description: 'Vuex - текст 4',
  },
  {
    step       : '5',
    title      : 'Composition 1',
    description: 'Composition - текст 5',
  },
  {
    step       : '6',
    title      : 'Composition 2',
    description: 'Composition - текст 6',
  },
  {
    step       : '7',
    title      : 'Composition 3',
    description: 'Composition - текст 7',
  },
  {
    step       : '8',
    title      : 'Composition 4',
    description: 'Composition - текст 8',
  },
]);
const activeStep       = ref(0);
const finished         = ref(false);
const isFirstStep      = computed(() => {
  return activeStep.value === 0;
});
const isLastStep       = computed(() => {
  return activeStep.value === steps.value.length - 1;
});
const currentStep      = computed(() => {
  return steps.value[activeStep.value];
});
const nextStep         = function () {
  if (activeStep.value < steps.value.length) {
    activeStep.value += 1;
  }
};
const previousStep     = function () {
  if (activeStep.value !== 0) {
    activeStep.value -= 1;
  }
};
const setStep          = function (step: number) {
  if (step >= 0 && steps.value.length >= step) {
    activeStep.value = step;
  }
};
const finish           = function () {
  finished.value = true;
};
const start            = function () {
  activeStep.value = 0;
  finished.value   = false;
};
const getStylesForStep = function (step: number) {
  if (step <= activeStep.value) {
    return {
      background: 'darkgreen',
      color     : step === activeStep.value ? 'yellow' : 'black',
    };
  } else {
    return {
      background: 'transparent',
      color     : 'black',
    };
  }
};

</script>

<template>
  <h2>План изучения</h2>
  <p>{{ currentStep.description }}</p>
  <button
      v-for="(step, index) in steps"
      :key="step.id"
      @click="setStep(index)"
  >
    <span :style="getStylesForStep(index)">[{{ step.step }}]</span>:
    <span>{{ step.title }}</span>
  </button>
  <hr/>
  <template v-if="!finished">
    <button :disabled="isFirstStep" @click="previousStep">Назад</button>
    <button v-if="!isLastStep" @click="nextStep">Вперед</button>
    <button v-else @click="finish">Закончить</button>
  </template>
  <button v-else @click="start">Начать заново</button>
</template>