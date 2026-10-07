/*
  JavaScript de la web de Sueño de Juventud.
  Los nombres de variables y funciones están en español para que sea más fácil revisar y modificar el proyecto.
  Las palabras propias de JavaScript (const, let, function, if, return, etc.) se mantienen en inglés porque forman parte del lenguaje.
*/

const traducciones = {
  es: {
    name: 'Español', brand:{sub:'BAR ★ CAFETERÍA'}, title: 'Sueño de Juventud | Bar Cafetería',
    nav: {home:'Inicio', favorites:'Favoritos', menu:'Carta', reviews:'Reseñas', gallery:'Galería', contact:'Contacto'},
    hero:{eyebrow:'BAR · CAFETERÍA · SABOR CUBANO', rating:'★ 4,6/5 en Google', title1:'Comida que se disfruta,', title2:'momentos que se recuerdan.', text:'Platos cubanos, pizzas, hamburguesas, bocadillos, cafés y mucho más en un ambiente cercano.'},
    buttons:{menu:'Ver la carta', callNow:'Llamar ahora', seeMenu:'Ver en la carta →', go:'Quiero ir →', call:'Llamar', directions:'Cómo llegar'},
    features:{takeaway:'Comida para llevar', terrace:'Terraza y ambiente cercano', wifi:'Wifi gratis', dayOptions:'Opciones para desayunar, comer o tomar algo'},
    intro:{eyebrow:'DE LA CASA', title:'Lo que te vas a encontrar', text:'Comida cubana, pizzas, hamburguesas, bocadillos, cafés y bebidas para disfrutar aquí o para llevar.'},
    tags:{specialty:'Especialidad', burgers:'Hamburguesas', pizzas:'Pizzas', coffee:'Cafetería'},
    food:{cubanTitle:'Plato cubano',burgerTitle:'Hamburguesa',pizzaTitle:'Pizza',cubanText:'Arroz con frijoles, acompañamientos y carne.', burgerText:'Opciones de pollo, cerdo, ternera y mixta.', pizzaText:'Margarita, vegetal, jamón, marinera, hawaiana y más.', coffeeTitle:'Un buen café', coffeeText:'Desde espresso y cortado hasta bombón, capuccino y más.'},
    story:{badgeTitle:'Sabor de siempre', badgeText:'Un sitio de barrio para compartir', title:'Sabores que saben a casa y momentos para compartir.', text:'Un lugar para desayunar, comer, tomar un café o compartir algo con los tuyos. Aquí encontrarás sabores cubanos, platos completos, pizzas, hamburguesas y opciones para cualquier momento del día.'},
    menu:{eyebrow:'LA CARTA', title:'Elige lo que te apetezca', text:'Descubre nuestras opciones y precios. Elige una categoría y encuentra rápidamente lo que te apetece.', categories:'Categorías del menú', note:'Opciones para disfrutar a tu manera.'},
    reviews:{quote1:'“Muy satisfecha con la atención, las pizzas exquisitas como nos gusta a los cubanos. El servicio es muy bueno y lo recomiendo 100%.”',quote2:'“Un local muy tranquilo fantástico para compartir en familia, un servicio excelente y la comida riquísima.”',quote3:'“El ambiente es acogedor, el servicio es amable y atento, haciendo que cada visita sea especial.”',eyebrow:'OPINIONES REALES', title:'Lo que dicen los clientes', text:'Algunas opiniones publicadas en Google, recopiladas en la ficha pública del establecimiento.', ago9:'Google · hace 9 meses', ago1:'Google · hace 1 año', ratingNote:'valoración mostrada en la ficha pública · 26 votos consultados'},
    gallery:{eyebrow:'FOTOS REALES', title:'Sabores que hablan por sí solos'},
    contact:{eyebrow:'VEN A VERNOS', title:'Tu próxima comida puede estar aquí.', text:'Guarda la dirección, llama directamente o abre la ubicación en Google Maps.', address:'Dirección', phone:'Teléfono', hours:'Horario online', schedule:'Martes a domingo · 10:00–23:00<br>Lunes · cerrado'},
    labels:{location:'Abrir ubicación en Google Maps', call:'Llamar al 698 238 816', home:'Sueño de Juventud, inicio', openMenu:'Abrir menú', down:'Bajar', close:'Cerrar', gallery:'Ver foto', whatsapp:'Escribir por WhatsApp'},
    footer:'© 2026 Sueño de Juventud · Bar Cafetería'
  },
  en: {
    name:'English', brand:{sub:'BAR ★ CAFÉ'}, title:'Sueño de Juventud | Café & Bar', nav:{home:'Home',favorites:'Our favourites',menu:'Menu',reviews:'Reviews',gallery:'Gallery',contact:'Contact'},
    hero:{eyebrow:'BAR · CAFÉ · CUBAN FLAVOUR',rating:'★ 4.6/5 on Google',title1:'Food to enjoy,',title2:'moments to remember.',text:'Cuban dishes, pizzas, burgers, sandwiches, coffee and much more in a welcoming atmosphere.'},
    buttons:{menu:'View the menu',callNow:'Call now',seeMenu:'View on the menu →',go:'I want to visit →',call:'Call',directions:'Get directions'},
    features:{takeaway:'Takeaway available',terrace:'Terrace and friendly atmosphere',wifi:'Free Wi-Fi',dayOptions:'Breakfast, lunch or drinks throughout the day'},
    intro:{eyebrow:'FROM THE HOUSE',title:'What you will find here',text:'Cuban food, pizzas, burgers, sandwiches, coffee and drinks to enjoy here or take away.'},
    tags:{specialty:'Specialty',burgers:'Burgers',pizzas:'Pizzas',coffee:'Coffee'},
    food:{cubanTitle:'Cuban platter',burgerTitle:'Burger',pizzaTitle:'Pizza',cubanText:'Rice with beans, sides and meat.',burgerText:'Chicken, pork, beef and mixed options.',pizzaText:'Margherita, vegetable, ham, seafood, Hawaiian and more.',coffeeTitle:'A good coffee',coffeeText:'From espresso and cortado to café bombón, cappuccino and more.'},
    story:{badgeTitle:'A familiar flavour',badgeText:'A neighbourhood place to share',title:'Flavours that feel like home, made for sharing.',text:'A place for breakfast, lunch, coffee or a bite with friends and family. Enjoy Cuban flavours, hearty dishes, pizzas, burgers and options for every moment of the day.'},
    menu:{eyebrow:'THE MENU',title:'Choose what you fancy',text:'Discover our dishes and prices. Pick a category and quickly find what you are looking for.',categories:'Menu categories',note:'Options to enjoy your way.'},
    reviews:{quote1:'“Very happy with the service. The pizzas are delicious, just the way we Cubans like them. I highly recommend it.”',quote2:'“A very peaceful place to enjoy with the family, excellent service and delicious food.”',quote3:'“The atmosphere is welcoming and the service is friendly and attentive, making every visit special.”',eyebrow:'REAL REVIEWS',title:'What our customers say',text:'Some reviews published on Google and collected from the establishment’s public listing.',ago9:'Google · 9 months ago',ago1:'Google · 1 year ago',ratingNote:'rating shown on the public listing · 26 votes checked'},
    gallery:{eyebrow:'REAL PHOTOS',title:'Flavours that speak for themselves'},
    contact:{eyebrow:'COME AND SEE US',title:'Your next meal could be here.',text:'Save the address, call us directly or open the location in Google Maps.',address:'Address',phone:'Phone',hours:'Opening hours',schedule:'Tuesday to Sunday · 10:00–23:00<br>Monday · closed'},
    labels:{location:'Open location in Google Maps',call:'Call 698 238 816',home:'Sueño de Juventud, home',openMenu:'Open menu',down:'Scroll down',close:'Close',gallery:'View photo',whatsapp:'Message us on WhatsApp'},footer:'© 2026 Sueño de Juventud · Bar Café'
  },
  de: {
    name:'Deutsch',brand:{sub:'BAR ★ CAFÉ'}, title:'Sueño de Juventud | Bar & Café',nav:{home:'Startseite',favorites:'Favoriten',menu:'Speisekarte',reviews:'Bewertungen',gallery:'Galerie',contact:'Kontakt'},
    hero:{eyebrow:'BAR · CAFÉ · KUBANISCHER GESCHMACK',rating:'★ 4,6/5 auf Google',title1:'Essen zum Genießen,',title2:'Momente zum Erinnern.',text:'Kubanische Gerichte, Pizza, Burger, Sandwiches, Kaffee und vieles mehr in gemütlicher Atmosphäre.'},
    buttons:{menu:'Speisekarte ansehen',callNow:'Jetzt anrufen',seeMenu:'Auf der Speisekarte →',go:'Ich möchte kommen →',call:'Anrufen',directions:'Route anzeigen'},
    features:{takeaway:'Zum Mitnehmen',terrace:'Terrasse und freundliche Atmosphäre',wifi:'Kostenloses WLAN',dayOptions:'Frühstück, Mittagessen oder etwas trinken'},
    intro:{eyebrow:'AUS UNSERER KÜCHE',title:'Das erwartet dich',text:'Kubanisches Essen, Pizza, Burger, Sandwiches, Kaffee und Getränke – zum Hieressen oder Mitnehmen.'},
    tags:{specialty:'Spezialität',burgers:'Burger',pizzas:'Pizza',coffee:'Café'},
    food:{cubanTitle:'Kubanischer Teller',burgerTitle:'Burger',pizzaTitle:'Pizza',cubanText:'Reis mit Bohnen, Beilagen und Fleisch.',burgerText:'Hähnchen, Schwein, Rind und gemischte Varianten.',pizzaText:'Margherita, Gemüse, Schinken, Meeresfrüchte, Hawaii und mehr.',coffeeTitle:'Ein guter Kaffee',coffeeText:'Von Espresso und Cortado bis Café Bombón, Cappuccino und mehr.'},
    story:{badgeTitle:'Geschmack wie immer',badgeText:'Ein Ort aus der Nachbarschaft zum Teilen',title:'Aromen wie zu Hause und Momente zum Teilen.',text:'Ein Ort für Frühstück, Mittagessen, Kaffee oder einen Snack mit Familie und Freunden. Entdecke kubanische Aromen, herzhafte Gerichte, Pizza, Burger und mehr.'},
    menu:{eyebrow:'SPEISEKARTE',title:'Worauf hast du Lust?',text:'Entdecke unsere Gerichte und Preise. Wähle eine Kategorie und finde schnell, was dir schmeckt.',categories:'Menükategorien',note:'Auswahl zum Genießen.'},
    reviews:{quote1:'“Sehr zufrieden mit dem Service. Die Pizzen sind köstlich, genau wie wir Kubaner sie mögen. Sehr empfehlenswert.”',quote2:'“Ein sehr ruhiger Ort für die Familie, mit ausgezeichnetem Service und köstlichem Essen.”',quote3:'“Die Atmosphäre ist gemütlich und der Service freundlich und aufmerksam, sodass jeder Besuch besonders ist.”',eyebrow:'ECHTE BEWERTUNGEN',title:'Das sagen unsere Gäste',text:'Einige auf Google veröffentlichte Bewertungen aus dem öffentlichen Eintrag des Lokals.',ago9:'Google · vor 9 Monaten',ago1:'Google · vor 1 Jahr',ratingNote:'Bewertung im öffentlichen Eintrag · 26 geprüfte Stimmen'},
    gallery:{eyebrow:'ECHTE FOTOS',title:'Aromen, die für sich sprechen'},
    contact:{eyebrow:'BESUCH UNS',title:'Dein nächstes Essen könnte hier sein.',text:'Speichere die Adresse, ruf uns direkt an oder öffne den Standort in Google Maps.',address:'Adresse',phone:'Telefon',hours:'Öffnungszeiten',schedule:'Dienstag bis Sonntag · 10:00–23:00<br>Montag · geschlossen'},
    labels:{location:'Standort in Google Maps öffnen',call:'698 238 816 anrufen',home:'Sueño de Juventud, Startseite',openMenu:'Menü öffnen',down:'Nach unten',close:'Schließen',gallery:'Foto ansehen',whatsapp:'Per WhatsApp schreiben'},footer:'© 2026 Sueño de Juventud · Bar & Café'
  },
  nl: {
    name:'Nederlands',brand:{sub:'BAR ★ CAFÉ'}, title:'Sueño de Juventud | Bar & Café',nav:{home:'Home',favorites:'Favorieten',menu:'Menu',reviews:'Reviews',gallery:'Galerij',contact:'Contact'},
    hero:{eyebrow:'BAR · CAFÉ · CUBAANSE SMAAK',rating:'★ 4,6/5 op Google',title1:'Eten om van te genieten,',title2:'momenten om te onthouden.',text:'Cubaanse gerechten, pizza, hamburgers, broodjes, koffie en meer in een gezellige sfeer.'},
    buttons:{menu:'Bekijk het menu',callNow:'Bel nu',seeMenu:'Bekijk in het menu →',go:'Ik wil langskomen →',call:'Bellen',directions:'Route bekijken'},
    features:{takeaway:'Afhalen mogelijk',terrace:'Terras en gezellige sfeer',wifi:'Gratis wifi',dayOptions:'Ontbijt, lunch of iets drinken gedurende de dag'},
    intro:{eyebrow:'VAN HET HUIS',title:'Dit kun je hier verwachten',text:'Cubaanse gerechten, pizza, hamburgers, broodjes, koffie en drankjes om hier te genieten of mee te nemen.'},
    tags:{specialty:'Specialiteit',burgers:'Hamburgers',pizzas:'Pizza',coffee:'Koffie'},
    food:{cubanTitle:'Cubaanse schotel',burgerTitle:'Hamburger',pizzaTitle:'Pizza',cubanText:'Rijst met bonen, bijgerechten en vlees.',burgerText:'Kip, varkensvlees, rundvlees en gemengde opties.',pizzaText:'Margherita, groente, ham, zeevruchten, Hawaï en meer.',coffeeTitle:'Een goede koffie',coffeeText:'Van espresso en cortado tot café bombón, cappuccino en meer.'},
    story:{badgeTitle:'Vertrouwde smaak',badgeText:'Een buurtplek om samen te genieten',title:'Smaken die aan thuis doen denken, voor momenten samen.',text:'Een plek voor ontbijt, lunch, koffie of iets lekkers met familie en vrienden. Ontdek Cubaanse smaken, complete gerechten, pizza, hamburgers en meer.'},
    menu:{eyebrow:'HET MENU',title:'Kies waar je zin in hebt',text:'Ontdek onze gerechten en prijzen. Kies een categorie en vind snel wat je zoekt.',categories:'Menucategorieën',note:'Opties om op jouw manier van te genieten.'},
    reviews:{quote1:'“Zeer tevreden over de service. De pizza’s zijn heerlijk, precies zoals wij Cubanen ze lekker vinden. Zeker een aanrader.”',quote2:'“Een rustige plek om met het gezin te genieten, met uitstekende service en heerlijk eten.”',quote3:'“De sfeer is gezellig en de service vriendelijk en attent, waardoor elk bezoek bijzonder is.”',eyebrow:'ECHTE REVIEWS',title:'Wat klanten zeggen',text:'Enkele beoordelingen die op Google zijn gepubliceerd en uit de openbare bedrijfsvermelding komen.',ago9:'Google · 9 maanden geleden',ago1:'Google · 1 jaar geleden',ratingNote:'score in de openbare vermelding · 26 gecontroleerde stemmen'},
    gallery:{eyebrow:'ECHTE FOTO’S',title:'Smaken die voor zichzelf spreken'},
    contact:{eyebrow:'KOM LANGS',title:'Je volgende maaltijd kan hier zijn.',text:'Bewaar het adres, bel ons rechtstreeks of open de locatie in Google Maps.',address:'Adres',phone:'Telefoon',hours:'Openingstijden',schedule:'Dinsdag t/m zondag · 10:00–23:00<br>Maandag · gesloten'},
    labels:{location:'Locatie openen in Google Maps',call:'Bel 698 238 816',home:'Sueño de Juventud, home',openMenu:'Menu openen',down:'Naar beneden',close:'Sluiten',gallery:'Foto bekijken',whatsapp:'Stuur een WhatsApp'},footer:'© 2026 Sueño de Juventud · Bar & Café'
  },
  fr: {
    name:'Français',brand:{sub:'BAR ★ CAFÉ'}, title:'Sueño de Juventud | Bar & Café',nav:{home:'Accueil',favorites:'Favoris',menu:'Carte',reviews:'Avis',gallery:'Galerie',contact:'Contact'},
    hero:{eyebrow:'BAR · CAFÉ · SAVEURS CUBAINES',rating:'★ 4,6/5 sur Google',title1:'Des plats à savourer,',title2:'des moments à partager.',text:'Plats cubains, pizzas, burgers, sandwichs, cafés et bien plus dans une ambiance conviviale.'},
    buttons:{menu:'Voir la carte',callNow:'Appeler maintenant',seeMenu:'Voir sur la carte →',go:'Je veux venir →',call:'Appeler',directions:'Itinéraire'},
    features:{takeaway:'À emporter',terrace:'Terrasse et ambiance conviviale',wifi:'Wi-Fi gratuit',dayOptions:'Petit-déjeuner, déjeuner ou verre à tout moment'},
    intro:{eyebrow:'À LA MAISON',title:'Ce que vous trouverez ici',text:'Cuisine cubaine, pizzas, burgers, sandwichs, cafés et boissons à déguster sur place ou à emporter.'},
    tags:{specialty:'Spécialité',burgers:'Burgers',pizzas:'Pizzas',coffee:'Café'},
    food:{cubanTitle:'Assiette cubaine',burgerTitle:'Burger',pizzaTitle:'Pizza',cubanText:'Riz, haricots, accompagnements et viande.',burgerText:'Poulet, porc, bœuf et versions mixtes.',pizzaText:'Margherita, végétale, jambon, fruits de mer, hawaïenne et plus.',coffeeTitle:'Un bon café',coffeeText:'De l’espresso et du cortado au café bombón, cappuccino et plus.'},
    story:{badgeTitle:'Le goût d’autrefois',badgeText:'Un lieu de quartier pour partager',title:'Des saveurs qui rappellent la maison, à partager.',text:'Un endroit pour prendre le petit-déjeuner, déjeuner, boire un café ou partager un moment. Découvrez les saveurs cubaines, plats complets, pizzas, burgers et bien plus.'},
    menu:{eyebrow:'LA CARTE',title:'Choisissez ce qui vous fait envie',text:'Découvrez nos plats et nos prix. Choisissez une catégorie pour trouver rapidement ce qui vous plaît.',categories:'Catégories du menu',note:'Des options à savourer comme vous aimez.'},
    reviews:{quote1:'“Très satisfaite du service. Les pizzas sont délicieuses, comme nous les aimons à Cuba. Je recommande vivement.”',quote2:'“Un endroit très calme pour partager en famille, avec un excellent service et une cuisine délicieuse.”',quote3:'“L’ambiance est chaleureuse et le service aimable et attentif, ce qui rend chaque visite spéciale.”',eyebrow:'VRAIS AVIS',title:'Ce que disent les clients',text:'Quelques avis publiés sur Google et issus de la fiche publique de l’établissement.',ago9:'Google · il y a 9 mois',ago1:'Google · il y a 1 an',ratingNote:'note affichée sur la fiche publique · 26 votes consultés'},
    gallery:{eyebrow:'VRAIES PHOTOS',title:'Des saveurs qui parlent d’elles-mêmes'},
    contact:{eyebrow:'VENEZ NOUS VOIR',title:'Votre prochain repas peut être ici.',text:'Enregistrez l’adresse, appelez-nous directement ou ouvrez la localisation dans Google Maps.',address:'Adresse',phone:'Téléphone',hours:'Horaires',schedule:'Du mardi au dimanche · 10:00–23:00<br>Lundi · fermé'},
    labels:{location:'Ouvrir la localisation dans Google Maps',call:'Appeler le 698 238 816',home:'Sueño de Juventud, accueil',openMenu:'Ouvrir le menu',down:'Descendre',close:'Fermer',gallery:'Voir la photo',whatsapp:'Écrire sur WhatsApp'},footer:'© 2026 Sueño de Juventud · Bar & Café'
  },
  pt: {
    name:'Português',brand:{sub:'BAR ★ CAFÉ'}, title:'Sueño de Juventud | Bar & Café',nav:{home:'Início',favorites:'Favoritos',menu:'Ementa',reviews:'Avaliações',gallery:'Galeria',contact:'Contacto'},
    hero:{eyebrow:'BAR · CAFÉ · SABOR CUBANO',rating:'★ 4,6/5 no Google',title1:'Comida para saborear,',title2:'momentos para recordar.',text:'Pratos cubanos, pizzas, hambúrgueres, sanduíches, cafés e muito mais num ambiente acolhedor.'},
    buttons:{menu:'Ver a ementa',callNow:'Ligar agora',seeMenu:'Ver na ementa →',go:'Quero visitar →',call:'Ligar',directions:'Como chegar'},
    features:{takeaway:'Comida para levar',terrace:'Esplanada e ambiente acolhedor',wifi:'Wi-Fi grátis',dayOptions:'Pequeno-almoço, almoço ou uma bebida a qualquer hora'},
    intro:{eyebrow:'DA CASA',title:'O que vai encontrar',text:'Comida cubana, pizzas, hambúrgueres, sanduíches, cafés e bebidas para desfrutar aqui ou levar.'},
    tags:{specialty:'Especialidade',burgers:'Hambúrgueres',pizzas:'Pizzas',coffee:'Cafetaria'},
    food:{cubanTitle:'Prato cubano',burgerTitle:'Hambúrguer',pizzaTitle:'Pizza',cubanText:'Arroz com feijão, acompanhamentos e carne.',burgerText:'Opções de frango, porco, vitela e mista.',pizzaText:'Margarita, vegetal, fiambre, marisco, havaiana e muito mais.',coffeeTitle:'Um bom café',coffeeText:'Desde espresso e cortado até café bombom, cappuccino e mais.'},
    story:{badgeTitle:'Sabor de sempre',badgeText:'Um lugar de bairro para partilhar',title:'Sabores que sabem a casa e momentos para partilhar.',text:'Um lugar para tomar o pequeno-almoço, almoçar, beber um café ou partilhar algo com os seus. Descubra sabores cubanos, pratos completos, pizzas, hambúrgueres e muito mais.'},
    menu:{eyebrow:'A EMENTA',title:'Escolha o que lhe apetece',text:'Descubra as nossas opções e preços. Escolha uma categoria e encontre rapidamente o que procura.',categories:'Categorias da ementa',note:'Opções para desfrutar à sua maneira.'},
    reviews:{quote1:'“Muito satisfeita com o atendimento. As pizzas são deliciosas, como nós cubanos gostamos. Recomendo muito.”',quote2:'“Um lugar muito tranquilo para partilhar em família, com um serviço excelente e comida deliciosa.”',quote3:'“O ambiente é acolhedor e o serviço é simpático e atencioso, tornando cada visita especial.”',eyebrow:'OPINIÕES REAIS',title:'O que dizem os clientes',text:'Algumas opiniões publicadas no Google e recolhidas da ficha pública do estabelecimento.',ago9:'Google · há 9 meses',ago1:'Google · há 1 ano',ratingNote:'avaliação apresentada na ficha pública · 26 votos consultados'},
    gallery:{eyebrow:'FOTOS REAIS',title:'Sabores que falam por si'},
    contact:{eyebrow:'VENHA VISITAR-NOS',title:'A sua próxima refeição pode ser aqui.',text:'Guarde a morada, ligue diretamente ou abra a localização no Google Maps.',address:'Morada',phone:'Telefone',hours:'Horário',schedule:'Terça a domingo · 10:00–23:00<br>Segunda · fechado'},
    labels:{location:'Abrir localização no Google Maps',call:'Ligar para 698 238 816',home:'Sueño de Juventud, início',openMenu:'Abrir menu',down:'Descer',close:'Fechar',gallery:'Ver foto',whatsapp:'Escrever no WhatsApp'},footer:'© 2026 Sueño de Juventud · Bar & Café'
  }
};


const etiquetasCategoriasMenu = {
  es: {'Entrantes':'Entrantes','Platos combinados':'Platos combinados','Hamburguesas':'Hamburguesas','Sandwich':'Sandwich','Bocadillos':'Bocadillos','Pizzas':'Pizzas','Postres':'Postres','Bebidas frías':'Bebidas frías','Cafés':'Cafés','Cervezas':'Cervezas','Copas':'Copas'},
  en: {'Entrantes':'Starters','Platos combinados':'Combo dishes','Hamburguesas':'Burgers','Sandwich':'Sandwiches','Bocadillos':'Filled rolls','Pizzas':'Pizzas','Postres':'Desserts','Bebidas frías':'Cold drinks','Cafés':'Coffee & hot drinks','Cervezas':'Beers','Copas':'Spirits & cocktails'},
  de: {'Entrantes':'Vorspeisen','Platos combinados':'Kombiteller','Hamburguesas':'Burger','Sandwich':'Sandwiches','Bocadillos':'Belegte Brötchen','Pizzas':'Pizza','Postres':'Desserts','Bebidas frías':'Kalte Getränke','Cafés':'Kaffee & Heißgetränke','Cervezas':'Biere','Copas':'Spirituosen & Cocktails'},
  nl: {'Entrantes':'Voorgerechten','Platos combinados':'Combinatieschotels','Hamburguesas':'Hamburgers','Sandwich':'Sandwiches','Bocadillos':'Belegde broodjes','Pizzas':'Pizza','Postres':'Desserts','Bebidas frías':'Koude dranken','Cafés':'Koffie & warme dranken','Cervezas':'Bieren','Copas':'Sterke drank & cocktails'},
  fr: {'Entrantes':'Entrées','Platos combinados':'Plats complets','Hamburguesas':'Burgers','Sandwich':'Sandwichs','Bocadillos':'Bocadillos','Pizzas':'Pizzas','Postres':'Desserts','Bebidas frías':'Boissons fraîches','Cafés':'Cafés & boissons chaudes','Cervezas':'Bières','Copas':'Alcools & cocktails'},
  pt: {'Entrantes':'Entradas','Platos combinados':'Pratos combinados','Hamburguesas':'Hambúrgueres','Sandwich':'Sanduíches','Bocadillos':'Bocadillos','Pizzas':'Pizzas','Postres':'Sobremesas','Bebidas frías':'Bebidas frias','Cafés':'Cafés & bebidas quentes','Cervezas':'Cervejas','Copas':'Destilados & cocktails'}
};

const frasesMenu = {
  en: [['Pechuga empanada, ensalada y papas fritas','Breaded chicken breast, salad and fries'],['Cerdo frito / plancha, ensalada y papas fritas','Fried / grilled pork, salad and fries'],['Lágrima de pollo, ensalada y papas fritas','Chicken strips, salad and fries'],['Croquetas y papas fritas','Croquettes and fries'],['Plato cubano','Cuban dish'],['Pollo o cerdo','Chicken or pork'],['Ternera','Beef'],['Mixta','Mixed'],['Guarnición de papas fritas','Side of fries'],['Ración de papas fritas','Portion of fries'],['Pechuga Especial','Special chicken breast'],['Pechuga Empanada','Breaded chicken breast'],['Carne Molida','Minced beef'],['Vueltas Especial','Special grilled beef'],['Vueltas','Grilled beef'],['Cerdo','Pork'],['Pata Asada','Roast pork leg'],['Jamón','Ham'],['Bacon','Bacon'],['Minuta de pescado','Fish fillet'],['Perrito','Hot dog'],['Pan con lechón','Cuban roast pork roll'],['Margarita — tomate, queso, orégano','Margherita — tomato, cheese, oregano'],['Vegetal — tomate, cebolla, pimentón, queso, orégano','Vegetable — tomato, onion, pepper, cheese, oregano'],['Jamón — tomate, jamón, queso, orégano','Ham — tomato, ham, cheese, oregano'],['Marinera — tomate, queso, atún, gambas, orégano','Seafood — tomato, cheese, tuna, prawns, oregano'],['Pescatore — tomate, queso, cebolla, atún, orégano','Pescatore — tomato, cheese, onion, tuna, oregano'],['Hawai — tomate, queso, pollo, piña','Hawaiian — tomato, cheese, chicken, pineapple'],['Ingredientes extras','Extra ingredients'],['Algo dulce','Something sweet'],['Helado (cono)','Ice cream cone'],['Helado Santory','Santory ice cream'],['Helado (vaso pequeño)','Small ice cream cup'],['Helado (vaso grande)','Large ice cream cup'],['Batidos naturales','Fresh fruit shakes'],['Coca Cola botella','Coca-Cola bottle'],['Coca Cola lata','Coca-Cola can'],['Fanta lata','Fanta can'],['Fanta limón botella','Lemon Fanta bottle'],['Fanta naranja botella','Orange Fanta bottle'],['Sprite botella','Sprite bottle'],['Seven Up botella','7UP bottle'],['Tónica','Tonic water'],['Agua botella','Bottled water'],['Agua con gas botella','Sparkling water bottle'],['Agua (vaso)','Water (glass)'],['Zumo de naranja natural','Fresh orange juice'],['Zumo botella','Juice bottle'],['Zumo','Juice'],['Té','Tea'],['Infusiones','Herbal tea'],['Café con leche','Coffee with milk'],['Café largo','Long coffee'],['Cortado corto','Short cortado'],['Cortado largo','Long cortado'],['Café Expresso','Espresso'],['Carajillo','Carajillo coffee'],['Capuccino','Cappuccino'],['Leche y leche','Leche y leche'],['Americano','Americano'],['Tropical botella','Tropical bottle'],['Tropical lata','Tropical can'],['Botellín Tropical','Tropical small bottle'],['Botellín Águila','Águila small bottle'],['Caña Tropical','Tropical draught beer'],['Jarra Tropical','Tropical jug'],['Dorada Especial botella','Dorada Especial bottle'],['Estrella de Galicia botella','Estrella de Galicia bottle'],['Heineken lata','Heineken can'],['Heineken botella','Heineken bottle'],['Cerveza Corona','Corona beer'],['Cerveza Mahou','Mahou beer'],['Cerveza Corona botellín','Corona small bottle'],['Copas y combinados','Spirits & cocktails']],
  de: [['Pechuga empanada, ensalada y papas fritas','Paniertes Hähnchen, Salat und Pommes'],['Cerdo frito / plancha, ensalada y papas fritas','Gebratenes / gegrilltes Schwein, Salat und Pommes'],['Lágrima de pollo, ensalada y papas fritas','Hähnchenstreifen, Salat und Pommes'],['Croquetas y papas fritas','Kroketten und Pommes'],['Plato cubano','Kubanischer Teller'],['Pollo o cerdo','Hähnchen oder Schwein'],['Ternera','Rind'],['Mixta','Gemischt'],['Guarnición de papas fritas','Portion Pommes'],['Ración de papas fritas','Portion Pommes'],['Pechuga Especial','Hähnchen Spezial'],['Pechuga Empanada','Paniertes Hähnchen'],['Carne Molida','Hackfleisch'],['Vueltas Especial','Gegrilltes Rind Spezial'],['Vueltas','Gegrilltes Rind'],['Cerdo','Schwein'],['Pata Asada','Schweinekeule'],['Jamón','Schinken'],['Minuta de pescado','Fischfilet'],['Perrito','Hotdog'],['Pan con lechón','Kubanisches Spanferkelbrötchen'],['Margarita — tomate, queso, orégano','Margherita — Tomate, Käse, Oregano'],['Vegetal — tomate, cebolla, pimentón, queso, orégano','Vegetarisch — Tomate, Zwiebel, Paprika, Käse, Oregano'],['Jamón — tomate, jamón, queso, orégano','Schinken — Tomate, Schinken, Käse, Oregano'],['Marinera — tomate, queso, atún, gambas, orégano','Meeresfrüchte — Tomate, Käse, Thunfisch, Garnelen, Oregano'],['Pescatore — tomate, queso, cebolla, atún, orégano','Pescatore — Tomate, Käse, Zwiebel, Thunfisch, Oregano'],['Hawai — tomate, queso, pollo, piña','Hawaii — Tomate, Käse, Hähnchen, Ananas'],['Ingredientes extras','Extra Zutaten'],['Helado (cono)','Eiswaffel'],['Helado Santory','Santory-Eis'],['Helado (vaso pequeño)','Kleiner Eisbecher'],['Helado (vaso grande)','Großer Eisbecher'],['Batidos naturales','Frische Fruchtshakes'],['Zumo de naranja natural','Frischer Orangensaft'],['Zumo botella','Saftflasche'],['Zumo','Saft'],['Té','Tee'],['Infusiones','Kräutertee'],['Café con leche','Kaffee mit Milch'],['Café largo','Langer Kaffee'],['Cortado corto','Kurzer Cortado'],['Cortado largo','Langer Cortado'],['Café Expresso','Espresso'],['Carajillo','Carajillo-Kaffee'],['Leche y leche','Leche y leche'],['Americano','Americano'],['Tropical botella','Tropical Flasche'],['Tropical lata','Tropical Dose'],['Botellín Tropical','Tropical Kleinflasche'],['Botellín Águila','Águila Kleinflasche'],['Caña Tropical','Tropical vom Fass'],['Jarra Tropical','Tropical Krug'],['Estrella de Galicia botella','Estrella de Galicia Flasche'],['Heineken lata','Heineken Dose'],['Heineken botella','Heineken Flasche'],['Cerveza Corona','Corona Bier'],['Cerveza Mahou','Mahou Bier'],['Cerveza Corona botellín','Corona Kleinflasche']],
  nl: [['Pechuga empanada, ensalada y papas fritas','Gepaneerde kipfilet, salade en friet'],['Cerdo frito / plancha, ensalada y papas fritas','Gebakken / gegrild varkensvlees, salade en friet'],['Lágrima de pollo, ensalada y papas fritas','Kipreepjes, salade en friet'],['Croquetas y papas fritas','Kroketten en friet'],['Plato cubano','Cubaanse schotel'],['Pollo o cerdo','Kip of varkensvlees'],['Ternera','Rundvlees'],['Mixta','Gemengd'],['Guarnición de papas fritas','Portie friet'],['Ración de papas fritas','Portie friet'],['Pechuga Especial','Speciale kipfilet'],['Pechuga Empanada','Gepaneerde kipfilet'],['Carne Molida','Gehakt'],['Vueltas Especial','Speciale gegrilde rundvleesreepjes'],['Vueltas','Gegrild rundvlees'],['Cerdo','Varkensvlees'],['Pata Asada','Gebraden varkenspoot'],['Jamón','Ham'],['Minuta de pescado','Visfilet'],['Perrito','Hotdog'],['Pan con lechón','Broodje Cubaans varkensvlees'],['Margarita — tomate, queso, orégano','Margherita — tomaat, kaas, oregano'],['Vegetal — tomate, cebolla, pimentón, queso, orégano','Groente — tomaat, ui, paprika, kaas, oregano'],['Jamón — tomate, jamón, queso, orégano','Ham — tomaat, ham, kaas, oregano'],['Marinera — tomate, queso, atún, gambas, orégano','Zeevruchten — tomaat, kaas, tonijn, garnalen, oregano'],['Hawai — tomate, queso, pollo, piña','Hawaï — tomaat, kaas, kip, ananas'],['Ingredientes extras','Extra ingrediënten'],['Helado (cono)','IJsje'],['Helado Santory','Santory-ijs'],['Helado (vaso pequeño)','Klein ijsbekertje'],['Helado (vaso grande)','Groot ijsbekertje'],['Batidos naturales','Verse fruitshakes'],['Zumo de naranja natural','Verse sinaasappelsap'],['Zumo botella','Flesje sap'],['Zumo','Sap'],['Té','Thee'],['Infusiones','Kruidenthee'],['Café con leche','Koffie met melk'],['Café largo','Lange koffie'],['Cortado corto','Korte cortado'],['Cortado largo','Lange cortado'],['Café Expresso','Espresso'],['Carajillo','Carajillo-koffie'],['Leche y leche','Leche y leche'],['Americano','Americano'],['Tropical botella','Tropical fles'],['Tropical lata','Tropical blik'],['Botellín Tropical','Tropical klein flesje'],['Botellín Águila','Águila klein flesje'],['Caña Tropical','Tropical van de tap'],['Jarra Tropical','Tropical kan'],['Estrella de Galicia botella','Estrella de Galicia fles'],['Heineken lata','Heineken blik'],['Heineken botella','Heineken fles'],['Cerveza Corona','Corona bier'],['Cerveza Mahou','Mahou bier'],['Cerveza Corona botellín','Corona klein flesje']],
  fr: [['Pechuga empanada, ensalada y papas fritas','Blanc de poulet pané, salade et frites'],['Cerdo frito / plancha, ensalada y papas fritas','Porc frit / grillé, salade et frites'],['Lágrima de pollo, ensalada y papas fritas','Lanières de poulet, salade et frites'],['Croquetas y papas fritas','Croquettes et frites'],['Plato cubano','Plat cubain'],['Pollo o cerdo','Poulet ou porc'],['Ternera','Bœuf'],['Mixta','Mixte'],['Guarnición de papas fritas','Portion de frites'],['Ración de papas fritas','Portion de frites'],['Pechuga Especial','Poulet spécial'],['Pechuga Empanada','Poulet pané'],['Carne Molida','Bœuf haché'],['Vueltas Especial','Bœuf grillé spécial'],['Vueltas','Bœuf grillé'],['Cerdo','Porc'],['Pata Asada','Jambon de porc rôti'],['Jamón','Jambon'],['Minuta de pescado','Filet de poisson'],['Perrito','Hot-dog'],['Pan con lechón','Pain au porc rôti cubain'],['Margarita — tomate, queso, orégano','Margherita — tomate, fromage, origan'],['Vegetal — tomate, cebolla, pimentón, queso, orégano','Végétale — tomate, oignon, poivron, fromage, origan'],['Jamón — tomate, jamón, queso, orégano','Jambon — tomate, jambon, fromage, origan'],['Marinera — tomate, queso, atún, gambas, orégano','Fruits de mer — tomate, fromage, thon, crevettes, origan'],['Hawai — tomate, queso, pollo, piña','Hawaï — tomate, fromage, poulet, ananas'],['Ingredientes extras','Ingrédients supplémentaires'],['Helado (cono)','Cornet de glace'],['Helado Santory','Glace Santory'],['Helado (vaso pequeño)','Petit pot de glace'],['Helado (vaso grande)','Grand pot de glace'],['Batidos naturales','Milk-shakes aux fruits frais'],['Zumo de naranja natural','Jus d’orange frais'],['Zumo botella','Bouteille de jus'],['Zumo','Jus'],['Té','Thé'],['Infusiones','Infusions'],['Café con leche','Café au lait'],['Café largo','Café allongé'],['Cortado corto','Petit cortado'],['Cortado largo','Grand cortado'],['Café Expresso','Espresso'],['Carajillo','Café carajillo'],['Leche y leche','Leche y leche'],['Americano','Américain'],['Tropical botella','Tropical bouteille'],['Tropical lata','Tropical canette'],['Botellín Tropical','Petite Tropical'],['Botellín Águila','Petite Águila'],['Caña Tropical','Tropical pression'],['Jarra Tropical','Pichet de Tropical'],['Estrella de Galicia botella','Estrella de Galicia bouteille'],['Heineken lata','Heineken canette'],['Heineken botella','Heineken bouteille'],['Cerveza Corona','Bière Corona'],['Cerveza Mahou','Bière Mahou'],['Cerveza Corona botellín','Petite Corona']],
  pt: [['Pechuga empanada, ensalada y papas fritas','Peito de frango panado, salada e batatas fritas'],['Cerdo frito / plancha, ensalada y papas fritas','Porco frito / grelhado, salada e batatas fritas'],['Lágrima de pollo, ensalada y papas fritas','Tiras de frango, salada e batatas fritas'],['Croquetas y papas fritas','Croquetes e batatas fritas'],['Plato cubano','Prato cubano'],['Pollo o cerdo','Frango ou porco'],['Ternera','Vitela'],['Mixta','Mista'],['Guarnición de papas fritas','Dose de batatas fritas'],['Ración de papas fritas','Dose de batatas fritas'],['Pechuga Especial','Peito de frango especial'],['Pechuga Empanada','Peito de frango panado'],['Carne Molida','Carne picada'],['Vueltas Especial','Carne grelhada especial'],['Vueltas','Carne grelhada'],['Cerdo','Porco'],['Pata Asada','Perna de porco assada'],['Jamón','Fiambre'],['Minuta de pescado','Filete de peixe'],['Perrito','Cachorro-quente'],['Pan con lechón','Pão com leitão cubano'],['Margarita — tomate, queso, orégano','Margherita — tomate, queijo, orégãos'],['Vegetal — tomate, cebolla, pimentón, queso, orégano','Vegetal — tomate, cebola, pimento, queijo, orégãos'],['Jamón — tomate, jamón, queso, orégano','Fiambre — tomate, fiambre, queijo, orégãos'],['Marinera — tomate, queso, atún, gambas, orégano','Marinheira — tomate, queijo, atum, camarão, orégãos'],['Hawai — tomate, queso, pollo, piña','Havaiana — tomate, queijo, frango, ananás'],['Ingredientes extras','Ingredientes extra'],['Helado (cono)','Gelado em cone'],['Helado Santory','Gelado Santory'],['Helado (vaso pequeño)','Copo pequeno de gelado'],['Helado (vaso grande)','Copo grande de gelado'],['Batidos naturales','Batidos de fruta natural'],['Zumo de naranja natural','Sumo de laranja natural'],['Zumo botella','Garrafa de sumo'],['Zumo','Sumo'],['Té','Chá'],['Infusiones','Infusões'],['Café con leche','Café com leite'],['Café largo','Café longo'],['Cortado corto','Cortado curto'],['Cortado largo','Cortado longo'],['Café Expresso','Expresso'],['Carajillo','Café carajillo'],['Leche y leche','Leche y leche'],['Americano','Americano'],['Tropical botella','Tropical garrafa'],['Tropical lata','Tropical lata'],['Botellín Tropical','Tropical pequena'],['Botellín Águila','Águila pequena'],['Caña Tropical','Tropical de pressão'],['Jarra Tropical','Jarro de Tropical'],['Estrella de Galicia botella','Estrella de Galicia garrafa'],['Heineken lata','Heineken lata'],['Heineken botella','Heineken garrafa'],['Cerveza Corona','Cerveja Corona'],['Cerveza Mahou','Cerveja Mahou'],['Cerveza Corona botellín','Corona pequena']]
};


const etiquetasMetaMenu = {
  es: {'Entrantes':['Para compartir','Entrantes'],'Platos combinados':['Comida completa','Platos combinados'],'Hamburguesas':['Hamburguesas','Hamburguesas'],'Sandwich':['Sandwiches','Sandwich'],'Bocadillos':['Bocadillos','Bocadillos'],'Pizzas':['Pizza','Pizzas'],'Postres':['Algo dulce','Postres'],'Bebidas frías':['Refrescos y zumos','Bebidas frías'],'Cafés':['Cafetería','Cafés y bebidas calientes'],'Cervezas':['Cervezas','Cervezas'],'Copas':['Copas y combinados','Copas y combinados']},
  en: {'Entrantes':['For sharing','Starters'],'Platos combinados':['Complete meals','Combo dishes'],'Hamburguesas':['Burgers','Burgers'],'Sandwich':['Sandwiches','Sandwiches'],'Bocadillos':['Filled rolls','Filled rolls'],'Pizzas':['Pizza','Pizzas'],'Postres':['Something sweet','Desserts'],'Bebidas frías':['Soft drinks & juices','Cold drinks'],'Cafés':['Coffee','Coffee & hot drinks'],'Cervezas':['Beers','Beers'],'Copas':['Spirits & cocktails','Spirits & cocktails']},
  de: {'Entrantes':['Zum Teilen','Vorspeisen'],'Platos combinados':['Komplette Mahlzeiten','Kombiteller'],'Hamburguesas':['Burger','Burger'],'Sandwich':['Sandwiches','Sandwiches'],'Bocadillos':['Belegte Brötchen','Belegte Brötchen'],'Pizzas':['Pizza','Pizza'],'Postres':['Etwas Süßes','Desserts'],'Bebidas frías':['Erfrischungsgetränke & Säfte','Kalte Getränke'],'Cafés':['Kaffee','Kaffee & Heißgetränke'],'Cervezas':['Biere','Biere'],'Copas':['Spirituosen & Cocktails','Spirituosen & Cocktails']},
  nl: {'Entrantes':['Om te delen','Voorgerechten'],'Platos combinados':['Complete maaltijden','Combinatieschotels'],'Hamburguesas':['Hamburgers','Hamburgers'],'Sandwich':['Sandwiches','Sandwiches'],'Bocadillos':['Belegde broodjes','Belegde broodjes'],'Pizzas':['Pizza','Pizza'],'Postres':['Iets zoets','Desserts'],'Bebidas frías':['Frisdranken & sappen','Koude dranken'],'Cafés':['Koffie','Koffie & warme dranken'],'Cervezas':['Bieren','Bieren'],'Copas':['Sterke drank & cocktails','Sterke drank & cocktails']},
  fr: {'Entrantes':['À partager','Entrées'],'Platos combinados':['Plats complets','Plats complets'],'Hamburguesas':['Burgers','Burgers'],'Sandwich':['Sandwichs','Sandwichs'],'Bocadillos':['Bocadillos','Bocadillos'],'Pizzas':['Pizza','Pizzas'],'Postres':['Une touche sucrée','Desserts'],'Bebidas frías':['Sodas & jus','Boissons fraîches'],'Cafés':['Café','Cafés & boissons chaudes'],'Cervezas':['Bières','Bières'],'Copas':['Alcools & cocktails','Alcools & cocktails']},
  pt: {'Entrantes':['Para partilhar','Entradas'],'Platos combinados':['Refeições completas','Pratos combinados'],'Hamburguesas':['Hambúrgueres','Hambúrgueres'],'Sandwich':['Sanduíches','Sanduíches'],'Bocadillos':['Bocadillos','Bocadillos'],'Pizzas':['Pizza','Pizzas'],'Postres':['Algo doce','Sobremesas'],'Bebidas frías':['Refrigerantes & sumos','Bebidas frias'],'Cafés':['Café','Cafés & bebidas quentes'],'Cervezas':['Cervejas','Cervejas'],'Copas':['Destilados & cocktails','Destilados & cocktails']}
};

function traducirTextoMenu(text, lang){
  if(lang === 'es') return text;
  const extraPhrases = {"en": [["Croquetas", "Croquettes"], ["Tostones", "Tostones"], ["Chicharrones", "Pork cracklings"], ["Ensalada Mixta", "Mixed salad"], ["Gofio escaldado", "Scalded gofio"], ["Potaje / Sopa / Caldo", "Stew / Soup / Broth"], ["Tamal", "Tamale"], ["Cafés y bebidas calientes", "Coffee & hot drinks"], ["Hamburguesas", "Burgers"], ["Sandwich", "Sandwich"], ["Bocadillos", "Filled rolls"], ["Postres", "Desserts"], ["Bebidas frías", "Cold drinks"], ["Cervezas", "Beers"], ["Copas y combinados", "Spirits & cocktails"], ["Copas", "Spirits & cocktails"]], "de": [["Croquetas", "Kroketten"], ["Tostones", "Tostones"], ["Chicharrones", "Schweinekrusten"], ["Ensalada Mixta", "Gemischter Salat"], ["Gofio escaldado", "Gofio escaldado"], ["Potaje / Sopa / Caldo", "Eintopf / Suppe / Brühe"], ["Tamal", "Tamale"], ["Cafés y bebidas calientes", "Kaffee & Heißgetränke"], ["Hamburguesas", "Burger"], ["Sandwich", "Sandwiches"], ["Bocadillos", "Belegte Brötchen"], ["Postres", "Desserts"], ["Bebidas frías", "Kalte Getränke"], ["Cervezas", "Biere"], ["Copas y combinados", "Spirituosen & Cocktails"]], "nl": [["Croquetas", "Kroketten"], ["Tostones", "Tostones"], ["Chicharrones", "Varkensknabbels"], ["Ensalada Mixta", "Gemengde salade"], ["Gofio escaldado", "Gofio"], ["Potaje / Sopa / Caldo", "Stoofpot / soep / bouillon"], ["Tamal", "Tamale"], ["Cafés y bebidas calientes", "Koffie & warme dranken"], ["Hamburguesas", "Hamburgers"], ["Sandwich", "Sandwiches"], ["Bocadillos", "Belegde broodjes"], ["Postres", "Desserts"], ["Bebidas frías", "Koude dranken"], ["Cervezas", "Bieren"], ["Copas y combinados", "Sterke drank & cocktails"]], "fr": [["Croquetas", "Croquettes"], ["Tostones", "Tostones"], ["Chicharrones", "Grattons de porc"], ["Ensalada Mixta", "Salade composée"], ["Gofio escaldado", "Gofio escaldé"], ["Potaje / Sopa / Caldo", "Ragoût / soupe / bouillon"], ["Tamal", "Tamale"], ["Cafés y bebidas calientes", "Cafés & boissons chaudes"], ["Hamburguesas", "Burgers"], ["Sandwich", "Sandwichs"], ["Bocadillos", "Bocadillos"], ["Postres", "Desserts"], ["Bebidas frías", "Boissons fraîches"], ["Cervezas", "Bières"], ["Copas y combinados", "Alcools & cocktails"]], "pt": [["Croquetas", "Croquetes"], ["Tostones", "Tostones"], ["Chicharrones", "Torresmos de porco"], ["Ensalada Mixta", "Salada mista"], ["Gofio escaldado", "Gofio escaldado"], ["Potaje / Sopa / Caldo", "Guisado / sopa / caldo"], ["Tamal", "Tamale"], ["Cafés y bebidas calientes", "Cafés & bebidas quentes"], ["Hamburguesas", "Hambúrgueres"], ["Sandwich", "Sanduíches"], ["Bocadillos", "Bocadillos"], ["Postres", "Sobremesas"], ["Bebidas frías", "Bebidas frias"], ["Cervezas", "Cervejas"], ["Copas y combinados", "Destilados & cocktails"]]};
  const pairs = [...(extraPhrases[lang] || []), ...(frasesMenu[lang] || [])];
  for(const [from,to] of pairs){ if(text === from) return to; }
  const common = {
    en:[['botella','bottle'],['lata','can'],['ml','ml'],['Tropical limón','Tropical lemon'],['Tropical de limón','Tropical lemon'],['Coca Cola 0','Coca-Cola Zero'],['Coca Cola 00','Coca-Cola Zero Zero'],['Tónica','Tonic water'],['Agua con gas','Sparkling water'],['Agua','Water'],['Zumo de naranja natural','Fresh orange juice'],['Zumo','Juice'],['Cerveza','Beer'],['copa','glass'],['Desde','From'],['años','years'],['corto','short'],['largo','long']],
    de:[['botella','Flasche'],['lata','Dose'],['Tropical limón','Tropical Zitrone'],['Tropical de limón','Tropical Zitrone'],['Coca Cola 0','Coca-Cola Zero'],['Coca Cola 00','Coca-Cola Zero Zero'],['Tónica','Tonic Water'],['Agua con gas','Mineralwasser mit Kohlensäure'],['Agua','Wasser'],['Zumo de naranja natural','Frischer Orangensaft'],['Zumo','Saft'],['Cerveza','Bier'],['copa','Glas'],['Desde','Ab'],['años','Jahre'],['corto','kurz'],['largo','lang']],
    nl:[['botella','fles'],['lata','blik'],['Tropical limón','Tropical citroen'],['Tropical de limón','Tropical citroen'],['Coca Cola 0','Coca-Cola Zero'],['Coca Cola 00','Coca-Cola Zero Zero'],['Tónica','Tonic'],['Agua con gas','Bruiswater'],['Agua','Water'],['Zumo de naranja natural','Verse sinaasappelsap'],['Zumo','Sap'],['Cerveza','Bier'],['copa','glas'],['Desde','Vanaf'],['años','jaar'],['corto','kort'],['largo','lang']],
    fr:[['botella','bouteille'],['lata','canette'],['Tropical limón','Tropical citron'],['Tropical de limón','Tropical citron'],['Coca Cola 0','Coca-Cola Zéro'],['Coca Cola 00','Coca-Cola Zéro Zéro'],['Tónica','Eau tonique'],['Agua con gas','Eau gazeuse'],['Agua','Eau'],['Zumo de naranja natural','Jus d’orange frais'],['Zumo','Jus'],['Cerveza','Bière'],['copa','verre'],['Desde','À partir de'],['años','ans'],['corto','court'],['largo','long']],
    pt:[['botella','garrafa'],['lata','lata'],['Tropical limón','Tropical limão'],['Tropical de limón','Tropical limão'],['Coca Cola 0','Coca-Cola Zero'],['Coca Cola 00','Coca-Cola Zero Zero'],['Tónica','Água tónica'],['Agua con gas','Água com gás'],['Agua','Água'],['Zumo de naranja natural','Sumo de laranja natural'],['Zumo','Sumo'],['Cerveza','Cerveja'],['copa','copo'],['Desde','Desde'],['años','anos'],['corto','curto'],['largo','longo']]
  };
  let out=text;
  for(const [from,to] of (common[lang]||[])) out=out.split(from).join(to);
  return out;
}

let idiomaActual = localStorage.getItem('suenoLanguage') || 'es';
function obtenerRuta(obj, path){ return path.split('.').reduce((o,k)=>o?.[k],obj); }
function traducir(key){ return obtenerRuta(traducciones[idiomaActual], key) || obtenerRuta(traducciones.es,key) || key; }

function aplicarIdioma(lang){
  if(!traducciones[lang]) lang='es';
  idiomaActual=lang;
  localStorage.setItem('suenoLanguage', lang);
  document.documentElement.lang=lang;
  document.title=traducir('title');
  document.documentElement.style.setProperty('--gallery-view', JSON.stringify(traducir('labels.gallery')));
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.innerHTML=traducir(el.dataset.i18n); });
  const brandSub=document.querySelector('.brand-sub'); if(brandSub) brandSub.textContent=traducir('brand.sub');
  const staticAlt = {
    es:['Plato cubano','Hamburguesa de la casa','Pizza de jamón','Café con leche'],
    en:['Cuban platter','House burger','Ham pizza','Coffee with milk'],
    de:['Kubanischer Teller','Hausburger','Schinkenpizza','Kaffee mit Milch'],
    nl:['Cubaanse schotel','Hamburger van het huis','Hampizza','Koffie met melk'],
    fr:['Assiette cubaine','Burger maison','Pizza au jambon','Café au lait'],
    pt:['Prato cubano','Hambúrguer da casa','Pizza de fiambre','Café com leite']
  }[idiomaActual];
  document.querySelectorAll('.food-card img').forEach((img,i)=>{ if(staticAlt?.[i]) img.alt=staticAlt[i]; });
  const heroImg=document.querySelector('.hero-bg'); if(heroImg) heroImg.alt={es:'Plato cubano de Sueño de Juventud',en:'Cuban platter at Sueño de Juventud',de:'Kubanischer Teller im Sueño de Juventud',nl:'Cubaanse schotel bij Sueño de Juventud',fr:'Assiette cubaine au Sueño de Juventud',pt:'Prato cubano do Sueño de Juventud'}[idiomaActual];
  const quotes=document.querySelectorAll('[data-i18n^="reviews.quote"]'); quotes.forEach(el=>{ el.innerHTML=traducir(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el=>{ el.setAttribute('aria-label',traducir(el.dataset.i18nAria)); });
  const select=document.querySelector('#languageSelect'); if(select) select.value=lang;
  const location=document.querySelector('.topbar-inner a:first-child'); if(location) location.setAttribute('aria-label',traducir('labels.location'));
  const phone=document.querySelector('.topbar-inner a:nth-child(2)'); if(phone) phone.setAttribute('aria-label',traducir('labels.call'));
  const brand=document.querySelector('.brand'); if(brand) brand.setAttribute('aria-label',traducir('labels.home'));
  const toggle=document.querySelector('#menuToggle'); if(toggle) toggle.setAttribute('aria-label',traducir('labels.openMenu'));
  const down=document.querySelector('.scroll-down'); if(down) down.setAttribute('aria-label',traducir('labels.down'));
  const wa=document.querySelector('.floating-whatsapp'); if(wa) wa.setAttribute('aria-label',traducir('labels.whatsapp'));
  const close=document.querySelector('#lightboxClose'); if(close) close.setAttribute('aria-label',traducir('labels.close'));
  document.querySelectorAll('.gallery-item').forEach(item=>item.setAttribute('aria-label',traducir('labels.gallery')));
  mostrarCategoriaMenu(categoriaMenuActiva);
}
const carta = {
  "Entrantes": {
    tag: "Para compartir",
    image: "img/chicharrones.jpeg",
    title: "Entrantes",
    items: [["Croquetas", "5,60 €"],["Tostones", "5,00 €"],["Chicharrones", "5,00 €"],["Ensalada Mixta", "5,30 €"],["Gofio escaldado", "6,00 €"],["Potaje / Sopa / Caldo", "5,00 €"],["Tamal", "5,00 €"]]
  },
  "Platos combinados": {
    tag: "Comida completa",
    image: "img/plato-cubano.jpeg",
    title: "Platos combinados",
    items: [["Pechuga empanada, ensalada y papas fritas", "1/2 6,30 € · Ración 10,00 €"],["Cerdo frito / plancha, ensalada y papas fritas", "1/2 7,00 € · Ración 11,30 €"],["Lágrima de pollo, ensalada y papas fritas", "1/2 6,00 € · Ración 9,50 €"],["Croquetas y papas fritas", "1/2 5,00 € · Ración 8,50 €"],["Plato cubano", "1/2 7,50 € · Ración 12,90 €"]]
  },
  "Hamburguesas": {
    tag: "Hamburguesas",
    image: "img/hamburguesa.jpeg",
    title: "Hamburguesas",
    items: [["Pollo o cerdo 120 g", "3,00 €"],["Ternera 120 g", "3,50 €"],["Mixta 120 g", "3,50 €"],["Mixta 180 g", "4,00 €"],["Guarnición de papas fritas", "2,00 €"],["Ración de papas fritas", "3,00 €"]]
  },
  "Sandwich": {
    tag: "Sandwiches",
    image: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/FNDV67LRXBCQZHTV4KBJTEFNXA.jpeg",
    photoClass: "canary-sandwich",
    fallback: "img/hamburguesa.jpeg",
    title: "Sandwich",
    items: [["Mixto", "2,80 €"],["Vegetal", "3,00 €"],["Vegetal y millo", "3,30 €"],["Vegetal, atún y pollo", "3,50 €"],["Vegetal con gambas", "4,00 €"]]
  },
  "Bocadillos": {
    tag: "Bocadillos",
    image: "https://1000sitiosquever.com/public/images/supima-3578-bocadillo-de-pata-y-mercado-central.jpg",
    photoClass: "canary-bocadillo",
    fallback: "img/pollo-y-empanada.jpeg",
    title: "Bocadillos",
    items: [["Pechuga", "3,30 €"],["Pechuga Especial", "4,50 €"],["Pechuga Empanada", "3,70 €"],["Carne Molida", "4,00 €"],["Vueltas", "3,70 €"],["Vueltas Especial", "4,90 €"],["Cerdo", "3,50 €"],["Pata Asada", "3,90 €"],["Jamón", "3,50 €"],["Bacon", "3,50 €"],["Minuta de pescado", "4,00 €"],["Perrito", "3,00 €"],["Pan con lechón", "3,90 €"]]
  },
  "Pizzas": {
    tag: "Pizza",
    image: "img/pizza-jamon.jpeg",
    title: "Pizzas",
    items: [["Margarita — tomate, queso, orégano", "6,70 €"],["Vegetal — tomate, cebolla, pimentón, queso, orégano", "7,70 €"],["Jamón — tomate, jamón, queso, orégano", "7,90 €"],["Marinera — tomate, queso, atún, gambas, orégano", "8,90 €"],["Pescatore — tomate, queso, cebolla, atún, orégano", "8,30 €"],["Hawai — tomate, queso, pollo, piña", "8,30 €"],["Ingredientes extras", "1,00 €"]]
  },
  "Postres": {
    tag: "Algo dulce",
    image: "img/flan.jpeg",
    title: "Postres",
    items: [["Helado (cono)", "1,50 €"],["Helado Santory", "2,70 €"],["Helado (vaso pequeño)", "1,50 €"],["Helado (vaso grande)", "2,50 €"],["Flan", "3,50 €"],["Batidos naturales", "3,00 €"],["Natillas", "3,00 €"]]
  },
  "Bebidas frías": {
    tag: "Refrescos y zumos",
    image: "drinks-pair",
    title: "Bebidas frías",
    items: [["Coca Cola botella 350 ml", "2,50 €"],["Coca Cola 0 botella 350 ml", "2,50 €"],["Coca Cola 00 botella 350 ml", "2,50 €"],["Coca Cola lata 330 ml", "1,80 €"],["Coca Cola 0 lata 330 ml", "1,80 €"],["Fanta lata 330 ml", "1,80 €"],["Fanta limón botella 350 ml", "2,50 €"],["Fanta naranja botella 350 ml", "2,50 €"],["Sprite botella 350 ml", "2,50 €"],["Sprite botella 200 ml", "2,00 €"],["Seven Up botella 350 ml", "2,50 €"],["Tónica 200 ml", "1,70 €"],["Agua botella 500 ml", "1,00 €"],["Agua botella 350 ml", "0,80 €"],["Agua con gas botella 500 ml", "1,00 €"],["Agua (vaso) 280 ml", "0,50 €"],["Clipper lata 330 ml", "1,80 €"],["Clipper botella 350 ml", "2,50 €"],["Nestea botella 300 ml", "2,30 €"],["Nestea lata 330 ml", "2,20 €"],["Zumo 200 ml", "1,80 €"],["Zumo botella 400 ml", "2,50 €"],["Zumo de naranja natural 280 ml", "3,50 €"],["Montser 500 ml", "2,00 €"],["Aquarius lata 330 ml", "1,80 €"],["Aquarius botella 300 ml", "2,00 €"],["Appletiser 275 ml", "2,00 €"],["Pepsi 200 ml", "2,00 €"],["Zumo 250 ml", "2,00 €"],["Schweppes lata 330 ml", "1,80 €"]]
  },
  "Cafés": {
    tag: "Cafetería",
    image: "img/cafe.jpeg",
    title: "Cafés y bebidas calientes",
    items: [["Café Expresso", "1,00 €"],["Café largo", "1,20 €"],["Cortado corto", "1,30 €"],["Cortado largo", "1,50 €"],["Café con leche", "1,50 €"],["Carajillo", "2,00 €"],["Capuccino", "1,50 €"],["Bombón corto", "1,30 €"],["Bombón largo", "1,50 €"],["Leche y leche corto", "1,30 €"],["Leche y leche largo", "1,50 €"],["Americano", "1,50 €"],["Té", "1,50 €"],["Infusiones", "1,30 €"]]
  },
  "Cervezas": {
    tag: "Cervezas",
    image: "img/cerveza-corona-recortada.jpeg",
    title: "Cervezas",
    items: [["Tropical botella", "1,90 €"],["Tropical lata", "1,80 €"],["Tropical 0 botella", "1,90 €"],["Tropical limón botella", "1,90 €"],["Tropical de limón lata", "1,80 €"],["Botellín Tropical", "1,20 €"],["Botellín Águila", "1,30 €"],["Caña Tropical", "1,50 €"],["Jarra Tropical", "2,50 €"],["Dorada Especial botella", "2,50 €"],["1906 botella", "2,80 €"],["Estrella de Galicia botella", "2,50 €"],["Heineken lata", "1,80 €"],["Heineken botella", "2,50 €"],["Cerveza Corona", "2,70 €"],["Cerveza Mahou", "2,00 €"],["Cerveza Corona botellín", "2,20 €"]]
  },
  "Copas": {
    tag: "Copas y combinados",
    image: "img/mojito.jpeg",
    title: "Copas y combinados",
    items: [["Cognac / Anís / Ginebra / Whisky / Ron / Vodka / Tequila / licores", "Desde 1,80 €"],["Baileys copa 60 ml", "3,50 €"],["Ron Blanco 60 ml", "1,90 €"],["Ron Carta Oro 60 ml", "1,90 €"],["Etiqueta Negra", "4,30 €"],["Etiqueta Roja", "2,80 €"],["Ron Bacardi", "2,30 €"],["Frangelico", "3,00 €"],["Ron Barcelo", "2,50 €"],["Santa Teresa", "2,50 €"],["Havana Club 3 años", "3,00 €"],["Havana Club 7 años", "4,00 €"],["Flor de Caña", "3,00 €"],["Casique", "2,50 €"],["Licor 43", "3,00 €"],["Cointreau", "3,00 €"],["Havana Especial", "3,50 €"],["Ginebras: Seagram's / Gordon's / Harahorn / Bombay / Tanqueray 00", "2,50–3,50 €"],["Martini Blanco / Rojo / Gold", "2,00–2,50 €"],["Vodkas: Smirnoff / Moskovskaya / Moskovskaya Rosa", "2,30 €"]]
  }
};

const traduccionesElementosMenu = {"en":{"Entrantes":["Croquettes","Tostones (fried green plantain)","Pork cracklings","Mixed salad","Scalded gofio","Stew / soup / broth","Tamale"],"Platos combinados":["Breaded chicken breast, salad and fries","Fried / grilled pork, salad and fries","Chicken strips, salad and fries","Croquettes and fries","Cuban platter"],"Hamburguesas":["Chicken or pork 120 g","Beef 120 g","Mixed 120 g","Mixed 180 g","Side of fries","Portion of fries"],"Sandwich":["Mixed sandwich","Vegetable sandwich","Vegetable and sweetcorn sandwich","Vegetable, tuna and chicken sandwich","Vegetable sandwich with prawns"],"Bocadillos":["Chicken breast roll","Special chicken breast roll","Breaded chicken breast roll","Minced beef roll","Grilled beef roll","Special grilled beef roll","Pork roll","Roast pork leg roll","Ham roll","Bacon roll","Fish fillet roll","Hot dog","Roast suckling pig roll"],"Pizzas":["Margherita — tomato, cheese, oregano","Vegetable — tomato, onion, pepper, cheese, oregano","Ham — tomato, ham, cheese, oregano","Seafood — tomato, cheese, tuna, prawns, oregano","Pescatore — tomato, cheese, onion, tuna, oregano","Hawaiian — tomato, cheese, chicken, pineapple","Extra ingredients"],"Postres":["Ice cream cone","Santory ice cream","Small ice cream cup","Large ice cream cup","Flan","Fresh fruit shakes","Custard"],"Bebidas frías":["Coca-Cola bottle 350 ml","Coca-Cola Zero bottle 350 ml","Coca-Cola Zero Zero bottle 350 ml","Coca-Cola can 330 ml","Coca-Cola Zero can 330 ml","Fanta can 330 ml","Lemon Fanta bottle 350 ml","Orange Fanta bottle 350 ml","Sprite bottle 350 ml","Sprite bottle 200 ml","Seven Up bottle 350 ml","Tonic water 200 ml","Water bottle 500 ml","Water bottle 350 ml","Sparkling water bottle 500 ml","Water glass 280 ml","Clipper can 330 ml","Clipper bottle 350 ml","Nestea bottle 300 ml","Nestea can 330 ml","Juice 200 ml","Juice bottle 400 ml","Fresh orange juice 280 ml","Monster 500 ml","Aquarius can 330 ml","Aquarius bottle 300 ml","Appletiser 275 ml","Pepsi 200 ml","Juice 250 ml","Schweppes can 330 ml"],"Cafés":["Espresso coffee","Long coffee","Short cortado","Long cortado","Coffee with milk","Carajillo","Cappuccino","Short bombón coffee","Long bombón coffee","Leche y leche short","Leche y leche long","Americano","Tea","Infusions"],"Cervezas":["Tropical bottle","Tropical can","Tropical 0 bottle","Tropical lemon bottle","Tropical lemon can","Small Tropical bottle","Small Águila bottle","Tropical draft beer","Tropical jug","Dorada Especial bottle","1906 bottle","Estrella de Galicia bottle","Heineken can","Heineken bottle","Corona beer","Mahou beer","Small Corona bottle"],"Copas":["Cognac / Anise / Gin / Whisky / Rum / Vodka / Tequila / liqueurs","Baileys 60 ml","White rum 60 ml","Carta Oro rum 60 ml","Black Label","Red Label","Bacardi rum","Frangelico","Barceló rum","Santa Teresa","Havana Club 3 years","Havana Club 7 years","Flor de Caña","Casique","Licor 43","Cointreau","Havana Especial","Gins: Seagram’s / Gordon’s / Harahorn / Bombay / Tanqueray 00","Martini White / Red / Gold","Vodkas: Smirnoff / Moskovskaya / Moskovskaya Pink"]},"de":{},"nl":{"Entrantes":["Kroketten","Tostones (gebakken bakbanaan)","Varkensknabbels","Gemengd salade","Gofio","Stoofpot / soep / bouillon","Tamale"],"Platos combinados":["Gepaneerde kipfilet, salade and friet","Gebakken / gegrild varkensvlees, salade and friet","Kipreepjes, salade and friet","Croquettes and friet","Cubaanse schotel"],"Hamburguesas":["Kip of varkensvlees 120 g","Rundvlees 120 g","Gemengd 120 g","Gemengd 180 g","Side of friet","Portion of friet"],"Sandwich":["Gemengd sandwich","Groentesandwich","Groente and maïs sandwich","Groente, tonijn and kipsandwich","Groentesandwich with garnalen"],"Bocadillos":["Broodje kipfilet","Speciaal broodje kipfilet","Gepaneerde kipfilet roll","Broodje gehakt","Broodje gegrild rundvlees","Speciaal broodje gegrild rundvlees","Broodje varkensvlees","Broodje geroosterd varkensvlees","Broodje ham","Broodje bacon","Broodje visfilet","Hotdog","Broodje speenvarken"],"Pizzas":["Margherita — tomaat, kaas, oregano","Groente — tomaat, ui, paprika, kaas, oregano","Ham — tomaat, ham, kaas, oregano","Zeevruchten — tomaat, kaas, tonijn, garnalen, oregano","Pescatore — tomaat, kaas, ui, tonijn, oregano","Hawaiian — tomaat, kaas, chicken, ananas","Extra ingrediënten"],"Postres":["IJsje in hoorntje","Santory ice cream","Klein ijsje","Groot ijsje","Flan","Verse shakes","Vla"],"Bebidas frías":["Coca-Cola fles 350 ml","Coca-Cola Zero fles 350 ml","Coca-Cola Zero Zero fles 350 ml","Coca-Cola blikje 330 ml","Coca-Cola Zero blikje 330 ml","Fanta blikje 330 ml","Citroen Fanta fles 350 ml","Sinaasappel Fanta fles 350 ml","Sprite fles 350 ml","Sprite fles 200 ml","Seven Up fles 350 ml","Tonic 200 ml","Water fles 500 ml","Water fles 350 ml","Bruiswater fles 500 ml","Waterglas 280 ml","Clipper blikje 330 ml","Clipper fles 350 ml","Nestea fles 300 ml","Nestea blikje 330 ml","Sap 200 ml","Sap fles 400 ml","Verse sinaasappelsap 280 ml","Monster 500 ml","Aquarius blikje 330 ml","Aquarius fles 300 ml","Appletiser 275 ml","Pepsi 200 ml","Sap 250 ml","Schweppes blikje 330 ml"],"Cafés":["Espresso koffie","Long koffie","Korte cortado","Lange cortado","Koffie met melk","Carajillo","Cappuccino","Short bombón koffie","Long bombón koffie","Leche y leche short","Leche y leche long","Ameriblikjeo","Thee","Kruidenthee"],"Cervezas":["Tropical fles","Tropical blikje","Tropical 0 fles","Tropical lemon fles","Tropical lemon blikje","Small Tropical fles","Small Águila fles","Tropical tapbier","Tropical kan","Dorada Especial fles","1906 fles","Estrella de Galicia fles","Heineken blikje","Heineken fles","Corona bier","Mahou bier","Small Corona fles"],"Copas":["Cognac / Anise / Gin / Whisky / Rum / Wodka / Tequila / likeuren","Baileys 60 ml","Witte rum 60 ml","Carta Oro rum 60 ml","Black Label","Red Label","Bacardi rum","Frangelico","Barceló rum","Santa Teresa","Havana Club 3 years","Havana Club 7 years","Flor de Caña","Casique","Licor 43","Cointreau","Havana Especial","Gins: Seagram’s / Gordon’s / Harahorn / Bombay / Tanqueray 00","Martini Wit / Rood / Gold","Wodkas: Smirnoff / Moskovskaya / Moskovskaya Pink"]},"fr":{"Entrantes":["Croquettes","Tostones (banane plantain frite)","Grattons de porc","Mixte salade","Gofio escaldé","Ragoût / soupe / bouillon","Tamale"],"Platos combinados":["Blanc de poulet pané, salade and frites","Porc frit / grillé, salade and frites","Émincé de poulet, salade and frites","Croquettes and frites","Assiette cubaine"],"Hamburguesas":["Poulet ou porc 120 g","Bœuf 120 g","Mixte 120 g","Mixte 180 g","Side of frites","Portion of frites"],"Sandwich":["Mixte sandwich","Sandwich végétal","Végétale and maïs sandwich","Végétale, thon and sandwich au poulet","Sandwich végétal with crevettes"],"Bocadillos":["Baguette au poulet","Baguette spéciale au poulet","Blanc de poulet pané roll","Baguette au bœuf haché","Baguette au bœuf grillé","Baguette spéciale au bœuf grillé","Baguette au porc","Baguette au jambon rôti","Baguette au jambon","Baguette au bacon","Baguette au filet de poisson","Hot-dog","Baguette au cochon de lait"],"Pizzas":["Margherita — tomate, fromage, oregano","Végétale — tomate, oignon, poivron, fromage, oregano","Ham — tomate, jambon, fromage, oregano","Fruits de mer — tomate, fromage, thon, crevettes, oregano","Pescatore — tomate, fromage, oignon, thon, oregano","Hawaiian — tomate, fromage, chicken, ananas","Ingrédients supplémentaires"],"Postres":["Glace en cornet","Santory ice cream","Petit pot de glace","Grand pot de glace","Flan","Milk-shakes aux fruits frais","Crème dessert"],"Bebidas frías":["Coca-Cola bouteille 350 ml","Coca-Cola Zero bouteille 350 ml","Coca-Cola Zero Zero bouteille 350 ml","Coca-Cola canette 330 ml","Coca-Cola Zero canette 330 ml","Fanta canette 330 ml","Citron Fanta bouteille 350 ml","Orange Fanta bouteille 350 ml","Sprite bouteille 350 ml","Sprite bouteille 200 ml","Seven Up bouteille 350 ml","Eau tonique 200 ml","Water bouteille 500 ml","Water bouteille 350 ml","Eau gazeuse bouteille 500 ml","Verre d’eau 280 ml","Clipper canette 330 ml","Clipper bouteille 350 ml","Nestea bouteille 300 ml","Nestea canette 330 ml","Jus 200 ml","Jus bouteille 400 ml","Jus d’orange frais 280 ml","Monster 500 ml","Aquarius canette 330 ml","Aquarius bouteille 300 ml","Appletiser 275 ml","Pepsi 200 ml","Jus 250 ml","Schweppes canette 330 ml"],"Cafés":["Café espresso","Café long","Cortado court","Cortado long","Café au lait","Carajillo","Cappuccino","Short bombón coffee","Long bombón coffee","Leche y leche short","Leche y leche long","Americanetteo","Thé","Infusions"],"Cervezas":["Tropical bouteille","Tropical canette","Tropical 0 bouteille","Tropical lemon bouteille","Tropical lemon canette","Small Tropical bouteille","Small Águila bouteille","Tropical Bière pression","Tropical pichet","Dorada Especial bouteille","1906 bouteille","Estrella de Galicia bouteille","Heineken canette","Heineken bouteille","Corona bière","Mahou bière","Small Corona bouteille"],"Copas":["Cognac / Anise / Gin / Whisky / Rum / Vodka / Tequila / liqueurs","Baileys 60 ml","Rhum blanc 60 ml","Carta Oro rum 60 ml","Black Label","Red Label","Bacardi rum","Frangelico","Barceló rum","Santa Teresa","Havana Club 3 years","Havana Club 7 years","Flor de Caña","Casique","Licor 43","Cointreau","Havana Especial","Gins: Seagram’s / Gordon’s / Harahorn / Bombay / Tanqueray 00","Martini White / Red / Gold","Vodkas: Smirnoff / Moskovskaya / Moskovskaya Pink"]},"pt":{"Entrantes":["Croquetes","Tostones (banana-pão frita)","Torresmos de porco","Mista salada","Gofio escaldado","Guisado / sopa / caldo","Tamale"],"Platos combinados":["Peito de frango panado, salada and batatas fritas","Porco frito / grelhado, salada and batatas fritas","Tiras de frango, salada and batatas fritas","Croquettes and batatas fritas","Prato cubano"],"Hamburguesas":["Frango ou porco 120 g","Carne de vaca 120 g","Mista 120 g","Mista 180 g","Side of batatas fritas","Portion of batatas fritas"],"Sandwich":["Mista sandwich","Sanduíche vegetal","Vegetal and milho sandwich","Vegetal, atum and sanduíche de frango","Sanduíche vegetal with camarão"],"Bocadillos":["Baguete de peito de frango","Baguete especial de frango","Peito de frango panado roll","Baguete de carne picada","Baguete de carne grelhada","Baguete especial de carne grelhada","Baguete de porco","Baguete de porco assado","Baguete de fiambre","Baguete de bacon","Baguete de filete de peixe","Cachorro-quente","Baguete de leitão"],"Pizzas":["Margherita — tomate, queijo, oregano","Vegetal — tomate, cebola, pimento, queijo, oregano","Ham — tomate, fiambre, queijo, oregano","Marisco — tomate, queijo, atum, camarão, oregano","Pescatore — tomate, queijo, cebola, atum, oregano","Hawaiian — tomate, queijo, chicken, ananás","Ingredientes extra"],"Postres":["Gelado em cone","Santory ice cream","Copo pequeno de gelado","Copo grande de gelado","Flan","Batidos de fruta fresca","Natillas"],"Bebidas frías":["Coca-Cola garrafa 350 ml","Coca-Cola Zero garrafa 350 ml","Coca-Cola Zero Zero garrafa 350 ml","Coca-Cola lata 330 ml","Coca-Cola Zero lata 330 ml","Fanta lata 330 ml","Limão Fanta garrafa 350 ml","Laranja Fanta garrafa 350 ml","Sprite garrafa 350 ml","Sprite garrafa 200 ml","Seven Up garrafa 350 ml","Água tónica 200 ml","Water garrafa 500 ml","Water garrafa 350 ml","Água com gás garrafa 500 ml","Copo de água 280 ml","Clipper lata 330 ml","Clipper garrafa 350 ml","Nestea garrafa 300 ml","Nestea lata 330 ml","Sumo 200 ml","Sumo garrafa 400 ml","Sumo de laranja natural 280 ml","Monster 500 ml","Aquarius lata 330 ml","Aquarius garrafa 300 ml","Appletiser 275 ml","Pepsi 200 ml","Sumo 250 ml","Schweppes lata 330 ml"],"Cafés":["Café espresso","Café longo","Cortado curto","Cortado longo","Café com leite","Carajillo","Cappuccino","Short bombón coffee","Long bombón coffee","Leche y leche short","Leche y leche long","Amerilatao","Chá","Infusões"],"Cervezas":["Tropical garrafa","Tropical lata","Tropical 0 garrafa","Tropical lemon garrafa","Tropical lemon lata","Small Tropical garrafa","Small Águila garrafa","Tropical Cerveja de pressão","Tropical Jarra","Dorada Especial garrafa","1906 garrafa","Estrella de Galicia garrafa","Heineken lata","Heineken garrafa","Corona Cerveja","Mahou Cerveja","Small Corona garrafa"],"Copas":["Cognac / Anise / Gin / Whisky / Rum / Vodka / Tequila / licores","Baileys 60 ml","Rum branco 60 ml","Carta Oro rum 60 ml","Black Label","Red Label","Bacardi rum","Frangelico","Barceló rum","Santa Teresa","Havana Club 3 years","Havana Club 7 years","Flor de Caña","Casique","Licor 43","Cointreau","Havana Especial","Gins: Seagram’s / Gordon’s / Harahorn / Bombay / Tanqueray 00","Martini White / Red / Gold","Vodkas: Smirnoff / Moskovskaya / Moskovskaya Pink"]}};

const pestañas = document.querySelector('#menuTabs');
const rejilla = document.querySelector('#menuGrid');
const imagenVisual = document.querySelector('#menuVisualImg');
const etiquetaVisual = document.querySelector('#menuVisualTag');
const tituloVisual = document.querySelector('#menuVisualTitle');

let categoriaMenuActiva = Object.keys(carta)[0];

function mostrarCategoriaMenu(category){
  categoriaMenuActiva = category;
  const datos = carta[category];
  const zonaVisual = document.querySelector('#menuVisualMedia');
  const listaMenu = document.querySelector('#menuGrid');

  zonaVisual.classList.remove('menu-changing');
  listaMenu.classList.remove('menu-changing');
  void zonaVisual.offsetWidth;
  void listaMenu.offsetWidth;
  zonaVisual.classList.add('menu-changing');
  listaMenu.classList.add('menu-changing');

  zonaVisual.innerHTML = '';

  if (category === 'Bebidas frías') {
    const conjunto = document.createElement('div');
    conjunto.className = 'drink-pair';
    conjunto.innerHTML = `
      <div class="drink-photo"><img src="img/tropical-coca-cola.jpg" alt="Cerveza Tropical y Coca-Cola frías"></div>`;
    zonaVisual.appendChild(conjunto);
  } else {
    const imagen = document.createElement('img');
    imagen.id = 'menuVisualImg';
    imagen.src = datos.image;
    imagen.alt = datos.title;
    imagen.loading = 'lazy';
    if (datos.fallback) {
      imagen.onerror = () => { imagen.onerror = null; imagen.src = datos.fallback; };
    }
    zonaVisual.appendChild(imagen);
  }

  const metadatos = etiquetasMetaMenu[idiomaActual][category] || etiquetasMetaMenu.es[category] || [datos.tag,datos.title];
  etiquetaVisual.textContent = metadatos[0];
  tituloVisual.textContent = metadatos[1];
  listaMenu.innerHTML = '';

  const tarjeta = document.createElement('article');
  tarjeta.className = 'menu-card';
  tarjeta.innerHTML = `<h3>${metadatos[1]}</h3><p class="menu-note">${traducir('menu.note')}</p>`;
  datos.items.forEach(([name, price], index) => {
    const elemento = document.createElement('div');
    elemento.className = 'menu-item';
    const translated = traducirTextoMenu(name, idiomaActual);
    elemento.innerHTML = `<span class="menu-item-name">${translated}</span><span class="price">${price}</span>`;
    tarjeta.appendChild(elemento);
  });
  listaMenu.appendChild(tarjeta);

  document.querySelectorAll('.menu-tab').forEach(btn => {
    btn.textContent = etiquetasCategoriasMenu[idiomaActual][btn.dataset.category] || btn.dataset.category;
    const active = btn.dataset.category === category;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active ? 'true' : 'false');
  });
}

Object.keys(carta).forEach((category, index) => {
  const boton = document.createElement('button');
  boton.className = 'menu-tab' + (index === 0 ? ' active' : '');
  boton.dataset.category = category;
  boton.textContent = etiquetasCategoriasMenu[idiomaActual][category] || category;
  boton.setAttribute('role','tab');
  boton.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
  boton.addEventListener('click', () => mostrarCategoriaMenu(category));
  pestañas.appendChild(boton);
});
mostrarCategoriaMenu(Object.keys(carta)[0]);

const selectorIdioma = document.querySelector('#languageSelect');
if(selectorIdioma){ selectorIdioma.value=idiomaActual; selectorIdioma.addEventListener('change', e=>aplicarIdioma(e.target.value)); }

// Menú móvil
const botonMenu = document.querySelector('#menuToggle');
const navegacion = document.querySelector('#nav');
botonMenu.addEventListener('click', () => {
  const open = navegacion.classList.toggle('open');
  botonMenu.setAttribute('aria-expanded', open ? 'true' : 'false');
});
navegacion.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navegacion.classList.remove('open');
  botonMenu.setAttribute('aria-expanded','false');
}));

// Animaciones al entrar en pantalla
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if(entrada.isIntersecting){
      entrada.target.classList.add('visible');
      observador.unobserve(entrada.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observador.observe(el));

// Galería con zoom
const visorImagen = document.querySelector('#lightbox');
const imagenVisor = document.querySelector('#lightboxImg');
const cerrarVisor = document.querySelector('#lightboxClose');
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    imagenVisor.src = item.dataset.full;
    imagenVisor.alt = item.querySelector('img').alt;
    visorImagen.classList.add('open');
    visorImagen.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  });
});
function closeLightbox(){
  visorImagen.classList.remove('open');
  visorImagen.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}
cerrarVisor.addEventListener('click', closeLightbox);
visorImagen.addEventListener('click', e => { if(e.target === visorImagen) closeLightbox(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeLightbox(); });

// Sombra ligera del header al hacer scroll
const header = document.querySelector('#header');
const updateHeader = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 18);
};
updateHeader();
window.addEventListener('scroll', updateHeader, {passive:true});

aplicarIdioma(idiomaActual);
