// Stringify an object by excluding the 'password' property
// Example
const obj = {
    id: 1,
    username: "John",
    password: "secret",
    email: "john@email.com",
};

const myJSON = JSON.stringify(obj);
console.log(obj.id, obj.username,obj.email);