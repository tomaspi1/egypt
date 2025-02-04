export const nav = [
  {
    id: 1,
    text: "Starý Egypt",
    url: "/",
  },
  // Můžeš přidat další položky do navigace, pokud chceš
];

export const blog = [
  {
    id: 1,
    title: "Oslava života v Egyptě",
    desc: "Tradice Egypta nás učí vděčnosti a úctě k životu. Co všechno přežilo tisíce let?<br><br>Starověký Egypt, jedna z nejvíce fascinujících a mystických civilizací historie, není známý jen svou monumentální architekturou, královskými faraony a posvátnými pyramidami. Tento národ měl hluboký a vděčný vztah k životu – a právě tento pohled na existenci byl klíčem k jejich zázrakům, které dokázali stvořit.<br><br>V egyptské kultuře život a smrt nebyly oddělené. Smrt byla pouze přechodem do dalšího stavu bytí, a proto byla úcta k životu součástí každodenního chování.",
    category: "Kultura",
    cover: "../images/blogs/b10.jpg",
    date: "20. LEDNA 2025",
  },
  {
    id: 2,
    title: "Mocní bohové Egypta a jejich vliv",
    desc: "<br>Poznej příběhy egyptských bohů a zjisti, jak nás mohou inspirovat k lepšímu životu...</br>",
    category: "Mytologie",
    cover: "../images/blogs/b9.jpg",
    date: "22. LEDNA 2025",
  },
  {
    id: 3,
    title: "Cesta faraona k věčnosti",
    desc: "<br>Co nás učí příprava na posmrtný život faraónů? Jaké hodnoty je třeba osvojit?...</br>",
    category: "Duchovno",
    cover: "../images/blogs/b8.jpg",
    date: "23. LEDNA 2025",
  },
  {
    id: 4,
    title: "ODHAL TAJEMSTVÍ STARÝCH PYRAMID",
    desc: "<br>Každá pyramida je víc než kámen. Je to portál k osvícení, který nás učí, jak stavět naši vlastní cestu.</br>",
    category: "Historie",
    cover: "../images/blogs/b7.jpg",
    date: "24. LEDNA 2025",
  },
  {
    id: 5,
    title: "Síla Spojení",
    desc: "<br>Spojené síly se stávají nezastavitelnými. Stejně jako bohové v Egyptě, tvoříme osud ve světě her.</br>",
    category: "Bohové",
    cover: "../images/blogs/b5.jpg",
    date: "28. LEDNA 2025",
  },
  {
    id: 6,
    title: "Cesta k dokonalosti",
    desc: "<br>Spoj se s vesmírem a objev svou pravou sílu. Buď jako vážka, která vždy ví, kdy a kde být, žij v souladu s vesmírem.</br>",
    category: "Vesmír",
    cover: "../images/blogs/b6.jpg",
    date: "25. LEDNA 2025",
  },
  {
    id: 7,
    title: "Cesta k Hábitu Nefertiti: Tajemství proměny",
    desc: "<p>Každý krok tě přibližuje k moudrosti. Zasvěceni se stávají mistry, to je poselství faraonů.</p>",
    category: "Vesmír",
    cover: "../images/blogs/b4.jpg",
    date: "2. ÚNORA 2025",
  },
  {
    id: 8,
    title: "HROBKY KRÁLŮ: Začátek Velké Cesty",
    desc: "<br>Zůstaň klidný, když se ztrácíš. V hrobkách a chrámech najdeš odpovědi, stejně jako Nil ti ukáže cestu životem.</br>",
    category: "Hrobky",
    cover: "../images/blogs/b3.jpg",
    date: "3. ÚNORA 2025",
  },
  {
    id: 9,
    title: "JUPITER A VODOPÁDY: VÉVODA FARAÓNŮ",
    desc: "<br>Vesmír je plný bohatství. Zasvěceni v sílu změny, stáváme se nezastavitelnými, stejně jako bohové, kteří tvoří osud.</br>",
    category: "Příroda",
    cover: "../images/blogs/b2.jpg",
    date: "4. ÚNORA 2025",
  },
  {
    id: 10,
    title: "PRVNÍ PŘÍSPĚVEK Z NILE: Cesta za Moudrostí",
    desc: "<p>Když pohlédneš na Nil, pochopíš propojení všeho v tomto vesmíru. Naučí tě klidu v bouřích života, jako bohové, co čelí věčnosti...</p>",
    category: "Příroda",
    cover: "../images/blogs/b1.jpg",
    date: "4. ÚNORA 2025",
  },
];

export const getArticleById = (id) => {
  // Tato funkce hledá článek podle ID a vrátí ho
  return blog.find(item => item.id === id);
}

export const category = [
  {
    id: 1,
    category: "Poznej krásy Egypta",
    cover: "../images/category/ca1.png",
  },
  {
    id: 2,
    category: "Pluj s námi po Nilu",
    cover: "../images/category/ca2.png",
  },
  {
    id: 3,
    category: "Věčná moudrost",
    cover: "../images/category/ca3.png",
  },
  {
    id: 4,
    category: "Síla a odvaha",
    cover: "../images/category/ca4.png",
  },
  {
    id: 5,
    category: "Zábava ve stínu pyramid",
    cover: "../images/category/ca5.png",
  },
  {
    id: 6,
    category: "Mocní faraoni",
    cover: "../images/category/ca6.png",
  },
  {
    id: 7,
    category: "Světlo je vždy na konci tunelu",
    cover: "../images/category/ca7.png",
  },
  {
    id: 8,
    category: "Starodávné technologie",
    cover: "../images/category/ca8.png",
  },
];
