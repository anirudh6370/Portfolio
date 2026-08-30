export interface Industry {
  title: string
  description: string
  tags: string[]
}

/**
 * Sectors the collective has actually shipped into — each one traces back to
 * real engagements in `developers.ts` (Blue Yonder, IQVIA / Axtria / ZS,
 * Bajaj Finance, Insuremo, Thermax, Brillio, OdiaGenAI). Keep it that way:
 * this section is a credibility claim, not a wish list.
 */
export const industries: Industry[] = [
  {
    title: 'Retail & Supply Chain',
    description:
      'Agentic automation and forecasting inside enterprise supply-chain platforms — the workflow and demand-side work that planning teams run on.',
    tags: ['Forecasting', 'Agentic ETL', 'LLM Routing'],
  },
  {
    title: 'Healthcare & Life Sciences',
    description:
      'Clinical-trial data pipelines, enrollment forecasting and marketing-mix modelling for pharma, plus genomics agents and fine-tuned foundation models on the research side.',
    tags: ['Databricks', 'PySpark', 'scRNA-seq', 'MMM'],
  },
  {
    title: 'Banking & Lending',
    description:
      'RAG financial assistants, credit scoring and lead qualification built against real regulatory and data constraints — measured on loan conversion, not demo quality.',
    tags: ['RAG Chatbots', 'Credit Scoring', 'LangChain'],
  },
  {
    title: 'Insurance',
    description:
      'Fraud and collusion detection across claims, modelled as graphs so the rings and shared-identity patterns that tabular analysis misses actually surface.',
    tags: ['Neo4j GDS', 'Community Detection', 'Fuzzy Matching'],
  },
  {
    title: 'Cybersecurity',
    description:
      'Agentic threat hunting over petabyte-scale security logs, on cloud-native pipelines built for enterprise SOC teams rather than for a notebook.',
    tags: ['AWS Bedrock', 'Athena', 'LangGraph'],
  },
  {
    title: 'Manufacturing & Industrial',
    description:
      'Process analytics, predictive quality and computer-vision inspection over plant, equipment and document data from the factory floor.',
    tags: ['Time-Series', 'OpenCV', 'XGBoost'],
  },
  {
    title: 'Enterprise Software',
    description:
      'GenAI-driven legacy code migration and agentic ETL, cutting multi-week manual effort by 90%+ in production deployments.',
    tags: ['AST Parsing', 'LangGraph', 'Code Migration'],
  },
  {
    title: 'Research & Low-Resource AI',
    description:
      'Open language models for under-served languages and fine-tuned foundation models released back to the research community.',
    tags: ['LoRA', 'Axolotl', 'Hugging Face'],
  },
]
