export interface TreatmentDetail {
    slug: string;
    name: string;
    category: string;
    summary: string;
    heroImage: string;
    indicativeCost: {
        startingUSD: number;
        rangeDisplay: string;
        pricingBasis: string;
        inclusions: string[];
        exclusions: string[];
    };
    overview: {
        description: string;
        keyHighlights: string[];
    };
    indications: string[];
    options: {
        title: string;
        description: string;
    }[];
    procedureSteps: {
        step: string;
        title: string;
        detail: string;
    }[];
    benefits: string[];
    risks: string[];
    recovery: {
        hospitalStay: string;
        overallStay: string;
        returnToWork: string;
        notes: string;
    };
    hospitals: {
        id: string;
        name: string;
        location: string;
        accreditation: string;
        image: string;
    }[];
    doctors: {
        id: string;
        name: string;
        title: string;
        experience: string;
        hospital: string;
        image: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
    relatedTreatments: {
        name: string;
        slug: string;
        category: string;
        startingCost: string;
    }[];
}

export const TREATMENTS_DETAILS: Record<string, TreatmentDetail> = {
    "coronary-artery-bypass-grafting-cabg": {
        slug: "coronary-artery-bypass-grafting-cabg",
        name: "Coronary Artery Bypass Grafting (CABG)",
        category: "Cardiology & Cardiac Surgery",
        summary:
            "Surgical revascularization restoring critical arterial blood supply around occluded coronary arteries using arterial or venous conduit grafts.",
        heroImage:
            "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1200&q=80",
        indicativeCost: {
            startingUSD: 4500,
            rangeDisplay: "$4,500 – $6,500",
            pricingBasis: "Standard uncomplicated bypass procedure in a multi-sharing or twin room",
            inclusions: [
                "Pre-operative anesthesia assessment & standard cardiac panels",
                "Operating theatre, cardiac perfusion & routine consumables",
                "Surgeon, chief anesthetist & intensivist procedural fees",
                "2–3 Days Post-Op Coronary ICU & 3–4 Days Inpatient Stay",
                "Standard post-operative discharge medication package",
            ],
            exclusions: [
                "High-complexity anatomical variations or emergency off-protocol interventions",
                "Unplanned extended ICU stay or mechanical circulatory support (ECMO/IABP)",
                "Pre-existing non-cardiac specialty management (dialysis, advanced neurology)",
                "Extended post-discharge hotel stays and non-medical flight logistics",
            ],
        },
        overview: {
            description:
                "Coronary Artery Bypass Grafting (CABG) is an open or minimally invasive cardiothoracic surgical procedure designed to circumvent severe obstructive coronary artery disease. Healthy conduits—such as the left internal mammary artery (LIMA) or saphenous veins—are anastomosed to restore unimpeded myocardial perfusion.",
            keyHighlights: [
                "Off-pump (beating heart) or conventional on-pump cardiopulmonary bypass",
                "Utilizes durable arterial conduits (LIMA) with proven long-term patency",
                "Managed inside dedicated cardiac critical care intensive units",
            ],
        },
        indications: [
            "Severe multi-vessel coronary artery disease with compromised left ventricular function",
            "Significant left main coronary artery stenosis (greater than 50% occlusion)",
            "Recurrent angina refractory to optimal medical therapy or prior stenting",
            "Coronary anatomy unfavorable for percutaneous coronary intervention (PCI)",
        ],
        options: [
            {
                title: "Off-Pump CABG (Beating Heart)",
                description:
                    "Performed on a stabilizing platform without stopping the heart, reducing systemic inflammation and stroke risk in select patients.",
            },
            {
                title: "Conventional On-Pump CABG",
                description:
                    "Supported by a heart-lung machine to offer a quiet, bloodless field for intricate microscopic grafting in complex multi-vessel anatomy.",
            },
            {
                title: "Minimally Invasive Direct CABG (MIDCAB)",
                description:
                    "Keyhole thoracotomy avoiding sternotomy, primarily applied for isolated left anterior descending artery revascularization.",
            },
        ],
        procedureSteps: [
            {
                step: "01",
                title: "Pre-Surgical Planning",
                detail:
                    "Coronary angiogram review, echocardiography, carotid ultrasound, and pulmonary function clearance under sterile surgical prep.",
            },
            {
                step: "02",
                title: "Conduit Harvesting",
                detail:
                    "Meticulous harvesting of the internal mammary artery and/or endoscopic vein harvesting from the leg to minimize incisions.",
            },
            {
                step: "03",
                title: "Graft Anastomosis",
                detail:
                    "Precision microsuturing connecting the bypass conduit past the blocked coronary artery segments to establish continuous flow.",
            },
            {
                step: "04",
                title: "Intensive Recovery",
                detail:
                    "Transfer to the dedicated Cardiac Surgical ICU for continuous hemodynamics, gradual extubation, and step-down mobilization.",
            },
        ],
        benefits: [
            "Significant relief from severe angina and shortness of breath",
            "Substantially reduced risk of acute myocardial infarction",
            "Improved long-term survival in multi-vessel diabetic and cardiac disease",
            "Restoration of functional physical capacity and daily quality of life",
        ],
        risks: [
            "Bleeding requiring transfusion or re-exploration",
            "Transient cardiac arrhythmias (e.g., atrial fibrillation)",
            "Superficial or deep sternal wound infection",
            "Perioperative neurological events or renal function alterations",
        ],
        recovery: {
            hospitalStay: "5 – 7 Days (including 2–3 days in ICU)",
            overallStay: "14 – 18 Days recommended in Delhi prior to flight departure",
            returnToWork: "6 – 10 Weeks depending on sternal healing and physical demands",
            notes:
                "Patients receive sternal precautions, spirometry lung exercises, and cardiac physiotherapy protocols before travel fit-to-fly clearance.",
        },
        hospitals: [
            {
                id: "hosp-1",
                name: "Max Super Speciality Hospital, Saket",
                location: "Saket, New Delhi",
                accreditation: "JCI & NABH Accredited",
                image:
                    "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
            },
            {
                id: "hosp-2",
                name: "Fortis Escorts Heart Institute",
                location: "Okhla / South Delhi",
                accreditation: "JCI & NABH Accredited",
                image:
                    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
            },
        ],
        doctors: [
            {
                id: "doc-1",
                name: "Dr. B. K. Sharma",
                title: "Principal Director & Chief Cardiothoracic Surgeon",
                experience: "26+ Years Experience",
                hospital: "Max Super Speciality Hospital, Saket",
                image:
                    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
            },
            {
                id: "doc-2",
                name: "Dr. Ashok Mehta",
                title: "Chairman - Adult Cardiovascular Surgery",
                experience: "31+ Years Experience",
                hospital: "Fortis Escorts Heart Institute",
                image:
                    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
            },
        ],
        faqs: [
            {
                question: "How long do CABG bypass grafts typically last?",
                answer:
                    "Internal mammary arterial grafts exhibit excellent long-term durability, with patency rates exceeding 90% at 10 years. Venous conduits generally maintain high patency when combined with prescribed lifestyle changes and statin therapy.",
            },
            {
                question: "When is it safe to fly back home after coronary bypass surgery?",
                answer:
                    "Patients are evaluated in-person around day 12–14 for echocardiography, chest X-rays, and wound checks. A formal Fit-to-Fly certificate is issued once oxygen levels and mobility are clinically verified.",
            },
            {
                question: "What is the difference between CABG and Angioplasty (PCI)?",
                answer:
                    "Angioplasty utilizes stents to open narrowed arteries from within via catheterization. CABG surgically detours blood around blockages and is preferred for extensive multi-vessel disease or diabetic patients.",
            },
        ],
        relatedTreatments: [
            {
                name: "Transcatheter Aortic Valve Replacement (TAVR)",
                slug: "transcatheter-aortic-valve-replacement-tavr",
                category: "Cardiology",
                startingCost: "$16,000",
            },
            {
                name: "Minimally Invasive Spine Fusion (TLIF)",
                slug: "minimally-invasive-spine-fusion",
                category: "Neurology & Spine",
                startingCost: "$5,200",
            },
            {
                name: "Robotic Total Knee Replacement",
                slug: "robotic-total-knee-replacement",
                category: "Orthopedics",
                startingCost: "$4,200",
            },
        ],
    },
};