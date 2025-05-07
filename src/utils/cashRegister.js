export default class CashRegister {
    constructor(ele) {
      if (!ele || !(ele instanceof HTMLElement)) {
        throw new Error('Invalid HTML element provided.');
      }
      this.ele = ele;
      this.letters = "TALARICO";
      this.interval = null;
      this.isRunning = false;
      this.initRegister();
    }
  
    initRegister() {
      if (!this.ele.hasAttribute('data-value')) {
        this.ele.setAttribute('data-value', this.ele.innerText);
      }
    }
  
    checkOut(ele) {
      if (this.isRunning) return;
  
      const value = ele.dataset.value || '';
      const [firstWord, ...restWords] = value.split(' ');
      const restOfText = restWords.join(' ');
      const chars = firstWord.split('');
      const intervalDuration = 80;
      let iteration = 0;
  
      this.isRunning = true;
      clearInterval(this.interval);
  
      this.interval = setInterval(() => {
        ele.innerText = chars
          .map((char, idx) => (idx < iteration ? char : this.letters[Math.floor(Math.random() * this.letters.length)]))
          .join('') + (restOfText ? ' ' + restOfText : '');
  
        iteration += 0.25;
  
        if (iteration > chars.length) {
          clearInterval(this.interval);
          ele.innerText = value;
          this.isRunning = false;
        }
      }, intervalDuration);
    }
  }
  