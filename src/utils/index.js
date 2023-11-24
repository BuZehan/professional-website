// 函数防抖
export const debounce = (func, delay) => {
    let timerId;
  
    return function (...args) {
      clearTimeout(timerId);
  
      timerId = setTimeout(() => {
        func.apply(args);
      }, delay);
    };
  };