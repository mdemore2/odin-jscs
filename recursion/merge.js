function mergeSort(arr, l, r) {
  if (l > r) {
    return;
  }
  let m = 1 + Math.floor((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

function merge(arr, l, m, r) {}
