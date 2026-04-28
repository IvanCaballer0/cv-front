export interface Skill {
  name: string;
  level: 'Basic' | 'Intermediate' | 'Advanced';
  category: 'Tech' | 'Soft' | 'Finance';
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  highlights: string[];
}
