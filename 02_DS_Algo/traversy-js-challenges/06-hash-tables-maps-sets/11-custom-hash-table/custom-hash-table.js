class HashTable {
  constructor(limit) {
    this.storage = [];
    this.limit = limit;
  }
  #hash(key, max) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % max;
  }
  set(key, value) {
    let index = this.#hash(key, this.limit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          return;
        }
      }
      this.storage[index].push([key, value]);
    }
  }
  get(key) {
    let index = this.#hash(key, this.limit);
    if (!this.storage[index]?.length) return undefined;
    for (let i = 0; i < this.storage[index]?.length; i++) {
      if (this.storage[index][i][0] === key) {
        return this.storage[index][i][1];
      }
    }
  }
  has(key) {
    let index = this.#hash(key, this.limit);
    if (!this.storage[index]?.length) {
      return false;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return true;
        }
      }
      return false;
    }
  }
  remove(key) {
    let index = this.#hash(key, this.limit);
    let bucket = this.storage[index];
    if (bucket) {
      if (bucket?.length === 1 && bucket[0][0] === key) {
        delete this.storage[index];
      } else {
        for (let i = 0; i < bucket?.length; i++) {
          if (bucket[i][0] === key) {
            delete bucket[i][0];
          }
        }
      }
    }
  }

  printTable() {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] !== undefined) {
        console.log(`Bucket ${i}: ${JSON.stringify(this.storage[i])}`);
      } else {
        console.log(`Bucket ${i} Empty`);
      }
    }
  }
}

let hashTable = new HashTable(10);
hashTable.set("firstName", "John");
// hashTable.remove("lastName");
hashTable.printTable();
hashTable.printTable();
console.log(hashTable.get("firstName"));
module.exports = HashTable;
