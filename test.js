/*
Dans les cinq exercices suivants, tu devras assigner à une constante les valeurs demandées en commentaire.
Ton code devra être propre bien entendu.
Pas d'inquiétude si tu n'arrives pas à tout faire parfaitement ! On cherche avant tout une personne qui sait apprendre et s'adapter.


Voici une courte base de données comprenant des personnes :
- id    : identifiant unique d'une personne
- name  : nom de la personne
- age   : age de la personne en années
- dept  : liste d'id des gens à qui la personne doit un repas
*/
const data = [
    {id: 0,     name: 'Sergio',     age: 18,    dept: [2]},
    {id: 1,     name: 'Maxime',     age: 52,    dept: [4,8]},
    {id: 2,     name: 'Aurelien',   age: 16,    dept: [1,11]},
    {id: 3,     name: 'Anthony',    age: 19,    dept: [9,5,6,2,1]},
    {id: 4,     name: 'Emma',       age: 87,    dept: [10,6,9,8]},
    {id: 5,     name: 'Amanda',     age: 56,    dept: []},
    {id: 6,     name: 'Julien',     age: 11,    dept: [3]},
    {id: 7,     name: 'David',      age: 23,    dept: [5]},
    {id: 8,     name: 'Florian',    age: 38,    dept: [7,10]},
    {id: 9,     name: 'Nathan',     age: 56,    dept: [4,6]},
    {id: 10,    name: 'Thibaut',    age: 29,    dept: []},
    {id: 11,    name: 'Hugo',       age: 18,    dept: [2,6]}
]

const main = () => {
    // Exercice 1 : Liste des prénoms des utilisateurs (tableau)

    const listNames = data.map(e => e.name);
    console.log(listNames);

    // Exercice 2 : Liste des prénoms des utilisateurs triés par âge descendant

    const sortedNames = data.sort((a, b) => b.age - a.age);
    console.log(sortedNames.map(e => e.name));

    // Exercice 3 : La personne qui doit le plus de repas aux autres

    const whoWantMoreDept = data.reduce((acc, curr) => {
        if (curr.dept.length > acc.dept.length) {
            return curr;
        } else {
            return acc;
        }
    });
    console.log(whoWantMoreDept.name);
    
    // Exercice 4 : La personne à qui les autres doivent le plus de repas
    let deptCounts = {};
    data.forEach(person => {
        person.dept.forEach(id => {
            if (deptCounts[id]) {
                deptCounts[id]++;
            } else {
                deptCounts[id] = 1;
            }
        });
    });

    let maxCount = 0;
    let maxId;
    for (let id in deptCounts) {
        if (deptCounts[id] > maxCount) { // si le nombre de repas que la personne doit est supérieur au nombre de repas que la personne qui doit le plus de repas
            maxCount = deptCounts[id]; // je stocke le nombre de repas que la personne doit
            maxId = id; // je stocke l'id de la personne
        }
    }
    const personWithMostDepts = data.filter( e => e.id == maxId)
    console.log(personWithMostDepts[0].name);
    
    // Exercice 5 : Une fonction qui prend en parametre une personne et renvoie une chaine de caracteres comme celle-ci :
    //      - "Nathan, 56 ans, il doit un repas à Emma et Julien."

    const whoIsDepts = (name) => {

        for(let i = 0 ; i < data.length; i++){

            if(data[i].name == name){ 

                let depts = data[i].dept;

                let deptsNames = []; // array de nom des personnes à qui la personne doit un repas

                for(let j = 0; j < depts.length; j++){

                    deptsNames.push(data[depts[j]].name); // je push le nom de la personne à qui la personne doit un repas

                }

                return `${data[i].name}, ${data[i].age} ans, il doit un repas à ${deptsNames.join(' et ')}.`;

            }

        }

    }

    console.log(whoIsDepts('Anthony'));
    
}

// main()

console.log(main())