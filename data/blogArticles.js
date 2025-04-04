const blogArticles = [
  {
    id: 1,
    name: "Bombora",
    title:
      "Bombora : Une immersion culinaire aux saveurs du Pacifique en plein cœur de Lille",
    date: "Mardi 25 mars 2025",
    img: "https://bombora.fr/wp-content/uploads/2022/09/23_menu-bdb-2-scaled.jpg",
    isLiked: false,
    nbLikes: 23,
    comments: [
      {
        author: "Léa",
        avatar: "assets/icons/icons8-avatar-32.png",
        comment:
          "Une vraie pépite ! L’ambiance est géniale et les plats sont bien travaillés.",
      },
      {
        author: "Thomas",
        avatar: "assets/icons/icons8-avatar-32.png",
        comment:
          "Super découverte grâce à cet article, les saveurs sont au rendez-vous !",
      },
    ],
    content: `Si vous cherchez une expérience gastronomique dépaysante à deux pas du campus de la Wild Code School, Bombora est une adresse à ne pas manquer. Ce restaurant lillois vous embarque pour un voyage culinaire inspiré des saveurs du Pacifique, entre cuisine asiatique raffinée et influences australiennes.<br><br> Dès l’entrée, Bombora séduit par son ambiance exotique et chaleureuse. Le décor mêle bois naturel, plantes tropicales et touches maritimes, créant une atmosphère propice à l’évasion. Que ce soit pour un déjeuner entre étudiants ou un dîner plus posé, l’accueil y est toujours convivial et le service attentif.<br><br> Le menu de Bombora est une véritable ode aux produits frais et aux mariages de saveurs audacieux. On y retrouve des plats signatures comme le poke bowl au saumon mariné, des baos moelleux garnis de viandes fondantes ou encore des tacos revisités aux influences asiatiques. Les amateurs de cuisine végétarienne ne sont pas en reste avec des options savoureuses et équilibrées. Les desserts valent aussi le détour, avec des créations gourmandes mêlant fruits exotiques et textures surprenantes. Mention spéciale pour leur cheesecake au yuzu, une véritable explosion de fraîcheur en bouche !<br><br> Bombora propose une cuisine inventive à des prix accessibles, idéale pour une pause déjeuner ou un repas entre amis sans exploser son budget. Le menu du midi offre des formules intéressantes, permettant de découvrir plusieurs spécialités sans se ruiner. Si vous êtes en quête d’une adresse qui allie exotisme, convivialité et gourmandise, Bombora est assurément un spot à tester. Alors, prêt à embarquer pour un voyage culinaire sans quitter Lille ?`,
  },
  {
    id: 2,
    name: "Alexens",
    title: "Alexens : Une adresse gourmande et raffinée au cœur de Lille",
    date: "Mardi 25 mars 2025",
    img: "https://www.alexens.com/wp-content/uploads/2020/10/Capture-d%E2%80%99%C3%A9cran-2020-09-02-%C3%A0-10.18.03.png",
    isLiked: false,
    nbLikes: 17,
    comments: [
      {
        author: "Céline",
        avatar: "assets/icons/icons8-avatar-32.png",
        comment:
          "J’y suis allée sur un coup de tête et je ne regrette pas, tout était délicieux !",
      },
      {
        author: "David",
        avatar: "assets/icons/icons8-avatar-32.png",
        comment:
          "Excellente adresse pour une cuisine raffinée et savoureuse, merci pour le bon plan !",
      },
    ],
    content: `Envie d’une pause gastronomique alliant finesse et convivialité à quelques minutes du campus de la Wild Code School ? Le restaurant Alexens, situé en plein cœur de Lille, propose une cuisine bistronomique qui séduira les amateurs de saveurs raffinées et de produits de qualité.<br><br> Dès votre arrivée chez Alexens, vous serez charmé par son cadre élégant et cosy. La décoration, mêlant touches modernes et éléments plus traditionnels, crée une atmosphère idéale aussi bien pour un déjeuner entre amis qu’un dîner plus sophistiqué. Le service y est attentionné et contribue pleinement à l’expérience agréable que propose l’établissement.<br><br> Alexens mise sur des ingrédients frais et de saison pour offrir une carte évolutive, où chaque plat est soigneusement préparé pour sublimer les produits. Vous y trouverez des mets raffinés tels que des viandes tendres et savoureuses, des poissons délicatement assaisonnés et des accompagnements travaillés avec créativité. Les plats sont généreux, parfaitement équilibrés et joliment dressés, ce qui ajoute au plaisir des papilles un véritable régal pour les yeux. Les amateurs de sucré ne seront pas en reste avec une sélection de desserts maison gourmands et délicats. Que ce soit une tarte aux fruits de saison revisitée ou un fondant au chocolat à tomber, chaque bouchée est une véritable invitation à la gourmandise.<br><br> Avec son excellent rapport qualité-prix et son ambiance accueillante, Alexens est une valeur sûre pour ceux qui souhaitent s’offrir un moment gourmand à Lille. Que ce soit pour un déjeuner rapide entre deux cours ou un dîner plus posé, ce restaurant saura ravir les palais les plus exigeants. Si vous cherchez une adresse gourmande et raffinée à Lille, Alexens est une escale incontournable. Venez découvrir cette pépite culinaire et laissez-vous séduire par une cuisine authentique et savoureuse !`,
  },
  {
    id: 3,
    name: "Marta",
    title:
      "Marta : Une expérience italienne authentique en plein cœur de Lille",
    date: "Mardi 25 mars 2025",
    img: "https://www.martabarrestaurant.com/i/marta-683789/3/5/7/0/5/7/1/5/0/8/9/3/6/1729264498_147/4a8692f4472b8d33937af26d7c76705c.jpg",
    isLiked: false,
    nbLikes: 32,
    comments: [
      {
        author: "Anaïs",
        avatar: "assets/icons/icons8-avatar-32.png",
        comment: "Un cadre cosy et des plats vraiment gourmands, j’ai adoré !",
      },
      {
        author: "Maxime",
        avatar: "assets/icons/icons8-avatar-32.png",
        comment:
          "Belle surprise, la carte est originale et tout est fait avec soin.",
      },
    ],
    content: `Si vous êtes à la recherche d’un restaurant alliant saveurs italiennes et ambiance chaleureuse près du campus de la Wild Code School, Marta est l’adresse qu’il vous faut. Ce restaurant lillois propose une cuisine généreuse et raffinée, mettant à l’honneur des produits frais et des recettes authentiques venues tout droit d’Italie.<br><br> Dès votre arrivée chez Marta, vous serez séduit par son atmosphère accueillante et son décor à la fois moderne et chaleureux. Avec ses lumières tamisées, ses murs en briques et son mobilier élégant, l’endroit est idéal pour un déjeuner entre amis, un dîner en amoureux ou même un repas de groupe.<br><br> Marta mise sur des produits de qualité pour offrir une carte savoureuse et authentique. Vous y retrouverez des pâtes fraîches faites maison, des pizzas napolitaines cuites au feu de bois, ainsi que des antipasti généreux pour commencer le repas en beauté. Les amateurs de cuisine italienne apprécieront particulièrement des plats comme les tagliatelles à la truffe, l’escalope milanaise ou encore la burrata crémeuse accompagnée de tomates savoureuses. Les desserts ne sont pas en reste avec des incontournables comme le tiramisu classique, la panna cotta vanillée, ou encore la torta al cioccolato, qui ravira les amateurs de chocolat.<br><br> Avec son service attentionné, son ambiance conviviale et sa cuisine généreuse, Marta est une adresse incontournable pour tous les amoureux de la gastronomie italienne. Que ce soit pour une pause déjeuner rapide ou un dîner à savourer tranquillement, vous êtes assuré de passer un bon moment. Si vous avez envie d’un voyage gustatif en Italie sans quitter Lille, Marta est l’endroit parfait. Laissez-vous tenter par une cuisine ensoleillée et savourez chaque bouchée comme si vous étiez à Rome !`,
  },
  {
    id: 4,
    name: "Break&Déj",
    title: "Break&Déj' : La pause gourmande idéale à Lille",
    date: "Mardi 25 mars 2025",
    img: "https://images.tgtg.ninja/standard_images/Saladbar/salad-1440111_1920-1125.jpg",
    isLiked: false,
    nbLikes: 15,
    comments: [
      {
        author: "Emma",
        avatar: "assets/icons/icons8-avatar-32.png",
        comment:
          "Parfait pour une pause rapide et gourmande, je recommande à 100% !",
      },
      {
        author: "Nicolas",
        avatar: "assets/icons/icons8-avatar-32.png",
        comment:
          "Petit déjeuner au top, avec des produits frais et un service impeccable.",
      },
    ],
    content: `Si vous cherchez un endroit cosy et convivial pour un petit-déjeuner ou un déjeuner rapide à proximité du campus de la Wild Code School, Break&Déj' est l’adresse qu’il vous faut. Avec son ambiance chaleureuse et ses assiettes généreuses, ce spot est parfait pour bien commencer la journée ou recharger les batteries à midi.<br><br> Dès l’entrée, Break&Déj' séduit par son décor moderne et épuré, où l’on se sent immédiatement à l’aise. Que vous veniez pour un café sur le pouce, un brunch gourmand ou une pause déjeuner entre amis, l’ambiance y est toujours conviviale et agréable. <br><br> Break&Déj’ propose une large sélection de plats et en-cas, allant des viennoiseries croustillantes aux œufs brouillés, en passant par des bagels savoureux et des bowls colorés. Leur formule petit-déjeuner est parfaite pour bien démarrer la journée, tandis que leur menu du midi propose des options équilibrées et gourmandes, comme des sandwichs gourmets, des salades fraîches et des quiches maison. Côté boissons, on retrouve des cafés de qualité, des smoothies vitaminés et des jus pressés à froid, idéals pour un boost d’énergie naturel.<br><br> Avec des prix raisonnables et des portions généreuses, Break&Déj’ offre une belle alternative aux chaînes classiques pour un repas rapide mais savoureux. Le service est rapide et efficace, parfait pour les étudiants et les travailleurs pressés.<br><br> Que vous soyez adepte des brunchs copieux ou des pauses déjeuner express, Break&Déj’ est un incontournable pour bien manger sans se ruiner. Venez tester et partagez votre avis !`,
  },
  {
    id: 5,
    name: "La Promenade",
    title: "La Promenade : Une parenthèse gourmande en plein cœur de Lille",
    date: "Mardi 25 mars 2025",
    img: "https://static.wixstatic.com/media/32daa9_e5685f820f4e40ef871117ef783e4f83~mv2.jpg/v1/fill/w_1901,h_925,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/32daa9_e5685f820f4e40ef871117ef783e4f83~mv2.jpg",
    isLiked: false,
    nbLikes: 19,
    comments: [
      {
        author: "Sophie",
        avatar: "assets/icons/icons8-avatar-32.png",
        comment:
          "J’y suis allée après avoir lu cet article, et c’était une superbe découverte ! Plats raffinés et ambiance au top.",
      },
      {
        author: "Julien",
        avatar: "assets/icons/icons8-avatar-32.png",
        comment:
          "Merci pour cette reco, le rapport qualité-prix est excellent. J’y retournerai sans hésiter !",
      },
    ],
    content: `Si vous cherchez un restaurant où l'on prend le temps d'apprécier de bons plats dans un cadre élégant et convivial, La Promenade est une adresse incontournable à Lille. Ce restaurant allie cuisine bistronomique et ambiance apaisante, parfait pour une pause déjeuner ou un dîner entre amis.<br><br> Avec sa décoration soignée, mêlant touches modernes et ambiance feutrée, La Promenade vous invite à un moment de détente culinaire. Que ce soit pour un repas en tête-à-tête, un déjeuner entre collègues ou un dîner en groupe, l’accueil y est toujours chaleureux et attentionné.<br><br> Le restaurant met un point d’honneur à travailler avec des produits frais et de saison, garantissant ainsi une cuisine authentique et savoureuse. La carte évolue régulièrement, mais on y retrouve des entrées raffinées, des plats mijotés avec soin, ainsi que des desserts gourmands qui clôturent le repas en beauté. Que vous soyez amateur de viandes tendres, de poissons délicatement assaisonnés ou de plats végétariens savoureux, vous trouverez forcément votre bonheur à La Promenade.<br><br> Avec ses assiettes généreuses et bien présentées, La Promenade offre une belle expérience culinaire sans pour autant exploser le budget. Le service est fluide et attentionné, ce qui en fait une adresse idéale pour une pause gourmande à proximité du campus.`,
  },
  {
    id: 6,
    name: "Le Switch",
    title:
      "Le Switch : Une adresse incontournable pour les amateurs de burgers",
    date: "Mardi 25 mars 2025",
    img: "https://uniiti.com/images/shops/slides/dc7c5213bb4df75a6b0051050ee164fd6d54ece0.jpeg",
    isLiked: false,
    nbLikes: 11,
    comments: [
      {
        author: "Camille",
        avatar: "assets/icons/icons8-avatar-32.png",
        comment:
          "Les burgers sont vraiment savoureux ! Un bon spot pour manger rapidement sans sacrifier la qualité.",
      },
      {
        author: "Lucas",
        avatar: "assets/icons/icons8-avatar-32.png",
        comment:
          "Belle découverte, le steak était parfaitement cuit et le pain bien moelleux !",
      },
    ],
    content: `Envie d’un bon burger à Lille ? Le Switch est l’endroit parfait pour déguster des burgers généreux, faits maison et préparés avec des ingrédients de qualité. Avec son ambiance décontractée et son service rapide, ce restaurant est une valeur sûre pour un repas savoureux à prix abordable.<br><br> Le Switch propose une carte variée où chaque burger est soigneusement élaboré avec des pains moelleux, des steaks juteux et des accompagnements faits maison. Vous trouverez des recettes classiques revisitées, mais aussi des créations plus originales qui raviront les amateurs de nouvelles saveurs.<br><br> Avec son ambiance chaleureuse et son décor industriel, Le Switch est idéal pour un déjeuner rapide ou une soirée entre amis. L’équipe est dynamique et souriante, garantissant un bon moment à chaque visite.`,
  },
  {
    id: 7,
    name: "Les Sales Mômes",
    title: "Les Sales Mômes : Un bistrot moderne et convivial",
    date: "Mardi 25 mars 2025",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/3c/49/8d/caption.jpg?w=1400&h=800&s=1",
    isLiked: false,
    nbLikes: 21,
    comments: [
      {
        author: "Emma",
        avatar: "assets/icons/icons8-avatar-32.png",
        comment:
          "Une ambiance chaleureuse et des plats gourmands, je valide totalement !",
      },
      {
        author: "Antoine",
        avatar: "assets/icons/icons8-avatar-32.png",
        comment:
          "Merci pour l’article, c’est devenu ma nouvelle adresse préférée à Lille.",
      },
    ],
    content: `Avec son ambiance chaleureuse et son service attentionné, Les Sales Mômes est un bistrot où il fait bon s’attabler. La cuisine y est généreuse et savoureuse, mettant en avant des produits de qualité et des recettes réconfortantes. <br><br> Le restaurant propose une carte évolutive au fil des saisons, mettant en avant des plats faits maison, des viandes tendres et des desserts gourmands. Avec sa décoration moderne et son atmosphère accueillante, c’est une adresse parfaite pour un repas entre amis ou en famille.`,
  },
];
