const data = {
  courseTopics: [
    {
      id: "pb",
      name: "Python pradedantiesiems",
      description: "Course for someone",
      price: 400,
      hours: 40,
    },
  ],
  courses: [
    {
      id: "p-b",
      name: "Python pradedantiesiems",
      tags: ["python", "data-analysis", "beginner"],
      type: "Dieninis",
      days: "PATKPxx",
      groupSize: [8, 16],
      intensity: 40,
      price: 330,
      hours: 40,
      startDate: "2022-11-21",
      endDate: "2022-11-25",
      description:
        "Kursas skirtas pradedantiesiems. Mokysimės Python pagrindų. Šis kursas puikiai tinka tiems kas nori pasitikrinti ar progamavimas būtent Jums. Dėl šios priežastis kursas yra trumpesnis. Jį baigę galėsite rinktis tolimesnius kursus, data science, web development.",
      descriptionExtra:
        "Šis kursas yra paremtas partnerių, pagal jį paruošta 500 studentų vokietijoje. Daugiau apie šį partnerį skaitykite čia.",
      link: "python-beginner",
      active: true,
    },
    {
      id: "p-da",
      name: "Duomenų analizė su Python",
      tags: ["python", "data-analysis", "pandas", "machine-learning"],
      type: "Vakarinis",
      days: "PATKPxx",
      intensity: 40,
      price: 800,
      hours: 80,
      startDate: "2022-10-02",
      endDate: "2022-10-20",
      description:
        "Python programavimo kalba yra lyderė duomenų analizės srityje. Dažnoje vietoje Python keičia excel be kitas duomenų analizės priemonės. Baigę šį kursą galėsite mikliai naršyti, tvarkyti, analizuoti ir pristatyti duomenis su Python. Baigę šį kursą galėsite studijuoti machine learning.",
      link: "python-data-analysis",
      active: false,
    },
    {
      id: "p-ds",
      name: "Duomenų mokslas ir mašininis mokymasis su Python",
      tags: ["python", "data-analysis", "pandas", "machine-learning"],
      type: "Vakarinis",
      days: "PATKPxx",
      intensity: 40,
      price: 1200,
      hours: 80,
      startDate: "2022-10-02",
      endDate: "2022-10-20",
      description:
        "Tai žingsnis po duomenų analitikos. Susipažinsime su mašininiu mokymusi. Įvaldysime sklearn biblioteką. Susipažinsime su xgboost, lightgbm bei neuroninių tinklų bibliotekomis.",
      link: "python-data-science",
      active: false,
    },
    {
      id: "p-wd-be",
      name: "Backend Web dev su Python (Django arba FastAPI)",
      tags: ["python", "data-analysis", "pandas", "machine-learning"],
      type: "Vakarinis",
      days: "PATKPxx",
      intensity: 40,
      price: 800,
      hours: 80,
      startDate: "2022-10-02",
      endDate: "2022-10-20",
      description:
        "Norite kurti web aplikacijas? Python turi bent keletą tam skirtų bibliotekų. Šis kursas labiausiai tinka tiems kurie mėgsta dirbi su duomenimis ir neturi noro gilintis į dizainą ir UX/UI klausimus. Baigę šį kursą galėsite kuri web aplikacijų backend dalį.",
      link: "python-web-development-backend",
      active: false,
    },
    {
      id: "p-wd-fs",
      name: "Full stack Web dev su Python ir Javascript (React, Tailwind)",
      tags: ["python", "data-analysis", "pandas", "machine-learning"],
      type: "Vakarinis",
      days: "PATKPxx",
      intensity: 40,
      price: 1500,
      hours: 120,
      startDate: "2022-10-02",
      endDate: "2022-10-20",
      description:
        "Full-stackeris žmogus kuris dažniausiai reikalingas mažoms ir/arba judrioms(agile) kompanijoms. Esant poreikiui galėsite sukurti visą aplikaciją, arba galėsite specializuotis į viena iš sričių bet tuo pačiu suprast ką daro kolegos 'kitame gale'",
      link: "python-web-development-full-stack",
      active: false,
    },
    {
      id: "p-ws-fs",
      name: "Web scraping su Python",
      tags: ["python", "data-analysis", "pandas", "machine-learning"],
      type: "Vakarinis",
      days: "PATKPxx",
      intensity: 40,
      price: 400,
      hours: 40,
      startDate: "2022-10-02",
      endDate: "2022-10-20",
      description:
        "Dažnas IT projektas priklauso nuo duomenų. Vieša paslaptis kad didelė dalis kompanijų duomenis tiesiog renka iš interneto. Tai sena praktika, bet besikeičianti kiekvienais metais. Išmoksime įvairių scraping technikų. Baigę kursą galėsite pasigaminti sprendima kuris nuolat tvarkingai ir patikimai surenka duomenis iš vieno ar net kelių šaltinių.",
      link: "python-web-development-full-stack",
      active: false,
    },
  ],
}
export default data

// Python Dieniniai savaites trukmes  kursai 40 val
// Python Vakariniai Menesio trukmes kursai 40 val
// Python Savaitgaliniai savaites 40 val trukmes kursai

// Data analysis - 80 val
// Dieniniai
// Vakariniai
// Savaitgaliniai

// ML - linear regression, lgbm/xgboost, deep learning
// Dieniniai
// Vakariniai
// Savaitgaliniai

// Backend Web dev Django / Flask / FastAPI
// Dieniniai
// Vakariniai
// Savaitgaliniai

// Full stack
// Backend + frontend

// Dieniniai intensyvus -- turintiems daug laiko ir norintiems kuo greiciau gauti ziniu
// Dieniniai mazo intensyvumo - turintiems po truputi laiko ir norintiems siekt iek daugit
// Vakariniai
// Savaitgaliniai
