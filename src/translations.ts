export type Language = 'fr' | 'en' | 'pt' | 'es' | 'ar';

export interface Translations {
  nav: {
    roleSubtitle: string;
    profile: string;
    experiences: string;
    skills: string;
    education: string;
    languages: string;
    contactBtn: string;
  };
  hero: {
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    bio: string;
    exploreBtn: string;
    location: string;
    photoAdd: string;
    photoTooltip: string;
    pfeBadge: string;
    keyDomainsLabel: string;
    keyDomainsValue: string;
    languagesLabel: string;
    languagesValue: string;
    availabilityLabel: string;
    availabilityValue: string;
    majorAssetsTitle: string;
    asset1: string;
    asset2: string;
    asset3: string;
    asset4: string;
  };
  highlights: {
    encgTitle: string;
    encgDesc: string;
    durationTitle: string;
    durationDesc: string;
    languagesTitle: string;
    languagesDesc: string;
    experiencesTitle: string;
    experiencesDesc: string;
  };
  profile: {
    photoName: string;
    photoDegree: string;
    photoSchool: string;
    heading: string;
    description: string;
    bullet1Title: string;
    bullet1Desc: string;
    bullet2Title: string;
    bullet2Desc: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
  };
  experiences: {
    sectionTitle: string;
    tabAll: string;
    tabStages: string;
    tabPro: string;
    nearyaaTitle: string;
    nearyaaDept: string;
    nearyaaDate: string;
    nearyaaBullet1: string;
    nearyaaBullet2: string;
    nearyaaBullet3: string;
    nearyaaBullet4: string;
    radeecTitle: string;
    radeecDept: string;
    radeecDate: string;
    radeecBullet1: string;
    radeecBullet2: string;
    radeecBullet3: string;
    avaaxTitle: string;
    avaaxDept: string;
    avaaxDate: string;
    avaaxBullet1: string;
    avaaxBullet2: string;
    avaaxBullet3: string;
    preplyTitle: string;
    preplyDept: string;
    preplyDate: string;
    preplyBullet1: string;
    preplyBullet2: string;
    preplyBullet3: string;
  };
  skills: {
    sectionTitle: string;
    sectionSubtitle: string;
    cat1Title: string;
    skill1_1: string;
    skill1_1_level: string;
    skill1_2: string;
    skill1_2_level: string;
    skill1_3: string;
    skill1_3_level: string;
    skill1_4: string;
    skill1_4_level: string;
    cat2Title: string;
    tool1: string;
    tool1_tag: string;
    tool2: string;
    tool2_tag: string;
    tool3: string;
    tool3_tag: string;
    tool4: string;
    tool4_tag: string;
    cat3Title: string;
    soft1_title: string;
    soft1_desc: string;
    soft2_title: string;
    soft2_desc: string;
    soft3_title: string;
    soft3_desc: string;
  };
  education: {
    sectionTitle: string;
    sectionSubtitle: string;
    item1Title: string;
    item1Date: string;
    item1School: string;
    item1Desc: string;
    item2Title: string;
    item2Date: string;
    item2School: string;
    item2Desc: string;
  };
  languagesSection: {
    sectionTitle: string;
    sectionSubtitle: string;
    langPt: string;
    langPtLevel: string;
    langPtNote: string;
    langFr: string;
    langFrLevel: string;
    langFrNote: string;
    langEn: string;
    langEnLevel: string;
    langEnNote: string;
    langEs: string;
    langEsLevel: string;
    langEsNote: string;
    extraTitle: string;
    role1Title: string;
    role1Date: string;
    role1Desc: string;
    role2Title: string;
    role2Date: string;
    role2Desc: string;
  };
  cta: {
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    generateBtn: string;
    messageBtn: string;
  };
  footer: {
    role: string;
    cvBtn: string;
    copyright: string;
  };
  contactModal: {
    badge: string;
    title: string;
    subtitle: string;
    successTitle: string;
    successMessage: string;
    closeBtn: string;
    labelName: string;
    placeholderName: string;
    labelEmail: string;
    placeholderEmail: string;
    labelSubject: string;
    placeholderSubject: string;
    labelMessage: string;
    placeholderMessage: string;
    directEmail: string;
    submitBtn: string;
    submittingBtn: string;
    errorGeneric: string;
    errorConnection: string;
    defaultSubjectPrefix: string;
  };
  coverLetterModal: {
    badge: string;
    title: string;
    subtitle: string;
    labelCompany: string;
    placeholderCompany: string;
    generateBtn: string;
    generatingBtn: string;
    generatedTitle: string;
    copyBtn: string;
    copiedBtn: string;
  };
  pdfModal: {
    title: string;
    subtitle: string;
    downloadBtn: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      roleSubtitle: 'Commerce International • ENCG Settat',
      profile: 'Profil',
      experiences: 'Expériences & Stages',
      skills: 'Compétences',
      education: 'Formation',
      languages: 'Langues',
      contactBtn: 'Contact Direct',
    },
    hero: {
      titlePrefix: 'Stratégie ',
      titleHighlight: 'Internationale',
      titleSuffix: ' & Développement B2B',
      bio: "Étudiante en Master 2 Commerce International à l'ENCG Settat. Bilingue français et portugais, passionnée et rigoureuse, je recherche un stage PFE de 4 mois à partir de janvier 2027 pour mettre mon énergie et mes compétences au service de vos projets de développement B2B et import-export.",
      exploreBtn: 'Explorer le Parcours',
      location: 'Settat, Maroc',
      photoAdd: 'Photo +',
      photoTooltip: 'Cliquer pour ajouter ou modifier votre photo',
      pfeBadge: 'Stage PFE 2027',
      keyDomainsLabel: 'Domaines clés',
      keyDomainsValue: 'Import/Export & B2B',
      languagesLabel: 'Langues',
      languagesValue: 'Portugais (C1) • Français (B2)',
      availabilityLabel: 'Disponibilité',
      availabilityValue: 'Janvier 2027 (4 mois)',
      majorAssetsTitle: 'Atouts Majeurs',
      asset1: 'Négociation Commerciale',
      asset2: 'Incoterms & Logistique',
      asset3: 'Prospection B2C / B2B',
      asset4: 'Excel & ERP',
    },
    highlights: {
      encgTitle: 'ENCG',
      encgDesc: 'École Nationale de Commerce & Gestion',
      durationTitle: '4 Mois',
      durationDesc: 'Stage PFE (Janvier 2027)',
      languagesTitle: 'Bilingue',
      languagesDesc: 'Portugais (C1) & Français (B2)',
      experiencesTitle: '4+',
      experiencesDesc: 'Expériences & Stages Majeurs',
    },
    profile: {
      photoName: 'Dilsa Cá',
      photoDegree: 'Master Commerce International',
      photoSchool: 'ENCG Settat',
      heading: "Dynamique, rigoureuse et polyvalente, prête pour l'excellence opérationnelle.",
      description: "Actuellement en Master 2 en Commerce International à l’ENCG Settat, je combine une solide formation théorique en gestion et négoce avec des expériences concrètes en prospection B2C/B2B, relation client, contrôle de gestion et enseignement interculturel. Passionnée par le commerce mondial, je suis reconnue pour ma réactivité, mon sens de l'écoute et mon esprit d'équipe.",
      bullet1Title: "Commerce International & B2B :",
      bullet1Desc: "Maîtrise des techniques d'import-export, des Incoterms et de la négociation commerciale.",
      bullet2Title: "Soft Skills & Leadership :",
      bullet2Desc: "Excellente communicante, dotée d'une grande adaptabilité, flexibilité et gestion d'équipe éprouvée (Secrétaire Générale AFSAM).",
      card1Title: 'Développement Commercial',
      card1Desc: "Prospection, identification et fidélisation des nouveaux clients, traitement des objections et gestion du service après-vente (Expérience Nearyaa Express & Avaax).",
      card2Title: 'Audit & Analyse Financière',
      card2Desc: "Contribution au suivi des indicateurs financiers et maîtrise des outils analytiques avancés (Expérience RADEEC - Contrôle de gestion).",
      card3Title: 'Communication Multiculturelle',
      card3Desc: "Expérience d'enseignement international (Preply) et de gestion associative multiculturelle (AFSAM, ASSEBGUIM).",
      card4Title: 'Outils & Maîtrise Technique',
      card4Desc: "Excel avancé (Tableaux croisés dynamiques, RECHERCHEV), ERP, Word professionnel, PowerPoint et Canva pour des présentations percutantes.",
    },
    experiences: {
      sectionTitle: 'Expériences & Stages Pratiques',
      tabAll: 'Tout voir',
      tabStages: 'Stages',
      tabPro: 'Expériences Pro',
      nearyaaTitle: 'NEARYA EXPRESS',
      nearyaaDept: 'Département Commercial',
      nearyaaDate: 'Avril - Mai 2026',
      nearyaaBullet1: 'Prospections, identification et fidélisation des nouveaux clients.',
      nearyaaBullet2: 'Préparations des offres commerciales adaptées aux prospects.',
      nearyaaBullet3: "Assurer l'accompagnement, suivi et gestion de service après-vente.",
      nearyaaBullet4: 'Gestion proactive des relations clients et satisfaction.',
      radeecTitle: 'RADEEC',
      radeecDept: 'Audit & Contrôle de Gestion',
      radeecDate: 'Août - Septembre 2024',
      radeecBullet1: 'Contribution au suivi rigoureux des indicateurs financiers.',
      radeecBullet2: 'Analyse des tableaux de bord et reporting de performance.',
      radeecBullet3: 'Optimisation des processus de contrôle interne.',
      avaaxTitle: 'AVAAX',
      avaaxDept: "Chargée de téléprospection (Centre d'appels)",
      avaaxDate: 'Juin 2026',
      avaaxBullet1: 'Téléprospection en énergies renouvelables (PAC).',
      avaaxBullet2: "Vérification rigoureuse des critères d'éligibilité clients.",
      avaaxBullet3: 'Traitement efficace des objections clients et argumentation persuasive.',
      preplyTitle: 'PREPLY',
      preplyDept: 'Professeure de portugais',
      preplyDate: 'Août 2024 - Présent',
      preplyBullet1: 'Enseignement du portugais à des étudiants et professionnels internationaux.',
      preplyBullet2: 'Développement de supports pédagogiques sur mesure.',
      preplyBullet3: 'Maîtrise de la communication interculturelle et pédagogie active.',
    },
    skills: {
      sectionTitle: 'Compétences Techniques & Outils Métier',
      sectionSubtitle: "Un ensemble d'aptitudes techniques et relationnelles forgées à l'ENCG Settat et lors de mes expériences sur le terrain.",
      cat1Title: 'Commerce & Gestion',
      skill1_1: 'Négociation Commerciale',
      skill1_1_level: 'Avancé',
      skill1_2: "Techniques d'Import-Export",
      skill1_2_level: 'Maîtrisé',
      skill1_3: 'Incoterms (Notions & Application)',
      skill1_3_level: 'Opérationnel',
      skill1_4: 'Logiciel de Gestion (ERP)',
      skill1_4_level: 'Intermédiaire',
      cat2Title: 'Bureautique & Outils',
      tool1: 'Excel Avancé',
      tool1_tag: 'TCD & RECHERCHEV',
      tool2: 'Word Professionnel',
      tool2_tag: 'Rédaction & Rapports',
      tool3: 'PowerPoint',
      tool3_tag: 'Présentations Exécutives',
      tool4: 'Canva (Design)',
      tool4_tag: 'Supports Visuels',
      cat3Title: 'Qualités & Soft Skills',
      soft1_title: 'Capacité de communication',
      soft1_desc: 'Excellente aisance relationnelle et diplomatie interculturelle acquise multilinguistiquement.',
      soft2_title: 'Adaptabilité & Flexibilité',
      soft2_desc: "Capacité d'intégration rapide dans des environnements exigeants et internationaux.",
      soft3_title: "Gestion de tâches et d'équipe",
      soft3_desc: 'Leadership associatif éprouvé (Secrétaire Générale AFSAM, Trésorière ASSEBGUIM).',
    },
    education: {
      sectionTitle: 'Formation Académique',
      sectionSubtitle: "Parcours d'excellence en gestion et commerce",
      item1Title: "Cycle de l'ENCG - Master Commerce International",
      item1Date: '2021 - 2027',
      item1School: "L'ENCG Settat – École Nationale de Commerce et de Gestion",
      item1Desc: "Formation approfondie en management international, stratégie d'entreprise, logistique, commerce extérieur et négociation B2B. Candidate motivée au stage PFE (janvier 2027).",
      item2Title: 'Baccalauréat Sciences Économiques',
      item2Date: '2019',
      item2School: 'Centre Educativo Dr. Emílio Gomes, Guinée-Bissau',
      item2Desc: 'Bases solides en économie, comptabilité et mathématiques appliquées.',
    },
    languagesSection: {
      sectionTitle: 'Langues & Engagements',
      sectionSubtitle: 'Multilinguisme et leadership associatif',
      langPt: 'Portugais',
      langPtLevel: 'C1 (Bilingue)',
      langPtNote: 'Langue maternelle / Courante',
      langFr: 'Français',
      langFrLevel: 'B2 (Bilingue)',
      langFrNote: 'Maîtrise professionnelle',
      langEn: 'Anglais',
      langEnLevel: 'B1',
      langEnNote: 'Professionnel intermédiaire',
      langEs: 'Espagnol',
      langEsLevel: 'A2',
      langEsNote: 'Notions de base',
      extraTitle: 'Activités Extra-Professionnelles',
      role1Title: 'Secrétaire Générale • AFSAM',
      role1Date: 'Avril 2025 - Mai 2026',
      role1Desc: 'Association of Foreign Students Alumni in Management. Organisation des réunions, comptes rendus et gestion de la communication interne/externe.',
      role2Title: 'Trésorière • ASSEBGUIM',
      role2Date: 'Déc. 2021 - Nov. 2023',
      role2Desc: "Association des Stagiaires et Étudiants Bissau-Guinéens au Maroc. Gestion des finances, suivi des dépenses, rapports financiers et organisation d'activités.",
    },
    cta: {
      titlePrefix: 'Prête à rejoindre votre équipe en ',
      titleHighlight: 'Janvier 2027',
      description: "Vous recherchez une stagiaire PFE motivée, dédiée et bilingue en commerce international et développement commercial B2B ? Contactez-moi directement pour échanger sur vos opportunités.",
      generateBtn: 'Générer ma Lettre PFE Personnalisée',
      messageBtn: 'Envoyer un Message',
    },
    footer: {
      role: 'Master Commerce International (ENCG Settat)',
      cvBtn: 'CV PDF',
      copyright: '© 2026 Dilsa Cá. Tous droits réservés.',
    },
    contactModal: {
      badge: 'Contact Direct',
      title: 'Entrer en contact avec Dilsa',
      subtitle: "Discutez d'une opportunité de stage PFE (Janvier 2027) ou d'un projet de collaboration avec Dilsa.",
      successTitle: 'Message envoyé avec succès !',
      successMessage: 'Votre message a été transmis directement à Dilsa (mailondiasbatista@gmail.com). Elle vous répondra très rapidement.',
      closeBtn: 'Fermer',
      labelName: 'Votre Nom / Recruteur *',
      placeholderName: 'Ex. Jean Dupont',
      labelEmail: 'Email Professionnel *',
      placeholderEmail: 'Ex. j.dupont@entreprise.com',
      labelSubject: 'Sujet / Entreprise *',
      placeholderSubject: 'Ex. Proposition de Stage PFE 2027 - LogiMed SARL',
      labelMessage: 'Message / Proposition de Stage PFE *',
      placeholderMessage: 'Bonjour Dilsa, nous souhaitons vous proposer un entretien pour notre offre de stage PFE...',
      directEmail: 'Direct :',
      submitBtn: 'Envoyer le Message',
      submittingBtn: 'Envoi en cours...',
      errorGeneric: "Une erreur est survenue lors de l'envoi vers Formspree.",
      errorConnection: 'Erreur de connexion. Veuillez vérifier votre connexion ou réessayer.',
      defaultSubjectPrefix: 'Prise de contact - Stage PFE',
    },
    coverLetterModal: {
      badge: 'Générateur de Lettre PFE',
      title: 'Créer une Lettre de Motivation sur Mesure',
      subtitle: 'Entrez le nom de votre entreprise pour générer instantanément la lettre professionnelle de Dilsa.',
      labelCompany: 'Nom de votre Entreprise / Cabinet *',
      placeholderCompany: 'Ex. LogiMed International, OCP Group, Nestlé...',
      generateBtn: 'Générer',
      generatingBtn: 'Génération...',
      generatedTitle: 'Lettre Générée pour',
      copyBtn: 'Copier le texte',
      copiedBtn: 'Copié !',
    },
    pdfModal: {
      title: 'CV Officiel - Dilsa Cá',
      subtitle: 'Étudiante en Master 2 Commerce International • ENCG Settat',
      downloadBtn: 'Télécharger',
    },
  },
  en: {
    nav: {
      roleSubtitle: 'International Trade • ENCG Settat',
      profile: 'Profile',
      experiences: 'Experiences & Internships',
      skills: 'Skills',
      education: 'Education',
      languages: 'Languages',
      contactBtn: 'Direct Contact',
    },
    hero: {
      titlePrefix: 'International ',
      titleHighlight: 'Strategy',
      titleSuffix: ' & B2B Development',
      bio: 'Master 2 student in International Trade at ENCG Settat. Bilingual in French and Portuguese, passionate and dedicated, I am seeking a 4-month final internship (PFE) starting January 2027 to actively contribute to your B2B growth and global trade operations.',
      exploreBtn: 'Explore Track Record',
      location: 'Settat, Morocco',
      photoAdd: 'Photo +',
      photoTooltip: 'Click to add or change your photo',
      pfeBadge: 'PFE 2027',
      keyDomainsLabel: 'Core Fields',
      keyDomainsValue: 'Import/Export & B2B',
      languagesLabel: 'Languages',
      languagesValue: 'Portuguese (C1) • French (B2)',
      availabilityLabel: 'Availability',
      availabilityValue: 'January 2027 (4 months)',
      majorAssetsTitle: 'Key Strengths',
      asset1: 'Commercial Negotiation',
      asset2: 'Incoterms & Logistics',
      asset3: 'B2C / B2B Prospecting',
      asset4: 'Excel & ERP Systems',
    },
    highlights: {
      encgTitle: 'ENCG',
      encgDesc: 'National School of Commerce & Management',
      durationTitle: '4 Months',
      durationDesc: 'End-of-Studies Internship (Jan. 2027)',
      languagesTitle: 'Bilingual',
      languagesDesc: 'Portuguese (C1) & French (B2)',
      experiencesTitle: '4+',
      experiencesDesc: 'Key Professional Experiences & Internships',
    },
    profile: {
      photoName: 'Dilsa Cá',
      photoDegree: 'Master International Trade',
      photoSchool: 'ENCG Settat',
      heading: 'Dynamic, meticulous, and versatile, dedicated to operational excellence.',
      description: 'Currently pursuing a Master 2 in International Trade at ENCG Settat, I combine solid theoretical foundations in management and international business with hands-on track records in B2B/B2C prospecting, client relationship management, financial auditing, and intercultural tutoring. Passionate and highly adaptable, I thrive in collaborative, fast-paced global environments.',
      bullet1Title: 'International Trade & B2B:',
      bullet1Desc: 'Expertise in import-export procedures, Incoterms, and cross-border commercial negotiation.',
      bullet2Title: 'Soft Skills & Leadership:',
      bullet2Desc: 'Exceptional communicator, adaptable, flexible, and proven associative leader (AFSAM Secretary General).',
      card1Title: 'Business Development',
      card1Desc: 'Prospecting, client acquisition and retention, objection handling, and after-sales relationship management (Nearyaa Express & Avaax).',
      card2Title: 'Audit & Financial Analysis',
      card2Desc: 'Monitoring key performance indicators and leveraging financial management frameworks (RADEEC - Management Control).',
      card3Title: 'Intercultural Communication',
      card3Desc: 'International tutoring (Preply) and leadership in multi-national student organizations (AFSAM, ASSEBGUIM).',
      card4Title: 'Technical & Business Tools',
      card4Desc: 'Advanced Excel (Pivot tables, VLOOKUP), ERP management software, Word, PowerPoint, and Canva for impactful executive decks.',
    },
    experiences: {
      sectionTitle: 'Practical Experiences & Internships',
      tabAll: 'All',
      tabStages: 'Internships',
      tabPro: 'Professional Roles',
      nearyaaTitle: 'NEARYA EXPRESS',
      nearyaaDept: 'Commercial Department',
      nearyaaDate: 'April - May 2026',
      nearyaaBullet1: 'Sales prospecting, target identification, and client portfolio loyalty.',
      nearyaaBullet2: 'Tailoring solutions and commercial proposals to key business prospects.',
      nearyaaBullet3: 'Ensuring after-sales support, delivery monitoring, and client satisfaction.',
      nearyaaBullet4: 'Proactive relationship management and high-standard service quality.',
      radeecTitle: 'RADEEC',
      radeecDept: 'Audit & Management Control',
      radeecDate: 'August - September 2024',
      radeecBullet1: 'Tracking key financial indicators and budget execution metrics.',
      radeecBullet2: 'Analyzing performance dashboards and compiling management reports.',
      radeecBullet3: 'Participating in the optimization of internal control procedures.',
      avaaxTitle: 'AVAAX',
      avaaxDept: 'Teleprospector & Sales Qualifier (Call Center)',
      avaaxDate: 'June 2026',
      avaaxBullet1: 'B2B/B2C prospecting in renewable energy solutions (Heat Pumps).',
      avaaxBullet2: 'Rigorous eligibility screening and qualification of customer files.',
      avaaxBullet3: 'Handling complex objections and delivering persuasive commercial pitches.',
      preplyTitle: 'PREPLY',
      preplyDept: 'Portuguese Language Instructor',
      preplyDate: 'August 2024 - Present',
      preplyBullet1: 'Teaching Portuguese to international business professionals and students.',
      preplyBullet2: 'Designing personalized pedagogical materials and learning curricula.',
      preplyBullet3: 'Mastering cross-cultural communication and pedagogical adaptability.',
    },
    skills: {
      sectionTitle: 'Technical Capabilities & Business Tools',
      sectionSubtitle: 'A balanced skillset of operational expertise and interpersonal leadership honed at ENCG Settat and on the field.',
      cat1Title: 'Trade & Management',
      skill1_1: 'Commercial Negotiation',
      skill1_1_level: 'Advanced',
      skill1_2: 'Import-Export Procedures',
      skill1_2_level: 'Proficient',
      skill1_3: 'Incoterms (Concepts & Practice)',
      skill1_3_level: 'Operational',
      skill1_4: 'ERP Management Systems',
      skill1_4_level: 'Intermediate',
      cat2Title: 'Productivity & Office Tools',
      tool1: 'Advanced Excel',
      tool1_tag: 'Pivot Tables & VLOOKUP',
      tool2: 'Professional Word',
      tool2_tag: 'Drafting & Reports',
      tool3: 'PowerPoint',
      tool3_tag: 'Executive Decks',
      tool4: 'Canva (Design)',
      tool4_tag: 'Visual Materials',
      cat3Title: 'Interpersonal & Leadership Strengths',
      soft1_title: 'Communication Skills',
      soft1_desc: 'Exceptional interpersonal diplomacy and intercultural ease developed across multiple languages.',
      soft2_title: 'Adaptability & Agility',
      soft2_desc: 'Fast integration capacity into demanding, fast-paced corporate environments.',
      soft3_title: 'Task & Team Governance',
      soft3_desc: 'Proven leadership record in prominent non-profit associations (AFSAM Secretary General, ASSEBGUIM Treasurer).',
    },
    education: {
      sectionTitle: 'Academic Background',
      sectionSubtitle: 'Excellence in commerce, business administration, and strategic trade',
      item1Title: 'ENCG Degree Program - Master in International Trade',
      item1Date: '2021 - 2027',
      item1School: 'ENCG Settat – National School of Commerce and Management',
      item1Desc: 'In-depth specialization in international management, global corporate strategy, freight logistics, customs operations, and B2B negotiations. Qualified candidate for End-of-Studies Internship (January 2027).',
      item2Title: 'High School Diploma - Economic Sciences',
      item2Date: '2019',
      item2School: 'Dr. Emílio Gomes Educational Center, Guinea-Bissau',
      item2Desc: 'Rigorous foundations in economics, accounting, and applied mathematics.',
    },
    languagesSection: {
      sectionTitle: 'Languages & Associative Leadership',
      sectionSubtitle: 'Multilingual fluency and community leadership',
      langPt: 'Portuguese',
      langPtLevel: 'C1 (Native / Fluent)',
      langPtNote: 'Native language / Fluent command',
      langFr: 'French',
      langFrLevel: 'B2 (Bilingual)',
      langFrNote: 'Professional full proficiency',
      langEn: 'English',
      langEnLevel: 'B1',
      langEnNote: 'Intermediate professional working proficiency',
      langEs: 'Spanish',
      langEsLevel: 'A2',
      langEsNote: 'Basic operational foundations',
      extraTitle: 'Extracurricular & Leadership Activities',
      role1Title: 'Secretary General • AFSAM',
      role1Date: 'April 2025 - May 2026',
      role1Desc: 'Association of Foreign Students Alumni in Management. Managing executive meetings, minutes, and institutional internal/external communications.',
      role2Title: 'Treasurer • ASSEBGUIM',
      role2Date: 'Dec. 2021 - Nov. 2023',
      role2Desc: 'Association of Bissau-Guinean Students and Interns in Morocco. Financial management, budget tracking, quarterly reporting, and event logistics.',
    },
    cta: {
      titlePrefix: 'Ready to join your team in ',
      titleHighlight: 'January 2027',
      description: 'Looking for a motivated, dedicated, and bilingual female intern for a 4-month PFE internship in international trade and B2B commercial development? Feel free to send a message to discuss your upcoming opportunities.',
      generateBtn: 'Generate Tailored Cover Letter',
      messageBtn: 'Send a Message',
    },
    footer: {
      role: 'Master International Trade (ENCG Settat)',
      cvBtn: 'PDF Resume',
      copyright: '© 2026 Dilsa Cá. All rights reserved.',
    },
    contactModal: {
      badge: 'Direct Contact',
      title: 'Get in Touch with Dilsa',
      subtitle: 'Discuss an internship opportunity (January 2027) or collaborative project with Dilsa.',
      successTitle: 'Message sent successfully!',
      successMessage: 'Your message was sent directly to Dilsa (mailondiasbatista@gmail.com). She will respond promptly.',
      closeBtn: 'Close',
      labelName: 'Your Name / Recruiter *',
      placeholderName: 'e.g., John Smith',
      labelEmail: 'Work Email *',
      placeholderEmail: 'e.g., j.smith@company.com',
      labelSubject: 'Subject / Company *',
      placeholderSubject: 'e.g., 2027 PFE Internship Offer - LogiMed Corp',
      labelMessage: 'Message / Internship Proposal *',
      placeholderMessage: 'Hello Dilsa, we would like to invite you for an interview regarding our PFE internship offer...',
      directEmail: 'Direct:',
      submitBtn: 'Send Message',
      submittingBtn: 'Sending...',
      errorGeneric: 'An error occurred while submitting to Formspree.',
      errorConnection: 'Connection error. Please check your internet connection and try again.',
      defaultSubjectPrefix: 'Contact inquiry - PFE Internship',
    },
    coverLetterModal: {
      badge: 'PFE Letter Generator',
      title: 'Create a Tailored Cover Letter',
      subtitle: "Enter your company's name to instantly generate Dilsa's professional application letter.",
      labelCompany: 'Company / Firm Name *',
      placeholderCompany: 'e.g., LogiMed International, OCP Group, Nestlé...',
      generateBtn: 'Generate',
      generatingBtn: 'Generating...',
      generatedTitle: 'Letter Generated for',
      copyBtn: 'Copy Text',
      copiedBtn: 'Copied!',
    },
    pdfModal: {
      title: 'Official Resume - Dilsa Cá',
      subtitle: 'Master 2 Student in International Trade • ENCG Settat',
      downloadBtn: 'Download',
    },
  },
  pt: {
    nav: {
      roleSubtitle: 'Comércio Internacional • ENCG Settat',
      profile: 'Perfil',
      experiences: 'Experiências e Estágios',
      skills: 'Competências',
      education: 'Formação',
      languages: 'Idiomas',
      contactBtn: 'Contacto Direto',
    },
    hero: {
      titlePrefix: 'Estratégia ',
      titleHighlight: 'Internacional',
      titleSuffix: ' & Desenvolvimento B2B',
      bio: 'Estudante de Mestrado 2 em Comércio Internacional na ENCG Settat. Bilingue em português e francês, apaixonada e dedicada, procuro um estágio de fim de curso (PFE) de 4 meses a partir de janeiro de 2027 para contribuir com rigor e energia nos vossos projetos B2B e internacionais.',
      exploreBtn: 'Explorar Percurso',
      location: 'Settat, Marrocos',
      photoAdd: 'Foto +',
      photoTooltip: 'Clique para adicionar ou alterar a sua foto',
      pfeBadge: 'Estágio PFE 2027',
      keyDomainsLabel: 'Áreas-chave',
      keyDomainsValue: 'Import/Export & B2B',
      languagesLabel: 'Idiomas',
      languagesValue: 'Português (C1) • Francês (B2)',
      availabilityLabel: 'Disponibilidade',
      availabilityValue: 'Janeiro 2027 (4 meses)',
      majorAssetsTitle: 'Principais Trunfos',
      asset1: 'Negociação Comercial',
      asset2: 'Incoterms & Logística',
      asset3: 'Prospeção B2C / B2B',
      asset4: 'Excel & Sistemas ERP',
    },
    highlights: {
      encgTitle: 'ENCG',
      encgDesc: 'Escola Nacional de Comércio e Gestão',
      durationTitle: '4 Meses',
      durationDesc: 'Estágio PFE (Janeiro 2027)',
      languagesTitle: 'Bilingue',
      languagesDesc: 'Português (C1) & Francês (B2)',
      experiencesTitle: '4+',
      experiencesDesc: 'Experiências e Estágios Relevantes',
    },
    profile: {
      photoName: 'Dilsa Cá',
      photoDegree: 'Mestrado Comércio Internacional',
      photoSchool: 'ENCG Settat',
      heading: 'Dinâmica, rigorosa e versátil, preparada para a excelência operacional.',
      description: 'Atualmente a frequentar o 2.º ano do Mestrado em Comércio Internacional na ENCG Settat, alio uma sólida formação teórica em gestão e negócios a experiências práticas comprovadas em prospeção comercial B2B/B2C, relação com o cliente, controlo de gestão e ensino intercultural. Sou uma profissional dedicada, com facilidade de integração em equipas multidisciplinares e focada em resultados.',
      bullet1Title: 'Comércio Internacional & B2B:',
      bullet1Desc: 'Domínio das técnicas de importação-exportação, Incoterms e negociação comercial internacional.',
      bullet2Title: 'Competências Pessoais & Liderança:',
      bullet2Desc: 'Excelente comunicadora, dotada de grande adaptabilidade, flexibilidade e capacidade comprovada de liderança e gestão de equipas (Secretária-Geral da AFSAM).',
      card1Title: 'Desenvolvimento Comercial',
      card1Desc: 'Prospeção, identificação e fidelização de novos clientes, tratamento de objeções e acompanhamento pós-venda (Nearyaa Express & Avaax).',
      card2Title: 'Auditoria & Análise Financeira',
      card2Desc: 'Acompanhamento rigoroso de indicadores financeiros e domínio de ferramentas analíticas (RADEEC - Controlo de Gestão).',
      card3Title: 'Comunicação Multicultural',
      card3Desc: 'Experiência de ensino internacional (Preply) e liderança associativa multicultural (AFSAM, ASSEBGUIM).',
      card4Title: 'Ferramentas & Domínio Técnico',
      card4Desc: 'Excel avançado (Tabelas dinâmicas, PROCV), ERP, Word profissional, PowerPoint e Canva para apresentações executivas.',
    },
    experiences: {
      sectionTitle: 'Experiências & Estágios Práticos',
      tabAll: 'Ver Tudo',
      tabStages: 'Estágios',
      tabPro: 'Experiências Profissionais',
      nearyaaTitle: 'NEARYA EXPRESS',
      nearyaaDept: 'Departamento Comercial',
      nearyaaDate: 'Abril - Maio 2026',
      nearyaaBullet1: 'Prospeção, identificação e fidelização de novos clientes.',
      nearyaaBullet2: 'Preparação e apresentação de propostas comerciais de produtos e serviços.',
      nearyaaBullet3: 'Acompanhamento contínuo e gestão do serviço pós-venda.',
      nearyaaBullet4: 'Gestão proativa do relacionamento e satisfação dos clientes.',
      radeecTitle: 'RADEEC',
      radeecDept: 'Auditoria & Controlo de Gestão',
      radeecDate: 'Agosto - Setembro 2024',
      radeecBullet1: 'Acompanhamento rigoroso dos principais indicadores financeiros.',
      radeecBullet2: 'Análise de painéis de bordo e relatórios de desempenho de gestão.',
      radeecBullet3: 'Participação na otimização de procedimentos de controlo interno.',
      avaaxTitle: 'AVAAX',
      avaaxDept: 'Operadora de Teleprospeção (Call Center)',
      avaaxDate: 'Junho 2026',
      avaaxBullet1: 'Teleprospeção no setor das energias renováveis (Bombas de calor).',
      avaaxBullet2: 'Verificação rigorosa dos critérios de elegibilidade dos clientes.',
      avaaxBullet3: 'Tratamento eficaz de objeções comerciais e argumentação convincente.',
      preplyTitle: 'PREPLY',
      preplyDept: 'Professora de Língua Portuguesa',
      preplyDate: 'Agosto 2024 - Presente',
      preplyBullet1: 'Ensino da língua portuguesa a estudantes e profissionais internacionais.',
      preplyBullet2: 'Desenvolvimento de suportes pedagógicos e planos de aula personalizados.',
      preplyBullet3: 'Domínio da comunicação intercultural e pedagogia ativa.',
    },
    skills: {
      sectionTitle: 'Competências Técnicas & Ferramentas',
      sectionSubtitle: 'Conjunto equilibrado de aptidões operacionais e relacionais consolidadas na ENCG Settat e no terreno.',
      cat1Title: 'Comércio & Gestão',
      skill1_1: 'Negociação Comercial',
      skill1_1_level: 'Avançado',
      skill1_2: 'Técnicas de Import-Export',
      skill1_2_level: 'Dominado',
      skill1_3: 'Incoterms (Conceitos & Aplicação)',
      skill1_3_level: 'Operacional',
      skill1_4: 'Software de Gestão (ERP)',
      skill1_4_level: 'Intermédio',
      cat2Title: 'Informática & Ferramentas',
      tool1: 'Excel Avançado',
      tool1_tag: 'Tabelas Dinâmicas & PROCV',
      tool2: 'Word Profissional',
      tool2_tag: 'Redação & Relatórios',
      tool3: 'PowerPoint',
      tool3_tag: 'Apresentações Executivas',
      tool4: 'Canva (Design)',
      tool4_tag: 'Materiais Visuais',
      cat3Title: 'Qualidades & Soft Skills',
      soft1_title: 'Capacidade de Comunicação',
      soft1_desc: 'Excelente à-vontade interpessoal e diplomacia intercultural multilingue.',
      soft2_title: 'Adaptabilidade & Flexibilidade',
      soft2_desc: 'Rápida capacidade de integração em ambientes internacionais exigentes.',
      soft3_title: 'Gestão de Tarefas e Equipas',
      soft3_desc: 'Liderança associativa comprovada como Secretária-Geral da AFSAM e Tesoureira da ASSEBGUIM.',
    },
    education: {
      sectionTitle: 'Formação Académica',
      sectionSubtitle: 'Percurso de excelência em gestão e comércio internacional',
      item1Title: 'Ciclo da ENCG - Mestrado em Comércio Internacional',
      item1Date: '2021 - 2027',
      item1School: 'ENCG Settat – Escola Nacional de Comércio e Gestão',
      item1Desc: 'Formação aprofundada em gestão internacional, estratégia empresarial, logística, comércio externo e negociação B2B. Candidata qualificada a estágio de fim de curso (PFE, Janeiro 2027).',
      item2Title: 'Ensino Secundário em Ciências Económicas',
      item2Date: '2019',
      item2School: 'Centro Educativo Dr. Emílio Gomes, Guiné-Bissau',
      item2Desc: 'Bases sólidas em economia, contabilidade e matemática aplicada.',
    },
    languagesSection: {
      sectionTitle: 'Idiomas & Envolvimento Associativo',
      sectionSubtitle: 'Multilinguismo e liderança comunitária',
      langPt: 'Português',
      langPtLevel: 'C1 (Língua Materna / Fluente)',
      langPtNote: 'Língua materna / Domínio fluente',
      langFr: 'Francês',
      langFrLevel: 'B2 (Bilingue)',
      langFrNote: 'Domínio profissional pleno',
      langEn: 'Inglês',
      langEnLevel: 'B1',
      langEnNote: 'Profissional intermédio',
      langEs: 'Espanhol',
      langEsLevel: 'A2',
      langEsNote: 'Noções básicas operacionais',
      extraTitle: 'Atividades Extracurriculares',
      role1Title: 'Secretária-Geral • AFSAM',
      role1Date: 'Abril 2025 - Maio 2026',
      role1Desc: 'Association of Foreign Students Alumni in Management. Organização de reuniões, atas oficiais e gestão da comunicação interna/externa.',
      role2Title: 'Tesoureira • ASSEBGUIM',
      role2Date: 'Dez. 2021 - Nov. 2023',
      role2Desc: 'Associação de Estudantes da Guiné-Bissau em Marrocos. Gestão financeira, controlo de despesas, prestação de contas e coordenação de eventos.',
    },
    cta: {
      titlePrefix: 'Pronta para integrar a sua equipa em ',
      titleHighlight: 'Janeiro 2027',
      description: 'Procura uma estagiária PFE motivada, dedicada e bilingue em comércio internacional e desenvolvimento comercial B2B? Envie uma mensagem para conversar sobre as vossas oportunidades e projetos.',
      generateBtn: 'Gerar Carta PFE Personalizada',
      messageBtn: 'Enviar Mensagem',
    },
    footer: {
      role: 'Mestrado em Comércio Internacional (ENCG Settat)',
      cvBtn: 'CV em PDF',
      copyright: '© 2026 Dilsa Cá. Todos os direitos reservados.',
    },
    contactModal: {
      badge: 'Contacto Direto',
      title: 'Entrar em Contacto com a Dilsa',
      subtitle: 'Aborde uma oportunidade de estágio PFE (Janeiro 2027) ou projeto de colaboração com a Dilsa.',
      successTitle: 'Mensagem enviada com sucesso!',
      successMessage: 'A sua mensagem foi enviada diretamente para a Dilsa (mailondiasbatista@gmail.com). Ela responderá o mais brevemente possível.',
      closeBtn: 'Fechar',
      labelName: 'Seu Nome / Recrutador *',
      placeholderName: 'Ex. Carlos Silva',
      labelEmail: 'Email Profissional *',
      placeholderEmail: 'Ex. c.silva@empresa.com',
      labelSubject: 'Assunto / Empresa *',
      placeholderSubject: 'Ex. Proposta de Estágio PFE 2027 - LogiMed Lda',
      labelMessage: 'Mensagem / Proposta de Estágio PFE *',
      placeholderMessage: 'Olá Dilsa, gostaríamos de convidá-la para uma entrevista de estágio PFE...',
      directEmail: 'Direto:',
      submitBtn: 'Enviar Mensagem',
      submittingBtn: 'A enviar...',
      errorGeneric: 'Ocorreu um erro ao enviar através do Formspree.',
      errorConnection: 'Erro de ligação. Verifique a sua ligação à internet e tente novamente.',
      defaultSubjectPrefix: 'Contacto - Estágio PFE',
    },
    coverLetterModal: {
      badge: 'Gerador de Carta PFE',
      title: 'Criar Carta de Apresentação à Medida',
      subtitle: 'Introduza o nome da sua empresa para gerar instantaneamente a carta profissional da Dilsa.',
      labelCompany: 'Nome da sua Empresa / Gabinete *',
      placeholderCompany: 'Ex. LogiMed International, OCP Group, Nestlé...',
      generateBtn: 'Gerar',
      generatingBtn: 'A gerar...',
      generatedTitle: 'Carta Gerada para',
      copyBtn: 'Copiar texto',
      copiedBtn: 'Copiado!',
    },
    pdfModal: {
      title: 'CV Oficial - Dilsa Cá',
      subtitle: 'Estudante de Mestrado 2 em Comércio Internacional • ENCG Settat',
      downloadBtn: 'Descarregar',
    },
  },
  es: {
    nav: {
      roleSubtitle: 'Comercio Internacional • ENCG Settat',
      profile: 'Perfil',
      experiences: 'Experiencias y Prácticas',
      skills: 'Competencias',
      education: 'Formación',
      languages: 'Idiomas',
      contactBtn: 'Contacto Directo',
    },
    hero: {
      titlePrefix: 'Estrategia ',
      titleHighlight: 'Internacional',
      titleSuffix: ' & Desarrollo B2B',
      bio: 'Estudiante de Máster 2 en Comercio Internacional en la ENCG Settat. Bilingüe en portugués y francés, apasionada y dedicada, busco unas prácticas de fin de carrera (PFE) de 4 meses a partir de enero de 2027 para aportar mi energía y competencias en sus proyectos B2B e import-export.',
      exploreBtn: 'Explorar Trayectoria',
      location: 'Settat, Marruecos',
      photoAdd: 'Foto +',
      photoTooltip: 'Haga clic para añadir o cambiar su foto',
      pfeBadge: 'Prácticas PFE 2027',
      keyDomainsLabel: 'Áreas clave',
      keyDomainsValue: 'Import/Export & B2B',
      languagesLabel: 'Idiomas',
      languagesValue: 'Portugués (C1) • Francés (B2)',
      availabilityLabel: 'Disponibilidad',
      availabilityValue: 'Enero 2027 (4 meses)',
      majorAssetsTitle: 'Principales Virtudes',
      asset1: 'Negociación Comercial',
      asset2: 'Incoterms & Logística',
      asset3: 'Prospección B2C / B2B',
      asset4: 'Excel & Sistemas ERP',
    },
    highlights: {
      encgTitle: 'ENCG',
      encgDesc: 'Escuela Nacional de Comercio y Gestión',
      durationTitle: '4 Meses',
      durationDesc: 'Prácticas PFE (Enero 2027)',
      languagesTitle: 'Bilingüe',
      languagesDesc: 'Portugués (C1) y Francés (B2)',
      experiencesTitle: '4+',
      experiencesDesc: 'Experiencias y Prácticas Clave',
    },
    profile: {
      photoName: 'Dilsa Cá',
      photoDegree: 'Máster Comercio Internacional',
      photoSchool: 'ENCG Settat',
      heading: 'Dinámica, rigurosa y polivalente, preparada para la excelencia operativa.',
      description: 'Actualmente cursando el 2.º año del Máster en Comercio Internacional en la ENCG Settat, combino una sólida formación teórica en gestión y negocios con experiencias prácticas demostradas en prospección B2B/B2C, relación con clientes, control de gestión y enseñanza intercultural. Apasionada, resolutiva y con gran capacidad de trabajo en equipo.',
      bullet1Title: 'Comercio Internacional & B2B:',
      bullet1Desc: 'Dominio de técnicas de importación-exportación, Incoterms y negociación comercial internacional.',
      bullet2Title: 'Competencias Personales & Liderazgo:',
      bullet2Desc: 'Excelente comunicadora, dotada de gran adaptabilidad, flexibilidad y contrastada capacidad de liderazgo asociativo (Secretaria General de AFSAM).',
      card1Title: 'Desarrollo Comercial',
      card1Desc: 'Prospección, captación y fidelización de nuevos clientes, tratamiento de objeciones y servicio postventa (Nearyaa Express & Avaax).',
      card2Title: 'Auditoría & Análisis Financiero',
      card2Desc: 'Seguimiento riguroso de indicadores financieros y dominio de herramientas analíticas (RADEEC - Control de gestión).',
      card3Title: 'Comunicación Intercultural',
      card3Desc: 'Experiencia de enseñanza internacional (Preply) y liderazgo asociativo multicultural (AFSAM, ASSEBGUIM).',
      card4Title: 'Herramientas & Dominio Técnico',
      card4Desc: 'Excel avanzado (Tablas dinámicas, BUSCARV), ERP, Word profesional, PowerPoint y Canva para presentaciones ejecutivas.',
    },
    experiences: {
      sectionTitle: 'Experiencias y Prácticas Profesionales',
      tabAll: 'Ver Todo',
      tabStages: 'Prácticas',
      tabPro: 'Experiencias Pro',
      nearyaaTitle: 'NEARYA EXPRESS',
      nearyaaDept: 'Departamento Comercial',
      nearyaaDate: 'Abril - Mayo 2026',
      nearyaaBullet1: 'Prospección, identificación y fidelización de nuevos clientes.',
      nearyaaBullet2: 'Preparación y presentación de soluciones comerciales y ofertas a clientes potenciales.',
      nearyaaBullet3: 'Acompañamiento continuo, seguimiento y gestión del servicio postventa.',
      nearyaaBullet4: 'Gestión proactiva de la satisfacción del cliente y excelencia en el servicio.',
      radeecTitle: 'RADEEC',
      radeecDept: 'Auditoría & Control de Gestión',
      radeecDate: 'Agosto - Septiembre 2024',
      radeecBullet1: 'Contribución al seguimiento riguroso de los indicadores financieros.',
      radeecBullet2: 'Análisis de cuadros de mando e informes de rendimiento de gestión.',
      radeecBullet3: 'Participación en la optimización de los procedimientos de control interno.',
      avaaxTitle: 'AVAAX',
      avaaxDept: 'Operadora de Teleprospección (Centro de llamadas)',
      avaaxDate: 'Junio 2026',
      avaaxBullet1: 'Teleprospección comercial en el sector de energías renovables (Bombas de calor).',
      avaaxBullet2: 'Verificación rigurosa de los criterios de elegibilidad de los clientes.',
      avaaxBullet3: 'Tratamiento eficaz de objeciones y argumentación comercial persuasiva.',
      preplyTitle: 'PREPLY',
      preplyDept: 'Profesora de Lengua Portuguesa',
      preplyDate: 'Agosto 2024 - Presente',
      preplyBullet1: 'Enseñanza del portugués a estudiantes y profesionales internacionales.',
      preplyBullet2: 'Desarrollo de materiales pedagógicos y planes de clase personalizados.',
      preplyBullet3: 'Dominio de la comunicación intercultural y pedagogía activa.',
    },
    skills: {
      sectionTitle: 'Competencias Técnicas y Herramientas',
      sectionSubtitle: 'Conjunto equilibrado de aptitudes técnicas y relacionales adquiridas en la ENCG Settat y sobre el terreno.',
      cat1Title: 'Comercio & Gestión',
      skill1_1: 'Negociación Comercial',
      skill1_1_level: 'Avanzado',
      skill1_2: 'Técnicas de Import-Export',
      skill1_2_level: 'Dominado',
      skill1_3: 'Incoterms (Conceptos & Práctica)',
      skill1_3_level: 'Operativo',
      skill1_4: 'Software de Gestión (ERP)',
      skill1_4_level: 'Intermedio',
      cat2Title: 'Ofimática & Herramientas',
      tool1: 'Excel Avanzado',
      tool1_tag: 'Tablas Dinámicas & BUSCARV',
      tool2: 'Word Profesional',
      tool2_tag: 'Redacción & Informes',
      tool3: 'PowerPoint',
      tool3_tag: 'Presentaciones Ejecutivas',
      tool4: 'Canva (Diseño)',
      tool4_tag: 'Materiales Visuales',
      cat3Title: 'Habilidades & Soft Skills',
      soft1_title: 'Habilidad de Comunicación',
      soft1_desc: 'Excelente diplomacia interpersonal y fluidez comunicativa multilingüe.',
      soft2_title: 'Adaptabilidad & Flexibilidad',
      soft2_desc: 'Rápida capacidad de integración en entornos corporativos exigentes e internacionales.',
      soft3_title: 'Gestión de Equipos y Proyectos',
      soft3_desc: 'Liderazgo asociativo contrastado (Secretaria General de AFSAM, Tesorera de ASSEBGUIM).',
    },
    education: {
      sectionTitle: 'Formación Académica',
      sectionSubtitle: 'Trayectoria de excelencia en comercio y gestión',
      item1Title: 'Ciclo de la ENCG - Máster en Comercio Internacional',
      item1Date: '2021 - 2027',
      item1School: 'ENCG Settat – Escuela Nacional de Comercio y Gestión',
      item1Desc: 'Especialización profunda en gestión internacional, estrategia corporativa, logística, comercio exterior y negociación B2B. Candidata cualificada a prácticas de fin de carrera (PFE, Enero 2027).',
      item2Title: 'Bachillerato en Ciencias Económicas',
      item2Date: '2019',
      item2School: 'Centro Educativo Dr. Emílio Gomes, Guinea-Bisáu',
      item2Desc: 'Bases sólidas en economía, contabilidad y matemáticas aplicadas.',
    },
    languagesSection: {
      sectionTitle: 'Idiomas y Liderazgo Asociativo',
      sectionSubtitle: 'Multilingüismo y compromiso comunitario',
      langPt: 'Portugués',
      langPtLevel: 'C1 (Nativo / Bilingüe)',
      langPtNote: 'Lengua materna / Dominio fluido',
      langFr: 'Francés',
      langFrLevel: 'B2 (Bilingüe)',
      langFrNote: 'Dominio profesional pleno',
      langEn: 'Inglés',
      langEnLevel: 'B1',
      langEnNote: 'Profesional intermedio',
      langEs: 'Español',
      langEsLevel: 'A2',
      langEsNote: 'Nivel operativo básico',
      extraTitle: 'Actividades Extracurriculares',
      role1Title: 'Secretaria General • AFSAM',
      role1Date: 'Abril 2025 - Mayo 2026',
      role1Desc: 'Association of Foreign Students Alumni in Management. Coordinación de reuniones, actas oficiales y comunicación interna/externa.',
      role2Title: 'Tesorera • ASSEBGUIM',
      role2Date: 'Dic. 2021 - Nov. 2023',
      role2Desc: 'Asociación de Estudiantes de Guinea-Bisáu en Marruecos. Gestión financiera, control presupuestario, informes periódicos y logística de eventos.',
    },
    cta: {
      titlePrefix: 'Preparada para unirse a su equipo en ',
      titleHighlight: 'Enero 2027',
      description: '¿Busca una estudiante en prácticas PFE motivada, dedicada y bilingüe en comercio internacional y desarrollo comercial B2B? Envíeme un mensaje para hablar de sus oportunidades y proyectos.',
      generateBtn: 'Generar Carta de Presentación',
      messageBtn: 'Enviar un Mensaje',
    },
    footer: {
      role: 'Máster Comercio Internacional (ENCG Settat)',
      cvBtn: 'CV en PDF',
      copyright: '© 2026 Dilsa Cá. Todos los derechos reservados.',
    },
    contactModal: {
      badge: 'Contacto Directo',
      title: 'Contactar con Dilsa',
      subtitle: 'Comente una oportunidad de prácticas PFE (Enero 2027) o un proyecto de colaboración con Dilsa.',
      successTitle: '¡Mensaje enviado con éxito!',
      successMessage: 'Su mensaje ha sido enviado directamente a Dilsa (mailondiasbatista@gmail.com). Le responderá a la mayor brevedad.',
      closeBtn: 'Cerrar',
      labelName: 'Su Nombre / Reclutador *',
      placeholderName: 'Ej. Juan Pérez',
      labelEmail: 'Correo Corporativo *',
      placeholderEmail: 'Ej. j.perez@empresa.com',
      labelSubject: 'Asunto / Empresa *',
      placeholderSubject: 'Ej. Oferta de Prácticas PFE 2027 - LogiMed SL',
      labelMessage: 'Mensaje / Propuesta de Prácticas PFE *',
      placeholderMessage: 'Hola Dilsa, nos gustaría invitarla a una entrevista para nuestra oferta de prácticas PFE...',
      directEmail: 'Directo:',
      submitBtn: 'Enviar Mensaje',
      submittingBtn: 'Enviando...',
      errorGeneric: 'Ocurrió un error al enviar a través de Formspree.',
      errorConnection: 'Error de conexión. Por favor revise su conexión a internet e inténtelo de nuevo.',
      defaultSubjectPrefix: 'Contacto - Prácticas PFE',
    },
    coverLetterModal: {
      badge: 'Generador de Carta PFE',
      title: 'Crear Carta de Presentación a Medida',
      subtitle: 'Introduzca el nombre de su empresa para generar al instante la carta profesional de Dilsa.',
      labelCompany: 'Nombre de su Empresa / Despacho *',
      placeholderCompany: 'Ej. LogiMed International, OCP Group, Nestlé...',
      generateBtn: 'Generar',
      generatingBtn: 'Generando...',
      generatedTitle: 'Carta Generada para',
      copyBtn: 'Copiar texto',
      copiedBtn: '¡Copiado!',
    },
    pdfModal: {
      title: 'CV Oficial - Dilsa Cá',
      subtitle: 'Estudiante de Máster 2 Comercio Internacional • ENCG Settat',
      downloadBtn: 'Descargar',
    },
  },
  ar: {
    nav: {
      roleSubtitle: 'تجارة دولية • المدرسة الوطنية للتجارة والتسيير بسطات',
      profile: 'الملف الشخصي',
      experiences: 'الخبرات والتدريبات',
      skills: 'المهارات',
      education: 'التكوين الدراسي',
      languages: 'اللغات',
      contactBtn: 'تواصل مباشر',
    },
    hero: {
      titlePrefix: 'استراتيجية ',
      titleHighlight: 'دولية',
      titleSuffix: ' وتطوير الأعمال B2B',
      bio: 'طالبة شغوفة ومجتهدة في ماستر 2 في التجارة الدولية بالمدرسة الوطنية للتجارة والتسيير بسطات (ENCG Settat). ثنائية اللغة (الفرنسية والبرتغالية)، أبحث عن تدريب نهاية الدراسة (PFE) لمدة 4 أشهر ابتداءً من يناير 2027 للمساهمة بطاقة وعزيمة في مشاريعكم التجارية والدولية.',
      exploreBtn: 'استكشاف المسار المهني',
      location: 'سطات، المغرب',
      photoAdd: '+ صورة',
      photoTooltip: 'انقر لإضافة أو تغيير صورتك الشخصية',
      pfeBadge: 'تدريب PFE 2027',
      keyDomainsLabel: 'المجالات الرئيسية',
      keyDomainsValue: 'الاستيراد/التصدير و B2B',
      languagesLabel: 'اللغات',
      languagesValue: 'البرتغالية (C1) • الفرنسية (B2)',
      availabilityLabel: 'الفترة المتاحة',
      availabilityValue: 'يناير 2027 (4 أشهر)',
      majorAssetsTitle: 'أبرز نقاط القوة',
      asset1: 'التفاوض التجاري',
      asset2: 'شروط التجارة الدولية واللوجستيات',
      asset3: 'التنقيب B2C / B2B',
      asset4: 'إكسل وأنظمة ERP',
    },
    highlights: {
      encgTitle: 'ENCG',
      encgDesc: 'المدرسة الوطنية للتجارة والتسيير',
      durationTitle: '4 أشهر',
      durationDesc: 'تدريب نهاية الدراسة (يناير 2027)',
      languagesTitle: 'ثنائية اللغة',
      languagesDesc: 'البرتغالية (C1) والفرنسية (B2)',
      experiencesTitle: '+4',
      experiencesDesc: 'تجارب مهنية وتدريبات ميدانية',
    },
    profile: {
      photoName: 'ديلسا كا',
      photoDegree: 'ماستر التجارة الدولية',
      photoSchool: 'ENCG Settat',
      heading: 'ديناميكية، دقيقة ومتعددة المهارات، مستعدة ومتحمسة لتحقيق التميز التشغيلي.',
      description: 'أتابع حالياً دراستي في ماستر 2 في التجارة الدولية بالمدرسة الوطنية للتجارة والتسيير بسطات، وأجمع بين تكوين نظري متين في التسيير والأعمال وخبرات ميدانية ملموسة في التنقيب التجاري B2B/B2C، وعلاقات العملاء، ومراقبة التسيير، والتعليم متعدد الثقافات. أتميز بالانضباط وحب العمل الجماعي والقدرة العالية على التأقلم في بيئات العمل التنافسية.',
      bullet1Title: 'التجارة الدولية و B2B:',
      bullet1Desc: 'إتقان تقنيات الاستيراد والتصدير، وشروط التجارة الدولية (Incoterms)، والتفاوض التجاري.',
      bullet2Title: 'المهارات الشخصية والقيادة:',
      bullet2Desc: 'قدرة تواصلية استثنائية، مرونة وتأقلم سريع، وخبرة قيادية مثبتة في إدارة الفرق (الأمينة العامة لجمعية AFSAM).',
      card1Title: 'التطوير التجاري',
      card1Desc: 'التنقيب وجذب العملاء الجدد وبناء ولائهم، ومعالجة الاعتراضات وخدمة ما بعد البيع (تجارب Nearyaa Express و Avaax).',
      card2Title: 'التدقيق والتحليل المالي',
      card2Desc: 'المساهمة في متابعة المؤشرات المالية والتحكم في لوحات القيادة (تجربة RADEEC - مراقبة التسيير).',
      card3Title: 'التواصل بين الثقافات',
      card3Desc: 'تدريس دولي للغة البرتغالية وقيادة العمل الجمعوي متعدد الثقافات (AFSAM، ASSEBGUIM).',
      card4Title: 'الأدوات والتقنيات المهنية',
      card4Desc: 'إكسل متقدم (الجداول المحورية ودوال البحث)، برمجيات ERP، وورد، وبوربوينت، وكانفا لتصميم عروض تقديمية مؤثرة.',
    },
    experiences: {
      sectionTitle: 'التجارب والتدريبات الميدانية',
      tabAll: 'عرض الكل',
      tabStages: 'التدريبات',
      tabPro: 'الخبرات المهنية',
      nearyaaTitle: 'NEARYA EXPRESS',
      nearyaaDept: 'القسم التجاري',
      nearyaaDate: 'أبريل - مايو 2026',
      nearyaaBullet1: 'التنقيب عن عملاء جدد وتحديد الفرص وتعزيز الولاء.',
      nearyaaBullet2: 'إعداد وتقديم المنتجات والخدمات للعملاء المحتملين.',
      nearyaaBullet3: 'المواكبة والمتابعة وتقديم خدمة ما بعد البيع بكفاءة.',
      nearyaaBullet4: 'الإدارة الاستباقية لعلاقات العملاء وضمان رضاهم.',
      radeecTitle: 'RADEEC',
      radeecDept: 'التدقيق ومراقبة التسيير',
      radeecDate: 'أغسطس - سبتمبر 2024',
      radeecBullet1: 'المساهمة في المتابعة الدقيقة للمؤشرات والبيانات المالية.',
      radeecBullet2: 'تحليل لوحات القيادة وإعداد تقارير الأداء الدوري.',
      radeecBullet3: 'المشاركة في تحسين وتطوير إجراءات الرقابة الداخلية.',
      avaaxTitle: 'AVAAX',
      avaaxDept: 'مسؤولة التنقيب الهاتفي (مركز الاتصال)',
      avaaxDate: 'يونيو 2026',
      avaaxBullet1: 'التنقيب الهاتفي في مجال الطاقات المتجددة (المضخات الحرارية).',
      avaaxBullet2: 'التحقق الدقيق من معايير أهلية واستحقاق العملاء.',
      avaaxBullet3: 'معالجة الاعتراضات وتقديم الحجج التجارية بأسلوب مقنع.',
      preplyTitle: 'PREPLY',
      preplyDept: 'أستاذة اللغة البرتغالية',
      preplyDate: 'أغسطس 2024 - حتى الآن',
      preplyBullet1: 'تدريس اللغة البرتغالية لطلاب ومهنيين دوليين.',
      preplyBullet2: 'إعداد وتطوير أدوات ومناهج بيداغوجية مخصصة لكل متعلم.',
      preplyBullet3: 'إتقان أساليب التواصل البيداغوجي الفعال وتجاوز الفروق الثقافية.',
    },
    skills: {
      sectionTitle: 'المهارات التقنية وأدوات العمل',
      sectionSubtitle: 'مجموعة متكاملة من الكفاءات الميدانية والعملية صُقلت بالمدرسة الوطنية للتجارة والتسيير بسطات وعلى أرض الواقع.',
      cat1Title: 'التجارة والتسيير',
      skill1_1: 'التفاوض التجاري',
      skill1_1_level: 'متقدم',
      skill1_2: 'تقنيات الاستيراد والتصدير',
      skill1_2_level: 'متقن',
      skill1_3: 'شروط التجارة الدولية (Incoterms)',
      skill1_3_level: 'تشغيلي',
      skill1_4: 'برمجيات التسيير (ERP)',
      skill1_4_level: 'متوسط',
      cat2Title: 'المكتبية والأدوات الرقمية',
      tool1: 'إكسل متقدم',
      tool1_tag: 'الجداول المحورية ودوال البحث',
      tool2: 'وورد احترافي',
      tool2_tag: 'صياغة التقارير',
      tool3: 'بوربوينت',
      tool3_tag: 'عروض للمسؤولين',
      tool4: 'كانفا (تصميم)',
      tool4_tag: 'المحتوى البصري',
      cat3Title: 'المهارات الشخصية والقيادية',
      soft1_title: 'مهارة التواصل الفعال',
      soft1_desc: 'سهولة ومرونة فائقة في التواصل وبناء العلاقات بين الثقافات بلغات متعددة.',
      soft2_title: 'القدرة على التأقلم والمرونة',
      soft2_desc: 'اندماج سريع وفعال في بيئات عمل دولية وتنافسية.',
      soft3_title: 'إدارة المهام والفرق',
      soft3_desc: 'ريادة جمعوية متميزة (الأمينة العامة لـ AFSAM، أمينة مال لـ ASSEBGUIM).',
    },
    education: {
      sectionTitle: 'التكوين الدراسي',
      sectionSubtitle: 'مسار متميز في إدارة الأعمال والتجارة الدولية',
      item1Title: 'سلك المدرسة الوطنية للتجارة والتسيير - ماستر التجارة الدولية',
      item1Date: '2021 - 2027',
      item1School: 'المدرسة الوطنية للتجارة والتسيير بسطات (ENCG Settat)',
      item1Desc: 'تكوين معمق في الإدارة الدولية، الاستراتيجية، اللوجستيات، التجارة الخارجية والمفاوضات التجارية B2B. مرشحة مؤهلة لتدريب نهاية الدراسة PFE (يناير 2027).',
      item2Title: 'بكالوريا في العلوم الاقتصادية',
      item2Date: '2019',
      item2School: 'المركز التعليمي الدكتور إميليو غوميز، غينيا بيساو',
      item2Desc: 'أساس متين في الاقتصاد، والمحاسبة، والرياضيات التطبيقية.',
    },
    languagesSection: {
      sectionTitle: 'اللغات والأنشطة الجمعوية',
      sectionSubtitle: 'تعدد لغوي والتزام قيادي ومجتمعي',
      langPt: 'البرتغالية',
      langPtLevel: 'C1 (اللغة الأم / بطلاقة)',
      langPtNote: 'اللغة الأم / إتقان تام',
      langFr: 'الفرنسية',
      langFrLevel: 'B2 (ثنائية اللغة)',
      langFrNote: 'إتقان مهني كامل',
      langEn: 'الإنجليزية',
      langEnLevel: 'B1',
      langEnNote: 'مستوى مهني متوسط',
      langEs: 'الإسبانية',
      langEsLevel: 'A2',
      langEsNote: 'مبادئ أساسية تشغيلية',
      extraTitle: 'الأنشطة الموازية والمسؤوليات الجمعوية',
      role1Title: 'الأمينة العامة • AFSAM',
      role1Date: 'أبريل 2025 - مايو 2026',
      role1Desc: 'جمعية خريجي وطلبة الإدارة الأجانب. تنظيم الاجتماعات، وإعداد المحاضر الرسمية، وإدارة التواصل الداخلي والخارجي.',
      role2Title: 'أمينة المال • ASSEBGUIM',
      role2Date: 'ديسمبر 2021 - نوفمبر 2023',
      role2Desc: 'جمعية المتدربين والطلبة الغينيين بالمغرب. إدارة الميزانية، ومتابعة النفقات، وإعداد التقارير المالية وتنظيم الأنشطة.',
    },
    cta: {
      titlePrefix: 'مستعدة للانضمام إلى فريقكم في ',
      titleHighlight: 'يناير 2027',
      description: 'هل تبحثون عن متدربة PFE طموحة، متميزة وثنائية اللغة في التجارة الدولية وتطوير الأعمال B2B؟ يسعدني تواصلكم المباشر لمناقشة فرص التعاون والتدريب المتاحة لديكم.',
      generateBtn: 'إنشاء رسالة تحفيزية مخصصة',
      messageBtn: 'إرسال رسالة',
    },
    footer: {
      role: 'ماستر التجارة الدولية (ENCG Settat)',
      cvBtn: 'السيرة الذاتية PDF',
      copyright: '© 2026 ديلسا كا. جميع الحقوق محفوظة.',
    },
    contactModal: {
      badge: 'تواصل مباشر',
      title: 'تواصل مع ديلسا',
      subtitle: 'ناقش فرصة تدريب PFE (يناير 2027) أو مشروع تعاون مع ديلسا.',
      successTitle: 'تم إرسال الرسالة بنجاح!',
      successMessage: 'تم إرسال رسالتكم مباشرة إلى ديلسا (mailondiasbatista@gmail.com). ستجيبكم في أقرب وقت ممكن.',
      closeBtn: 'إغلاق',
      labelName: 'الاسم الكامل / مسؤول التوظيف *',
      placeholderName: 'مثال: محمد العلمي',
      labelEmail: 'البريد الإلكتروني المهني *',
      placeholderEmail: 'مثال: m.alami@company.com',
      labelSubject: 'الموضوع / اسم الشركة *',
      placeholderSubject: 'مثال: عرض تدريب PFE 2027 - شركة لوجيستيك',
      labelMessage: 'نص الرسالة / عرض التدريب *',
      placeholderMessage: 'مرحباً ديلسا، يسعدنا دعوتك لإجراء مقابلة عمل بخصوص عرض تدريب PFE لدينا...',
      directEmail: 'مباشر:',
      submitBtn: 'إرسال الرسالة',
      submittingBtn: 'جارٍ الإرسال...',
      errorGeneric: 'حدث خطأ أثناء الإرسال عبر Formspree.',
      errorConnection: 'خطأ في الاتصال. يرجى التحقق من اتصالكم بالإنترنت والمحاولة مجدداً.',
      defaultSubjectPrefix: 'طلب تواصل - تدريب PFE',
    },
    coverLetterModal: {
      badge: 'منشئ رسائل التدريب PFE',
      title: 'إنشاء رسالة تحفيزية مخصصة',
      subtitle: 'أدخل اسم شركتكم لإنشاء رسالة الترشح المهنية لديلسا فوراً وبشكل مخصص.',
      labelCompany: 'اسم الشركة أو المؤسسة *',
      placeholderCompany: 'مثال: LogiMed International, OCP Group, Nestlé...',
      generateBtn: 'إنشاء',
      generatingBtn: 'جارٍ الإنشاء...',
      generatedTitle: 'الرسالة المخصصة لشركة',
      copyBtn: 'نسخ النص',
      copiedBtn: 'تم النسخ!',
    },
    pdfModal: {
      title: 'السيرة الذاتية الرسمية - ديلسا كا',
      subtitle: 'طالبة ماستر 2 في التجارة الدولية • ENCG Settat',
      downloadBtn: 'تحميل',
    },
  },
};

export function getCoverLetterTemplate(companyName: string, lang: Language): string {
  if (lang === 'en') {
    return `Dear Hiring Manager at ${companyName},

Currently a Master 2 student in International Trade at ENCG Settat (National School of Commerce and Management), I am writing to express my strong interest in joining your team for a 4-month End-of-Studies internship (PFE) starting in January 2027.

Bilingual in Portuguese and French with working proficiency in English, and equipped with a solid academic foundation in global business strategy, commercial negotiation, and import-export techniques, I am eager to contribute actively to ${companyName}'s international business development, B2B sales pipelines, or supply-chain logistics.

My academic journey at ENCG Settat, combined with practical field experience—notably at Nearyaa Express as a commercial department representative and at RADEEC in management control and audit—has allowed me to master client prospecting, relationship management, financial KPI tracking, and operational workflows.

Furthermore, my governance commitments as Secretary General of AFSAM and Treasurer of ASSEBGUIM have cultivated my sense of accountability, organizational rigor, and cross-cultural leadership.

I would be thrilled to bring my energy, versatility, and analytical dedication to ${companyName}. I am readily available for an interview to further discuss how my profile aligns with your objectives.

Sincerely,

Dilsa Cá
Master 2 Student in International Trade - ENCG Settat
Phone: +212 776 895 137 | Email: mailondiasbatista@gmail.com`;
  }

  if (lang === 'pt') {
    return `Prezado(a) Responsável pelo Recrutamento na ${companyName},

Atualmente estudante de Mestrado 2 em Comércio Internacional na ENCG Settat (Escola Nacional de Comércio e Gestão), venho por meio desta apresentar a minha candidatura para um estágio de fim de curso (PFE) com a duração de 4 meses, com início em janeiro de 2027.

Bilingue em português e francês com domínio prático do inglês, e dotada de uma sólida formação em gestão internacional, negociação comercial e técnicas de importação e exportação, desejo integrar a vossa dinâmica equipa para contribuir ativamente nos projetos de desenvolvimento comercial B2B, logística e expansão de mercado.

O meu percurso académico na ENCG Settat, combinado com experiências práticas (nomeadamente na Nearyaa Express como responsável comercial e na RADEEC em auditoria e controlo de gestão), permitiu-me consolidar competências em prospeção e fidelização de clientes, análise de indicadores financeiros e gestão de processos operacionais.

Além disso, as minhas responsabilidades associativas como Secretária-Geral da AFSAM e Tesoureira da ASSEBGUIM desenvolveram o meu sentido de responsabilidade, rigor organizacional e liderança intercultural.

Teria imensa honra em colocar o meu dinamismo, versatilidade e dedicação ao serviço da ${companyName}. Fico à vossa inteira disposição para uma entrevista com vista a detalhar as minhas motivações.

Com os melhores cumprimentos,

Dilsa Cá
Estudante de Mestrado 2 em Comércio Internacional - ENCG Settat
Telefone: +212 776 895 137 | Email: mailondiasbatista@gmail.com`;
  }

  if (lang === 'es') {
    return `Estimado/a Responsable de Selección de ${companyName},

Actualmente estudiante de Máster 2 en Comercio Internacional en la ENCG Settat (Escuela Nacional de Comercio y Gestión), me dirijo a usted con el propósito de presentar mi candidatura para unas prácticas de fin de carrera (PFE) de 4 meses de duración, con inicio en enero de 2027.

Bilingüe en portugués y francés con competencia profesional en inglés, y dotada de una sólida formación en gestión internacional, negociación comercial y operativa de comercio exterior, deseo integrarme en su prestigiosa empresa para aportar activamente en sus proyectos de desarrollo comercial B2B, logística y expansión internacional.

Mi formación en la ENCG Settat y mis experiencias laborales prácticas (en particular en Nearyaa Express en prospección y fidelización comercial, y en RADEEC en control de gestión y auditoría) me han permitido dominar el análisis financiero, el seguimiento riguroso de KPI y la gestión de relaciones con clientes.

Asimismo, mi experiencia asociativa como Secretaria General de AFSAM y Tesorera de ASSEBGUIM ha fortalecido mi sentido de la responsabilidad, rigor organizativo y liderazgo intercultural.

Estaría encantada de poner mi dinamismo, polivalencia y dedicación al servicio de ${companyName}. Quedo a su entera disposición para mantener una entrevista y ampliar cualquier información sobre mi perfil.

Atentamente,

Dilsa Cá
Estudiante de Máster 2 en Comercio Internacional - ENCG Settat
Teléfono: +212 776 895 137 | Email: mailondiasbatista@gmail.com`;
  }

  if (lang === 'ar') {
    return `إلى السيد/السيدة مسؤول التوظيف في شركة ${companyName}،

بصفتي طالبة في السنة الثانية من سلك الماستر في التجارة الدولية بالمدرسة الوطنية للتجارة والتسيير بسطات (ENCG Settat)، يشرفني أن أتقدم بطلبي هذا للحصول على تدريب نهاية الدراسة (PFE) لمدة 4 أشهر، ابتداءً من يناير 2027.

بفضل إتقاني للغتين البرتغالية والفرنسية وإلمامي باللغة الإنجليزية، وتكويني الأكاديمي المتين في الإدارة، والمفاوضات التجارية، وتقنيات الاستيراد والتصدير، أتطلع إلى الانضمام إلى فريق عملكم المتميز للمساهمة بفعالية في مشاريعكم لتطوير الأعمال بين الشركات (B2B)، واللوجستيات الدولية.

لقد مكنني مساري الدراسي في المدرسة الوطنية للتجارة والتسيير، مقترناً بتجاربي الميدانية (خاصة في Nearyaa Express بالقسم التجاري، ومؤسسة RADEEC في مجال التدقيق ومراقبة التسيير)، من ضبط آليات التنقيب عن العملاء وكسب ولائهم، وتتبع المؤشرات المالية بدقة، ومواكبة العمليات التجارية.

علاوة على ذلك، ساهم التزامي الجمعوي كأمينة عامة لجمعية AFSAM وأمينة مال لجمعية ASSEBGUIM في تعزيز روح المسؤولية والانضباط التنظيمي والقيادة بين الثقافات.

يسعدني أن أضع حيويتي وتعدّد مهاراتي في خدمة ${companyName}. وأظل رهن إشارتكم لإجراء مقابلة شخصية لتقديم تفاصيل إضافية حول مؤهلاتي ودوافعي.

وتفضلوا بقبول فائق التقدير والاحترام.

ديلسا كا (Dilsa Cá)
طالبة ماستر 2 في التجارة الدولية - ENCG Settat
الهاتف: 212776895137+ | البريد الإلكتروني: mailondiasbatista@gmail.com`;
  }

  // Default: French
  return `Madame, Monsieur le Responsable des Recrutements chez ${companyName},

Actuellement étudiante en Master 2 en Commerce International à l'ENCG Settat (École Nationale de Commerce et de Gestion), je me permets de vous adresser ma candidature pour un stage PFE d'une durée de 4 mois, débutant en janvier 2027.

Bilingue (portugais / français) et dotée d'une solide formation en gestion, négociation commerciale et techniques d'import-export, je recherche une immersion professionnelle au sein de votre dynamique entreprise pour contribuer activement à vos projets de développement commercial B2B, logistique internationale ou négociation.

Mon parcours académique à l'ENCG combiné à mes expériences pratiques (notamment chez Nearyaa Express en tant que chargée du département commercial, ainsi qu'à la RADEEC en contrôle de gestion) m'a permis de maîtriser la prospection, la fidélisation client, l'analyse des indicateurs financiers et le suivi des processus commerciaux. 

Par ailleurs, mon engagement associatif (Secrétaire Générale de l'AFSAM et Trésorière de l'ASSEBGUIM) a renforcé mon sens des responsabilités, ma rigueur organisationnelle et mon leadership interculturel.

Je serais ravie de mettre mon dynamisme, ma polyvalence et mon sens de l'écoute au service de ${companyName}. Je me tiens à votre entière disposition pour un entretien afin de vous exposer plus en détail mes motivations.

Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

Dilsa Cá
Étudiante en Master 2 Commerce International - ENCG Settat
Téléphone : +212 776 895 137 | Email : mailondiasbatista@gmail.com`;
}
