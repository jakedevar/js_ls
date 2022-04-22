(function() {
  let _ = function(element) {
    u = {
      first() {
        return element[0]
      },
      last() {
        return element[element.length - 1];
      },
      without() {
        let res = [];
        let exceptions = Array.prototype.slice.call(arguments);
        element.forEach(ele => {
          if (exceptions.indexOf(ele) === -1) {
            res.push(ele);
          }
        })
        return res;
      },
      lastIndexOf() {
        let len = 0
        for (let i = element.length; i >= len; i--) {
          if (element[i] === arguments[0]) {
            return i;
          }
        }
      },
      range() {
        let res = [];
        let len = null;
        let start = 0;
        if (arguments.length > 1) {
          start = arguments[0];
          len = arguments[1];
        } else {
          len = arguments[0]
        }
        
        for (let i = start; i < len; i++) {
          res.push(i);
        }
        return res;
      },
      sample() {
        let res = [];
        let len = element.length
        for (let i = 0; i < len; i++) {
          res.push(element[i])
          if (res.length === arguments[0]) {
            return res;
          } else if (arguments.length === 0) {
            return element[i];
          }
        }
        return res;
      },
      findWhere() {
        let res = undefined;
        element.some(obj => {
          let allMatch = true;
          for (let prop in arguments[0]) {
            if (!(prop in obj) || obj[prop] !== arguments[0][prop]) {
              allMatch = false;
            }
          }

          if (allMatch) {
            res = obj;
            return true;
          }
        })
        return res;
      },
      where(match) {
        let res = [];
        element.forEach(obj => {
          let push = false;
          for (let prop in match) {
            if (obj[prop] === match[prop]) {
              push = true;
            }
          }
          if (push) {
            res.push(obj);
          }
        })
        return res;
      },
      pluck(key) {
        let res = [];
        element.forEach(obj => {
          if (obj[key]) {
            res.push(obj[key])
          }
        })
        return res;
      },
      keys() {
        let keyCollection = [];
        for (let prop in element) {
          keyCollection.push(prop);
        }
        return keyCollection;
      },
      values() {
        let valueCollection = [];
        for (let prop in element) {
          valueCollection.push(element[prop]);
        }
        return valueCollection;
      },
      pick() {

      },
    };
        
    return u;
  };
  _.extend = function() {
    let args = [].slice.call(arguments)
    let oldObj = args.pop();
    let newObj = args[args.length - 1];
  
    for (let prop in oldObj) {
      newObj[prop] = oldObj[prop];
    }
  
    return args.length === 1 ? newObj : _.extend.apply(_, args);
  }

  window._ = _;
})();

// pick, return a new object with the passed in properties taken from the old object.
//  Accepts one or more arguments.

// omit, return a new object with any passed in properties omitted.
// has, return true when the property passed in exists, false if it doesn't.
