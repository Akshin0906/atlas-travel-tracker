import type { TourismCountry } from '../../types'

export const tourismMidA: TourismCountry[] = [
  {
    name: "South Korea",
    iso2: "KR",
    tier: "mid",
    region: "Asia",
    climate: ["temperate", "humid", "cold"],
    styles: ["food", "culture", "history", "shopping", "nightlife", "skiing"],
    bestTime: {
      months: ["Apr", "May", "Sep", "Oct"],
      summary: "Spring cherry blossoms and crisp autumn foliage bring the most comfortable weather and prettiest scenery.",
    },
    seasonalNotes: {
      spring: "Cherry blossoms peak in early April, drawing big crowds to Seoul palaces and Jinhae; weather is mild.",
      summer: "Hot and very humid with the jangma monsoon in July; beaches in Busan get busy in August.",
      fall: "Clear skies and vivid foliage make this the best season; expect crowds at national parks in October.",
      winter: "Cold and dry with reliable snow at ski resorts near Pyeongchang; city sightseeing is quiet and cheap.",
    },
    vacationStyle: [
      "Urban culture trips built around food, palaces, and K-pop-era shopping",
      "Seasonal nature escapes for cherry blossoms, foliage, and skiing",
      "Coastal city breaks mixing beaches, markets, and temples",
    ],
    pros: [
      "Exceptional food scene at every budget",
      "Fast, clean, and easy public transport",
      "Very safe for solo travelers",
      "Distinct four-season scenery",
    ],
    cons: [
      "Language barrier outside major tourist areas",
      "Summer heat and monsoon humidity",
      "Peak-season crowds at blossom and foliage hotspots",
    ],
    cities: [
      {
        name: "Seoul",
        pois: [
          {
            name: "Gyeongbokgung Palace",
            description: "The grandest Joseon-dynasty palace, with changing-of-the-guard ceremonies and hanbok-clad visitors filling its courtyards.",
          },
          {
            name: "Bukchon Hanok Village",
            description: "A hillside neighborhood of traditional Korean hanok houses wedged between two royal palaces.",
          },
          {
            name: "N Seoul Tower",
            description: "The landmark tower on Namsan mountain offering panoramic views over the sprawling capital.",
          },
        ],
      },
      {
        name: "Busan",
        pois: [
          {
            name: "Haeundae Beach",
            description: "Korea's most famous urban beach, backed by high-rises, seafood restaurants, and a lively summer scene.",
          },
          {
            name: "Gamcheon Culture Village",
            description: "A steep hillside district of pastel houses, murals, and art installations overlooking the sea.",
          },
          {
            name: "Jagalchi Fish Market",
            description: "The country's largest seafood market, where vendors sell the morning catch beside sit-down raw-fish restaurants.",
          },
        ],
      },
      {
        name: "Jeju City",
        pois: [
          {
            name: "Hallasan National Park",
            description: "Trails climb South Korea's highest peak, a dormant volcano crowned by a crater lake.",
          },
          {
            name: "Seongsan Ilchulbong",
            description: "A dramatic tuff cone rising from the sea, famous for sunrise hikes and UNESCO status.",
          },
          {
            name: "Manjanggul Lava Tube",
            description: "One of the world's longest lava tunnels, with a walkable kilometer of eerie volcanic formations.",
          },
        ],
      },
    ],
  },
  {
    name: "Malaysia",
    iso2: "MY",
    tier: "mid",
    region: "Asia",
    climate: ["tropical", "hot", "humid", "rainy"],
    styles: ["food", "beaches", "nature", "culture", "budget", "shopping"],
    bestTime: {
      months: ["Dec", "Jan", "Feb", "Mar"],
      summary: "December to March is the dry season for the west coast, Kuala Lumpur, Penang, and Langkawi.",
    },
    seasonalNotes: {
      spring: "Hot with inter-monsoon showers; a good shoulder period with thinner crowds and decent weather on both coasts.",
      summer: "The east coast and its islands enjoy their dry season, ideal for the Perhentians and Tioman.",
      fall: "The wettest stretch on the west coast, with frequent afternoon downpours but low prices and few crowds.",
      winter: "Peak dry season for Penang and Langkawi; expect higher prices around Christmas and Chinese New Year.",
    },
    vacationStyle: [
      "Street-food-driven city hopping across multicultural neighborhoods",
      "Island and beach holidays with snorkeling and diving",
      "Rainforest and highland excursions to national parks and tea country",
    ],
    pros: [
      "Outstanding and inexpensive street food",
      "English widely spoken",
      "Great value hotels and transport",
      "Beaches, cities, and jungle in one trip",
    ],
    cons: [
      "Year-round heat and humidity",
      "Monsoon timing differs by coast",
      "Traffic congestion in Kuala Lumpur",
    ],
    cities: [
      {
        name: "Kuala Lumpur",
        pois: [
          {
            name: "Petronas Twin Towers",
            description: "The iconic 452-meter twin skyscrapers, linked by a skybridge with sweeping views of the city.",
          },
          {
            name: "Batu Caves",
            description: "A Hindu temple complex inside limestone caves, reached by 272 rainbow-painted steps past a giant golden statue.",
          },
          {
            name: "Merdeka Square",
            description: "The colonial-era heart of the city, ringed by Moorish-style buildings where Malaysian independence was declared.",
          },
        ],
      },
      {
        name: "George Town",
        pois: [
          {
            name: "George Town street art",
            description: "UNESCO-listed heritage lanes dotted with famous murals, clan houses, and shophouse cafes.",
          },
          {
            name: "Kek Lok Si Temple",
            description: "One of Southeast Asia's largest Buddhist temples, terraced up a hillside with a towering pagoda.",
          },
          {
            name: "Penang Hill",
            description: "A funicular railway climbs to cooler air and panoramic views over the island and strait.",
          },
        ],
      },
      {
        name: "Langkawi",
        pois: [
          {
            name: "Langkawi Sky Bridge",
            description: "A curved pedestrian bridge suspended above the rainforest, reached by cable car up Mount Mat Cincang.",
          },
          {
            name: "Pantai Cenang",
            description: "The island's liveliest beach strip, with white sand, water sports, and sunset bars.",
          },
          {
            name: "Kilim Karst Geoforest Park",
            description: "Mangrove boat tours wind past limestone cliffs, caves, and circling eagles in a UNESCO geopark.",
          },
        ],
      },
    ],
  },
  {
    name: "Indonesia",
    iso2: "ID",
    tier: "mid",
    region: "Asia",
    climate: ["tropical", "hot", "humid", "rainy"],
    styles: ["beaches", "nature", "culture", "adventure", "budget", "relaxation"],
    bestTime: {
      months: ["May", "Jun", "Jul", "Aug", "Sep"],
      summary: "The May to September dry season brings sunny days across Bali, Java, and most of the archipelago.",
    },
    seasonalNotes: {
      spring: "Rains taper off through April and May, a good-value shoulder season before the dry-season crowds arrive.",
      summer: "Peak dry season with the best weather; Bali is at its busiest and priciest in July and August.",
      fall: "September stays dry and quieter, while rains gradually return across the islands from November.",
      winter: "The wet monsoon brings daily downpours and lower prices, though Christmas and New Year spike Bali rates.",
    },
    vacationStyle: [
      "Beach and surf holidays across thousands of tropical islands",
      "Temple, volcano, and rice-terrace touring on Bali and Java",
      "Diving, snorkeling, and wildlife trips to reefs and national parks",
    ],
    pros: [
      "Excellent value for accommodation and food",
      "World-class surfing and diving",
      "Rich mix of cultures and temples",
      "Dramatic volcanic landscapes",
    ],
    cons: [
      "Heavy traffic and overtourism in south Bali",
      "Long travel times between islands",
      "Intense wet-season downpours",
    ],
    cities: [
      {
        name: "Bali",
        pois: [
          {
            name: "Uluwatu Temple",
            description: "A clifftop sea temple perched above the Indian Ocean, famous for sunset kecak fire dances.",
          },
          {
            name: "Tegallalang Rice Terraces",
            description: "Sculpted emerald rice paddies near Ubud, among the island's most photographed landscapes.",
          },
          {
            name: "Tanah Lot",
            description: "A temple set on a wave-battered rock offshore, one of Bali's most iconic sunset views.",
          },
        ],
      },
      {
        name: "Yogyakarta",
        pois: [
          {
            name: "Borobudur",
            description: "The world's largest Buddhist monument, a ninth-century stupa-covered pyramid best seen at sunrise.",
          },
          {
            name: "Prambanan",
            description: "A soaring complex of Hindu temples from the ninth century, dedicated to Shiva, Vishnu, and Brahma.",
          },
          {
            name: "Kraton Palace",
            description: "The living royal palace of Yogyakarta's sultan, hosting daily gamelan, dance, and puppet performances.",
          },
        ],
      },
      {
        name: "Jakarta",
        pois: [
          {
            name: "National Monument (Monas)",
            description: "A 132-meter obelisk in Merdeka Square with an observation deck and independence museum below.",
          },
          {
            name: "Kota Tua",
            description: "The Dutch colonial old town, with museums and cafes around cobbled Fatahillah Square.",
          },
          {
            name: "Istiqlal Mosque",
            description: "Southeast Asia's largest mosque, standing directly across from Jakarta's neo-Gothic Catholic cathedral.",
          },
        ],
      },
    ],
  },
  {
    name: "Vietnam",
    iso2: "VN",
    tier: "mid",
    region: "Asia",
    climate: ["tropical", "hot", "humid", "rainy"],
    styles: ["food", "history", "culture", "budget", "nature", "adventure"],
    bestTime: {
      months: ["Feb", "Mar", "Apr", "Oct", "Nov"],
      summary: "Spring and autumn offer the best balance across Vietnam's three distinct regional climates.",
    },
    seasonalNotes: {
      spring: "Pleasant nationwide, with dry weather in the south and warming temperatures in Hanoi after Tet crowds fade.",
      summer: "Hot and humid with rain in the north and south, but this is beach season for central Vietnam.",
      fall: "Hanoi and the north enjoy their finest weather, while central coast typhoons peak in October and November.",
      winter: "Cool and drizzly in the north, dry and warm in the south; Tet holiday closures disrupt late-winter travel.",
    },
    vacationStyle: [
      "Street-food and coffee-culture touring through historic cities",
      "Scenic cruising and trekking in bays, deltas, and mountains",
      "Budget-friendly beach and tailor-town stops along the central coast",
    ],
    pros: [
      "Superb, cheap street food",
      "Dramatic scenery from Ha Long Bay to rice terraces",
      "Very low travel costs",
      "Rich layered history",
    ],
    cons: [
      "Chaotic motorbike traffic",
      "Regional weather varies wildly by season",
      "Persistent touts in tourist zones",
    ],
    cities: [
      {
        name: "Hanoi",
        pois: [
          {
            name: "Old Quarter",
            description: "A maze of 36 ancient trading streets packed with street food stalls, cafes, and colonial facades.",
          },
          {
            name: "Hoan Kiem Lake",
            description: "The city's serene centerpiece lake, home to the red Huc Bridge and Ngoc Son Temple.",
          },
          {
            name: "Temple of Literature",
            description: "Vietnam's first university, an eleventh-century Confucian temple complex of courtyards and stone stelae.",
          },
        ],
      },
      {
        name: "Ho Chi Minh City",
        pois: [
          {
            name: "War Remnants Museum",
            description: "A sobering museum documenting the Vietnam War through photographs, artifacts, and military hardware.",
          },
          {
            name: "Ben Thanh Market",
            description: "The city's landmark covered market, selling everything from noodles to lacquerware since 1914.",
          },
          {
            name: "Cu Chi Tunnels",
            description: "A vast wartime tunnel network outside the city that visitors can crawl through on guided tours.",
          },
        ],
      },
      {
        name: "Hoi An",
        pois: [
          {
            name: "Ancient Town",
            description: "A lantern-lit UNESCO trading port of yellow merchant houses, tailors, and riverside cafes.",
          },
          {
            name: "Japanese Covered Bridge",
            description: "The town's 400-year-old symbol, an ornate wooden bridge built by Japanese merchants.",
          },
          {
            name: "An Bang Beach",
            description: "A relaxed stretch of pale sand and seafood shacks a short bicycle ride from the old town.",
          },
        ],
      },
    ],
  },
  {
    name: "India",
    iso2: "IN",
    tier: "mid",
    region: "Asia",
    climate: ["hot", "dry", "humid"],
    styles: ["history", "culture", "food", "budget", "adventure"],
    bestTime: {
      months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
      summary: "October to March brings cool, dry weather ideal for the Golden Triangle and most of the country.",
    },
    seasonalNotes: {
      spring: "Temperatures climb fast from March, with Holi celebrations early in the season before the fierce pre-monsoon heat.",
      summer: "The monsoon drenches most regions with heavy rain and humidity, though Ladakh in the Himalayas stays dry.",
      fall: "The monsoon retreats, Diwali lights up cities, and the main tourist season begins with comfortable temperatures.",
      winter: "Peak season with cool, sunny days across the north; Delhi fog can delay flights and trains.",
    },
    vacationStyle: [
      "Monument-rich cultural circuits through forts, palaces, and temples",
      "Spiritual and wellness journeys from Varanasi ghats to yoga retreats",
      "Immersive food, market, and rail travel across diverse regions",
    ],
    pros: [
      "Unmatched density of historic monuments",
      "Extremely low travel costs",
      "Hugely varied regional cuisines",
      "Vast diversity of landscapes and cultures",
    ],
    cons: [
      "Intense crowds, noise, and pollution in cities",
      "Extreme summer heat and monsoon disruption",
      "Persistent hassle and scams around major sights",
    ],
    cities: [
      {
        name: "Delhi",
        pois: [
          {
            name: "Red Fort",
            description: "The massive red sandstone fortress of the Mughal emperors, dominating Old Delhi since the 1600s.",
          },
          {
            name: "Qutub Minar",
            description: "A 73-meter twelfth-century victory tower, the tallest brick minaret in the world.",
          },
          {
            name: "Humayun's Tomb",
            description: "A serene garden tomb of red sandstone and marble that inspired the design of the Taj Mahal.",
          },
        ],
      },
      {
        name: "Agra",
        pois: [
          {
            name: "Taj Mahal",
            description: "The white-marble mausoleum built by Shah Jahan for his wife, best viewed at sunrise.",
          },
          {
            name: "Agra Fort",
            description: "A sprawling Mughal fortress of palaces and audience halls with river views toward the Taj.",
          },
          {
            name: "Fatehpur Sikri",
            description: "A perfectly preserved abandoned Mughal capital of red sandstone courtyards outside the city.",
          },
        ],
      },
      {
        name: "Jaipur",
        pois: [
          {
            name: "Amber Fort",
            description: "A hilltop fort-palace of mirrored halls and ramparts overlooking Maota Lake outside the Pink City.",
          },
          {
            name: "Hawa Mahal",
            description: "The famous pink honeycomb facade of 953 windows built so royal women could watch street life unseen.",
          },
          {
            name: "City Palace",
            description: "The still-inhabited royal palace complex blending Rajput and Mughal architecture, courtyards, and museums.",
          },
        ],
      },
    ],
  },
  {
    name: "Philippines",
    iso2: "PH",
    tier: "mid",
    region: "Asia",
    climate: ["tropical", "hot", "humid", "rainy"],
    styles: ["beaches", "nature", "adventure", "budget", "relaxation"],
    bestTime: {
      months: ["Dec", "Jan", "Feb", "Mar", "Apr"],
      summary: "December through April is the dry season, with calm seas ideal for island hopping and diving.",
    },
    seasonalNotes: {
      spring: "Hot and dry through April with excellent beach weather; Holy Week sees heavy domestic travel and full resorts.",
      summer: "The wet season sets in with afternoon downpours and the first typhoons, but prices drop sharply.",
      fall: "Peak typhoon season, especially for Luzon and the eastern seaboard; itineraries need built-in flexibility.",
      winter: "Cool, dry, and busy; the best all-around conditions and highest prices around Christmas and New Year.",
    },
    vacationStyle: [
      "Island-hopping beach holidays among lagoons and white-sand cays",
      "World-class diving and snorkeling trips on coral reefs",
      "Laid-back budget travel between islands, waterfalls, and surf towns",
    ],
    pros: [
      "Some of the world's best beaches and lagoons",
      "English widely spoken",
      "Warm, welcoming locals",
      "Cheap food and accommodation",
    ],
    cons: [
      "Typhoon risk from June to November",
      "Slow inter-island logistics and frequent delays",
      "Manila traffic and congestion",
    ],
    cities: [
      {
        name: "Manila",
        pois: [
          {
            name: "Intramuros",
            description: "The walled Spanish colonial city, with Fort Santiago, cobbled streets, and horse-drawn carriages.",
          },
          {
            name: "Rizal Park",
            description: "The historic central park honoring national hero Jose Rizal at the site of his execution.",
          },
          {
            name: "San Agustin Church",
            description: "The oldest stone church in the Philippines, a UNESCO-listed baroque survivor from 1607.",
          },
        ],
      },
      {
        name: "Cebu",
        pois: [
          {
            name: "Magellan's Cross",
            description: "A chapel-housed cross marking where Magellan planted Christianity in the Philippines in 1521.",
          },
          {
            name: "Basilica del Santo Niño",
            description: "The country's oldest Roman Catholic church, home to a revered image of the child Jesus.",
          },
          {
            name: "Kawasan Falls",
            description: "Turquoise multi-tiered waterfalls in southern Cebu, famous for swimming and canyoneering trips.",
          },
        ],
      },
      {
        name: "El Nido",
        pois: [
          {
            name: "Big Lagoon",
            description: "A cathedral-like lagoon of turquoise water enclosed by sheer limestone cliffs, explored by kayak.",
          },
          {
            name: "Nacpan Beach",
            description: "A four-kilometer arc of golden sand and palms, regularly ranked among Asia's best beaches.",
          },
          {
            name: "Bacuit Bay island hopping",
            description: "Classic boat tours weaving between karst islands, hidden beaches, and snorkeling reefs.",
          },
        ],
      },
    ],
  },
  {
    name: "Sri Lanka",
    iso2: "LK",
    tier: "mid",
    region: "Asia",
    climate: ["tropical", "hot", "humid", "rainy"],
    styles: ["beaches", "nature", "culture", "history", "budget", "relaxation"],
    bestTime: {
      months: ["Dec", "Jan", "Feb", "Mar"],
      summary: "December to March is dry season for the popular west and south coasts and the hill country.",
    },
    seasonalNotes: {
      spring: "The southwest monsoon builds from April; Sinhala New Year in April brings festivities and busy domestic travel.",
      summer: "Rain hits the southwest, but the east coast around Arugam Bay and Trincomalee enjoys its dry season.",
      fall: "The inter-monsoon months are the wettest overall, with low prices and lush green landscapes.",
      winter: "Peak season on the south coast with dry, sunny days; whale watching runs from Mirissa.",
    },
    vacationStyle: [
      "Compact multi-stop tours of beaches, tea hills, and ancient cities",
      "Wildlife safaris for leopards, elephants, and blue whales",
      "Slow train journeys and colonial-town wandering",
    ],
    pros: [
      "Huge variety packed into a small island",
      "Scenic hill-country train rides",
      "Affordable food and guesthouses",
      "Excellent wildlife watching",
    ],
    cons: [
      "Two separate monsoons complicate planning",
      "Slow road travel between regions",
      "Peak-season crowds on the south coast",
    ],
    cities: [
      {
        name: "Colombo",
        pois: [
          {
            name: "Galle Face Green",
            description: "A seafront promenade where locals fly kites and eat street snacks at sunset.",
          },
          {
            name: "Gangaramaya Temple",
            description: "An eclectic Buddhist temple mixing Sri Lankan, Thai, and Chinese architecture with a museum of relics.",
          },
          {
            name: "Pettah Market",
            description: "A frenetic bazaar district of spice stalls, textiles, and the red-and-white striped Jami Ul-Alfar Mosque.",
          },
        ],
      },
      {
        name: "Kandy",
        pois: [
          {
            name: "Temple of the Sacred Tooth Relic",
            description: "Sri Lanka's holiest Buddhist shrine, housing a tooth of the Buddha beside Kandy Lake.",
          },
          {
            name: "Kandy Lake",
            description: "A tranquil artificial lake at the city's heart, ringed by a shaded walking path.",
          },
          {
            name: "Royal Botanic Gardens Peradeniya",
            description: "Expansive gardens of orchids, palms, and giant bamboo once reserved for Kandyan royalty.",
          },
        ],
      },
      {
        name: "Galle",
        pois: [
          {
            name: "Galle Fort",
            description: "A UNESCO-listed Dutch colonial fort town of ramparts, boutiques, and cafes jutting into the sea.",
          },
          {
            name: "Unawatuna Beach",
            description: "A palm-fringed crescent bay near Galle, popular for swimming, snorkeling, and beachfront dining.",
          },
          {
            name: "Galle Lighthouse",
            description: "The photogenic white lighthouse standing on the fort ramparts above a small palm-lined beach.",
          },
        ],
      },
    ],
  },
  {
    name: "Nepal",
    iso2: "NP",
    tier: "mid",
    region: "Asia",
    climate: ["alpine", "temperate", "rainy"],
    styles: ["adventure", "nature", "culture", "history", "budget"],
    bestTime: {
      months: ["Mar", "Apr", "Oct", "Nov"],
      summary: "Autumn and spring offer clear mountain views and stable weather for trekking and sightseeing.",
    },
    seasonalNotes: {
      spring: "The second trekking season, with warm days and rhododendron forests in bloom, though haze builds by May.",
      summer: "Monsoon rains cloud the peaks and make trails muddy and leech-prone; prices and crowds drop sharply.",
      fall: "Post-monsoon skies are at their clearest, making this peak trekking season alongside the Dashain and Tihar festivals.",
      winter: "Cold and clear, with high passes snowbound but lower treks and Kathmandu sightseeing pleasant and quiet.",
    },
    vacationStyle: [
      "Himalayan trekking from teahouse trails to Everest Base Camp",
      "Cultural touring of medieval temples, stupas, and durbar squares",
      "Adventure sports and jungle safaris at budget prices",
    ],
    pros: [
      "World-class trekking routes",
      "Very affordable travel",
      "Rich living Hindu and Buddhist heritage",
      "Warm, hospitable culture",
    ],
    cons: [
      "Poor road quality and rough transport",
      "Monsoon washouts and flight delays",
      "Altitude sickness risk on high treks",
    ],
    cities: [
      {
        name: "Kathmandu",
        pois: [
          {
            name: "Boudhanath Stupa",
            description: "One of the world's largest Buddhist stupas, ringed by prayer wheels, monasteries, and rooftop cafes.",
          },
          {
            name: "Swayambhunath",
            description: "The hilltop Monkey Temple, its gilded stupa and painted Buddha eyes overlooking the valley.",
          },
          {
            name: "Kathmandu Durbar Square",
            description: "The old royal plaza of pagoda temples, palaces, and the living goddess Kumari's residence.",
          },
        ],
      },
      {
        name: "Pokhara",
        pois: [
          {
            name: "Phewa Lake",
            description: "A calm lake reflecting the Annapurna range, lined with lakeside cafes and rowing boats.",
          },
          {
            name: "Sarangkot",
            description: "A ridge-top viewpoint famous for Himalayan sunrises and as a paragliding launch site.",
          },
          {
            name: "World Peace Pagoda",
            description: "A gleaming white Buddhist stupa on a hill above the lake with sweeping mountain panoramas.",
          },
        ],
      },
      {
        name: "Chitwan",
        pois: [
          {
            name: "Chitwan National Park",
            description: "A UNESCO lowland jungle reserve where safaris seek one-horned rhinos, tigers, and gharial crocodiles.",
          },
          {
            name: "Rapti River",
            description: "Dugout canoe trips drift past basking crocodiles and birdlife toward classic jungle sunsets.",
          },
          {
            name: "Tharu villages",
            description: "Traditional villages around the park where visitors see Tharu stick dances and rural lowland life.",
          },
        ],
      },
    ],
  },
  {
    name: "Cambodia",
    iso2: "KH",
    tier: "mid",
    region: "Asia",
    climate: ["tropical", "hot", "humid", "rainy"],
    styles: ["history", "culture", "budget", "beaches", "nature"],
    bestTime: {
      months: ["Nov", "Dec", "Jan", "Feb"],
      summary: "November to February is the cool dry season, the most comfortable time for temple exploring.",
    },
    seasonalNotes: {
      spring: "March to May is brutally hot and dry, with April's Khmer New Year bringing nationwide celebrations and closures.",
      summer: "The wet season brings short afternoon downpours, lush green rice paddies, and far fewer visitors at Angkor.",
      fall: "Rains peak in September and October, swelling the Tonle Sap lake; November's Water Festival marks the turn.",
      winter: "Peak season with dry, relatively cool weather; sunrise crowds at Angkor Wat are at their largest.",
    },
    vacationStyle: [
      "Ancient temple circuits centered on the Angkor complex",
      "Budget backpacking through riverside towns and markets",
      "Low-key island and beach downtime on the southern coast",
    ],
    pros: [
      "Angkor is one of the world's great sights",
      "Very low travel costs",
      "Friendly, resilient local culture",
      "Quiet southern islands and beaches",
    ],
    cons: [
      "Intense heat much of the year",
      "Limited infrastructure outside main hubs",
      "Tourist-targeted scams and tuk-tuk hassle",
    ],
    cities: [
      {
        name: "Siem Reap",
        pois: [
          {
            name: "Angkor Wat",
            description: "The world's largest religious monument, a twelfth-century Khmer temple famed for its sunrise silhouette.",
          },
          {
            name: "Bayon Temple",
            description: "The heart of Angkor Thom, crowned with dozens of towers carved with enormous serene stone faces.",
          },
          {
            name: "Ta Prohm",
            description: "The atmospheric jungle temple left entwined in giant strangler-fig roots, made famous by Tomb Raider.",
          },
        ],
      },
      {
        name: "Phnom Penh",
        pois: [
          {
            name: "Royal Palace and Silver Pagoda",
            description: "The gilded royal compound whose pagoda floor is laid with thousands of silver tiles.",
          },
          {
            name: "Tuol Sleng Genocide Museum",
            description: "A former Khmer Rouge prison preserved as a harrowing memorial to the regime's victims.",
          },
          {
            name: "Sisowath Quay",
            description: "The lively riverfront promenade of cafes, bars, and evening strolls along the Tonle Sap.",
          },
        ],
      },
      {
        name: "Sihanoukville",
        pois: [
          {
            name: "Koh Rong",
            description: "A jungle-backed island of powdery white beaches and glowing bioluminescent plankton, reached by fast ferry.",
          },
          {
            name: "Koh Rong Samloem",
            description: "A quieter sister island known for turquoise Saracen Bay and simple beachfront bungalows.",
          },
          {
            name: "Otres Beach",
            description: "A long, mellow stretch of mainland sand south of town with low-key bars and sunsets.",
          },
        ],
      },
    ],
  },
  {
    name: "Egypt",
    iso2: "EG",
    tier: "mid",
    region: "Africa",
    climate: ["desert", "hot", "dry", "sunny"],
    styles: ["history", "culture", "beaches", "budget", "adventure"],
    bestTime: {
      months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
      summary: "October to March offers mild, sunny days ideal for temples, tombs, and Nile cruising.",
    },
    seasonalNotes: {
      spring: "Warm and pleasant early on, though the khamsin winds can bring dust storms in March and April.",
      summer: "Upper Egypt regularly tops 40C, making Luxor sightseeing punishing; Red Sea resorts stay busy despite heat.",
      fall: "Temperatures ease and the main tourist season begins, with comfortable weather and rising crowds at major sites.",
      winter: "Peak season with cool nights and sunny days; expect crowds and premium prices on Nile cruises.",
    },
    vacationStyle: [
      "Ancient-history touring of pyramids, tombs, and temples",
      "Nile cruises between Luxor and Aswan",
      "Red Sea beach and diving holidays",
    ],
    pros: [
      "Unrivaled ancient monuments",
      "Excellent value once there",
      "Superb Red Sea diving and snorkeling",
      "Reliable winter sunshine",
    ],
    cons: [
      "Persistent hassle and baksheesh culture at sights",
      "Extreme summer heat in the south",
      "Uneven infrastructure and chaotic traffic",
    ],
    cities: [
      {
        name: "Cairo",
        pois: [
          {
            name: "Pyramids of Giza",
            description: "The last surviving ancient wonder, three colossal pyramids guarded by the Great Sphinx.",
          },
          {
            name: "Egyptian Museum",
            description: "A vast trove of pharaonic treasures, including riches from Tutankhamun's tomb.",
          },
          {
            name: "Khan el-Khalili",
            description: "A medieval bazaar of lamps, spices, and coffeehouses in the heart of Islamic Cairo.",
          },
        ],
      },
      {
        name: "Luxor",
        pois: [
          {
            name: "Karnak Temple",
            description: "An immense temple complex built over 2,000 years, famed for its forest of giant columns.",
          },
          {
            name: "Valley of the Kings",
            description: "The desert necropolis of pharaohs, where vividly painted royal tombs include Tutankhamun's.",
          },
          {
            name: "Luxor Temple",
            description: "A gracefully colonnaded riverside temple, especially atmospheric when floodlit after dark.",
          },
        ],
      },
      {
        name: "Aswan",
        pois: [
          {
            name: "Abu Simbel",
            description: "Ramses II's colossal rock-cut temples, relocated block by block above Lake Nasser.",
          },
          {
            name: "Philae Temple",
            description: "An elegant island temple of Isis, rescued from the rising Nile and reached by boat.",
          },
          {
            name: "Nile felucca rides",
            description: "Traditional sailboats drift between islands and Nubian villages on the Nile's most scenic stretch.",
          },
        ],
      },
    ],
  },
  {
    name: "Morocco",
    iso2: "MA",
    tier: "mid",
    region: "Africa",
    climate: ["mediterranean", "desert", "dry", "sunny"],
    styles: ["culture", "history", "food", "shopping", "adventure"],
    bestTime: {
      months: ["Mar", "Apr", "May", "Sep", "Oct"],
      summary: "Spring and autumn bring warm, comfortable weather for medinas, mountains, and the desert.",
    },
    seasonalNotes: {
      spring: "The best season, with wildflowers in the Atlas, pleasant medina weather, and busy but manageable crowds.",
      summer: "Marrakech and inland cities bake above 38C; coastal Essaouira and the high Atlas offer relief.",
      fall: "Heat fades to ideal touring temperatures, and desert camps in the Sahara become comfortable again.",
      winter: "Mild days and cold nights, with snow on the Atlas peaks and good-value low-season prices outside holidays.",
    },
    vacationStyle: [
      "Sensory medina immersion in souks, riads, and tanneries",
      "Sahara desert excursions with camel treks and dune camps",
      "Mountain, coast, and kasbah road trips",
    ],
    pros: [
      "Atmospheric ancient medinas",
      "Short flights from Europe",
      "Diverse landscapes from Sahara to Atlas",
      "Distinctive cuisine and riad hotels",
    ],
    cons: [
      "Persistent touts and haggling fatigue",
      "Intense inland summer heat",
      "Easy to get lost in labyrinthine old towns",
    ],
    cities: [
      {
        name: "Marrakech",
        pois: [
          {
            name: "Jemaa el-Fnaa",
            description: "The legendary main square, filling nightly with food stalls, musicians, and storytellers.",
          },
          {
            name: "Majorelle Garden",
            description: "A cobalt-blue villa garden of cacti and palms restored by Yves Saint Laurent.",
          },
          {
            name: "Bahia Palace",
            description: "A nineteenth-century palace of zellige tilework, carved cedar, and tranquil orange-tree courtyards.",
          },
        ],
      },
      {
        name: "Fes",
        pois: [
          {
            name: "Fes el-Bali",
            description: "The world's largest car-free urban area, a medieval medina of 9,000 tangled alleyways.",
          },
          {
            name: "Chouara Tannery",
            description: "Centuries-old leather tanneries whose stone dye vats are viewed from surrounding terraces.",
          },
          {
            name: "Bou Inania Madrasa",
            description: "A fourteenth-century religious college showcasing the finest Marinid carving and tilework.",
          },
        ],
      },
      {
        name: "Chefchaouen",
        pois: [
          {
            name: "Blue medina",
            description: "The famous powder-blue old town tumbling down the Rif mountains, a photographer's dream.",
          },
          {
            name: "Ras El Maa",
            description: "A spring-fed cascade at the medina's edge where locals gather and mountain trails begin.",
          },
          {
            name: "Spanish Mosque viewpoint",
            description: "A hilltop mosque reached by an easy walk, offering the classic sunset panorama over the blue city.",
          },
        ],
      },
    ],
  },
  {
    name: "South Africa",
    iso2: "ZA",
    tier: "mid",
    region: "Africa",
    climate: ["sunny", "dry", "mediterranean", "temperate"],
    styles: ["nature", "adventure", "wine", "road trip", "beaches", "food"],
    bestTime: {
      months: ["Apr", "May", "Sep", "Oct"],
      summary: "Shoulder months suit both regions, while dry May to September is prime for Kruger safaris.",
    },
    seasonalNotes: {
      spring: "March to May is local autumn: mild, uncrowded, with harvest season in the Cape winelands.",
      summer: "June to August is local winter: peak game viewing in Kruger, but Cape Town is cool and rainy.",
      fall: "September to November is local spring, bringing West Coast wildflowers and whale watching at Hermanus.",
      winter: "December to February is local summer: hot beach weather and peak crowds and prices in Cape Town.",
    },
    vacationStyle: [
      "Big Five safaris in world-famous game reserves",
      "Scenic coastal and winelands road trips",
      "City, beach, and mountain breaks in Cape Town",
    ],
    pros: [
      "Top-tier safari experiences",
      "Excellent value wine and dining",
      "Spectacular coastal scenery",
      "Well-developed self-drive infrastructure",
    ],
    cons: [
      "Serious crime requires constant awareness",
      "Long distances between highlights",
      "Load-shedding power cuts can disrupt plans",
    ],
    cities: [
      {
        name: "Cape Town",
        pois: [
          {
            name: "Table Mountain",
            description: "The flat-topped icon looming over the city, reached by rotating cable car or hiking trails.",
          },
          {
            name: "V&A Waterfront",
            description: "A working-harbor precinct of shops, restaurants, and the Two Oceans Aquarium.",
          },
          {
            name: "Cape of Good Hope",
            description: "Dramatic cliffs at the peninsula's tip, paired with the penguin colony at Boulders Beach.",
          },
        ],
      },
      {
        name: "Johannesburg",
        pois: [
          {
            name: "Apartheid Museum",
            description: "A powerful museum chronicling the rise and fall of apartheid through immersive exhibits.",
          },
          {
            name: "Soweto",
            description: "The historic township of Vilakazi Street, home to Nelson Mandela's former house and vibrant tours.",
          },
          {
            name: "Constitution Hill",
            description: "A former prison complex turned living museum, now seat of the Constitutional Court.",
          },
        ],
      },
      {
        name: "Kruger National Park",
        pois: [
          {
            name: "Big Five game drives",
            description: "Self-drive or guided safaris across one of Africa's largest and most accessible game reserves.",
          },
          {
            name: "Panorama Route",
            description: "A scenic drive past Blyde River Canyon, God's Window, and waterfalls on the park's doorstep.",
          },
          {
            name: "Skukuza",
            description: "The park's main rest camp on the Sabie River, a hub for drives, dining, and wildlife viewing.",
          },
        ],
      },
    ],
  },
  {
    name: "Kenya",
    iso2: "KE",
    tier: "mid",
    region: "Africa",
    climate: ["sunny", "dry", "tropical", "hot"],
    styles: ["nature", "adventure", "beaches", "culture", "luxury"],
    bestTime: {
      months: ["Jan", "Feb", "Jul", "Aug", "Sep", "Oct"],
      summary: "Dry seasons deliver the best game viewing, with the Great Migration in the Mara from July to October.",
    },
    seasonalNotes: {
      spring: "The long rains from March to May make some tracks impassable, but lodges discount heavily and parks empty.",
      summer: "The main dry season begins and migration herds reach the Maasai Mara, drawing peak safari crowds.",
      fall: "River crossings continue into October before the short rains arrive in November, greening the plains.",
      winter: "Hot, dry weather brings excellent game viewing and calving season, plus prime beach time on the coast.",
    },
    vacationStyle: [
      "Classic savanna safaris across world-renowned national parks",
      "Beach-and-bush combinations ending on Indian Ocean sands",
      "Cultural encounters with Maasai and Swahili coastal heritage",
    ],
    pros: [
      "The Great Migration spectacle",
      "Superb range of parks and lodges",
      "Easy safari-beach combination trips",
      "Strong wildlife-guiding tradition",
    ],
    cons: [
      "Peak-season safari costs are high",
      "Park crowding during migration months",
      "Petty crime in Nairobi requires caution",
    ],
    cities: [
      {
        name: "Nairobi",
        pois: [
          {
            name: "Nairobi National Park",
            description: "A full wildlife park on the city's edge, where lions and rhinos roam against a skyline backdrop.",
          },
          {
            name: "Sheldrick Wildlife Trust",
            description: "A famed elephant orphanage where visitors watch rescued calves at their daily mud bath.",
          },
          {
            name: "Giraffe Centre",
            description: "A conservation center where endangered Rothschild giraffes eat pellets from visitors' hands.",
          },
        ],
      },
      {
        name: "Maasai Mara",
        pois: [
          {
            name: "Great Migration crossings",
            description: "Vast wildebeest herds plunge across the crocodile-filled Mara River between July and October.",
          },
          {
            name: "Big Five game drives",
            description: "Dawn and dusk drives across open savanna famous for lions, cheetahs, and abundant plains game.",
          },
          {
            name: "Maasai village visits",
            description: "Community visits offering insight into Maasai traditions, dances, and pastoralist life.",
          },
        ],
      },
      {
        name: "Mombasa",
        pois: [
          {
            name: "Diani Beach",
            description: "A long ribbon of white sand and reef-protected turquoise water south of the city.",
          },
          {
            name: "Fort Jesus",
            description: "A sixteenth-century Portuguese fortress guarding the harbor, now a UNESCO-listed museum.",
          },
          {
            name: "Mombasa Old Town",
            description: "Narrow streets of carved Swahili doors, balconies, and spice-scented markets near the port.",
          },
        ],
      },
    ],
  },
  {
    name: "Tanzania",
    iso2: "TZ",
    tier: "mid",
    region: "Africa",
    climate: ["tropical", "hot", "dry", "sunny"],
    styles: ["nature", "adventure", "beaches", "luxury", "culture"],
    bestTime: {
      months: ["Jun", "Jul", "Aug", "Sep", "Oct"],
      summary: "The June to October dry season is best for Serengeti safaris, Kilimanjaro climbs, and Zanzibar beaches.",
    },
    seasonalNotes: {
      spring: "The long rains from March to May bring afternoon storms, lush scenery, and the lowest lodge rates.",
      summer: "Peak dry season: superb game viewing around shrinking waterholes and clear conditions on Kilimanjaro.",
      fall: "Dry weather holds through October; the short rains in November are brief and rarely disrupt safaris.",
      winter: "Hot and mostly dry, with wildebeest calving in the southern Serengeti drawing predators in January and February.",
    },
    vacationStyle: [
      "Serengeti and Ngorongoro safari circuits",
      "Kilimanjaro trekking expeditions",
      "Zanzibar beach and spice-island holidays",
    ],
    pros: [
      "Home to the Serengeti and Ngorongoro Crater",
      "Africa's highest peak to climb",
      "Idyllic Zanzibar beaches",
      "Calving and migration spectacles",
    ],
    cons: [
      "Safaris and climbs are expensive",
      "Long, bumpy drives between parks",
      "Heavy rains complicate March to May travel",
    ],
    cities: [
      {
        name: "Arusha",
        pois: [
          {
            name: "Serengeti National Park",
            description: "The legendary endless plains hosting the Great Migration and Africa's densest lion population.",
          },
          {
            name: "Ngorongoro Crater",
            description: "A collapsed volcanic caldera sheltering some 25,000 animals, including rare black rhinos.",
          },
          {
            name: "Tarangire National Park",
            description: "A baobab-studded park famous for enormous elephant herds along the Tarangire River.",
          },
        ],
      },
      {
        name: "Zanzibar City",
        pois: [
          {
            name: "Stone Town",
            description: "A UNESCO-listed maze of carved doors, bazaars, and Swahili, Arab, and Indian architecture.",
          },
          {
            name: "Nungwi Beach",
            description: "The island's most celebrated beach, with white sand, dhow sunsets, and turquoise swimming year-round.",
          },
          {
            name: "Spice farm tours",
            description: "Guided walks through clove, vanilla, and nutmeg plantations that earned Zanzibar its spice-island name.",
          },
        ],
      },
      {
        name: "Moshi",
        pois: [
          {
            name: "Mount Kilimanjaro",
            description: "Africa's highest summit at 5,895 meters, climbed via multi-day routes like Machame and Marangu.",
          },
          {
            name: "Materuni Waterfall",
            description: "A tall waterfall reached by a village hike, often paired with a Chagga coffee-making tour.",
          },
          {
            name: "Chagga coffee villages",
            description: "Foothill communities where visitors roast beans, learn Chagga traditions, and enjoy mountain views.",
          },
        ],
      },
    ],
  },
  {
    name: "Israel",
    iso2: "IL",
    tier: "mid",
    region: "Middle East",
    climate: ["mediterranean", "hot", "dry", "sunny"],
    styles: ["history", "culture", "beaches", "food", "nightlife", "museums"],
    bestTime: {
      months: ["Mar", "Apr", "May", "Oct", "Nov"],
      summary: "Spring and autumn bring warm, dry days without the intense heat of high summer.",
    },
    seasonalNotes: {
      spring: "Mild weather and wildflowers, but Passover and Easter bring peak crowds and prices in Jerusalem.",
      summer: "Hot and humid on the coast with buzzing beach life; Jerusalem is hot but dry, Eilat scorching.",
      fall: "Pleasant temperatures return, though Rosh Hashanah and Yom Kippur bring widespread closures and busy hotels.",
      winter: "Cool and rainy in the north and Jerusalem, while Eilat on the Red Sea stays warm and sunny.",
    },
    vacationStyle: [
      "Pilgrimage and ancient-history touring across sacred sites",
      "Mediterranean beach and food-scene city breaks",
      "Desert, Dead Sea, and Red Sea excursions",
    ],
    pros: [
      "Extraordinary density of religious and historic sites",
      "Excellent food and cafe culture",
      "Compact size, short travel distances",
      "Beaches, desert, and mountains close together",
    ],
    cons: [
      "High prices for the region",
      "Shabbat shutdowns limit Friday-Saturday transport",
      "Regional security situation can shift quickly",
    ],
    cities: [
      {
        name: "Jerusalem",
        pois: [
          {
            name: "Western Wall",
            description: "Judaism's holiest prayer site, the surviving retaining wall of the Second Temple.",
          },
          {
            name: "Church of the Holy Sepulchre",
            description: "The church built over the traditional sites of Jesus's crucifixion and burial.",
          },
          {
            name: "Dome of the Rock",
            description: "The golden-domed seventh-century shrine dominating the Temple Mount and the city skyline.",
          },
        ],
      },
      {
        name: "Tel Aviv",
        pois: [
          {
            name: "Tel Aviv beaches",
            description: "Fourteen kilometers of sandy Mediterranean beachfront lined with promenades, bars, and volleyball courts.",
          },
          {
            name: "Old Jaffa",
            description: "An ancient port quarter of stone lanes, galleries, and a flea market beside the sea.",
          },
          {
            name: "Carmel Market",
            description: "The city's biggest open-air market, packed with produce, spices, street food, and energy.",
          },
        ],
      },
      {
        name: "Eilat",
        pois: [
          {
            name: "Coral Beach Nature Reserve",
            description: "A protected Red Sea reef where snorkelers swim over vivid coral just off the beach.",
          },
          {
            name: "Underwater Observatory Marine Park",
            description: "An observation tower sunk into the reef offering dry-land views of sharks, rays, and coral fish.",
          },
          {
            name: "Timna Park",
            description: "A desert park of red sandstone formations and ancient copper mines north of the city.",
          },
        ],
      },
    ],
  },
  {
    name: "Jordan",
    iso2: "JO",
    tier: "mid",
    region: "Middle East",
    climate: ["desert", "hot", "dry", "sunny"],
    styles: ["history", "adventure", "culture", "nature", "food"],
    bestTime: {
      months: ["Mar", "Apr", "May", "Oct", "Nov"],
      summary: "Spring and autumn offer mild days perfect for Petra, Wadi Rum, and hiking.",
    },
    seasonalNotes: {
      spring: "Peak season with wildflowers in the north and ideal hiking weather; book Petra-area hotels ahead.",
      summer: "Very hot, especially in Wadi Rum and Aqaba, though desert evenings cool off and crowds thin.",
      fall: "The second high season, with warm days, clear skies, and comfortable desert camping.",
      winter: "Cool with occasional rain and even snow in Amman and Petra; Aqaba stays mild for diving.",
    },
    vacationStyle: [
      "Archaeological touring anchored by the rose-red city of Petra",
      "Desert adventures with jeep tours and Bedouin camps",
      "Dead Sea floating and Red Sea diving add-ons",
    ],
    pros: [
      "Petra is a bucket-list wonder",
      "Compact and easy to combine highlights",
      "Reliably safe and welcoming",
      "Otherworldly Wadi Rum landscapes",
    ],
    cons: [
      "Relatively high entry fees and costs",
      "Summer heat limits midday sightseeing",
      "Limited public transport favors tours or rentals",
    ],
    cities: [
      {
        name: "Amman",
        pois: [
          {
            name: "Amman Citadel",
            description: "A hilltop archaeological site of Roman, Byzantine, and Umayyad ruins overlooking the downtown.",
          },
          {
            name: "Roman Theatre",
            description: "A steep 6,000-seat second-century amphitheater cut into the hillside of old Amman.",
          },
          {
            name: "Jerash",
            description: "One of the world's best-preserved Roman cities, with colonnaded streets an hour north of Amman.",
          },
        ],
      },
      {
        name: "Petra",
        pois: [
          {
            name: "The Treasury",
            description: "Petra's most famous facade, a rock-carved Nabataean tomb revealed at the end of the Siq.",
          },
          {
            name: "The Monastery",
            description: "A colossal carved facade reached by roughly 800 steps, rewarding hikers with mountaintop views.",
          },
          {
            name: "The Siq",
            description: "A narrow winding sandstone canyon forming the dramatic kilometer-long entrance to the ancient city.",
          },
        ],
      },
      {
        name: "Aqaba",
        pois: [
          {
            name: "Red Sea coral reefs",
            description: "Warm, clear waters with accessible coral gardens make Aqaba a top diving and snorkeling base.",
          },
          {
            name: "Wadi Rum day trips",
            description: "Jeep excursions from the coast into the vast red desert of towering cliffs and Bedouin camps.",
          },
          {
            name: "South Beach",
            description: "A relaxed public shoreline south of town, popular for swimming and shore-entry snorkeling.",
          },
        ],
      },
    ],
  },
  {
    name: "Saudi Arabia",
    iso2: "SA",
    tier: "mid",
    region: "Middle East",
    climate: ["desert", "hot", "dry", "sunny"],
    styles: ["history", "culture", "adventure", "luxury", "shopping"],
    bestTime: {
      months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
      summary: "October to March brings mild desert days suited to sightseeing across the kingdom.",
    },
    seasonalNotes: {
      spring: "Temperatures climb quickly from March; early spring is still pleasant for AlUla and desert trips.",
      summer: "Extreme heat regularly exceeds 45C inland, pushing sightseeing to early mornings and air-conditioned malls.",
      fall: "Heat breaks from October, opening the main tourist season and the Riyadh Season entertainment festival.",
      winter: "The best months, with cool nights, comfortable days, and peak events at AlUla and Riyadh.",
    },
    vacationStyle: [
      "Emerging-destination touring of ancient Nabataean and Islamic heritage",
      "Desert adventures from canyon edges to dune landscapes",
      "Modern city experiences with megaprojects, malls, and festivals",
    ],
    pros: [
      "Hegra rivals Petra with far fewer crowds",
      "Ambitious new tourism infrastructure",
      "Distinctive, little-visited heritage sites",
      "Reliable winter sunshine",
    ],
    cons: [
      "Very hot much of the year",
      "Strict local laws and customs to observe",
      "Costs are high and distances long",
    ],
    cities: [
      {
        name: "Riyadh",
        pois: [
          {
            name: "Diriyah",
            description: "The restored mud-brick birthplace of the Saudi state, a UNESCO site with museums and dining.",
          },
          {
            name: "Kingdom Centre Sky Bridge",
            description: "A glass bridge atop the 300-meter Kingdom Tower with sweeping views over the capital.",
          },
          {
            name: "Edge of the World",
            description: "Dramatic cliffs of the Tuwaiq escarpment dropping to the desert plain outside Riyadh.",
          },
        ],
      },
      {
        name: "Jeddah",
        pois: [
          {
            name: "Al-Balad",
            description: "The UNESCO-listed old town of coral-stone merchant houses with carved wooden balconies.",
          },
          {
            name: "Jeddah Corniche",
            description: "A long waterfront promenade of sculptures, beaches, and the towering King Fahd Fountain.",
          },
          {
            name: "Red Sea diving",
            description: "Pristine, uncrowded reefs and wrecks make Jeddah a gateway to world-class Red Sea diving.",
          },
        ],
      },
      {
        name: "AlUla",
        pois: [
          {
            name: "Hegra",
            description: "Saudi Arabia's first UNESCO site, with over 100 monumental Nabataean tombs carved into rock outcrops.",
          },
          {
            name: "Elephant Rock",
            description: "A colossal sandstone monolith shaped like an elephant, a favorite sunset gathering spot.",
          },
          {
            name: "AlUla Old Town",
            description: "A labyrinth of centuries-old mud-brick houses beneath a hilltop citadel, now dotted with cafes.",
          },
        ],
      },
    ],
  },
  {
    name: "Qatar",
    iso2: "QA",
    tier: "mid",
    region: "Middle East",
    climate: ["desert", "hot", "dry", "sunny"],
    styles: ["luxury", "shopping", "culture", "museums", "food"],
    bestTime: {
      months: ["Nov", "Dec", "Jan", "Feb", "Mar"],
      summary: "November to March offers warm, sunny days without the punishing heat of summer.",
    },
    seasonalNotes: {
      spring: "March is still pleasant, but by May daytime heat becomes intense and outdoor sightseeing shifts to evenings.",
      summer: "Extreme heat and humidity above 40C keep life indoors; hotel prices drop to their yearly lows.",
      fall: "Temperatures ease from late October, reopening desert trips, corniche strolls, and outdoor dining.",
      winter: "Peak season with ideal mild weather, busy events calendars, and premium hotel rates.",
    },
    vacationStyle: [
      "Polished city breaks built on museums, souqs, and skyline dining",
      "Luxury stopovers between long-haul flights",
      "Desert day trips to dunes and the Inland Sea",
    ],
    pros: [
      "World-class museums and architecture",
      "Easy stopover on Qatar Airways routes",
      "Very safe and clean",
      "Compact, with short travel times",
    ],
    cons: [
      "Brutal summer heat",
      "Limited sights beyond greater Doha",
      "Alcohol restricted and expensive",
    ],
    cities: [
      {
        name: "Doha",
        pois: [
          {
            name: "Museum of Islamic Art",
            description: "An I. M. Pei masterpiece on the corniche housing 1,400 years of Islamic art.",
          },
          {
            name: "Souq Waqif",
            description: "A restored traditional bazaar of spices, falcons, and shisha cafes, liveliest after dark.",
          },
          {
            name: "Katara Cultural Village",
            description: "A seaside cultural district of amphitheaters, galleries, mosques, and international restaurants.",
          },
        ],
      },
      {
        name: "Al Wakrah",
        pois: [
          {
            name: "Souq Al Wakrah",
            description: "A relaxed heritage souq of restored pearl-fishing village houses along the waterfront.",
          },
          {
            name: "Al Wakrah Beach",
            description: "A family-friendly public beach beside the souq with shallow water and dhow views.",
          },
          {
            name: "Al Janoub Stadium",
            description: "Zaha Hadid's dhow-inspired World Cup stadium, an architectural landmark of the 2022 tournament.",
          },
        ],
      },
      {
        name: "Mesaieed",
        pois: [
          {
            name: "Khor Al Adaid",
            description: "The UNESCO-recognized Inland Sea, where towering dunes meet a tidal inlet near the Saudi border.",
          },
          {
            name: "Sealine Beach",
            description: "The launch point for dune-bashing safaris, camel rides, and beachside desert resorts.",
          },
          {
            name: "Singing sand dunes",
            description: "Crescent dunes west of town that hum audibly when sand slides down their slopes.",
          },
        ],
      },
    ],
  },
  {
    name: "New Zealand",
    iso2: "NZ",
    tier: "mid",
    region: "Oceania",
    climate: ["temperate", "alpine", "rainy"],
    styles: ["nature", "adventure", "road trip", "wine", "skiing", "relaxation"],
    bestTime: {
      months: ["Dec", "Jan", "Feb", "Mar"],
      summary: "December to March is New Zealand's summer, with long days ideal for hiking and road trips.",
    },
    seasonalNotes: {
      spring: "March to May is local autumn, with golden foliage in Central Otago, settled weather, and thinning crowds.",
      summer: "June to August is local winter: ski season around Queenstown and Wanaka, with short days and snowy passes.",
      fall: "September to November is local spring, bringing lambs, full waterfalls, changeable weather, and shoulder-season prices.",
      winter: "December to February is local summer, the peak season for hiking and campervans; book accommodation well ahead.",
    },
    vacationStyle: [
      "Epic self-drive road trips through fjords, lakes, and mountains",
      "Adrenaline sports in the adventure capital of the world",
      "Wine regions, Maori culture, and geothermal wonders",
    ],
    pros: [
      "Jaw-dropping scenery at every turn",
      "Superb hiking on the Great Walks",
      "Easy, safe self-drive travel",
      "Huge range of adventure activities",
    ],
    cons: [
      "Long, expensive flights to get there",
      "High accommodation and activity costs",
      "Weather can change fast in the mountains",
    ],
    cities: [
      {
        name: "Auckland",
        pois: [
          {
            name: "Sky Tower",
            description: "The Southern Hemisphere's tallest tower, with observation decks and a SkyJump over the harbor city.",
          },
          {
            name: "Waiheke Island",
            description: "A vineyard-covered island of beaches and cellar doors, a 40-minute ferry from downtown.",
          },
          {
            name: "Auckland War Memorial Museum",
            description: "A grand museum of Maori and Pacific treasures set in the Auckland Domain parkland.",
          },
        ],
      },
      {
        name: "Queenstown",
        pois: [
          {
            name: "Milford Sound",
            description: "A breathtaking fjord of sheer cliffs and waterfalls, visited on day trips by coach, boat, or plane.",
          },
          {
            name: "Skyline Gondola",
            description: "A steep gondola up Bob's Peak for panoramic views, luge rides, and lakeside dining.",
          },
          {
            name: "Kawarau Bridge bungy",
            description: "The birthplace of commercial bungy jumping, launching leapers 43 meters above the Kawarau River.",
          },
        ],
      },
      {
        name: "Rotorua",
        pois: [
          {
            name: "Te Puia",
            description: "A geothermal valley of erupting geysers and boiling mud, paired with a Maori arts institute.",
          },
          {
            name: "Wai-O-Tapu Thermal Wonderland",
            description: "Surreal volcanic terrain of neon-colored hot springs, including the famous Champagne Pool.",
          },
          {
            name: "Redwoods Whakarewarewa Forest",
            description: "Towering Californian redwoods threaded with walking, biking, and illuminated treetop trails.",
          },
        ],
      },
    ],
  },
  {
    name: "Fiji",
    iso2: "FJ",
    tier: "mid",
    region: "Oceania",
    climate: ["tropical", "hot", "humid", "sunny"],
    styles: ["beaches", "relaxation", "romance", "family", "adventure", "nature"],
    bestTime: {
      months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      summary: "May to October is the dry season, with sunny days, lower humidity, and calm seas.",
    },
    seasonalNotes: {
      spring: "March to May sees cyclone season wind down and rains ease, with good shoulder-season deals emerging.",
      summer: "June to August is Fiji's dry-season peak: cooler, sunny, and busy with Australian and NZ school holidays.",
      fall: "September and October stay dry and warm before rains build; prices dip between holiday periods.",
      winter: "December to February is the hot, humid wet season with cyclone risk, though resorts fill for the holidays.",
    },
    vacationStyle: [
      "Barefoot island resort holidays on white-sand beaches",
      "Honeymoon and family escapes with overwater luxury or kids clubs",
      "Snorkeling, diving, and village-visit adventures across island chains",
    ],
    pros: [
      "Genuinely warm, famous hospitality",
      "Superb soft-coral diving and snorkeling",
      "Resorts for every budget and style",
      "Easy island hopping by fast boat",
    ],
    cons: [
      "Cyclone risk from November to April",
      "Remote islands mean costly transfers",
      "Limited sights beyond beaches and resorts",
    ],
    cities: [
      {
        name: "Nadi",
        pois: [
          {
            name: "Sri Siva Subramaniya Temple",
            description: "The Southern Hemisphere's largest Hindu temple, a brightly painted landmark at the edge of town.",
          },
          {
            name: "Garden of the Sleeping Giant",
            description: "Lush orchid gardens founded by actor Raymond Burr beneath the Sabeto mountain range.",
          },
          {
            name: "Sabeto Hot Springs",
            description: "Natural thermal pools and mud baths where visitors coat themselves in mineral-rich mud.",
          },
        ],
      },
      {
        name: "Denarau Island",
        pois: [
          {
            name: "Port Denarau Marina",
            description: "The main hub for island-hopping catamarans, day cruises, and waterfront dining and shops.",
          },
          {
            name: "Mamanuca Islands day trips",
            description: "Fast boats reach postcard islets like Malolo and Cloud 9 for snorkeling and beach days.",
          },
          {
            name: "Denarau resort beaches",
            description: "A strip of international resorts with pools, golf, and family activities minutes from Nadi Airport.",
          },
        ],
      },
      {
        name: "Suva",
        pois: [
          {
            name: "Fiji Museum",
            description: "The national museum in Thurston Gardens, tracing 3,700 years of Fijian history and seafaring.",
          },
          {
            name: "Colo-i-Suva Forest Park",
            description: "A rainforest reserve of walking trails, waterfalls, and natural swimming holes above the capital.",
          },
          {
            name: "Suva Municipal Market",
            description: "The South Pacific's largest produce market, piled with kava, tropical fruit, and fresh fish.",
          },
        ],
      },
    ],
  },
]
