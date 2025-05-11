<script lang="ts">
import { defineComponent, ref } from 'vue';
import EditableSelect from './components/EditableSelect.vue';

export default defineComponent({
  name: 'App',
  components: {
    EditableSelect
  },
  setup() {
    const hostname = ref<string>('');
    
    const selectedValue = ref();
    const values = ref(["A", "B", "C"]);

    const fetchHostname = async () => {
      try {
        hostname.value = (await cockpit.file('/etc/hostname').read()).trim();
      } catch (error) {
        console.error(error);
      }
    };

    return {
      hostname,
      fetchHostname,
      selectedValue,
      values
    };
  }
});
</script>

<template>
  <div class="card">
    <h2>Configured Wi-Fi Networks</h2>
  </div>
  <div class="card">
    <h2>Available Wi-Fi Networks</h2>
    <button @click="fetchHostname">Get Hostname</button>
    <EditableSelect v-model="selectedValue" :options="values" placeholder="SSID"/>
    <p>{{ hostname }}</p>
  </div>
</template>

<style scoped>
#app {
  text-align: center;
}
</style>
