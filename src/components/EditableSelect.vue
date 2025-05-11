
  
<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  
  export default defineComponent({
    name: 'EditableSelect',
    props: {
      modelValue: { type: String, required: false },
      options: { type: Array as () => string[], required: true },
      placeholder: { type: String, default: '' }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const selected = ref(props.modelValue || '');
  
      watch(() => props.modelValue, (val) => {
        if (val !== selected.value) {
          selected.value = val || '';
        }
      });
  
      const onInput = () => {
        emit('update:modelValue', selected.value);
      };
  
      return {
        selected,
        onInput
      };
    }
  });
</script>

<template>
    <div>
      <input
        list="editable-options"
        v-model="selected"
        @input="onInput"
        :placeholder="placeholder"
      />
      <datalist id="editable-options">
        <option v-for="option in options" :key="option" :value="option" />
      </datalist>
    </div>
</template>
  