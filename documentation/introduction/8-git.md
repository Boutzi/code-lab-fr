# Guide d'Installation et Configuration de Git

## 1. Installation de Git

1. Téléchargez Git depuis le site officiel
2. Lancez l'installateur et suivez les étapes:
   - Acceptez la licence
   - Choisissez l'emplacement d'installation
   - Sélectionnez les composants (gardez les options par défaut)
   - Choisissez l'éditeur par défaut (recommandé: Visual Studio Code)
   - Nommez la branche principale `main`
   - Sélectionnez "Git from the command line and also from 3rd-party software"

## 2. Configuration de Git

Ouvrez Git Bash et configurez votre identité:

```bash
git config --global user.name "PseudoGitHub"
git config --global user.email "votre.email@example.com"
```

## 3. Configuration de GitHub

1. Créez un compte sur [GitHub](https://github.com)
2. Générez une clé SSH:

   ```bash
   ssh-keygen -t ed25519 -C "votre.email@example.com"
   ```

   - Appuyez sur Enter pour accepter l'emplacement par défaut
   - Créez une passphrase (optionnel mais recommandé)

3. Démarrez l'agent SSH:

   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```

4. Copiez la clé publique:

   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

5. Ajoutez la clé SSH à GitHub:
   - Allez dans Settings > SSH and GPG keys
   - Cliquez sur "New SSH key"
   - Collez votre clé publique
   - Donnez un titre à votre clé (ex: "Ordinateur personnel")

## 4. Vérification

Testez la connexion:

```bash
ssh -T git@github.com
```

## 5. Commandes Git Essentielles

```bash
# Créer un nouveau dépôt
git init

# Cloner un dépôt existant
git clone [url]

# Ajouter des fichiers
git add [fichier]
git add .  # tous les fichiers

# Créer un commit
git commit -m "message"

# Envoyer les modifications
git push

# Récupérer les modifications
git pull

# Voir l'état des fichiers
git status

# Voir l'historique
git log
```

## 6. Bonnes Pratiques

- Faites des commits réguliers et pertinents
- Écrivez des messages de commit clairs et descriptifs
- Créez une branche par fonctionnalité
- Faites des pull requests pour les collaborations
- Gardez votre dépôt à jour avec `git pull`

## 7. Configuration Recommandée

```bash
# Configurer l'éditeur par défaut (exemple avec VS Code)
git config --global core.editor "code --wait"

# Configurer le nom de la branche principale
git config --global init.defaultBranch main

# Activer la colorisation
git config --global color.ui auto
```

## 8. En Cas de Problème

- Vérifiez les logs avec `git log`
- Consultez l'état avec `git status`
- Utilisez `git help [commande]` pour l'aide
- Visitez [docs.github.com](https://docs.github.com) pour la documentation complète
