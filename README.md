# 🌈 Rainbow Pill Collective - Site Optimisé

## 🚀 Installation Rapide

### Étape 1: Télécharger et Extraire
Vous avez téléchargé `rainbow-pill-site.zip`. Extrayez-le.

### Étape 2: Copier Vos Images
**IMPORTANT:** Copiez toutes vos images depuis votre ancien dossier `asset/` vers le nouveau dossier `asset/` de ce package.

### Étape 3: Uploader sur GitHub

```bash
cd votre-repo-github
# Backup (optionnel)
git checkout -b backup-old
git push origin backup-old
git checkout main

# Remplacer TOUS les fichiers
rm -rf *.html css/ js/ lang/
cp -r /chemin/vers/rainbow-pill-site/* .

# Commit
git add .
git commit -m "🌈 Site optimisé - Tous les correctifs appliqués"
git push origin main
```

### Étape 4: Vérifier
Attendez 2-3 minutes, puis testez :
- https://rainbow-pill.github.io/
- https://rainbow-pill.github.io/?lang=fr
- https://rainbow-pill.github.io/?lang=de

---

## ✅ Corrections Appliquées

### 🔴 Critiques
- ✅ Tous les chemins d'images corrigés (espaces supprimés)
- ✅ Images de galerie: `w-1/4` → `w-full`
- ✅ Double `<<a>` corrigé

### 🟠 Importantes
- ✅ Système de traduction EN/FR/DE fonctionnel
- ✅ JavaScript optimisé (menu mobile, lazy loading)
- ✅ Fichiers de traduction complets

---

## 📁 Structure

```
rainbow-pill-site/
├── css/          # Vide - Tailwind CDN utilisé
├── js/
│   ├── main.js
│   └── translations.js
├── lang/
│   ├── en.json
│   ├── fr.json
│   └── de.json
├── asset/        # ⚠️ COPIEZ VOS IMAGES ICI
├── *.html        # Tous vos fichiers HTML corrigés
└── README.md
```

---

## 🌐 Traductions

Le site détecte automatiquement la langue du navigateur.
Les utilisateurs peuvent changer de langue avec le sélecteur en haut à droite.

---

## ⚠️ IMPORTANT

**N'oubliez pas de copier vos images dans `asset/` !**

Sans vos images, le site ne s'affichera pas correctement.

---

## 🆘 Support

Si quelque chose ne fonctionne pas :
1. Vérifiez la console navigateur (F12)
2. Assurez-vous que `asset/` contient bien toutes vos images
3. Videz le cache (Ctrl+Shift+R)

---

**🌈 Votre site est prêt ! Bon déploiement ! 🚀**
