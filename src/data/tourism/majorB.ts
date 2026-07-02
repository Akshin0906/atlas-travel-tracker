import type { TourismCountry } from '../../types'

export const tourismMajorB: TourismCountry[] = [
  {
    name: "Thailand",
    iso2: "TH",
    tier: "major",
    region: "Asia",
    climate: ["tropical", "hot", "humid", "rainy"],
    styles: ["food", "beaches", "culture", "nightlife", "budget", "adventure"],
    bestTime: {
      months: ["Nov", "Dec", "Jan", "Feb"],
      summary: "November to February offers the cool, dry season with sunny days across most of the country.",
    },
    seasonalNotes: {
      spring: "March to May is the hottest stretch, often above 35C, with the Songkran water festival in mid-April.",
      summer: "June to August brings green-season afternoon downpours, lush landscapes, and noticeably lower hotel prices.",
      fall: "September and October see the heaviest rain and occasional flooding, but sights are quiet and deals abound.",
      winter: "November to February is peak season, with dry pleasant weather, big crowds, and the highest prices.",
    },
    vacationStyle: [
      "Tropical beach and island holidays",
      "Temple and street-food city breaks",
      "Budget-friendly backpacking and nightlife",
    ],
    pros: [
      "Excellent value for money",
      "World-class street food",
      "Beautiful islands and beaches",
      "Well-developed tourism infrastructure",
    ],
    cons: [
      "Intense heat and humidity",
      "Crowded major sights in peak season",
      "Bangkok traffic and air pollution",
    ],
    cities: [
      {
        name: "Bangkok",
        pois: [
          { name: "Grand Palace", description: "Ornate former royal residence whose glittering complex includes the temple of the Emerald Buddha." },
          { name: "Wat Pho", description: "Riverside temple famous for its 46-meter gilded Reclining Buddha and traditional Thai massage school." },
          { name: "Wat Arun", description: "Porcelain-encrusted Temple of Dawn rising above the Chao Phraya River, best viewed at sunset." },
          { name: "Chatuchak Weekend Market", description: "Sprawling weekend market with over 15,000 stalls selling food, clothes, antiques, and handicrafts." },
          { name: "Khao San Road", description: "Backpacker hub packed with street food stalls, bars, and budget guesthouses near the old city." },
        ],
      },
      {
        name: "Chiang Mai",
        pois: [
          { name: "Wat Phra That Doi Suthep", description: "Hilltop temple with a golden chedi and sweeping views over Chiang Mai from Doi Suthep mountain." },
          { name: "Old City Temples", description: "Moat-ringed historic quarter dotted with centuries-old temples such as Wat Phra Singh." },
          { name: "Wat Chedi Luang", description: "Partially ruined 14th-century temple that once housed the Emerald Buddha in the Old City." },
          { name: "Sunday Walking Street", description: "Weekly night market along Ratchadamnoen Road with northern Thai food, crafts, and live music." },
          { name: "Elephant Nature Park", description: "Well-known sanctuary north of the city where rescued elephants roam and visitors observe ethically." },
        ],
      },
      {
        name: "Phuket",
        pois: [
          { name: "Patong Beach", description: "The island's busiest beach, backed by resorts, restaurants, and the Bangla Road nightlife strip." },
          { name: "Big Buddha", description: "A 45-meter white marble Buddha statue on Nakkerd Hill with panoramic views over the island." },
          { name: "Old Phuket Town", description: "Colorful Sino-Portuguese shophouses, cafes, and weekend markets in the island's historic core." },
          { name: "Phang Nga Bay", description: "Dramatic limestone karsts and sea caves explored by boat, including the famous James Bond Island." },
          { name: "Karon Viewpoint", description: "Popular lookout offering a classic postcard panorama of three crescent beaches along the west coast." },
        ],
      },
      {
        name: "Krabi",
        pois: [
          { name: "Railay Beach", description: "Cliff-framed peninsula reachable only by boat, famous for rock climbing and turquoise water." },
          { name: "Phi Phi Islands", description: "Iconic island group with Maya Bay, snorkeling reefs, and dramatic limestone scenery on day trips." },
          { name: "Ao Nang", description: "Krabi's main resort strip, a launch point for longtail boat trips to nearby beaches and islands." },
          { name: "Tiger Cave Temple", description: "Forest temple where 1,260 steps climb to a summit Buddha statue with panoramic views." },
          { name: "Emerald Pool", description: "Natural spring-fed pool in Thung Teao forest with clear green water for swimming." },
        ],
      },
      {
        name: "Ko Samui",
        pois: [
          { name: "Chaweng Beach", description: "The island's longest and liveliest beach, lined with resorts, restaurants, and beach bars." },
          { name: "Wat Phra Yai", description: "Temple on a small islet housing the 12-meter golden Big Buddha statue." },
          { name: "Ang Thong Marine Park", description: "Archipelago of 42 jungle-clad islands with kayaking, viewpoints, and an emerald lagoon." },
          { name: "Fisherman's Village", description: "Bophut's boutique-lined old quarter, known for its Friday night walking street market." },
          { name: "Na Muang Waterfalls", description: "Two jungle waterfalls in the island's interior with natural pools for a cooling swim." },
        ],
      },
    ],
  },
  {
    name: "Portugal",
    iso2: "PT",
    tier: "major",
    region: "Europe",
    climate: ["mediterranean", "sunny", "temperate"],
    styles: ["food", "history", "beaches", "wine", "culture", "romance"],
    bestTime: {
      months: ["Apr", "May", "Jun", "Sep", "Oct"],
      summary: "Late spring and early fall bring warm sunshine, manageable crowds, and pleasant sea temperatures.",
    },
    seasonalNotes: {
      spring: "April to June is mild and flower-filled, ideal for city sightseeing before summer crowds and prices arrive.",
      summer: "July and August are hot and busy, especially in the Algarve, with peak prices and packed beaches.",
      fall: "September and October stay warm with swimmable seas, wine harvests in the Douro, and thinning crowds.",
      winter: "November to March is mild but rainy, with cheap rates, quiet cities, and surf-friendly Atlantic swells.",
    },
    vacationStyle: [
      "Historic city breaks with food and wine",
      "Atlantic beach and surf holidays",
      "Coastal road trips and island escapes",
    ],
    pros: [
      "Great value for Western Europe",
      "Reliably sunny climate",
      "Compact and easy to explore",
      "Outstanding seafood and wine",
    ],
    cons: [
      "Peak-summer crowds in Lisbon and the Algarve",
      "Steep hills and cobbles hard on legs",
      "Cool Atlantic water even in summer",
    ],
    cities: [
      {
        name: "Lisbon",
        pois: [
          { name: "Belém Tower", description: "Fortified 16th-century tower on the Tagus, a UNESCO icon of Portugal's Age of Discovery." },
          { name: "Jerónimos Monastery", description: "Manueline masterpiece monastery in Belém housing the tomb of explorer Vasco da Gama." },
          { name: "Alfama", description: "Lisbon's oldest district, a maze of steep lanes, fado houses, and miradouro viewpoints." },
          { name: "São Jorge Castle", description: "Hilltop Moorish castle with ramparts overlooking the city's rooftops and the Tagus River." },
          { name: "Tram 28", description: "Vintage yellow tram rattling through Graça, Alfama, and Baixa past many major sights." },
        ],
      },
      {
        name: "Porto",
        pois: [
          { name: "Ribeira", description: "UNESCO-listed riverside quarter of colorful houses, cafes, and views of port-wine boats." },
          { name: "Dom Luís I Bridge", description: "Double-deck iron bridge spanning the Douro, walkable on top for sweeping city views." },
          { name: "Livraria Lello", description: "Ornate neo-Gothic bookshop with a famous crimson staircase, among the world's most beautiful." },
          { name: "Vila Nova de Gaia Cellars", description: "Historic port-wine lodges across the river offering tastings and guided cellar tours." },
          { name: "Clérigos Tower", description: "Baroque bell tower whose 225 steps reward climbers with Porto's best panorama." },
        ],
      },
      {
        name: "Sintra",
        pois: [
          { name: "Pena Palace", description: "Whimsical red-and-yellow Romanticist palace crowning a forested hilltop above Sintra town." },
          { name: "Quinta da Regaleira", description: "Gothic estate with mystical gardens, grottoes, and the famous spiraling Initiation Well." },
          { name: "Moorish Castle", description: "Ruined 8th-century hilltop fortress whose ramparts offer views to the Atlantic coast." },
          { name: "Sintra National Palace", description: "Medieval royal palace in the town center, recognizable by its twin conical chimneys." },
          { name: "Monserrate Palace", description: "Exotic 19th-century villa surrounded by botanical gardens blending Gothic, Indian, and Moorish styles." },
        ],
      },
      {
        name: "Lagos",
        pois: [
          { name: "Ponta da Piedade", description: "Golden sea cliffs, arches, and grottoes explored by boat or from clifftop boardwalks." },
          { name: "Praia Dona Ana", description: "Postcard cove beach framed by ochre cliffs and clear turquoise Atlantic water." },
          { name: "Benagil Cave", description: "Sea cave with a natural skylight over a hidden beach, reached by boat or kayak." },
          { name: "Lagos Old Town", description: "Walled historic center of cobbled lanes, whitewashed churches, and lively seafood restaurants." },
          { name: "Meia Praia", description: "Four-kilometer sweep of sand east of town, popular for swimming and water sports." },
        ],
      },
      {
        name: "Funchal",
        pois: [
          { name: "Monte Palace Tropical Garden", description: "Hillside gardens above Funchal with exotic plants, koi ponds, and tile-art collections." },
          { name: "Funchal Cable Car", description: "Gondola ride from the old town up to Monte with views over the bay." },
          { name: "Monte Toboggan Ride", description: "Traditional wicker sledge run steered by straw-hatted drivers down Monte's steep streets." },
          { name: "Mercado dos Lavradores", description: "Art Deco market hall selling tropical fruit, flowers, and fresh Atlantic fish." },
          { name: "Cabo Girão Skywalk", description: "Glass-floored platform atop one of Europe's highest sea cliffs, 580 meters up." },
        ],
      },
    ],
  },
  {
    name: "China",
    iso2: "CN",
    tier: "major",
    region: "Asia",
    climate: ["temperate", "humid", "hot", "cold"],
    styles: ["history", "culture", "food", "nature", "museums", "adventure"],
    bestTime: {
      months: ["Apr", "May", "Sep", "Oct"],
      summary: "Spring and autumn offer mild, drier weather nationwide, avoiding summer heat and winter cold.",
    },
    seasonalNotes: {
      spring: "April and May bring mild temperatures and blossoms, though the early-May holiday week sees huge domestic crowds.",
      summer: "June to August is hot, humid, and rainy in much of the country, with heavy domestic tourism at major sights.",
      fall: "September and October are the best months, with clear skies and autumn color, but avoid Golden Week in early October.",
      winter: "November to March is cold and dry in the north, with far fewer tourists and Harbin's famous ice festival.",
    },
    vacationStyle: [
      "Imperial history and ancient-wonder touring",
      "Big-city food and culture immersion",
      "Dramatic karst and mountain scenery trips",
    ],
    pros: [
      "World-famous historic sights",
      "Exceptional and varied cuisine",
      "Fast high-speed rail network",
      "Low costs outside luxury hotels",
    ],
    cons: [
      "Language barrier outside big cities",
      "Visa and payment-app hurdles for visitors",
      "Crowds and pollution in major cities",
    ],
    cities: [
      {
        name: "Beijing",
        pois: [
          { name: "Great Wall at Mutianyu", description: "Restored, watchtower-studded stretch of the Great Wall winding through wooded hills near Beijing." },
          { name: "Forbidden City", description: "Vast Ming and Qing imperial palace complex of 980 buildings at the city's heart." },
          { name: "Temple of Heaven", description: "Circular Ming-era temple set in parkland where emperors once prayed for good harvests." },
          { name: "Summer Palace", description: "Lakeside imperial retreat of pavilions, bridges, and landscaped gardens around Kunming Lake." },
          { name: "Tiananmen Square", description: "One of the world's largest public squares, flanked by national monuments and museums." },
        ],
      },
      {
        name: "Shanghai",
        pois: [
          { name: "The Bund", description: "Riverside promenade of colonial-era buildings facing Pudong's futuristic skyline across the Huangpu." },
          { name: "Yu Garden", description: "Classical Ming-dynasty garden of pavilions, rockeries, and ponds beside a bustling bazaar." },
          { name: "Shanghai Tower", description: "China's tallest skyscraper, with a 118th-floor observation deck overlooking the city." },
          { name: "Nanjing Road", description: "One of the world's busiest shopping streets, running from People's Square toward the Bund." },
          { name: "Former French Concession", description: "Leafy district of plane trees, historic villas, boutiques, and cafes ideal for strolling." },
        ],
      },
      {
        name: "Xi'an",
        pois: [
          { name: "Terracotta Army", description: "Thousands of life-size clay warriors guarding the tomb of China's first emperor." },
          { name: "Xi'an City Wall", description: "Complete 14-kilometer Ming fortification circling the old city, cyclable along the top." },
          { name: "Muslim Quarter", description: "Lantern-lit lanes of street food stalls and markets behind the historic Drum Tower." },
          { name: "Big Wild Goose Pagoda", description: "Seventh-century Buddhist pagoda that once stored scriptures brought from India along the Silk Road." },
          { name: "Bell Tower", description: "Ming-era landmark at the old city's central crossroads, brightly illuminated at night." },
        ],
      },
      {
        name: "Guilin",
        pois: [
          { name: "Li River Cruise", description: "Scenic boat journey to Yangshuo past the karst peaks pictured on Chinese banknotes." },
          { name: "Reed Flute Cave", description: "Illuminated limestone cave filled with colorful stalactites, nicknamed the Palace of Natural Arts." },
          { name: "Elephant Trunk Hill", description: "Riverside karst formation resembling an elephant drinking, the traditional symbol of Guilin." },
          { name: "Longji Rice Terraces", description: "Dragon's Backbone terraces carved into hillsides near Longsheng, spectacular after spring planting." },
          { name: "Yangshuo", description: "Laid-back karst-country town with cycling, bamboo rafting, and famous countryside scenery." },
        ],
      },
      {
        name: "Chengdu",
        pois: [
          { name: "Chengdu Panda Base", description: "Research and breeding center where visitors watch giant pandas in semi-natural enclosures." },
          { name: "Leshan Giant Buddha", description: "The world's largest stone Buddha, 71 meters tall, carved into a river cliff." },
          { name: "Jinli Ancient Street", description: "Reconstructed old street of teahouses, snack stalls, and craft shops beside Wuhou Shrine." },
          { name: "People's Park", description: "Central park famous for its teahouses, ear-cleaning masters, and locals dancing and singing." },
          { name: "Wenshu Monastery", description: "Active Tang-dynasty Buddhist monastery with gardens, a vegetarian restaurant, and a teahouse." },
        ],
      },
    ],
  },
  {
    name: "Netherlands",
    iso2: "NL",
    tier: "major",
    region: "Europe",
    climate: ["temperate", "rainy"],
    styles: ["culture", "museums", "history", "nightlife", "food"],
    bestTime: {
      months: ["Apr", "May", "Jun", "Sep"],
      summary: "April and May bring tulip season, while early summer and September offer mild weather and lighter crowds.",
    },
    seasonalNotes: {
      spring: "Late March to mid-May is tulip time at Keukenhof, with King's Day festivities and fast-rising visitor numbers.",
      summer: "June to August is mild and lively with festivals and long evenings, but Amsterdam lodging is at its priciest.",
      fall: "September and October turn cool and showery, with museum queues shrinking and hotel rates easing.",
      winter: "November to February is damp and gray, offset by cozy cafes, light festivals, and the cheapest rates.",
    },
    vacationStyle: [
      "Canal-side city breaks and museum touring",
      "Cycling trips through flat, compact countryside",
      "Spring flower and historic village excursions",
    ],
    pros: [
      "World-class art museums",
      "Easy cycling and public transport",
      "Nearly everyone speaks English",
      "Compact country for day trips",
    ],
    cons: [
      "Unpredictable rain year-round",
      "High accommodation costs in Amsterdam",
      "Major sights require advance booking",
    ],
    cities: [
      {
        name: "Amsterdam",
        pois: [
          { name: "Rijksmuseum", description: "National museum of Dutch art and history, home to Rembrandt's monumental Night Watch." },
          { name: "Van Gogh Museum", description: "The world's largest collection of Van Gogh paintings, letters, and drawings." },
          { name: "Anne Frank House", description: "Canal-side house museum preserving the secret annex where Anne Frank wrote her diary." },
          { name: "Canal Ring", description: "UNESCO-listed ring of 17th-century canals best explored by boat or on foot." },
          { name: "Vondelpark", description: "The city's most popular park, filled with cyclists, picnickers, and open-air performances." },
        ],
      },
      {
        name: "Rotterdam",
        pois: [
          { name: "Markthal", description: "Horseshoe-shaped market hall with a giant ceiling artwork and dozens of food stalls." },
          { name: "Cube Houses", description: "Piet Blom's tilted yellow cube homes, an icon of Rotterdam's experimental architecture." },
          { name: "Euromast", description: "185-meter observation tower with panoramic views over Europe's largest port city." },
          { name: "Erasmus Bridge", description: "Elegant swan-shaped suspension bridge spanning the Maas, symbol of the modern city." },
          { name: "Depot Boijmans Van Beuningen", description: "Mirror-clad bowl-shaped art depot where visitors browse an entire museum collection in storage." },
        ],
      },
      {
        name: "The Hague",
        pois: [
          { name: "Mauritshuis", description: "Intimate royal picture gallery starring Vermeer's Girl with a Pearl Earring." },
          { name: "Binnenhof", description: "Historic parliament complex around a courtyard beside the Hofvijver pond, seat of Dutch politics." },
          { name: "Peace Palace", description: "Grand seat of the International Court of Justice, with a visitor center and gardens." },
          { name: "Scheveningen Beach", description: "Long North Sea beach resort with a pier, promenade, and seafood pavilions." },
          { name: "Madurodam", description: "Miniature park recreating Dutch landmarks, canals, and windmills at 1:25 scale." },
        ],
      },
      {
        name: "Utrecht",
        pois: [
          { name: "Dom Tower", description: "The Netherlands' tallest church tower, climbable for views over the medieval city." },
          { name: "Oudegracht", description: "Central canal with unique wharf cellars converted into waterside cafes and restaurants." },
          { name: "Railway Museum", description: "Grand former station housing royal carriages, historic locomotives, and family-friendly rides." },
          { name: "Rietveld Schröder House", description: "UNESCO-listed 1924 house, the purest built expression of De Stijl design." },
          { name: "Centraal Museum", description: "City museum spanning old masters, modern design, and the world's largest Rietveld collection." },
        ],
      },
      {
        name: "Delft",
        pois: [
          { name: "Markt Square", description: "Broad market square framed by the Renaissance town hall and the towering Nieuwe Kerk." },
          { name: "Nieuwe Kerk", description: "Gothic church holding the tombs of the Dutch royal family, including William of Orange." },
          { name: "Royal Delft", description: "Working 17th-century factory where visitors watch the famous blue-and-white pottery being painted." },
          { name: "Oude Kerk", description: "Medieval church with a distinctly leaning tower, the burial place of painter Johannes Vermeer." },
          { name: "Vermeer Centrum", description: "Exhibition center tracing Vermeer's life, techniques, and Delft settings through reproductions." },
        ],
      },
    ],
  },
  {
    name: "United Arab Emirates",
    iso2: "AE",
    tier: "major",
    region: "Middle East",
    climate: ["desert", "hot", "dry", "sunny"],
    styles: ["luxury", "shopping", "beaches", "family", "adventure"],
    bestTime: {
      months: ["Nov", "Dec", "Jan", "Feb", "Mar"],
      summary: "November to March brings warm sunny days and comfortable evenings, ideal for beaches and outdoor sightseeing.",
    },
    seasonalNotes: {
      spring: "March and April warm quickly into the mid-30s, with Ramadan timing affecting dining hours in some years.",
      summer: "June to September is extremely hot and humid, life moves indoors, and hotel prices drop sharply.",
      fall: "October and November cool to pleasant levels as beach clubs and outdoor attractions reopen for the season.",
      winter: "December to February is peak season, with perfect weather, big shopping festivals, and the highest hotel rates.",
    },
    vacationStyle: [
      "Luxury resort and beach holidays",
      "Mega-mall shopping and modern architecture",
      "Desert safaris and theme-park family fun",
    ],
    pros: [
      "Reliable winter sun",
      "World-class hotels and dining",
      "Very safe and clean",
      "Excellent air connections worldwide",
    ],
    cons: [
      "Unbearable summer heat",
      "Expensive alcohol and fine dining",
      "Limited historic sights compared to neighbors",
    ],
    cities: [
      {
        name: "Dubai",
        pois: [
          { name: "Burj Khalifa", description: "The world's tallest building, with observation decks on the 124th and 148th floors." },
          { name: "The Dubai Mall", description: "One of the world's largest malls, with an aquarium, ice rink, and the Dubai Fountain." },
          { name: "Palm Jumeirah", description: "Palm-shaped artificial island lined with beach resorts, including the landmark Atlantis hotel." },
          { name: "Dubai Marina", description: "Skyscraper-ringed harbor district with a waterfront promenade, beaches, and dhow dinner cruises." },
          { name: "Al Fahidi and the Souks", description: "Old Dubai's wind-tower quarter and creekside gold and spice markets, reached by abra boat." },
        ],
      },
      {
        name: "Abu Dhabi",
        pois: [
          { name: "Sheikh Zayed Grand Mosque", description: "Vast white-marble mosque with 82 domes, gold-leaf columns, and the world's largest carpets." },
          { name: "Louvre Abu Dhabi", description: "Jean Nouvel's dome-covered museum on Saadiyat Island, spanning world art across civilizations." },
          { name: "Yas Island", description: "Entertainment hub home to Ferrari World, Yas Waterworld, Warner Bros. World, and an F1 circuit." },
          { name: "Emirates Palace", description: "Opulent landmark hotel famous for its gilded interiors and gold-flecked cappuccinos." },
          { name: "Corniche", description: "Eight-kilometer waterfront promenade with groomed beaches, parks, cycle paths, and skyline views." },
        ],
      },
      {
        name: "Sharjah",
        pois: [
          { name: "Museum of Islamic Civilization", description: "Golden-domed museum showcasing Islamic art, science, and artifacts beside Sharjah's corniche." },
          { name: "Al Noor Mosque", description: "Ottoman-style mosque on Khalid Lagoon, one of few in the UAE open to non-Muslim visitors." },
          { name: "Blue Souk", description: "Twin-winged Central Market with hundreds of shops selling gold, carpets, and antiques." },
          { name: "Al Qasba", description: "Canal-side leisure district with the Eye of the Emirates wheel, cafes, and boat rides." },
          { name: "Sharjah Art Museum", description: "The Gulf's largest art museum, strong on Orientalist paintings and Arab modernism." },
        ],
      },
      {
        name: "Al Ain",
        pois: [
          { name: "Al Ain Oasis", description: "UNESCO-listed date-palm oasis crossed by shaded paths and ancient falaj irrigation channels." },
          { name: "Jebel Hafeet", description: "1,240-meter mountain with a winding drive to summit viewpoints over the desert." },
          { name: "Al Jahili Fort", description: "Restored 19th-century mud-brick fort with exhibitions on the explorer Wilfred Thesiger." },
          { name: "Al Ain Zoo", description: "Large family-friendly zoo and safari park at the foot of Jebel Hafeet." },
          { name: "Camel Market", description: "The UAE's last traditional camel souk, at its liveliest in the early morning." },
        ],
      },
      {
        name: "Ras Al Khaimah",
        pois: [
          { name: "Jebel Jais", description: "The UAE's highest peak, featuring the world's longest zipline and a scenic mountain road." },
          { name: "Al Marjan Island", description: "Man-made island cluster of beach resorts, calm lagoons, and waterfront promenades." },
          { name: "Dhayah Fort", description: "Hilltop 16th-century mud-brick fort overlooking palm groves and the Gulf coastline." },
          { name: "Jazirat Al Hamra", description: "Abandoned pearling village preserving coral-stone houses from pre-oil Gulf life." },
          { name: "National Museum of Ras Al Khaimah", description: "Former ruler's fort displaying archaeology, pearling history, and traditional weaponry." },
        ],
      },
    ],
  },
  {
    name: "Canada",
    iso2: "CA",
    tier: "major",
    region: "North America",
    climate: ["cold", "snowy", "temperate"],
    styles: ["nature", "adventure", "road trip", "skiing", "food", "culture"],
    bestTime: {
      months: ["Jun", "Jul", "Aug", "Sep"],
      summary: "June to September offers warm weather for the Rockies, coastal cities, and national parks.",
    },
    seasonalNotes: {
      spring: "March to May is muddy and unpredictable, with late ski season in the mountains and low prices in cities.",
      summer: "June to August is warm and busy, with the Rockies at their most crowded and lodging booked far ahead.",
      fall: "September and October bring spectacular foliage in the east, larch season in the Rockies, and thinner crowds.",
      winter: "November to March is long and cold, with world-class skiing at Whistler and Banff and winter carnivals in Quebec.",
    },
    vacationStyle: [
      "Mountain and national-park road trips",
      "Multicultural big-city breaks",
      "Winter skiing and snow holidays",
    ],
    pros: [
      "Spectacular wilderness and national parks",
      "Safe, clean, welcoming cities",
      "Distinct English and French cultures",
      "Excellent winter sports",
    ],
    cons: [
      "Vast distances between destinations",
      "Harsh, long winters",
      "High costs in peak summer",
    ],
    cities: [
      {
        name: "Toronto",
        pois: [
          { name: "CN Tower", description: "553-meter tower with glass-floor lookouts and the EdgeWalk high above downtown Toronto." },
          { name: "Royal Ontario Museum", description: "Canada's largest museum, covering natural history and world cultures behind a crystalline facade." },
          { name: "Distillery District", description: "Pedestrian-only Victorian industrial quarter of galleries, boutiques, and a popular Christmas market." },
          { name: "Toronto Islands", description: "Car-free islands a short ferry ride away, with beaches and skyline views." },
          { name: "Niagara Falls", description: "Thundering trio of waterfalls 90 minutes away, viewed by boat or from observation decks." },
        ],
      },
      {
        name: "Vancouver",
        pois: [
          { name: "Stanley Park", description: "400-hectare rainforest park ringed by the seawall, with totem poles and beaches." },
          { name: "Granville Island", description: "Peninsula market district with a public food market, artisan studios, and waterfront theaters." },
          { name: "Capilano Suspension Bridge", description: "137-meter footbridge swaying above a river canyon, with treetop and cliffside walkways." },
          { name: "Grouse Mountain", description: "Skyride gondola to alpine views, a grizzly refuge, and winter skiing above the city." },
          { name: "Gastown", description: "Cobblestoned original townsite known for its steam clock, boutiques, and lively restaurants." },
        ],
      },
      {
        name: "Montreal",
        pois: [
          { name: "Old Montreal", description: "Cobblestoned 17th-century quarter along the St. Lawrence, packed with galleries and cafes." },
          { name: "Notre-Dame Basilica", description: "Gothic Revival landmark with a deep-blue starred ceiling and the AURA light show." },
          { name: "Mount Royal Park", description: "Olmsted-designed hilltop park whose Kondiaronk lookout surveys the entire downtown skyline." },
          { name: "Jean-Talon Market", description: "One of North America's largest open-air markets, at the heart of Little Italy." },
          { name: "Plateau Mont-Royal", description: "Colorful neighborhood of spiral staircases, murals, bagel bakeries, and lively terraces." },
        ],
      },
      {
        name: "Banff",
        pois: [
          { name: "Lake Louise", description: "Turquoise glacial lake beneath Victoria Glacier, famed for canoeing and lakeside hikes." },
          { name: "Moraine Lake", description: "Vividly blue lake in the Valley of the Ten Peaks, an iconic Rockies view." },
          { name: "Banff Gondola", description: "Ride up Sulphur Mountain to a summit boardwalk with 360-degree Rockies panoramas." },
          { name: "Johnston Canyon", description: "Catwalk trail hugging canyon walls to waterfalls that freeze spectacularly in winter." },
          { name: "Banff Upper Hot Springs", description: "Historic outdoor thermal pools where bathers soak with Rockies views, open year-round." },
        ],
      },
      {
        name: "Quebec City",
        pois: [
          { name: "Old Québec", description: "Walled UNESCO district of 17th-century streets, the cradle of French North America." },
          { name: "Château Frontenac", description: "Castle-like grand hotel dominating the skyline above the Dufferin Terrace boardwalk." },
          { name: "Montmorency Falls", description: "83-meter waterfall higher than Niagara, crossed by a suspension footbridge and cable car." },
          { name: "Plains of Abraham", description: "Historic 1759 battlefield, now a vast riverside park hosting festivals and winter sports." },
          { name: "Petit-Champlain", description: "One of North America's oldest shopping streets, lined with artisan boutiques and bistros." },
        ],
      },
    ],
  },
  {
    name: "Australia",
    iso2: "AU",
    tier: "major",
    region: "Oceania",
    climate: ["sunny", "hot", "dry", "temperate"],
    styles: ["beaches", "nature", "adventure", "road trip", "food"],
    bestTime: {
      months: ["Sep", "Oct", "Nov", "Mar", "Apr"],
      summary: "Australian spring and autumn bring warm, comfortable weather to the southern cities and mild conditions nationwide.",
    },
    seasonalNotes: {
      spring: "March to May is Australian autumn, with warm seas, settled weather, and fewer crowds in Sydney and Melbourne.",
      summer: "June to August is Australian winter, mild and dry in the tropical north and Outback, cool with skiing in the southern Alps.",
      fall: "September to November is Australian spring, with wildflowers in the west, whale migrations, and shoulder-season prices.",
      winter: "December to February is Australian summer, with hot beach weather, peak school-holiday crowds, high prices, and stinger season up north.",
    },
    vacationStyle: [
      "Beach and reef holidays",
      "Epic coastal and Outback road trips",
      "Cosmopolitan food and harbor city breaks",
    ],
    pros: [
      "Iconic beaches and reef diving",
      "Unique wildlife found nowhere else",
      "Safe and easy travel logistics",
      "Great food and coffee culture",
    ],
    cons: [
      "Long, expensive flights to get there",
      "Huge distances between highlights",
      "High daily costs",
    ],
    cities: [
      {
        name: "Sydney",
        pois: [
          { name: "Sydney Opera House", description: "Sail-roofed performing arts icon on Bennelong Point, offering tours, concerts, and harborside bars." },
          { name: "Sydney Harbour Bridge", description: "Steel arch bridge walkable or climbable for sweeping views over the harbor." },
          { name: "Bondi Beach", description: "Australia's most famous surf beach, start of the scenic Bondi to Coogee coastal walk." },
          { name: "The Rocks", description: "Historic sandstone district beneath the bridge, with weekend markets, pubs, and museums." },
          { name: "Taronga Zoo", description: "Harborside zoo reached by ferry, pairing native wildlife with skyline backdrops." },
        ],
      },
      {
        name: "Melbourne",
        pois: [
          { name: "Federation Square", description: "Central cultural plaza housing galleries, screens, and events opposite Flinders Street Station." },
          { name: "Queen Victoria Market", description: "Historic open-air market trading fresh produce, souvenirs, and night-market street food." },
          { name: "Hosier Lane", description: "Ever-changing laneway of street art at the heart of Melbourne's famous laneway culture." },
          { name: "Royal Botanic Gardens", description: "38 hectares of landscaped gardens beside the Yarra, among the world's finest." },
          { name: "Great Ocean Road", description: "Spectacular coastal drive southwest of the city to the Twelve Apostles sea stacks." },
        ],
      },
      {
        name: "Cairns",
        pois: [
          { name: "Great Barrier Reef", description: "The world's largest coral reef system, explored on snorkeling and dive trips from Cairns." },
          { name: "Daintree Rainforest", description: "The world's oldest tropical rainforest, with river cruises and canopy walks north of town." },
          { name: "Kuranda Scenic Railway", description: "Historic train climbing through rainforest gorges to the mountain village of Kuranda." },
          { name: "Cairns Esplanade Lagoon", description: "Free saltwater swimming lagoon on the waterfront, the social hub of the city." },
          { name: "Fitzroy Island", description: "Rainforest-covered island 45 minutes offshore, with coral beaches and easy snorkeling." },
        ],
      },
      {
        name: "Gold Coast",
        pois: [
          { name: "Surfers Paradise", description: "High-rise beach strip famous for surf, nightlife, and its patrolled golden sands." },
          { name: "Warner Bros. Movie World", description: "Movie-themed park with roller coasters and character shows, flagship of the coast's theme parks." },
          { name: "SkyPoint Observation Deck", description: "Level-77 deck atop the Q1 tower with coastline views from Brisbane to Byron." },
          { name: "Burleigh Heads", description: "Laid-back surf point and national park headland with an oceanfront walking trail." },
          { name: "Springbrook National Park", description: "Hinterland park of waterfalls, ancient forest, and a famous glow-worm cave." },
        ],
      },
      {
        name: "Perth",
        pois: [
          { name: "Kings Park", description: "One of the world's largest inner-city parks, with botanic gardens and skyline lookouts." },
          { name: "Rottnest Island", description: "Car-free island of beaches and bays, home of the selfie-friendly quokka." },
          { name: "Fremantle", description: "Port city of Victorian streetscapes, weekend markets, breweries, and a convict-built prison." },
          { name: "Cottesloe Beach", description: "Perth's classic swimming beach, famous for Indian Ocean sunsets and beachside cafes." },
          { name: "Swan Valley", description: "The state's oldest wine region, 25 minutes from town, with cellar doors and breweries." },
        ],
      },
    ],
  },
  {
    name: "Austria",
    iso2: "AT",
    tier: "major",
    region: "Europe",
    climate: ["alpine", "temperate", "snowy", "cold"],
    styles: ["culture", "history", "skiing", "museums", "nature", "romance"],
    bestTime: {
      months: ["May", "Jun", "Sep", "Dec"],
      summary: "Late spring and September suit cities and hiking, while December pairs Christmas markets with early skiing.",
    },
    seasonalNotes: {
      spring: "April to June warms gradually, with alpine meadows blooming and city sights pleasantly uncrowded before summer.",
      summer: "July and August bring warm hiking weather, the Salzburg Festival, and peak crowds in Hallstatt and Salzburg.",
      fall: "September and October offer crisp air, golden larches, wine taverns in Vienna, and lower hotel rates.",
      winter: "December to March delivers snow-sure skiing, famous Christmas markets, and Vienna's glittering ball season.",
    },
    vacationStyle: [
      "Imperial city and classical-music culture",
      "Alpine hiking and lake summers",
      "Ski resort winters and Christmas markets",
    ],
    pros: [
      "Elegant, walkable historic cities",
      "Superb classical music scene",
      "Reliable alpine skiing",
      "Efficient trains and infrastructure",
    ],
    cons: [
      "High prices in ski season",
      "Overtourism in Hallstatt and Salzburg",
      "Gray, cold city winters outside the markets",
    ],
    cities: [
      {
        name: "Vienna",
        pois: [
          { name: "Schönbrunn Palace", description: "Habsburg summer palace of 1,441 rooms with formal gardens and the hilltop Gloriette." },
          { name: "Hofburg", description: "Sprawling imperial winter palace housing the Spanish Riding School and the Sisi Museum." },
          { name: "St. Stephen's Cathedral", description: "Gothic cathedral with a patterned tile roof and climbable south tower at the city's heart." },
          { name: "Belvedere Palace", description: "Baroque twin palaces whose Upper Belvedere gallery displays Klimt's The Kiss." },
          { name: "Kunsthistorisches Museum", description: "Grand art history museum with Bruegel, Vermeer, and the Habsburg imperial collections." },
        ],
      },
      {
        name: "Salzburg",
        pois: [
          { name: "Hohensalzburg Fortress", description: "One of Europe's largest medieval castles, reached by funicular above the baroque old town." },
          { name: "Mirabell Palace", description: "Baroque palace and gardens featured in The Sound of Music, with fortress views." },
          { name: "Mozart's Birthplace", description: "Yellow townhouse on Getreidegasse where Mozart was born in 1756, now a museum." },
          { name: "Getreidegasse", description: "Narrow shopping lane famous for its wrought-iron guild signs and hidden historic passageways." },
          { name: "Salzburg Cathedral", description: "Monumental baroque cathedral where Mozart was baptized, at the center of the old town." },
        ],
      },
      {
        name: "Innsbruck",
        pois: [
          { name: "Golden Roof", description: "Late-Gothic landmark balcony of 2,657 gilded copper tiles in the old town." },
          { name: "Nordkette Cable Car", description: "Funicular and cable cars rising from the city center to 2,300-meter alpine ridges." },
          { name: "Bergisel Ski Jump", description: "Zaha Hadid-designed ski jump tower with a panoramic cafe high above the city." },
          { name: "Ambras Castle", description: "Renaissance castle of Archduke Ferdinand II, housing armor and cabinet-of-curiosities collections." },
          { name: "Imperial Palace", description: "Habsburg residence with state rooms rebuilt in Rococo style under Empress Maria Theresa." },
        ],
      },
      {
        name: "Hallstatt",
        pois: [
          { name: "Hallstatt Market Square", description: "Postcard lakeside square of pastel houses set beneath steep forested Alpine slopes." },
          { name: "Hallstatt Skywalk", description: "Viewing platform 360 meters above the village rooftops, reached by a funicular." },
          { name: "Salzwelten Salt Mine", description: "The world's oldest salt mine, toured via miners' slides deep inside the mountain." },
          { name: "Lake Hallstatt", description: "Glassy fjord-like lake, best seen on an electric boat cruise from the village." },
          { name: "Dachstein Ice Cave", description: "Glittering ice formations inside the Dachstein massif, combined with the Five Fingers viewpoint." },
        ],
      },
      {
        name: "Graz",
        pois: [
          { name: "Schlossberg", description: "Castle hill topped by the Uhrturm clock tower, climbed by stairs, lift, or funicular." },
          { name: "Kunsthaus Graz", description: "Biomorphic blue contemporary art museum nicknamed the friendly alien, on the Mur riverbank." },
          { name: "Eggenberg Palace", description: "UNESCO-listed baroque palace with planetary-themed state rooms and peacock-filled gardens." },
          { name: "Murinsel", description: "Floating steel island cafe and amphitheater set in the middle of the Mur River." },
          { name: "Graz Old Town", description: "One of Central Europe's best-preserved historic centers, with red roofs and Renaissance courtyards." },
        ],
      },
    ],
  },
  {
    name: "Switzerland",
    iso2: "CH",
    tier: "major",
    region: "Europe",
    climate: ["alpine", "snowy", "temperate", "cold"],
    styles: ["nature", "adventure", "skiing", "luxury", "romance"],
    bestTime: {
      months: ["Jun", "Jul", "Aug", "Sep"],
      summary: "June to September opens the high hiking trails, mountain railways, and lake cruises in reliably mild weather.",
    },
    seasonalNotes: {
      spring: "April and May are shoulder months, when valleys bloom but high trails stay snowbound and some lifts close.",
      summer: "June to August is peak hiking season, with long days, busy trains to Jungfraujoch, and premium prices.",
      fall: "September and October bring clear light, golden larches, and quieter trails before resorts pause pre-ski season.",
      winter: "December to March is world-class ski season in Zermatt and the Bernese Oberland, festive but expensive.",
    },
    vacationStyle: [
      "Alpine hiking and scenic rail journeys",
      "Winter skiing in storied resorts",
      "Lakeside city and spa relaxation",
    ],
    pros: [
      "Jaw-dropping mountain scenery",
      "Punctual, scenic rail network",
      "Clean, safe, and organized",
      "Year-round outdoor activities",
    ],
    cons: [
      "Among the world's highest prices",
      "Weather can hide the peaks for days",
      "Crowded honeypot sights in summer",
    ],
    cities: [
      {
        name: "Zurich",
        pois: [
          { name: "Zurich Old Town", description: "Medieval lanes on both banks of the Limmat, with guild houses and the Grossmünster." },
          { name: "Lake Zurich", description: "Clean alpine-fed lake with lakeside promenades, public swimming baths, and boat cruises." },
          { name: "Bahnhofstrasse", description: "One of the world's most exclusive shopping streets, running from the station to the lake." },
          { name: "Kunsthaus Zürich", description: "Switzerland's largest art museum, strong on Giacometti, Munch, and the Impressionists." },
          { name: "Uetliberg", description: "Zurich's home mountain, a short train ride up for city and Alps panoramas." },
        ],
      },
      {
        name: "Lucerne",
        pois: [
          { name: "Chapel Bridge", description: "Fourteenth-century covered wooden bridge with painted gables and the stone Water Tower." },
          { name: "Lion Monument", description: "Dying lion carved into rock, commemorating Swiss Guards who died in the French Revolution." },
          { name: "Mount Pilatus", description: "Craggy summit above the lake, reached by the world's steepest cogwheel railway." },
          { name: "Lake Lucerne", description: "Fjord-like lake plied by paddle steamers linking mountain villages and viewpoints." },
          { name: "Old Town Lucerne", description: "Car-free medieval quarter of frescoed facades and squares beside the Reuss River." },
        ],
      },
      {
        name: "Interlaken",
        pois: [
          { name: "Jungfraujoch", description: "Europe's highest railway station at 3,454 meters, with glacier views from the Sphinx terrace." },
          { name: "Harder Kulm", description: "Funicular viewpoint above town facing the Eiger, Mönch, and Jungfrau peaks." },
          { name: "Lauterbrunnen Valley", description: "Cliff-walled valley of 72 waterfalls, including the free-falling Staubbach Falls." },
          { name: "Lake Brienz", description: "Strikingly turquoise lake east of town, with boat cruises and the Giessbach Falls." },
          { name: "Lake Thun", description: "Castle-ringed lake west of town, ideal for cruises and pretty lakeside villages." },
        ],
      },
      {
        name: "Zermatt",
        pois: [
          { name: "Matterhorn", description: "The Alps' most photographed peak, towering 4,478 meters over the car-free village." },
          { name: "Gornergrat Railway", description: "Cogwheel train climbing to 3,089 meters for sweeping glacier and Matterhorn panoramas." },
          { name: "Matterhorn Glacier Paradise", description: "Europe's highest cable-car station at 3,883 meters, with year-round snow and an ice palace." },
          { name: "Five Lakes Walk", description: "Hiking trail past mountain lakes that mirror the Matterhorn on calm days." },
          { name: "Matterhorn Museum", description: "Underground village museum telling the dramatic story of the 1865 first ascent." },
        ],
      },
      {
        name: "Geneva",
        pois: [
          { name: "Jet d'Eau", description: "Landmark fountain firing water 140 meters above Lake Geneva since 1891." },
          { name: "Geneva Old Town", description: "Hilltop maze of squares and antique shops around St. Pierre Cathedral, climbable for views." },
          { name: "Palais des Nations", description: "European headquarters of the United Nations, offering guided tours in Ariana Park." },
          { name: "Lake Geneva Promenade", description: "Flower-lined waterfront walks with paddle steamers and the famous Flower Clock." },
          { name: "CERN", description: "The world's largest particle physics laboratory, with free Science Gateway exhibitions." },
        ],
      },
    ],
  },
  {
    name: "Singapore",
    iso2: "SG",
    tier: "major",
    region: "Asia",
    climate: ["tropical", "hot", "humid", "rainy"],
    styles: ["food", "shopping", "family", "luxury", "culture", "nightlife"],
    bestTime: {
      months: ["Feb", "Mar", "Apr", "Jul"],
      summary: "February to April tends to be driest, though Singapore's hot, humid climate is consistent year-round.",
    },
    seasonalNotes: {
      spring: "March to May is hot and slightly drier, with manageable crowds outside regional school holidays.",
      summer: "June to August brings the Great Singapore Sale and occasional haze, with brief showers rather than washouts.",
      fall: "September to November grows steadily wetter toward the year-end monsoon, with the Formula 1 night race in early fall.",
      winter: "December and January are the wettest months, with frequent downpours, festive light-ups, and peak holiday pricing.",
    },
    vacationStyle: [
      "Food-centric city breaks",
      "Family theme-park and attraction holidays",
      "Luxury shopping and stopover stays",
    ],
    pros: [
      "Phenomenal and affordable hawker food",
      "Extremely safe and clean",
      "Seamless public transport",
      "English widely spoken",
    ],
    cons: [
      "Constant heat and humidity",
      "Expensive hotels and alcohol",
      "Compact size limits longer stays",
    ],
    cities: [
      {
        name: "Marina Bay",
        pois: [
          { name: "Gardens by the Bay", description: "Futuristic gardens with the Supertree Grove, Cloud Forest, and Flower Dome conservatories." },
          { name: "Marina Bay Sands SkyPark", description: "Boat-shaped rooftop deck 57 floors up, with views across the bay and skyline." },
          { name: "Merlion Park", description: "Waterfront home of the half-lion, half-fish statue that symbolizes Singapore." },
          { name: "ArtScience Museum", description: "Lotus-shaped museum hosting immersive exhibitions, including the permanent Future World show." },
          { name: "Singapore Flyer", description: "165-meter observation wheel with views to Indonesia and Malaysia on clear days." },
        ],
      },
      {
        name: "Sentosa",
        pois: [
          { name: "Universal Studios Singapore", description: "Southeast Asia's first Universal park, with themed rides and shows at Resorts World." },
          { name: "S.E.A. Aquarium", description: "One of the world's largest aquariums, centered on a vast open-ocean viewing panel." },
          { name: "Siloso Beach", description: "Lively man-made beach with bars, volleyball, and watersports on Sentosa's west coast." },
          { name: "Skyline Luge", description: "Gravity luge carts racing down jungle trails, paired with a chairlift ride back up." },
          { name: "Fort Siloso", description: "Preserved coastal fort telling the story of Singapore's World War II defense." },
        ],
      },
      {
        name: "Chinatown",
        pois: [
          { name: "Buddha Tooth Relic Temple", description: "Tang-style temple housing a sacred Buddha relic and a rooftop orchid garden." },
          { name: "Sri Mariamman Temple", description: "Singapore's oldest Hindu temple, crowned by a colorful figure-covered gopuram tower." },
          { name: "Maxwell Food Centre", description: "Famous hawker center, home of Tian Tian chicken rice and dozens of local stalls." },
          { name: "Pagoda Street", description: "Restored shophouse street of souvenir stalls, leading to the Chinatown Heritage Centre." },
          { name: "Thian Hock Keng Temple", description: "Singapore's oldest Hokkien temple, built in 1839 without using a single nail." },
        ],
      },
      {
        name: "Little India",
        pois: [
          { name: "Sri Veeramakaliamman Temple", description: "Ornate temple to the goddess Kali, the spiritual heart of Serangoon Road." },
          { name: "Tekka Centre", description: "Bustling wet market and hawker center known for its biryani and dosai." },
          { name: "Mustafa Centre", description: "24-hour department store selling everything from gold to electronics across sprawling floors." },
          { name: "House of Tan Teng Niah", description: "Rainbow-painted 1900 Chinese villa, the district's most photographed building." },
          { name: "Little India Arcade", description: "Restored row of shophouses selling flower garlands, spices, saris, and henna art." },
        ],
      },
      {
        name: "Orchard Road",
        pois: [
          { name: "ION Orchard", description: "Flagship luxury mall with a free 55th-floor observation deck called ION Sky." },
          { name: "Ngee Ann City", description: "Landmark granite mall housing Takashimaya and one of Asia's largest bookstores." },
          { name: "Emerald Hill", description: "Lane of ornate Peranakan terrace houses and quiet bars just off the shopping strip." },
          { name: "Singapore Botanic Gardens", description: "UNESCO-listed gardens at Orchard's western end, home to the National Orchid Garden." },
          { name: "The Istana", description: "The president's official residence, its grounds open to visitors on select public holidays." },
        ],
      },
    ],
  },
]
