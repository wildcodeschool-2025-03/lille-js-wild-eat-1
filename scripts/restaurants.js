const restaurants = [
    {
        id: 1,
        name: "Bombora",
        img: "https://bombora.fr/wp-content/uploads/2022/09/23_menu-bdb-2-scaled.jpg",
        services: ["Sur place", "A emporter", "Livraison"],
        category: ["Végétarien", "Asiatique"],
        website: "https://bombora.fr",
    },
    {
        id: 2,
        name: "Alexens",
        img: "https://www.alexens.com/wp-content/uploads/2020/10/Capture-d%E2%80%99%C3%A9cran-2020-09-02-%C3%A0-10.18.03.png",
        services: ["Sur place", "A emporter", "Livraison"],
        category: ["Végétarien", "Burger"],
        website: "https://www.alexens.com",
    },
    {
        id: 3,
        name: "Marta",
        img: "https://www.martabarrestaurant.com/i/marta-683789/3/5/7/0/5/7/1/5/0/8/9/3/6/1729264498_147/4a8692f4472b8d33937af26d7c76705c.jpg",
        services: ["Sur place", "A emporter", "Livraison"],
        category: ["Végétarien", "Italien"],
        website: "https://www.martabarrestaurant.com",
    },
    {
        id: 4,
        name: "Break&Déj'",
        img: "https://images.tgtg.ninja/standard_images/Saladbar/salad-1440111_1920-1125.jpg",
        services: ["Sur place", "A emporter", "Livraison"],
        category: ["Végétarien", "Asiatique"],
        website: "https://maps.app.goo.gl/VtRAKUNBTUV2WHhm9",
    },
    {
        id: 5,
        name: "La Promenade",
        img: "https://static.wixstatic.com/media/32daa9_e5685f820f4e40ef871117ef783e4f83~mv2.jpg/v1/fill/w_1901,h_925,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/32daa9_e5685f820f4e40ef871117ef783e4f83~mv2.jpg",
        services: ["Sur place", "A emporter", "Livraison"],
        category: ["Végétarien"],
        website: "https://www.lapromenaderestaurant.fr/",
    },
    {
        id: 6,
        name: "Le Switch Ou Bien",
        img: "https://uniiti.com/images/shops/slides/dc7c5213bb4df75a6b0051050ee164fd6d54ece0.jpeg",
        services: ["Sur place", "A emporter", "Livraison"],
        category: ["Végétarien", "Burger"],
        website: "https://leswitchoubien.fr/fr",
    },
    {
        id: 7,
        name: "Kok Piraat",
        img: "https://www.rivesdereve.com/medias/photos-catalogue/KOKPIRAAT-5.jpg",
        services: ["Sur place", "A emporter", "Livraison"],
        category: ["Végétarien"],
        website: "http://www.kokpiraat.fr/",
    },
    {
        id: 8,
        name: "Prima Fila",
        img: "https://www.la-bottega.com/assets/img/prima/plat-02.jpg",
        services: ["Sur place", "A emporter", "Livraison"],
        category: ["Végétarien", "Italien"],
        website: "https://www.la-bottega.com/prima-fila.php",
    },
    {
        id: 9,
        name: "Au 1er mai",
        img: "https://static.actu.fr/uploads/2024/07/c19251df15866b59251df158689925v-960x640.jpg",
        services: ["Sur place", "A emporter", "Livraison"],
        category: ["Végétarien", "Burger", "Cuisine traditionnelle"],
        website: "https://maps.app.goo.gl/6jwofPaxpf8moerv6",
    },
    {
        id: 10,
        name: "Les Sales Mômes",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/3c/49/8d/caption.jpg?w=1400&h=800&s=1",
        services: ["Sur place", "A emporter", "Livraison"],
        category: ["Végétarien", "Burger"],
        website: "https://www.les-sales-momes.com/nos-menus",
    },
    {
        id: 11,
        name: "Domino's Pizza",
        img: "https://www.dominos.fr/ManagedAssets/FR/product/PCAN/FR_PCAN_fr_hero_13364.png?v2044073855",
        services: ["Sur place", "A emporter", "Livraison"],
        category: ["Pizza"],
        website:
            "https://www.dominos.fr/?utm_source=google&utm_medium=local&utm_campaign=yext",
    },
    {
        id: 12,
        name: "Au Coeur de l'Inde",
        img: "https://cdn.website.dish.co/media/af/ba/5495847/Au-Coeur-de-l-Inde-888B00F9-59A3-4DF1-BF3D-0AEB39635CC4-jpeg.jpg",
        services: ["Sur place", "A emporter", "Livraison"],
        category: ["Asiatique"],
        website: "https://aucoeurdelinde.eatbu.com/?lang=fr",
    },
    {
        id: 13,
        name: "M'eating",
        img: "https://www.meating-lille.fr/i/m-eating-restaurant-656408/3/5/3/5/0/9/1/5/0/8/9/3/6/1716912776_246/ec8252f4dae0d5ff22fcd4b6625d366d.jpg",
        services: ["Sur place", "A emporter", "Livraison"],
        category: ["Végétarien"],
        website: "https://www.meating-lille.fr/",
    },
    {
        id: 14,
        name: "Le Quai",
        img: "https://lequailambersart-restaurant.com/_assets/media/2eb93d5ce0e3644ec856ec3e6e2d08ad.jpg",
        services: ["Sur place", "A emporter", "Livraison"],
        category: ["Cuisine traditionnelle"],
        website: "https://lequailambersart-restaurant.com/",
    },
    {
        id: 15,
        name: "Le F. B. I",
        img: "https://cdn.website.dish.co/media/df/fe/5907892/FBI-IMG-20221218-093519-1-jpg.jpg",
        services: ["Sur place", "A emporter", "Livraison"],
        category: ["Cuisine traditionnelle"],
        website: "https://fbi.eatbu.com/?lang=fr",
    },
    {
        id: 16,
        name: "Chez Tizote",
        img: "https://res.cloudinary.com/tf-lab/image/upload/restaurant/1dd17069-e010-471c-a6a5-6322a13191f7/52d5214c-8a06-40b6-a77f-9ef277c64865.jpg",
        services: ["Sur place", "A emporter", "Livraison"],
        category: ["Cuisine traditionnelle"],
        website: "http://cheztizote.fr/",
    },
    {
        id: 17,
        name: "Etoile de Rabat",
        img: "https://www.dish.guide/ir/restaurant/a3a/a3a595aa2db753cd6a3c5e2902ded9c8.jpg",
        services: ["Sur place", "A emporter", "Livraison"],
        category: ["Snack", "Halal", "Burger"],
        website:
            "https://feedmi.fr/menu/etoile-de-rabat?utm_medium=affiliate&utm_source=google_maps_link",
    },
];