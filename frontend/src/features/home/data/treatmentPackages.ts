export interface CurrencyRate {
    code: string;
    symbol: string;
    rateAgainstUSD: number;
}

export interface PackageItem {
    id: string;
    title: string;
    category: string;
    basePriceUSD: number;
    hospitalStay: string;
    hotelStay: string;
    inclusions: string[];
    exclusions: string[];
}

export const CURRENCY_OPTIONS: CurrencyRate[] = [
    { code: "USD", symbol: "$", rateAgainstUSD: 1 },
    { code: "SAR", symbol: "﷼", rateAgainstUSD: 3.75 },
    { code: "AED", symbol: "د.إ", rateAgainstUSD: 3.67 },
    { code: "EUR", symbol: "€", rateAgainstUSD: 0.92 },
    { code: "INR", symbol: "₹", rateAgainstUSD: 83.5 },
];

export const TREATMENT_PACKAGES: PackageItem[] = [
    {
        id: "pkg-knee",
        title: "Unilateral Knee Replacement",
        category: "Orthopedics",
        basePriceUSD: 4500,
        hospitalStay: "4 Days Hospital Stay",
        hotelStay: "10 Days Post-discharge Stay",
        inclusions: [
            "FDA-approved imported implant",
            "Surgeon & anesthesiologist fees",
            "Standard private room & nursing",
            "Airport pick-up & drop transfers",
            "Initial physiotherapy sessions",
        ],
        exclusions: [
            "Pre-existing condition complications",
            "Specialist cross-consultations",
            "Extended ICU or stay beyond 4 days",
            "International flight tickets",
        ],
    },
    {
        id: "pkg-cabg",
        title: "Coronary Bypass Surgery (CABG)",
        category: "Cardiology",
        basePriceUSD: 6000,
        hospitalStay: "8 Days Hospital Stay (inc. 2 ICU)",
        hotelStay: "12 Days Post-discharge Stay",
        inclusions: [
            "Operating room & surgical consumable charges",
            "Cardiac surgeon & ICU team care",
            "Standard post-op diagnostics & imaging",
            "Airport ambulance or cab transfer",
            "Dedicated medical interpreter assist",
        ],
        exclusions: [
            "Emergency re-exploration surgery",
            "Unrelated blood bank component fees",
            "Hotel meals & companion stay expenses",
            "Visa issuance embassy fees",
        ],
    },
    {
        id: "pkg-ivf",
        title: "IVF Cycle with ICSI & Blastocyst",
        category: "Fertility",
        basePriceUSD: 3500,
        hospitalStay: "Day Care / Outpatient",
        hotelStay: "14-21 Days Local Stay",
        inclusions: [
            "Follicular ultrasound monitoring",
            "Ovum pick-up & embryo transfer",
            "ICSI procedure & blastocyst culture",
            "Specialist embryologist consultation",
            "Local SIM & currency exchange assistance",
        ],
        exclusions: [
            "Advanced hormonal stimulation medications",
            "Embryo freezing & annual storage fees",
            "Donor gametes or surrogate services",
            "Post-pregnancy clinical monitoring",
        ],
    },
];