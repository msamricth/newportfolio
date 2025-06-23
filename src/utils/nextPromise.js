export function newPromise() {
    return new Promise(resolve => {
      if (typeof requestAnimationFrame !== 'undefined') {
        requestAnimationFrame(resolve);
      } else {
        setTimeout(resolve, 16); // SSR fallback
      }
    });
  }