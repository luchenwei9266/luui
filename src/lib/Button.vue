<template>
  <button class="luui-button" :class="classes" :disabled="disabled" @click="$emit('click', $event)">
    <span v-if="loading" class="luui-loadingIndicator"></span>
    <slot />    
  </button>
</template>
<script lang="ts" setup="props">
import { computed } from "vue";
const props = defineProps<{
  size?: 'normal' | 'big' | 'small';
  type?: 'normal' | 'main' | 'danger' | 'waring' | 'success';
  disabled?: boolean;
  loading?: boolean;
}>();
const { size, type } = props;

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
const classes = computed(() => {
  return {
    [`luui-size-${size}`]: size,
    [`luui-type-${type}`]: type,
  };
});
</script>
<style lang="scss">
$bg-main-btn: #409EFF;
$bg-main-btn-shoadow: #3293EF;
$bg-danger-btn: #e74c3c;
$bg-danger-btn-shadow: #c0392b;
$bg-waring-btn: #E6A23C;
$bg-waring-btn-shadow: #E1B46C;
$bg-success-btn: #67C23A;
$bg-success-btn-shadow: #55B23E;
$other-type-text-color: #fff;


.luui-button {
  --bg: #fff;
  --text-color: #111;
  display: inline-block;
  position: relative;
  border: none;
  background: var(--bg);
  color: var(--text-color);
  padding: 1em;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  transition: 0.2s;
  border-radius: 5px;
  opacity: 0.8;
  letter-spacing: 1px;
  box-shadow: #e3e3e3 0px 7px 2px, #000 0px 8px 5px;
  cursor: pointer;
  
  // size
  &.luui-size-big {
    font-size: 16px;
  }

  &.luui-size-small {
    font-size: 12px;
  }

  &.luui-type-main {
    background: $bg-main-btn;
    box-shadow: $bg-main-btn-shoadow 0px 7px 2px, #000 0px 8px 5px;
    color:$other-type-text-color;
  }

  // type
  &.luui-type-main:enabled:active {
    box-shadow: $bg-main-btn-shoadow 0px 3px 2px,#000 0px 3px 5px;
  }

  &.luui-type-danger {
    background: $bg-danger-btn;
    box-shadow: $bg-danger-btn-shadow 0px 7px 2px, #000 0px 8px 5px;
    color:$other-type-text-color;
  }

  &.luui-type-danger:active {
    box-shadow: $bg-danger-btn-shadow 0px 3px 2px,#000 0px 3px 5px;
  }

  &.luui-type-waring {
    background: $bg-waring-btn;
    box-shadow: $bg-waring-btn-shadow 0px 7px 2px, #000 0px 8px 5px;
    color:$other-type-text-color;
  }

  &.luui-type-waring:active {
    box-shadow: $bg-waring-btn-shadow 0px 3px 2px,#000 0px 3px 5px;
  }

  &.luui-type-success {
    background: $bg-success-btn;
    box-shadow: $bg-success-btn-shadow 0px 7px 2px, #000 0px 8px 5px;
    color:$other-type-text-color;
  }

  &.luui-type-success:active {
    box-shadow: $bg-success-btn-shadow 0px 3px 2px,#000 0px 3px 5px;
  }

  &[disabled] {
    cursor: not-allowed;
    box-shadow: none !important;
    opacity: 0.5;
  }

}

.luui-button:enable:hover {
  opacity: 1;
}

.luui-button:disabled {
  border: 1px solid #e3e3e3;
}

.luui-button:enabled:active {
  top: 4px;
  box-shadow: #e3e3e3 0px 3px 2px,#000 0px 3px 5px;
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

</style>
