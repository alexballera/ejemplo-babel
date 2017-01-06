import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.status(200).send(alex.friendsList())
})

class Person {
  constructor(name, friends) {
    this.name = name
    this.friends = friends
  }
  friendsList() {
    var str = `Mis amigos son: ${this.friends.join(', ')}`
    console.log(str)
    return str
  }
}

var alex = new Person('Alex', ['Jose', 'Ballera', 'Lugo'])

app.listen(3000)
