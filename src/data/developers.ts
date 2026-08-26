export interface Experience {
  role: string
  company: string
  period: string
  highlights: string[]
}

export interface Project {
  name: string
  stack: string
  description: string
  link?: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Developer {
  id: string
  name: string
  role: string
  tagline: string
  location: string
  yearsExperience: number
  avatarInitials: string
  domains: string[]
  topSkills: string[]
  skillGroups: SkillGroup[]
  experience: Experience[]
  projects: Project[]
  education: string
  links: {
    email?: string
    github?: string
    linkedin?: string
    resume?: string
  }
}

/**
 * Add a new teammate by appending an object of this shape — every section
 * (team grid, detail panel, stack marquee, stats) reads from this array.
 */
export const developers: Developer[] = [
  {
    id: 'anirudha-sutar',
    name: 'Anirudha Sutar',
    role: 'AI Engineer',
    tagline: 'Agentic AI systems that reason over messy, real-world data.',
    location: 'Pune, India',
    yearsExperience: 2.5,
    avatarInitials: 'AS',
    domains: ['Agentic AI', 'RAG Systems', 'Graph Analytics', 'Document Intelligence'],
    topSkills: ['LangChain', 'LangGraph', 'Neo4j GDS', 'RAG', 'Python', 'FastAPI'],
    skillGroups: [
      {
        category: 'GenAI & Agents',
        skills: ['LangChain', 'LangGraph', 'Multi-Agent Orchestration', 'Prompt Engineering', 'RAG', 'LLM Fine-Tuning', 'MCP', 'Claude Code'],
      },
      {
        category: 'AI / ML',
        skills: ['HuggingFace', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'CNN', 'Transfer Learning', 'BERT / GPT', 'Ollama'],
      },
      {
        category: 'Graph & Data',
        skills: ['Neo4j (WCC, Leiden)', 'OpenSearch', 'ChromaDB', 'FAISS', 'Embedding Similarity', 'MySQL', 'SQL'],
      },
      {
        category: 'Cloud & Tools',
        skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'Git', 'CI/CD', 'GitHub Actions'],
      },
      {
        category: 'Full-Stack',
        skills: ['Python', 'FastAPI', 'React.js', 'Streamlit', 'REST APIs'],
      },
    ],
    experience: [
      {
        role: 'Associate Software Engineer (AI)',
        company: 'Insuremo Pvt Ltd',
        period: 'Apr 2025 – Present',
        highlights: [
          'Modeled claims, claimants, garages, and repair entities as a Neo4j graph; applied WCC and Leiden community detection to surface collusion networks across 10K+ synthetic claim records.',
          'Layered multi-signal fraud detection — narrative-to-damage mismatches, overcharged parts, invoice inconsistencies — cutting false-positive manual reviews by an estimated ~30%.',
          'Orchestrated the end-to-end pipeline with LangGraph-based AI agents, generating natural-language explanations so flagged claims are interpretable for non-technical reviewers.',
          'Built a Make-Model-Variant mapping system combining fuzzy matching with embedding-based similarity search over an OpenSearch vector DB, reducing manual mapping effort by ~40%.',
          'Built an AI-agent-driven document intelligence pipeline turning static insurance policy documents into dynamic, tag-based templates using Aspose, cutting manual generation effort by ~30%.',
        ],
      },
      {
        role: 'AI Engineer',
        company: 'AppNAI',
        period: 'Apr 2024 – Mar 2025',
        highlights: [
          'Developed computer vision applications for the agriculture sector using TensorFlow and transfer learning (VGG16, Xception).',
          'Built a React + FastAPI stack to serve model outputs, and collaborated on optimizing inference performance.',
        ],
      },
    ],
    projects: [
      {
        name: 'Fraud & Collusion Detection in Claims',
        stack: 'Neo4j GDS · LangGraph · Python · AI Agents',
        description: 'Graph-based fraud analytics surfacing collusion networks in insurance claims with AI-generated explanations for reviewers.',
      },
      {
        name: 'MMV Mapping System',
        stack: 'Fuzzy Matching · RAG · OpenSearch · LLM',
        description: 'Standardizes vehicle Make-Model-Variant data across insurers with inconsistent formats via embedding-based retrieval.',
      },
      {
        name: 'Alzheimer’s Early Diagnosis',
        stack: 'OpenCV · VGG16 · CNN',
        description: 'Early Alzheimer’s detection pipeline from brain MRI scans using transfer learning and class-imbalance augmentation.',
        link: 'https://github.com/anirudh6370',
      },
    ],
    education: 'M.Sc. in Data Science, Silicon University, Bhubaneswar — CGPA 9.33/10 (2022–2024)',
    links: {
      email: 'sutaranirudha604@gmail.com',
      github: 'https://github.com/anirudh6370',
      linkedin: 'https://linkedin.com/in/anirudha-sutar',
      resume: '/resumes/anirudha-sutar-resume.pdf',
    },
  },
]
