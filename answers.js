// create 5 burgers (at least 3 should be beef)
debugger.burgers.insertMany({})


// find all the burgers
db.burger.burgers.find({)}
// show just the meat of each burger
db.burgers.find({meats})
// show just the toppings of each burger
db.burgers.find({toppings})

// show everything but the cheese
db.burgers.find({meats},{toppings}, {sides})
// find all the burgers with beef
db.burgers.find({meats})
// find all the burgers that are not beef
db.burgers.find({meats:{$ne: 'beef'}})
// find the first burger with cheese
db.burgers.find({meats:{$gte: 'beef'}})
// find one and update the first burger with cheese to have a property of 'double cheese'
db.burgers.updateOne( { meat: 'beef' }, { $set: { cheese: "double cheese"}, $currentDate: { lastModified: true } } )
// find the burger you updated to have double cheese
db.burgers.find({burgers:{$eq: 'double cheese'}})
// find and update all the beef burgers to be 'veggie'
db.users.updateMany( { mests: { $lt: 'beeef' } }, { $set: { meats: "veggie"}, $currentDate: { lastModified: true } } )
// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.users.deleteMany( {meat: 'veggie'} )
// drop the collection
//Expected Output
//true

// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }

//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

// Change the name of the key cheese to 'pumpkinSpice'

// find all the burgers with ketchup (or another topping you used at least once)

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger 

let group = {
  protein: ['beef','chicken','turkey','ostrich','tofu','buffalo'],
  toppings: ['ketchup','mustard','guacamole','worsteshire sauce','mayonnaise', 'onions','mushrooms'],
  sides: ['fries', ],
  cheese: 'true',
}

[
  {protein: 'beef'},
  {protein: 'chicken'}, {protein: 'turkey'}, {protein: 'ostrich'}, {protein: 'tofu'}, {protein: 'buffalo'},
  {toppings:'ketchup'}, {toppings:'mustard'}, {toppings:'guacomole'},{toppings:'worsteshire sauce'},{toppings:'mayonnaise'},{toppings:'onions'},{toppings:'mushrooms'},
  {sides: 'fries'}, {cheese: '1'}
]

([
  { protein: 'chicken'},
  { protein: 'turkey'},
  {protein: 'ostrich'},
  { protein: 'tofu'},
  { protein: 'buffalo'},
  { toppings: "Julie"},
  { toppings: 'chicken'},
  { toppings: 'turkey'},
  { toppings: 'ostrich'},
  { toppings: 'tofu'},
  { toppings: 'buffalo'},
  { toppings: "Julie"}
])

burger1