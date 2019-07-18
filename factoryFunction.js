// we can elminate some characters below. We don't have to list both name and key if we want the key to have the same name.

const createContact = (name, title, email) => 
     ({
        name, title, email
    })


// need to create a variable to target where we're going to insert stuff in html

const placeToPutStuff = document.querySelector("#contactList")

//here we create our function that creates a variable which will hold the html insertion including the ${} that evaluates the information from our contacts we'll create below. 

const displayContact = (contact) => {
     const contactHTMLRepresentation =
        `
        <section class="contact"> 
            <h1>${contact.name}</h1>
            <h2>${contact.title}</h2>
            <div>${contact.email}</div>
        </section>
        `
        //below is the command to build the innerHTML using the variable we created earlier to point to the place in the html we'll insert, .innerHTML to write to the innerHTML and then build up with the variable we created.
    placeToPutStuff.innerHTML += contactHTMLRepresentation
}

//here we create our contacts

const brian = createContact (
    "Brian Wilson", "Web Developer", "wilsonedit@gmail.com"
)

const jessica = createContact (
    "Jessica Wilson", "Transportation Planner", "jessica@tdot.com"
)

const bennett = createContact (
    "Bennett Wilson", "Kid", "jessica@tdot.com"
)

const sally = createContact (
    "Sally Johnson", "Engineer", "jessica@tdot.com"
)

const john = createContact (
    "John Johnson", "Farmer", "jessica@tdot.com"
)

//here we invoke the function with the name of the contact:

displayContact(brian)
displayContact(jessica)
displayContact(bennett)
displayContact(sally)
displayContact(john)
