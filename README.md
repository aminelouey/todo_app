# 📋 To-Do List Application

Une application moderne de gestion de tâches construite avec **React** et **Vite**.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Fonctionnalités

- ✅ **Ajout de tâches** — Input contrôlé pour créer de nouvelles tâches
- ✅ **Validation** — Marquer les tâches comme terminées (effet visuel)
- ✅ **Suppression** — Retirer définitivement une tâche de la liste
- ✅ **Filtrage** — Trois vues: Toutes, En cours, Terminées
- ✅ **Persistance** — Sauvegarde automatique dans le localStorage
- ✅ **Compteur** — Affichage dynamique des tâches restantes

## 🛠️ Technologies Utilisées

| Technologie | Description |
|-------------|-------------|
| React 19 | Bibliothèque UI avec Hooks (useState, useEffect) |
| Vite | Build tool rapide avec HMR |
| CSS3 | Glassmorphism, animations, design responsive |
| localStorage | Persistance des données côté client |

## 📁 Structure du Projet

```
src/
├── main.jsx              # Point d'entrée
├── App.jsx               # Composant principal (state & logique)
├── App.css               # Styles des composants
├── index.css             # Styles globaux
└── components/
    ├── TaskForm.jsx      # Formulaire d'ajout
    ├── Filters.jsx       # Boutons de filtrage
    ├── TaskList.jsx      # Conteneur de la liste
    └── TaskItem.jsx      # Élément de tâche individuel
```

## 🚀 Installation

```bash
# Cloner le projet
git clone <repository-url>
cd todo-app

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible à l'adresse: `http://localhost:5173`

## 📚 Concepts React Utilisés

### Lifting State Up
L'état principal est géré dans `App.jsx` et transmis aux composants enfants via les props.

### Hooks
- **useState**: Gestion de l'état local (tasks, filter, input)
- **useEffect**: Synchronisation avec localStorage

### Bonnes Pratiques
- Clés uniques avec `crypto.randomUUID()` (pas d'index)
- `e.preventDefault()` pour la soumission du formulaire
- Composants réutilisables et découplés

## 🎨 Design

- **Glassmorphism** — Effet de verre avec blur et transparence
- **Gradient** — Couleurs modernes avec dégradés
- **Animations** — Transitions fluides et micro-interactions
- **Responsive** — Adapté aux mobiles et tablettes

## 📄 License

MIT © 2026
