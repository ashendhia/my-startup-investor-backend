const startups = [
    {
        "id": 1,
        "name": "ClinicUp",
        "sector": "Healthcare",
        "marketCap": 1000,
        "activeYears": 1,
        "region": "Adrar",
        "numberOfInvestors": 10,
        "longitude": "28.61151666",
        "latitude": "0.89837951",
        "email": "ClinicUp@example.dz1",
        "hashedPassword": "example_hashed1"
    },
    {
        "id": 2,
        "name": "TechWave Solutions",
        "sector": "Tech",
        "marketCap": 1000000,
        "activeYears": 5,
        "region": "Adrar",
        "numberOfInvestors": 10,
        "longitude": "28.26439891",
        "latitude": "5.3088508",
        "email": "TechWave Solutions@example.dz2",
        "hashedPassword": "example_hashed2"
    },
    {
        "id": 3,
        "name": "HealthGenius Innovations",
        "sector": "Healthcare",
        "marketCap": 500000,
        "activeYears": 3,
        "region": "Chlef",
        "numberOfInvestors": 8,
        "longitude": "28.33193039",
        "latitude": "0.75275179",
        "email": "HealthGenius Innovations@example.dz3",
        "hashedPassword": "example_hashed3"
    },
    {
        "id": 4,
        "name": "FinTech Solutions",
        "sector": "Finance",
        "marketCap": 2000000,
        "activeYears": 7,
        "region": "Laghouat",
        "numberOfInvestors": 15,
        "longitude": "28.73908842",
        "latitude": "2.49262903",
        "email": "FinTech Solutions@example.dz4",
        "hashedPassword": "example_hashed4"
    },
    {
        "id": 5,
        "name": "EcoTech Innovations",
        "sector": "Environment",
        "marketCap": 1500000,
        "activeYears": 4,
        "region": "Oum El Bouaghi",
        "numberOfInvestors": 12,
        "longitude": "27.86730745",
        "latitude": "4.55518768",
        "email": "EcoTech Innovations@example.dz5",
        "hashedPassword": "example_hashed5"
    },
    {
        "id": 6,
        "name": "DataLab Analytics",
        "sector": "Tech",
        "marketCap": 800000,
        "activeYears": 6,
        "region": "Batna",
        "numberOfInvestors": 10,
        "longitude": "27.63904697",
        "latitude": "4.08490692",
        "email": "DataLab Analytics@example.dz6",
        "hashedPassword": "example_hashed6"
    },
    {
        "id": 7,
        "name": "UrbanTech Technologies",
        "sector": "Urban Development",
        "marketCap": 1200000,
        "activeYears": 2,
        "region": "Béjaïa",
        "numberOfInvestors": 7,
        "longitude": "27.14812651",
        "latitude": "0.58654462",
        "email": "UrbanTech Technologies@example.dz7",
        "hashedPassword": "example_hashed7"
    },
    {
        "id": 8,
        "name": "CloudGenius Innovations",
        "sector": "Tech",
        "marketCap": 3000000,
        "activeYears": 8,
        "region": "Biskra",
        "numberOfInvestors": 20,
        "longitude": "27.87498212",
        "latitude": "2.35018764",
        "email": "CloudGenius Innovations@example.dz8",
        "hashedPassword": "example_hashed8"
    },
    {
        "id": 9,
        "name": "BioTech Solutions Inc.",
        "sector": "Biotechnology",
        "marketCap": 2500000,
        "activeYears": 5,
        "region": "Béchar",
        "numberOfInvestors": 18,
        "longitude": "30.10352285",
        "latitude": "3.34466578",
        "email": "BioTech Solutions Inc.@example.dz9",
        "hashedPassword": "example_hashed9"
    },
    {
        "id": 10,
        "name": "EduTech Labs",
        "sector": "Education",
        "marketCap": 600000,
        "activeYears": 3,
        "region": "Blida",
        "numberOfInvestors": 10,
        "longitude": "29.90409605",
        "latitude": "6.36696335",
        "email": "EduTech Labs@example.dz10",
        "hashedPassword": "example_hashed10"
    },
    {
        "id": 11,
        "name": "GreenEnergy Ventures",
        "sector": "Renewable Energy",
        "marketCap": 1800000,
        "activeYears": 4,
        "region": "Bouira",
        "numberOfInvestors": 15,
        "longitude": "30.05812036",
        "latitude": "-1.15968624",
        "email": "GreenEnergy Ventures@example.dz11",
        "hashedPassword": "example_hashed11"
    },
    {
        "id": 12,
        "name": "FoodTech Solutions",
        "sector": "Food",
        "marketCap": 1200000,
        "activeYears": 6,
        "region": "Tamanrasset",
        "numberOfInvestors": 12,
        "longitude": "26.77942346",
        "latitude": "4.63329354",
        "email": "FoodTech Solutions@example.dz12",
        "hashedPassword": "example_hashed12"
    },
    {
        "id": 13,
        "name": "AI Innovations",
        "sector": "Tech",
        "marketCap": 900000,
        "activeYears": 5,
        "region": "Tébessa",
        "numberOfInvestors": 10,
        "longitude": "27.09796361",
        "latitude": "6.43975568",
        "email": "AI Innovations@example.dz13",
        "hashedPassword": "example_hashed13"
    },
    {
        "id": 14,
        "name": "FashionTech Solutions",
        "sector": "Fashion",
        "marketCap": 700000,
        "activeYears": 3,
        "region": "Tlemcen",
        "numberOfInvestors": 8,
        "longitude": "26.65849851",
        "latitude": "4.62571831",
        "email": "FashionTech Solutions@example.dz14",
        "hashedPassword": "example_hashed14"
    },
    {
        "id": 15,
        "name": "RoboTech Innovations",
        "sector": "Tech",
        "marketCap": 2200000,
        "activeYears": 7,
        "region": "Tiaret",
        "numberOfInvestors": 17,
        "longitude": "27.44180037",
        "latitude": "1.90084903",
        "email": "RoboTech Innovations@example.dz15",
        "hashedPassword": "example_hashed15"
    },
    {
        "id": 16,
        "name": "CleanTech Solutions",
        "sector": "Renewable Energy",
        "marketCap": 1600000,
        "activeYears": 4,
        "region": "Tizi Ouzou",
        "numberOfInvestors": 14,
        "longitude": "26.27972158",
        "latitude": "6.45466897",
        "email": "CleanTech Solutions@example.dz16",
        "hashedPassword": "example_hashed16"
    },
    {
        "id": 17,
        "name": "SpaceTech Ventures",
        "sector": "Space",
        "marketCap": 3500000,
        "activeYears": 8,
        "region": "Algiers",
        "numberOfInvestors": 22,
        "longitude": "29.1505078",
        "latitude": "5.50107131",
        "email": "SpaceTech Ventures@example.dz17",
        "hashedPassword": "example_hashed17"
    },
    {
        "id": 18,
        "name": "AgriTech Solutions",
        "sector": "Food",
        "marketCap": 1300000,
        "activeYears": 5,
        "region": "Djelfa",
        "numberOfInvestors": 11,
        "longitude": "26.15415501",
        "latitude": "2.39833637",
        "email": "AgriTech Solutions@example.dz18",
        "hashedPassword": "example_hashed18"
    },
    {
        "id": 19,
        "name": "MedTech Innovations",
        "sector": "Healthcare",
        "marketCap": 1800000,
        "activeYears": 6,
        "region": "Jijel",
        "numberOfInvestors": 13,
        "longitude": "27.38637604",
        "latitude": "0.02875156",
        "email": "MedTech Innovations@example.dz19",
        "hashedPassword": "example_hashed19"
    },
    {
        "id": 20,
        "name": "TravelTech Solutions",
        "sector": "Travel",
        "marketCap": 1100000,
        "activeYears": 3,
        "region": "Sétif",
        "numberOfInvestors": 9,
        "longitude": "29.76575089",
        "latitude": "-1.06874554",
        "email": "TravelTech Solutions@example.dz20",
        "hashedPassword": "example_hashed20"
    },
    {
        "id": 21,
        "name": "IoT Innovations",
        "sector": "Internet of Things",
        "marketCap": 2000000,
        "activeYears": 7,
        "region": "Saïda",
        "numberOfInvestors": 16,
        "longitude": "27.88388361",
        "latitude": "-0.59492708",
        "email": "IoT Innovations@example.dz21",
        "hashedPassword": "example_hashed21"
    },
    {
        "id": 22,
        "name": "RealEstateTech Solutions",
        "sector": "Real Estate",
        "marketCap": 1400000,
        "activeYears": 4,
        "region": "Skikda",
        "numberOfInvestors": 12,
        "longitude": "26.7140316",
        "latitude": "2.28509753",
        "email": "RealEstateTech Solutions@example.dz22",
        "hashedPassword": "example_hashed22"
    },
    {
        "id": 23,
        "name": "EdTech Ventures",
        "sector": "Education",
        "marketCap": 1000000,
        "activeYears": 5,
        "region": "Sidi Bel Abbès",
        "numberOfInvestors": 10,
        "longitude": "29.42364914",
        "latitude": "4.74119908",
        "email": "EdTech Ventures@example.dz23",
        "hashedPassword": "example_hashed23"
    },
    {
        "id": 24,
        "name": "EnergyTech Solutions",
        "sector": "Energy",
        "marketCap": 1700000,
        "activeYears": 6,
        "region": "Annaba",
        "numberOfInvestors": 13,
        "longitude": "27.43505039",
        "latitude": "1.48690693",
        "email": "EnergyTech Solutions@example.dz24",
        "hashedPassword": "example_hashed24"
    },
    {
        "id": 25,
        "name": "TransportTech Innovations",
        "sector": "Transportation",
        "marketCap": 1300000,
        "activeYears": 4,
        "region": "Guelma",
        "numberOfInvestors": 11,
        "longitude": "29.26511627",
        "latitude": "5.55044219",
        "email": "TransportTech Innovations@example.dz25",
        "hashedPassword": "example_hashed25"
    },
    {
        "id": 26,
        "name": "CyberSecurity Solutions",
        "sector": "Tech",
        "marketCap": 1500000,
        "activeYears": 7,
        "region": "Constantine",
        "numberOfInvestors": 14,
        "longitude": "29.93375678",
        "latitude": "0.04624151",
        "email": "CyberSecurity Solutions@example.dz26",
        "hashedPassword": "example_hashed26"
    },
    {
        "id": 27,
        "name": "SmartCity Ventures",
        "sector": "Internet of Things",
        "marketCap": 2200000,
        "activeYears": 8,
        "region": "Médéa",
        "numberOfInvestors": 18,
        "longitude": "26.16733354",
        "latitude": "2.89461109",
        "email": "SmartCity Ventures@example.dz27",
        "hashedPassword": "example_hashed27"
    },
    {
        "id": 28,
        "name": "FinTech Innovations",
        "sector": "Financial Technology",
        "marketCap": 1800000,
        "activeYears": 5,
        "region": "Mostaganem",
        "numberOfInvestors": 15,
        "longitude": "28.58752724",
        "latitude": "2.55143941",
        "email": "FinTech Innovations@example.dz28",
        "hashedPassword": "example_hashed28"
    },
    {
        "id": 29,
        "name": "HealthTech Solutions",
        "sector": "Healthcare",
        "marketCap": 1600000,
        "activeYears": 6,
        "region": "M'Sila",
        "numberOfInvestors": 13,
        "longitude": "28.46901692",
        "latitude": "2.39585124",
        "email": "HealthTech Solutions@example.dz29",
        "hashedPassword": "example_hashed29"
    },
    {
        "id": 30,
        "name": "FoodTech Ventures",
        "sector": "Food",
        "marketCap": 1400000,
        "activeYears": 4,
        "region": "Mascara",
        "numberOfInvestors": 12,
        "longitude": "28.43557746",
        "latitude": "2.52822107",
        "email": "FoodTech Ventures@example.dz30",
        "hashedPassword": "example_hashed30"
    },
    {
        "id": 31,
        "name": "AI Innovations",
        "sector": "Tech",
        "marketCap": 1200000,
        "activeYears": 7,
        "region": "Ouargla",
        "numberOfInvestors": 11,
        "longitude": "28.86682044",
        "latitude": "6.44354142",
        "email": "AI Innovations@example.dz31",
        "hashedPassword": "example_hashed31"
    },
    {
        "id": 32,
        "name": "FashionTech Solutions",
        "sector": "Fashion",
        "marketCap": 900000,
        "activeYears": 3,
        "region": "Oran",
        "numberOfInvestors": 8,
        "longitude": "29.36139236",
        "latitude": "-0.35670045",
        "email": "FashionTech Solutions@example.dz32",
        "hashedPassword": "example_hashed32"
    },
    {
        "id": 33,
        "name": "BioTech Innovations",
        "sector": "Biotechnology",
        "marketCap": 1000000,
        "activeYears": 5,
        "region": "El Bayadh",
        "numberOfInvestors": 10,
        "longitude": "26.87707193",
        "latitude": "3.20082086",
        "email": "BioTech Innovations@example.dz33",
        "hashedPassword": "example_hashed33"
    },
    {
        "id": 34,
        "name": "CleanTech Solutions",
        "sector": "Renewable Energy",
        "marketCap": 1800000,
        "activeYears": 6,
        "region": "Illizi",
        "numberOfInvestors": 14,
        "longitude": "27.22383649",
        "latitude": "3.99590258",
        "email": "CleanTech Solutions@example.dz34",
        "hashedPassword": "example_hashed34"
    },
    {
        "id": 35,
        "name": "SpaceTech Ventures",
        "sector": "Space",
        "marketCap": 3500000,
        "activeYears": 8,
        "region": "Bordj Bou Arréridj",
        "numberOfInvestors": 22,
        "longitude": "28.1712471",
        "latitude": "3.08476348",
        "email": "SpaceTech Ventures@example.dz35",
        "hashedPassword": "example_hashed35"
    },
    {
        "id": 36,
        "name": "AgriTech Innovations",
        "sector": "Food",
        "marketCap": 1300000,
        "activeYears": 5,
        "region": "Boumerdès",
        "numberOfInvestors": 11,
        "longitude": "27.05116754",
        "latitude": "2.61738521",
        "email": "AgriTech Innovations@example.dz36",
        "hashedPassword": "example_hashed36"
    },
    {
        "id": 37,
        "name": "MedTech Solutions",
        "sector": "Healthcare",
        "marketCap": 1900000,
        "activeYears": 6,
        "region": "El Tarf",
        "numberOfInvestors": 15,
        "longitude": "29.24296052",
        "latitude": "1.93744985",
        "email": "MedTech Solutions@example.dz37",
        "hashedPassword": "example_hashed37"
    },
    {
        "id": 38,
        "name": "TravelTech Ventures",
        "sector": "Travel",
        "marketCap": 1100000,
        "activeYears": 3,
        "region": "Tindouf",
        "numberOfInvestors": 9,
        "longitude": "28.96774318",
        "latitude": "1.22508249",
        "email": "TravelTech Ventures@example.dz38",
        "hashedPassword": "example_hashed38"
    },
    {
        "id": 39,
        "name": "IoT Innovations",
        "sector": "Internet of Things",
        "marketCap": 2000000,
        "activeYears": 7,
        "region": "Tissemsilt",
        "numberOfInvestors": 16,
        "longitude": "28.01247682",
        "latitude": "1.80952095",
        "email": "IoT Innovations@example.dz39",
        "hashedPassword": "example_hashed39"
    },
    {
        "id": 40,
        "name": "RealEstateTech Solutions",
        "sector": "Real Estate",
        "marketCap": 1400000,
        "activeYears": 4,
        "region": "El Oued",
        "numberOfInvestors": 12,
        "longitude": "28.33937205",
        "latitude": "3.32515788",
        "email": "RealEstateTech Solutions@example.dz40",
        "hashedPassword": "example_hashed40"
    },
    {
        "id": 41,
        "name": "EdTech Ventures",
        "sector": "Education",
        "marketCap": 1000000,
        "activeYears": 5,
        "region": "Khenchela",
        "numberOfInvestors": 10,
        "longitude": "27.14777867",
        "latitude": "2.86231327",
        "email": "EdTech Ventures@example.dz41",
        "hashedPassword": "example_hashed41"
    },
    {
        "id": 42,
        "name": "EnergyTech Innovations",
        "sector": "Energy",
        "marketCap": 1700000,
        "activeYears": 6,
        "region": "Souk Ahras",
        "numberOfInvestors": 13,
        "longitude": "29.56544731",
        "latitude": "4.42753351",
        "email": "EnergyTech Innovations@example.dz42",
        "hashedPassword": "example_hashed42"
    },
    {
        "id": 43,
        "name": "TransportTech Solutions",
        "sector": "Transportation",
        "marketCap": 1300000,
        "activeYears": 4,
        "region": "Tipaza",
        "numberOfInvestors": 11,
        "longitude": "26.22549198",
        "latitude": "6.33231947",
        "email": "TransportTech Solutions@example.dz43",
        "hashedPassword": "example_hashed43"
    },
    {
        "id": 44,
        "name": "FinTech Innovations",
        "sector": "Financial Technology",
        "marketCap": 1800000,
        "activeYears": 5,
        "region": "Naâma",
        "numberOfInvestors": 15,
        "longitude": "29.00732286",
        "latitude": "4.43627047",
        "email": "FinTech Innovations@example.dz44",
        "hashedPassword": "example_hashed44"
    },
    {
        "id": 45,
        "name": "HealthTech Solutions",
        "sector": "Healthcare",
        "marketCap": 1600000,
        "activeYears": 6,
        "region": "Aïn Témouchent",
        "numberOfInvestors": 13,
        "longitude": "27.92170771",
        "latitude": "-0.73173402",
        "email": "HealthTech Solutions@example.dz45",
        "hashedPassword": "example_hashed45"
    },
    {
        "id": 46,
        "name": "FoodTech Innovations",
        "sector": "Food",
        "marketCap": 1400000,
        "activeYears": 4,
        "region": "Ghardaïa",
        "numberOfInvestors": 12,
        "longitude": "26.25854192",
        "latitude": "6.14062152",
        "email": "FoodTech Innovations@example.dz46",
        "hashedPassword": "example_hashed46"
    },
    {
        "id": 47,
        "name": "AI Innovations",
        "sector": "Tech",
        "marketCap": 1200000,
        "activeYears": 7,
        "region": "Relizane",
        "numberOfInvestors": 11,
        "longitude": "28.42892816",
        "latitude": "-0.77258273",
        "email": "AI Innovations@example.dz47",
        "hashedPassword": "example_hashed47"
    },
    {
        "id": 48,
        "name": "FashionTech Solutions",
        "sector": "Fashion",
        "marketCap": 900000,
        "activeYears": 3,
        "region": "El M'Ghair",
        "numberOfInvestors": 8,
        "longitude": "28.63475883",
        "latitude": "6.02533675",
        "email": "FashionTech Solutions@example.dz48",
        "hashedPassword": "example_hashed48"
    },
    {
        "id": 49,
        "name": "BioTech Innovations",
        "sector": "Biotechnology",
        "marketCap": 1000000,
        "activeYears": 5,
        "region": "Souk Ahras",
        "numberOfInvestors": 10,
        "longitude": "29.01206551",
        "latitude": "5.40464509",
        "email": "BioTech Innovations@example.dz49",
        "hashedPassword": "example_hashed49"
    },
    {
        "id": 50,
        "name": "CleanTech Ventures",
        "sector": "Renewable Energy",
        "marketCap": 1800000,
        "activeYears": 6,
        "region": "Tamanrasset",
        "numberOfInvestors": 14,
        "longitude": "26.32841631",
        "latitude": "4.43022813",
        "email": "CleanTech Ventures@example.dz50",
        "hashedPassword": "example_hashed50"
    },
    {
        "id": 51,
        "name": "SpaceTech Solutions",
        "sector": "Space",
        "marketCap": 3500000,
        "activeYears": 8,
        "region": "Tébessa",
        "numberOfInvestors": 22,
        "longitude": "27.94332149",
        "latitude": "-0.49746922",
        "email": "SpaceTech Solutions@example.dz51",
        "hashedPassword": "example_hashed51"
    },
    {
        "id": 52,
        "name": "AgriTech Innovations",
        "sector": "Food",
        "marketCap": 1300000,
        "activeYears": 5,
        "region": "Tlemcen",
        "numberOfInvestors": 11,
        "longitude": "26.77936261",
        "latitude": "2.64603395",
        "email": "AgriTech Innovations@example.dz52",
        "hashedPassword": "example_hashed52"
    },
    {
        "id": 53,
        "name": "MedTech Solutions",
        "sector": "Healthcare",
        "marketCap": 1900000,
        "activeYears": 6,
        "region": "Tiaret",
        "numberOfInvestors": 15,
        "longitude": "30.12999719",
        "latitude": "2.72187026",
        "email": "MedTech Solutions@example.dz53",
        "hashedPassword": "example_hashed53"
    },
    {
        "id": 54,
        "name": "TravelTech Innovations",
        "sector": "Travel",
        "marketCap": 1100000,
        "activeYears": 3,
        "region": "Tizi Ouzou",
        "numberOfInvestors": 9,
        "longitude": "28.26768421",
        "latitude": "-0.12876841",
        "email": "TravelTech Innovations@example.dz54",
        "hashedPassword": "example_hashed54"
    },
    {
        "id": 55,
        "name": "IoT Innovations",
        "sector": "Internet of Things",
        "marketCap": 2000000,
        "activeYears": 7,
        "region": "Algiers",
        "numberOfInvestors": 16,
        "longitude": "26.72802647",
        "latitude": "1.02657013",
        "email": "IoT Innovations@example.dz55",
        "hashedPassword": "example_hashed55"
    },
    {
        "id": 56,
        "name": "RealEstateTech Ventures",
        "sector": "Real Estate",
        "marketCap": 1400000,
        "activeYears": 4,
        "region": "Djelfa",
        "numberOfInvestors": 12,
        "longitude": "26.23534604",
        "latitude": "0.63375029",
        "email": "RealEstateTech Ventures@example.dz56",
        "hashedPassword": "example_hashed56"
    },
    {
        "id": 57,
        "name": "EdTech Innovations",
        "sector": "Education",
        "marketCap": 1000000,
        "activeYears": 5,
        "region": "Jijel",
        "numberOfInvestors": 10,
        "longitude": "26.73133772",
        "latitude": "-1.22787342",
        "email": "EdTech Innovations@example.dz57",
        "hashedPassword": "example_hashed57"
    },
    {
        "id": 58,
        "name": "EnergyTech Solutions",
        "sector": "Energy",
        "marketCap": 1700000,
        "activeYears": 6,
        "region": "Sétif",
        "numberOfInvestors": 13,
        "longitude": "28.5893034",
        "latitude": "-1.06334545",
        "email": "EnergyTech Solutions@example.dz58",
        "hashedPassword": "example_hashed58"
    },
    {
        "id": 59,
        "name": "TransportTech Innovations",
        "sector": "Transportation",
        "marketCap": 1300000,
        "activeYears": 4,
        "region": "Saïda",
        "numberOfInvestors": 11,
        "longitude": "27.42672629",
        "latitude": "2.8172995",
        "email": "TransportTech Innovations@example.dz59",
        "hashedPassword": "example_hashed59"
    },
    {
        "id": 60,
        "name": "CyberSecurity Ventures",
        "sector": "Tech",
        "marketCap": 1500000,
        "activeYears": 7,
        "region": "Skikda",
        "numberOfInvestors": 14,
        "longitude": "28.61607001",
        "latitude": "3.06880179",
        "email": "CyberSecurity Ventures@example.dz60",
        "hashedPassword": "example_hashed60"
    },
    {
        "id": 61,
        "name": "SmartCity Innovations",
        "sector": "Internet of Things",
        "marketCap": 2200000,
        "activeYears": 8,
        "region": "Sidi Bel Abbès",
        "numberOfInvestors": 18,
        "longitude": "29.67679459",
        "latitude": "4.92154076",
        "email": "SmartCity Innovations@example.dz61",
        "hashedPassword": "example_hashed61"
    },
    {
        "id": 62,
        "name": "FinTech Ventures",
        "sector": "Financial Technology",
        "marketCap": 1800000,
        "activeYears": 5,
        "region": "Annaba",
        "numberOfInvestors": 15,
        "longitude": "27.12646825",
        "latitude": "5.86006044",
        "email": "FinTech Ventures@example.dz62",
        "hashedPassword": "example_hashed62"
    },
    {
        "id": 63,
        "name": "HealthTech Solutions",
        "sector": "Healthcare",
        "marketCap": 1600000,
        "activeYears": 6,
        "region": "Guelma",
        "numberOfInvestors": 13,
        "longitude": "29.12374649",
        "latitude": "-0.98271617",
        "email": "HealthTech Solutions@example.dz63",
        "hashedPassword": "example_hashed63"
    },
    {
        "id": 64,
        "name": "FoodTech Innovations",
        "sector": "Food",
        "marketCap": 1400000,
        "activeYears": 4,
        "region": "Constantine",
        "numberOfInvestors": 12,
        "longitude": "30.02497023",
        "latitude": "4.55785105",
        "email": "FoodTech Innovations@example.dz64",
        "hashedPassword": "example_hashed64"
    },
    {
        "id": 65,
        "name": "AI Innovations",
        "sector": "Tech",
        "marketCap": 1200000,
        "activeYears": 7,
        "region": "Médéa",
        "numberOfInvestors": 11,
        "longitude": "29.17271706",
        "latitude": "3.41361767",
        "email": "AI Innovations@example.dz65",
        "hashedPassword": "example_hashed65"
    },
    {
        "id": 66,
        "name": "FashionTech Solutions",
        "sector": "Fashion",
        "marketCap": 900000,
        "activeYears": 3,
        "region": "Mostaganem",
        "numberOfInvestors": 8,
        "longitude": "28.86889312",
        "latitude": "3.80807841",
        "email": "FashionTech Solutions@example.dz66",
        "hashedPassword": "example_hashed66"
    },
    {
        "id": 67,
        "name": "RoboTech Innovations",
        "sector": "Tech",
        "marketCap": 2200000,
        "activeYears": 7,
        "region": "M'Sila",
        "numberOfInvestors": 17,
        "longitude": "26.7665168",
        "latitude": "5.60093303",
        "email": "RoboTech Innovations@example.dz67",
        "hashedPassword": "example_hashed67"
    },
    {
        "id": 68,
        "name": "CleanTech Ventures",
        "sector": "Renewable Energy",
        "marketCap": 1600000,
        "activeYears": 4,
        "region": "Mascara",
        "numberOfInvestors": 14,
        "longitude": "29.5557823",
        "latitude": "4.11502418",
        "email": "CleanTech Ventures@example.dz68",
        "hashedPassword": "example_hashed68"
    },
    {
        "id": 69,
        "name": "SpaceTech Solutions",
        "sector": "Space",
        "marketCap": 3500000,
        "activeYears": 8,
        "region": "Ouargla",
        "numberOfInvestors": 22,
        "longitude": "29.47321365",
        "latitude": "-0.25293578",
        "email": "SpaceTech Solutions@example.dz69",
        "hashedPassword": "example_hashed69"
    },
    {
        "id": 70,
        "name": "AgriTech Innovations",
        "sector": "Food",
        "marketCap": 1300000,
        "activeYears": 5,
        "region": "Oran",
        "numberOfInvestors": 11,
        "longitude": "26.80101973",
        "latitude": "2.1290049",
        "email": "AgriTech Innovations@example.dz70",
        "hashedPassword": "example_hashed70"
    },
    {
        "id": 71,
        "name": "MedTech Solutions",
        "sector": "Healthcare",
        "marketCap": 1800000,
        "activeYears": 6,
        "region": "El Bayadh",
        "numberOfInvestors": 15,
        "longitude": "28.77245318",
        "latitude": "-1.30248262",
        "email": "MedTech Solutions@example.dz71",
        "hashedPassword": "example_hashed71"
    },
    {
        "id": 72,
        "name": "TravelTech Ventures",
        "sector": "Travel",
        "marketCap": 1100000,
        "activeYears": 3,
        "region": "Illizi",
        "numberOfInvestors": 9,
        "longitude": "26.27943401",
        "latitude": "0.06178826",
        "email": "TravelTech Ventures@example.dz72",
        "hashedPassword": "example_hashed72"
    },
    {
        "id": 73,
        "name": "IoT Innovations",
        "sector": "Internet of Things",
        "marketCap": 2000000,
        "activeYears": 7,
        "region": "Bordj Bou Arréridj",
        "numberOfInvestors": 16,
        "longitude": "29.16916873",
        "latitude": "0.86632276",
        "email": "IoT Innovations@example.dz73",
        "hashedPassword": "example_hashed73"
    },
    {
        "id": 74,
        "name": "RealEstateTech Solutions",
        "sector": "Real Estate",
        "marketCap": 1400000,
        "activeYears": 4,
        "region": "Boumerdès",
        "numberOfInvestors": 12,
        "longitude": "26.51130083",
        "latitude": "3.87404023",
        "email": "RealEstateTech Solutions@example.dz74",
        "hashedPassword": "example_hashed74"
    },
    {
        "id": 75,
        "name": "EdTech Innovations",
        "sector": "Education",
        "marketCap": 1000000,
        "activeYears": 5,
        "region": "El Tarf",
        "numberOfInvestors": 10,
        "longitude": "30.00419823",
        "latitude": "5.77986186",
        "email": "EdTech Innovations@example.dz75",
        "hashedPassword": "example_hashed75"
    },
    {
        "id": 76,
        "name": "EnergyTech Innovations",
        "sector": "Energy",
        "marketCap": 1700000,
        "activeYears": 6,
        "region": "Tindouf",
        "numberOfInvestors": 13,
        "longitude": "28.29006007",
        "latitude": "-1.0789846",
        "email": "EnergyTech Innovations@example.dz76",
        "hashedPassword": "example_hashed76"
    },
    {
        "id": 77,
        "name": "TransportTech Solutions",
        "sector": "Transportation",
        "marketCap": 1300000,
        "activeYears": 4,
        "region": "Tissemsilt",
        "numberOfInvestors": 11,
        "longitude": "28.28535839",
        "latitude": "3.450538",
        "email": "TransportTech Solutions@example.dz77",
        "hashedPassword": "example_hashed77"
    },
    {
        "id": 78,
        "name": "CyberSecurity Innovations",
        "sector": "Tech",
        "marketCap": 1500000,
        "activeYears": 7,
        "region": "El Oued",
        "numberOfInvestors": 14,
        "longitude": "27.62326995",
        "latitude": "-0.75891426",
        "email": "CyberSecurity Innovations@example.dz78",
        "hashedPassword": "example_hashed78"
    },
    {
        "id": 79,
        "name": "SmartCity Solutions",
        "sector": "Internet of Things",
        "marketCap": 2200000,
        "activeYears": 8,
        "region": "Khenchela",
        "numberOfInvestors": 18,
        "longitude": "27.08590463",
        "latitude": "6.49578931",
        "email": "SmartCity Solutions@example.dz79",
        "hashedPassword": "example_hashed79"
    },
    {
        "id": 80,
        "name": "FinTech Solutions",
        "sector": "Financial Technology",
        "marketCap": 1800000,
        "activeYears": 5,
        "region": "Souk Ahras",
        "numberOfInvestors": 15,
        "longitude": "26.83475951",
        "latitude": "6.2202274",
        "email": "FinTech Solutions@example.dz80",
        "hashedPassword": "example_hashed80"
    },
    {
        "id": 81,
        "name": "HealthTech Ventures",
        "sector": "Healthcare",
        "marketCap": 1600000,
        "activeYears": 6,
        "region": "Souk Ahras",
        "numberOfInvestors": 13,
        "longitude": "26.8992901",
        "latitude": "-0.30778091",
        "email": "HealthTech Ventures@example.dz81",
        "hashedPassword": "example_hashed81"
    },
    {
        "id": 82,
        "name": "FoodTech Innovations",
        "sector": "Food",
        "marketCap": 1400000,
        "activeYears": 4,
        "region": "Aïn Defla",
        "numberOfInvestors": 12,
        "longitude": "26.38567752",
        "latitude": "6.1401182",
        "email": "FoodTech Innovations@example.dz82",
        "hashedPassword": "example_hashed82"
    },
    {
        "id": 83,
        "name": "AI Innovations",
        "sector": "Tech",
        "marketCap": 1200000,
        "activeYears": 7,
        "region": "Naâma",
        "numberOfInvestors": 11,
        "longitude": "28.04626306",
        "latitude": "3.40227628",
        "email": "AI Innovations@example.dz83",
        "hashedPassword": "example_hashed83"
    },
    {
        "id": 84,
        "name": "FashionTech Solutions",
        "sector": "Fashion",
        "marketCap": 900000,
        "activeYears": 3,
        "region": "Aïn Témouchent",
        "numberOfInvestors": 8,
        "longitude": "28.21990163",
        "latitude": "5.35218772",
        "email": "FashionTech Solutions@example.dz84",
        "hashedPassword": "example_hashed84"
    },
    {
        "id": 85,
        "name": "BioTech Ventures",
        "sector": "Biotechnology",
        "marketCap": 1000000,
        "activeYears": 5,
        "region": "Ghardaïa",
        "numberOfInvestors": 10,
        "longitude": "28.57376453",
        "latitude": "3.04108237",
        "email": "BioTech Ventures@example.dz85",
        "hashedPassword": "example_hashed85"
    },
    {
        "id": 86,
        "name": "CleanTech Innovations",
        "sector": "Renewable Energy",
        "marketCap": 1800000,
        "activeYears": 6,
        "region": "Relizane",
        "numberOfInvestors": 14,
        "longitude": "29.73441246",
        "latitude": "5.58087776",
        "email": "CleanTech Innovations@example.dz86",
        "hashedPassword": "example_hashed86"
    },
    {
        "id": 87,
        "name": "SpaceTech Solutions",
        "sector": "Space",
        "marketCap": 3500000,
        "activeYears": 8,
        "region": "El M'Ghair",
        "numberOfInvestors": 22,
        "longitude": "28.60195713",
        "latitude": "2.63693825",
        "email": "SpaceTech Solutions@example.dz87",
        "hashedPassword": "example_hashed87"
    },
    {
        "id": 88,
        "name": "AgriTech Innovations",
        "sector": "Food",
        "marketCap": 1300000,
        "activeYears": 5,
        "region": "Tamanrasset",
        "numberOfInvestors": 11,
        "longitude": "28.63947436",
        "latitude": "3.84392909",
        "email": "AgriTech Innovations@example.dz88",
        "hashedPassword": "example_hashed88"
    },
    {
        "id": 89,
        "name": "MedTech Innovations",
        "sector": "Healthcare",
        "marketCap": 1900000,
        "activeYears": 6,
        "region": "Tébessa",
        "numberOfInvestors": 15,
        "longitude": "27.54439976",
        "latitude": "5.27221062",
        "email": "MedTech Innovations@example.dz89",
        "hashedPassword": "example_hashed89"
    },
    {
        "id": 90,
        "name": "TravelTech Solutions",
        "sector": "Travel",
        "marketCap": 1100000,
        "activeYears": 3,
        "region": "Tlemcen",
        "numberOfInvestors": 9,
        "longitude": "26.40032738",
        "latitude": "5.54664217",
        "email": "TravelTech Solutions@example.dz90",
        "hashedPassword": "example_hashed90"
    },
    {
        "id": 91,
        "name": "IoT Innovations",
        "sector": "Internet of Things",
        "marketCap": 2000000,
        "activeYears": 7,
        "region": "Tiaret",
        "numberOfInvestors": 16,
        "longitude": "26.51862342",
        "latitude": "5.90630796",
        "email": "IoT Innovations@example.dz91",
        "hashedPassword": "example_hashed91"
    },
    {
        "id": 92,
        "name": "RealEstateTech Ventures",
        "sector": "Real Estate",
        "marketCap": 1400000,
        "activeYears": 4,
        "region": "Tizi Ouzou",
        "numberOfInvestors": 12,
        "longitude": "27.06289976",
        "latitude": "2.27007394",
        "email": "RealEstateTech Ventures@example.dz92",
        "hashedPassword": "example_hashed92"
    },
    {
        "id": 93,
        "name": "EdTech Innovations",
        "sector": "Education",
        "marketCap": 1000000,
        "activeYears": 5,
        "region": "Algiers",
        "numberOfInvestors": 10,
        "longitude": "28.33948571",
        "latitude": "1.94463549",
        "email": "EdTech Innovations@example.dz93",
        "hashedPassword": "example_hashed93"
    },
    {
        "id": 94,
        "name": "EnergyTech Solutions",
        "sector": "Energy",
        "marketCap": 1700000,
        "activeYears": 6,
        "region": "Djelfa",
        "numberOfInvestors": 13,
        "longitude": "27.69613172",
        "latitude": "4.48741101",
        "email": "EnergyTech Solutions@example.dz94",
        "hashedPassword": "example_hashed94"
    },
    {
        "id": 95,
        "name": "TransportTech Innovations",
        "sector": "Transportation",
        "marketCap": 1300000,
        "activeYears": 4,
        "region": "Jijel",
        "numberOfInvestors": 11,
        "longitude": "27.98313248",
        "latitude": "-0.27090798",
        "email": "TransportTech Innovations@example.dz95",
        "hashedPassword": "example_hashed95"
    },
    {
        "id": 96,
        "name": "CyberSecurity Ventures",
        "sector": "Tech",
        "marketCap": 1500000,
        "activeYears": 7,
        "region": "Sétif",
        "numberOfInvestors": 14,
        "longitude": "27.22633272",
        "latitude": "6.43605142",
        "email": "CyberSecurity Ventures@example.dz96",
        "hashedPassword": "example_hashed96"
    },
    {
        "id": 97,
        "name": "SmartCity Innovations",
        "sector": "Internet of Things",
        "marketCap": 2200000,
        "activeYears": 8,
        "region": "Saïda",
        "numberOfInvestors": 18,
        "longitude": "26.2641305",
        "latitude": "0.69315103",
        "email": "SmartCity Innovations@example.dz97",
        "hashedPassword": "example_hashed97"
    },
    {
        "id": 98,
        "name": "FinTech Ventures",
        "sector": "Financial Technology",
        "marketCap": 1800000,
        "activeYears": 5,
        "region": "Skikda",
        "numberOfInvestors": 15,
        "longitude": "26.79348618",
        "latitude": "-0.78459104",
        "email": "FinTech Ventures@example.dz98",
        "hashedPassword": "example_hashed98"
    },
    {
        "id": 99,
        "name": "HealthTech Solutions",
        "sector": "Healthcare",
        "marketCap": 1600000,
        "activeYears": 6,
        "region": "Sidi Bel Abbès",
        "numberOfInvestors": 13,
        "longitude": "29.51106398",
        "latitude": "-1.17558684",
        "email": "HealthTech Solutions@example.dz99",
        "hashedPassword": "example_hashed99"
    }
]

module.exports = startups