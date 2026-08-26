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
  /** Publications, media features, hackathon results — a trust signal beyond project work. */
  recognition?: string[]
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
  {
    id: 'sk-md-shahid',
    name: 'Sk Md Shahid',
    role: 'Lead AI/ML Engineer',
    tagline: 'Agentic GenAI systems — from enterprise code migration to LLM fine-tuning on low-resource languages.',
    location: 'Bhubaneswar, Odisha',
    yearsExperience: 3,
    avatarInitials: 'SS',
    domains: ['Agentic AI & Automation', 'LLM Fine-Tuning', 'AI Security', 'Low-Resource NLP'],
    topSkills: ['LangGraph', 'Multi-Agent Systems', 'AWS Bedrock', 'LoRA Fine-Tuning', 'RAG', 'MCP'],
    skillGroups: [
      {
        category: 'GenAI & Agents',
        skills: ['LangChain', 'LangGraph', 'Multi-Agent Framework', 'Advanced RAG', 'LLM Evaluation', 'LLM Pretraining', 'Llama Factory (Fine-Tuning)', 'Model Context Protocol (MCP)', 'Knowledge Graphs', 'Chain-of-Thought Prompting'],
      },
      {
        category: 'AI / ML',
        skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'NLTK', 'SpaCy', 'CNNs / RNNs / Transformers', 'Time Series Analysis'],
      },
      {
        category: 'Cloud & DevOps',
        skills: ['AWS (EC2, S3, Lambda, Bedrock)', 'GCP · Vertex AI', 'Azure · Azure AI Foundry', 'Microsoft Fabric', 'Docker'],
      },
      {
        category: 'Data & Databases',
        skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'NumPy', 'Pandas', 'Tableau', 'Plotly'],
      },
      {
        category: 'Full-Stack',
        skills: ['FastAPI', 'Flask', 'React.js', 'Git / GitHub'],
      },
    ],
    experience: [
      {
        role: 'Lead AI/ML Engineer',
        company: 'Brillio',
        period: 'Jun 2025 – Present',
        highlights: [
          'Conceptualized and built enterprise-level AI accelerators that automate large-scale code and database migration pipelines.',
          'Developed multi-agent workflows for automated data discovery, structural ETL mapping, and target-system schema integration.',
          'Leveraged advanced LLM routing to dynamically generate optimized source code tailored to target system architecture and constraints.',
        ],
      },
      {
        role: 'Data Scientist / GenAI Engineer',
        company: 'Shenzyn',
        period: 'Dec 2024 – Jun 2025',
        highlights: [
          'Automated threat detection and reporting over petabyte-scale, OCSF-mapped AWS security logs for a Fortune-50 security team.',
          'Orchestrated stateful workflows with LangGraph across AWS Athena, S3, Lambda, and EventBridge.',
          'Used AWS Bedrock (Claude) with a FastAPI backend and DynamoDB, improving threat-detection speed and accuracy at scale.',
        ],
      },
      {
        role: 'Trainee Software Engineer',
        company: 'Nitor Infotech',
        period: 'May 2024 – Aug 2024',
        highlights: [
          'Built "GE-CoPilot", an in-house AI copilot for a biotech grant-writing company, cutting manual processing time from 7 hours to ~5 minutes (~98% efficiency gain).',
          'Built with LangChain LLM agents, FastAPI, AWS EC2, and Docker; integrated PubMed and NIH data with a MongoDB + React.js stack, now used by 40–50 researchers.',
          'Built healthcare-analytics PoCs combining AI agents and knowledge graphs (LangChain, LangGraph, Neo4j, Gremlin API) for survival analysis with chain-of-thought prompting.',
        ],
      },
      {
        role: 'AI Researcher',
        company: 'OdiaGenAI',
        period: 'May 2023 – May 2024',
        highlights: [
          'Co-developed FEDCOM, a framework for compressed/optimized model deployment, with the Norwegian BioAI Lab.',
          'Built OdiaLLAMA (a Llama-based Odia language model) and Acharya (a RAG-based Hindi tutor) using LoRA fine-tuning, Axolotl, and RAG, deployed on AWS, Streamlit, and Hugging Face Spaces.',
          'Led research on low-resource Indic languages — OCR optimization, vision-language models, LLM pretraining, evaluation benchmarks, and quantization for edge deployment.',
        ],
      },
    ],
    projects: [
      {
        name: 'GE-CoPilot',
        stack: 'LangChain Agents · FastAPI · AWS EC2 · Docker',
        description: 'In-house AI copilot for a biotech grant-writing company, cutting manual processing time by ~98% and now used by 40–50 researchers.',
      },
      {
        name: 'Threat Hunting Assistant',
        stack: 'LangGraph · AWS Bedrock (Claude) · Athena · DynamoDB',
        description: 'Agentic threat detection over petabyte-scale security logs for a Fortune-50 security team, improving detection speed and accuracy.',
      },
      {
        name: 'OdiaLLAMA & Acharya',
        stack: 'LoRA · Axolotl · RAG · Hugging Face',
        description: 'A Llama-based Odia language model and a RAG-based Hindi tutor, advancing low-resource language AI.',
      },
    ],
    education: 'M.Sc. in Data Science & AI, Silicon University, Bhubaneswar (2022–2024); B.Sc. in Physics & Mathematics, Berhampur University (2018–2021)',
    recognition: [
      'Poster — "LLM Fine-Tuning for Low Resource Language: A Case Study on Odia", Finnish AI Day 2023',
      'Paper — "OdiaGenAI’s Participation at WAT2023", published at MT Summit 2023 (Macau SAR China)',
      '"OdiaLLama by OdiaGenAI" featured in Analytics India Magazine and Meta Community Stories, Dec 2023',
      'Top 5% finish, ML hackathon by Analytics Vidhya',
    ],
    links: {
      email: 'skshahid4467@gmail.com',
      github: 'https://github.com/Sk4467',
      resume: '/resumes/sk-md-shahid-resume.pdf',
    },
  },
]
