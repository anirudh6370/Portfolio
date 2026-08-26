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
    avatarInitials: 'SM',
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
  {
    id: 'swapnil-salgar',
    name: 'Swapnil Salgar',
    role: 'Senior Data Scientist',
    tagline: 'Agentic AI that modernizes legacy enterprise code and powers fintech decisioning at scale.',
    location: 'Pune, India',
    yearsExperience: 6,
    avatarInitials: 'SS',
    domains: ['Agentic AI & Automation', 'LLM Fine-Tuning', 'Fintech AI', 'Enterprise Code Migration'],
    topSkills: ['LangGraph', 'LangChain', 'RAG', 'LoRA / QLoRA', 'FastAPI', 'NetworkX'],
    skillGroups: [
      {
        category: 'GenAI & Agents',
        skills: ['LangChain', 'LangGraph', 'Multi-Agent Workflows', 'Tool-Calling', 'Memory & State Management', 'RAG', 'Prompt Engineering', 'LoRA / QLoRA Fine-Tuning', 'GANs', 'VAEs', 'Diffusion Models'],
      },
      {
        category: 'LLMs & NLP',
        skills: ['OpenAI GPT', 'Llama', 'BERT', 'Mistral', 'Anthropic', 'Hugging Face Transformers', 'Text Classification', 'NER', 'Summarization', 'Q&A'],
      },
      {
        category: 'AI / ML',
        skills: ['Logistic Regression', 'Random Forest', 'XGBoost', 'SVM', 'CNNs', 'LSTMs', 'Siamese Networks', 'TensorFlow', 'Keras', 'OpenCV'],
      },
      {
        category: 'Vector & Knowledge Systems',
        skills: ['Pinecone', 'FAISS', 'ChromaDB', 'LlamaIndex', 'Retrieval Pipelines'],
      },
      {
        category: 'Cloud & MLOps',
        skills: ['Databricks', 'Model Deployment', 'Data Pipelines', 'Monitoring'],
      },
      {
        category: 'Full-Stack',
        skills: ['Python', 'SQL', 'FastAPI', 'Flask', 'REST APIs', 'Streamlit', 'Gradio'],
      },
    ],
    experience: [
      {
        role: 'Senior Data Scientist',
        company: 'Brillio Technologies',
        period: 'May 2025 – Present',
        highlights: [
          'Architected an AI-driven code conversion system cutting manual effort by 60–70% for legacy SAS ETL migration to Python/PySpark, using token-aware chunking for LLM-based semantic translation within API limits.',
          'Built a custom SAS parser producing structured AST representations for complex constructs (macros, PROC SQL), plus a LangGraph multi-agent system for script analysis, conversion, validation, and documentation.',
          'Built a dependency-resolution engine with NetworkX for execution order and dataset lineage, and automated Mermaid-diagram pipelines visualizing process flow — scaling modernization for Fortune clients while cutting costs.',
          'Built an AI-powered R Shiny application analyzer to parse and document large, interdependent R codebases (ui.R, server.R, helper modules).',
        ],
      },
      {
        role: 'Senior Data Scientist',
        company: 'Bajaj Finance Limited',
        period: 'Jun 2022 – May 2025',
        highlights: [
          'Designed AI/ML solutions to boost home loan engagement and conversion, including decile-scoring predictive models for marketing.',
          'Built "Smart Financial Assistant", a RAG-based chatbot for tailored loan recommendations and instant eligibility assessments, integrating OpenAI and LangChain into production data pipelines.',
          'Partnered with business teams to prioritize leads and lift loan conversions through predictive-analytics-driven targeting.',
        ],
      },
      {
        role: 'Data Analyst (Process Engineer)',
        company: 'Thermax Ltd',
        period: 'Jul 2021 – Mar 2022',
        highlights: [
          'Forecasted daily fuel consumption for industrial boilers with regression models on steam load, weather, and efficiency data, optimizing procurement and planning accuracy.',
        ],
      },
      {
        role: 'Jr. Data Scientist',
        company: 'Infinite Tech Solutions Pvt Ltd',
        period: 'Jan 2020 – Jul 2021',
        highlights: [
          'Built an RFM-based customer segmentation pipeline with K-Means clustering (Elbow Method, Silhouette Score), lifting campaign ROI and retention by over 20%.',
          'Developed a custom Siamese Neural Network for automated signature verification, strengthening fraud detection.',
        ],
      },
    ],
    projects: [
      {
        name: 'AI-Driven Code Conversion System',
        stack: 'LangGraph · NetworkX · AST Parsing · PySpark',
        description: 'Multi-agent pipeline that migrates legacy SAS ETL scripts to Python/PySpark, cutting manual migration effort by 60–70%.',
      },
      {
        name: 'Smart Financial Assistant',
        stack: 'RAG · LangChain · OpenAI',
        description: 'RAG-based chatbot delivering tailored home-loan recommendations and instant eligibility assessments.',
      },
      {
        name: 'Signature Verification',
        stack: 'Siamese Networks · Data Augmentation',
        description: 'Custom Siamese neural network for automated signature verification to strengthen fraud detection.',
      },
    ],
    education: 'MBA (IT), BAMU University (2021–2024); M.Tech in Thermal Engineering, VJTI Mumbai (2018–2020); B.E. in Mechanical Engineering, Solapur University (2012–2016)',
    links: {
      email: 'swapnilsalgar77@gmail.com',
      linkedin: 'https://linkedin.com/in/swapnil-salgar-749688112',
      resume: '/resumes/swapnil-salgar-resume.pdf',
    },
  },
  {
    id: 'iftesha-najnin',
    name: 'Iftesha Najnin',
    role: 'Sr. AI Engineer',
    tagline: 'Enterprise agentic AI platforms — scaled to 500K+ agent executions a month.',
    location: 'Bangalore, India',
    yearsExperience: 6,
    avatarInitials: 'IN',
    domains: ['Agentic AI & Automation', 'Enterprise AI Automation', 'LLM Fine-Tuning', 'Computational Biology'],
    topSkills: ['LangGraph', 'LangChain', 'Multi-Agent Systems', 'Azure OpenAI', 'RAG', 'Prompt Engineering'],
    skillGroups: [
      {
        category: 'GenAI & Agents',
        skills: ['LangChain', 'LangGraph', 'Multi-Agent Systems', 'RAG', 'Prompt Engineering', 'Chain-of-Thought', 'Azure OpenAI', 'Azure AI Foundry'],
      },
      {
        category: 'AI / ML',
        skills: ['TensorFlow', 'PyTorch', 'Hugging Face Transformers', 'Time Series Analysis', 'LoRA Fine-Tuning', 'NLP', 'Deep Learning'],
      },
      {
        category: 'Computational Biology',
        skills: ['Scanpy', 'Anndata', 'GeneFormer', 'scRNA-seq Analysis', 'Weights & Biases'],
      },
      {
        category: 'Cloud & DevOps',
        skills: ['Azure', 'Azure Container Apps', 'Docker', 'Git', 'CI/CD'],
      },
      {
        category: 'Full-Stack',
        skills: ['Python', 'R', 'SQL', 'FastAPI', 'Streamlit', 'Gradio', 'Chainlit'],
      },
    ],
    experience: [
      {
        role: 'Sr. AI Researcher / Engineer',
        company: 'Blue Yonder',
        period: 'May 2025 – Present',
        highlights: [
          'Co-invented AgentSmith, a low-code/no-code enterprise multi-agent platform that reached the Crystal Ball Innovation Finals and shipped into the Blue Yonder Agent Marketplace, supporting 500K+ agent executions/month while cutting custom development effort by ~50%.',
          'Led development of "Smart Builder", enabling natural-language-driven agent creation, instruction generation, and tool recommendation, plus the backend APIs and orchestration for agent lifecycle management.',
          'Led technical design for the TAM Persona Agent, a strategic Microsoft co-build — architecting multi-agent orchestration, memory, context management, and persona-driven agent design, and delivering enterprise agents (Upgrade Analyzer, Lead Analyzer, Escalation Assist) using RAG and semantic search over enterprise data.',
        ],
      },
      {
        role: 'Sr. AI Researcher',
        company: 'Odia Generative AI',
        period: 'Feb 2026 – Present',
        highlights: [
          'Building an Odia AI ecosystem — datasets, OCR evaluation, and model benchmarking for a low-resource Indic language.',
          'Created and open-sourced one of the first Odia OCR benchmark datasets, and fine-tuned Qwen2.5-VL with LoRA for high-accuracy Odia OCR.',
          'Developed "Indic OCR Eval", introducing GER, CAGER, and Indic-aware OCR evaluation metrics; released datasets, models, and tools on Hugging Face.',
        ],
      },
      {
        role: 'Full Stack Data Scientist',
        company: 'Aganitha Cognitive Solutions',
        period: 'Feb 2023 – May 2025',
        highlights: [
          'Built a conversational ReAct agent letting biologists run scRNA-seq analyses in natural language with live tool/database integration; extended it into a multi-agent framework with a response-caching layer, instrumented with LangSmith.',
          'Built an LSTM-based time-series model for antibody titer prediction reaching 94% accuracy, deployed as an interactive Streamlit application.',
          'Fine-tuned GeneFormer, a BERT-based single-cell genomics foundation model, applying in-silico perturbation and classification techniques for gene-level insights.',
        ],
      },
      {
        role: 'Subject Matter Lead (Math & Physics)',
        company: 'HW Saver LLP',
        period: 'Oct 2019 – Apr 2022',
        highlights: [
          'Built deep expertise in mathematical modeling and analytical problem-solving, later applied to algorithm design and data-driven decision-making as a data scientist.',
        ],
      },
    ],
    projects: [
      {
        name: 'AgentSmith',
        stack: 'LangGraph · Azure OpenAI · FastAPI',
        description: 'Low-code/no-code enterprise multi-agent platform supporting 500K+ agent executions per month.',
      },
      {
        name: 'LLM Agent for Sc-RNA Data Analysis',
        stack: 'LangChain · Scanpy · Anndata · LangSmith',
        description: 'Conversational agent letting biologists run scRNA-seq analyses in natural language, with live data-source integration.',
      },
      {
        name: 'Odia OCR Benchmark',
        stack: 'Qwen2.5-VL · LoRA · Hugging Face',
        description: 'One of the first open Odia OCR benchmark datasets, with a fine-tuned model and Indic-aware evaluation metrics.',
      },
    ],
    education: 'M.Sc. in Physics, NIT Srinagar (2017–2019) — CGPA 9.2, Gold Medalist; PG Diploma in Data Science, AlmaBetter (2022–2023)',
    recognition: [
      'GEM Award 2025, Blue Yonder',
      'AIR 1388, GATE-DA 2025',
      'Top 2% finish, ML Hackathon, Aug 2022',
      'Gold Medalist, M.Sc. Physics, NIT Srinagar',
    ],
    links: {
      email: 'ifteshanajnin786@gmail.com',
      resume: '/resumes/iftesha-najnin-resume.pdf',
    },
  },
  {
    id: 'aditya-tambe',
    name: 'Aditya Tambe',
    role: 'Senior Data Scientist',
    tagline: 'GenAI systems that modernize clinical-trial data pipelines and quantify pharma marketing ROI.',
    location: 'Pune, India',
    yearsExperience: 7,
    avatarInitials: 'AT',
    domains: ['Enterprise AI Automation', 'Pharma & Healthcare AI', 'Agentic AI & Automation', 'Marketing Analytics'],
    topSkills: ['LangGraph', 'LangChain', 'PySpark', 'Databricks', 'RAG', 'XGBoost'],
    skillGroups: [
      {
        category: 'GenAI & Agents',
        skills: ['LangChain', 'LangGraph', 'LangSmith', 'LangServe', 'RAG', 'Prompt Engineering', 'Fine-Tuning', 'Vector Databases', 'OpenAI & Anthropic APIs', 'Ollama', 'Hugging Face'],
      },
      {
        category: 'Machine Learning',
        skills: ['Predictive Modeling', 'Time-Series Forecasting', 'Classification & Regression', 'XGBoost', 'Random Forest', 'Marketing Mix Modeling', 'NER'],
      },
      {
        category: 'Programming',
        skills: ['Python', 'PySpark', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'Web Scraping (BeautifulSoup, Selenium)'],
      },
      {
        category: 'Cloud & Platforms',
        skills: ['Databricks', 'AWS', 'Docker', 'Git'],
      },
      {
        category: 'Full-Stack',
        skills: ['Flask', 'FastAPI', 'Streamlit', 'React', 'Power BI'],
      },
    ],
    experience: [
      {
        role: 'Senior Programmer, Data Science',
        company: 'IQVIA',
        period: 'Mar 2025 – Present',
        highlights: [
          'Built a multi-agent GenAI system analyzing legacy SAS code to generate Databricks PySpark equivalents, with automated code review and validation for clinical-trial reporting across DM, AE, CM, Labs, and Vitals domains.',
          'Built an automated SAS-to-PySpark parity agent validating schemas, record counts, nulls, derived variables, and aggregates against legacy outputs, with a feedback-driven self-correction loop that improved migration accuracy.',
          'Built and deployed an execution-monitoring web app on Databricks with role-based access control and an LLM-powered failure-diagnostics chatbot for root-cause Q&A on failed pipeline jobs.',
        ],
      },
      {
        role: 'Senior Associate, Data Science',
        company: 'Axtria',
        period: 'Jun 2023 – Feb 2025',
        highlights: [
          'Built Marketing Mix Models (Ridge/Elastic Net) quantifying the incremental impact of pharma promotional channels on prescription uptake, with adstock/saturation features and budget-allocation scenario planning.',
          'Built an XGBoost model forecasting 6-month patient enrollment across ~8,000 clinical-trial site-records from 90+ studies, cutting forecast error (MAE) by 25% over the incumbent planning approach.',
        ],
      },
      {
        role: 'Associate Consultant',
        company: 'ZS Associates',
        period: 'Nov 2020 – May 2023',
        highlights: [
          'Designed a 340B program data framework on Databricks/PySpark unifying retail and non-retail datasets into a single source of truth; built a web-scraping pipeline for HCP verification from hospital sites and the NPPES registry.',
          'Trained an NER model to extract HCP names, degrees, and addresses from unstructured text, applying fuzzy matching to resolve HCP-HCO affiliations and automate recurring manual reporting.',
          'Led offshore delivery for a 30+ source-system analytics rollout and cloud migration, coordinating 15+ stakeholders across vendors and internal teams.',
        ],
      },
      {
        role: 'Data Analyst Intern',
        company: 'Divgi-TTS',
        period: 'Jun 2019 – May 2020',
        highlights: [
          'Performed data analytics and statistical hypothesis testing in Python to support data-driven decision-making across automotive manufacturing workflows.',
        ],
      },
    ],
    projects: [
      {
        name: 'GenAI SAS-to-PySpark Migration',
        stack: 'LangGraph · Databricks · PySpark',
        description: 'Multi-agent system that migrates legacy SAS clinical-trial code to PySpark, with automated parity validation against legacy outputs.',
      },
      {
        name: 'Pharma Marketing Mix Modeling',
        stack: 'Ridge / Elastic Net · Adstock Modeling',
        description: 'Quantifies the ROI of pharma promotional channels and supports budget-allocation scenario planning for brand teams.',
      },
      {
        name: 'Clinical Trial Enrollment Forecasting',
        stack: 'XGBoost · Time-Aware Validation',
        description: 'Forecasts 6-month patient enrollment across thousands of clinical-trial sites, cutting forecast error by 25%.',
      },
    ],
    education: 'M.Tech in Project Management, College of Engineering Pune — CGPA 9.3/10 (2020); B.E. in Mechanical Engineering, Savitribai Phule Pune University (2017)',
    recognition: [
      'BRAVO Award (Q4 2023), Axtria — impact delivery on a strategic data science engagement',
      'In-Genius Award (2022), ZS Associates — for an Excel-based planning tool',
      'Project Champion & PMEC Excellence Award (2021), ZS Associates',
      'Databricks Accredited Generative AI Fundamentals; Databricks LLMs — Application through Production',
    ],
    links: {
      email: 'aditambe3@gmail.com',
      linkedin: 'https://linkedin.com/in/adityatambe',
      resume: '/resumes/aditya-tambe-resume.pdf',
    },
  },
]
