let me = {
  firstName: 'Jake',
  lastName: 'D'
};

let mother = {
  firstName: 'Amber',
  lastName: 'Doe'
}

let father = {
  firstName: 'Shane',
  lastName: 'Doe'
}

let friend = {
  firstName: 'John',
  lastName: 'Smith'
}






let people = {
  collection: [me, friend, mother, father],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },
  rollCall: function() {
    this.collection.forEach(this.fullName);
  },
  add: function(person) {
    if (this.isValidPerson(person)) {
      return;
    }
    this.collection.push(person);
  },
  getIndex: function(person) {
    let index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName && 
        comparator.lastName === person.lastName) {
          index = i;
        }
    });
    return index;
  },
  remove: function(person) {
    let index = this.getIndex(person);
    if (!this.isValidPerson(person)) {
      return;
    }
    if (index === -1) {
      return;
    }
    this.collection.splice(index, 1);
  },
  isValidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },
  get: function(person) {
    if (this.isValidPerson(person)) {
      return;
    }
    return this.collection[this.getIndex(person)];
  },
  update: function(person) {
    if (this.isValidPerson(person)) {
      return;
    }

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  }
}
console.log(people.getIndex(friend));
people.remove({firstName: 'John', lastName: 'Smith'})
console.log(people.getIndex(friend));