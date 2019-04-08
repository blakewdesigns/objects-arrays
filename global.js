let myFriends = [
    {
        firstName: "Tim",
        lastName: "Smith",
        age: "34"
    },
    {
        firstName: "Janice",
        lastName: "Rodgers",
        age: "25"
    },
    {
        firstName: "Marcus",
        lastName: "Allen",
        age: "42"
    },
    {
        firstName: "Maddie",
        lastName: "Wilson",
        age: "32",
    },
    {
        firstName: "Stacey",
        lastName: "Franklin",
        age: "52"       
    },
    {
        firstName: "Dan",
        lastName: "Offernan",
        age: "42"         
    }  
  ]

// 1.) Add a friend to the myFriends array
// Your code here

// 2.) remove a friend from the array (not the one you just added)
// Your code here

// 3.) console.log the array in reverse
// Your code here

// 4.) without modifying the array from about, change the first object's firstName value to Timothy
// your code here

// 5.) give the last friend in the array a new prop, "nickName" with the value of "Danny". 
// your code here

myFriends.forEach((friends) => {
    let friend = `
        <div class="col">
            <div class="friend">
                <h3>${friends.firstName} ${friends.lastName}</h3>
                <span>${friends.nickName ? "nickname: " + friends.nickName : ""}</span>
                <p>${friends.age}</p>
            </div>
        </div>
    `

    document.querySelector('#friendsDiv').innerHTML += friend;
}) 

