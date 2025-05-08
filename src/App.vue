<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const hostname = ref<string>('');

    const fetchHostname = async () => {
      try {
        const response = await cockpit.file('/etc/hostname').read();
        hostname.value = response.trim();
      } catch (error) {
        hostname.value = 'Failed to fetch hostname';
        console.error(error);
      }
    };

    return {
      hostname,
      fetchHostname
    };
  }
});
</script>

<template>
  <div id="app">
    <h1>Cockpit Wi-Fi Plugin</h1>
    <button @click="fetchHostname">Get Hostname</button>
    <Button label="Hello World" />
    <p>{{ hostname }}</p>
  </div>
</template>

<style scoped>
#app {
  text-align: center;
}
</style>
