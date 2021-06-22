class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length += 1;
    this.items.sort(function(a, b) {return a-b});
    };

  get(pos) {
    if (pos >= this.length) {
      // error is a constructor
      throw new Error("Out of bounds")
    } else {
      return this.items[pos];
  }      
}

  max() {
    if (this.length != 0) {
      return Math.max(...this.items)
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length != 0) {
      return Math.min(...this.items)
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {}

  avg() {}
}


module.exports = SortedList;
