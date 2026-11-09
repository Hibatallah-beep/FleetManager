# FleetManager – Application de gestion de flotte automobile

## 1. Présentation du projet

FleetManager est une application web développée dans le cadre d'un mini-projet universitaire. Elle a pour objectif de faciliter la gestion d'une flotte de véhicules et le suivi des demandes de maintenance.

L'application permet de centraliser les informations relatives aux véhicules, de suivre leur état et de simplifier le signalement des pannes par les collaborateurs.

Le projet met également en pratique plusieurs notions étudiées dans le cadre du développement web avec Angular, notamment les composants, les services, le routage, les formulaires et la communication avec une API.

## 2. Objectifs

Les principaux objectifs de ce projet sont :

- Faciliter la consultation et le suivi des véhicules.
- Permettre aux collaborateurs de signaler les pannes.
- Distinguer les demandes selon leur niveau d'urgence.
- Permettre au responsable de gérer les demandes de maintenance.
- Assurer une gestion des accès selon le rôle de l'utilisateur.

## 3. Technologies utilisées

| Technologie | Utilisation |
|---|---|
| Angular 19 | Développement de l'interface utilisateur |
| TypeScript | Logique de l'application et typage des données |
| HTML5 / CSS3 | Structure et mise en forme des interfaces |
| JSON Server | Simulation d'une API REST |
| npm | Gestion des dépendances |

## 4. Fonctionnalités développées

### 4.1 Authentification et gestion des rôles

L'application distingue deux types d'utilisateurs :

- **Collaborateur (COLLAB)** : peut consulter les véhicules et signaler une panne.
- **Responsable (MANAGER)** : peut consulter et gérer les demandes de maintenance.

Des mécanismes de protection des routes (Guards) permettent de limiter l'accès aux pages selon le rôle de l'utilisateur.

### 4.2 Gestion des véhicules

Cette partie permet de consulter la liste des véhicules et leurs principales informations : modèle, immatriculation, statut et date du dernier entretien.

Une fonctionnalité de recherche permet de retrouver un véhicule à partir de son modèle ou de son immatriculation.

Un espace statistique présente également le nombre total de véhicules et leur répartition selon leur état.

### 4.3 Signalement des pannes

Le collaborateur peut signaler une panne en remplissant un formulaire contenant une description et un niveau d'urgence.

Deux niveaux sont proposés : faible et élevé.

Lorsqu'une panne est signalée avec une urgence élevée, le statut du véhicule passe automatiquement à « MAINTENANCE ».

### 4.4 Gestion des demandes de maintenance

Le responsable dispose d'une interface dédiée pour consulter les demandes reçues.

Pour chaque demande, il peut :

- Consulter les informations de la panne.
- Approuver la demande.
- Refuser la demande.

Lorsqu'une demande est approuvée, le statut du véhicule concerné est mis à jour en « IN_SERVICE ».

## 5. Organisation de l'application

Le projet suit une organisation basée sur les composants et les services Angular.

- **Components** : gèrent les différentes interfaces et les interactions avec l'utilisateur.
- **Services** : centralisent les opérations liées à l'authentification, aux véhicules et aux demandes de maintenance.
- **Models** : définissent les structures des données utilisées dans l'application.
- **Guards** : contrôlent l'accès aux différentes routes.
- **Routing** : assure la navigation entre les pages.

Cette organisation permet de séparer les responsabilités et de rendre le code plus facile à maintenir.

## 6. Données et communication

JSON Server est utilisé pour simuler un backend REST à partir du fichier `db.json`.

Les données sont organisées autour de trois ressources principales :

- Utilisateurs
- Véhicules
- Demandes de maintenance

Les échanges entre Angular et JSON Server sont réalisés à l'aide du service HttpClient.

Il s'agit d'une simulation destinée au cadre pédagogique du projet. L'application ne repose pas sur un véritable système de gestion de flotte en production.

## 7. Installation et lancement

### Prérequis

- Node.js
- npm
- Angular CLI

### Installation des dépendances

```bash
npm install
```

### Lancement de JSON Server

Dans un premier terminal :

```bash
npx json-server db.json
```

### Lancement de l'application Angular

Dans un deuxième terminal :

```bash
npm start
```

L'application est ensuite accessible à l'adresse :

http://localhost:4200

## 8. Tests réalisés

Des tests fonctionnels manuels ont été effectués afin de vérifier les principaux scénarios d'utilisation :

- Connexion avec les différents rôles.
- Protection des routes selon les autorisations.
- Consultation et recherche des véhicules.
- Signalement d'une panne avec différents niveaux d'urgence.
- Mise à jour du statut du véhicule.
- Approbation et refus des demandes de maintenance.
- Vérification de l'affichage des pages et des messages d'accès refusé.

Les fonctionnalités principales ont été vérifiées et leur fonctionnement est satisfaisant.

## 9. Conclusion

La réalisation de FleetManager a permis de mettre en pratique les concepts fondamentaux d'Angular à travers une application concrète.

Ce travail a notamment permis de mieux comprendre l'organisation d'une application en composants et services, la gestion des formulaires, la navigation sécurisée et la communication avec une API REST.

Le projet constitue une première expérience pratique dans la conception et le développement d'une application web complète, depuis la structuration du code jusqu'aux tests fonctionnels.
