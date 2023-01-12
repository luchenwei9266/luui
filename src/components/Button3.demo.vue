<demo>
支持 level
</demo>
<template>
<div>
  <div>
    <Button mr-6>普通按钮</Button>
    <Button type="main" mr-6>主要按钮</Button>
    <Button type="danger" mr-6>危险按钮</Button>
    <Button type="waring" mr-6>警告按钮</Button>
    <Button type="success" mr-6>成功按钮</Button>
  </div>
</div>
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
