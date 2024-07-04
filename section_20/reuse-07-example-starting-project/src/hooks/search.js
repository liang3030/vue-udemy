import { ref, computed, watch } from 'vue';

export default function useSearch(items, searchProps) {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  const availableItems = computed(function () {
    let filterdItems = [];
    if (activeSearchTerm.value) {
      // pass filterFn as an argument to the filter method
      // filterdItems = items.filter(filterFn);
      filterdItems = items.value.filter((item) =>
        item[searchProps].includes(activeSearchTerm.value)
      );
    } else if (items) {
      filterdItems = items.value;
    }
    return filterdItems;
  });

  watch(enteredSearchTerm, function (newValue) {
    setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue;
      }
    }, 300);
  });

  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }
  return { enteredSearchTerm, availableItems, updateSearch };
}
