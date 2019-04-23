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
myFriends.push({firstName: "Jim", lastName: "Chambers", age: 50})

// 2.) remove a friend from the array (not the one you just added)
myFriends.splice(0, 1)

// 3.) console.log the array in reverse
let reversed = myFriends.reverse()
console.log(reversed)

// 4.) Change the first object's "firstName" value to Timothy
myFriends[0].firstName = "Timothy"

// 5.) Give the last friend in the array a new property, "nickName" with the value of "Danny". 

myFriends[5].nickName = "Danny"

// DO NOT edit past this line
//___________________________
myFriends.forEach((friends) => {
    let friend = /*html*/ `
        <div class="col">
            <div class="friend">
                <h3>${friends.firstName} ${friends.lastName}</h3>
                <span>${friends.nickName ? "Nickname: " + friends.nickName : ""}</span>
                <p>${friends.age}</p>
            </div>
        </div>
    `

    document.querySelector('#friendsDiv').innerHTML += friend;
}) 

