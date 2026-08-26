export interface Domain {
  title: string
  description: string
  tags: string[]
}

export const domains: Domain[] = [
  {
    title: 'Agentic AI Systems',
    description: 'Multi-agent pipelines that plan, call tools, and hand off work — built on LangChain / LangGraph with real observability.',
    tags: ['LangGraph', 'MCP', 'Tool Use'],
  },
  {
    title: 'RAG & Vector Search',
    description: 'Retrieval-augmented generation grounded in your own data, using embedding search over vector DBs at production scale.',
    tags: ['OpenSearch', 'FAISS', 'ChromaDB'],
  },
  {
    title: 'Graph Analytics',
    description: 'Modeling relationships as graphs to surface fraud, collusion, and hidden structure that tabular analysis misses.',
    tags: ['Neo4j', 'Community Detection', 'GDS'],
  },
  {
    title: 'LLM Fine-Tuning & Optimization',
    description: 'Adapting open-source LLMs to your domain and data — LoRA fine-tuning, quantization, and evaluation for models that run efficiently in production.',
    tags: ['LoRA', 'Axolotl', 'Quantization'],
  },
  {
    title: 'Enterprise AI Automation',
    description: 'Agentic workflows that automate legacy code migration, ETL, and multi-step business processes — cutting manual effort by 90%+ in production deployments.',
    tags: ['Agentic ETL', 'LLM Routing', 'Workflow Automation'],
  },
  {
    title: 'AI Security & Threat Intelligence',
    description: 'Agentic threat detection over petabyte-scale security logs, built on cloud-native data pipelines for enterprise security teams.',
    tags: ['AWS Bedrock', 'Threat Hunting', 'LangGraph'],
  },
  {
    title: 'Document Intelligence',
    description: 'Turning unstructured documents into structured, actionable data with LLM-driven extraction and dynamic templating.',
    tags: ['Aspose', 'Prompt Engineering', 'OCR'],
  },
  {
    title: 'Computer Vision',
    description: 'Vision pipelines for classification and detection, from medical imaging to agriculture, using transfer learning.',
    tags: ['OpenCV', 'CNN', 'PyTorch'],
  },
  {
    title: 'Full-Stack Product',
    description: 'Shipping the whole thing — FastAPI / React front to back, containerized and deployed on AWS with CI/CD.',
    tags: ['FastAPI', 'React', 'AWS', 'Docker'],
  },
]
