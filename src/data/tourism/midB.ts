import type { TourismCountry } from '../../types'

export const tourismMidB: TourismCountry[] = [
  {
    name: "Brazil",
    iso2: "BR",
    tier: "mid",
    region: "South America",
    climate: ["tropical", "hot", "humid"],
    styles: ["beaches", "nightlife", "nature", "food", "adventure", "culture"],
    bestTime: {
      months: ["Dec", "Jan", "Feb", "Mar"],
      summary: "December to March brings peak beach weather and Carnival, though April to June offers fewer crowds and lower prices.",
    },
    seasonalNotes: {
      spring: "March to May is Brazilian autumn, with warm seas, thinning crowds after Carnival, and better hotel rates.",
      summer: "June to August is the local dry winter, mild in Rio and ideal for visiting the Amazon and Iguacu.",
      fall: "September to November is Brazilian spring, a pleasant shoulder season with rising temperatures and moderate prices.",
      winter: "December to February is southern summer, hot and festive with Carnival crowds and the year's highest prices.",
    },
    vacationStyle: [
      "Beach and city breaks along a lively tropical coastline",
      "Nature trips to the Amazon, Pantanal, and Iguacu Falls",
      "Festival and nightlife travel centered on Carnival culture",
    ],
    pros: [
      "World-famous beaches and coastline",
      "Spectacular natural wonders",
      "Vibrant music and festival culture",
      "Good value once on the ground",
    ],
    cons: [
      "Petty crime requires caution in big cities",
      "Long distances between major sights",
      "Portuguese-only common outside tourist areas",
    ],
    cities: [
      {
        name: "Rio de Janeiro",
        pois: [
          { name: "Christ the Redeemer", description: "Iconic art deco statue atop Corcovado mountain with sweeping views over the city and bay." },
          { name: "Sugarloaf Mountain", description: "Granite peak reached by cable car, offering classic panoramas of beaches and Guanabara Bay." },
          { name: "Copacabana Beach", description: "Famous crescent of sand backed by a lively promenade, kiosks, and beach sports." },
        ],
      },
      {
        name: "São Paulo",
        pois: [
          { name: "Avenida Paulista", description: "The city's signature avenue, lined with museums, shops, and open to pedestrians on Sundays." },
          { name: "Ibirapuera Park", description: "Vast urban park with lakes, museums, and modernist pavilions designed by Oscar Niemeyer." },
          { name: "São Paulo Museum of Art", description: "Landmark suspended museum on Paulista holding Latin America's premier European art collection." },
        ],
      },
      {
        name: "Foz do Iguaçu",
        pois: [
          { name: "Iguaçu Falls", description: "One of the world's largest waterfall systems, with panoramic walkways on the Brazilian side." },
          { name: "Parque das Aves", description: "Rainforest bird park with walk-through aviaries of toucans, macaws, and flamingos." },
          { name: "Itaipu Dam", description: "Massive hydroelectric dam on the Paraná River offering guided tours of its engineering." },
        ],
      },
    ],
  },
  {
    name: "Argentina",
    iso2: "AR",
    tier: "mid",
    region: "South America",
    climate: ["temperate", "dry", "sunny"],
    styles: ["food", "wine", "culture", "nature", "adventure", "nightlife"],
    bestTime: {
      months: ["Oct", "Nov", "Mar", "Apr"],
      summary: "Southern spring and fall offer mild weather in Buenos Aires and good conditions across wine country and Patagonia's shoulder season.",
    },
    seasonalNotes: {
      spring: "March to May is Argentine autumn, with grape harvest festivals in Mendoza and golden foliage in Patagonia.",
      summer: "June to August is local winter, cold in the south but prime time for skiing in Bariloche.",
      fall: "September to November is Argentine spring, with jacarandas blooming in Buenos Aires and Patagonia trails reopening.",
      winter: "December to February is southern summer, the busiest and priciest season for Patagonia trekking and glacier trips.",
    },
    vacationStyle: [
      "City culture, tango, and steakhouse dining in Buenos Aires",
      "Wine touring through Mendoza's Andean vineyards",
      "Trekking and glacier trips in Patagonia",
    ],
    pros: [
      "Outstanding beef and Malbec wine",
      "Dramatic Patagonian landscapes",
      "Rich cafe and tango culture",
      "Favorable exchange rates for visitors",
    ],
    cons: [
      "Economic instability affects prices and cash handling",
      "Very long domestic travel distances",
      "Patagonia weather is unpredictable",
    ],
    cities: [
      {
        name: "Buenos Aires",
        pois: [
          { name: "Recoleta Cemetery", description: "Ornate city of mausoleums where Eva Perón is buried, among the world's great cemeteries." },
          { name: "La Boca and Caminito", description: "Colorful working-class quarter known for painted houses, street tango, and Boca Juniors stadium." },
          { name: "Plaza de Mayo", description: "Historic central square flanked by the pink Casa Rosada presidential palace and the cathedral." },
        ],
      },
      {
        name: "Mendoza",
        pois: [
          { name: "Luján de Cuyo Wineries", description: "Premier Malbec-producing wine region offering tastings and vineyard lunches beneath the Andes." },
          { name: "Aconcagua Provincial Park", description: "Home to the Americas' highest peak, with viewpoints and day hikes along the Andean highway." },
          { name: "Parque General San Martín", description: "Sprawling city park with lakes, rose gardens, and a hilltop monument overlooking Mendoza." },
        ],
      },
      {
        name: "El Calafate",
        pois: [
          { name: "Perito Moreno Glacier", description: "Advancing glacier famous for booming ice falls, viewed from extensive boardwalks and boat trips." },
          { name: "Los Glaciares National Park", description: "UNESCO-listed park of ice fields, lakes, and peaks that anchors southern Patagonia tourism." },
          { name: "Glaciarium", description: "Modern museum explaining Patagonian ice fields, complete with a bar built of glacier ice." },
        ],
      },
    ],
  },
  {
    name: "Peru",
    iso2: "PE",
    tier: "mid",
    region: "South America",
    climate: ["dry", "temperate", "alpine"],
    styles: ["history", "culture", "adventure", "nature", "food", "museums"],
    bestTime: {
      months: ["May", "Jun", "Jul", "Aug", "Sep"],
      summary: "May to September is the Andean dry season, the most reliable window for Machu Picchu and trekking.",
    },
    seasonalNotes: {
      spring: "March to May sees rains taper in the Andes, with green landscapes and fewer visitors before peak season.",
      summer: "June to August is the dry-season peak, with clear trekking weather, cold highland nights, and heavy Machu Picchu crowds.",
      fall: "September to November is a good shoulder season, still mostly dry with thinner crowds and easier permits.",
      winter: "December to February is the Andean wet season, when the Inca Trail closes in February and trails turn muddy.",
    },
    vacationStyle: [
      "Archaeological travel centered on Machu Picchu and Inca sites",
      "Andean trekking and highland adventure",
      "Food-focused city stays in Lima",
    ],
    pros: [
      "Machu Picchu and abundant Inca ruins",
      "One of the world's top food scenes",
      "Dramatic Andes and Amazon scenery",
      "Good value for accommodation and food",
    ],
    cons: [
      "Altitude sickness is common in Cusco",
      "Inca Trail permits sell out months ahead",
      "Long bus rides between regions",
    ],
    cities: [
      {
        name: "Cusco",
        pois: [
          { name: "Machu Picchu", description: "Legendary fifteenth-century Inca citadel set on a mountain ridge, reached by train or trek." },
          { name: "Sacred Valley", description: "River valley of Inca ruins and markets, including Pisac and the fortress town of Ollantaytambo." },
          { name: "Sacsayhuamán", description: "Massive Inca fortress above Cusco built from precisely fitted stones weighing many tons." },
        ],
      },
      {
        name: "Lima",
        pois: [
          { name: "Miraflores Malecón", description: "Clifftop promenade of parks overlooking the Pacific, with paragliders and ocean sunsets." },
          { name: "Historic Centre of Lima", description: "UNESCO-listed colonial core around the Plaza Mayor, cathedral, and ornate wooden balconies." },
          { name: "Larco Museum", description: "Renowned collection of pre-Columbian art and ceramics housed in an eighteenth-century mansion." },
        ],
      },
      {
        name: "Arequipa",
        pois: [
          { name: "Santa Catalina Monastery", description: "Vividly painted sixteenth-century convent complex forming a walled city within the city." },
          { name: "Colca Canyon", description: "One of the world's deepest canyons, famous for soaring Andean condors and terraced villages." },
          { name: "Plaza de Armas", description: "Elegant main square of white volcanic sillar stone, framed by the cathedral and arcades." },
        ],
      },
    ],
  },
  {
    name: "Chile",
    iso2: "CL",
    tier: "mid",
    region: "South America",
    climate: ["dry", "desert", "temperate", "alpine"],
    styles: ["nature", "adventure", "wine", "road trip", "food"],
    bestTime: {
      months: ["Nov", "Dec", "Jan", "Feb", "Mar"],
      summary: "November to March is southern summer, the key window for Patagonia while the Atacama is good year-round.",
    },
    seasonalNotes: {
      spring: "March to May is Chilean autumn, with wine harvests near Santiago and quieter, colorful Patagonia trails.",
      summer: "June to August is local winter, closing much of Patagonia but opening Andean ski resorts near Santiago.",
      fall: "September to November is Chilean spring, when Patagonia reopens with wildflowers and shoulder-season prices.",
      winter: "December to February is southern summer, peak season for Torres del Paine with strong winds and top prices.",
    },
    vacationStyle: [
      "Trekking and wilderness trips in Patagonia",
      "Desert landscapes and stargazing in the Atacama",
      "Wine country touring near Santiago",
    ],
    pros: [
      "Extreme landscape variety from desert to glaciers",
      "Well-organized parks and infrastructure",
      "Excellent wine regions close to Santiago",
      "Safe by regional standards",
    ],
    cons: [
      "Expensive compared with neighboring countries",
      "Enormous north-south travel distances",
      "Patagonia weather changes fast",
    ],
    cities: [
      {
        name: "Santiago",
        pois: [
          { name: "Cerro San Cristóbal", description: "Hilltop park reached by funicular, giving panoramic views of the city and Andes." },
          { name: "Plaza de Armas", description: "Historic main square anchored by the Metropolitan Cathedral and the National History Museum." },
          { name: "Sky Costanera", description: "South America's tallest observation deck, atop the Gran Torre with 360-degree city views." },
        ],
      },
      {
        name: "San Pedro de Atacama",
        pois: [
          { name: "Valle de la Luna", description: "Otherworldly desert valley of dunes and salt formations, famous for its sunset colors." },
          { name: "El Tatio Geysers", description: "High-altitude geyser field best seen steaming at dawn against the Andean peaks." },
          { name: "Salar de Atacama", description: "Vast salt flat dotted with lagoons where flamingos feed beneath volcano backdrops." },
        ],
      },
      {
        name: "Puerto Natales",
        pois: [
          { name: "Torres del Paine National Park", description: "Iconic Patagonian park of granite towers, turquoise lakes, and the famous W trek." },
          { name: "Grey Glacier", description: "Sprawling glacier on the Southern Ice Field, visited by boat trips across iceberg-strewn Lago Grey." },
          { name: "Milodón Cave", description: "Enormous cave where remains of a giant prehistoric ground sloth were discovered." },
        ],
      },
    ],
  },
  {
    name: "Colombia",
    iso2: "CO",
    tier: "mid",
    region: "South America",
    climate: ["tropical", "temperate", "humid"],
    styles: ["culture", "nightlife", "food", "nature", "history", "beaches"],
    bestTime: {
      months: ["Dec", "Jan", "Feb", "Mar"],
      summary: "December to March is the main dry season, with sunny skies on the Caribbean coast and in the Andean cities.",
    },
    seasonalNotes: {
      spring: "March to May brings the first rainy season, with afternoon showers in the Andes but fewer tourists and lower prices.",
      summer: "June to August is a drier, popular stretch, good for Medellín and coffee country with lively local festivals.",
      fall: "September to November is the second rainy season, the quietest and cheapest time with short daily downpours.",
      winter: "December to February is peak dry season, busiest around Christmas and Cartagena with premium hotel rates.",
    },
    vacationStyle: [
      "Colonial cities and Caribbean beach time",
      "Urban culture and nightlife in Medellín and Bogotá",
      "Coffee-country and Andean nature escapes",
    ],
    pros: [
      "Diverse landscapes from Caribbean to Andes",
      "Warm, welcoming local culture",
      "Good value for money",
      "Year-round spring climate in the highlands",
    ],
    cons: [
      "Safety still requires research by area",
      "Rainy seasons can disrupt plans",
      "Limited English outside tourist hubs",
    ],
    cities: [
      {
        name: "Cartagena",
        pois: [
          { name: "Walled Old Town", description: "UNESCO-listed colonial quarter of balconied streets, plazas, and massive seventeenth-century ramparts." },
          { name: "Castillo San Felipe de Barajas", description: "Imposing Spanish hilltop fortress with tunnels and views over the city and harbor." },
          { name: "Rosario Islands", description: "Coral archipelago of white beaches and clear water, an easy boat trip from the city." },
        ],
      },
      {
        name: "Medellín",
        pois: [
          { name: "Comuna 13", description: "Once-notorious hillside district transformed by escalators, street art, and guided graffiti tours." },
          { name: "Plaza Botero", description: "Downtown square displaying twenty-three plump bronze sculptures donated by artist Fernando Botero." },
          { name: "Parque Arví", description: "Highland nature reserve reached by scenic Metrocable ride over the city's slopes." },
        ],
      },
      {
        name: "Bogotá",
        pois: [
          { name: "La Candelaria", description: "Historic center of colonial houses, street art, museums, and the Plaza de Bolívar." },
          { name: "Gold Museum", description: "World-class collection of tens of thousands of pre-Hispanic gold artifacts." },
          { name: "Monserrate", description: "Mountaintop church and viewpoint at 3,152 meters, reached by cable car or funicular." },
        ],
      },
    ],
  },
  {
    name: "Costa Rica",
    iso2: "CR",
    tier: "mid",
    region: "North America",
    climate: ["tropical", "humid", "rainy", "hot"],
    styles: ["nature", "adventure", "beaches", "family", "relaxation"],
    bestTime: {
      months: ["Dec", "Jan", "Feb", "Mar", "Apr"],
      summary: "December to April is the dry season, with sunny skies on the Pacific side and the best wildlife access.",
    },
    seasonalNotes: {
      spring: "March and April are the hottest, driest months, busy over Easter with peak beach conditions on the Pacific coast.",
      summer: "June to August brings green-season rains, usually in the afternoon, with lush forests and lower prices.",
      fall: "September and October are the wettest months on the Pacific, though the Caribbean coast enjoys its best weather.",
      winter: "December to February is peak dry season, with high prices, big crowds, and reliable sunshine.",
    },
    vacationStyle: [
      "Rainforest and wildlife ecotourism",
      "Adventure sports like ziplining, rafting, and surfing",
      "Laid-back beach stays on two coasts",
    ],
    pros: [
      "Exceptional biodiversity and national parks",
      "Well-developed ecotourism infrastructure",
      "Stable and safe by regional standards",
      "Compact size makes touring easy",
    ],
    cons: [
      "More expensive than most of Central America",
      "Heavy rain in the green season",
      "Rough roads to some destinations",
    ],
    cities: [
      {
        name: "San José",
        pois: [
          { name: "National Theatre", description: "Opulent nineteenth-century theater regarded as the city's finest building, with guided tours." },
          { name: "Pre-Columbian Gold Museum", description: "Underground museum displaying an extensive collection of indigenous gold artifacts." },
          { name: "Central Market", description: "Bustling 1880s market of food stalls, coffee vendors, and souvenirs in the city core." },
        ],
      },
      {
        name: "La Fortuna",
        pois: [
          { name: "Arenal Volcano", description: "Picture-perfect conical volcano surrounded by a national park of lava trails and rainforest." },
          { name: "Tabacón Hot Springs", description: "Volcanically heated river springs set in lush gardens at the volcano's base." },
          { name: "La Fortuna Waterfall", description: "Powerful seventy-meter waterfall dropping into a swimmable jungle pool." },
        ],
      },
      {
        name: "Manuel Antonio",
        pois: [
          { name: "Manuel Antonio National Park", description: "Compact park where rainforest meets beaches, famous for easy sloth and monkey sightings." },
          { name: "Playa Manuel Antonio", description: "Sheltered white-sand cove inside the park, ideal for swimming and snorkeling." },
          { name: "Playa Espadilla", description: "Long public beach outside the park with surf schools, sunsets, and beach bars." },
        ],
      },
    ],
  },
  {
    name: "Cuba",
    iso2: "CU",
    tier: "mid",
    region: "Caribbean",
    climate: ["tropical", "hot", "humid", "sunny"],
    styles: ["culture", "history", "beaches", "nightlife", "budget"],
    bestTime: {
      months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      summary: "November to April is the dry season, with warm sunny days and low hurricane risk.",
    },
    seasonalNotes: {
      spring: "March and April are warm and dry with lively Easter-period crowds before the summer heat builds.",
      summer: "June to August is hot and humid with afternoon storms, but carnival season livens Santiago and Havana.",
      fall: "September and October fall in hurricane season, the quietest and cheapest months with real storm risk.",
      winter: "December to February is peak season, with ideal weather, the biggest crowds, and the highest casa and hotel prices.",
    },
    vacationStyle: [
      "Time-capsule colonial cities with classic cars and live music",
      "All-inclusive beach resorts on white-sand cays",
      "Budget cultural travel in family-run casas particulares",
    ],
    pros: [
      "Unique preserved colonial architecture",
      "World-famous music and dance culture",
      "Beautiful Caribbean beaches",
      "Very safe for travelers",
    ],
    cons: [
      "Shortages and infrastructure frustrations",
      "Limited internet and card payments",
      "US travel restrictions complicate visits",
    ],
    cities: [
      {
        name: "Havana",
        pois: [
          { name: "Old Havana", description: "UNESCO-listed colonial quarter of plazas, cathedrals, and restored mansions along cobbled streets." },
          { name: "El Malecón", description: "Eight-kilometer seafront esplanade where locals gather at sunset against crashing waves." },
          { name: "El Capitolio", description: "Grand domed capitol building anchoring central Havana, near classic-car tour departure points." },
        ],
      },
      {
        name: "Varadero",
        pois: [
          { name: "Varadero Beach", description: "Twenty kilometers of powdery white sand and turquoise water lined with resorts." },
          { name: "Cueva de Saturno", description: "Flooded cave with a crystal-clear natural pool popular for swimming and snorkeling." },
          { name: "Parque Josone", description: "Landscaped park with a lake, gardens, restaurants, and rowboats in central Varadero." },
        ],
      },
      {
        name: "Trinidad",
        pois: [
          { name: "Plaza Mayor", description: "Beautifully preserved colonial square surrounded by pastel mansions and church towers." },
          { name: "Valle de los Ingenios", description: "UNESCO-listed valley of former sugar estates with plantation ruins and a slave-watch tower." },
          { name: "Playa Ancón", description: "White-sand Caribbean beach a short ride from town, the best on Cuba's south coast." },
        ],
      },
    ],
  },
  {
    name: "Dominican Republic",
    iso2: "DO",
    tier: "mid",
    region: "Caribbean",
    climate: ["tropical", "hot", "humid", "sunny"],
    styles: ["beaches", "relaxation", "luxury", "family", "nightlife"],
    bestTime: {
      months: ["Dec", "Jan", "Feb", "Mar", "Apr"],
      summary: "December to April offers dry, sunny weather outside hurricane season, ideal for beach resorts.",
    },
    seasonalNotes: {
      spring: "March and April bring warm, dry weather and spring-break crowds before rates dip in May.",
      summer: "June to August is hot and humid with brief showers, popular with families and busy at all-inclusives.",
      fall: "September and October are peak hurricane season, the cheapest months but with weather risk.",
      winter: "December to February is high season, with perfect beach weather, whale watching in Samaná, and top prices.",
    },
    vacationStyle: [
      "All-inclusive beach resort holidays",
      "Colonial history in the Americas' oldest city",
      "Water sports, golf, and excursion day trips",
    ],
    pros: [
      "Excellent beaches and resort value",
      "Easy direct flights from North America and Europe",
      "Wide range of all-inclusive options",
      "Warm weather year-round",
    ],
    cons: [
      "Hurricane risk from August to October",
      "Resort zones feel removed from local life",
      "Persistent vendor hustle in tourist areas",
    ],
    cities: [
      {
        name: "Punta Cana",
        pois: [
          { name: "Bávaro Beach", description: "Long stretch of palm-lined white sand consistently rated among the Caribbean's best beaches." },
          { name: "Scape Park", description: "Adventure park featuring the striking Hoyo Azul cenote, ziplines, and cave swims." },
          { name: "Saona Island", description: "Idyllic protected island of sandbars and starfish, reached by popular catamaran day trips." },
        ],
      },
      {
        name: "Santo Domingo",
        pois: [
          { name: "Zona Colonial", description: "UNESCO-listed first European city in the Americas, with the hemisphere's oldest cathedral." },
          { name: "Alcázar de Colón", description: "Sixteenth-century palace of Diego Columbus, now a museum of colonial-era furnishings." },
          { name: "Los Tres Ojos", description: "Open-air limestone caves holding three striking underground lakes within a city park." },
        ],
      },
      {
        name: "Puerto Plata",
        pois: [
          { name: "Mount Isabel de Torres", description: "Cable car ride to a mountaintop botanical garden and Christ statue overlooking the coast." },
          { name: "27 Waterfalls of Damajagua", description: "Guided canyon adventure jumping and sliding down a series of jungle waterfalls." },
          { name: "Playa Dorada", description: "Golden-sand resort beach with calm water, golf, and a lineup of all-inclusives." },
        ],
      },
    ],
  },
  {
    name: "Jamaica",
    iso2: "JM",
    tier: "mid",
    region: "Caribbean",
    climate: ["tropical", "hot", "humid", "sunny"],
    styles: ["beaches", "relaxation", "culture", "nightlife", "family"],
    bestTime: {
      months: ["Dec", "Jan", "Feb", "Mar", "Apr"],
      summary: "December to April is the dry high season, with reliable sunshine and low humidity.",
    },
    seasonalNotes: {
      spring: "March and April are warm and dry, busy with spring-break visitors before shoulder-season deals arrive in May.",
      summer: "June to August is hot with brief showers, featuring Reggae Sumfest and good-value resort rates.",
      fall: "September and October are the height of hurricane season, the quietest and cheapest time to visit.",
      winter: "December to February is peak season, with idyllic beach weather, the largest crowds, and premium prices.",
    },
    vacationStyle: [
      "Beach resort holidays on famous white-sand coasts",
      "Reggae music and island culture",
      "Waterfall, river, and rainforest excursions",
    ],
    pros: [
      "Iconic beaches like Seven Mile Beach",
      "World-influential music culture",
      "Distinctive food, from jerk to patties",
      "Strong all-inclusive resort scene",
    ],
    cons: [
      "High crime in some non-tourist areas",
      "Persistent hustling at attractions",
      "Hurricane season from June to November",
    ],
    cities: [
      {
        name: "Montego Bay",
        pois: [
          { name: "Doctor's Cave Beach", description: "Famous white-sand beach club with clear turquoise water credited with healing properties." },
          { name: "Rose Hall Great House", description: "Restored Georgian plantation mansion famous for the legend of the White Witch." },
          { name: "The Hip Strip", description: "Gloucester Avenue's lively run of bars, shops, and restaurants along the seafront." },
        ],
      },
      {
        name: "Negril",
        pois: [
          { name: "Seven Mile Beach", description: "Postcard stretch of soft sand and calm water lined with resorts and beach bars." },
          { name: "Rick's Café", description: "Clifftop bar famous for daredevil cliff diving and Caribbean sunset gatherings." },
          { name: "Negril Lighthouse", description: "Historic 1894 lighthouse marking Jamaica's westernmost point above dramatic cliffs." },
        ],
      },
      {
        name: "Ocho Rios",
        pois: [
          { name: "Dunn's River Falls", description: "Terraced 180-meter waterfall that visitors famously climb hand-in-hand to the top." },
          { name: "Mystic Mountain", description: "Rainforest adventure park with a chairlift, bobsled ride, and zipline canopy tours." },
          { name: "Blue Hole", description: "Jungle swimming hole with rope swings and small waterfalls in the hills above town." },
        ],
      },
    ],
  },
  {
    name: "Croatia",
    iso2: "HR",
    tier: "mid",
    region: "Europe",
    climate: ["mediterranean", "sunny", "temperate"],
    styles: ["beaches", "history", "culture", "food", "nature", "romance"],
    bestTime: {
      months: ["May", "Jun", "Sep"],
      summary: "May, June, and September combine warm Adriatic weather with far smaller crowds than peak summer.",
    },
    seasonalNotes: {
      spring: "April to June brings warming seas, blooming islands, and manageable crowds before the summer surge.",
      summer: "July and August are hot and extremely busy, with cruise crowds in Dubrovnik and peak ferry and hotel prices.",
      fall: "September and October stay warm enough for swimming early on, with harvest food festivals and falling prices.",
      winter: "November to March is quiet and cool, with many coastal hotels closed but atmospheric Christmas markets in Zagreb.",
    },
    vacationStyle: [
      "Island hopping and beach time on the Adriatic",
      "Walled medieval cities and Roman ruins",
      "Sailing, ferries, and coastal road trips",
    ],
    pros: [
      "Stunning Adriatic coastline and islands",
      "Exceptionally preserved historic towns",
      "Clear, swimmable sea",
      "Good ferry and road connections",
    ],
    cons: [
      "Severe overcrowding in peak summer",
      "Prices have risen sharply on the coast",
      "Mostly pebble beaches, not sand",
    ],
    cities: [
      {
        name: "Dubrovnik",
        pois: [
          { name: "City Walls", description: "Complete medieval walls circling the Old Town, walkable for two kilometers of sea views." },
          { name: "Stradun", description: "Polished limestone main street running through the baroque heart of the Old Town." },
          { name: "Mount Srđ Cable Car", description: "Short cable car ride to a summit panorama over the walled city and Adriatic islands." },
        ],
      },
      {
        name: "Split",
        pois: [
          { name: "Diocletian's Palace", description: "Vast Roman emperor's palace whose walls still form the living heart of the city." },
          { name: "Riva Promenade", description: "Palm-lined waterfront promenade of cafes stretching along the harbor below the palace." },
          { name: "Marjan Hill", description: "Forested peninsula park with trails, viewpoints, and beaches minutes from the center." },
        ],
      },
      {
        name: "Zagreb",
        pois: [
          { name: "Gornji Grad", description: "Hilltop Upper Town of cobbled lanes centered on the tiled roof of St. Mark's Church." },
          { name: "Dolac Market", description: "Iconic open-air farmers market under red umbrellas just off the main square." },
          { name: "Museum of Broken Relationships", description: "Quirky award-winning museum of donated mementos from ended relationships worldwide." },
        ],
      },
    ],
  },
  {
    name: "Czechia",
    iso2: "CZ",
    tier: "mid",
    region: "Europe",
    climate: ["temperate", "cold"],
    styles: ["history", "culture", "museums", "budget", "nightlife", "food"],
    bestTime: {
      months: ["Apr", "May", "Jun", "Sep"],
      summary: "Late spring and September offer mild weather and lighter crowds than Prague's packed midsummer.",
    },
    seasonalNotes: {
      spring: "April to June brings blossoms, Easter markets, and pleasant sightseeing weather before peak crowds arrive.",
      summer: "July and August are warm and very crowded in Prague, with beer gardens open and higher hotel rates.",
      fall: "September and October offer crisp weather, autumn colors along the Vltava, and thinner tourist numbers.",
      winter: "December draws crowds to famous Christmas markets, while January and February are cold, cheap, and quiet.",
    },
    vacationStyle: [
      "Historic city breaks centered on Prague",
      "Castle and old-town touring across Bohemia",
      "Beer culture in the country that invented pilsner",
    ],
    pros: [
      "Prague's remarkably intact historic core",
      "Excellent and inexpensive beer",
      "Cheaper than Western Europe",
      "Compact, easy rail connections",
    ],
    cons: [
      "Prague is heavily overtouristed",
      "Grey, cold winters",
      "Tourist-area restaurants can overcharge",
    ],
    cities: [
      {
        name: "Prague",
        pois: [
          { name: "Charles Bridge", description: "Fourteenth-century stone bridge lined with baroque statues linking the Old Town and castle." },
          { name: "Prague Castle", description: "Sprawling hilltop castle complex containing St. Vitus Cathedral and centuries of royal history." },
          { name: "Old Town Square", description: "Medieval main square famous for the hourly show of its Astronomical Clock." },
        ],
      },
      {
        name: "Český Krumlov",
        pois: [
          { name: "Český Krumlov Castle", description: "Enormous castle above the Vltava with a baroque theater and painted tower." },
          { name: "Old Town", description: "UNESCO-listed medieval townscape wrapped in a tight bend of the Vltava River." },
          { name: "Vltava River Rafting", description: "Gentle canoe and raft floats past the castle and through the historic center." },
        ],
      },
      {
        name: "Brno",
        pois: [
          { name: "Špilberk Castle", description: "Hilltop fortress and former Habsburg prison with casemates and city views." },
          { name: "Cathedral of St. Peter and Paul", description: "Twin-spired cathedral on Petrov hill defining the Brno skyline." },
          { name: "Villa Tugendhat", description: "UNESCO-listed functionalist masterpiece by Mies van der Rohe, bookable for tours." },
        ],
      },
    ],
  },
  {
    name: "Hungary",
    iso2: "HU",
    tier: "mid",
    region: "Europe",
    climate: ["temperate", "cold"],
    styles: ["culture", "history", "nightlife", "food", "wine", "budget"],
    bestTime: {
      months: ["Apr", "May", "Jun", "Sep"],
      summary: "Spring and early fall bring mild weather ideal for Budapest sightseeing and thermal baths without summer crowds.",
    },
    seasonalNotes: {
      spring: "April to June is mild and lively, with the Budapest Spring Festival and pleasant riverside walks.",
      summer: "July and August are hot, with the Sziget Festival, busy Lake Balaton beaches, and peak city crowds.",
      fall: "September and October bring wine harvest season in Eger and Tokaj with comfortable sightseeing weather.",
      winter: "December offers big Christmas markets and steaming outdoor thermal baths, while deep winter is cold and cheap.",
    },
    vacationStyle: [
      "Grand-city breaks with thermal spa culture",
      "Nightlife in Budapest's ruin bars",
      "Wine regions and lakeside summer escapes",
    ],
    pros: [
      "Budapest's architecture and Danube views",
      "Historic thermal baths",
      "Great value compared with Western Europe",
      "Distinctive food and wine traditions",
    ],
    cons: [
      "Summer heat waves in the city",
      "Hungarian is difficult for visitors",
      "Sights concentrated mainly in Budapest",
    ],
    cities: [
      {
        name: "Budapest",
        pois: [
          { name: "Hungarian Parliament Building", description: "Monumental neo-Gothic parliament dominating the Danube bank, spectacular when lit at night." },
          { name: "Buda Castle", description: "Hilltop palace complex with museums, the Fisherman's Bastion, and Matthias Church nearby." },
          { name: "Széchenyi Thermal Baths", description: "Grand yellow bath palace with steaming outdoor pools open year-round." },
        ],
      },
      {
        name: "Lake Balaton",
        pois: [
          { name: "Tihany Peninsula", description: "Lavender-covered peninsula topped by a Benedictine abbey with sweeping lake views." },
          { name: "Balatonfüred Promenade", description: "Elegant lakeside resort town promenade of villas, marinas, and summer regattas." },
          { name: "Badacsony Wine Hills", description: "Volcanic hills of vineyards and wine terraces rising above the lake's north shore." },
        ],
      },
      {
        name: "Eger",
        pois: [
          { name: "Eger Castle", description: "Historic fortress famous for repelling the Ottoman siege of 1552, with museums and ramparts." },
          { name: "Valley of the Beautiful Women", description: "Horseshoe of wine cellars carved into hillsides, pouring the local Bull's Blood red." },
          { name: "Eger Minaret", description: "One of Europe's northernmost Ottoman minarets, climbable for old-town views." },
        ],
      },
    ],
  },
  {
    name: "Poland",
    iso2: "PL",
    tier: "mid",
    region: "Europe",
    climate: ["temperate", "cold"],
    styles: ["history", "culture", "museums", "budget", "food", "nightlife"],
    bestTime: {
      months: ["May", "Jun", "Jul", "Aug", "Sep"],
      summary: "May to September offers warm weather for old-town sightseeing and Baltic coast trips.",
    },
    seasonalNotes: {
      spring: "April to June is mild with blooming parks, Easter traditions, and moderate crowds in Kraków.",
      summer: "July and August are warm and busiest, with festivals, long days, and packed Baltic beaches near Gdańsk.",
      fall: "September and October bring golden autumn colors, harvest food, and quieter museum queues.",
      winter: "December features atmospheric Christmas markets, while January and February are cold with cheap city breaks and Tatra skiing.",
    },
    vacationStyle: [
      "Historic old-town city breaks",
      "Powerful WWII and heritage sites",
      "Hearty food and budget-friendly nightlife",
    ],
    pros: [
      "Beautifully rebuilt historic centers",
      "Excellent value for money",
      "Profound historical sites",
      "Good trains between major cities",
    ],
    cons: [
      "Long, grey winters",
      "Some heavy subject matter at key sites",
      "Baltic weather is unreliable even in summer",
    ],
    cities: [
      {
        name: "Kraków",
        pois: [
          { name: "Main Market Square", description: "Europe's largest medieval square, home to the Cloth Hall and St. Mary's Basilica." },
          { name: "Wawel Castle", description: "Royal hilltop castle and cathedral complex, the historic seat of Polish kings." },
          { name: "Auschwitz-Birkenau Memorial", description: "Sobering memorial and museum at the former Nazi camp, a day trip from the city." },
        ],
      },
      {
        name: "Warsaw",
        pois: [
          { name: "Old Town Market Square", description: "Meticulously reconstructed historic square, UNESCO-listed for its postwar rebuilding." },
          { name: "Łazienki Park", description: "Vast royal park with a palace on the water, peacocks, and summer Chopin concerts." },
          { name: "Warsaw Uprising Museum", description: "Immersive museum chronicling the city's 1944 uprising against Nazi occupation." },
        ],
      },
      {
        name: "Gdańsk",
        pois: [
          { name: "Long Market", description: "Showpiece street of gabled merchant houses leading to the Neptune Fountain and Green Gate." },
          { name: "Museum of the Second World War", description: "Major modern museum presenting the global story of WWII, which began nearby." },
          { name: "Westerplatte", description: "Peninsula memorial marking where the first shots of World War II were fired." },
        ],
      },
    ],
  },
  {
    name: "Ireland",
    iso2: "IE",
    tier: "mid",
    region: "Europe",
    climate: ["rainy", "temperate"],
    styles: ["nature", "culture", "history", "road trip", "nightlife", "food"],
    bestTime: {
      months: ["May", "Jun", "Jul", "Aug", "Sep"],
      summary: "May to September brings the mildest weather and longest days for coastal drives, with June often driest.",
    },
    seasonalNotes: {
      spring: "March to May is green and fresh, with St. Patrick's festivities, lambing season, and lighter crowds.",
      summer: "June to August has long daylight and the busiest roads, with festivals everywhere and peak accommodation prices.",
      fall: "September and October are quieter with soft light on the coast, though rain grows more frequent.",
      winter: "November to February is wet, windy, and dark, but pubs are cozy and city breaks are cheap.",
    },
    vacationStyle: [
      "Scenic coastal road trips like the Wild Atlantic Way",
      "Pub culture, music, and literary city breaks",
      "Castles, ruins, and green countryside touring",
    ],
    pros: [
      "Dramatic coastal scenery",
      "Legendary pub and music culture",
      "English-speaking and easy to navigate",
      "Compact driving distances",
    ],
    cons: [
      "Rain is possible any day of the year",
      "Dublin is expensive",
      "Narrow rural roads challenge drivers",
    ],
    cities: [
      {
        name: "Dublin",
        pois: [
          { name: "Guinness Storehouse", description: "Seven-story brewery experience ending with a pint at the panoramic Gravity Bar." },
          { name: "Trinity College and Book of Kells", description: "Historic university housing the illuminated ninth-century manuscript and the Long Room library." },
          { name: "Temple Bar", description: "Cobbled cultural quarter of pubs, galleries, and live music on the Liffey's south bank." },
        ],
      },
      {
        name: "Galway",
        pois: [
          { name: "Latin Quarter", description: "Buzzing pedestrian lanes of buskers, pubs, and shops in the medieval city center." },
          { name: "Cliffs of Moher", description: "Sheer 200-meter Atlantic cliffs, Ireland's most visited natural attraction, an easy day trip." },
          { name: "Connemara", description: "Wild region of bogs, mountains, and Kylemore Abbey west of the city." },
        ],
      },
      {
        name: "Killarney",
        pois: [
          { name: "Ring of Kerry", description: "Classic 179-kilometer scenic circuit of coastal and mountain views starting from town." },
          { name: "Killarney National Park", description: "Lakes, waterfalls, and red deer surrounding the nineteenth-century Muckross House and gardens." },
          { name: "Gap of Dunloe", description: "Narrow glacial mountain pass explored by foot, bike, or traditional jaunting car." },
        ],
      },
    ],
  },
  {
    name: "Iceland",
    iso2: "IS",
    tier: "mid",
    region: "Europe",
    climate: ["cold", "snowy", "rainy"],
    styles: ["nature", "adventure", "road trip", "relaxation"],
    bestTime: {
      months: ["Jun", "Jul", "Aug", "Sep"],
      summary: "June to August offers midnight sun and open highland roads, while September adds northern lights chances.",
    },
    seasonalNotes: {
      spring: "April and May bring lengthening days, puffins returning to the cliffs, and shoulder-season prices.",
      summer: "June to August has near-endless daylight, full road access, peak crowds, and the year's highest costs.",
      fall: "September and October pair fall colors with early auroras, though weather turns fast and some roads close.",
      winter: "November to March is dark and stormy but prime for northern lights, ice caves, and snowy landscapes.",
    },
    vacationStyle: [
      "Ring Road self-drive trips past waterfalls and glaciers",
      "Geothermal lagoon soaking and spa stops",
      "Northern lights and winter adventure travel",
    ],
    pros: [
      "Otherworldly volcanic and glacial scenery",
      "Northern lights in winter, midnight sun in summer",
      "Very safe and easy to self-drive",
      "Geothermal pools everywhere",
    ],
    cons: [
      "Among Europe's most expensive countries",
      "Weather can wreck plans in any season",
      "Popular sights get crowded despite remoteness",
    ],
    cities: [
      {
        name: "Reykjavík",
        pois: [
          { name: "Hallgrímskirkja", description: "Rocket-shaped concrete church whose tower gives the best views over the colorful capital." },
          { name: "Blue Lagoon", description: "Milky-blue geothermal spa set in a lava field between the city and airport." },
          { name: "Golden Circle", description: "Classic day loop covering Þingvellir rift valley, Geysir hot springs, and Gullfoss waterfall." },
        ],
      },
      {
        name: "Vík",
        pois: [
          { name: "Reynisfjara Beach", description: "Black-sand beach famed for basalt columns, sea stacks, and dangerous sneaker waves." },
          { name: "Skógafoss", description: "Thundering sixty-meter waterfall with a staircase to a viewing platform above the drop." },
          { name: "Dyrhólaey", description: "Dramatic rock arch promontory with lighthouse views and summer puffin colonies." },
        ],
      },
      {
        name: "Akureyri",
        pois: [
          { name: "Lake Mývatn", description: "Volcanic lake area of craters, lava formations, and steaming geothermal nature baths." },
          { name: "Goðafoss", description: "Broad horseshoe waterfall known as the Waterfall of the Gods, just east of town." },
          { name: "Whale Watching in Eyjafjörður", description: "Boat tours on Iceland's longest fjord with frequent humpback whale sightings." },
        ],
      },
    ],
  },
  {
    name: "Norway",
    iso2: "NO",
    tier: "mid",
    region: "Europe",
    climate: ["cold", "snowy", "temperate", "rainy"],
    styles: ["nature", "adventure", "road trip", "skiing", "culture"],
    bestTime: {
      months: ["May", "Jun", "Jul", "Aug"],
      summary: "May to August brings long days and the best conditions for fjord cruising and hiking.",
    },
    seasonalNotes: {
      spring: "April and May see waterfalls at full melt-fed force, blossoming fjord orchards, and pre-season prices.",
      summer: "June to August is peak season with midnight sun in the north, busy fjord cruises, and top hotel rates.",
      fall: "September and October offer autumn colors and returning auroras in the north as trails and ferries quiet down.",
      winter: "November to March is dark and snowy, ideal for northern lights in Tromsø and skiing, with short daylight hours.",
    },
    vacationStyle: [
      "Fjord cruising and scenic rail journeys",
      "Hiking and outdoor adventure among mountains",
      "Arctic trips for northern lights and midnight sun",
    ],
    pros: [
      "World-class fjord scenery",
      "Excellent hiking and outdoor access",
      "Reliable northern lights in the Arctic north",
      "Clean, safe, and well-organized",
    ],
    cons: [
      "Very high prices for food and lodging",
      "Weather is unpredictable even in summer",
      "Long distances between highlights",
    ],
    cities: [
      {
        name: "Oslo",
        pois: [
          { name: "Vigeland Sculpture Park", description: "Frogner Park's collection of more than 200 human sculptures by Gustav Vigeland." },
          { name: "Oslo Opera House", description: "Striking marble opera house whose sloping roof invites walks over the fjordfront." },
          { name: "Bygdøy Museums", description: "Peninsula of maritime museums including the polar ship Fram and Kon-Tiki raft." },
        ],
      },
      {
        name: "Bergen",
        pois: [
          { name: "Bryggen", description: "UNESCO-listed row of colorful Hanseatic wooden warehouses along the old wharf." },
          { name: "Mount Fløyen", description: "Funicular-served viewpoint with hiking trails and panoramas over the city and fjords." },
          { name: "Nærøyfjord Cruise", description: "Boat trips through a narrow UNESCO fjord of sheer cliffs and waterfalls." },
        ],
      },
      {
        name: "Tromsø",
        pois: [
          { name: "Northern Lights Tours", description: "Guided aurora chases from one of the world's most reliable viewing bases." },
          { name: "Arctic Cathedral", description: "Iconic triangular church with a vast stained-glass wall across the bridge from the center." },
          { name: "Fjellheisen Cable Car", description: "Ride to Mount Storsteinen for views over the island city and surrounding fjords." },
        ],
      },
    ],
  },
  {
    name: "Sweden",
    iso2: "SE",
    tier: "mid",
    region: "Europe",
    climate: ["cold", "snowy", "temperate"],
    styles: ["nature", "culture", "museums", "family", "adventure"],
    bestTime: {
      months: ["May", "Jun", "Jul", "Aug"],
      summary: "Late spring and summer bring long, mild days for cities and the archipelago; winter suits Lapland trips.",
    },
    seasonalNotes: {
      spring: "April and May warm quickly with blossoming parks, Walpurgis bonfires, and few tourists.",
      summer: "June to August is peak season with Midsummer festivities, warm archipelago days, and many locals on holiday in July.",
      fall: "September and October bring crisp air, autumn colors, and quieter museums at lower prices.",
      winter: "November to March is cold and dark, ideal for the Icehotel, dog sledding, and auroras in Lapland.",
    },
    vacationStyle: [
      "Design-forward city breaks in Stockholm",
      "Island hopping through the Stockholm archipelago",
      "Arctic winter adventures in Lapland",
    ],
    pros: [
      "Stockholm's beauty across fourteen islands",
      "Excellent museums and design culture",
      "Unspoiled nature with free roaming rights",
      "Efficient, English-friendly travel",
    ],
    cons: [
      "High costs, especially eating out",
      "Long, dark winters outside Lapland activities",
      "Some businesses close for July vacations",
    ],
    cities: [
      {
        name: "Stockholm",
        pois: [
          { name: "Gamla Stan", description: "Atmospheric old town of narrow medieval lanes, the Royal Palace, and Stortorget square." },
          { name: "Vasa Museum", description: "Museum built around a remarkably preserved seventeenth-century warship that sank on its maiden voyage." },
          { name: "Skansen", description: "The world's oldest open-air museum, with historic buildings and Nordic wildlife on Djurgården." },
        ],
      },
      {
        name: "Gothenburg",
        pois: [
          { name: "Liseberg", description: "Scandinavia's largest amusement park, famous for wooden coasters and Christmas markets." },
          { name: "Haga District", description: "Cobbled nineteenth-century quarter of wooden houses, boutiques, and giant cinnamon buns." },
          { name: "Southern Archipelago", description: "Car-free islands of fishing villages and swimming spots reached by public ferry." },
        ],
      },
      {
        name: "Kiruna",
        pois: [
          { name: "Icehotel", description: "Famous hotel in Jukkasjärvi rebuilt each winter from ice and snow, with art suites." },
          { name: "Abisko National Park", description: "Renowned aurora-viewing park with some of Europe's clearest winter night skies." },
          { name: "Dog Sledding Tours", description: "Husky-drawn sled rides through Lapland's snowy forests and frozen rivers." },
        ],
      },
    ],
  },
  {
    name: "Denmark",
    iso2: "DK",
    tier: "mid",
    region: "Europe",
    climate: ["temperate", "cold", "rainy"],
    styles: ["culture", "food", "family", "museums", "history"],
    bestTime: {
      months: ["May", "Jun", "Jul", "Aug"],
      summary: "May to August delivers the warmest weather and longest days for cycling and harbor life.",
    },
    seasonalNotes: {
      spring: "April and May bring blooming gardens, Tivoli's season opening, and pleasant pre-summer calm.",
      summer: "June to August is peak season with long evenings, harbor swimming, festivals, and the highest hotel prices.",
      fall: "September and October turn cool and cozy as hygge season begins and crowds thin.",
      winter: "November to February is dark and damp, brightened by Tivoli's Christmas markets and candlelit cafes.",
    },
    vacationStyle: [
      "Bike-friendly capital city breaks",
      "Design, food, and hygge culture",
      "Castles, Viking history, and family attractions",
    ],
    pros: [
      "Copenhagen's food and design scene",
      "Superb cycling infrastructure",
      "Very safe and family-friendly",
      "Compact and easy to explore",
    ],
    cons: [
      "Expensive dining and hotels",
      "Grey, windy weather much of the year",
      "Flat landscape offers little natural drama",
    ],
    cities: [
      {
        name: "Copenhagen",
        pois: [
          { name: "Tivoli Gardens", description: "Historic 1843 amusement park of gardens, rides, and evening lights in the city center." },
          { name: "Nyhavn", description: "Postcard canal of brightly painted townhouses, wooden ships, and waterside restaurants." },
          { name: "The Little Mermaid", description: "Famous bronze statue on the harbor promenade honoring Hans Christian Andersen's tale." },
        ],
      },
      {
        name: "Aarhus",
        pois: [
          { name: "ARoS Art Museum", description: "Major art museum crowned by a walkable rainbow-glass panorama circling the rooftop." },
          { name: "Den Gamle By", description: "Open-air museum of relocated historic Danish buildings staffed by costumed interpreters." },
          { name: "Latin Quarter", description: "Oldest part of town, packed with cafes, boutiques, and cobbled lanes." },
        ],
      },
      {
        name: "Odense",
        pois: [
          { name: "Hans Christian Andersen House", description: "Striking museum in the fairy-tale author's birthplace exploring his life and stories." },
          { name: "Egeskov Castle", description: "Renaissance moat castle on Funen with gardens, mazes, and vintage car collections." },
          { name: "Odense Old Town", description: "Cobbled quarter of half-timbered houses around St. Canute's Cathedral." },
        ],
      },
    ],
  },
  {
    name: "Finland",
    iso2: "FI",
    tier: "mid",
    region: "Europe",
    climate: ["cold", "snowy", "temperate"],
    styles: ["nature", "family", "relaxation", "adventure", "culture"],
    bestTime: {
      months: ["Jun", "Jul", "Aug", "Dec", "Jan", "Feb"],
      summary: "June to August suits lakes and the midnight sun, while December to February is prime for Lapland snow and auroras.",
    },
    seasonalNotes: {
      spring: "March and April still offer Lapland snow sports under lengthening daylight, while the south thaws quietly.",
      summer: "June to August brings midnight sun, lakeside cottage culture, and festivals, with locals vacationing in July.",
      fall: "September's ruska season paints Lapland forests in color, an underrated time for hiking and early auroras.",
      winter: "December to February is peak Lapland season with Santa Claus tourism, husky safaris, and reliably snowy, dark days.",
    },
    vacationStyle: [
      "Lapland winter trips with huskies, snow, and Santa",
      "Sauna and lakeside cottage relaxation",
      "Nordic design city breaks in Helsinki",
    ],
    pros: [
      "Reliable winter wonderland in Lapland",
      "Authentic sauna culture everywhere",
      "Vast clean lakes and forests",
      "Safe and superbly organized",
    ],
    cons: [
      "High prices, especially in Lapland season",
      "Extreme winter cold and darkness",
      "Fewer headline sights than neighbors",
    ],
    cities: [
      {
        name: "Helsinki",
        pois: [
          { name: "Suomenlinna", description: "UNESCO-listed sea fortress spread across islands, a short ferry ride from the market square." },
          { name: "Helsinki Cathedral", description: "Gleaming white neoclassical cathedral presiding over Senate Square in the city center." },
          { name: "Temppeliaukio Church", description: "Extraordinary church blasted into solid bedrock, famed for its acoustics and copper dome." },
        ],
      },
      {
        name: "Rovaniemi",
        pois: [
          { name: "Santa Claus Village", description: "Year-round Christmas village on the Arctic Circle where visitors meet Santa himself." },
          { name: "Northern Lights Safaris", description: "Snowmobile, sleigh, and camera tours chasing auroras across Lapland's night skies." },
          { name: "Arktikum", description: "Science museum and arctic center explaining northern nature and Sámi culture." },
        ],
      },
      {
        name: "Turku",
        pois: [
          { name: "Turku Castle", description: "Massive medieval castle guarding the river mouth, among Finland's oldest buildings." },
          { name: "Turku Archipelago", description: "Thousands of islands linked by ferries and bridges, ideal for summer cycling trips." },
          { name: "Turku Cathedral", description: "Finland's national shrine, a landmark medieval cathedral on the Aura River." },
        ],
      },
    ],
  },
  {
    name: "Belgium",
    iso2: "BE",
    tier: "mid",
    region: "Europe",
    climate: ["temperate", "rainy", "cold"],
    styles: ["food", "history", "culture", "museums", "romance"],
    bestTime: {
      months: ["Apr", "May", "Jun", "Sep"],
      summary: "Late spring and September offer mild weather for canal towns and cafe terraces without peak crowds.",
    },
    seasonalNotes: {
      spring: "April to June is mild with blooming Hallerbos bluebells and lively terraces before summer visitors peak.",
      summer: "July and August are warmest and busiest, with music festivals like Tomorrowland and crowded Bruges canals.",
      fall: "September and October are quieter and atmospheric, well suited to beer, museums, and comfort food.",
      winter: "November to February is damp and grey, redeemed by celebrated Christmas markets and cozy beer cafes.",
    },
    vacationStyle: [
      "Medieval canal-town sightseeing",
      "Beer, chocolate, and frites food tourism",
      "Compact multi-city breaks by train",
    ],
    pros: [
      "World-renowned beer and chocolate",
      "Fairy-tale medieval towns like Bruges",
      "Short train rides link everything",
      "Strong art and museum heritage",
    ],
    cons: [
      "Frequent rain year-round",
      "Bruges is heavily crowded in season",
      "Relatively high prices for dining",
    ],
    cities: [
      {
        name: "Brussels",
        pois: [
          { name: "Grand Place", description: "Ornate UNESCO-listed central square framed by gilded guildhalls and the Gothic town hall." },
          { name: "Atomium", description: "Giant 1958 World's Fair structure of nine steel spheres with exhibits and viewpoints." },
          { name: "Royal Museums of Fine Arts", description: "Major art complex spanning Flemish masters to a dedicated Magritte museum." },
        ],
      },
      {
        name: "Bruges",
        pois: [
          { name: "Markt and Belfry", description: "Medieval market square dominated by an 83-meter belfry climbable for panoramic views." },
          { name: "Canal Boat Tours", description: "Short cruises along dreamy canals past gabled houses and stone bridges." },
          { name: "Basilica of the Holy Blood", description: "Double chapel on Burg square housing a venerated relic of Christ's blood." },
        ],
      },
      {
        name: "Ghent",
        pois: [
          { name: "Gravensteen", description: "Moated twelfth-century castle of the counts of Flanders in the heart of the city." },
          { name: "St. Bavo's Cathedral", description: "Gothic cathedral housing the celebrated Ghent Altarpiece by the van Eyck brothers." },
          { name: "Graslei and Korenlei", description: "Facing medieval quays whose merchant facades form Ghent's signature waterfront view." },
        ],
      },
    ],
  },
]
