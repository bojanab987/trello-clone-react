const statuses=[
    {
        id:0,
        status:"backlog",
        icon:"🔹",
        color:"#3981DE",        
    },
    {
        id:1,
        status:"in progress",
        icon:"🔆️",
        color: "#F2E624",        
    },
    {
        id:2,
        status: "on hold",
        icon: "⭕️",
        color: "#EB5A46",        
    },
    {
        id:3,
        status: "completed",
        icon: "✅",
        color: "#39B473",        
    },
];

const cardsData=[
    {
        id:0,
        icon:"🔹",
        status:"backlog",
        type:"card",
        title:"Create react app",
        content:"Create awsome app using react",        
    },
    {
        id:1,
        icon:"🔹",
        status:"backlog",
        type:"card",
        title:"Style components",
        content:"Style using some of the libraries like: Material UI, Tailwind, Bootstrap...",        
    },
    {
        id:2,
        title:"Push to GitHub",
        icon:"🔹",
        status:"backlog",
        type:"card",
        content:"Make commits after changes and push it to you githug account",        
    },
];

export { statuses, cardsData };