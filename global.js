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

// Your code here`

myFriends.forEach((friends) => {
    let friend = `
        <div class="col">
            <div class="friend">
                <h3>${friends.firstName} ${friends.lastName}</h3>
                <p>${friends.age}</p>
            </div>
        </div>
    `

    document.querySelector('#friendsDiv').innerHTML += friend;
}) 

