module.exports = {
  print: ()=> {console.log('idk')},
  waiter: async() => {
    let val = new Promise((res, rej) => resolve('Async-Await works!!!'));
    let wait = await val;
    alert(wait);
  }
};