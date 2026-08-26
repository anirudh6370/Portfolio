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
