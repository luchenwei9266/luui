<demo>
支持 disabled
</demo>
<template>
  <Button disabled mr-6>普通按钮</Button>
  <Button type="main" mr-6 disabled>禁用按钮</Button>
  <Button type="danger" mr-6 disabled>危险按钮</Button>
  <Button type="waring" mr-6 disabled>警告按钮</Button>
  <Button type="success" mr-6 disabled>成功按钮</Button>
</template>

<script lang="ts">
import {
  Button
} from "../lib/index";
export default {
  components: {
    Button
  }
}
</script>
