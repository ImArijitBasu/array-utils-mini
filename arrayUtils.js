// 1. push(arr, value)
export function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

// 2. pop(arr)
export function pop(arr) {
  if (arr.length === 0) return undefined;
  const last = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return last;
}

// 3. shift(arr)
export function shift(arr) {
  if (arr.length === 0) return undefined;
  const first = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.length = arr.length - 1;
  return first;
}

// 4. unshift(arr, value)
export function unshift(arr, value) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = value;
  return arr.length;
}

// 5. indexOf(arr, value)
export function indexOf(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

// 6. includes(arr, value)
export function includes(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return true;
  }
  return false;
}

// 7. reverse(arr)
export function reverse(arr) {
  const len = arr.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[len - 1 - i];
    arr[len - 1 - i] = temp;
  }
  return arr;
}

// 8. slice(arr, start, end)
export function slice(arr, start = 0, end = arr.length) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i >= start && i < end) {
      result[result.length] = arr[i];
    }
  }
  return result;
}

// 9. splice(arr, index, deleteCount, ...items)
export function splice(arr, index, deleteCount, ...items) {
  const result = [];
  const len = arr.length;

  // Save deleted items
  for (let i = index; i < index + deleteCount && i < len; i++) {
    result[result.length] = arr[i];
  }

  // Shift remaining elements
  const tail = [];
  for (let i = index + deleteCount; i < len; i++) {
    tail[tail.length] = arr[i];
  }

  arr.length = index;
  for (let i = 0; i < items.length; i++) {
    arr[arr.length] = items[i];
  }
  for (let i = 0; i < tail.length; i++) {
    arr[arr.length] = tail[i];
  }

  return result;
}

// 10. map(arr, callback)
export function map(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result[result.length] = callback(arr[i], i, arr);
  }
  return result;
}

// 11. filter(arr, callback)
export function filter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result[result.length] = arr[i];
    }
  }
  return result;
}

// 12. reduce(arr, callback, initial)
export function reduce(arr, callback, initial) {
  let accumulator = initial;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

// 13. unique(arr)
export function unique(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

// 14. max(arr)
export function max(arr) {
  let maxVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }
  return maxVal;
}

// 15. min(arr)
export function min(arr) {
  let minVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
  }
  return minVal;
}

// 16. insertArrayAt(arr, pos, toInsert) 
export function insertArrayAt(arr, pos, toInsert) {
  if (!Array.isArray(arr) || !Array.isArray(toInsert)) {
    throw new Error("Both arr and toInsert must be arrays");
  }
  if (pos < 0 || pos > arr.length) {
    throw new Error("Invalid position");
  }

  arr.splice(pos, 0, ...toInsert);
  return arr;
}
