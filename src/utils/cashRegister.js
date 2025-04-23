export default class CashRegister {
    constructor(ele) {
      if (!ele || !(ele instanceof HTMLElement)) {
        throw new Error('Invalid HTML element provided.');
      }
      this.ele = ele;
      this.letters = "TALARICO";
      this.interval = null;
      this.initRegister();
    }
  
    initRegister() {
      if (!this.ele.hasAttribute('data-value')) {
        this.ele.setAttribute('data-value', this.ele.innerText);
      }
      this.checkOut(this.ele);
    }
  
    checkOut(ele) {
      const value = ele.dataset.value || '';
      const [firstWord, ...restWords] = value.split(' ');
      const restOfText = restWords.join(' ');
      const chars = firstWord.split('');
      const intervalDuration = 80; // adjust this to slow down or speed up animation
      let iteration = 0;
  
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        ele.innerText = chars
          .map((char, idx) => (idx < iteration ? char : this.letters[Math.floor(Math.random() * this.letters.length)]))
          .join('') + (restOfText ? ' ' + restOfText : '');
  
        iteration += 0.25; // adjust lower for slower reveal
  
        if (iteration > chars.length) {
          clearInterval(this.interval);
          ele.innerText = value; // restore original text precisely
        }
      }, intervalDuration);
    }
  }
  