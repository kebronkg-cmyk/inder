/* Speisekarte Restaurant Bombay, Freising.
   Quelle: Speisekarte des Restaurants (Stand Oktober 2026). Preise in Euro inkl. MwSt.
   p = Hauptzutat (huhn, lamm, ente, meer, veg), art = Charakter der Soße (cremig, kraeftig, mild),
   bild = Dateistamm in img/. Alle Gerichte gibt es mild, pikant, scharf oder sehr scharf. */
window.BOMBAY_KARTE = [
 {
  "id": "warme-vorspeisen",
  "titel": "Warme Vorspeisen",
  "hinweis": "Alle warmen Vorspeisen werden mit 3 verschiedenen, schmackhaften Dips serviert. Alle Pakoras werden in Kichererbsenmehl gewendet und frittiert.",
  "posten": [
   {
    "nr": "15",
    "name": "Vegetable Pakora",
    "preis": 5.9,
    "text": "Frisches, gemischtes Gemüse",
    "veg": 1
   },
   {
    "nr": "16",
    "name": "Onions Bhaji",
    "preis": 5.9,
    "text": "Zwiebelringe kräftig gewürzt und frittiert",
    "veg": 1
   },
   {
    "nr": "17",
    "name": "Paneer Pakora",
    "preis": 5.9,
    "text": "Frischer hausgemachter Käse",
    "veg": 1
   },
   {
    "nr": "18",
    "name": "Fish Pakora",
    "preis": 5.9,
    "text": "Zartes Seelachsfilet"
   },
   {
    "nr": "19",
    "name": "Chicken Pakora",
    "preis": 5.9,
    "text": "Zartes Hühnerfleisch"
   },
   {
    "nr": "20",
    "name": "Jheenga Pakora",
    "preis": 8.9,
    "text": "Marinierte Riesengarnelen ohne Schale"
   },
   {
    "nr": "21",
    "name": "Vegetable Samosa",
    "preis": 5.9,
    "text": "2 kleine Pasteten mit frischem Gemüse gefüllt",
    "veg": 1
   },
   {
    "nr": "22",
    "name": "Mixed Starter Dish",
    "preis": 13.5,
    "text": "Gemischter Vorspeisenteller für 2 Personen"
   }
  ]
 },
 {
  "id": "kalte-vorspeisen",
  "titel": "Kalte Vorspeisen",
  "hinweis": "",
  "posten": [
   {
    "nr": "10",
    "name": "Chicken-Chana-Chat Delhi",
    "preis": 5.5,
    "text": "Indischer Hühnerfleisch- und Kichererbsen-Salat"
   }
  ]
 },
 {
  "id": "suppen",
  "titel": "Suppen",
  "hinweis": "",
  "posten": [
   {
    "nr": "1",
    "name": "Daal-Shorba",
    "preis": 4.9,
    "text": "Linsensuppe"
   },
   {
    "nr": "2",
    "name": "Sabzi-Shorba",
    "preis": 4.9,
    "text": "Gemüsesuppe"
   },
   {
    "nr": "3",
    "name": "Bohnensuppe",
    "preis": 4.9,
    "text": "Bohnensuppe"
   },
   {
    "nr": "4",
    "name": "Chicken-Shorba",
    "preis": 4.9,
    "text": "Hühnerfleischsuppe"
   },
   {
    "nr": "5",
    "name": "Tomatensuppe",
    "preis": 4.9,
    "text": "Tomatensuppe"
   }
  ]
 },
 {
  "id": "salate",
  "titel": "Salate",
  "hinweis": "",
  "posten": [
   {
    "nr": "28",
    "name": "Salat Saison",
    "preis": 5.9,
    "text": "Gemischter Salat mit French Dressing oder Essig und Öl",
    "veg": 1
   },
   {
    "nr": "29",
    "name": "Tomatensalat",
    "preis": 5.9,
    "text": "Mit Zwiebeln, Essig und Öl",
    "veg": 1
   },
   {
    "nr": "30",
    "name": "Salat Bombay",
    "preis": 9.5,
    "text": "Gemischter Salat mit Kichererbsen, Ananas, Käse und Mais",
    "veg": 1
   },
   {
    "nr": "31",
    "name": "Indien Salat",
    "preis": 9.5,
    "text": "Mit gebratenen Hühnerbrustfiletstreifen, frischen Champignons, Mais und Zwiebeln"
   }
  ]
 },
 {
  "id": "fisch-spezialitaeten",
  "titel": "Fisch-Spezialitäten",
  "hinweis": "Mit ofenfrischem Naan, Reis und Soßen serviert.",
  "posten": [
   {
    "nr": "89",
    "name": "Fisch Curry",
    "preis": 14.9,
    "text": "Fischfilet in Currysoße",
    "p": "meer",
    "art": "kraeftig"
   },
   {
    "nr": "90",
    "name": "Fisch Chili",
    "preis": 13.9,
    "text": "Fischfilet in Chilisoße",
    "p": "meer",
    "art": "kraeftig",
    "scharf": 1,
    "bild": "fisch-chili"
   },
   {
    "nr": "91",
    "name": "Fisch Masala",
    "preis": 14.9,
    "text": "Fischfilet nach ostindischer Art zubereitet",
    "p": "meer",
    "art": "kraeftig"
   },
   {
    "nr": "92",
    "name": "Jheenga Curry",
    "preis": 16.9,
    "text": "Riesengarnelen ohne Schale in Currysoße mit feinen Gewürzen",
    "p": "meer",
    "art": "kraeftig",
    "bild": "jheenga-curry"
   },
   {
    "nr": "93",
    "name": "Jheenga Masala",
    "preis": 17.9,
    "text": "Riesengarnelen ohne Schale in kräftiger Masala-Soße",
    "p": "meer",
    "art": "kraeftig"
   },
   {
    "nr": "94",
    "name": "Jheenga Khumb Wala",
    "preis": 17.9,
    "text": "Riesengarnelen ohne Schale mit frischen Pfifferlingen, Knoblauch und Ingwer in Mandel-Safransoße",
    "p": "meer",
    "art": "cremig"
   },
   {
    "nr": "95",
    "name": "Jheenga Goa",
    "preis": 17.9,
    "text": "Riesengarnelen ohne Schale in Kokosnusssoße mit ausgewählten Gewürzen nach Goa-Art",
    "p": "meer",
    "art": "cremig"
   },
   {
    "nr": "96",
    "name": "Jheenga Mango",
    "preis": 17.9,
    "text": "Riesengarnelen ohne Schale in frischer Mango-Safran-Cashewnusssoße, fein gewürzt",
    "p": "meer",
    "art": "cremig"
   }
  ]
 },
 {
  "id": "enten-spezialitaeten",
  "titel": "Enten-Spezialitäten",
  "hinweis": "Mit ofenfrischem Naan, Reis und Soßen serviert.",
  "posten": [
   {
    "nr": "81",
    "name": "Duck Curry",
    "preis": 16.5,
    "text": "Entenbrustfilet in Currysoße mit feinen Gewürzen",
    "p": "ente",
    "art": "kraeftig"
   },
   {
    "nr": "82",
    "name": "Duck Khumb Wala",
    "preis": 16.5,
    "text": "Entenbrustfilet mit frischen Champignons, Knoblauch und Ingwer in Mandel-Safransoße",
    "p": "ente",
    "art": "cremig"
   },
   {
    "nr": "83",
    "name": "Duck Jalfrezi",
    "preis": 16.5,
    "text": "Entenbrustfilet mit Paprika, Zwiebeln, Tomaten, grünem Chili und frischem Gemüse",
    "p": "ente",
    "art": "kraeftig",
    "scharf": 1
   },
   {
    "nr": "84",
    "name": "Duck Bombay",
    "preis": 16.5,
    "text": "Entenbrustfilet in Masala-Soße",
    "p": "ente",
    "art": "kraeftig"
   },
   {
    "nr": "85",
    "name": "Duck Mango",
    "preis": 16.5,
    "text": "Entenbrustfilet in Mango-Safran-Cashewnusssoße, fein gewürzt",
    "p": "ente",
    "art": "cremig"
   },
   {
    "nr": "86",
    "name": "Duck Korma",
    "preis": 16.5,
    "text": "Entenbrustfilet in Kokosnusssoße, fein gewürzt",
    "p": "ente",
    "art": "cremig"
   },
   {
    "nr": "87",
    "name": "Duck Palak",
    "preis": 16.5,
    "text": "Entenbrustfilet mit Spinat",
    "p": "ente",
    "art": "kraeftig"
   },
   {
    "nr": "88",
    "name": "Duck Vindaloo",
    "preis": 16.5,
    "text": "Entenbrustfilet mit Spezialgewürzen aus Goa",
    "p": "ente",
    "art": "kraeftig",
    "scharf": 1
   }
  ]
 },
 {
  "id": "huehnerfleisch-spezialitaeten",
  "titel": "Hühnerfleisch-Spezialitäten",
  "hinweis": "Mit ofenfrischem Naan, Reis und Soßen serviert.",
  "posten": [
   {
    "nr": "51",
    "name": "Chicken Curry",
    "preis": 14.9,
    "text": "Zartes Hühnerfleisch in Currysoße mit feinen Gewürzen",
    "p": "huhn",
    "art": "kraeftig"
   },
   {
    "nr": "52",
    "name": "Chicken Badam Pasanda",
    "preis": 14.9,
    "text": "Zartes Hühnerfleisch in Nusssoße mit Kokosnussflocken und gemahlenen Mandeln",
    "p": "huhn",
    "art": "cremig"
   },
   {
    "nr": "53",
    "name": "Chicken Sabzi",
    "preis": 14.9,
    "text": "Zartes Hühnerfleisch mit verschiedenem frischem Gemüse",
    "p": "huhn",
    "art": "kraeftig"
   },
   {
    "nr": "54",
    "name": "Karahi Chicken",
    "preis": 14.9,
    "text": "Gebratenes Hühnerfleisch in Currysoße, in der Pfanne serviert",
    "p": "huhn",
    "art": "kraeftig"
   },
   {
    "nr": "55",
    "name": "Chicken Jalfrezi",
    "preis": 14.9,
    "text": "Hühnerfleisch ohne Knochen, mit Paprika, Zwiebeln, Tomaten und grünem Chili",
    "p": "huhn",
    "art": "kraeftig",
    "scharf": 1
   },
   {
    "nr": "56",
    "name": "Chicken Vindaloo",
    "preis": 14.9,
    "text": "Hühnerfleisch mit Spezialgewürzen aus Goa",
    "p": "huhn",
    "art": "kraeftig",
    "scharf": 1
   },
   {
    "nr": "57",
    "name": "Butter Chicken",
    "preis": 14.9,
    "text": "Zartes Hühnerfleisch in Butter-Tomaten-Soße",
    "p": "huhn",
    "art": "cremig",
    "bild": "butter-chicken"
   },
   {
    "nr": "58",
    "name": "Chicken Tikka Masala",
    "preis": 14.9,
    "text": "Zartes Hühnerfleisch in Masalasoße",
    "p": "huhn",
    "art": "kraeftig"
   },
   {
    "nr": "60",
    "name": "Chicken Palak",
    "preis": 14.9,
    "text": "Zartes Hühnerfleisch mit Spinat, nach berühmter nordindischer Art",
    "p": "huhn",
    "art": "kraeftig"
   },
   {
    "nr": "61",
    "name": "Mango Chicken",
    "preis": 13.9,
    "text": "Hühnerfleisch in frischer Mango-Safran-Cashewnusssoße",
    "p": "huhn",
    "art": "cremig",
    "bild": "mango-chicken"
   },
   {
    "nr": "62",
    "name": "Chicken Korma",
    "preis": 14.9,
    "text": "Hühnerfleisch in frischer Kokosnusssoße",
    "p": "huhn",
    "art": "cremig"
   },
   {
    "nr": "63",
    "name": "Chicken Ananas",
    "preis": 14.9,
    "text": "Zartes Hühnerfleisch mit Ananas",
    "p": "huhn",
    "art": "cremig"
   },
   {
    "nr": "64",
    "name": "Chicken Dal",
    "preis": 14.9,
    "text": "Zartes Hühnerfleisch mit gelben indischen Linsen gegart",
    "p": "huhn",
    "art": "kraeftig"
   },
   {
    "nr": "65",
    "name": "Chili Chicken",
    "preis": 14.9,
    "text": "Zartes Hühnerbrustfilet, gebraten mit grünem Chili",
    "p": "huhn",
    "art": "kraeftig",
    "scharf": 1
   }
  ]
 },
 {
  "id": "lamm-spezialitaeten",
  "titel": "Lamm-Spezialitäten",
  "hinweis": "Mit ofenfrischem Naan, Reis und Soßen serviert.",
  "posten": [
   {
    "nr": "66",
    "name": "Lamm Curry",
    "preis": 15.9,
    "text": "Zartes Lammfleisch in Currysoße",
    "p": "lamm",
    "art": "kraeftig"
   },
   {
    "nr": "67",
    "name": "Rogan Josh",
    "preis": 15.5,
    "text": "Zartes Lammfleisch in Rogan-Currysoße",
    "p": "lamm",
    "art": "kraeftig",
    "bild": "rogan-josh"
   },
   {
    "nr": "68",
    "name": "Mughlai Meat",
    "preis": 15.9,
    "text": "Zartes Lammfleisch in Mandel-Safran-Sahnesoße",
    "p": "lamm",
    "art": "cremig"
   },
   {
    "nr": "69",
    "name": "Bhunna Ghosht",
    "preis": 15.9,
    "text": "Gebratenes Lammfleisch mit Tomaten und Röstzwiebeln in kräftiger Soße",
    "p": "lamm",
    "art": "kraeftig"
   },
   {
    "nr": "70",
    "name": "Ghosht Palak",
    "preis": 15.9,
    "text": "Gebratenes Lammfleisch mit Spinat nach berühmter nordindischer Art",
    "p": "lamm",
    "art": "kraeftig"
   },
   {
    "nr": "71",
    "name": "Mutton Khumb Wala",
    "preis": 15.9,
    "text": "Zartes Lammfleisch mit frischen Champignons, Knoblauch und Ingwer in Mandel-Safransoße",
    "p": "lamm",
    "art": "cremig"
   },
   {
    "nr": "72",
    "name": "Mutton Vindaloo",
    "preis": 15.9,
    "text": "Zartes Lammfleisch mit Spezialgewürzen aus Goa",
    "p": "lamm",
    "art": "kraeftig",
    "scharf": 1
   },
   {
    "nr": "73",
    "name": "Karahi Ghosht",
    "preis": 15.5,
    "text": "Gebratenes Lammfleisch in Currysoße, in der Pfanne serviert",
    "p": "lamm",
    "art": "kraeftig",
    "bild": "karahi-ghosht"
   },
   {
    "nr": "74",
    "name": "Dal Gosht",
    "preis": 15.9,
    "text": "Zartes Lammfleisch mit Korianderblättern und gelben Linsen",
    "p": "lamm",
    "art": "kraeftig"
   },
   {
    "nr": "75",
    "name": "Data Ghosht",
    "preis": 15.9,
    "text": "Zartes Lammfleisch in Curry-Joghurt-Mandel-Soße",
    "p": "lamm",
    "art": "cremig"
   },
   {
    "nr": "76",
    "name": "Bhindi Ghosht",
    "preis": 15.9,
    "text": "Zartes Lammfleisch mit Okragemüse",
    "p": "lamm",
    "art": "mild"
   },
   {
    "nr": "77",
    "name": "Mango Lamb",
    "preis": 15.9,
    "text": "Zartes Lammfleisch in frischer Mango-Safran-Cashewnusssoße",
    "p": "lamm",
    "art": "cremig"
   },
   {
    "nr": "78",
    "name": "Lamm Korma",
    "preis": 15.9,
    "text": "Zartes Lammfleisch in Kokosnusssoße",
    "p": "lamm",
    "art": "cremig"
   },
   {
    "nr": "79",
    "name": "Lamm Tikka Masala",
    "preis": 15.9,
    "text": "Zartes Lammfleisch in Masalasoße",
    "p": "lamm",
    "art": "kraeftig"
   }
  ]
 },
 {
  "id": "vegetarische-spezialitaeten",
  "titel": "Vegetarische Spezialitäten",
  "hinweis": "Mit ofenfrischem Naan, Reis und Soßen serviert.",
  "posten": [
   {
    "nr": "101",
    "name": "Malai Kofta",
    "preis": 12.9,
    "text": "2 Klößchen aus hausgemachtem Käse mit Kartoffeln und Nüssen",
    "veg": 1,
    "p": "veg",
    "art": "cremig"
   },
   {
    "nr": "102",
    "name": "Navratan Korma",
    "preis": 12.9,
    "text": "Gemischtes Gemüse mit verschiedenen Zutaten, nach Mughlai-Art",
    "veg": 1,
    "p": "veg",
    "art": "cremig"
   },
   {
    "nr": "103",
    "name": "Shahi Paneer",
    "preis": 12.9,
    "text": "Hausgemachter Käse, zubereitet in Butter-Tomaten-Sahne-Soße, fein gewürzt",
    "veg": 1,
    "p": "veg",
    "art": "cremig"
   },
   {
    "nr": "104",
    "name": "Palak Paneer",
    "preis": 12.9,
    "text": "Kräftiger Spinat mit hausgemachtem Käse, Ayurvedische Art",
    "veg": 1,
    "p": "veg",
    "art": "kraeftig"
   },
   {
    "nr": "105",
    "name": "Shahi Baingan",
    "preis": 12.9,
    "text": "Auberginen mit hausgemachtem Käse und Ingwer in Mandelsoße, fein gewürzt",
    "veg": 1,
    "p": "veg",
    "art": "cremig"
   },
   {
    "nr": "106",
    "name": "Sabzi Kofta",
    "preis": 12.9,
    "text": "Gemüseklößchen in würziger Currysoße",
    "veg": 1,
    "p": "veg",
    "art": "kraeftig"
   },
   {
    "nr": "107",
    "name": "Chana Masala",
    "preis": 12.9,
    "text": "Kichererbsen in Curry mit frischen Tomaten und Ingwer",
    "veg": 1,
    "vegan": 1,
    "p": "veg",
    "art": "kraeftig"
   },
   {
    "nr": "108",
    "name": "Dal Makhni",
    "preis": 12.9,
    "text": "Indisches Nationalgericht mit gelben Linsen und Butter nach ayurvedischer Art, auf Wunsch vegan zubereitet",
    "veg": 1,
    "vegan": 1,
    "p": "veg",
    "art": "cremig",
    "bild": "dal-makhni"
   },
   {
    "nr": "109",
    "name": "Karahi Paneer",
    "preis": 12.9,
    "text": "Frischer, gebratener, hausgemachter Käse in Currysoße, in der Pfanne serviert",
    "veg": 1,
    "p": "veg",
    "art": "kraeftig",
    "bild": "karahi-paneer"
   },
   {
    "nr": "110",
    "name": "Bhindi Masala",
    "preis": 12.9,
    "text": "Frisches indisches Okra-Gemüse in kräftiger Soße",
    "veg": 1,
    "vegan": 1,
    "p": "veg",
    "art": "kraeftig"
   },
   {
    "nr": "111",
    "name": "Mixed Vegetables",
    "preis": 12.9,
    "text": "Gemischtes frisches Gemüse, pikant gewürzt",
    "veg": 1,
    "vegan": 1,
    "p": "veg",
    "art": "mild"
   },
   {
    "nr": "112",
    "name": "Baingan Ka Bharta",
    "preis": 12.9,
    "text": "Frische Auberginen, püriert mit Zwiebeln und Tomaten, kräftig gewürzt",
    "veg": 1,
    "vegan": 1,
    "p": "veg",
    "art": "kraeftig"
   },
   {
    "nr": "113",
    "name": "Aloo Tomaten Curry",
    "preis": 12.9,
    "text": "Kartoffeln mit frischen Tomaten in Currysoße",
    "veg": 1,
    "p": "veg",
    "art": "kraeftig"
   },
   {
    "nr": "114",
    "name": "Aloo Baingan",
    "preis": 12.9,
    "text": "Kartoffeln mit Auberginen in Masalasoße",
    "veg": 1,
    "p": "veg",
    "art": "kraeftig"
   },
   {
    "nr": "115",
    "name": "Dal Tarka",
    "preis": 12.9,
    "text": "Gelbe indische Linsen",
    "veg": 1,
    "p": "veg",
    "art": "kraeftig"
   },
   {
    "nr": "116",
    "name": "Paneer Butter Masala",
    "preis": 12.9,
    "text": "Käse in Masala-Soße",
    "veg": 1,
    "p": "veg",
    "art": "cremig"
   },
   {
    "nr": "117",
    "name": "Mushroom Paneer",
    "preis": 12.9,
    "text": "Käse mit Champignons",
    "veg": 1,
    "p": "veg",
    "art": "mild"
   },
   {
    "nr": "97",
    "name": "Aloo Palak",
    "preis": 12.9,
    "text": "Kartoffeln mit Spinat",
    "veg": 1,
    "p": "veg",
    "art": "kraeftig"
   },
   {
    "nr": "98",
    "name": "Mushroom Bhaji",
    "preis": 12.9,
    "text": "Champignons mit Zwiebeln in würziger Soße",
    "veg": 1,
    "p": "veg",
    "art": "kraeftig"
   },
   {
    "nr": "99",
    "name": "Jeera Aloo",
    "preis": 12.9,
    "text": "Kartoffeln mit Kreuzkümmel",
    "veg": 1,
    "p": "veg",
    "art": "kraeftig"
   }
  ]
 },
 {
  "id": "reis-spezialitaeten",
  "titel": "Reis-Spezialitäten",
  "hinweis": "Zubereitet mit Basmati-Reis aus Nordindien.",
  "posten": [
   {
    "nr": "118",
    "name": "Vegetable Biryani",
    "preis": 13.9,
    "text": "Frisches, gemischtes Gemüse mit Mandeln und Rosinen",
    "veg": 1,
    "p": "veg",
    "art": "cremig"
   },
   {
    "nr": "119",
    "name": "Chicken Biryani",
    "preis": 14.9,
    "text": "Hühnerfleisch mit Mandeln und Rosinen",
    "p": "huhn",
    "art": "cremig"
   },
   {
    "nr": "120",
    "name": "Mutton Biryani",
    "preis": 15.9,
    "text": "Lammfleisch mit Mandeln und Rosinen",
    "p": "lamm",
    "art": "cremig"
   },
   {
    "nr": "121",
    "name": "Bombay Biryani",
    "preis": 16.9,
    "text": "Mit Hühnerbrust- und Lammstreifen, Shrimps und Nüssen",
    "p": "lamm",
    "art": "mild"
   },
   {
    "nr": "122",
    "name": "Jheenga Biryani",
    "preis": 19.9,
    "text": "Riesengarnelen mit Mandeln und Rosinen",
    "p": "meer",
    "art": "cremig"
   },
   {
    "nr": "123",
    "name": "Fisch Biryani",
    "preis": 17.9,
    "text": "Fischfilet mit Mandeln und Rosinen",
    "p": "meer",
    "art": "cremig"
   }
  ]
 },
 {
  "id": "tandoori-khajana",
  "titel": "Tandoori – Khajana",
  "hinweis": "Aus dem Holzkohlelehmofen. Mit ofenfrischem Naan, Reis und Soßen serviert.",
  "posten": [
   {
    "nr": "37",
    "name": "Tandoori Chicken",
    "preis": 16.9,
    "text": "Hähnchen, mariniert nach einem berühmten nordindischen Rezept (mit Knochen)",
    "p": "huhn",
    "art": "kraeftig"
   },
   {
    "nr": "38",
    "name": "Chicken Chili Tikka",
    "preis": 16.9,
    "text": "Zartes, mariniertes Hühnerfleisch, gegrillt – Bengali-Art",
    "p": "huhn",
    "art": "kraeftig",
    "scharf": 1
   },
   {
    "nr": "39",
    "name": "Chicken Tikka",
    "preis": 16.9,
    "text": "Zarte marinierte Hühnerfleischstücke, gegrillt",
    "p": "huhn",
    "art": "kraeftig",
    "bild": "chicken-tikka"
   },
   {
    "nr": "41",
    "name": "Haryali Malai Kebab",
    "preis": 16.9,
    "text": "Zartes Hühnerfleisch in Joghurt mit Spinat-, Minze- und Koriandersoße mariniert, mit Beilage",
    "p": "huhn",
    "art": "cremig"
   },
   {
    "nr": "43",
    "name": "Vegetable Tandoori",
    "preis": 16.9,
    "text": "Hausgemachter Käse, Blumenkohl, Tomaten, Zwiebeln, Zucchini, Auberginen und Paprika, in Joghurt und Gewürzen eingelegt, am Spieß gegrillt",
    "veg": 1,
    "p": "veg",
    "art": "kraeftig"
   },
   {
    "nr": "44",
    "name": "Fish Tikka",
    "preis": 16.9,
    "text": "Frisches Seelachsfilet, in Joghurt und Gewürzen mariniert, knusprig gegrillt",
    "p": "meer",
    "art": "kraeftig"
   },
   {
    "nr": "45",
    "name": "Jheenga Tandoori",
    "preis": 19.9,
    "text": "Riesengarnelen ohne Schale, in Joghurt und Gewürzen mariniert, knusprig gegrillt",
    "p": "meer",
    "art": "kraeftig"
   },
   {
    "nr": "46",
    "name": "Mixed-Grill-Platte",
    "preis": 19.9,
    "text": "Etwas von allen Tandoori-Köstlichkeiten mit einem Stück Seelachs und einer Garnele",
    "p": "veg",
    "art": "kraeftig"
   },
   {
    "nr": "47",
    "name": "Bombay Teller",
    "preis": 16.9,
    "text": "Gebratenes Hühner- und Lammfleisch mit frischem Gemüse, Reis und Naan",
    "p": "lamm",
    "art": "kraeftig"
   },
   {
    "nr": "48",
    "name": "Garlic Chicken Tikka",
    "preis": 16.9,
    "text": "Mariniertes Hühnerbrustfilet in Knoblauch-Joghurt-Soße",
    "p": "huhn",
    "art": "kraeftig"
   }
  ]
 },
 {
  "id": "tandoori-brot",
  "titel": "Tandoori-Brot",
  "hinweis": "Frisch gebackenes Fladenbrot aus dem Holzkohlelehmofen.",
  "posten": [
   {
    "nr": "157",
    "name": "Naan",
    "preis": 2.5,
    "text": "Ovales Brot aus Hefeteig"
   },
   {
    "nr": "158",
    "name": "Butter Naan",
    "preis": 2.9,
    "text": "Ovales Brot aus Hefeteig mit Butter"
   },
   {
    "nr": "159",
    "name": "Garlic Naan",
    "preis": 3.5,
    "text": "Ovales Brot aus Hefeteig mit Knoblauch"
   },
   {
    "nr": "160",
    "name": "Keema Naan",
    "preis": 4.9,
    "text": "Ovales Brot aus Hefeteig, gefüllt mit Hühnerfleisch"
   },
   {
    "nr": "161",
    "name": "Pashawari Naan",
    "preis": 4.9,
    "text": "Ovales süßes Brot aus Hefeteig, gefüllt mit hausgemachtem Käse, Cashewnüssen und Hühnerfleisch"
   },
   {
    "nr": "162",
    "name": "Roti",
    "preis": 2.5,
    "text": "Flaches Vollkornfladenbrot"
   },
   {
    "nr": "163",
    "name": "Batura",
    "preis": 3.0,
    "text": "Ovales Brot aus Hefeteig, frittiert"
   },
   {
    "nr": "164",
    "name": "Vegetable Paratha",
    "preis": 4.9,
    "text": "Brot, gefüllt mit frischem Gemüse"
   },
   {
    "nr": "165",
    "name": "Paneer Kulcha",
    "preis": 4.9,
    "text": "Hefeteigbrot, gefüllt mit hausgemachtem Käse"
   },
   {
    "nr": "166",
    "name": "Pappad",
    "preis": 2.5,
    "text": "Linsenwaffeln mit 3 verschiedenen Soßen"
   },
   {
    "nr": "167",
    "name": "Aloo Paratha",
    "preis": 4.9,
    "text": ""
   }
  ]
 },
 {
  "id": "thalis",
  "titel": "Thalis",
  "hinweis": "Verschiedene Gerichte auf einem Teller, serviert auf original indischen Platten. Eine Spezialität unseres Chefkochs – lassen Sie sich überraschen.",
  "posten": [
   {
    "nr": "127",
    "name": "Vegetable Thali",
    "preis": 15.9,
    "text": "3 verschiedene Gemüsegerichte, Raita, Salat, Pappad und Basmati-Reis",
    "veg": 1,
    "p": "veg",
    "art": "mild"
   },
   {
    "nr": "128",
    "name": "Bombay Thali",
    "preis": 16.9,
    "text": "1 Lamm-, 1 Hühnchen-, 1 Entengericht, Raita, Salat, Pappad, Naan und Basmati-Reis",
    "p": "lamm",
    "art": "mild"
   },
   {
    "nr": "129",
    "name": "Fish Thali",
    "preis": 18.9,
    "text": "3 verschiedene Fischgerichte, Raita, Salat, Pappad und Basmati-Reis",
    "p": "meer",
    "art": "mild"
   },
   {
    "nr": "130",
    "name": "Vegetable Thali Grand (für 2 Personen)",
    "preis": 29.9,
    "text": "Verschiedene Gemüsegerichte, Raita, Salat, Pappad und Basmati-Reis",
    "veg": 1,
    "p": "veg",
    "art": "mild"
   },
   {
    "nr": "131",
    "name": "Bombay Thali Grand (für 2 Personen)",
    "preis": 32.9,
    "text": "Lamm-, Hühnchen- und Entengericht, Raita, Salat, Pappad, Naan und Basmati-Reis",
    "p": "lamm",
    "art": "mild"
   }
  ]
 },
 {
  "id": "beilagen",
  "titel": "Beilagen",
  "hinweis": "Zu allen Speisen zu empfehlen.",
  "posten": [
   {
    "nr": "137",
    "name": "Plain Dahi",
    "preis": 2.2,
    "text": "Einfacher Joghurt",
    "veg": 1
   },
   {
    "nr": "138",
    "name": "Kheera Ka Raita",
    "preis": 2.9,
    "text": "Gurken-Joghurt",
    "veg": 1
   },
   {
    "nr": "139",
    "name": "Mixed Raita",
    "preis": 3.5,
    "text": "Joghurt mit Gurken, Zwiebeln, Tomaten und Koriander",
    "veg": 1
   },
   {
    "nr": "144",
    "name": "Basmati-Reis",
    "preis": 4.5,
    "text": "Einfacher Basmati-Reis"
   },
   {
    "nr": "145",
    "name": "Mixed Pickles",
    "preis": 2.5,
    "text": ""
   },
   {
    "nr": "146",
    "name": "Extra Soße",
    "preis": 2.5,
    "text": ""
   }
  ]
 },
 {
  "id": "nachspeisen",
  "titel": "Nachspeisen",
  "hinweis": "",
  "posten": [
   {
    "nr": "177",
    "name": "Gulab Jamun",
    "preis": 4.9,
    "text": "Bällchen aus Milch und Quark, in Honig gebacken",
    "veg": 1
   },
   {
    "nr": "178",
    "name": "Halwa",
    "preis": 5.2,
    "text": "Gekochter Grieß mit gemahlenen Kokosflocken und Rosinen in Milch und Kokosmilch",
    "veg": 1
   },
   {
    "nr": "179",
    "name": "Mango Creme",
    "preis": 4.9,
    "text": "Hausgemachte Creme aus Mango, Cashewnüssen, Mandeln und Kokosnuss",
    "veg": 1
   }
  ]
 },
 {
  "id": "getraenke",
  "titel": "Getränke",
  "hinweis": "Alkoholische Getränke nur an Personen ab 18 Jahren.",
  "posten": [
   {
    "nr": "",
    "name": "Coca-Cola",
    "preis": 3.5,
    "text": ""
   },
   {
    "nr": "",
    "name": "Coca-Cola Zero",
    "preis": 3.5,
    "text": ""
   },
   {
    "nr": "",
    "name": "Fanta",
    "preis": 3.5,
    "text": ""
   },
   {
    "nr": "",
    "name": "Spezi",
    "preis": 3.5,
    "text": ""
   },
   {
    "nr": "",
    "name": "Sprite",
    "preis": 3.5,
    "text": ""
   },
   {
    "nr": "",
    "name": "Wasser",
    "preis": 3.5,
    "text": ""
   },
   {
    "nr": "",
    "name": "Mangosaft",
    "preis": 4.0,
    "text": ""
   },
   {
    "nr": "",
    "name": "Lycheesaft",
    "preis": 4.0,
    "text": ""
   },
   {
    "nr": "",
    "name": "Guavasaft",
    "preis": 4.0,
    "text": ""
   },
   {
    "nr": "",
    "name": "Maracujasaft",
    "preis": 4.0,
    "text": ""
   },
   {
    "nr": "",
    "name": "Mango Lassi",
    "preis": 7.5,
    "text": ""
   },
   {
    "nr": "",
    "name": "Helles",
    "preis": 3.5,
    "text": ""
   },
   {
    "nr": "",
    "name": "Weißbier",
    "preis": 3.5,
    "text": ""
   },
   {
    "nr": "",
    "name": "Dunkelbier",
    "preis": 3.5,
    "text": ""
   },
   {
    "nr": "",
    "name": "Weißbier alkoholfrei",
    "preis": 3.5,
    "text": ""
   },
   {
    "nr": "",
    "name": "Leichtes Weißbier alkoholfrei",
    "preis": 3.5,
    "text": ""
   }
  ]
 },
 {
  "id": "wein",
  "titel": "Wein",
  "hinweis": "Nur an Personen ab 18 Jahren.",
  "posten": [
   {
    "nr": "",
    "name": "Weißwein 0,75 l",
    "preis": 12.9,
    "text": ""
   },
   {
    "nr": "",
    "name": "Rotwein 0,75 l",
    "preis": 12.9,
    "text": ""
   }
  ]
 }
];
