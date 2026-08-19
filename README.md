# Math Companion Pro

"Agis comme un développeur Full-Stack Senior et un designer UX/UI primé. Je veux une application web tout-en-un (calculatrice + convertisseur + grapheur + calcul symbolique + statistiques + matrices) dans un seul fichier HTML (CSS et JS intégrés). Ce n'est PAS une calculatrice basique : c'est une application professionnelle à 3 modes commutables.

🎯 STRUCTURE GÉNÉRALE (LES 3 MODES)

L'application doit avoir un sélecteur de mode en haut (style tabs animés ou segmented control) permettant de basculer entre :

MODE 1 — SIMPLE 🧮

Calculatrice basique uniquement : +, −, ×, ÷, %, ±, décimale, effacer (C), retour arrière (⌫), égal (=)

Historique des 5 derniers calculs au-dessus du résultat

Support clavier complet

Interface épurée, pas de fonctionnalités avancées

MODE 2 — SCIENTIFIQUE 🔬

Tout le Mode 1 + fonctions avancées :

Trigonométrie : sin, cos, tan, asin, acos, atan (avec bascule degrés/radians)

Logarithmes : log, ln

Puissances : x², x³, xʸ, √, ³√, ʸ√x

Constantes : π, e

Factorielle (n!), modulo (mod), parenthèses imbriquées

Mémoire : M+, M-, MR, MC

MODE 2+ — GRAPHIQUE & CALCUL SYMBOLIQUE 📈 (intégré au mode scientifique)

Tracé de fonctions mathématiques sur un canvas interactif

Support de plusieurs fonctions simultanées (jusqu'à 5 courbes avec couleurs distinctes)

Fonctions supportées : polynômes, trigonométriques, exponentielles, logarithmes, racines, valeurs absolues, fonctions composées

Contrôles interactifs : zoom (molette + boutons), pan/drag, reset view, grille ajustable, axes avec graduation automatique intelligente

Interface de saisie : champ de texte pour l'expression, liste des fonctions avec toggle on/off, sélecteur de couleur, bouton supprimer

Fonctionnalités avancées : coordonnées au survol (tooltip), points remarquables (zéros, extremums, intersections), dérivée en pointillé (optionnel), export PNG, mode sombre/clair pour le canvas

∫ MODULE INTÉGRALES DÉFINIES (sous-module du mode scientifique)

Sélection de la fonction à intégrer OU saisie d'une nouvelle expression

Deux champs pour les bornes d'intégration : a et b (support de -∞, +∞, π, e)

Calcul numérique : méthode de Simpson avec 1000 subdivisions par défaut (slider 100-10000)

Visualisation : remplissage coloré de l'aire (positif en vert, négatif en rouge), animation fluide, affichage du résultat sur le graphique

Gestion des cas particuliers : asymptotes, intégrales impropres, fonctions qui changent de signe

d/dx MODULE DÉRIVÉES SYMBOLIQUES (sous-module du mode scientifique)

Saisie d'une fonction f(x)

Calcul de la dérivée symbolique (pas numérique) avec affichage de la formule simplifiée

Implémente les règles de dérivation : somme, produit, quotient, chaîne, puissances, trigonométrie, exponentielles, logarithmes

Affichage : formule de la dérivée en notation mathématique (ex: "f'(x) = 2x + cos(x)")

Option : tracer la dérivée sur le graphique en pointillé

Calcul de la dérivée en un point spécifique

MODE 3 — PROFESSIONNEL 💼

Tout le Mode 2 (scientifique + graphique + intégrales + dérivées) + :

🌍 CONVERTISSEUR UNIVERSEL D'UNITÉS
Couvre TOUTES les catégories suivantes :

Longueur, 2. Masse, 3. Temps, 4. Température, 5. Volume, 6. Surface, 7. Vitesse, 8. Énergie, 9. Pression, 10. Données numériques, 11. Fréquence, 12. Angle, 13. Devise, 14. Cuisine

Interface : deux champs synchronisés, menus déroulants avec recherche, bouton inverser, notation scientifique

📊 MODULE STATISTIQUES

Saisie de données : tableau dynamique pour entrer des valeurs (ou collage depuis Excel)

Calculs automatiques :

Moyenne, médiane, mode

Écart-type (population et échantillon), variance

Minimum, maximum, étendue

Quartiles (Q1, Q2, Q3), déciles

Somme, nombre d'éléments

Visualisation :

Histogramme interactif (nombre de classes ajustable)

Boîte à moustaches (box plot)

Courbe de distribution normale superposée

Régression linéaire :

Saisie de paires (x, y)

Calcul de la droite de régression y = ax + b

Coefficient de corrélation r et r²

Tracé des points et de la droite de régression sur un graphique

Affichage de l'équation et des résidus

🔢 MODULE CALCUL MATRICIEL

Création de matrices : taille ajustable (jusqu'à 10x10)

Saisie des éléments dans une grille

Opérations supportées :

Addition, soustraction, multiplication de matrices

Multiplication par un scalaire

Transposition

Déterminant (pour matrices carrées)

Inverse (si elle existe, avec message d'erreur si matrice singulière)

Valeurs propres et vecteurs propres (pour matrices carrées)

Rang de la matrice

Trace

Affichage : résultats formatés en notation mathématique, option d'export en LaTeX

Opérations entre plusieurs matrices (A + B, A × B, etc.)

⚙️ AUTRES FONCTIONNALITÉS PRO

Calculs de programmation : conversions Décimal ↔ Hexadécimal ↔ Binaire ↔ Octal

Opérations bit à bit : AND, OR, XOR, NOT, shift left/right

Calculs financiers : pourcentage d'évolution, TVA, règle de trois, intérêt simple/composé

Équations différentielles (sous-module) :

Saisie d'une EDO du premier ordre : dy/dx = f(x, y)

Condition initiale : y(x₀) = y₀

Intervalle d'intégration : [a, b]

Méthodes numériques : Euler explicite, Euler amélioré, Runge-Kutta d'ordre 4

Pas de discrétisation ajustable (slider)

Visualisation : tracé de la solution sur le graphique

Comparaison des 3 méthodes sur le même graphique (couleurs différentes)

Affichage du tableau de valeurs (x, y)

🎨 DESIGN & UX (OBLIGATOIRE)

Style Glassmorphism premium avec fond mesh gradient animé

Transitions fluides entre les 3 modes (animation de fondu + slide, durée 300ms)

Responsive parfait : mobile, tablette, desktop

Typographie : Inter pour l'UI, JetBrains Mono pour les chiffres, KaTeX ou MathJax pour les formules mathématiques

Dark mode par défaut avec toggle pour light mode

Feedback haptique visuel : boutons avec effet de pression, glow au survol, ripple effect au clic

Animations d'erreur : shake + message stylisé (pas juste "Error")

Navigation intuitive : sous-menus déroulants ou accordéons pour accéder aux modules (graphique, intégrales, dérivées, stats, matrices, équa diff)

⚙️ TECHNIQUE & CODE

Utilise des variables CSS pour tout le theming

Pas de eval() : implémente un vrai parser mathématique (Shunting-yard algorithm ou AST) pour gérer l'ordre des opérations

Pour les dérivées symboliques : implémente un moteur de manipulation symbolique (arbre de syntaxe abstraite avec règles de dérivation)

Pour le mode graphique : API Canvas HTML5, système de coordonnées monde/écran pour zoom/pan

Pour les intégrales : méthode de Simpson avec gestion des cas limites

Pour les équations différentielles : implémentation propre des 3 méthodes (Euler, Euler amélioré, RK4)

Pour les statistiques : calculs optimisés, gestion des grandes datasets

Pour les matrices : algorithmes efficaces (LU decomposition pour le déterminant, QR pour les valeurs propres)

Architecture du convertisseur basée sur une valeur pivot

Code modulaire, commenté en français, avec des fonctions séparées pour chaque mode/module

Gestion des erreurs : division par zéro, overflow, syntaxe invalide, matrice non inversible, EDO instable

Persistance locale (localStorage) : sauvegarde du dernier mode, historique, thème, données des modules

🎁 BONUS WOW (si tu peux)

Raccourcis clavier : Ctrl+1/2/3 pour changer de mode, Ctrl+K pour recherche convertisseur, Ctrl+I pour intégrales, Ctrl+D pour dérivées

Son de clic optionnel via Web Audio API

Bouton "Copier le résultat" avec feedback visuel

Pour les dérivées : affichage de la primitive exacte si connue

Pour les statistiques : export des données en CSV

Pour les matrices : affichage en notation LaTeX copiable

Pour les EDO : animation de la solution qui se trace progressivement

Génère le code COMPLET et FONCTIONNEL. Je veux une vraie application professionnelle, pas une démo."

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/76d7e192-442c-47a2-8083-766509d8fc3e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
