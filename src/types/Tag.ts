export type LanguageTag = 'Javascript' | 'TypeScript' | 'Python' | 'Java' | 'C' | 'HTML' | 'CSS' | 'Kotlin'
export type FrameworkTag = 'React' | 'Node.js' | 'Django' | 'Maven' | 'Gradle' | 'Android' | 'Celery' | 'Three.js' | 'D3.js' | 'PyTorch' 
export type DatabaseTag = 'MySQL' | 'PostgreSQL' | 'MongoDB' | 'SQLite' | 'Dynamodb' | 'Redis'
export type DeploymentTag = 'AWS' | 'Docker' | 'Apache HTTP Server' | 'Nginx' | 'SST' | 'Terraform'
export type ConecptTag = 'SOLID' | 'OOP' | 'Composition' | 'Reactive' | 'Decalrative' | 'MVC' | 'MVP' | 'MVVM' | 'Microservices' | 'Serverless' | 'Event-driven' | 'CI/CD' | 'Horizontal Scaling' | 'Machine Learning' | 'BERT'

export type Tag = LanguageTag | FrameworkTag | DatabaseTag | DeploymentTag | ConecptTag

export type TagCategory = {
  tagCategory: string
  tags: string[]
  color: string,
  borderColor?: string
}

export type TagCategories = {
  [key in TagCategory['tagCategory']]: TagCategory
}

export const tagCategories: TagCategories = {
  'Language': {
    tagCategory: 'Programming',
    tags: ['Javascript', 'TypeScript', 'Python', 'Kotlin', 'Java', 'C', 'HTML', 'CSS'],
    color: 'bg-red-200',
    borderColor: 'border-red-200'
  },
  'Framework': {
    tagCategory: 'Framework',
    tags: ['React', 'Node.js', 'Django', 'Maven', 'Gradle', 'Android', 'Celery', 'Three.js', 'D3.js', 'PyTorch'],
    color: 'bg-emerald-200',
    borderColor: 'border-emerald-200'
  },
  'Database': {
    tagCategory: 'Database',
    tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Dynamodb', 'Redis'],
    color: 'bg-sky-200',
    borderColor: 'border-sky-200'
  },
  'Deployment': {
    tagCategory: 'Deployment',
    tags: ['AWS', 'Docker', 'Apache HTTP Server', 'Nginx', 'SST', 'Terraform'],
    color: 'bg-yellow-200',
    borderColor: 'border-yellow-200'
  },
  'Concept': {
    tagCategory: 'Concept',
    tags: ['SOLID', 'OOP', 'Composition', 'Reactive', 'Decalrative', 'MVC', 'MVP', 'MVVM', 'Microservices', 'Serverless', 'RESTful API', 'CI/CD', 'Horizontal Scaling', 'Event-driven', 'Machine Learning', 'BERT'],
    color: 'bg-purple-200',
    borderColor: 'border-purple-200'
  }
}

export const getTagColor = (tag: Tag): string => {
  for (const category in tagCategories) {
    if (tagCategories[category].tags.includes(tag)) {
      return tagCategories[category].color
    }
  }
  return 'bg-gray-200' // default color if not found
}



