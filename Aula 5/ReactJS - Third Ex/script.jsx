const user = {
    firstName: "Renan",
    lastName: "Martarelli"
};

function formatName(user){
    return user.firstName + " " + user.lastName;
};

// const element = (
//     <h1 className="greeting">
//         Hello World!
//     </h1>
// );

const element = (
        "h1",
        {className: "greeting"},
        "Hello World!"
    );




ReactDOM.render(element, document.getElementById("root"));