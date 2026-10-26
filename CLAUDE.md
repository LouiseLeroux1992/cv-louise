# Documentation du projet CV Louise

## Résumé du projet
Portfolio personnel de Louise Leroux - Développeuse Fullstack & Illustratrice
- **URL production** : https://louiseleroux.fr (domaine canonique)
  - https://lerouxlouise.fr redirige en 301 vers le domaine canonique
  - https://cv-louise.vercel.app (domaine Vercel par défaut)
- **Stack** : Next.js 14, TypeScript, Tailwind CSS, next-intl (i18n FR/EN)
- **Hébergement** : Vercel
- **Domaines** : les deux chez Gandi
  - `lerouxlouise.fr` : DNS gérés par Vercel (nameservers Vercel)
  - `louiseleroux.fr` : DNS gérés par Gandi LiveDNS, acheté le 21/10/2026
- **Domaine dans le code** : défini une seule fois dans `src/lib/site.ts` (`SITE_DOMAIN`). `layout.tsx`, `sitemap.ts` et `robots.ts` l'importent — ne jamais réécrire l'URL en dur.

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
Le formulaire **fonctionne en production** (vérifié le 26/10/2026, les mails
arrivent bien sur louiseleroux1992@gmail.com), donc `RESEND_API_KEY` est bien
configurée sur Vercel.

L'expéditeur reste `contact@lerouxlouise.fr` dans `src/app/api/contact/route.ts`.
Il n'a **volontairement pas** été basculé sur le nouveau domaine : Resend refuse
d'envoyer depuis un domaine non vérifié, changer le `from:` avant la vérification
casserait le formulaire.

Ce n'est pas urgent : le `from:` n'est jamais vu par le visiteur (le mail part vers
la boîte Gmail de Louise, et le `replyTo` porte l'adresse du visiteur). **Seule
condition : garder `lerouxlouise.fr` actif et vérifié chez Resend.** Le jour où ce
domaine ne serait pas renouvelé, le formulaire casserait sans prévenir — basculer
le `from:` AVANT de laisser expirer le domaine.
- [ ] **Vérifier `louiseleroux.fr` dans Resend** (https://resend.com/domains)
  - Ajouter les enregistrements SPF et DKIM dans **Gandi LiveDNS** (et non Vercel :
    ce domaine-ci n'est pas délégué à Vercel, contrairement à `lerouxlouise.fr`)
  - Une fois le domaine vérifié, et seulement à ce moment, modifier le `from:` :
    ```typescript
    from: "Louise Leroux <contact@louiseleroux.fr>"
    ```

### Domaine louiseleroux.fr - à finir côté Vercel
- [ ] Ajouter `louiseleroux.fr` et `www.louiseleroux.fr` dans Vercel (Settings → Domains)
- [ ] Créer les enregistrements DNS **avec les valeurs affichées par Vercel** dans Gandi LiveDNS
- [ ] Définir `louiseleroux.fr` comme domaine de production (primaire)
- [ ] Passer `lerouxlouise.fr` en « Redirect to » vers `louiseleroux.fr` (301)
- [ ] Déclarer la nouvelle propriété dans Google Search Console et soumettre le sitemap
- [ ] **Réactiver le renouvellement automatique** chez Gandi : il est désactivé, le
      domaine expire le 21/10/2027

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
