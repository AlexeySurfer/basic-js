const CustomError = require("../extensions/custom-error");
let arr = [];
const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (!this.chain) {
      this.chain = [];
    }
    if (typeof value !== 'undefined') {
      if (typeof value === 'function') { value = 'function() {}' }
      this.chain.push(`( ` + value + ` )`);
    } else {
      this.chain.push(`(  )`);
    }
    return this;
  },
  removeLink(position) {
    if (this.chain && this.getLength() >= position && position) {
      this.chain = this.chain.slice(0, position - 1).concat(this.chain.slice(position));
      return this;
    } else {
      throw new Error('There is not such a position!');
    }
  },
  reverseChain() {
    if (this.chain) {
      this.chain = this.chain.reverse();
    }
    return this;
  },
  finishChain() {
    return this.chain.join('~~');
  },
};


module.exports = chainMaker;
