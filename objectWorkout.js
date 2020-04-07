/**
 * The 'this' keyword refers to the object that called the method.
 */

const cat = {
  color: '',
  age: 0,
  sound: 'meow'
};

// 'this' refers to the cat object
cat.greeting = function() {
  console.log('hi', this.sound);
};

cat.greeting();


class Animal {
  constructor(color) {
    this.color = color;
  }

  speak() {
    console.log('My color is ', this.color);
  }
}

const kitty = new Animal('green');
const doggy = new Animal('yellow');

kitty.speak();
doggy.speak();

var a = "hi";
let b = "yo";
const c = "ok";

console.log(this.a);
console.log(this.b);
console.log(this.c);

// __this__ refers to the object that the function is executing in.
// __this__ is determined by how a function is invoked.

const friendData = [
  {
    firstName: 'Bob',
    lastName: 'Ross',
    username: 'bob.ross',    
    numFriends: 125,
    birthday: '2/23/1985',
    posts: ['hi', 'hello', 'yo']
  },
  {
    firstName: 'Joe',
    lastName: 'Exotic',
    username: 'tiger.king',    
    numFriends: 100,
    birthday: '2/23/1985',
    posts: ['dude', 'bro', 'man', 'bear']
  },
];

// Their name in the format `${firstName} ${lastName}`
// Three random posts
// Number of days until their birthday

// functional
// The functional approach is taking your raw data,
// passing it through a function or multiple functions,
// and outputting data that is useful to you and your project.

// oop 
// the only reason this works is becxasue of closure :)
// They still have access to data after initializeFriend returns because of closure. 
/**
 * 
 * The object-oriented approach is creating objects for your data which
 * have state and include all the information they need in order to generate
 * the data that is useful to you and your project.
 */
function initializeFriend(data) {
  return {
    fullName: `${data.firstName} ${data.lastName}`,
    getThreeLatestPosts: function() {
      return data.posts.splice(0, 2);
    },
    getBirthday: function() {
      return data.birthday;
    }
  };
};

const friendsStore = friendData.map(initializeFriend);
// render
friendsStore.forEach(friend => {
  console.log(friend.fullName);
  console.log(friend.getThreeLatestPosts());
  console.log(friend.getBirthday());
});

// now lets say you want to add a greeting method like this
function initializeFriend2(data) {
  return {
    fullName: `${data.firstName} ${data.lastName}`,
    getThreeLatestPosts: function() {
      return data.posts.splice(0, 2);
    },
    getBirthday: function() {
      return data.birthday;
    },
    greeting: function() {
      // __this__ refers to the object that the function is executing in.
      // __this__ is determined by how a function is invoked.
      const numDays = this.getBirthday()   ;   
      return `Hello, this is ${this.fullName}'s data! It is ${numDays} until ${this.fullName}'s birthday!`;
    }
  };
}
const friendsStore2 = friendData.map(initializeFriend2);
// render2
friendsStore2.forEach(friend => {
  console.log(friend.fullName);
  console.log(friend.getThreeLatestPosts());
  console.log(friend.getBirthday());
  // __this__ refers to the object that the function is executing in.
  // __this__ is determined by how a function is invoked.
  console.log(friend.greeting());
});

// now lets add a click handler when someone clicks our user
function initializeFriend2(data) {
  return {
    fullName: `${data.firstName} ${data.lastName}`,
    username: data.username,
    getThreeLatestPosts: function() {
      return data.posts.splice(0, 2);
    },
    getBirthday: function() {
      return data.birthday;
    },
    greeting: function() {
      // __this__ refers to the object that the function is executing in.
      // __this__ is determined by how a function is invoked.
      const numDays = this.getBirthday()   ;   
      return `Hello, this is ${this.fullName}'s data! It is ${numDays} until ${this.fullName}'s birthday!`;
    },
    onFriendClick: function() {
      window.open(`https://facebook.com/${this.username}`)
    }
  };
}
const friendsStore3 = friendData.map(initializeFriend3);
// render2
const bobRossObj = initializeFriend3(data[0])
const bobRossDOMEl = document.getElementById('Bob_Ross')
// __this__ refers to the object that the function is executing in.
// __this__ is determined by how a function is invoked.

bobRossDOMEl.addEventListener("onclick", bobRossObj.onFriendClick)
// the window object will call the function bobRossObj.onFriendClick like this
bobRossDOMEl.addEventListener("onclick", function() {
  // BUT THERE IS NO ACCESS TO THIS!
  window.open(`https://facebook.com/${this.username}`)
})

// https://medium.com/free-code-camp/a-deep-dive-into-this-in-javascript-why-its-critical-to-writing-good-code-7dca7eb489e7