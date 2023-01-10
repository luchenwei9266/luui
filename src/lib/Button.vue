<template>
  <button class="luui-button" :class="classes" :disabled="disabled" @click="$emit('click', $event)">
    <span v-if="loading" class="luui-loadingIndicator"></span>
    <span class="luui-button-text"><slot /></span>
    
  </button>
</template>
<script lang="ts" setup="props">
import { computed } from "vue";
const props = defineProps<{
  theme?: 'button' | 'text' | 'link';
  size?: 'normal' | 'big' | 'small';
  level?: 'normal' | 'main' | 'danger';
  disabled?: boolean;
  loading?: boolean;
}>();
const { theme, size, level } = props;

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
const classes = computed(() => {
  return {
    [`luui-theme-${theme}`]: theme,
    [`luui-size-${size}`]: size,
    [`luui-level-${level}`]: level,
  };
});
</script>
<style lang="scss">
.luui-button {
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 5px;
 background: #183153;
 font-family: "Montserrat", sans-serif;
 box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
 overflow: hidden;
 border: none;

  &.luui-size-big {
    .luui-button-text {
      font-size: 16px !important;
      padding: 12 20px !important;
    }

  }

  &.luui-size-small {
    .luui-button-text {
      font-size: 12px !important;
      padding: 8 16px !important;
    }
  }
}

.luui-button:after {
 content: " ";
 width: 0%;
 height: 100%;
 background: #FFD401;
 color: #183153;
 position: absolute;
 transition: all 0.4s ease-in-out;
 right: 0;
}

.luui-button:hover::after {
 right: auto;
 left: 0;
 width: 100%;
}

.luui-button-text{
 text-align: center;
 text-decoration: none;
 width: 100%;
 padding: 10px 18px;
 color: #fff;
 font-size: 14px;
 font-weight: 700;
 letter-spacing: 0.1em;
 z-index: 20;
 transition: all 0.3s ease-in-out;
 color: #fff;
}

.luui-button-text:hover {
 color: #183153;
 animation: scaleUp 0.3s ease-in-out;
}

@keyframes scaleUp {
 0% {
  transform: scale(1);
 }

 50% {
  transform: scale(0.95);
 }

 100% {
  transform: scale(1);
 }
}

@keyframes luui-spin {
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg)
  }
}
</style>
