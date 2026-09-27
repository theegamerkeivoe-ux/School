import {
  HeroSlide,
  HighlightCard,
  DepartmentItem,
  FacilityItem,
  NewsItem,
  GalleryPhoto,
  AchievementItem,
  DownloadFile,
  CoreValue,
  EditableSchoolInfo,
} from '../types';

export const initialSchoolInfo: EditableSchoolInfo = {
  schoolName: 'MAAI-MAHIU GIRLS HIGH SCHOOL',
  schoolType: 'Girls Extra-County Secondary School',
  county: 'Nakuru County',
  subCounty: 'Naivasha Sub-County',
  location: 'Maai-Mahiu, Nakuru County, Kenya',
  postalAddress: 'P.O. Box 142 - 20114, Maai-Mahiu, Kenya',
  phone: '+254 (0) 722 890 412 / +254 (0) 733 451 200',
  email: 'info@maaimahiugirls.sc.ke',
  principalName: 'Mrs. Grace W. Kariuki, HSC',
  principalTitle: 'Chief Principal & Secretary to BoG',
  principalMessage:
    'Welcome to the official portal of Maai-Mahiu Girls High School. As an Extra-County secondary institution dedicated to the holistic formation of young Kenyan women, our commitment is centered on rigorous academic discipline, spiritual and moral uprightness, and progressive leadership development. Here at the threshold of the Great Rift Valley, we offer a tranquil, secure, and technologically supportive environment that allows every girl to discover her authentic talents and ascend to national and global significance. We invite parents, guardians, and stakeholders to partner with us as we mold women of substance.',
  vision:
    'To be a premier national center of academic distinction, holistic character formation, and innovative leadership for young women in Kenya and beyond.',
  mission:
    'To provide high-quality, transformative, and values-centered secondary education that inspires intellectual rigor, ethical discipline, and purposeful leadership.',
  motto: 'Strive to Excel · Elimu ni Nguvu',
  latestAnnouncement: {
    headline: 'Termly Academic & Admissions Notice',
    body: 'All Form 1 to Form 4 learners report on schedule. Parents can access fee balances, academic report cards, and homework on the portal.',
    date: 'Term II 2026',
    active: true,
  },
};

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    image: '/src/assets/images/hero_academic_learning_1790533246980.jpg',
    badge: 'Extra-County Girls Secondary School',
    title: 'Nurturing Excellence. Inspiring Futures.',
    subtitle: 'Empowering young women through academic excellence, character, leadership and opportunity.',
    description:
      'Providing an environment of intellectual curiosity, scientific inquiry, and moral grounding at the heart of Nakuru County.',
    primaryCtaText: 'Explore Our School',
    primaryCtaLink: '#welcome',
    secondaryCtaText: 'Admissions',
    secondaryCtaLink: '#admissions',
  },
  {
    id: 'slide-2',
    image: '/src/assets/images/hero_sports_activities_1790533259821.jpg',
    badge: 'Co-Curricular & Physical Development',
    title: 'Championing Character & Vitality',
    subtitle: 'Building teamwork, resilience, and sportsmanship across track, ball games, and creative disciplines.',
    description:
      'Encouraging every learner to cultivate self-confidence, physical wellness, and competitive excellence beyond the classroom.',
    primaryCtaText: 'Student Life',
    primaryCtaLink: '#student-life',
    secondaryCtaText: 'School Gallery',
    secondaryCtaLink: '#gallery',
  },
  {
    id: 'slide-3',
    image: '/src/assets/images/hero_school_campus_1790533272059.jpg',
    badge: 'Serene Rift Valley Environment',
    title: 'A Campus Designed for Focus',
    subtitle: 'A secure, conducive learning haven framed by the majestic landscapes of Maai-Mahiu.',
    description:
      'Equipped with state-of-the-art learning facilities, boarding amenities, and serene spaces designed for holistic growth.',
    primaryCtaText: 'Campus Experience',
    primaryCtaLink: '#campus',
    secondaryCtaText: 'Admissions Info',
    secondaryCtaLink: '#admissions',
  },
];

export const quickHighlights: HighlightCard[] = [
  {
    id: 'academic',
    title: 'Academic Excellence',
    description:
      'Rigorous instructional delivery, continuous learner assessment, and guided remediation across all secondary subjects.',
    iconName: 'GraduationCap',
    accent: 'emerald',
  },
  {
    id: 'leadership',
    title: 'Leadership Development',
    description:
      'Structured student councils, peer mentoring networks, and civic responsibility training for future woman leaders.',
    iconName: 'Award',
    accent: 'amber',
  },
  {
    id: 'sports',
    title: 'Sports & Activities',
    description:
      'Comprehensive athletics, ball games, music, drama, science clubs, and community volunteer service programmes.',
    iconName: 'Trophy',
    accent: 'emerald',
  },
  {
    id: 'holistic',
    title: 'Holistic Education',
    description:
      'Nurturing spiritual well-being, psychological resilience, emotional intelligence, and values-driven citizenship.',
    iconName: 'HeartHandshake',
    accent: 'amber',
  },
];

export const coreValuesList: CoreValue[] = [
  {
    name: 'Excellence',
    description: 'Pursuing the highest standards in academics, personal conduct, and co-curricular endeavors.',
    verseOrMottoPlaceholder: 'Commitment to continuous improvement',
  },
  {
    name: 'Integrity',
    description: 'Upholding honesty, ethical transparency, moral courage, and truthfulness in all engagements.',
    verseOrMottoPlaceholder: 'Honour in every action',
  },
  {
    name: 'Discipline',
    description: 'Fostering self-control, time management, orderliness, and obedience to school traditions.',
    verseOrMottoPlaceholder: 'Foundation of achievement',
  },
  {
    name: 'Leadership',
    description: 'Cultivating visionary, empathetic, and courageous young women ready to serve society.',
    verseOrMottoPlaceholder: 'Leading by inspiring example',
  },
  {
    name: 'Respect',
    description: 'Valuing self-worth, diversity of peers, teachers, support staff, and school community members.',
    verseOrMottoPlaceholder: 'Dignity for all individuals',
  },
  {
    name: 'Responsibility',
    description: 'Taking ownership of learning, environmental stewardship, and accountability to community.',
    verseOrMottoPlaceholder: 'Accountable citizenship',
  },
];

export const departmentsList: DepartmentItem[] = [
  {
    id: 'dept-sciences',
    name: 'Sciences Department',
    category: 'Sciences',
    description: 'Fostering practical inquiry, empirical testing, and scientific curiosity through modern laboratory experiments.',
    hodPlaceholder: 'Mr. Daniel Ochieng, B.Ed (Sc) · Senior Master',
    subjects: ['Biology', 'Chemistry', 'Physics'],
  },
  {
    id: 'dept-mathematics',
    name: 'Mathematics Department',
    category: 'Mathematics',
    description: 'Building analytical reasoning, problem-solving speed, numerical accuracy, and logical conceptualization.',
    hodPlaceholder: 'Mrs. Mary Wambui, M.Ed · Head of Department',
    subjects: ['Pure Mathematics', 'Applied Mathematical Logic'],
  },
  {
    id: 'dept-languages',
    name: 'Languages Department',
    category: 'Languages',
    description: 'Developing eloquence, literary analysis, creative writing, and bilingual communication proficiency.',
    hodPlaceholder: 'Mrs. Catherine Njoroge, B.Ed (Arts) · Senior Mistress',
    subjects: ['English Language & Literature', 'Kiswahili & Fasihi', 'French / Foreign Language (Elective)'],
  },
  {
    id: 'dept-humanities',
    name: 'Humanities Department',
    category: 'Humanities',
    description: 'Exploring societal dynamics, geographical landscapes, ethical frameworks, and historical milestones.',
    hodPlaceholder: 'Mr. Peter Kamau, B.Ed · Head of Department',
    subjects: ['History & Government', 'Geography', 'Christian Religious Education (C.R.E) / I.R.E'],
  },
  {
    id: 'dept-technical',
    name: 'Technical & Creative Department',
    category: 'Technical',
    description: 'Equipping learners with practical vocational skills, economic literacy, culinary knowledge, and artistic expression.',
    hodPlaceholder: 'Ms. Beatrice Korir, B.Sc · Head of Department',
    subjects: ['Business Studies', 'Agriculture', 'Home Science', 'Art & Design'],
  },
  {
    id: 'dept-ict',
    name: 'ICT & Digital Literacy Department',
    category: 'ICT',
    description: 'Empowering girls with digital competencies, coding foundations, computer applications, and technological confidence.',
    hodPlaceholder: 'Eng. David Mwangi, B.Sc (Comp Sci) · Head of ICT',
    subjects: ['Computer Studies', 'Digital Research & Data Literacy'],
  },
];

export const facilityItems: FacilityItem[] = [
  {
    id: 'fac-classrooms',
    title: 'Modern Classrooms',
    description: 'Spacious, well-ventilated, and naturally lit lecture spaces equipped with modern instructional display boards.',
    icon: 'BookOpen',
    tag: 'Academic Infrastructure',
    statusNote: 'Multimedia-enabled lecture blocks',
  },
  {
    id: 'fac-labs',
    title: 'Science Laboratories',
    description: 'Dedicated Physics, Chemistry, and Biology laboratories supplied with gas mains, water sinks, and apparatus.',
    icon: 'FlaskConical',
    tag: 'STEM Learning',
    statusNote: '3 Fully equipped experimental labs',
  },
  {
    id: 'fac-library',
    title: 'Resource Center & Library',
    description: 'A comprehensive collection of syllabus textbooks, reference literature, periodicals, and quiet study alcoves.',
    icon: 'Library',
    tag: 'Independent Study',
    statusNote: '15,000+ reference titles & e-catalogue',
  },
  {
    id: 'fac-dining',
    title: 'Dining Hall & Kitchens',
    description: 'A hygienic, spacious multipurpose dining hall serving balanced nutritional meals prepared under strict dietary standards.',
    icon: 'UtensilsCrossed',
    tag: 'Nutrition & Wellness',
    statusNote: 'Nutritional menu supervised by dietitian',
  },
  {
    id: 'fac-boarding',
    title: 'Boarding Hostels',
    description: 'Secure, clean dormitories overseen by dedicated matrons, teacher patrons, and round-the-clock security personnel.',
    icon: 'Home',
    tag: 'Student Accommodation',
    statusNote: '4 Named houses with 24/7 security & matron',
  },
  {
    id: 'fac-sports',
    title: 'Sports Grounds & Courts',
    description: 'Expansive football and hockey pitches, volleyball, netball, and basketball courts with athletics running tracks.',
    icon: 'Trophy',
    tag: 'Athletics & Fitness',
    statusNote: 'Championship track, pitches & hardcourts',
  },
  {
    id: 'fac-ict',
    title: 'Computer Laboratory',
    description: 'Networked computer terminals with internet connectivity for research, e-learning, and computer studies coursework.',
    icon: 'Monitor',
    tag: 'Digital Infrastructure',
    statusNote: '60 High-speed optical fiber terminals',
  },
];

export const newsAndEventsList: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Preparation for National Form One Orientation & Admissions',
    category: 'Announcements',
    date: 'September 2026',
    author: 'Office of the Principal',
    readTime: '3 min read',
    summary:
      'Information for prospective parents and candidates placed via NEMIS regarding reporting schedules, admission document requirements, and school readiness.',
    fullContent:
      'Maai-Mahiu Girls High School warmly congratulates all candidates placed at our institution. Parents and guardians are requested to access the Admissions Document Center to download the official school admission packet, medical examination certificate, and student code of conduct. Reporting times and registration desks will be operational from 8:00 AM on the designated reporting day.',
    featuredImage: '/src/assets/images/hero_academic_learning_1790533246980.jpg',
  },
  {
    id: 'news-2',
    title: 'Annual Inter-House Science & Innovation Symposium',
    category: 'Events',
    date: 'August 2026',
    author: 'Science Department',
    readTime: '4 min read',
    summary:
      'Students across Form 1 to Form 4 showcase innovative technological solutions, renewable energy prototypes, and water conservation projects.',
    fullContent:
      'Our young scientists exhibited immense creativity during the internal Science Congress. Highlights included solar water filtration systems, agricultural moisture sensors, and mathematical problem-solving models designed to solve environmental challenges in the Rift Valley ecosystem.',
    featuredImage: '/src/assets/images/hero_school_campus_1790533272059.jpg',
  },
  {
    id: 'news-3',
    title: 'Nakuru County Secondary Schools Athletics & Sports Highlights',
    category: 'Achievements',
    date: 'July 2026',
    author: 'Games Department',
    readTime: '3 min read',
    summary:
      'Maai-Mahiu Girls High School teams participate with distinction in regional ball games and track events, exhibiting exemplary sportsmanship.',
    fullContent:
      'The school athletic squad participated enthusiastically in sub-county and county level competitions. The administration commends all participants and their coaches for representing our school colors with dignity, grit, and fair play.',
    featuredImage: '/src/assets/images/hero_sports_activities_1790533259821.jpg',
  },
  {
    id: 'news-4',
    title: 'Career Guidance & University Mentorship Summit',
    category: 'News',
    date: 'June 2026',
    author: 'Guidance & Counselling Department',
    readTime: '2 min read',
    summary:
      'Visiting professionals, university admissions representatives, and distinguished women leaders mentor Form 3 and Form 4 learners.',
    fullContent:
      'Empowering our girls with clarity regarding STEM pathways, law, business leadership, medical sciences, and emerging digital careers. Sessions covered KUCCPS placement criteria, subject combination strategies, and personal leadership goals.',
    featuredImage: '/src/assets/images/hero_academic_learning_1790533246980.jpg',
  },
];

export const galleryList: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Focused Academic Studies',
    category: 'Academics',
    imageUrl: '/src/assets/images/hero_academic_learning_1790533246980.jpg',
    caption: 'Students engaged in interactive collaborative laboratory research in the science block.',
    year: '2026',
  },
  {
    id: 'gal-2',
    title: 'Athletics & Track Practice',
    category: 'Sports',
    imageUrl: '/src/assets/images/hero_sports_activities_1790533259821.jpg',
    caption: 'Inter-house athletic training on the school sports grounds overlooking the Rift Valley hills.',
    year: '2026',
  },
  {
    id: 'gal-3',
    title: 'Scenic Campus Grounds',
    category: 'Campus',
    imageUrl: '/src/assets/images/hero_school_campus_1790533272059.jpg',
    caption: 'Serene architectural perspective of the modern tuition facilities and green gardens.',
    year: '2026',
  },
  {
    id: 'gal-4',
    title: 'Leadership & School Assembly',
    category: 'School Life',
    imageUrl: '/src/assets/images/hero_academic_learning_1790533246980.jpg',
    caption: 'Morning devotion and assembly gathering fostering school unity and institutional ethos.',
    year: '2026',
  },
  {
    id: 'gal-5',
    title: 'Outdoor Field Games',
    category: 'Student Activities',
    imageUrl: '/src/assets/images/hero_sports_activities_1790533259821.jpg',
    caption: 'Students enjoying wholesome weekend recreational activities and team-building exercises.',
    year: '2026',
  },
  {
    id: 'gal-6',
    title: 'Administration & Academic Complex',
    category: 'Campus',
    imageUrl: '/src/assets/images/hero_school_campus_1790533272059.jpg',
    caption: 'The main academic building providing a peaceful and dignified setting for learning.',
    year: '2026',
  },
];

export const achievementList: AchievementItem[] = [
  {
    id: 'ach-1',
    category: 'Academic',
    year: '2025/2026',
    title: 'Steady Academic Progress in National Examinations',
    description: 'Continuous pedagogical improvements, intensive revision seminars, and student mentorship leading to solid university qualifying transitions.',
    recognitionLevel: 'Institutional Benchmark',
  },
  {
    id: 'ach-2',
    category: 'Competitions',
    year: '2025',
    title: 'Sub-County Kenya Science & Engineering Fair (KSEF)',
    description: 'Commendable student presentations in applied technology, biology, and chemistry project categories.',
    recognitionLevel: 'Sub-County Recognition',
  },
  {
    id: 'ach-3',
    category: 'Arts & Culture',
    year: '2025',
    title: 'National Music & Drama Festival Participation',
    description: 'Vibrant choral presentations, folk song performances, and dramatized verses celebrating Kenyan heritage and youth empowerment.',
    recognitionLevel: 'County & Regional Level',
  },
  {
    id: 'ach-4',
    category: 'Leadership',
    year: '2025',
    title: 'Prefects Body & Student Voice Governance Model',
    description: 'Active democratic learner representation that promotes peaceful dialogue, discipline, and peer welfare.',
    recognitionLevel: 'School Leadership Council',
  },
  {
    id: 'ach-5',
    category: 'Sports',
    year: '2025',
    title: 'Regional Cross-Country & Track Competitions',
    description: 'Enthusiastic qualification and sportsmanship demonstrated by school athletes in zonal meets.',
    recognitionLevel: 'Zonal & District Honours',
  },
  {
    id: 'ach-6',
    category: 'Alumni',
    year: '2026',
    title: 'Alumnae Flourishing Across Higher Education',
    description: 'Past graduates advancing into university degrees in medicine, engineering, education, commerce, and public administration.',
    recognitionLevel: 'Inspiring Legacy',
  },
];

export const downloadsList: DownloadFile[] = [
  {
    id: 'dl-1',
    title: 'Official Form One Admission Information Package',
    category: 'Admission Documents',
    description: 'Comprehensive guidelines for newly selected students, reporting instructions, checklist, and requirements.',
    fileType: 'PDF Document',
    fileSize: '1.4 MB',
    updatedDate: '2026 Official Circular',
  },
  {
    id: 'dl-2',
    title: 'Student Medical Examination Certificate & Health Record Form',
    category: 'School Forms',
    description: 'Mandatory clinical history form to be certified by a registered medical practitioner prior to admission.',
    fileType: 'PDF Document',
    fileSize: '620 KB',
    updatedDate: 'Current Term',
  },
  {
    id: 'dl-3',
    title: 'School Rules, Discipline Guidelines & Code of Conduct',
    category: 'Policies',
    description: 'Institutional values, dormitory guidelines, dress code, academic integrity standards, and safety policies.',
    fileType: 'PDF Document',
    fileSize: '840 KB',
    updatedDate: 'Approved 2026',
  },
  {
    id: 'dl-4',
    title: 'Termly Academic Calendar & School Events Schedule',
    category: 'School Calendar',
    description: 'Term dates, half-term breaks, academic assessment periods, prayer day, and prize-giving dates.',
    fileType: 'PDF Document',
    fileSize: '510 KB',
    updatedDate: 'Academic Year 2026',
  },
  {
    id: 'dl-5',
    title: 'Ministry of Education Fees Guidelines Circular Guide',
    category: 'Admission Documents',
    description: 'National government approved fees framework for public extra-county boarding secondary schools.',
    fileType: 'PDF Document',
    fileSize: '950 KB',
    updatedDate: 'MoE Circular Guideline',
  },
  {
    id: 'dl-6',
    title: 'School Uniform Checklist & Bedding Specifications',
    category: 'Admission Documents',
    description: 'Detailed inventory of approved school uniform garments, footwear, sports wear, and dormitory necessities.',
    fileType: 'PDF Document',
    fileSize: '480 KB',
    updatedDate: 'Admissions Package',
  },
  {
    id: 'dl-7',
    title: 'School Community Newsletter - Volume VIII',
    category: 'Newsletters',
    description: 'End of term review celebrating academic progress, co-curricular highlights, and principal’s remarks.',
    fileType: 'PDF Document',
    fileSize: '2.1 MB',
    updatedDate: 'Recent Issue',
  },
  {
    id: 'dl-8',
    title: 'CBC Senior Secondary Transition Readiness Guide',
    category: 'Academic Documents',
    description: 'Overview of academic pathways and senior school preparation under the Competency-Based Curriculum framework.',
    fileType: 'PDF Document',
    fileSize: '1.2 MB',
    updatedDate: 'Curriculum Desk',
  },
];
