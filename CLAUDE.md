# Documentation du projet CV Louise

## Résumé du projet
Portfolio personnel de Louise Leroux - Développeuse Fullstack & Illustratrice
- **URL production** : https://lerouxlouise.fr (+ https://cv-louise.vercel.app)
- **Stack** : Next.js 14, TypeScript, Tailwind CSS, next-intl (i18n FR/EN)
- **Hébergement** : Vercel
- **Domaine** : Gandi (DNS gérés par Vercel)

## Ce qui a été fait

### Structure du site
- [x] Page d'accueil avec Hero (titre, sous-titre, 2 cards services, bouton contact)
- [x] Page À propos (bio, expériences, formations, compétences, téléchargement CV)
- [x] Page Contact (formulaire, infos de contact, réseaux sociaux)
- [x] Page Services Développement
- [x] Page Services Illustration (refaite avec ton personnel/passion)
- [x] Footer avec liens sociaux (GitHub, LinkedIn, Instagram)
- [x] Thème clair/sombre
- [x] Internationalisation FR/EN

### Contenu personnalisé
- [x] Données du CV intégrées (expériences, formations, compétences)
- [x] Bio personnalisée
- [x] Liens sociaux corrects :
  - GitHub: https://github.com/LouiseLeroux1992
  - LinkedIn: https://www.linkedin.com/in/louise-leroux-dev/
  - Instagram: https://www.instagram.com/louise.maviepassionnante
- [x] Email: louiseleroux1992@gmail.com
- [x] Localisation: Île-de-France
- [x] CV PDF téléchargeable (`/public/cv-louise-leroux.pdf`)

### Formulaire de contact
- [x] Intégration Resend pour l'envoi d'emails
- [x] API route `/api/contact`
- [x] Gestion des erreurs côté client
- [x] Variable d'environnement `RESEND_API_KEY` configurée en local

### Corrections de texte
- [x] "digital" → "numérique" partout en français
- [x] Descriptions des services concises avec bullet points
- [x] Section Illustration refaite avec ton personnel (passion, sélection des projets)

## En cours / À faire

### Formulaire de contact - Domaine personnalisé
- [ ] **Configurer le domaine `lerouxlouise.fr` dans Resend** pour envoyer depuis `contact@lerouxlouise.fr`
  - Ajouter le domaine dans Resend (https://resend.com/domains)
  - Ajouter les enregistrements DNS (SPF, DKIM) dans **Vercel** (pas Gandi, car DNS gérés par Vercel)
  - Vérifier le domaine dans Resend
  - Modifier `src/app/api/contact/route.ts` ligne `from:` :
    ```typescript
    from: "Louise Leroux <contact@lerouxlouise.fr>"
    ```
- [ ] **Ajouter `RESEND_API_KEY` sur Vercel** : Settings → Environment Variables

### Portfolio Illustration
- [ ] Créer des pages dédiées par projet :
  - `/illustration/projets/livre-jeunesse`
  - `/illustration/projets/bd-labo`
  - `/illustration/projets/bd-instagram`
- [ ] Scanner et ajouter les illustrations réelles
- [ ] Remplacer les placeholders de la galerie

### Améliorations futures possibles
- [ ] SEO : Open Graph images personnalisées
- [ ] Analytics (Vercel Analytics ou Plausible)
- [ ] Page 404 personnalisée
- [ ] Animations de chargement

## Structure des fichiers importants

```
src/
├── app/
│   ├── api/contact/route.ts      # API Resend
│   ├── [locale]/
│   │   ├── page.tsx              # Accueil
│   │   ├── contact/page.tsx      # Contact
│   │   ├── a-propos/page.tsx     # À propos
│   │   └── services/
│   │       ├── developpement/page.tsx
│   │       └── illustration/page.tsx
│   └── layout.tsx                # Metadata SEO
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/
│       └── Hero.tsx              # Hero page d'accueil
├── data/
│   ├── experiences.ts
│   ├── education.ts
│   └── skills.ts
messages/
├── fr.json                       # Traductions FR
└── en.json                       # Traductions EN
public/
└── cv-louise-leroux.pdf          # CV téléchargeable
.env.local                        # RESEND_API_KEY (non commité)
.env.example                      # Template des variables d'env
```

## Commandes utiles

```bash
npm run dev      # Serveur de développement
npm run build    # Build production
npm run lint     # Linting
```

## Notes
- Les DNS du domaine sont gérés par Vercel (pas Gandi)
- Le formulaire de contact fonctionne en local, mais nécessite la config Vercel pour la prod
- Régénérer la clé API Resend si compromise
