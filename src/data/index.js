const statuses = [{
    status: "backlog",
    icon: "🔹",
    color: "#3981DE",
    cards:[]
}, {
    status: "in progress",
    icon: "🔆️",
    color: "#F2E624",
    cards:[]
}, {
    status: "on hold",
    icon: "⭕️",
    color: "#EB5A46",
    cards:[]
}, {
    status: "complete",
    icon: "✅",
    color: "#39B473",
    cards:[]
}];

const cardsData = [{
    id:0,
    icon:"🔹",
    status: "backlog",
    type:"CARD",
    title:"Create react app",
    content: "Crate Trello clone app using react..."
}, {
    id:1,
    icon:"🔹",
    status: "backlog",
    title:"Add feature",
    type:"CARD",
    content:"Add functionality for adding new item cards"
}, {
    id:2,
    icon:"🔹",
    status: "backlog",
    title:"Work on styles",
    type:"CARD",
    content:"Add css to your react app by using some UI library"
}];

export {statuses, cardsData};