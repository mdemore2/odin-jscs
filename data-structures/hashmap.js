const loadFactor = 0.75;

function createHashMap() {
  buckets = Array(16);
  return {
    buckets,
    hash(value) {
      let hashCode = 0;

      const primeNumber = 31;
      for (let i = 0; i < string.length; i++) {
        hashCode = primeNumber * hashCode + value.charCodeAt(i);
      }

      return hashCode;
    },
    checkLoadFactor() {
      if (this.length() / this.buckets.length > loadFactor) {
        this.grow();
      }
    },
    grow() {
      this.buckets.length *= 2;
    },
    set(key, value) {
      let hash = this.hash(key);
      this.buckets[hash] = [key, value];
      this.checkLoadFactor();
    },
    get(key) {
      return this.buckets[this.hash(key)].filter(
        (node) => node[0] === key
      )[0][1];
    },
    has(key) {
      let keylist = this.buckets[this.hash(key)].forEach((node) => node[0]);
      return keylist.includes(key);
    },
    remove(key) {
      return delete this.buckets[this.hash(key)];
    },
    length() {
      let fullBuckets = 0;
      this.buckets.forEach((node) => {
        if (node != null) {
          fullBuckets++;
        }
      });
      return fullBuckets;
    },
    clear() {
      this.buckets = Array(this.buckets.length);
    },
    keys() {
      let keys = [];
      this.buckets.forEach((node) => {
        if (node != null) {
          keys.append(node[0]);
        }
      });
      return keys;
    },
    values() {
      let values = [];
      this.buckets.forEach((node) => {
        if (node != null) {
          values.append(node[1]);
        }
      });
      return values;
    },
    entries() {
      let entries = [];
      this.buckets.forEach((node) => {
        if (node != null) {
          entries.append(node);
        }
      });
      return entries;
    },
  };
}
