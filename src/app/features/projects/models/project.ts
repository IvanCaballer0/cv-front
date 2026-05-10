export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  repoUrl?: string;
  deployUrl?: string;
  repositoryUrl?: string;
}