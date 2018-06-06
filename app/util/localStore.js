export default {
  getItem: function (key) {
    let value;
    try {
      value = localStorage.getItem(key);
      return value;
    } catch (ex) {
      // 开发环境下提示error
      /*global __DEV__*/
      if(__DEV__) {
        console.error('localStorage.getItem报错,', ex.message);
      }
    }
  },
  setItem: function (key, value) {
    try {
      // ios safari 无痕模式下，直接使用localStorage.setItem会报错
      localStorage.setItem(key, value);
    } catch(ex) {
      // 开发环境下提示 error
      if(__DEV__) {
        console.error('localStorage.setItem报错,', ex.message);
      }
    }
  }
};