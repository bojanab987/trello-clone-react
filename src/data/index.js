const lists=[
    {
        id:1,
        status:"backlog",
        icon:"🔹",
        color:"#3981DE",
        cards:[]
    },
    {
        id:2,
        status:"in progress",
        icon:"🔆️",
        color: "#F2E624",
        cards:[]
    },
    {
        id:3,
        status: "on hold",
        icon: "⭕️",
        color: "#EB5A46",
        cards:[]
    },
    {
        id:4,
        status: "completed",
        icon: "✅",
        color: "#39B473",
        cards:[]
    },
];

const cards=[
    {
        id:1,
        title:"Create react app",
        content:"Create awsome app using react",
        icon:"🔹",
        status:"backlog"
    },
    {
        id:2,
        title:"Style components",
        content:"Style using some of the libraries like: Material UI, Tailwind, Bootstrap...",
        icon:"🔹",
        status:"backlog"
    },
    {
        id:3,
        title:"Push to GitHub",
        content:"Make commits after changes and push it to you githug account",
        icon:"🔹",
        status:"backlog"
    },
];

export { lists, cards };