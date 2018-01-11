const teamName = "tooling";

const people = [{name: "Jennie", role: "senior"},
    {name: "Ronald", role: "junior"},
    {name: "Martin", role: "senior"},
    {name: "Anneli", role: "junior"}
];

let message = `
    There are ${people.length} people in the ${teamName} team.
    Their name are ${people[0].name}, ${people[1].name}, ${people[2].name}, ${people[3].name}.
    2 of them have a ${people[0].role} role.`;

console.log(message);
