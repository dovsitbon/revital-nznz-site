# Revital Nznz – רויטל נצנץ : contenu du site

Tous les textes du site, dans les 4 langues, à relire et valider avec Revital.
Fichiers sources : `locales/he.json`, `fr.json`, `en.json`, `es.json` (ce fichier est généré par `npm run contenu`).
Données datées à remplir dans `data/` : `annonces.json` (bandeau), `horaires.json` (showroom), `collection.json` (robes, location/achat, prix « à partir de »),
`formules-henne.json` (formules et régions), `realisations.json` (lieu et nombre d'invités), `dates.json` (dates prises), `avis.json` (vrais avis),
`site.json` (ville, adresse du showroom, paiement d'acompte – désactivé).
La liste des informations à demander à Revital est dans **INFOS-A-DEMANDER.md**.

## Grand titre du hero : 3 propositions

1. **נוצצת מהחינה ועד החופה** – « Éblouissante, du henné à la houppa » *(retenue sur le site ; joue sur « נצנץ », paillette)*
2. **כל כלה היא מלכה** – « Chaque mariée est une reine » *(reprend la couronne de son logo et son « הממלכה שלי »)*
3. **שמלה שנתפרת בשבילך, חינה שזוכרים שנים** – « Une robe cousue pour vous, un henné dont on se souvient des années »

Pour changer : `hero.title` dans les 4 fichiers `locales/*.json`.


## Référencement (titres Google et descriptions, par page)

**`meta.title`**

- עברית : שמלות חינה, שמלות כלה וערב והפקת אירועי חינה | רויטל נצנץ
- Français : Robes de henné, robes de mariée et de soirée, soirées henné de luxe | Revital Nznz
- English : Henna Dresses, Bridal & Evening Gowns and Luxury Henna Party Production | Revital Nznz
- Español : Vestidos de henna, vestidos de novia y de fiesta, y producción de fiestas de henna | Revital Nznz

**`meta.titleCity`**

- עברית : שמלות חינה, שמלות כלה וערב והפקת אירועי חינה ב{city} | רויטל נצנץ
- Français : Robes de henné, robes de mariée et de soirée, soirées henné à {city} | Revital Nznz
- English : Henna Dresses, Bridal & Evening Gowns and Henna Party Production in {city} | Revital Nznz
- Español : Vestidos de henna, vestidos de novia y de fiesta, y fiestas de henna en {city} | Revital Nznz

**`meta.description`**

- עברית : רויטל נצנץ: עיצוב שמלות כלה וערב בתפירה אישית, השכרת שמלות חינה וקפטנים, והפקת אירועי חינה מרוקאיים יוקרתיים – טלמון, שולחן עוגיות ושוק פיצוחים. לתיאום מדידה בוואטסאפ.
- Français : Revital Nznz crée des robes de mariée et de soirée sur mesure, loue des robes de henné et des caftans, et produit des soirées henné marocaines de luxe : talamon, gâteaux faits main, souk d'épices. Rendez-vous d'essayage sur WhatsApp.
- English : Revital Nznz designs made-to-measure bridal and evening gowns, rents henna dresses and kaftans, and produces luxury Moroccan henna parties: talamon, handmade cookies, spice market. Book a fitting on WhatsApp.
- Español : Revital Nznz diseña vestidos de novia y de fiesta a medida, alquila vestidos de henna y caftanes, y produce fiestas de henna marroquíes de lujo: talamón, dulces caseros y zoco de especias. Pide tu cita por WhatsApp.

**`meta.pages.bridal.title`**

- עברית : שמלות כלה בתפירה אישית | רויטל נצנץ
- Français : Robes de mariée sur mesure | Revital Nznz
- English : Made-to-Measure Bridal Gowns | Revital Nznz
- Español : Vestidos de novia a medida | Revital Nznz

**`meta.pages.bridal.description`**

- עברית : שמלות כלה שנתפרות לפי בקשת הכלה: תחרה, טול, שרוולי פעמון. פגישת עיצוב ומדידות בשואורום של רויטל נצנץ, בתיאום מראש.
- Français : Des robes de mariée cousues selon les envies de chaque mariée : dentelle, tulle, manches évasées. Rendez-vous de création et essayages au showroom de Revital Nznz.
- English : Bridal gowns sewn to each bride's wishes: lace, tulle, bell sleeves. Design meeting and fittings at Revital Nznz's showroom, by appointment.
- Español : Vestidos de novia confeccionados según los deseos de cada novia: encaje, tul, mangas acampanadas. Cita de diseño y pruebas en el showroom de Revital Nznz.

**`meta.pages.evening.title`**

- עברית : שמלות ערב להשכרה ולמכירה | רויטל נצנץ
- Français : Robes de soirée à louer ou à acheter | Revital Nznz
- English : Evening Dresses to Rent or Buy | Revital Nznz
- Español : Vestidos de fiesta en alquiler o venta | Revital Nznz

**`meta.pages.evening.description`**

- עברית : שמלות ערב מעוצבות להשכרה או לרכישה: זהב, כסף, תחרה, גלימות. כל שמלה ביחידה אחת. מדידה בשואורום בתיאום מראש.
- Français : Robes de soirée de créatrice à louer ou à acheter : or, argent, dentelle, capes. Chaque robe est une pièce unique. Essayage au showroom sur rendez-vous.
- English : Designer evening dresses to rent or buy: gold, silver, lace, capes. Each dress is one of a kind. Showroom fittings by appointment.
- Español : Vestidos de fiesta de diseño para alquilar o comprar: oro, plata, encaje, capas. Cada vestido es pieza única. Pruebas en el showroom con cita previa.

**`meta.pages.henna.title`**

- עברית : שמלות חינה וקפטנים להשכרה | רויטל נצנץ
- Français : Robes de henné et caftans à louer | Revital Nznz
- English : Henna Dresses and Kaftans to Rent | Revital Nznz
- Español : Vestidos de henna y caftanes en alquiler | Revital Nznz

**`meta.pages.henna.description`**

- עברית : שמלות חינה, קפטנים וגלימות לכלה, לחתן ולמשפחה. עיצוב חינה יוקרתי בהשראה מרוקאית, מדידה בתיאום מראש.
- Français : Robes de henné, caftans et capes pour la mariée, le marié et la famille. Un henné luxueux d'inspiration marocaine, essayage sur rendez-vous.
- English : Henna dresses, kaftans and capes for the bride, the groom and the family. Luxurious Moroccan-inspired henna styling, fittings by appointment.
- Español : Vestidos de henna, caftanes y capas para la novia, el novio y la familia. Estilo de henna lujoso de inspiración marroquí, pruebas con cita previa.

**`meta.pages.production.title`**

- עברית : הפקת אירועי חינה יוקרתיים | רויטל נצנץ
- Français : Production de soirées henné de luxe | Revital Nznz
- English : Luxury Henna Party Production | Revital Nznz
- Español : Producción de fiestas de henna de lujo | Revital Nznz

**`meta.pages.production.description`**

- עברית : הפקת חינה מרוקאית מלאה: טלמון לכלה ולחתן, קפטנים, שטיחים וגשר קבלת פנים, שולחן קערת חינה, עוגיות מרוקאיות בעבודת יד ושוק פיצוחים.
- Français : Soirée henné marocaine clés en main : talamon pour les mariés, caftans, tapis et pont d'accueil, table du bol de henné, gâteaux marocains faits main et souk de fruits secs.
- English : Full Moroccan henna production: talamon for the couple, kaftans, carpets and welcome bridge, henna bowl table, handmade Moroccan cookies and a nut and spice market.
- Español : Fiesta de henna marroquí completa: talamón para los novios, caftanes, alfombras y puente de bienvenida, mesa del cuenco de henna, dulces marroquíes caseros y zoco de frutos secos.

**`meta.pages.legal.title`**

- עברית : מידע משפטי ופרטיות | רויטל נצנץ
- Français : Mentions légales et confidentialité | Revital Nznz
- English : Legal & Privacy | Revital Nznz
- Español : Aviso legal y privacidad | Revital Nznz

**`meta.pages.legal.description`**

- עברית : פרטי האתר, מדיניות פרטיות וזכויות על התמונות.
- Français : Informations sur le site, confidentialité et droits sur les images.
- English : Site details, privacy policy and image rights.
- Español : Datos del sitio, privacidad y derechos de las imágenes.

## Menu

**`nav.skip`**

- עברית : דלגי לתוכן
- Français : Aller au contenu
- English : Skip to content
- Español : Ir al contenido

**`nav.menu`**

- עברית : תפריט
- Français : Menu
- English : Menu
- Español : Menú

**`nav.close`**

- עברית : סגירה
- Français : Fermer
- English : Close
- Español : Cerrar

**`nav.home`**

- עברית : רויטל נצנץ – לדף הבית
- Français : Revital Nznz – accueil
- English : Revital Nznz – home
- Español : Revital Nznz – inicio

**`nav.language`**

- עברית : שפה
- Français : Langue
- English : Language
- Español : Idioma

**`nav.book`**

- עברית : לתיאום מדידה
- Français : Prendre rendez-vous
- English : Book a fitting
- Español : Pedir cita

**`nav.bridal`**

- עברית : שמלות כלה
- Français : Mariée
- English : Bridal
- Español : Novia

**`nav.evening`**

- עברית : שמלות ערב
- Français : Soirée
- English : Evening
- Español : Fiesta

**`nav.henna`**

- עברית : שמלות חינה
- Français : Robes de henné
- English : Henna dresses
- Español : Vestidos de henna

**`nav.production`**

- עברית : הפקת חינה
- Français : Soirées henné
- English : Henna parties
- Español : Fiestas de henna

**`nav.about`**

- עברית : עליי
- Français : Revital
- English : About
- Español : Revital

**`nav.contact`**

- עברית : צור קשר
- Français : Contact
- English : Contact
- Español : Contacto

## Bandeau d'infos (le texte lui-même est dans data/annonces.json)

**`infobar.close`**

- עברית : סגירת ההודעה
- Français : Fermer ce message
- English : Close this notice
- Español : Cerrar este aviso

## Ouverture

**`intro.skip`**

- עברית : דלג
- Français : Passer
- English : Skip
- Español : Saltar

## Hero (titre retenu : option 1, voir plus haut)

**`hero.eyebrow`**

- עברית : שמלות כלה · ערב · חינה · הפקת אירועי חינה
- Français : Mariée · Soirée · Henné · Production de soirées henné
- English : Bridal · Evening · Henna · Henna party production
- Español : Novia · Fiesta · Henna · Producción de fiestas de henna

**`hero.title`**

- עברית : נוצצת מהחינה ועד החופה
- Français : Éblouissante, du henné à la houppa
- English : Shining from the henna to the chuppah
- Español : Radiante, de la henna a la jupá

**`hero.lead`**

- עברית : שמלות כלה וערב בתפירה אישית, שמלות וקפטנים לחינה, והפקת ערב חינה מרוקאי מלא – מהטלמון ועד שולחן העוגיות.
- Français : Robes de mariée et de soirée sur mesure, robes de henné et caftans, et une soirée henné marocaine complète, du talamon à la table de gâteaux.
- English : Made-to-measure bridal and evening gowns, henna dresses and kaftans, and a full Moroccan henna night – from the talamon to the cookie table.
- Español : Vestidos de novia y de fiesta a medida, vestidos de henna y caftanes, y una noche de henna marroquí completa, del talamón a la mesa de dulces.

**`hero.ctaFitting`**

- עברית : לתיאום מדידה
- Français : Prendre rendez-vous
- English : Book a fitting
- Español : Pedir cita

**`hero.ctaHenna`**

- עברית : להפקת חינה
- Français : Organiser mon henné
- English : Plan a henna party
- Español : Organizar mi henna

**`hero.proof`**

- עברית : {n} עוקבים באינסטגרם
- Français : {n} abonnés sur Instagram
- English : {n} Instagram followers
- Español : {n} seguidores en Instagram

**`hero.scroll`**

- עברית : לגלול
- Français : Défiler
- English : Scroll
- Español : Desplazar

## Cartes portrait

**`cards.eyebrow`**

- עברית : מה תמצאי אצלי
- Français : Ce que vous trouverez ici
- English : What you will find here
- Español : Lo que encontrarás aquí

**`cards.title`**

- עברית : ארבעה עולמות, יד אחת
- Français : Quatre univers, une même main
- English : Four worlds, one pair of hands
- Español : Cuatro mundos, una misma mano

**`cards.items.bridal.title`**

- עברית : שמלות כלה
- Français : Robes de mariée
- English : Bridal gowns
- Español : Vestidos de novia

**`cards.items.bridal.text`**

- עברית : נתפרות לפי החלום שלך, עם דגש על רגש.
- Français : Cousues autour de votre rêve, l'émotion d'abord.
- English : Sewn around your dream, with feeling first.
- Español : Cosidos alrededor de tu sueño, con el corazón primero.

**`cards.items.bridal.cta`**

- עברית : לשמלות הכלה
- Français : Voir les robes de mariée
- English : See bridal gowns
- Español : Ver vestidos de novia

**`cards.items.evening.title`**

- עברית : שמלות ערב
- Français : Robes de soirée
- English : Evening dresses
- Español : Vestidos de fiesta

**`cards.items.evening.text`**

- עברית : להשכרה או לרכישה, כל שמלה ביחידה אחת.
- Français : À louer ou à acheter, chacune en un seul exemplaire.
- English : To rent or to buy, each one of a kind.
- Español : Para alquilar o comprar, cada uno pieza única.

**`cards.items.evening.cta`**

- עברית : לשמלות הערב
- Français : Voir les robes de soirée
- English : See evening dresses
- Español : Ver vestidos de fiesta

**`cards.items.henna.title`**

- עברית : שמלות חינה
- Français : Robes de henné
- English : Henna dresses
- Español : Vestidos de henna

**`cards.items.henna.text`**

- עברית : קפטנים, גלימות ושמלות לכלה ולמשפחה.
- Français : Caftans, capes et robes pour la mariée et la famille.
- English : Kaftans, capes and gowns for the bride and family.
- Español : Caftanes, capas y vestidos para la novia y la familia.

**`cards.items.henna.cta`**

- עברית : לשמלות החינה
- Français : Voir les robes de henné
- English : See henna dresses
- Español : Ver vestidos de henna

**`cards.items.production.title`**

- עברית : הפקת חינה
- Français : Soirées henné
- English : Henna parties
- Español : Fiestas de henna

**`cards.items.production.text`**

- עברית : ערב חינה מרוקאי מלא, מהעיצוב ועד העוגיות.
- Français : Un henné marocain complet, du décor aux gâteaux.
- English : A complete Moroccan henna night, décor to cookies.
- Español : Una henna marroquí completa, de la decoración a los dulces.

**`cards.items.production.cta`**

- עברית : להפקת חינה
- Français : Organiser mon henné
- English : Plan a henna party
- Español : Organizar mi henna

## La collection (robes dans data/collection.json)

**`collection.eyebrow`**

- עברית : הקולקציה
- Français : La collection
- English : The collection
- Español : La colección

**`collection.title`**

- עברית : שמלות שנבחרו מהארון של רויטל
- Français : Quelques pièces de la garde-robe de Revital
- English : Pieces from Revital's wardrobe
- Español : Piezas del armario de Revital

**`collection.lead`**

- עברית : מבחר מהקולקציה. בשואורום מחכות עוד הרבה שמלות – את המלאי המעודכן תראי בפגישה.
- Français : Une sélection de la collection. Beaucoup d'autres robes vous attendent au showroom : vous verrez celles qui sont disponibles lors de l'essayage.
- English : A selection from the collection. Many more dresses wait in the showroom – you will see what is available at your fitting.
- Español : Una selección de la colección. En el showroom te esperan muchos más vestidos: verás los disponibles en tu prueba.

**`collection.filtersLabel`**

- עברית : סינון לפי סוג שמלה
- Français : Filtrer par type de robe
- English : Filter by type of dress
- Español : Filtrar por tipo de vestido

**`collection.filters.all`**

- עברית : הכול
- Français : Tout
- English : All
- Español : Todos

**`collection.filters.mariee`**

- עברית : כלה
- Français : Mariée
- English : Bridal
- Español : Novia

**`collection.filters.soiree`**

- עברית : ערב
- Français : Soirée
- English : Evening
- Español : Fiesta

**`collection.filters.henne`**

- עברית : חינה
- Français : Henné
- English : Henna
- Español : Henna

**`collection.modes.custom`**

- עברית : בתפירה אישית
- Français : Sur mesure
- English : Made to measure
- Español : A medida

**`collection.modes.rental`**

- עברית : להשכרה
- Français : À louer
- English : To rent
- Español : En alquiler

**`collection.modes.sale`**

- עברית : למכירה
- Français : À acheter
- English : To buy
- Español : En venta

**`collection.modes.rental-sale`**

- עברית : להשכרה או לרכישה
- Français : À louer ou à acheter
- English : To rent or buy
- Español : En alquiler o venta

**`collection.priceFrom`**

- עברית : החל מ־{price}
- Français : À partir de {price}
- English : From {price}
- Español : Desde {price}

**`collection.priceOnRequest`**

- עברית : מחיר בפגישה
- Français : Prix au rendez-vous
- English : Price at the fitting
- Español : Precio en la cita

**`collection.ask`**

- עברית : לשאול על השמלה
- Français : Demander cette robe
- English : Ask about this dress
- Español : Preguntar por este vestido

**`collection.askMessage`**

- עברית : היי רויטל, ראיתי באתר את השמלה {ref} ({name}) ואשמח לפרטים.
- Français : Bonjour Revital, j'ai vu la robe {ref} ({name}) sur votre site et j'aimerais en savoir plus.
- English : Hi Revital, I saw dress {ref} ({name}) on your website and would love more details.
- Español : Hola Revital, vi el vestido {ref} ({name}) en tu web y me encantaría saber más.

**`collection.count`**

- עברית : {n} שמלות
- Français : {n} robes
- English : {n} dresses
- Español : {n} vestidos

**`collection.open`**

- עברית : להגדלת התמונה
- Français : Agrandir la photo
- English : Enlarge the photo
- Español : Ampliar la foto

**`collection.prev`**

- עברית : התמונה הקודמת
- Français : Photo précédente
- English : Previous photo
- Español : Foto anterior

**`collection.next`**

- עברית : התמונה הבאה
- Français : Photo suivante
- English : Next photo
- Español : Foto siguiente

**`collection.more`**

- עברית : לעוד שמלות
- Français : Voir plus de robes
- English : See more dresses
- Español : Ver más vestidos

## Production de soirées henné (formules dans data/formules-henne.json)

**`henna.eyebrow`**

- עברית : הפקת אירועי חינה
- Français : Production de soirées henné
- English : Henna party production
- Español : Producción de fiestas de henna

**`henna.title`**

- עברית : ערב חינה שעושים פעם בחיים
- Français : Le henné qu'on ne vit qu'une fois
- English : The henna night you only have once
- Español : La henna que se vive una sola vez

**`henna.lead`**

- עברית : רויטל מביאה את כל הקסם של מרוקו למקום אחד: עיצוב מלכותי, לבוש לכלה, לחתן ולמשפחה, ואווירה שלא שוכחים.
- Français : Revital réunit toute la magie du Maroc en un seul lieu : un décor royal, des tenues pour la mariée, le marié et la famille, et une ambiance qu'on n'oublie pas.
- English : Revital brings all the magic of Morocco under one roof: regal décor, outfits for the bride, the groom and the family, and an atmosphere nobody forgets.
- Español : Revital reúne toda la magia de Marruecos en un solo lugar: una decoración real, trajes para la novia, el novio y la familia, y un ambiente que nadie olvida.

**`henna.quote`**

- עברית : בשבילי חינה זה לא רק אירוע, זה להיכנס ללב של אנשים ולעשות הכל באהבה ענקית.
- Français : Pour moi, un henné n'est pas un simple événement : c'est entrer dans le cœur des gens et tout faire avec un immense amour.
- English : For me, a henna is not just an event. It is stepping into people's hearts and doing everything with enormous love.
- Español : Para mí, una henna no es solo un evento: es entrar en el corazón de la gente y hacerlo todo con muchísimo amor.

**`henna.includedTitle`**

- עברית : מה כוללת ההפקה
- Français : Ce que comprend la production
- English : What the production includes
- Español : Qué incluye la producción

**`henna.included.talamon`**

- עברית : טלמון מפואר לכלה ולחתן
- Français : Un talamon somptueux pour la mariée et le marié
- English : A grand talamon for the bride and groom
- Español : Un talamón espléndido para la novia y el novio

**`henna.included.kaftans`**

- עברית : קפטנים יוקרתיים לכלה, לחתן ולמשפחה
- Français : Des caftans de luxe pour la mariée, le marié et la famille
- English : Luxury kaftans for the bride, the groom and the family
- Español : Caftanes de lujo para la novia, el novio y la familia

**`henna.included.carpets`**

- עברית : שטיח טלמון, שטיח כניסה ארוך וגשר קבלת פנים
- Français : Tapis du talamon, long tapis d'entrée et pont d'accueil
- English : Talamon carpet, long entrance carpet and welcome bridge
- Español : Alfombra del talamón, larga alfombra de entrada y puente de bienvenida

**`henna.included.hennaTable`**

- עברית : שולחן מעוצב לקערת החינה
- Français : Une table dressée pour le bol de henné
- English : A styled table for the henna bowl
- Español : Una mesa decorada para el cuenco de henna

**`henna.included.cookies`**

- עברית : שולחן עוגיות מרוקאיות בעבודת יד
- Français : Une table de gâteaux marocains faits main
- English : A table of handmade Moroccan cookies
- Español : Una mesa de dulces marroquíes caseros

**`henna.included.market`**

- עברית : שוק פיצוחים ותבלינים בעיצוב אותנטי
- Français : Un souk de fruits secs et d'épices au décor authentique
- English : An authentic nut and spice market
- Español : Un zoco de frutos secos y especias de estilo auténtico

**`henna.included.design`**

- עברית : עיצוב מלא, מסורתי ומרשים, עם יחס אישי
- Français : Une décoration complète, traditionnelle et spectaculaire, suivie personnellement
- English : Full, traditional, striking design with personal attention
- Español : Decoración completa, tradicional e impactante, con trato personal

**`henna.included.attractions`**

- עברית : אטרקציות לערב, בתיאום איתך
- Français : Des animations pour la soirée, choisies avec vous
- English : Entertainment for the evening, planned with you
- Español : Espectáculos para la noche, elegidos contigo

**`henna.packagesTitle`**

- עברית : חבילות
- Français : Formules
- English : Packages
- Español : Paquetes

**`henna.custom`**

- עברית : כל ערב חינה מתומחר באופן אישי, לפי מספר האורחים, המקום ומה שתרצי לכלול.
- Français : Chaque soirée henné fait l'objet d'un devis personnalisé, selon le nombre d'invités, le lieu et ce que vous souhaitez inclure.
- English : Every henna night is priced personally, depending on the number of guests, the venue and what you would like to include.
- Español : Cada noche de henna se presupuesta de forma personal, según el número de invitados, el lugar y lo que quieras incluir.

**`henna.priceFrom`**

- עברית : החל מ־{price}
- Français : À partir de {price}
- English : From {price}
- Español : Desde {price}

**`henna.regions`**

- עברית : אזורי הפקה
- Français : Zones d'intervention
- English : Where Revital produces
- Español : Zonas de trabajo

**`henna.cta`**

- עברית : לבדיקת תאריך
- Français : Vérifier ma date
- English : Check your date
- Español : Consultar mi fecha

**`henna.video`**

- עברית : סיור בתפאורת חינה של רויטל (ללא קול)
- Français : Visite d'un décor de henné signé Revital (sans le son)
- English : A walk through one of Revital's henna sets (no sound)
- Español : Recorrido por una decoración de henna de Revital (sin sonido)

## Trois blocs alternés

**`blocks.atelier.eyebrow`**

- עברית : הסטודיו
- Français : L'atelier
- English : The studio
- Español : El taller

**`blocks.atelier.title`**

- עברית : שמלה שנבנית סביבך
- Français : Une robe construite autour de vous
- English : A dress built around you
- Español : Un vestido construido a tu alrededor

**`blocks.atelier.text`**

- עברית : שמלות כלה וערב בתפירה עילית, לפי בקשת הלקוחה. בוחרות יחד בד, גזרה ופרטים, ומודדות עד שהשמלה יושבת בדיוק.
- Français : Robes de mariée et de soirée en haute couture, réalisées selon les envies de chaque cliente. Vous choisissez ensemble le tissu, la coupe et les détails, puis les essayages s'enchaînent jusqu'à ce que la robe tombe parfaitement.
- English : Bridal and evening gowns in fine tailoring, made to each client's wishes. You choose fabric, cut and details together, and fit until the dress sits perfectly.
- Español : Vestidos de novia y de fiesta de alta costura, hechos según los deseos de cada clienta. Eligen juntas la tela, el corte y los detalles, y se prueba hasta que el vestido cae perfecto.

**`blocks.atelier.cta`**

- עברית : לקולקציה
- Français : Voir la collection
- English : See the collection
- Español : Ver la colección

**`blocks.day.eyebrow`**

- עברית : יום החינה
- Français : Le jour du henné
- English : Henna day
- Español : El día de la henna

**`blocks.day.title`**

- עברית : מהכניסה ועד הריקוד האחרון
- Français : De l'entrée à la dernière danse
- English : From the entrance to the last dance
- Español : De la entrada al último baile

**`blocks.day.text`**

- עברית : גשר קבלת פנים, שטיח ארוך, טלמון מואר, קערת חינה על שולחן מעוצב ושוק פיצוחים שכולם מצטלמים לידו.
- Français : Un pont d'accueil, un long tapis, un talamon illuminé, le bol de henné sur une table dressée et un souk d'épices devant lequel tout le monde veut sa photo.
- English : A welcome bridge, a long carpet, a glowing talamon, the henna bowl on a styled table and a spice market everyone wants a photo with.
- Español : Un puente de bienvenida, una larga alfombra, un talamón iluminado, el cuenco de henna sobre una mesa decorada y un zoco de especias donde todos quieren su foto.

**`blocks.day.cta`**

- עברית : להפקת חינה
- Français : Organiser mon henné
- English : Plan a henna party
- Español : Organizar mi henna

**`blocks.fitting.eyebrow`**

- עברית : המדידה
- Français : L'essayage
- English : The fitting
- Español : La prueba

**`blocks.fitting.title`**

- עברית : מודדות בשקט, בלי למהר
- Français : Essayer sans se presser
- English : Take your time trying on
- Español : Probarse sin prisas

**`blocks.fitting.text`**

- עברית : מדידה בשואורום בתיאום מראש בלבד, כך שהזמן כולו שלך. ספרי לרויטל על האירוע, והיא תכין שמלות שמתאימות לו.
- Français : Les essayages au showroom se font uniquement sur rendez-vous : le temps est tout à vous. Parlez de votre événement à Revital, elle préparera les robes qui lui conviennent.
- English : Showroom fittings are by appointment only, so the time is all yours. Tell Revital about your event and she will prepare dresses that suit it.
- Español : Las pruebas en el showroom son solo con cita previa, así que el tiempo es todo tuyo. Cuéntale a Revital sobre tu evento y te preparará los vestidos que le van.

**`blocks.fitting.cta`**

- עברית : לתיאום מדידה
- Français : Prendre rendez-vous
- English : Book a fitting
- Español : Pedir cita

## Réalisations (soirées dans data/realisations.json)

**`work.eyebrow`**

- עברית : הפקות אחרונות
- Français : Productions récentes
- English : Recent productions
- Español : Producciones recientes

**`work.title`**

- עברית : ערבי חינה שרויטל הפיקה
- Français : Soirées henné signées Revital
- English : Henna nights by Revital
- Español : Noches de henna de Revital

**`work.lead`**

- עברית : כל ערב בקונספט משלו. עוד רגעים מההפקות מחכים באינסטגרם.
- Français : Chaque soirée a son propre concept. D'autres moments vous attendent sur Instagram.
- English : Every night has its own concept. More moments are waiting on Instagram.
- Español : Cada noche tiene su propio concepto. Más momentos te esperan en Instagram.

**`work.guests`**

- עברית : {n} אורחים
- Français : {n} invités
- English : {n} guests
- Español : {n} invitados

**`work.more`**

- עברית : לעוד הפקות באינסטגרם
- Français : Plus de soirées sur Instagram
- English : More productions on Instagram
- Español : Más producciones en Instagram

**`work.play`**

- עברית : הפעלת הסרטון
- Français : Lire la vidéo
- English : Play the video
- Español : Reproducir el vídeo

**`work.pause`**

- עברית : עצירת הסרטון
- Français : Mettre la vidéo en pause
- English : Pause the video
- Español : Pausar el vídeo

## À propos de Revital (histoire à compléter avec elle)

**`about.eyebrow`**

- עברית : עליי
- Français : Qui suis-je
- English : About
- Español : Sobre mí

**`about.title`**

- עברית : רויטל נצנץ
- Français : Revital Nznz
- English : Revital Nznz
- Español : Revital Nznz

**`about.text.0`**

- עברית : אני מעצבת שמלות כלה וערב ומפיקה ערבי חינה. מה שמניע אותי הוא הרגע שבו כלה רואה את עצמה במראה, או נכנסת לחינה שלה וכל המשפחה נעמדת.
- Français : Je crée des robes de mariée et de soirée et je produis des soirées henné. Ce qui m'anime, c'est l'instant où une mariée se découvre dans le miroir, ou entre dans son henné et toute la famille se lève.
- English : I design bridal and evening gowns and produce henna nights. What drives me is the moment a bride sees herself in the mirror, or walks into her henna and the whole family rises.
- Español : Diseño vestidos de novia y de fiesta y produzco noches de henna. Lo que me mueve es el instante en que una novia se ve en el espejo, o entra en su henna y toda la familia se pone de pie.

**`about.text.1`**

- עברית : בפברואר 2026 זכיתי להפיק את החינה של בתי, ישר ממרוקו. את אותה תשומת לב אני מביאה לכל כלה שנכנסת לממלכה שלי.
- Français : En février 2026, j'ai eu la joie de produire le henné de ma propre fille, venu tout droit du Maroc. J'apporte ce même soin à chaque mariée qui entre dans mon royaume.
- English : In February 2026 I had the joy of producing my own daughter's henna, straight from Morocco. I bring that same care to every bride who walks into my kingdom.
- Español : En febrero de 2026 tuve la alegría de producir la henna de mi propia hija, directa de Marruecos. Pongo ese mismo cuidado en cada novia que entra en mi reino.

**`about.cta`**

- עברית : לשיחה עם רויטל בוואטסאפ
- Français : Écrire à Revital sur WhatsApp
- English : Talk to Revital on WhatsApp
- Español : Escribir a Revital por WhatsApp

## Avis (vrais avis dans data/avis.json)

**`reviews.eyebrow`**

- עברית : מילים של כלות
- Français : Paroles de mariées
- English : Brides' words
- Español : Palabras de novias

**`reviews.title`**

- עברית : מה כותבות אחרי החינה
- Français : Ce qu'elles écrivent après le henné
- English : What they write after the henna
- Español : Lo que escriben después de la henna

**`reviews.empty`**

- עברית : בקרוב כאן: מילים של כלות ומשפחות שרויטל ליוותה.
- Français : Bientôt ici : les mots des mariées et des familles que Revital a accompagnées.
- English : Coming soon: words from brides and families Revital has worked with.
- Español : Muy pronto: las palabras de novias y familias a las que Revital acompañó.

**`reviews.more`**

- עברית : לתגובות באינסטגרם
- Français : Lire les commentaires sur Instagram
- English : Read comments on Instagram
- Español : Leer comentarios en Instagram

## Questions fréquentes (réponses à valider)

**`faq.eyebrow`**

- עברית : שאלות
- Français : Questions
- English : Questions
- Español : Preguntas

**`faq.title`**

- עברית : שאלות שכלות שואלות
- Français : Les questions des mariées
- English : What brides often ask
- Español : Lo que preguntan las novias

**`faq.items.0.q`**

- עברית : כמה זמן לפני החתונה כדאי להגיע למדידה?
- Français : Combien de temps avant le mariage venir essayer ?
- English : How long before the wedding should I come for a fitting?
- Español : ¿Con cuánta antelación debo venir a probarme?

**`faq.items.0.a`**

- עברית : לשמלה בתפירה אישית כדאי להתחיל כמה חודשים מראש, כדי שיהיה זמן לעיצוב ולמדידות. לשמלת ערב או חינה להשכרה אפשר גם קרוב יותר לאירוע. רויטל תבנה איתך לוח זמנים לפי התאריך שלך.
- Français : Pour une robe sur mesure, mieux vaut commencer quelques mois à l'avance, pour laisser le temps à la création et aux essayages. Pour une robe de soirée ou de henné en location, plus près de la date peut aussi convenir. Revital établit avec vous un calendrier selon votre date.
- English : For a made-to-measure gown, start a few months ahead so there is time for design and fittings. For a rented evening or henna dress, closer to the date can work too. Revital will plan a schedule with you around your date.
- Español : Para un vestido a medida conviene empezar con algunos meses de antelación, para que haya tiempo de diseñar y hacer pruebas. Para un vestido de fiesta o de henna en alquiler, también puede ser más cerca de la fecha. Revital armará contigo un calendario según tu fecha.

**`faq.items.1.q`**

- עברית : השכרה, רכישה או תפירה אישית?
- Français : Location, achat ou sur mesure ?
- English : Rent, buy or made to measure?
- Español : ¿Alquiler, compra o a medida?

**`faq.items.1.a`**

- עברית : שמלות הערב זמינות להשכרה או לרכישה, שמלות הכלה נתפרות לפי בקשתך, והקפטנים לחינה מושכרים לכלה, לחתן ולמשפחה. בפגישה תשמעי מה מתאים לאירוע ולתקציב.
- Français : Les robes de soirée se louent ou s'achètent, les robes de mariée sont cousues selon vos envies, et les caftans de henné se louent pour la mariée, le marié et la famille. Au rendez-vous, vous saurez ce qui convient à votre événement et à votre budget.
- English : Evening dresses can be rented or bought, bridal gowns are sewn to your wishes, and henna kaftans are rented for the bride, the groom and the family. At the fitting you will hear what suits your event and budget.
- Español : Los vestidos de fiesta se alquilan o se compran, los de novia se cosen según tus deseos y los caftanes de henna se alquilan para la novia, el novio y la familia. En la cita sabrás qué encaja con tu evento y tu presupuesto.

**`faq.items.2.q`**

- עברית : האם יש התאמות ותיקונים?
- Français : Les retouches sont-elles prévues ?
- English : Are alterations included?
- Español : ¿Incluye arreglos?

**`faq.items.2.a`**

- עברית : כן, השמלה מותאמת אלייך במדידות. היקף ההתאמות ומועדיהן נקבעים בפגישה.
- Français : Oui, la robe est ajustée sur vous au fil des essayages. L'ampleur et le calendrier des retouches sont fixés au rendez-vous.
- English : Yes, the dress is fitted to you over the fittings. The extent and timing of alterations are agreed at your appointment.
- Español : Sí, el vestido se ajusta a ti en las pruebas. El alcance y los plazos de los arreglos se acuerdan en la cita.

**`faq.items.3.q`**

- עברית : כמה לבושים צריך לחינה?
- Français : Combien de tenues prévoir pour le henné ?
- English : How many outfits do I need for the henna?
- Español : ¿Cuántos trajes necesito para la henna?

**`faq.items.3.a`**

- עברית : יש כלות שמחליפות לבוש אחד ויש שמחליפות כמה במהלך הערב, ואפשר להלביש גם את החתן ואת המשפחה. ספרי לרויטל מה את מדמיינת, והיא תציע שילוב.
- Français : Certaines mariées gardent une seule tenue, d'autres en changent plusieurs fois dans la soirée, et l'on peut aussi habiller le marié et la famille. Dites à Revital ce que vous imaginez, elle vous proposera un ensemble.
- English : Some brides wear one outfit, others change several times during the night, and the groom and family can be dressed too. Tell Revital what you imagine and she will suggest a combination.
- Español : Algunas novias llevan un solo traje y otras se cambian varias veces durante la noche; también se puede vestir al novio y a la familia. Cuéntale a Revital lo que imaginas y te propondrá una combinación.

**`faq.items.4.q`**

- עברית : באילו אזורים רויטל מפיקה חינות?
- Français : Dans quelles régions Revital produit-elle des soirées ?
- English : Where does Revital produce henna parties?
- Español : ¿En qué zonas produce Revital fiestas de henna?

**`faq.items.4.a`**

- עברית : ספרי לנו בטופס איפה האירוע, ורויטל תחזור אלייך עם זמינות לתאריך ולמקום.
- Français : Indiquez-nous dans le formulaire où aura lieu l'événement : Revital vous répondra sur ses disponibilités pour la date et le lieu.
- English : Tell us in the form where your event will be, and Revital will get back to you about availability for your date and venue.
- Español : Indícanos en el formulario dónde será el evento y Revital te responderá sobre su disponibilidad para esa fecha y lugar.

**`faq.items.5.q`**

- עברית : איך שומרים תאריך? יש מקדמה?
- Français : Comment réserver ma date ? Faut-il un acompte ?
- English : How do I hold my date? Is there a deposit?
- Español : ¿Cómo reservo mi fecha? ¿Hay señal?

**`faq.items.5.a`**

- עברית : התאריך נשמר לאחר סגירת הפרטים עם רויטל. גובה המקדמה ואופן התשלום נמסרים בשיחה.
- Français : La date est bloquée une fois les détails validés avec Revital. Le montant de l'acompte et le mode de paiement vous sont précisés lors de l'échange.
- English : Your date is held once the details are agreed with Revital. The deposit amount and payment method are given when you speak.
- Español : La fecha queda reservada una vez acordados los detalles con Revital. El importe de la señal y la forma de pago se indican en la conversación.

## Contact

**`contact.eyebrow`**

- עברית : צור קשר
- Français : Contact
- English : Contact
- Español : Contacto

**`contact.title`**

- עברית : נקבע מדידה או נבדוק תאריך
- Français : Prendre rendez-vous ou vérifier une date
- English : Book a fitting or check a date
- Español : Pide una cita o consulta una fecha

**`contact.lead`**

- עברית : ממלאים כמה פרטים, וההודעה נשלחת ישר לוואטסאפ של רויטל. אפשר גם להשאיר הודעה קולית.
- Français : Remplissez quelques champs : votre message part directement sur le WhatsApp de Revital. Vous pouvez aussi laisser un message vocal.
- English : Fill in a few details and your message goes straight to Revital's WhatsApp. You can also leave a voice note.
- Español : Rellena unos pocos datos y tu mensaje llega directamente al WhatsApp de Revital. También puedes dejar una nota de voz.

**`contact.whatsapp`**

- עברית : וואטסאפ
- Français : WhatsApp
- English : WhatsApp
- Español : WhatsApp

**`contact.phone`**

- עברית : טלפון
- Français : Téléphone
- English : Phone
- Español : Teléfono

**`contact.instagram`**

- עברית : אינסטגרם
- Français : Instagram
- English : Instagram
- Español : Instagram

**`contact.showroom`**

- עברית : השואורום
- Français : Showroom
- English : Showroom
- Español : Showroom

**`contact.showroomTbd`**

- עברית : הכתובת נשלחת בתיאום המדידה
- Français : L'adresse vous est envoyée à la prise de rendez-vous
- English : The address is sent when your fitting is booked
- Español : La dirección se envía al confirmar la cita

**`contact.hours`**

- עברית : שעות
- Français : Horaires
- English : Hours
- Español : Horario

**`contact.byAppointment`**

- עברית : בתיאום מראש בלבד
- Français : Sur rendez-vous uniquement
- English : By appointment only
- Español : Solo con cita previa

**`contact.closed`**

- עברית : סגור
- Français : Fermé
- English : Closed
- Español : Cerrado

**`contact.days.0`**

- עברית : ראשון
- Français : Dimanche
- English : Sunday
- Español : Domingo

**`contact.days.1`**

- עברית : שני
- Français : Lundi
- English : Monday
- Español : Lunes

**`contact.days.2`**

- עברית : שלישי
- Français : Mardi
- English : Tuesday
- Español : Martes

**`contact.days.3`**

- עברית : רביעי
- Français : Mercredi
- English : Wednesday
- Español : Miércoles

**`contact.days.4`**

- עברית : חמישי
- Français : Jeudi
- English : Thursday
- Español : Jueves

**`contact.days.5`**

- עברית : שישי
- Français : Vendredi
- English : Friday
- Español : Viernes

**`contact.days.6`**

- עברית : שבת
- Français : Samedi
- English : Saturday
- Español : Sábado

## Formulaires + message WhatsApp

**`booking.tabsLabel`**

- עברית : סוג הפנייה
- Français : Type de demande
- English : Type of request
- Español : Tipo de solicitud

**`booking.tabs.fitting`**

- עברית : תיאום מדידה
- Français : Rendez-vous d'essayage
- English : Book a fitting
- Español : Cita de prueba

**`booking.tabs.henna`**

- עברית : הפקת חינה
- Français : Soirée henné
- English : Henna production
- Español : Fiesta de henna

**`booking.steps.dress`**

- עברית : השמלה
- Français : La robe
- English : The dress
- Español : El vestido

**`booking.steps.fitting`**

- עברית : מתי נוח לך
- Français : Vos disponibilités
- English : When suits you
- Español : Cuándo te viene bien

**`booking.steps.event`**

- עברית : האירוע
- Français : L'événement
- English : The event
- Español : El evento

**`booking.steps.wishes`**

- עברית : מה תרצי
- Français : Vos envies
- English : What you would like
- Español : Lo que te gustaría

**`booking.steps.contact`**

- עברית : הפרטים שלך
- Français : Vos coordonnées
- English : Your details
- Español : Tus datos

**`booking.fields.dressType`**

- עברית : סוג השמלה
- Français : Type de robe
- English : Type of dress
- Español : Tipo de vestido

**`booking.fields.dressTypes.mariee`**

- עברית : כלה
- Français : Mariée
- English : Bridal
- Español : Novia

**`booking.fields.dressTypes.soiree`**

- עברית : ערב
- Français : Soirée
- English : Evening
- Español : Fiesta

**`booking.fields.dressTypes.henne`**

- עברית : חינה
- Français : Henné
- English : Henna
- Español : Henna

**`booking.fields.eventDate`**

- עברית : תאריך האירוע
- Français : Date de l'événement
- English : Event date
- Español : Fecha del evento

**`booking.fields.fittingDate`**

- עברית : תאריך מועדף למדידה
- Français : Date souhaitée pour l'essayage
- English : Preferred fitting date
- Español : Fecha preferida para la prueba

**`booking.fields.slot`**

- עברית : שעה מועדפת
- Français : Créneau souhaité
- English : Preferred time
- Español : Franja preferida

**`booking.fields.slots.morning`**

- עברית : בוקר
- Français : Matin
- English : Morning
- Español : Mañana

**`booking.fields.slots.afternoon`**

- עברית : צהריים
- Français : Après-midi
- English : Afternoon
- Español : Mediodía

**`booking.fields.slots.evening`**

- עברית : ערב
- Français : Soir
- English : Evening
- Español : Tarde

**`booking.fields.size`**

- עברית : מידה משוערת
- Français : Taille approximative
- English : Approximate size
- Español : Talla aproximada

**`booking.fields.sizePlaceholder`**

- עברית : למשל 38
- Français : par ex. 38
- English : e.g. 38 (EU)
- Español : p. ej. 38

**`booking.fields.date`**

- עברית : תאריך החינה
- Français : Date du henné
- English : Henna date
- Español : Fecha de la henna

**`booking.fields.place`**

- עברית : מקום האירוע
- Français : Lieu
- English : Venue
- Español : Lugar

**`booking.fields.placePlaceholder`**

- עברית : עיר, אולם או בית
- Français : Ville, salle ou domicile
- English : City, hall or home
- Español : Ciudad, salón o casa

**`booking.fields.guests`**

- עברית : מספר אורחים משוער
- Français : Nombre d'invités approximatif
- English : Approximate number of guests
- Español : Número aproximado de invitados

**`booking.fields.wishes`**

- עברית : מה תרצי לכלול
- Français : Ce que vous souhaitez
- English : What to include
- Español : Qué quieres incluir

**`booking.fields.wishesOptions.decor`**

- עברית : עיצוב ותפאורה
- Français : Décor
- English : Décor and set
- Español : Decoración

**`booking.fields.wishesOptions.outfits`**

- עברית : לבוש לכלה ולמשפחה
- Français : Tenues de la mariée et de la famille
- English : Outfits for bride and family
- Español : Trajes para la novia y la familia

**`booking.fields.wishesOptions.all`**

- עברית : הכול כלול
- Français : Tout compris
- English : Everything
- Español : Todo incluido

**`booking.fields.budget`**

- עברית : תקציב
- Français : Budget
- English : Budget
- Español : Presupuesto

**`booking.fields.budgetPlaceholder`**

- עברית : למשל 15,000 ₪
- Français : par ex. 15 000 ₪
- English : e.g. ₪15,000
- Español : p. ej. 15.000 ₪

**`booking.fields.name`**

- עברית : שם
- Français : Nom
- English : Name
- Español : Nombre

**`booking.fields.phone`**

- עברית : טלפון
- Français : Téléphone
- English : Phone
- Español : Teléfono

**`booking.fields.message`**

- עברית : הודעה
- Français : Message
- English : Message
- Español : Mensaje

**`booking.fields.messagePlaceholder`**

- עברית : צבעים, השראה, כל מה שחשוב לך
- Français : Couleurs, inspirations, tout ce qui compte pour vous
- English : Colours, inspiration, anything that matters to you
- Español : Colores, inspiración, todo lo que te importa

**`booking.fields.optional`**

- עברית : לא חובה
- Français : facultatif
- English : optional
- Español : opcional

**`booking.fields.dateTaken`**

- עברית : התאריך הזה כבר תפוס אצל רויטל. אפשר עדיין לשלוח, היא תחזור אלייך.
- Français : Revital est déjà prise à cette date. Vous pouvez quand même envoyer : elle vous répondra.
- English : Revital is already booked on this date. You can still send – she will get back to you.
- Español : Revital ya tiene un evento esa fecha. Puedes enviarlo igualmente: te responderá.

**`booking.fields.dateFree`**

- עברית : התאריך עדיין פנוי ביומן.
- Français : Cette date est encore libre dans l'agenda.
- English : This date is still open in the diary.
- Español : Esta fecha sigue libre en la agenda.

**`booking.calendar.title`**

- עברית : תאריכים תפוסים
- Français : Dates déjà prises
- English : Booked dates
- Español : Fechas ocupadas

**`booking.calendar.prev`**

- עברית : החודש הקודם
- Français : Mois précédent
- English : Previous month
- Español : Mes anterior

**`booking.calendar.next`**

- עברית : החודש הבא
- Français : Mois suivant
- English : Next month
- Español : Mes siguiente

**`booking.calendar.taken`**

- עברית : תפוס
- Français : Pris
- English : Booked
- Español : Ocupada

**`booking.calendar.updated`**

- עברית : עודכן
- Français : Mis à jour le
- English : Updated
- Español : Actualizado

**`booking.submit`**

- עברית : שליחה בוואטסאפ
- Français : Envoyer sur WhatsApp
- English : Send on WhatsApp
- Español : Enviar por WhatsApp

**`booking.note`**

- עברית : ההודעה נפתחת בוואטסאפ ואת שולחת אותה בעצמך. שום פרט לא נשמר באתר.
- Français : Le message s'ouvre dans WhatsApp et c'est vous qui l'envoyez. Rien n'est enregistré sur le site.
- English : The message opens in WhatsApp and you send it yourself. Nothing is stored on this site.
- Español : El mensaje se abre en WhatsApp y lo envías tú. No se guarda nada en la web.

**`booking.required`**

- עברית : שדה חובה
- Français : Champ obligatoire
- English : Required
- Español : Campo obligatorio

**`booking.invalidPhone`**

- עברית : מספר הטלפון לא נראה תקין
- Français : Ce numéro ne semble pas valide
- English : This phone number does not look right
- Español : Este número no parece válido

**`booking.success.thanks`**

- עברית : תודה
- Français : Merci
- English : Thank you
- Español : Gracias

**`booking.success.title`**

- עברית : ההודעה מוכנה בוואטסאפ
- Français : Votre message est prêt dans WhatsApp
- English : Your message is ready in WhatsApp
- Español : Tu mensaje está listo en WhatsApp

**`booking.success.text`**

- עברית : אם הוואטסאפ לא נפתח, אפשר לנסות שוב בכפתור למטה. רויטל חוזרת לכל פנייה.
- Français : Si WhatsApp ne s'est pas ouvert, réessayez avec le bouton ci-dessous. Revital répond à chaque demande.
- English : If WhatsApp did not open, try again with the button below. Revital answers every request.
- Español : Si WhatsApp no se abrió, inténtalo de nuevo con el botón de abajo. Revital responde a cada solicitud.

**`booking.success.again`**

- עברית : לפתוח שוב בוואטסאפ
- Français : Rouvrir WhatsApp
- English : Open WhatsApp again
- Español : Abrir WhatsApp de nuevo

**`booking.success.reset`**

- עברית : פנייה חדשה
- Français : Nouvelle demande
- English : New request
- Español : Nueva solicitud

**`booking.message.fittingTitle`**

- עברית : בקשה לתיאום מדידה – מהאתר
- Français : Demande de rendez-vous d'essayage – depuis le site
- English : Fitting request – from the website
- Español : Solicitud de cita de prueba – desde la web

**`booking.message.hennaTitle`**

- עברית : בקשה להפקת חינה – מהאתר
- Français : Demande de production de soirée henné – depuis le site
- English : Henna production request – from the website
- Español : Solicitud de producción de henna – desde la web

**`booking.message.dressType`**

- עברית : סוג שמלה
- Français : Robe
- English : Dress
- Español : Vestido

**`booking.message.eventDate`**

- עברית : תאריך האירוע
- Français : Date de l'événement
- English : Event date
- Español : Fecha del evento

**`booking.message.fittingDate`**

- עברית : מדידה מועדפת
- Français : Essayage souhaité
- English : Preferred fitting
- Español : Prueba preferida

**`booking.message.slot`**

- עברית : שעה
- Français : Créneau
- English : Time
- Español : Franja

**`booking.message.size`**

- עברית : מידה
- Français : Taille
- English : Size
- Español : Talla

**`booking.message.date`**

- עברית : תאריך החינה
- Français : Date du henné
- English : Henna date
- Español : Fecha de la henna

**`booking.message.place`**

- עברית : מקום
- Français : Lieu
- English : Venue
- Español : Lugar

**`booking.message.guests`**

- עברית : אורחים
- Français : Invités
- English : Guests
- Español : Invitados

**`booking.message.wishes`**

- עברית : מה לכלול
- Français : Souhaits
- English : Include
- Español : Incluir

**`booking.message.budget`**

- עברית : תקציב
- Français : Budget
- English : Budget
- Español : Presupuesto

**`booking.message.name`**

- עברית : שם
- Français : Nom
- English : Name
- Español : Nombre

**`booking.message.phone`**

- עברית : טלפון
- Français : Téléphone
- English : Phone
- Español : Teléfono

**`booking.message.notes`**

- עברית : הודעה
- Français : Message
- English : Message
- Español : Mensaje

**`booking.message.closing`**

- עברית : תודה!
- Français : Merci !
- English : Thank you!
- Español : ¡Gracias!

## Bouton WhatsApp

**`whatsapp.hello`**

- עברית : היי רויטל, הגעתי מהאתר ואשמח לפרטים.
- Français : Bonjour Revital, je vous écris depuis votre site et j'aimerais quelques renseignements.
- English : Hi Revital, I found you through your website and would love some details.
- Español : Hola Revital, te escribo desde tu web y me gustaría recibir información.

**`whatsapp.float`**

- עברית : הודעה לרויטל בוואטסאפ
- Français : Écrire à Revital sur WhatsApp
- English : Message Revital on WhatsApp
- Español : Escribir a Revital por WhatsApp

## Pages Robes de mariée, Robes de soirée, Robes de henné, Production de henné

**`pages.back`**

- עברית : לדף הבית
- Français : Retour à l'accueil
- English : Back to home
- Español : Volver al inicio

**`pages.bridal.eyebrow`**

- עברית : שמלות כלה
- Français : Robes de mariée
- English : Bridal gowns
- Español : Vestidos de novia

**`pages.bridal.title`**

- עברית : שמלת כלה שנתפרת בשבילך
- Français : Une robe de mariée cousue pour vous
- English : A bridal gown sewn for you
- Español : Un vestido de novia cosido para ti

**`pages.bridal.lead`**

- עברית : רויטל מעצבת שמלות כלה בתפירה עילית, לפי בקשת הכלה ובדגש על רגש: תחרה, טול, שרוולי פעמון, כתף אחת.
- Français : Revital crée des robes de mariée en haute couture, selon les envies de chaque mariée et guidée par l'émotion : dentelle, tulle, manches évasées, épaule dénudée.
- English : Revital designs bridal gowns in fine tailoring, made to each bride's wishes and led by feeling: lace, tulle, bell sleeves, one shoulder.
- Español : Revital diseña vestidos de novia de alta costura, según los deseos de cada novia y guiada por la emoción: encaje, tul, mangas acampanadas, un solo hombro.

**`pages.bridal.body.0`**

- עברית : הכול מתחיל בפגישה בשואורום: מספרות על האירוע, על הסגנון ועל מה שמרגש אותך. משם בונים יחד את השמלה, ומודדות עד שהיא יושבת בדיוק.
- Français : Tout commence par un rendez-vous au showroom : vous parlez de l'événement, de votre style et de ce qui vous touche. À partir de là, vous construisez la robe ensemble, et les essayages se suivent jusqu'à ce qu'elle tombe parfaitement.
- English : It starts with a meeting at the showroom: you talk about the event, your style and what moves you. From there you build the dress together and fit until it sits perfectly.
- Español : Todo empieza con una cita en el showroom: hablan del evento, de tu estilo y de lo que te emociona. A partir de ahí construyen juntas el vestido y se prueba hasta que cae perfecto.

**`pages.bridal.body.1`**

- עברית : ליום החינה אפשר להשלים לבוש מרוקאי מהקולקציה, כך שכל המראה של השבוע הגדול יוצא מאותה יד.
- Français : Pour le henné, vous pouvez compléter avec une tenue marocaine de la collection : toute la grande semaine sort alors de la même main.
- English : For the henna, you can add a Moroccan outfit from the collection, so the whole look of the big week comes from the same hands.
- Español : Para la henna puedes completar con un traje marroquí de la colección, así todo el look de la gran semana sale de la misma mano.

**`pages.bridal.cta`**

- עברית : לתיאום מדידה
- Français : Prendre rendez-vous
- English : Book a fitting
- Español : Pedir cita

**`pages.evening.eyebrow`**

- עברית : שמלות ערב
- Français : Robes de soirée
- English : Evening dresses
- Español : Vestidos de fiesta

**`pages.evening.title`**

- עברית : שמלות ערב להשכרה ולרכישה
- Français : Robes de soirée à louer ou à acheter
- English : Evening dresses to rent or buy
- Español : Vestidos de fiesta en alquiler o venta

**`pages.evening.lead`**

- עברית : זהב, כסף, תחרה, גלימות וגזרות עם שסע. שמלות מעוצבות לאם הכלה, לאחיות, לחברות ולכל ערב חגיגי.
- Français : Or, argent, dentelle, capes et jupes fendues. Des robes de créatrice pour la mère de la mariée, les sœurs, les amies et chaque soirée de fête.
- English : Gold, silver, lace, capes and split skirts. Designer dresses for the mother of the bride, sisters, friends and every festive night.
- Español : Oro, plata, encaje, capas y faldas con abertura. Vestidos de diseño para la madre de la novia, hermanas, amigas y cada noche especial.

**`pages.evening.body.0`**

- עברית : כל שמלה בקולקציה מגיעה ביחידה אחת, כך שלא תפגשי אותה על אורחת אחרת. אפשר לשכור לערב אחד או לרכוש.
- Français : Chaque robe de la collection est une pièce unique : vous ne la croiserez pas sur une autre invitée. Vous pouvez la louer pour une soirée ou l'acheter.
- English : Each dress in the collection is one of a kind, so you will not meet it on another guest. Rent it for one night or buy it.
- Español : Cada vestido de la colección es pieza única: no lo verás en otra invitada. Puedes alquilarlo para una noche o comprarlo.

**`pages.evening.body.1`**

- עברית : במדידה רויטל מכינה מראש כמה שמלות לפי הצבע והמידה שתספרי לה.
- Français : Avant l'essayage, Revital prépare quelques robes selon la couleur et la taille que vous lui indiquez.
- English : Before your fitting, Revital prepares a few dresses based on the colour and size you share with her.
- Español : Antes de la prueba, Revital prepara algunos vestidos según el color y la talla que le indiques.

**`pages.evening.cta`**

- עברית : לתיאום מדידה
- Français : Prendre rendez-vous
- English : Book a fitting
- Español : Pedir cita

**`pages.henna.eyebrow`**

- עברית : שמלות חינה
- Français : Robes de henné
- English : Henna dresses
- Español : Vestidos de henna

**`pages.henna.title`**

- עברית : שמלות חינה וקפטנים
- Français : Robes de henné et caftans
- English : Henna dresses and kaftans
- Español : Vestidos de henna y caftanes

**`pages.henna.lead`**

- עברית : קפטנים רקומים, גלימות זהב ושמלות אדומות לכלת החינה, לצד לבוש לחתן ולמשפחה.
- Français : Caftans brodés, capes dorées et robes rouges pour la mariée du henné, et des tenues pour le marié et la famille.
- English : Embroidered kaftans, gold capes and red gowns for the henna bride, along with outfits for the groom and the family.
- Español : Caftanes bordados, capas doradas y vestidos rojos para la novia de la henna, además de trajes para el novio y la familia.

**`pages.henna.body.0`**

- עברית : עיצוב החינה של רויטל משלב מסורת מרוקאית עם נגיעות של יוקרה: רקמות זהב, אבנים, בדים עשירים וכתר לכלה.
- Français : Le henné selon Revital mêle tradition marocaine et touches de luxe : broderies d'or, pierres, étoffes riches et couronne pour la mariée.
- English : Revital's henna styling blends Moroccan tradition with touches of luxury: gold embroidery, stones, rich fabrics and a crown for the bride.
- Español : El estilo de henna de Revital une la tradición marroquí con toques de lujo: bordados de oro, pedrería, telas ricas y una corona para la novia.

**`pages.henna.body.1`**

- עברית : אפשר לשכור את הלבוש לערב, או לשלב אותו בהפקת החינה המלאה.
- Français : Vous pouvez louer les tenues pour la soirée, ou les intégrer à une production de henné complète.
- English : Rent the outfits for the night, or combine them with a full henna production.
- Español : Puedes alquilar los trajes para la noche o combinarlos con una producción de henna completa.

**`pages.henna.cta`**

- עברית : לתיאום מדידה
- Français : Prendre rendez-vous
- English : Book a fitting
- Español : Pedir cita

**`pages.production.eyebrow`**

- עברית : הפקת חינה
- Français : Soirées henné
- English : Henna parties
- Español : Fiestas de henna

**`pages.production.title`**

- עברית : הפקת אירועי חינה יוקרתיים
- Français : Production de soirées henné de luxe
- English : Luxury henna party production
- Español : Producción de fiestas de henna de lujo

**`pages.production.lead`**

- עברית : ערב חינה מרוקאי מלא, עם יחס אישי ואהבה למסורת: עיצוב, לבוש, עוגיות בעבודת יד ושוק פיצוחים.
- Français : Une soirée henné marocaine complète, suivie personnellement et faite avec l'amour de la tradition : décor, tenues, gâteaux faits main et souk d'épices.
- English : A complete Moroccan henna night with personal attention and love for tradition: décor, outfits, handmade cookies and a spice market.
- Español : Una noche de henna marroquí completa, con trato personal y amor por la tradición: decoración, trajes, dulces caseros y zoco de especias.

**`pages.production.body.0`**

- עברית : רויטל בונה את הערב סביב הקונספט שלכם: מהכניסה המעוצבת ועד הטלמון, ומשולחן קערת החינה ועד העוגיות המרוקאיות.
- Français : Revital construit la soirée autour de votre concept : de l'entrée décorée au talamon, de la table du bol de henné aux gâteaux marocains.
- English : Revital builds the night around your concept: from the styled entrance to the talamon, from the henna bowl table to the Moroccan cookies.
- Español : Revital construye la noche alrededor de vuestro concepto: de la entrada decorada al talamón, de la mesa del cuenco de henna a los dulces marroquíes.

**`pages.production.body.1`**

- עברית : כל הפקה מתומחרת אישית. שלחו תאריך, מקום ומספר אורחים, ורויטל תחזור עם הצעה.
- Français : Chaque production fait l'objet d'un devis personnalisé. Envoyez la date, le lieu et le nombre d'invités, Revital revient vers vous avec une proposition.
- English : Every production is priced personally. Send your date, venue and number of guests, and Revital will come back with a proposal.
- Español : Cada producción se presupuesta de forma personal. Enviad la fecha, el lugar y el número de invitados, y Revital os responderá con una propuesta.

**`pages.production.cta`**

- עברית : לבדיקת תאריך
- Français : Vérifier ma date
- English : Check your date
- Español : Consultar mi fecha

## Pied de page

**`footer.tagline`**

- עברית : הפקות חינה ושמלות כלה
- Français : Productions de henné et robes de mariée
- English : Henna productions and bridal gowns
- Español : Producciones de henna y vestidos de novia

**`footer.nav`**

- עברית : ניווט
- Français : Navigation
- English : Navigate
- Español : Navegación

**`footer.follow`**

- עברית : באינסטגרם
- Français : Sur Instagram
- English : On Instagram
- Español : En Instagram

**`footer.legal`**

- עברית : מידע משפטי ופרטיות
- Français : Mentions légales et confidentialité
- English : Legal & privacy
- Español : Aviso legal y privacidad

**`footer.rights`**

- עברית : כל הזכויות שמורות
- Français : Tous droits réservés
- English : All rights reserved
- Español : Todos los derechos reservados

**`footer.photos`**

- עברית : כל התמונות באתר מתוך האינסטגרם של רויטל נצנץ.
- Français : Toutes les photos du site proviennent de l'Instagram de Revital Nznz.
- English : All photos on this site come from Revital Nznz's Instagram.
- Español : Todas las fotos de la web proceden del Instagram de Revital Nznz.

## Mentions légales

**`legal.title`**

- עברית : מידע משפטי ופרטיות
- Français : Mentions légales et confidentialité
- English : Legal & privacy
- Español : Aviso legal y privacidad

**`legal.sections.0.h`**

- עברית : האתר
- Français : Le site
- English : This site
- Español : La web

**`legal.sections.0.p`**

- עברית : האתר מציג את העבודות והשירותים של רויטל נצנץ – עיצוב שמלות כלה, ערב וחינה והפקת אירועי חינה. ליצירת קשר: 052-250-8310.
- Français : Ce site présente le travail et les services de Revital Nznz : création de robes de mariée, de soirée et de henné, et production de soirées henné. Contact : +972 52-250-8310.
- English : This site presents the work and services of Revital Nznz – bridal, evening and henna dress design and henna party production. Contact: +972 52-250-8310.
- Español : Esta web presenta el trabajo y los servicios de Revital Nznz: diseño de vestidos de novia, de fiesta y de henna, y producción de fiestas de henna. Contacto: +972 52-250-8310.

**`legal.sections.1.h`**

- עברית : פרטיות
- Français : Confidentialité
- English : Privacy
- Español : Privacidad

**`legal.sections.1.p`**

- עברית : הטפסים באתר לא שומרים שום מידע. הפרטים שתמלאי נכנסים להודעת וואטסאפ שאת שולחת בעצמך לרויטל. האתר לא משתמש בעוגיות פרסום.
- Français : Les formulaires du site n'enregistrent rien. Les informations saisies sont placées dans un message WhatsApp que vous envoyez vous-même à Revital. Le site n'utilise aucun cookie publicitaire.
- English : The forms on this site store nothing. The details you enter go into a WhatsApp message that you send to Revital yourself. The site uses no advertising cookies.
- Español : Los formularios de la web no guardan nada. Los datos que escribes van en un mensaje de WhatsApp que tú misma envías a Revital. La web no usa cookies publicitarias.

**`legal.sections.2.h`**

- עברית : תמונות
- Français : Images
- English : Images
- Español : Imágenes

**`legal.sections.2.p`**

- עברית : התמונות והסרטונים שייכים לרויטל נצנץ ולצלמים שעבדו איתה. אין להעתיק אותם ללא רשות.
- Français : Les photos et vidéos appartiennent à Revital Nznz et aux photographes avec qui elle a travaillé. Merci de ne pas les reproduire sans autorisation.
- English : Photos and videos belong to Revital Nznz and the photographers she worked with. Please do not copy them without permission.
- Español : Las fotos y los vídeos pertenecen a Revital Nznz y a los fotógrafos con los que trabajó. No los copies sin permiso.

**`legal.sections.3.h`**

- עברית : מחירים וזמינות
- Français : Prix et disponibilités
- English : Prices and availability
- Español : Precios y disponibilidad

**`legal.sections.3.p`**

- עברית : המחירים, הזמינות ותנאי ההשכרה נמסרים בפגישה ומאושרים בכתב. התמונות מציגות עבודות קודמות ואינן מבטיחות זמינות של שמלה מסוימת.
- Français : Les prix, disponibilités et conditions de location sont communiqués au rendez-vous et confirmés par écrit. Les photos montrent des réalisations passées et ne garantissent pas la disponibilité d'une robe précise.
- English : Prices, availability and rental terms are given at your appointment and confirmed in writing. Photos show past work and do not guarantee that a specific dress is available.
- Español : Los precios, la disponibilidad y las condiciones de alquiler se indican en la cita y se confirman por escrito. Las fotos muestran trabajos anteriores y no garantizan la disponibilidad de un vestido concreto.

## Textes alternatifs des photos (accessibilité, Google Images) – servent aussi de nom aux robes

**`alt.kalat-hina`**

- עברית : כלת חינה בשמלה לבנה עם שובל, מול וילונות אדומים
- Français : Mariée du henné en robe blanche à traîne, devant des rideaux rouges
- English : Henna bride in a white gown with a train, in front of red curtains
- Español : Novia de henna con vestido blanco de cola, ante cortinas rojas

**`alt.revital`**

- עברית : רויטל נצנץ בשמלת שמפניה עם גלימה, בתפאורת חינה
- Français : Revital Nznz en robe champagne avec cape, dans un décor de henné
- English : Revital Nznz in a champagne gown with a cape, on a henna set
- Español : Revital Nznz con vestido champán y capa, en una decoración de henna

**`alt.kala-tachra`**

- עברית : שמלת כלה לבנה מתחרה בתפירה אישית
- Français : Robe de mariée blanche en dentelle, sur mesure
- English : Made-to-measure white lace bridal gown
- Español : Vestido de novia blanco de encaje a medida

**`alt.kala-katef`**

- עברית : שמלת כלה לבנה בגזרת כתף אחת
- Français : Robe de mariée blanche asymétrique, une épaule
- English : White one-shoulder bridal gown
- Español : Vestido de novia blanco asimétrico de un hombro

**`alt.kala-tul`**

- עברית : שמלת כלה עם חצאית טול נפוחה
- Français : Robe de mariée à jupe de tulle bouffante
- English : Bridal gown with a full tulle skirt
- Español : Vestido de novia con falda de tul vaporosa

**`alt.kala-atelier`**

- עברית : עבודת יד על שמלת כלה בסטודיו
- Français : Travail à la main sur une robe de mariée à l'atelier
- English : Handwork on a bridal gown in the studio
- Español : Trabajo a mano sobre un vestido de novia en el taller

**`alt.erev-zahav`**

- עברית : שמלת ערב מתחרה זהב
- Français : Robe de soirée en dentelle dorée
- English : Gold lace evening dress
- Español : Vestido de fiesta de encaje dorado

**`alt.erev-kachol`**

- עברית : שמלת ערב מתחרה כחולה עם שרוולי פעמון
- Français : Robe de soirée en dentelle bleue à manches évasées
- English : Blue lace evening dress with bell sleeves
- Español : Vestido de fiesta de encaje azul con mangas acampanadas

**`alt.erev-shampanya`**

- עברית : שמלת ערב בצבע שמפניה עם מחשוף וי
- Français : Robe de soirée champagne au décolleté en V
- English : Champagne evening dress with a V neckline
- Español : Vestido de fiesta color champán con escote en V

**`alt.erev-glima`**

- עברית : שמלת ערב זהב עם גלימה
- Français : Robe de soirée dorée avec cape
- English : Gold evening dress with a cape
- Español : Vestido de fiesta dorado con capa

**`alt.erev-yarok`**

- עברית : שמלת ערב ירוקה מסאטן עם חגורה רקומה
- Français : Robe de soirée en satin vert à ceinture brodée
- English : Green satin evening dress with an embroidered belt
- Español : Vestido de fiesta de satén verde con cinturón bordado

**`alt.erev-kesef`**

- עברית : שמלת ערב כסופה נוצצת
- Français : Robe de soirée argentée scintillante
- English : Sparkling silver evening dress
- Español : Vestido de fiesta plateado brillante

**`alt.erev-katsar`**

- עברית : שמלת ערב קצרה מנצנצת
- Français : Robe de soirée courte pailletée
- English : Short sequinned evening dress
- Español : Vestido de fiesta corto de lentejuelas

**`alt.erev-varod`**

- עברית : שמלת ערב ורודה צמודה עם רקמה
- Français : Robe de soirée rose ajustée et brodée
- English : Fitted pink evening dress with embroidery
- Español : Vestido de fiesta rosa ajustado y bordado

**`alt.erev-sagol`**

- עברית : שמלת ערב סגולה עם שסע וחגורת זהב
- Français : Robe de soirée violette fendue, ceinture dorée
- English : Purple evening dress with a split and gold belt
- Español : Vestido de fiesta morado con abertura y cinturón dorado

**`alt.erev-shachor`**

- עברית : שמלת ערב שחורה שקופה
- Français : Robe de soirée noire transparente
- English : Sheer black evening dress
- Español : Vestido de fiesta negro transparente

**`alt.erev-lavan`**

- עברית : שמלת ערב לבנה עם מחוך ושסע
- Français : Robe de soirée blanche à corset, fendue
- English : White corset evening dress with a split
- Español : Vestido de fiesta blanco con corsé y abertura

**`alt.hina-kaftan`**

- עברית : קפטן חינה לבן עם רקמת זהב
- Français : Caftan de henné blanc brodé d'or
- English : White henna kaftan with gold embroidery
- Español : Caftán de henna blanco bordado en oro

**`alt.hina-glima`**

- עברית : שמלת חינה עם גלימה
- Français : Robe de henné avec cape
- English : Henna dress with a cape
- Español : Vestido de henna con capa

**`alt.hina-zahav`**

- עברית : לבוש חינה זהוב בהשראה מרוקאית
- Français : Tenue de henné dorée d'inspiration marocaine
- English : Golden Moroccan-inspired henna outfit
- Español : Traje de henna dorado de inspiración marroquí

**`alt.hina-adom`**

- עברית : כלת חינה בשמלה אדומה
- Français : Mariée du henné en robe rouge
- English : Henna bride in a red gown
- Español : Novia de henna con vestido rojo

**`alt.hina-kesef`**

- עברית : כלת חינה בשמלה כסופה עם כיסוי ראש מנצנץ
- Français : Mariée du henné en robe argentée et coiffe scintillante
- English : Henna bride in a silver gown with a sparkling headpiece
- Español : Novia de henna con vestido plateado y tocado brillante

**`alt.hina-zug`**

- עברית : חתן וכלה בלבוש חינה מרוקאי
- Français : Mariés en tenues de henné marocaines
- English : Bride and groom in Moroccan henna outfits
- Español : Novios con trajes de henna marroquíes

**`alt.tafura-bama`**

- עברית : במת חינה עם קשתות זהב וטלמון
- Français : Scène de henné aux arches dorées avec talamon
- English : Henna stage with gold arches and a talamon
- Español : Escenario de henna con arcos dorados y talamón

**`alt.tafura-adom`**

- עברית : תפאורת חינה עם וילונות אדומים
- Français : Décor de henné aux rideaux rouges
- English : Henna set with red curtains
- Español : Decoración de henna con cortinas rojas

**`alt.tafura-shuk`**

- עברית : שוק פיצוחים ותבלינים בתפאורת חינה
- Français : Souk de fruits secs et d'épices dans un décor de henné
- English : Nut and spice market on a henna set
- Español : Zoco de frutos secos y especias en una henna

**`alt.tafura-kise`**

- עברית : טלמון לבן וזהב לכלה ולחתן
- Français : Talamon blanc et or pour les mariés
- English : White and gold talamon for the bride and groom
- Español : Talamón blanco y dorado para los novios

**`alt.tafura-knisa`**

- עברית : כניסה מעוצבת לערב חינה
- Français : Entrée décorée d'une soirée henné
- English : Styled entrance to a henna night
- Español : Entrada decorada de una noche de henna

**`alt.tafura-kaara`**

- עברית : שולחן קערת חינה מעוצב
- Français : Table dressée pour le bol de henné
- English : Styled henna bowl table
- Español : Mesa decorada para el cuenco de henna

**`alt.tafura-ugiot`**

- עברית : מגש עוגיות מרוקאיות בעבודת יד
- Français : Plateau de gâteaux marocains faits main
- English : Tray of handmade Moroccan cookies
- Español : Bandeja de dulces marroquíes caseros

**`alt.tafura-kirkara`**

- עברית : כרכרה מעוטרת לכניסת הכלה
- Français : Carrosse décoré pour l'entrée de la mariée
- English : Decorated carriage for the bride's entrance
- Español : Carroza decorada para la entrada de la novia

**`alt.tafura-gamal`**

- עברית : גמל מעוטר בתפאורת חינה
- Français : Chameau décoré dans un décor de henné
- English : Decorated camel on a henna set
- Español : Camello decorado en una henna

**`alt.decor-henne`**

- עברית : סיור בתפאורת חינה
- Français : Visite d'un décor de henné
- English : Walk through a henna set
- Español : Recorrido por una decoración de henna

**`alt.danseuse-feu`**

- עברית : רקדנית אש בערב חינה
- Français : Danseuse de feu lors d'une soirée henné
- English : Fire dancer at a henna night
- Español : Bailarina de fuego en una noche de henna

**`alt.mariee-caftan`**

- עברית : כלה רוקדת בקפטן לבן
- Français : Mariée dansant en caftan blanc
- English : Bride dancing in a white kaftan
- Español : Novia bailando con caftán blanco

**`alt.entree-couple`**

- עברית : כניסת הזוג לערב החינה
- Français : Entrée des mariés à leur soirée henné
- English : The couple's entrance to their henna night
- Español : Entrada de los novios a su noche de henna
