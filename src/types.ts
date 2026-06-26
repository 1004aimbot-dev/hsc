export enum Language {
  KO = "KO",
  EN = "EN",
}

export interface CoreValue {
  id: string;
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
  iconName: string; // Lucide icon name or key
}

export interface TimelineEvent {
  id: string;
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
  iconName: string;
}

export interface FAQItem {
  questionKo: string;
  questionEn: string;
  answerKo: string;
  answerEn: string;
}

export interface Submission {
  id: string;
  name: string;
  phone: string;
  timestamp: string;
}
