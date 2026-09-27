export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface HighlightCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accent: string;
}

export interface DepartmentItem {
  id: string;
  name: string;
  category: 'Sciences' | 'Mathematics' | 'Languages' | 'Humanities' | 'Technical' | 'ICT';
  description: string;
  hodPlaceholder: string;
  subjects: string[];
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
  statusNote: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'News' | 'Events' | 'Announcements' | 'Achievements';
  date: string;
  author: string;
  readTime: string;
  summary: string;
  fullContent: string;
  featuredImage?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'School Life' | 'Academics' | 'Sports' | 'Events' | 'Campus' | 'Student Activities';
  imageUrl: string;
  caption: string;
  year: string;
}

export interface AchievementItem {
  id: string;
  category: 'Academic' | 'Sports' | 'Arts & Culture' | 'Leadership' | 'Competitions' | 'Alumni';
  year: string;
  title: string;
  description: string;
  recognitionLevel: string;
}

export interface DownloadFile {
  id: string;
  title: string;
  category: 'Admission Documents' | 'School Forms' | 'Newsletters' | 'School Calendar' | 'Policies' | 'Academic Documents' | 'Other Downloads';
  description: string;
  fileType: string;
  fileSize: string;
  updatedDate: string;
  downloadUrl?: string;
}

export interface CoreValue {
  name: string;
  description: string;
  verseOrMottoPlaceholder?: string;
}

export interface EditableSchoolInfo {
  schoolName: string;
  schoolType: string;
  county: string;
  subCounty: string;
  location: string;
  postalAddress: string;
  phone: string;
  email: string;
  principalName: string;
  principalTitle: string;
  principalMessage: string;
  vision: string;
  mission: string;
  motto: string;
  latestAnnouncement: {
    headline: string;
    body: string;
    date: string;
    active: boolean;
  };
}
