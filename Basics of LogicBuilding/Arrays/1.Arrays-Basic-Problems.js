/* Coding Exercise 1 (Very Easy)
Topic

Creating, Accessing and Updating Arrays

Scenario

You're building a Spotify playlist.

Initially, the playlist contains:

Shape of You
Believer
Blinding Lights

Your Tasks
Create an array called playlist.
Replace "Believer" with "Perfect".
Return the updated array.*/

const createPlaylist = (playlist) => {
    playlist[1] = "Perfect";
    return playlist;
}

/* Exercise 2 (No Coding Yet)
New Concept: .length
Real-World Scenario

You're building a Netflix watchlist.

A user has saved these shows:

[
  "Stranger Things",
  "Dark",
  "Wednesday",
  "Money Heist"
]

Your manager asks:

"Show the user how many shows are currently in their watchlist."

Your Tasks
Create an array called watchlist.
Store the number of shows in a variable called totalShows.
Return totalShows.*/

(createPlaylist(["Shape of You", "Believer", "Blinding Lights"]))


function getTotalShows(watchlist) {
    return watchlist.length;
    
}

getTotalShows(["Stranger Things", "Dark", "Wednesday", "Money Heist"])

/* Exercise 3 (Slightly Harder)
New Concept

Access values using index

Real-World Scenario

You're building a food delivery app.

A user has ordered:

[
  "Burger",
  "Pizza",
  "Fries",
  "Coke"
]

Your manager says:

"On the order summary page, show only the first item the customer ordered."*/

const findFirstOrder = (orderList) => {
    let firstOrderName = orderList[0];
    return firstOrderName

}

findFirstOrder(["Burger","Pizza","Fries","Coke"]);


/*Exercise 4 (Slightly Harder)
New Concept (2-minute explanation)

Negative indexes don't work in JavaScript arrays.

If an array is:

["Burger", "Pizza", "Fries", "Coke"]

Then:

order[0] → "Burger"
order[1] → "Pizza"

But:

order[-1]

does not return "Coke".

To get the last item, use:

order[order.length - 1]

Memory trick: The last valid index is always one less than the array length.

Real-World Scenario

You're building an Amazon order tracker.

The order history is:

[
  "Order #101",
  "Order #102",
  "Order #103",
  "Order #104"
]

Your manager says:

"Show the customer's most recent order."*/


const orderHistory = (orderList) => {return orderList[orderList.length -1]} 
orderHistory(["Order #101","Order #102", "Order #103","Order #104"]);

/* Exercise 5 — push()
🧠 Scenario

You're building a shopping cart.

A customer already has these items:

["Laptop", "Mouse"]

The customer clicks "Add Keyboard".

Your job is to update the shopping cart.

Before Coding (Remember Our Habit)

INPUT:

A shopping cart array (cart)
A new product (product)

TASK:

Add the new product to the end of the shopping cart.

OUTPUT:

Return the updated shopping cart.*/


const addToCart = (cart, newproduct) => {
    newCart = cart.push(newproduct)
    return cart
}

console.log(addToCart(["Laptop", "Mouse"], "chappal"))

/* Exercise 6

Write this function:

function removeLastItem(cart) {
    // your code
}
Example Input
removeLastItem(["Laptop", "Mouse", "Keyboard"]);
Expected Output
["Laptop", "Mouse"]*/

const removeLastItem = (oldcart) =>{
    oldcart.pop()
    return oldcart;
}
console.log(removeLastItem(["cloths", "brush", "paint", "camera"]));


/* Exercise 7

✅ TASK You wrote:
now Rahul entered in theater so his ticket got invalid

The story is close, but let's focus on what the code does.

A better description is:

Remove the first person from the queue because they entered the theater.

Remember, shift() doesn't know anything about tickets. It simply removes the first element.

✅ OUTPUT - it will return the updated array

Now write this function:*/

const isTicketValid = (audience) => {
    audience.shift();
    return audience;


}

console.log(isTicketValid(["aman", "ram", "zyan", "faidh"]));

/* Exercise 8
Scenario

A movie theater queue is:

["Amit", "Sara", "John"]

A VIP customer named "Rahul" arrives and should be placed at the front of the queue.*/

const addVIP = (queue, vipUser) =>{
    queue.unshift(vipUser)
    return queue

}

console.log(addVIP(["Amit", "Sara", "John"],"Rahul"));


function printStudents(students) {
    for(const name of students){
        console.log(name)
    }
}
printStudents(["Amit", "Sara", "John","Rahul"])

function printStudents(students) {
    for(let i = 0; i < students.length; i++){
        console.log(students[i])

    }
}
printStudents(["Amit", "Sara", "John","Rahul"])