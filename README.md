# NFA 022 - TODO list application

This is a simple TODO list application made in React native

## Tech stack

- React native
- react native papers
- flutter ( for templating )
- node js
- expo

## How to run this app

```sh
git clone https://github.com/naikibro/todolist.git
```

```sh
npm i
```

```sh
npx expo start
```

## TODO

```js
// initialiser les tâches dans une variable
const task = {
  title: "faire un café",
  id: 1, // autoinc,
  completion: "created",
};

// initialiser une liste de tâches
const tasks = [{}, {}];

// Map des tâches
tasks.map((task) => {
  // Implémenter la logique de mapping ici
});

// Recherche d'une tâche par ID
tasks.find((taskId) => {
  // Implémenter la logique de recherche ici
});

// Fonction pour créer une tâche
const createTask = () => {
  // Implémenter la logique de création de tâche ici
};

// Fonction pour lire une tâche
const readTask = () => {
  // Implémenter la logique de lecture de tâche ici
};

// Fonction pour mettre à jour une tâche
const updateTask = () => {
  // Implémenter la logique de mise à jour de tâche ici
};

// Fonction pour supprimer une tâche
const deleteTask = () => {
  // Implémenter la logique de suppression de tâche ici
};
```
