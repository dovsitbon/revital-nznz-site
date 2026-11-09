# Revital Nznz – informations à lui demander

Tout ce qui manque est marqué « à remplir » dans `data/*.json`. Rien n'a été inventé : ni prix, ni avis, ni adresse, ni nombre d'invités.

## Ce qu'on a trouvé (Instagram @revital_nznz, consulté le 9 novembre 2026)

- **Bio** : « רויטל נצנץ – הפקת אירועים / עיצוב שמלות כלה וערב, שמלות חינה / קולקציה עשירה ועיצוב חינה יוקרתית / 0522508310 ». 10 100 abonnés.
- **Liens de la bio** : le bit.ly (bit.ly/2vxAtEw) ouvre simplement une conversation WhatsApp avec le 052-250-8310. Pas de catalogue ni de formulaire. Le deuxième lien est son profil Threads. Une ancienne légende (2020) cite aussi une page Facebook professionnelle (bit.ly/2W6YwtB), qui n'a pas été vérifiée.
- **Logo** : on le voit en filigrane sur ses photos de studio : un « R » calligraphié doré surmonté d'une couronne, avec « רויטל נצנץ » et « הפקות חינה ושמלות כלה ». Il est redessiné en SVG dans `components/Logo.tsx`. Il faudra le remplacer par le fichier original si elle l'a.
- **Ville** : probablement **Shoham (שוהם)**. Elle utilise le hashtag #שוהם, et ses livraisons de la Mimouna 2020 étaient faites « à Shoham et environs ». Tant que ce n'est pas confirmé, la ville n'est affichée nulle part (`data/site.json` → `city.confirmed`).
- **Prix trouvés** (anciens, juin 2021) : « robes de soirée de créatrice à vendre à partir de 600 ₪ ». Ce prix n'est pas affiché sur le site ; il faut le confirmer ou le mettre à jour.
- **Ce qu'inclut la production de henné**, d'après sa publication de décembre 2025 : talamon pour les mariés, caftans pour la mariée, le marié et la famille, tapis du talamon, long tapis d'entrée, pont d'accueil, table du bol de henné, table de gâteaux marocains et souk de fruits secs. En avril 2026, elle ajoute « tenue du marié et de la mariée, et animations ».
- Le **henné de sa fille Stav** (25 février 2026, « venu tout droit du Maroc ») est cité dans « À propos ». Il faut vérifier qu'elle est d'accord. La robe de henné blanche du hero est celle de cette soirée.

## À demander à Revital

1. **Adresse du showroom et horaires** → `data/site.json` (`showroom.address`, `city.confirmed = true`) et `data/horaires.json`.
2. **Location, vente ou création sur mesure**, robe par robe ou par catégorie, et **les prix** (« à partir de ») si elle veut les afficher → `data/collection.json` (`mode`, `priceFrom`, `showPrices`).
3. **Formules de production de soirée henné** : noms, contenu, prix « à partir de » → `data/formules-henne.json` (`packages`).
4. **Régions où elle produit** des soirées henné → `data/formules-henne.json` (`regions`).
5. **Son histoire** : depuis quand, comment elle a commencé, l'atelier, sa signature. Le texte actuel de « À propos » est court et à compléter.
6. **De vrais avis de clientes**, avec leur accord (prénom seulement) → `data/avis.json`. Elle publie souvent les messages de ses mariées (ex. « גלי ודביר », mai 2026).
7. **Photos et vidéos en bonne qualité**, surtout :
   - robes de mariée récentes (les photos de studio datent de 2019 à 2021, avec un filtre vignette) ;
   - photos de la collection actuelle, de face, sur fond neutre ;
   - vidéos de soirées sans le son d'origine, ou avec son accord pour la musique.
   Emplacements prévus : `assets/` (`hero/`, `robes-mariee/`, `robes-soiree/`, `robes-henne/`, `soirees-henne/`, `galerie/`), puis `npm run media`.
8. **Le logo original** (SVG, PDF ou PNG haute définition), s'il existe.
9. **Lieu et nombre d'invités** de chaque soirée de la grille Réalisations → `data/realisations.json`. Faut-il citer les prénoms des couples ? (non publiés pour l'instant)
10. **Acompte** : montant et mode de paiement. Le paiement en ligne est prévu mais désactivé (`data/site.json` → `payments`).
11. **Crédits photo** : le reel henné « Stav & Yehuda » vient de la photographe @shir_bd, et certaines photos de studio sont signées « ISHAY MALKI ». Ces images-là ne sont pas utilisées ; pour celles du site, faut-il créditer quelqu'un ?
12. **Bandeau d'infos** : prochaine nouvelle collection, fermetures (fêtes) → `data/annonces.json`.
