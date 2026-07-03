export type BudgetYear = "2024" | "2025" | "2026";

export type BudgetLine = {
  id: string;
  programmeCode: string;
  programmeName: string;
  expenseCategoryName: string;
  amount2024: number;
  amount2025: number;
  amount2026: number;
};

export type SignalTimeline = {
  year: number;
  patents: number;
  startups: number;
  parliament: number;
};

export type InvestmentReport = {
  programmeCode: string;
  title: string;
  summary: string;
  budgetUse: string;
  keywords: string[];
  timeline: SignalTimeline[];
  ecosystem: {
    companies: number;
    jobs: number;
    revenue: number;
    territories: string[];
  };
  startups: {
    name: string;
    city: string;
    maturity: string;
    jobs: number;
  }[];
  parliament: {
    mentions: number;
    trend: "En hausse" | "Stable" | "À qualifier";
    topics: string[];
  };
  strengths: string[];
  openQuestions: string[];
};

export type InvestmentProgramme = {
  programmeCode: string;
  programmeName: string;
  amount2026: number;
  linesCount: number;
  report: InvestmentReport;
};

export const budgetLines: BudgetLine[] = [
  {
    id: "fr2030-421-6",
    programmeCode: "421",
    programmeName: "Soutien des progrès de l'enseignement et de la recherche",
    expenseCategoryName: "Dépenses d'intervention",
    amount2024: 200693126,
    amount2025: 188007751,
    amount2026: 142496649,
  },
  {
    id: "fr2030-422-3",
    programmeCode: "422",
    programmeName: "Valorisation de la recherche",
    expenseCategoryName: "Dépenses de fonctionnement",
    amount2024: 0,
    amount2025: 0,
    amount2026: 10000000,
  },
  {
    id: "fr2030-422-6",
    programmeCode: "422",
    programmeName: "Valorisation de la recherche",
    expenseCategoryName: "Dépenses d'intervention",
    amount2024: 32161600,
    amount2025: 34287500,
    amount2026: 22071000,
  },
  {
    id: "fr2030-423-3",
    programmeCode: "423",
    programmeName: "Accélération de la modernisation des entreprises",
    expenseCategoryName: "Dépenses de fonctionnement",
    amount2024: 100000000,
    amount2025: 0,
    amount2026: 0,
  },
  {
    id: "fr2030-423-6",
    programmeCode: "423",
    programmeName: "Accélération de la modernisation des entreprises",
    expenseCategoryName: "Dépenses d'intervention",
    amount2024: 23160000,
    amount2025: 19320000,
    amount2026: 34500000,
  },
  {
    id: "fr2030-423-7",
    programmeCode: "423",
    programmeName: "Accélération de la modernisation des entreprises",
    expenseCategoryName: "Dépenses d'opérations financières",
    amount2024: 13500000,
    amount2025: 0,
    amount2026: 0,
  },
  {
    id: "fr2030-424-3",
    programmeCode: "424",
    programmeName: "Financement des investissements stratégiques",
    expenseCategoryName: "Dépenses de fonctionnement",
    amount2024: 435563445,
    amount2025: 426998427,
    amount2026: 242414542,
  },
  {
    id: "fr2030-424-6",
    programmeCode: "424",
    programmeName: "Financement des investissements stratégiques",
    expenseCategoryName: "Dépenses d'intervention",
    amount2024: 3318311564,
    amount2025: 4052897364,
    amount2026: 3364301779,
  },
  {
    id: "fr2030-425-3",
    programmeCode: "425",
    programmeName: "Financement structurel des écosystèmes d'innovation",
    expenseCategoryName: "Dépenses de fonctionnement",
    amount2024: 85000000,
    amount2025: 50000000,
    amount2026: 60000000,
  },
  {
    id: "fr2030-425-6",
    programmeCode: "425",
    programmeName: "Financement structurel des écosystèmes d'innovation",
    expenseCategoryName: "Dépenses d'intervention",
    amount2024: 1289439597,
    amount2025: 1085897718,
    amount2026: 719661698,
  },
];

const reportsByProgramme: Record<string, InvestmentReport> = {
  "421": {
    programmeCode: "421",
    title: "Recherche, enseignement supérieur et infrastructures scientifiques",
    summary:
      "Un programme de socle qui finance les capacités scientifiques, les plateformes et les compétences nécessaires aux futures filières d'innovation.",
    budgetUse: "Financer les dispositifs d'enseignement, les équipements et les projets de recherche structurants.",
    keywords: ["recherche", "talents", "laboratoires", "plateformes"],
    timeline: [
      { year: 2022, patents: 21, startups: 7, parliament: 10 },
      { year: 2023, patents: 25, startups: 8, parliament: 11 },
      { year: 2024, patents: 31, startups: 8, parliament: 13 },
      { year: 2025, patents: 36, startups: 9, parliament: 15 },
    ],
    ecosystem: {
      companies: 934,
      jobs: 32800,
      revenue: 3600000000,
      territories: ["Paris-Saclay", "Grenoble", "Toulouse"],
    },
    startups: [
      { name: "LabScale", city: "Grenoble", maturity: "Series B", jobs: 72 },
      { name: "QuantEdu", city: "Paris", maturity: "Series A", jobs: 24 },
      { name: "Instrumenta", city: "Toulouse", maturity: "Scale-up", jobs: 41 },
    ],
    parliament: {
      mentions: 57,
      trend: "Stable",
      topics: ["recherche publique", "doctorants", "transfert"],
    },
    strengths: ["Socle scientifique dense", "Capacité de formation élevée", "Territoires universitaires identifiés"],
    openQuestions: ["Quels laboratoires produisent les signaux transférables ?", "Quels effets territoriaux mesurer ?"],
  },
  "422": {
    programmeCode: "422",
    title: "Valorisation de la recherche et transfert deeptech",
    summary:
      "Un programme orienté maturation technologique, brevets publics, licences et création de startups issues de la recherche.",
    budgetUse: "Accélérer le passage du laboratoire au marché par des preuves de concept et des outils de transfert.",
    keywords: ["deeptech", "brevets", "SATT", "licences"],
    timeline: [
      { year: 2022, patents: 39, startups: 8, parliament: 8 },
      { year: 2023, patents: 44, startups: 10, parliament: 8 },
      { year: 2024, patents: 47, startups: 10, parliament: 10 },
      { year: 2025, patents: 52, startups: 11, parliament: 10 },
    ],
    ecosystem: {
      companies: 1125,
      jobs: 29000,
      revenue: 3400000000,
      territories: ["Lyon", "Nancy", "Bordeaux"],
    },
    startups: [
      { name: "BioPulse", city: "Lyon", maturity: "Series B", jobs: 88 },
      { name: "MatForge", city: "Nancy", maturity: "Series A", jobs: 33 },
      { name: "NanoBridge", city: "Bordeaux", maturity: "Seed", jobs: 18 },
    ],
    parliament: {
      mentions: 42,
      trend: "En hausse",
      topics: ["brevets publics", "deeptech", "SATT"],
    },
    strengths: ["Brevets en progression", "Signal deeptech lisible", "Chaîne de maturation claire"],
    openQuestions: ["Quels brevets deviennent des produits ?", "Quel délai moyen de transfert ?"],
  },
  "423": {
    programmeCode: "423",
    title: "Modernisation industrielle et diffusion numérique",
    summary:
      "Un programme centré sur l'adoption de technologies par les entreprises, la robotique, les logiciels industriels et la productivité.",
    budgetUse: "Soutenir la modernisation de PME et ETI, notamment dans les chaînes industrielles.",
    keywords: ["industrie", "PME", "robotique", "numérique"],
    timeline: [
      { year: 2022, patents: 16, startups: 13, parliament: 12 },
      { year: 2023, patents: 19, startups: 15, parliament: 13 },
      { year: 2024, patents: 23, startups: 16, parliament: 15 },
      { year: 2025, patents: 26, startups: 17, parliament: 16 },
    ],
    ecosystem: {
      companies: 1510,
      jobs: 47800,
      revenue: 6290000000,
      territories: ["Nantes", "Saint-Étienne", "Lille"],
    },
    startups: [
      { name: "FactoryOS", city: "Nantes", maturity: "Scale-up", jobs: 120 },
      { name: "RoboLine", city: "Saint-Étienne", maturity: "Series B", jobs: 54 },
      { name: "MaintenIA", city: "Lille", maturity: "Series A", jobs: 26 },
    ],
    parliament: {
      mentions: 65,
      trend: "En hausse",
      topics: ["réindustrialisation", "PME", "robotisation"],
    },
    strengths: ["Signal entrepreneurial dense", "Lien direct avec PME industrielles", "Attention parlementaire élevée"],
    openQuestions: ["Quels secteurs captent réellement l'aide ?", "Comment mesurer les gains de productivité ?"],
  },
  "424": {
    programmeCode: "424",
    title: "Investissements stratégiques et souveraineté",
    summary:
      "Le programme le plus massif, lié aux filières critiques : énergie, spatial, semi-conducteurs, santé et technologies souveraines.",
    budgetUse: "Financer des investissements à forte intensité capitalistique dans les filières stratégiques.",
    keywords: ["souveraineté", "énergie", "semi-conducteurs", "spatial"],
    timeline: [
      { year: 2022, patents: 59, startups: 21, parliament: 18 },
      { year: 2023, patents: 68, startups: 24, parliament: 21 },
      { year: 2024, patents: 78, startups: 27, parliament: 23 },
      { year: 2025, patents: 89, startups: 28, parliament: 26 },
    ],
    ecosystem: {
      companies: 766,
      jobs: 68100,
      revenue: 24100000000,
      territories: ["Grenoble", "Toulouse", "Marseille"],
    },
    startups: [
      { name: "HelioGrid", city: "Marseille", maturity: "Scale-up", jobs: 134 },
      { name: "ChipFoundry", city: "Grenoble", maturity: "Series B", jobs: 82 },
      { name: "OrbitalFab", city: "Toulouse", maturity: "Series B", jobs: 61 },
    ],
    parliament: {
      mentions: 103,
      trend: "En hausse",
      topics: ["souveraineté industrielle", "énergie", "spatial"],
    },
    strengths: ["Budget très aligné avec les filières critiques", "Forte densité brevets", "Attention parlementaire robuste"],
    openQuestions: ["Quelle part atteint les PME innovantes ?", "Quels retours territoriaux objectiver ?"],
  },
  "425": {
    programmeCode: "425",
    title: "Écosystèmes territoriaux d'innovation",
    summary:
      "Un programme de maillage : incubateurs, pôles, plateformes territoriales et dispositifs qui rendent l'innovation plus diffuse.",
    budgetUse: "Financer les structures qui relient entreprises, recherche, territoires et accompagnement.",
    keywords: ["territoires", "incubateurs", "pôles", "écosystèmes"],
    timeline: [
      { year: 2022, patents: 29, startups: 28, parliament: 13 },
      { year: 2023, patents: 34, startups: 31, parliament: 15 },
      { year: 2024, patents: 41, startups: 34, parliament: 17 },
      { year: 2025, patents: 47, startups: 37, parliament: 19 },
    ],
    ecosystem: {
      companies: 2440,
      jobs: 35900,
      revenue: 2900000000,
      territories: ["Rennes", "Dijon", "Montpellier"],
    },
    startups: [
      { name: "TerritoiresLab", city: "Rennes", maturity: "Series A", jobs: 44 },
      { name: "ClusterData", city: "Dijon", maturity: "Series A", jobs: 31 },
      { name: "IncubAct", city: "Montpellier", maturity: "Acteur public", jobs: 19 },
    ],
    parliament: {
      mentions: 74,
      trend: "Stable",
      topics: ["territoires d'innovation", "pôles", "incubateurs"],
    },
    strengths: ["Signal territorial large", "Startups nombreuses", "Rôle de maillage inter-filières"],
    openQuestions: ["Quels territoires sont sous-couverts ?", "Quels indicateurs relient soutien structurel et croissance ?"],
  },
};

export function getAmount(line: BudgetLine, year: BudgetYear): number {
  if (year === "2024") return line.amount2024;
  if (year === "2025") return line.amount2025;
  return line.amount2026;
}

export function getTotalBudget(year: BudgetYear = "2026"): number {
  return budgetLines.reduce((total, line) => total + getAmount(line, year), 0);
}

export function getProgrammes(): InvestmentProgramme[] {
  const grouped = new Map<string, { name: string; amount: number; linesCount: number }>();

  budgetLines.forEach((line) => {
    const current = grouped.get(line.programmeCode);
    grouped.set(line.programmeCode, {
      name: line.programmeName,
      amount: (current?.amount ?? 0) + line.amount2026,
      linesCount: (current?.linesCount ?? 0) + 1,
    });
  });

  return Array.from(grouped.entries())
    .map(([programmeCode, value]) => ({
      programmeCode,
      programmeName: value.name,
      amount2026: value.amount,
      linesCount: value.linesCount,
      report: reportsByProgramme[programmeCode],
    }))
    .sort((left, right) => right.amount2026 - left.amount2026);
}

export function getProgramme(programmeCode: string): InvestmentProgramme | undefined {
  return getProgrammes().find((programme) => programme.programmeCode === programmeCode);
}

export function getPieData() {
  const colors = ["#000091", "#18753c", "#d64f7f", "#6a6af4", "#8d533e"];

  return getProgrammes().map((programme, index) => ({
    name: `${programme.programmeCode} - ${programme.programmeName}`,
    value: programme.amount2026,
    color: colors[index % colors.length],
  }));
}
