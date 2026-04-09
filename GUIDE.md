# GUIDE DE CONFIGURATION - Thaïlande Rêves & Évasions

## 📋 AVANT DE COMMENCER

Votre site web est prêt ! Voici ce qu'il reste à faire pour le finaliser.

---

## 1️⃣ INSTALLATION

### Étape 1: Installer les dépendances
Ouvrez un terminal dans le dossier du projet et exécutez:
```
npm install
```

### Étape 2: Lancer le serveur
```
npm run serve
```

Puis ouvrez votre navigateur à: http://localhost:8000

---

## 2️⃣ AJOUTER LES IMAGES

**Dossier:** `images/`

### Images obligatoires:

1. **logo-thailande.png**
   - Taille: 220px de large (hauteur proportionnelle)
   - Format: PNG transparent de préférence
   - Utilisation: Logo du site dans le header

2. **fond-principal.jpg**
   - Taille: Au moins 1920x1080px
   - Format: JPG compressé
   - Utilisation: Image de fond du site

3. **Images de destinations** (un ensemble pour chaque ville):
   - `bangkok1.jpg`, `bangkok2.jpg`, `bangkok3.jpg`
   - `chiangmai1.jpg`, `chiangmai2.jpg`, `chiangmai3.jpg`
   - `phuket1.jpg`, `phuket2.jpg`, `phuket3.jpg`
   - `pattaya1.jpg`, `pattaya2.jpg`, `pattaya3.jpg`
   - `phiphi1.jpg`, `phiphi2.jpg`, `phiphi3.jpg`
   
   Taille recommandée: 800x600px ou 1000x750px

**Conseil:** Les images manquantes afficheront automatiquement des placeholders pour que le site reste fonctionnel.

---

## 3️⃣ STRUCTURE DES FICHIERS

```
thaiparadise/
├── index.html          ← Page d'accueil
├── bangkok.html        ← Page Bangkok
├── chiangmai.html      ← Page Chiang Mai
├── phuket.html         ← Page Phuket
├── pattaya.html        ← Page Pattaya
├── ilesphiphi.html     ← Page Îles Phi Phi
├── style.css           ← Feuille de style complète
├── app.js              ← Fonctionnalités JavaScript
├── package.json        ← Configuration npm
├── README.md           ← Documentation
├── GUIDE.md            ← Ce fichier
└── images/             ← Dossier des images
    ├── logo-thailande.png
    ├── fond-principal.jpg
    ├── bangkok1.jpg
    └── ...
```

---

## 🎨 PERSONNALISATION

### Modifier la couleur du site

Ouvrez `style.css` et recherchez les couleurs principales:

- **Rouge foncé** : `#8B0000` (header, nav, footer)
- **Or** : `gold` (texte, bordures)  
- **Vert** : `#008000` (bouton)

Remplacez par vos couleurs préférées.

### Modifier le texte du site

Ouvrez chaque fichier HTML `.html` et modifiez le contenu dans les balises:
- `<h1>`, `<h2>`, `<p>` pour le texte
- `<title>` pour le titre de la page (apparaît dans l'onglet du navigateur)

---

## 🔗 AJOUTER DES LIENS DE RÉSERVATION

### Intégrer Stripe ou un système de paiement

1. Modifiez chaque page (ex: `bangkok.html`)
2. Ajoutez un bouton de réservation avec un lien Stripe:
   ```html
   <a href="https://buy.stripe.com/YOUR_LINK" target="_blank" style="display: inline-block; padding: 15px 30px; background: #008000; color: gold; border: 2px solid gold; border-radius: 8px; text-decoration: none; font-weight: bold; cursor: pointer;">Réservez ici</a>
   ```

---

## ✉️ AJOUTER UNE PAGE DE CONTACT

Créez un fichier `contact.html`:

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact – Thaïlande – Rêves & Évasions</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <img src="images/logo-thailande.png" alt="Thaïlande Rêves & Évasions">
    <h1>Thaïlande – Rêves & Évasions</h1>
  </header>

  <nav>
    <a href="index.html">Accueil</a>
    <a href="bangkok.html">Bangkok</a>
    <a href="chiangmai.html">Chiang Mai</a>
    <a href="phuket.html">Phuket</a>
    <a href="pattaya.html">Pattaya</a>
    <a href="ilesphiphi.html">Îles Phi Phi</a>
    <a href="contact.html">Contact</a>
  </nav>

  <section class="content">
    <h2>Nous Contacter</h2>
    <p>Pour toute question ou réservation, n'hésitez pas à nous contacter:</p>
    <p>
      <strong>Email:</strong> info@thaiparadise.com<br>
      <strong>Téléphone:</strong> +33 1 23 45 67 89<br>
      <strong>Adresse:</strong> Paris, France
    </p>
  </section>

  <footer>
    <p>© 2026 Thaïlande – Rêves & Évasions</p>
    <a href="#">Conditions Générales</a> |
    <a href="#">Politique de Confidentialité</a> |
    <a href="#">Contact</a>
  </footer>

  <script src="app.js"></script>
</body>
</html>
```

---

## 🌐 DÉPLOYER VOTRE SITE

### Option 1: Netlify (Gratuit et facile)
1. Poussez votre code sur GitHub
2. Connectez-vous à netlify.com
3. Importez votre repo GitHub
4. Le site sera automatiquement déployé

### Option 2: Vercel
1. Allez sur vercel.com
2. Importez votre projet GitHub
3. C'est prêt !

### Option 3: Hébergement traditionnel
1. Compressez votre dossier `thaiparadise`
2. Envoyez-le via FTP à votre hébergeur
3. Accédez au domaine

---

## 📱 TESTER LA VERSION MOBILE

1. Ouvrez le site dans votre navigateur
2. Appuyez sur `F12` pour ouvrir les outils de développement
3. Cliquez sur l'icône "mobile" (coin haut-gauche)
4. Testez sur différentes tailles d'écran

---

## 🐛 DÉPANNAGE

### Les images ne s'affichent pas
- Vérifiez que le chemin d'accès est correct: `images/logo-thailande.png`
- Vérifiez le nom exact du fichier (majuscules/minuscules)

### Le site ne s'ouvre pas
- Assurez-vous que le serveur tourne: `npm run serve`
- Essayez d'actualiser la page (Ctrl+F5)

### Les styles ne s'appliquent pas
- Effacez le cache du navigateur (Ctrl+Shift+Del)

---

## 💡 CONSEILS FINAUX

✅ Optimisez vos images avant de les ajouter (utilisez tinypng.com)
✅ Testez sur mobile régulièrement
✅ Regardez les autres sites touristiques pour vous inspirer
✅ Mettez à jour votre contenu régulièrement
✅ Utilisez Google Analytics pour suivre vos visiteurs

---

Bon voyage en Thaïlande ! 🇹🇭✈️
