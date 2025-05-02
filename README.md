# Collaborative App

Une application web moderne de gestion de projet et de collaboration en temps réel qui permet aux équipes de travailler ensemble efficacement.

## 🚀 Aperçu

Collaborative App résout le problème de communication fragmentée et de suivi de projet en fournissant un espace de travail unifié où les équipes peuvent :
- Gérer des projets avec des tableaux Kanban interactifs
- Collaborer en temps réel avec des mises à jour instantanées
- Partager des fichiers et communiquer via un système de messagerie intégré
- Suivre les progrès avec des tableaux de bord et des analyses

## ✨ Fonctionnalités principales

### 🔐 Authentification et autorisation
- Système d'inscription et de connexion sécurisé
- Authentification JWT avec rotation des tokens de rafraîchissement
- Contrôle d'accès basé sur les rôles (Admin, Membre, Observateur)
- Gestion des profils utilisateur
- Réinitialisation de mot de passe et récupération de compte

### 📋 Gestion de projet
- Création et gestion de multiples projets
- Modèles et catégories de projets
- Paramètres et configuration de projet
- Attribution des membres d'équipe et permissions
- Archivage et suppression de projets

### 📊 Système de tableau Kanban
- Tableaux interactifs avec glisser-déposer
- Colonnes personnalisables (À faire, En cours, Terminé, etc.)
- Cartes de tâches avec informations détaillées
- Niveaux de priorité et dates d'échéance
- Attribution de tâches et commentaires
- Pièces jointes et listes de contrôle

### ⚡ Collaboration en temps réel
- Mises à jour en direct pour tous les utilisateurs connectés
- Suivi de curseur en temps réel
- Édition collaborative des descriptions de tâches
- Notifications instantanées pour les changements
- Indicateurs de présence montrant les utilisateurs actifs

### 💬 Communication
- Système de messagerie intégré
- Commentaires sur les tâches et projets
- Mentions (@) et notifications
- Partage de fichiers et pièces jointes
- Flux d'activité et historique

### 📈 Tableau de bord et analyses
- Aperçu de projet et suivi des progrès
- Métriques de productivité d'équipe
- Statistiques de completion des tâches
- Widgets de tableau de bord personnalisables
- Capacités d'exportation pour les rapports

## 🛠️ Architecture technique

### Stack technologique
- **Frontend** : React 18 avec TypeScript, Vite pour le build
- **Backend** : Node.js avec Express.js et TypeScript
- **Base de données** : PostgreSQL avec Prisma ORM
- **Temps réel** : Socket.io pour la collaboration en direct
- **Authentification** : JWT avec rotation des tokens de rafraîchissement
- **Stockage de fichiers** : Stockage local initialement, stockage cloud pour la production
- **Déploiement** : Conteneurs Docker avec proxy inverse Nginx

### Modèles de données
- **User** : id, email, username, password_hash, role, created_at, updated_at
- **Project** : id, name, description, owner_id, created_at, updated_at
- **Board** : id, project_id, name, position, created_at
- **Column** : id, board_id, name, position, created_at
- **Task** : id, column_id, title, description, assignee_id, priority, due_date, position
- **Comment** : id, task_id, user_id, content, created_at
- **ProjectMember** : id, project_id, user_id, role, joined_at

## 🚀 Installation et configuration

### Prérequis
- Node.js 18+
- PostgreSQL 15+
- Docker (optionnel)
- npm ou yarn

### Installation

1. **Cloner le repository**
   ```bash
   git clone <repository-url>
   cd collaborative_app
   ```

2. **Configuration de l'environnement**
   ```bash
   cp .env.example .env
   # Éditer .env avec vos configurations
   ```

3. **Installation des dépendances**
   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   npm install
   ```

4. **Configuration de la base de données**
   ```bash
   # Générer le client Prisma
   npx prisma generate

   # Appliquer les migrations
   npx prisma migrate deploy

   # (Optionnel) Peupler avec des données de test
   npx prisma db seed
   ```

5. **Démarrage en développement**
   ```bash
   # Backend (port 3001)
   cd backend
   npm run dev

   # Frontend (port 3000)
   cd frontend
   npm run dev
   ```

### Déploiement avec Docker

```bash
# Construction et démarrage des conteneurs
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêt des conteneurs
docker-compose down
```

## 📋 Roadmap de développement

### Phase 1 : Fondation (MVP)
- [x] Configuration du projet avec React, Node.js et PostgreSQL
- [ ] Définition du schéma Prisma
- [ ] Implémentation de l'authentification JWT
- [ ] Gestion des profils utilisateur
- [ ] APIs de gestion de projet
- [ ] APIs de tableau Kanban
- [ ] APIs de gestion des tâches
- [ ] Mises à jour en temps réel avec Socket.io
- [ ] Composants React pour le tableau Kanban
- [ ] Rôles et permissions utilisateur
- [ ] Système de messagerie intégré
- [ ] Upload et stockage de fichiers

### Phase 2 : Collaboration
- [ ] Suivi de curseur en temps réel
- [ ] Édition collaborative
- [ ] Système de commentaires avancé
- [ ] Notifications push
- [ ] Gestion avancée des fichiers

### Phase 3 : Fonctionnalités avancées
- [ ] Personnalisation avancée des tableaux
- [ ] Modèles de tâches et automatisation
- [ ] Filtrage et recherche avancés
- [ ] Tableau de bord avec analyses
- [ ] Fonctionnalités d'export/import
- [ ] Application mobile (React Native)

### Phase 4 : Fonctionnalités entreprise
- [ ] Gestion avancée des utilisateurs
- [ ] Journaux d'audit et conformité
- [ ] API pour intégrations tierces
- [ ] Rapports et analyses avancés
- [ ] Options de marque blanche
- [ ] Fonctionnalités de sécurité entreprise

## 🧪 Tests

```bash
# Tests unitaires
npm run test

# Tests d'intégration
npm run test:integration

# Tests end-to-end
npm run test:e2e

# Couverture de code
npm run test:coverage
```

## 📊 CI/CD

Le projet utilise GitHub Actions pour :
- Tests automatisés et linting
- Scan de sécurité avec Trivy
- Construction d'images Docker
- Déploiement automatique (staging/production)
- Tests de performance avec Lighthouse

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'feat: ajout d'une fonctionnalité incroyable'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

### Standards de code
- Utiliser TypeScript pour tout le code
- Suivre les conventions ESLint/Prettier
- Écrire des tests pour les nouvelles fonctionnalités
- Documenter les APIs et composants
- Utiliser des messages de commit en français

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou problème :
- Ouvrir une issue sur GitHub
- Contacter l'équipe de développement
- Consulter la documentation technique

## 🔗 Liens utiles

- [Documentation API](./docs/api.md)
- [Guide de déploiement](./docs/deployment.md)
- [Architecture technique](./docs/architecture.md)
- [Guide de contribution](./docs/contributing.md)

---

**Collaborative App** - Révolutionner la collaboration d'équipe, une tâche à la fois. 🚀
