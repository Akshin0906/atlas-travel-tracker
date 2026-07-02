import type { TourismCountry } from '../../types'

export const tourismMajorA: TourismCountry[] = [
  {
    name: "France",
    iso2: "FR",
    tier: "major",
    region: "Europe",
    climate: ["temperate", "mediterranean", "sunny"],
    styles: ["food", "wine", "culture", "museums", "history", "romance"],
    bestTime: {
      months: ["Apr", "May", "Jun", "Sep", "Oct"],
      summary: "Late spring and early fall bring mild weather, thinner crowds, and pleasant conditions across most regions.",
    },
    seasonalNotes: {
      spring: "Mild temperatures and blooming gardens make April to June ideal, though Paris hotel prices climb from Easter onward.",
      summer: "July and August are hot and crowded, with many Parisians leaving the capital while coastal resorts fill up.",
      fall: "September and October offer wine harvest season, comfortable weather, and noticeably smaller lines at major sights.",
      winter: "Cities are quiet and cheaper outside the holidays, while the Alps draw skiers from December through March.",
    },
    vacationStyle: [
      "City breaks built around art, food, and cafe culture",
      "Wine-country touring through storied rural regions",
      "Riviera beach time paired with historic old towns",
    ],
    pros: [
      "World-class museums and monuments",
      "Exceptional food and wine culture",
      "Excellent high-speed rail network",
      "Huge variety from Alps to Riviera",
    ],
    cons: [
      "High prices in Paris and the Riviera",
      "Heavy summer crowds at major sights",
      "Occasional strikes disrupt transport",
    ],
    cities: [
      {
        name: "Paris",
        pois: [
          { name: "Eiffel Tower", description: "The iron landmark of Paris offers sweeping city views from its three observation levels." },
          { name: "Louvre Museum", description: "The world's most visited museum houses the Mona Lisa and vast collections spanning millennia." },
          { name: "Notre-Dame Cathedral", description: "The restored Gothic cathedral on the Ile de la Cite is a masterpiece of medieval architecture." },
          { name: "Arc de Triomphe", description: "Napoleon's triumphal arch anchors the Champs-Elysees and offers a rooftop panorama of twelve avenues." },
          { name: "Montmartre and Sacre-Coeur", description: "A hilltop village of artists' squares crowned by a white basilica overlooking all of Paris." },
        ],
      },
      {
        name: "Nice",
        pois: [
          { name: "Promenade des Anglais", description: "The famous seafront boulevard curves along the Baie des Anges with palm trees and pebble beaches." },
          { name: "Vieux Nice", description: "The old town's narrow lanes are packed with markets, baroque churches, and socca vendors." },
          { name: "Castle Hill", description: "A park atop the old citadel site delivers the classic postcard view over Nice's coastline." },
          { name: "Cours Saleya Market", description: "This lively open-air market sells flowers, produce, and Provencal goods in the heart of the old town." },
          { name: "Musee Matisse", description: "A villa museum in Cimiez displays a major collection of works by longtime Nice resident Henri Matisse." },
        ],
      },
      {
        name: "Lyon",
        pois: [
          { name: "Vieux Lyon", description: "One of Europe's largest Renaissance quarters, famous for its hidden traboule passageways and bouchon restaurants." },
          { name: "Basilica of Notre-Dame de Fourviere", description: "The ornate hilltop basilica overlooks the city and is reached by a short funicular ride." },
          { name: "Presqu'ile", description: "The peninsula between the Rhone and Saone rivers holds Lyon's grand squares, shops, and opera house." },
          { name: "Parc de la Tete d'Or", description: "A vast urban park with a lake, rose gardens, and a free zoo near the Rhone." },
          { name: "Les Halles Paul Bocuse", description: "Lyon's celebrated indoor food hall showcases the gastronomy that made the city France's culinary capital." },
        ],
      },
      {
        name: "Bordeaux",
        pois: [
          { name: "Place de la Bourse", description: "An elegant riverside square mirrored by the Miroir d'Eau, the world's largest reflecting pool." },
          { name: "La Cite du Vin", description: "A striking modern museum dedicated to wine culture, with tastings and views over the Garonne." },
          { name: "Rue Sainte-Catherine", description: "One of Europe's longest pedestrian shopping streets runs through the center of the old city." },
          { name: "Saint-Emilion", description: "A medieval hilltop wine village nearby, ringed by celebrated vineyards and underground monuments." },
          { name: "Grosse Cloche", description: "This fifteenth-century bell gate is one of the oldest surviving city gates in France." },
        ],
      },
      {
        name: "Marseille",
        pois: [
          { name: "Vieux-Port", description: "The ancient harbor at the city's heart is lined with fish markets, cafes, and boat departures." },
          { name: "Basilique Notre-Dame de la Garde", description: "The hilltop basilica nicknamed the Good Mother watches over Marseille with panoramic Mediterranean views." },
          { name: "Calanques National Park", description: "Dramatic limestone inlets with turquoise coves stretch along the coast between Marseille and Cassis." },
          { name: "Le Panier", description: "The oldest quarter in Marseille charms visitors with steep lanes, street art, and artisan shops." },
          { name: "MuCEM", description: "A landmark waterfront museum exploring Mediterranean civilizations, linked by footbridge to Fort Saint-Jean." },
        ],
      },
    ],
  },
  {
    name: "Spain",
    iso2: "ES",
    tier: "major",
    region: "Europe",
    climate: ["mediterranean", "sunny", "hot", "dry"],
    styles: ["food", "beaches", "nightlife", "culture", "history", "museums"],
    bestTime: {
      months: ["Apr", "May", "Jun", "Sep", "Oct"],
      summary: "Spring and early fall deliver warm sunshine without the intense heat and peak crowds of midsummer.",
    },
    seasonalNotes: {
      spring: "Pleasant temperatures and festivals like Seville's Feria make spring popular, so book Andalusian hotels early.",
      summer: "Inland cities like Madrid and Seville get extremely hot, while coastal resorts are crowded and expensive.",
      fall: "September and October stay warm on the coast with fewer tourists and better prices than summer.",
      winter: "Mild in the south and on the coasts, cold in Madrid, with low season prices almost everywhere.",
    },
    vacationStyle: [
      "Beach holidays along Mediterranean and island coasts",
      "City-hopping for art, architecture, and tapas",
      "Festival and nightlife trips that run late into the night",
    ],
    pros: [
      "Reliable sunshine much of the year",
      "Outstanding food and tapas culture",
      "Rich mix of Moorish and European heritage",
      "Good-value dining and transport",
    ],
    cons: [
      "Extreme summer heat inland",
      "Crowded coastal resorts in high season",
      "Late dining schedule takes adjustment",
    ],
    cities: [
      {
        name: "Barcelona",
        pois: [
          { name: "Sagrada Familia", description: "Gaudi's still-unfinished basilica is Barcelona's defining landmark, famous for its towering organic facades." },
          { name: "Park Guell", description: "A whimsical hillside park of mosaic terraces and curving architecture with views over the city." },
          { name: "La Rambla", description: "The city's famous tree-lined promenade runs from Placa de Catalunya down to the waterfront." },
          { name: "Gothic Quarter", description: "A maze of medieval streets around the cathedral, filled with squares, bars, and Roman remnants." },
          { name: "Casa Batllo", description: "Gaudi's dragon-scaled townhouse on Passeig de Gracia is a masterpiece of Catalan modernism." },
        ],
      },
      {
        name: "Madrid",
        pois: [
          { name: "Prado Museum", description: "Spain's premier art museum holds masterpieces by Velazquez, Goya, and other European masters." },
          { name: "Royal Palace", description: "The vast official residence of the Spanish monarchy opens its lavish state rooms to visitors." },
          { name: "Retiro Park", description: "Madrid's grand central park features a boating lake, the Crystal Palace, and shaded promenades." },
          { name: "Plaza Mayor", description: "The arcaded seventeenth-century square is the historic heart of Habsburg Madrid." },
          { name: "Gran Via", description: "Madrid's busiest avenue is lined with early twentieth-century buildings, theaters, and shops." },
        ],
      },
      {
        name: "Seville",
        pois: [
          { name: "Seville Cathedral and La Giralda", description: "The world's largest Gothic cathedral holds Columbus's tomb beneath its famous former-minaret bell tower." },
          { name: "Real Alcazar", description: "A stunning royal palace complex blending Mudejar and Renaissance styles with lush gardens." },
          { name: "Plaza de Espana", description: "A sweeping semicircular plaza with tiled alcoves for each Spanish province and a canal." },
          { name: "Barrio Santa Cruz", description: "The old Jewish quarter's whitewashed lanes and orange-tree courtyards define romantic Seville." },
          { name: "Metropol Parasol", description: "A giant wooden canopy known as Las Setas offers walkways and views above the old town." },
        ],
      },
      {
        name: "Granada",
        pois: [
          { name: "Alhambra", description: "The hilltop Moorish palace and fortress complex is among the most visited monuments in Europe." },
          { name: "Generalife Gardens", description: "The sultans' summer estate features terraced gardens, fountains, and views back to the Alhambra." },
          { name: "Albaicin", description: "Granada's ancient Moorish quarter climbs the hillside in a maze of whitewashed lanes." },
          { name: "Mirador de San Nicolas", description: "This famous viewpoint frames the Alhambra against the snowcapped Sierra Nevada at sunset." },
          { name: "Granada Cathedral and Royal Chapel", description: "The Renaissance cathedral adjoins the chapel where Ferdinand and Isabella are buried." },
        ],
      },
      {
        name: "Valencia",
        pois: [
          { name: "City of Arts and Sciences", description: "Calatrava's futuristic complex includes Europe's largest aquarium, a science museum, and an opera house." },
          { name: "Valencia Cathedral", description: "The Gothic cathedral claims to hold the Holy Grail and offers tower views over the old town." },
          { name: "Central Market", description: "One of Europe's largest fresh food markets operates under a beautiful modernist iron and glass hall." },
          { name: "Turia Gardens", description: "A former riverbed converted into a long green park curving through the entire city." },
          { name: "Malvarrosa Beach", description: "Valencia's broad city beach is lined with paella restaurants along a lively promenade." },
        ],
      },
    ],
  },
  {
    name: "United States",
    iso2: "US",
    tier: "major",
    region: "North America",
    climate: ["temperate", "hot", "sunny", "cold"],
    styles: ["road trip", "nature", "nightlife", "shopping", "family", "food"],
    bestTime: {
      months: ["May", "Jun", "Sep", "Oct"],
      summary: "Late spring and early fall offer comfortable weather in most regions and avoid peak summer crowds.",
    },
    seasonalNotes: {
      spring: "Mild weather returns to most of the country, with cherry blossoms in Washington and manageable crowds.",
      summer: "National parks and family destinations are packed and pricey, while the South and Southwest get very hot.",
      fall: "New England foliage peaks in October, and pleasant temperatures make cities and parks enjoyable nationwide.",
      winter: "Snow closes some park roads but powers major ski resorts, while Florida and the Southwest stay warm.",
    },
    vacationStyle: [
      "Iconic road trips across vast and varied landscapes",
      "Big-city breaks for entertainment, dining, and shopping",
      "National park adventures and theme park family holidays",
    ],
    pros: [
      "Enormous diversity of landscapes and cities",
      "World-class national parks",
      "Top entertainment and theme parks",
      "Excellent road trip infrastructure",
    ],
    cons: [
      "Long distances require flights or long drives",
      "Expensive healthcare and tipping culture",
      "Limited public transport outside big cities",
    ],
    cities: [
      {
        name: "New York City",
        pois: [
          { name: "Times Square", description: "The neon crossroads of Midtown pulses with billboards, Broadway theaters, and constant crowds." },
          { name: "Central Park", description: "An enormous green retreat in Manhattan with lakes, meadows, and famous film locations." },
          { name: "Statue of Liberty", description: "The harbor's copper icon of freedom is reached by ferry along with the Ellis Island museum." },
          { name: "Empire State Building", description: "The Art Deco skyscraper's observation decks deliver classic panoramas of the Manhattan skyline." },
          { name: "Metropolitan Museum of Art", description: "One of the world's greatest museums spans five thousand years of art beside Central Park." },
        ],
      },
      {
        name: "Los Angeles",
        pois: [
          { name: "Hollywood Walk of Fame", description: "Star-studded sidewalks along Hollywood Boulevard lead past the Chinese Theatre and Dolby Theatre." },
          { name: "Santa Monica Pier", description: "The historic pier features an amusement park, aquarium, and the symbolic end of Route 66." },
          { name: "Griffith Observatory", description: "A hilltop landmark offering free telescopes and the best views of the Hollywood Sign and city." },
          { name: "Universal Studios Hollywood", description: "A working film studio and theme park with rides based on blockbuster movie franchises." },
          { name: "Getty Center", description: "A hilltop museum pairs European art collections with striking architecture and gardens overlooking the city." },
        ],
      },
      {
        name: "Las Vegas",
        pois: [
          { name: "The Strip", description: "Four miles of mega-resorts, casinos, and shows form the world's most famous gambling boulevard." },
          { name: "Bellagio Fountains", description: "Choreographed water shows erupt over the Bellagio's lake in free performances throughout the day." },
          { name: "Fremont Street Experience", description: "Downtown's pedestrian mall features a huge LED canopy, vintage casinos, and zip lines overhead." },
          { name: "High Roller", description: "One of the world's tallest observation wheels rotates slowly above the Strip with panoramic views." },
          { name: "Red Rock Canyon", description: "A scenic desert conservation area of sandstone cliffs and hiking trails just outside the city." },
        ],
      },
      {
        name: "San Francisco",
        pois: [
          { name: "Golden Gate Bridge", description: "The Art Deco suspension bridge in international orange is the enduring symbol of the Bay Area." },
          { name: "Alcatraz Island", description: "Ferries visit the notorious former federal prison in the bay with an acclaimed audio tour." },
          { name: "Fisherman's Wharf", description: "A waterfront district of seafood stalls, souvenir shops, and sea lions lounging at Pier 39." },
          { name: "Golden Gate Park", description: "A vast urban park containing gardens, museums, and the California Academy of Sciences." },
          { name: "Cable Cars", description: "Historic manually operated cable cars still climb the city's famously steep streets." },
        ],
      },
      {
        name: "Miami",
        pois: [
          { name: "South Beach", description: "Miami's celebrated stretch of sand pairs turquoise water with a lively oceanfront promenade." },
          { name: "Art Deco Historic District", description: "Hundreds of preserved pastel Art Deco buildings line Ocean Drive and the surrounding streets." },
          { name: "Wynwood Walls", description: "An outdoor museum of large-scale street art anchors Miami's trendiest gallery neighborhood." },
          { name: "Little Havana", description: "Calle Ocho serves Cuban coffee, cigars, and live music in the heart of Cuban Miami." },
          { name: "Everglades National Park", description: "Airboat tours and boardwalk trails explore the vast subtropical wetland just west of the city." },
        ],
      },
    ],
  },
  {
    name: "Italy",
    iso2: "IT",
    tier: "major",
    region: "Europe",
    climate: ["mediterranean", "temperate", "sunny"],
    styles: ["food", "history", "culture", "museums", "romance", "wine"],
    bestTime: {
      months: ["Apr", "May", "Jun", "Sep", "Oct"],
      summary: "Spring and early fall combine warm weather with manageable crowds at the country's blockbuster sights.",
    },
    seasonalNotes: {
      spring: "April through June brings mild sunshine and blooming countryside, though Easter week is crowded in Rome.",
      summer: "July and August are hot, humid, and packed, with many local businesses closing in mid-August.",
      fall: "September and October offer grape harvests, warm seas, and steadily thinning crowds at major attractions.",
      winter: "Cities are quiet and affordable outside Christmas, while the Dolomites open for a long ski season.",
    },
    vacationStyle: [
      "Art and history city-hopping between world heritage centers",
      "Food and wine touring through celebrated regional cuisines",
      "Coastal escapes along dramatic Mediterranean shorelines",
    ],
    pros: [
      "Unmatched density of art and ancient sites",
      "Legendary regional food and wine",
      "Beautiful and varied coastlines",
      "Compact cities easy to explore on foot",
    ],
    cons: [
      "Severe overcrowding in Venice and Florence",
      "August heat and holiday closures",
      "Tourist-trap dining near major sights",
    ],
    cities: [
      {
        name: "Rome",
        pois: [
          { name: "Colosseum", description: "The largest amphitheater of the ancient world once staged gladiatorial games for fifty thousand spectators." },
          { name: "Vatican Museums and Sistine Chapel", description: "Vast papal collections culminate in Michelangelo's celebrated frescoed ceiling and Last Judgment." },
          { name: "Trevi Fountain", description: "Rome's grandest baroque fountain draws crowds tossing coins to ensure a return to the city." },
          { name: "Pantheon", description: "The best-preserved ancient Roman building features a remarkable concrete dome with an open oculus." },
          { name: "Roman Forum", description: "The ruined heart of ancient Rome spreads temples, arches, and basilicas below the Palatine Hill." },
        ],
      },
      {
        name: "Florence",
        pois: [
          { name: "Florence Cathedral", description: "Brunelleschi's massive red-tiled dome crowns the marble-clad Duomo dominating the city skyline." },
          { name: "Uffizi Gallery", description: "The premier museum of Renaissance art houses masterpieces by Botticelli, Leonardo, and Raphael." },
          { name: "Ponte Vecchio", description: "The medieval bridge over the Arno is lined with goldsmith shops as it has been for centuries." },
          { name: "Accademia Gallery", description: "Michelangelo's original David stands as the centerpiece of this small but essential museum." },
          { name: "Piazzale Michelangelo", description: "A hilltop terrace across the Arno delivers the classic panoramic view of Florence at sunset." },
        ],
      },
      {
        name: "Venice",
        pois: [
          { name: "St. Mark's Square and Basilica", description: "Venice's grand piazza fronts a gold-mosaic Byzantine basilica and the soaring Campanile." },
          { name: "Doge's Palace", description: "The Gothic seat of Venetian power connects to the old prisons via the Bridge of Sighs." },
          { name: "Grand Canal", description: "Venice's watery main street is best seen by vaporetto or gondola past palazzo facades." },
          { name: "Rialto Bridge", description: "The oldest bridge spanning the Grand Canal bustles with shops and market stalls nearby." },
          { name: "Murano and Burano", description: "Lagoon islands famous respectively for centuries-old glassblowing and brightly painted fishermen's houses." },
        ],
      },
      {
        name: "Milan",
        pois: [
          { name: "Milan Cathedral", description: "The immense Gothic Duomo bristles with marble spires and offers rooftop walks among its statues." },
          { name: "Galleria Vittorio Emanuele II", description: "A splendid nineteenth-century glass-domed arcade houses historic cafes and luxury boutiques." },
          { name: "The Last Supper", description: "Leonardo da Vinci's fragile masterpiece survives on a refectory wall at Santa Maria delle Grazie." },
          { name: "Sforza Castle", description: "The massive Renaissance fortress of Milan's ruling dynasty now contains several civic museums." },
          { name: "Teatro alla Scala", description: "The world's most famous opera house has premiered works by Verdi and Puccini since 1778." },
        ],
      },
      {
        name: "Naples",
        pois: [
          { name: "Pompeii", description: "The Roman city buried by Vesuvius in 79 AD offers an unmatched walk through ancient daily life." },
          { name: "Mount Vesuvius", description: "Trails climb to the crater rim of the volcano looming over the Bay of Naples." },
          { name: "National Archaeological Museum", description: "One of the world's great antiquities museums preserves the finest finds from Pompeii and Herculaneum." },
          { name: "Spaccanapoli", description: "The arrow-straight street slicing the historic center brims with churches, shrines, and pizzerias." },
          { name: "Castel dell'Ovo", description: "The seafront castle on a small islet anchors Naples's bay promenade with views to Vesuvius." },
        ],
      },
    ],
  },
  {
    name: "Turkey",
    iso2: "TR",
    tier: "major",
    region: "Middle East",
    climate: ["mediterranean", "hot", "sunny", "dry"],
    styles: ["history", "beaches", "food", "culture", "adventure", "budget"],
    bestTime: {
      months: ["Apr", "May", "Jun", "Sep", "Oct"],
      summary: "Spring and fall bring warm, dry weather ideal for both coastal resorts and inland sightseeing.",
    },
    seasonalNotes: {
      spring: "April and May offer wildflowers in Cappadocia and comfortable sightseeing before the summer heat arrives.",
      summer: "Coastal resorts are hot and busy, while inland sites like Ephesus can be scorching at midday.",
      fall: "September and October keep the sea warm and thin the crowds, with excellent conditions for ballooning.",
      winter: "Istanbul is chilly and rainy but uncrowded, and snow gives Cappadocia a striking off-season look.",
    },
    vacationStyle: [
      "Layered history touring from Byzantine to Ottoman empires",
      "Turquoise Coast beach resorts and gulet boat cruises",
      "Otherworldly landscapes and hot air balloon adventures",
    ],
    pros: [
      "Exceptional value for money",
      "Ancient sites spanning many civilizations",
      "Beautiful Mediterranean and Aegean coastlines",
      "Renowned cuisine and bazaar culture",
    ],
    cons: [
      "Currency volatility complicates budgeting",
      "Intense summer heat at inland ruins",
      "Persistent touts in tourist areas",
    ],
    cities: [
      {
        name: "Istanbul",
        pois: [
          { name: "Hagia Sophia", description: "The sixth-century Byzantine marvel has served as cathedral, museum, and mosque under its vast dome." },
          { name: "Blue Mosque", description: "The Sultan Ahmed Mosque earns its nickname from thousands of blue Iznik tiles inside." },
          { name: "Topkapi Palace", description: "The sprawling Ottoman palace displays imperial treasures and harem quarters above the Bosphorus." },
          { name: "Grand Bazaar", description: "One of the world's oldest covered markets holds thousands of shops along vaulted lanes." },
          { name: "Bosphorus Cruise", description: "Ferries glide between Europe and Asia past palaces, fortresses, and waterfront mansions." },
        ],
      },
      {
        name: "Cappadocia",
        pois: [
          { name: "Hot Air Balloon Rides", description: "Dawn balloon flights over the fairy chimneys are among the world's most famous aerial experiences." },
          { name: "Goreme Open-Air Museum", description: "Rock-cut Byzantine churches with vivid frescoes cluster in this UNESCO-listed monastic valley." },
          { name: "Uchisar Castle", description: "A honeycombed rock fortress rises above the plateau with the region's best panoramic viewpoint." },
          { name: "Derinkuyu Underground City", description: "An astonishing multi-level subterranean city once sheltered thousands of people from invaders." },
          { name: "Pasabag Valley", description: "Also called Monks Valley, it holds the most dramatic mushroom-capped fairy chimneys in Cappadocia." },
        ],
      },
      {
        name: "Antalya",
        pois: [
          { name: "Kaleici Old Town", description: "Ottoman-era houses and boutique hotels fill the walled quarter around the old Roman harbor." },
          { name: "Hadrian's Gate", description: "A triple-arched Roman gate built for the emperor's visit still marks the old city entrance." },
          { name: "Duden Waterfalls", description: "The lower falls plunge dramatically off a cliff directly into the Mediterranean Sea." },
          { name: "Konyaalti Beach", description: "A long pebble beach stretches beneath the Taurus Mountains west of the city center." },
          { name: "Aspendos Theater", description: "One of the best-preserved Roman theaters anywhere still hosts performances outside Antalya." },
        ],
      },
      {
        name: "Izmir",
        pois: [
          { name: "Ephesus", description: "The magnificently preserved Roman city nearby features the Library of Celsus and a grand theater." },
          { name: "Kordon Promenade", description: "Izmir's waterfront esplanade fills each evening with strollers, cyclists, and seaside cafes." },
          { name: "Konak Square and Clock Tower", description: "The ornate Ottoman clock tower of 1901 is the symbol of the city's central square." },
          { name: "Kemeralti Bazaar", description: "A vast historic market district winds through caravanserais, mosques, and coffeehouses." },
          { name: "Agora of Smyrna", description: "The excavated Roman marketplace of ancient Smyrna sits in the middle of the modern city." },
        ],
      },
      {
        name: "Bodrum",
        pois: [
          { name: "Bodrum Castle", description: "The Castle of St. Peter guards the harbor and houses the Museum of Underwater Archaeology." },
          { name: "Mausoleum of Halicarnassus", description: "Remains of one of the Seven Wonders of the Ancient World lie near the town center." },
          { name: "Bodrum Amphitheater", description: "The ancient hillside theater seats thousands and overlooks the town and the castle bay." },
          { name: "Bodrum Marina", description: "A stylish yacht harbor lined with restaurants and bars anchors the town's whitewashed waterfront." },
          { name: "Gulet Boat Trips", description: "Traditional wooden sailing boats cruise the Aegean coast to secluded swimming coves." },
        ],
      },
    ],
  },
  {
    name: "Mexico",
    iso2: "MX",
    tier: "major",
    region: "North America",
    climate: ["hot", "tropical", "sunny", "dry"],
    styles: ["beaches", "food", "history", "culture", "nightlife", "budget"],
    bestTime: {
      months: ["Dec", "Jan", "Feb", "Mar", "Apr"],
      summary: "The dry season from December to April brings sunny, comfortable weather to beaches and highlands alike.",
    },
    seasonalNotes: {
      spring: "March and April stay dry and warm, though beach resorts surge with spring break crowds and prices.",
      summer: "The rainy season brings hot, humid afternoons with brief downpours, plus lower prices outside July holidays.",
      fall: "September and October are the heart of hurricane season on both coasts, but deals are plentiful.",
      winter: "Peak season delivers ideal dry weather everywhere, with the highest prices around Christmas and New Year.",
    },
    vacationStyle: [
      "All-inclusive beach resorts on Caribbean and Pacific coasts",
      "Ancient ruins and colonial cities steeped in history",
      "Food-focused travel through celebrated regional cuisines",
    ],
    pros: [
      "Excellent value for accommodation and food",
      "World-class beaches on two coasts",
      "Remarkable Maya and Aztec archaeological sites",
      "Vibrant food scene recognized by UNESCO",
    ],
    cons: [
      "Safety concerns in certain regions",
      "Hurricane risk from June to November",
      "Heavily touristed resort zones lack local character",
    ],
    cities: [
      {
        name: "Mexico City",
        pois: [
          { name: "Zocalo", description: "One of the world's largest city squares is flanked by the Metropolitan Cathedral and National Palace." },
          { name: "Teotihuacan", description: "The immense Pyramids of the Sun and Moon rise over an ancient city just outside the capital." },
          { name: "Frida Kahlo Museum", description: "The artist's cobalt-blue Coyoacan home preserves her studio, artworks, and personal belongings." },
          { name: "Chapultepec Park and Castle", description: "A vast urban forest holds museums, a zoo, and the only royal castle in the Americas." },
          { name: "National Museum of Anthropology", description: "Mexico's flagship museum displays the Aztec Sun Stone and treasures of pre-Hispanic civilizations." },
        ],
      },
      {
        name: "Cancun",
        pois: [
          { name: "Hotel Zone Beaches", description: "A long barrier island of white sand and turquoise Caribbean water hosts the famous resort strip." },
          { name: "Chichen Itza", description: "The iconic Maya pyramid of El Castillo anchors one of the New Seven Wonders of the World." },
          { name: "Isla Mujeres", description: "A laid-back island a short ferry ride away offers calm beaches and golf cart exploring." },
          { name: "Underwater Museum of Art", description: "Hundreds of submerged sculptures form an artificial reef for snorkelers and divers." },
          { name: "Xcaret Park", description: "An eco-archaeological park combines underground rivers, wildlife, and Mexican cultural performances." },
        ],
      },
      {
        name: "Tulum",
        pois: [
          { name: "Tulum Archaeological Zone", description: "Maya ruins perch dramatically on cliffs above a white-sand Caribbean beach." },
          { name: "Gran Cenote", description: "A crystal-clear limestone sinkhole near town is ideal for swimming and snorkeling among formations." },
          { name: "Tulum Beach", description: "Powdery sand and boutique beach clubs stretch along one of Mexico's most photogenic coastlines." },
          { name: "Sian Ka'an Biosphere Reserve", description: "A vast UNESCO wetland reserve offers boat tours through lagoons, mangroves, and Maya canals." },
          { name: "Coba Ruins", description: "Jungle paths and rentable bicycles connect the pyramids of this sprawling ancient Maya city." },
        ],
      },
      {
        name: "Puerto Vallarta",
        pois: [
          { name: "Malecon", description: "The mile-long oceanfront boardwalk features sculptures, street performers, and Pacific sunset views." },
          { name: "Zona Romantica", description: "The old town's cobblestone streets hold galleries, cafes, and the city's liveliest nightlife." },
          { name: "Playa de los Muertos", description: "The city's most popular beach bustles with pier departures, palapa restaurants, and vendors." },
          { name: "Our Lady of Guadalupe Church", description: "The crown-topped parish church is the emblem of Puerto Vallarta's skyline." },
          { name: "Marietas Islands", description: "Boat tours visit these protected islands famous for the hidden Lovers Beach and wildlife." },
        ],
      },
      {
        name: "Oaxaca",
        pois: [
          { name: "Monte Alban", description: "The mountaintop capital of the ancient Zapotecs overlooks the Oaxaca valleys from leveled plazas." },
          { name: "Santo Domingo Church", description: "A baroque church with a gilded interior anchors Oaxaca's most beautiful colonial street." },
          { name: "Benito Juarez Market", description: "The central market overflows with mole pastes, chapulines, mezcal, and Oaxacan crafts." },
          { name: "Hierve el Agua", description: "Petrified mineral waterfalls and cliffside springs create natural infinity pools outside the city." },
          { name: "Mitla", description: "The Zapotec religious center is famed for intricate geometric stone mosaics unique in Mexico." },
        ],
      },
    ],
  },
  {
    name: "Germany",
    iso2: "DE",
    tier: "major",
    region: "Europe",
    climate: ["temperate", "cold", "rainy"],
    styles: ["history", "culture", "museums", "nightlife", "road trip", "food"],
    bestTime: {
      months: ["May", "Jun", "Sep", "Oct", "Dec"],
      summary: "Late spring and early fall offer mild weather, while December draws visitors to famous Christmas markets.",
    },
    seasonalNotes: {
      spring: "Beer gardens reopen in May as temperatures warm, with pleasant sightseeing before summer crowds build.",
      summer: "Long daylight hours and festivals make summer lively, though rain showers remain possible any week.",
      fall: "Oktoberfest dominates Munich from late September, and autumn colors reward Rhine and Bavarian road trips.",
      winter: "Christmas markets light up city squares from late November, and Bavarian Alps resorts open for skiing.",
    },
    vacationStyle: [
      "City breaks rich in history, museums, and nightlife",
      "Scenic road trips past castles and river valleys",
      "Beer, festival, and Christmas market culture trips",
    ],
    pros: [
      "Efficient trains and famous autobahns",
      "Dense concentration of castles and museums",
      "World-renowned beer and festival culture",
      "Clean, safe, and well-organized cities",
    ],
    cons: [
      "Unpredictable and often gray weather",
      "Many shops closed on Sundays",
      "Peak-season Oktoberfest prices in Munich",
    ],
    cities: [
      {
        name: "Berlin",
        pois: [
          { name: "Brandenburg Gate", description: "The neoclassical gate is Germany's most famous landmark and a symbol of reunification." },
          { name: "East Side Gallery", description: "The longest surviving stretch of the Berlin Wall is covered in celebrated murals." },
          { name: "Museum Island", description: "Five world-class museums, including the Pergamon, occupy a UNESCO-listed island in the Spree." },
          { name: "Reichstag Building", description: "Germany's parliament welcomes visitors into Norman Foster's glass dome for city views." },
          { name: "Checkpoint Charlie", description: "The famous Cold War border crossing is preserved with an open-air exhibition on divided Berlin." },
        ],
      },
      {
        name: "Munich",
        pois: [
          { name: "Marienplatz", description: "Munich's central square is dominated by the New Town Hall and its famous glockenspiel show." },
          { name: "English Garden", description: "One of the world's largest urban parks features beer gardens and river surfers on the Eisbach." },
          { name: "Nymphenburg Palace", description: "The Bavarian royals' baroque summer palace spreads through formal gardens on the city's edge." },
          { name: "Hofbraeuhaus", description: "The world's most famous beer hall has served steins and brass-band music since 1589." },
          { name: "Neuschwanstein Castle", description: "King Ludwig II's fairy-tale castle in the Alps is a classic day trip from Munich." },
        ],
      },
      {
        name: "Hamburg",
        pois: [
          { name: "Elbphilharmonie", description: "The wave-topped concert hall on the harbor offers a free public plaza with panoramic views." },
          { name: "Speicherstadt", description: "The world's largest historic warehouse district lines canals with red-brick Gothic facades." },
          { name: "Miniatur Wunderland", description: "The world's largest model railway recreates entire countries in astonishing miniature detail." },
          { name: "Reeperbahn", description: "St. Pauli's famous nightlife mile mixes clubs, theaters, and Beatles history." },
          { name: "Harbor Boat Tours", description: "Cruises weave among container terminals and locks in one of Europe's busiest ports." },
        ],
      },
      {
        name: "Cologne",
        pois: [
          { name: "Cologne Cathedral", description: "The twin-spired Gothic cathedral took six centuries to build and dominates the city skyline." },
          { name: "Old Town", description: "Reconstructed gabled houses and brauhaus taverns cluster along the Rhine embankment." },
          { name: "Hohenzollern Bridge", description: "The railway bridge festooned with love locks frames the classic cathedral photograph." },
          { name: "Museum Ludwig", description: "A leading modern art museum beside the cathedral holds major Picasso and pop art collections." },
          { name: "Rhine Cruises", description: "Boats depart the old town for scenic trips along the castle-lined Rhine valley." },
        ],
      },
      {
        name: "Frankfurt",
        pois: [
          { name: "Roemerberg", description: "The rebuilt medieval square with half-timbered houses is the historic heart of Frankfurt." },
          { name: "Main Tower", description: "The only Frankfurt skyscraper with a public viewing platform overlooks the banking skyline." },
          { name: "Staedel Museum", description: "One of Germany's most important art museums spans seven centuries of European masters." },
          { name: "Museum Embankment", description: "A dozen museums line the south bank of the Main in a compact cultural district." },
          { name: "Palmengarten", description: "The city's expansive botanical garden shelters tropical greenhouses and themed landscapes." },
        ],
      },
    ],
  },
  {
    name: "United Kingdom",
    iso2: "GB",
    tier: "major",
    region: "Europe",
    climate: ["temperate", "rainy", "cold"],
    styles: ["history", "culture", "museums", "nightlife", "food"],
    bestTime: {
      months: ["May", "Jun", "Jul", "Aug", "Sep"],
      summary: "Late spring through early fall offers the warmest weather and longest daylight for sightseeing.",
    },
    seasonalNotes: {
      spring: "Gardens bloom and days lengthen from April, with changeable weather requiring layers and a rain jacket.",
      summer: "The warmest months bring festivals like Edinburgh Fringe, but also peak prices and school holiday crowds.",
      fall: "September stays mild with thinning crowds, while October brings autumn color to parks and the countryside.",
      winter: "Short, damp days are offset by Christmas lights, cozy pubs, and low-season hotel rates.",
    },
    vacationStyle: [
      "City breaks around royal landmarks and free museums",
      "Historic touring through castles, cathedrals, and old towns",
      "Pub culture, theater, and live music experiences",
    ],
    pros: [
      "Many world-class museums are free",
      "Deep royal and literary heritage",
      "No language barrier for English speakers",
      "Extensive rail links between cities",
    ],
    cons: [
      "Frequently gray and rainy weather",
      "London is notably expensive",
      "Train fares are high without advance booking",
    ],
    cities: [
      {
        name: "London",
        pois: [
          { name: "British Museum", description: "The free national museum holds the Rosetta Stone and treasures from every ancient civilization." },
          { name: "Tower of London", description: "The historic riverside fortress guards the Crown Jewels and a thousand years of dark history." },
          { name: "Buckingham Palace", description: "The monarch's official residence stages the famous Changing of the Guard ceremony." },
          { name: "Westminster Abbey and Big Ben", description: "The coronation church stands beside Parliament and the world's most famous clock tower." },
          { name: "London Eye", description: "The giant riverside observation wheel delivers slow-turning panoramas over the Thames and Westminster." },
        ],
      },
      {
        name: "Edinburgh",
        pois: [
          { name: "Edinburgh Castle", description: "The fortress on Castle Rock dominates the skyline and houses Scotland's crown jewels." },
          { name: "Royal Mile", description: "The historic spine of the Old Town runs from the castle down to Holyrood Palace." },
          { name: "Arthur's Seat", description: "An extinct volcano in Holyrood Park offers a short hike to sweeping city views." },
          { name: "Palace of Holyroodhouse", description: "The monarch's official Scottish residence preserves apartments linked to Mary, Queen of Scots." },
          { name: "National Museum of Scotland", description: "A free museum spans Scottish history, natural science, and world cultures under a grand atrium." },
        ],
      },
      {
        name: "Bath",
        pois: [
          { name: "Roman Baths", description: "Remarkably preserved ancient bathing complexes still steam around Britain's only hot spring." },
          { name: "Bath Abbey", description: "The soaring Gothic abbey with its fan-vaulted ceiling anchors the city center." },
          { name: "Royal Crescent", description: "A sweeping arc of thirty Georgian townhouses is the finest example of Palladian Bath." },
          { name: "Pulteney Bridge", description: "One of the few bridges in the world lined with shops spans the River Avon." },
          { name: "Thermae Bath Spa", description: "A modern spa lets visitors bathe in the city's natural thermal waters with rooftop views." },
        ],
      },
      {
        name: "York",
        pois: [
          { name: "York Minster", description: "One of northern Europe's largest Gothic cathedrals holds magnificent medieval stained glass." },
          { name: "The Shambles", description: "An overhanging medieval shopping street is among the best preserved in Europe." },
          { name: "City Walls", description: "A two-mile circuit of medieval walls provides an elevated walk around the historic core." },
          { name: "Jorvik Viking Centre", description: "A ride through reconstructed Viking-age York sits atop the actual excavation site." },
          { name: "National Railway Museum", description: "The free museum displays legendary locomotives including the Flying Scotsman and Mallard." },
        ],
      },
      {
        name: "Liverpool",
        pois: [
          { name: "The Beatles Story", description: "An immersive museum at Albert Dock traces the band's rise from Liverpool clubs to global fame." },
          { name: "Royal Albert Dock", description: "Restored Victorian warehouses around the dock now house museums, galleries, and restaurants." },
          { name: "Cavern Club", description: "The legendary Mathew Street cellar venue where the Beatles played still hosts live music daily." },
          { name: "Liverpool Cathedral", description: "Britain's largest cathedral offers tower views across the city and the Mersey." },
          { name: "Anfield Stadium", description: "Liverpool FC's storied home offers tours of the dressing rooms, tunnel, and famous Kop stand." },
        ],
      },
    ],
  },
  {
    name: "Japan",
    iso2: "JP",
    tier: "major",
    region: "Asia",
    climate: ["temperate", "humid", "snowy"],
    styles: ["food", "culture", "history", "shopping", "nature", "skiing"],
    bestTime: {
      months: ["Mar", "Apr", "May", "Oct", "Nov"],
      summary: "Spring cherry blossoms and fall foliage are the classic seasons, with mild weather and vivid scenery.",
    },
    seasonalNotes: {
      spring: "Cherry blossom season in late March and April is spectacular but brings peak crowds and hotel prices.",
      summer: "June rains give way to hot, humid weather, festival fireworks, and the official Mount Fuji climbing season.",
      fall: "October and November bring crisp air and brilliant autumn foliage to temples and mountain valleys.",
      winter: "Hokkaido and the Japan Alps offer world-class powder skiing, while cities stay mostly dry and cold.",
    },
    vacationStyle: [
      "Temple and shrine touring through ancient capitals",
      "Futuristic city immersion in food, tech, and shopping",
      "Seasonal nature travel for blossoms, foliage, and powder snow",
    ],
    pros: [
      "Superb food at every price point",
      "Punctual and extensive rail network",
      "Exceptionally safe and clean",
      "Unique blend of tradition and modernity",
    ],
    cons: [
      "Language barrier outside major tourist areas",
      "Peak-season crowds during cherry blossom weeks",
      "Long flights and jet lag for Western visitors",
    ],
    cities: [
      {
        name: "Tokyo",
        pois: [
          { name: "Senso-ji Temple", description: "Tokyo's oldest temple in Asakusa is approached through the giant Kaminarimon lantern gate." },
          { name: "Shibuya Crossing", description: "The world's busiest pedestrian scramble floods with people beneath giant video screens." },
          { name: "Tokyo Skytree", description: "Japan's tallest structure offers observation decks with views stretching to Mount Fuji." },
          { name: "Meiji Shrine", description: "A serene forested Shinto shrine honors Emperor Meiji beside the fashion district of Harajuku." },
          { name: "Tsukiji Outer Market", description: "The lively market streets serve fresh sushi, seafood bowls, and Japanese kitchenware." },
        ],
      },
      {
        name: "Kyoto",
        pois: [
          { name: "Fushimi Inari Shrine", description: "Thousands of vermilion torii gates tunnel up the wooded mountainside behind the shrine." },
          { name: "Kinkaku-ji", description: "The Golden Pavilion's gilded reflection in its mirror pond is Kyoto's most famous image." },
          { name: "Arashiyama Bamboo Grove", description: "A walking path threads through towering bamboo near riverside temples and monkey park." },
          { name: "Kiyomizu-dera", description: "The hillside temple's wooden stage juts over a valley with sweeping views of Kyoto." },
          { name: "Gion District", description: "Kyoto's historic geisha quarter preserves wooden teahouses along atmospheric stone lanes." },
        ],
      },
      {
        name: "Osaka",
        pois: [
          { name: "Osaka Castle", description: "The reconstructed white-and-gold castle rises from massive stone walls amid a moated park." },
          { name: "Dotonbori", description: "Osaka's neon-lit canal district is the heart of the city's famous street food culture." },
          { name: "Universal Studios Japan", description: "The blockbuster theme park features Super Nintendo World and the Wizarding World of Harry Potter." },
          { name: "Umeda Sky Building", description: "A rooftop Floating Garden Observatory spans twin towers with open-air city panoramas." },
          { name: "Kuromon Ichiba Market", description: "The covered market nicknamed Osaka's kitchen grills seafood and wagyu for strolling visitors." },
        ],
      },
      {
        name: "Hiroshima",
        pois: [
          { name: "Peace Memorial Park and Museum", description: "The moving memorial complex documents the atomic bombing and advocates for peace." },
          { name: "Atomic Bomb Dome", description: "The skeletal ruin preserved beside the river is a UNESCO-listed symbol of the bombing." },
          { name: "Miyajima Island", description: "The floating torii gate of Itsukushima Shrine appears to rise from the sea at high tide." },
          { name: "Hiroshima Castle", description: "The reconstructed carp castle houses a history museum within its moated grounds." },
          { name: "Shukkei-en Garden", description: "A classical landscape garden compresses miniature valleys and bridges around a central pond." },
        ],
      },
      {
        name: "Nara",
        pois: [
          { name: "Nara Park", description: "Over a thousand free-roaming sacred deer bow to visitors for crackers throughout the park." },
          { name: "Todai-ji Temple", description: "A colossal bronze Great Buddha sits within one of the world's largest wooden buildings." },
          { name: "Kasuga Taisha", description: "Thousands of stone and bronze lanterns line the paths of this ancient forest shrine." },
          { name: "Kofuku-ji Temple", description: "The five-story pagoda of this historic temple is a defining landmark of Nara." },
          { name: "Naramachi", description: "The former merchant district preserves narrow lanes of traditional machiya townhouses and shops." },
        ],
      },
    ],
  },
  {
    name: "Greece",
    iso2: "GR",
    tier: "major",
    region: "Europe",
    climate: ["mediterranean", "sunny", "hot", "dry"],
    styles: ["beaches", "history", "food", "romance", "nightlife", "relaxation"],
    bestTime: {
      months: ["May", "Jun", "Sep", "Oct"],
      summary: "Late spring and early fall combine warm seas and sunshine with fewer crowds than peak summer.",
    },
    seasonalNotes: {
      spring: "Wildflowers and mild weather make April and May ideal for ruins, though the sea is still cool.",
      summer: "July and August are hot, expensive, and crowded, with strong meltemi winds in the Cyclades.",
      fall: "September and October keep the sea warm for swimming while island crowds and prices drop steadily.",
      winter: "Many island hotels close, but Athens stays mild and uncrowded with bargain rates.",
    },
    vacationStyle: [
      "Island-hopping among whitewashed villages and beaches",
      "Ancient history touring at classical ruins",
      "Slow seaside holidays built around tavernas and sunsets",
    ],
    pros: [
      "Iconic islands with distinct characters",
      "Foundational ancient sites and museums",
      "Warm, swimmable seas into October",
      "Welcoming taverna food culture",
    ],
    cons: [
      "Severe overtourism on Santorini in summer",
      "Ferry schedules vulnerable to wind delays",
      "Many island businesses shut in winter",
    ],
    cities: [
      {
        name: "Athens",
        pois: [
          { name: "Acropolis and Parthenon", description: "The sacred rock crowned by the Parthenon is the defining monument of classical Greece." },
          { name: "Acropolis Museum", description: "A striking modern museum displays the Parthenon sculptures above excavated city ruins." },
          { name: "Plaka", description: "The old town's neoclassical lanes wind beneath the Acropolis past tavernas and shops." },
          { name: "Ancient Agora", description: "The civic heart of ancient Athens preserves the Temple of Hephaestus and a restored stoa." },
          { name: "Syntagma Square", description: "Parliament's evzone guards perform their ceremonial changing before the Tomb of the Unknown Soldier." },
        ],
      },
      {
        name: "Santorini",
        pois: [
          { name: "Oia", description: "The caldera-edge village of blue domes draws crowds for the world's most famous sunset." },
          { name: "Fira", description: "The clifftop capital stacks white buildings above the volcanic caldera with cable car access." },
          { name: "Akrotiri", description: "A Minoan town preserved under volcanic ash is often called the Pompeii of the Aegean." },
          { name: "Red Beach", description: "Dramatic rust-colored cliffs frame this famous volcanic sand beach near Akrotiri." },
          { name: "Caldera Boat Cruises", description: "Catamaran trips circle the volcanic islands with stops at hot springs and swimming coves." },
        ],
      },
      {
        name: "Mykonos",
        pois: [
          { name: "Mykonos Town", description: "The Cycladic capital's whitewashed maze of lanes brims with boutiques, bars, and bougainvillea." },
          { name: "Little Venice", description: "Balconied houses hang over the water in the island's most photogenic sunset quarter." },
          { name: "Kato Mili Windmills", description: "A row of sixteenth-century windmills stands on the hill above the harbor." },
          { name: "Paradise Beach", description: "The island's famous party beach pairs golden sand with day-to-night beach clubs." },
          { name: "Delos", description: "A short boat trip reaches the sacred island's extensive ruins, birthplace of Apollo in myth." },
        ],
      },
      {
        name: "Crete",
        pois: [
          { name: "Palace of Knossos", description: "The partially reconstructed Minoan palace near Heraklion is linked to the labyrinth legend." },
          { name: "Chania Old Town", description: "A Venetian harbor with a lighthouse anchors Crete's most atmospheric historic quarter." },
          { name: "Elafonissi Beach", description: "Pink-tinged sand and shallow turquoise lagoons make this Crete's most celebrated beach." },
          { name: "Samaria Gorge", description: "A ten-mile hike descends Europe's longest gorge from the mountains to the Libyan Sea." },
          { name: "Balos Lagoon", description: "A wild lagoon of white sand and shifting blues is reached by boat or a rough track." },
        ],
      },
      {
        name: "Rhodes",
        pois: [
          { name: "Rhodes Old Town", description: "Europe's largest inhabited medieval town lies within massive walls built by the Knights of St. John." },
          { name: "Palace of the Grand Master", description: "The restored knights' castle dominates the old town with grand halls and mosaics." },
          { name: "Street of the Knights", description: "A remarkably preserved medieval street lined with the inns of the crusader orders." },
          { name: "Lindos Acropolis", description: "Ancient temple ruins crown a cliff above a whitewashed village and twin beaches." },
          { name: "Anthony Quinn Bay", description: "A small emerald cove framed by rocky cliffs is one of the island's favorite swimming spots." },
        ],
      },
    ],
  },
]
