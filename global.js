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

// These steps should be executed without directly modifying the array above

// 1.) Add a friend to the myFriends array
// Your code here

// 2.) remove a friend from the array (not the one you just added)
// Your code here

// 3.) console.log the array in reverse
// Your code here

// 4.) Change the first object's "firstName" value to Timothy
// your code here

// 5.) Give the last friend in the array a new property, "nickName" with the value of "Danny". 
// your code here

// DO NOT edit past this line
//___________________________
myFriends.forEach((friends) => {
    let friend = /*html*/ `
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

