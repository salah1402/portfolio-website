export const SITE = {
  name: 'Mohamed Salauddin A',
  nameDisplay: ['MOHAMED', 'SALAUDDIN A'],
  brandMark: 'MSA',
  location: 'Chennai, India',
  coordinates: '13.0827° N, 80.2707° E',
  status: 'Available for Select Projects',
  roles: [
    'Full Stack Developer',
    'AI Builder',
    '3D Web Engineer',
  ],
  statement: 'I turn ideas into interfaces that move.',
  contact: {
    email: 'salauddin142008@gmail.com',
    github: 'https://github.com/salah1402',
    linkedin: 'https://www.linkedin.com/in/mohamed-salauddin-a-b124593b1',
  },
  project: {
    name: 'SAHARA — Legal Metrology Inspection System',
    shortName: 'SAHARA',
    category: 'AI Legal Metrology & Multimodal OCR',
    description:
      'AI-powered legal metrology inspection system that extracts product-label data, checks PCR 2011 compliance, and generates inspection reports with automated rule-checking pipelines.',
    stack: [
      'React', 'Vite', 'FastAPI',
      'NVIDIA Nemotron OCR v2',
      'NVIDIA Nemotron 3 Ultra 550B',
      'Python', 'ReportLab', 'Vercel', 'Render',
    ],
    link: 'https://saharalegalmetrology.vercel.app',
    metrics: [
      { label: 'Extraction Accuracy', value: '99.4%' },
      { label: 'Pipeline Latency', value: '< 450ms' },
      { label: 'Rule Validation', value: 'PCR 2011' },
      { label: 'Report Generation', value: 'Automated PDF' },
    ],
    pipeline: [
      { step: '01', title: 'Label Intake', detail: 'High-res image ingestion & preprocessing' },
      { step: '02', title: 'Nemotron OCR v2', detail: 'Bbox coordinate extraction & textual parsing' },
      { step: '03', title: 'Nemotron 3 550B', detail: 'Legal metrology semantic rule audit' },
      { step: '04', title: 'Report Engine', detail: 'ReportLab PDF certificate compilation' },
    ],
  },
  experiments: [
    {
      id: '01',
      name: 'KINETIC FIELD',
      category: 'GPU Simulation',
      description: 'Real-time vector field particle physics with interactive mouse gravity and velocity wave propagation.',
      tech: ['WebGL', 'GLSL', 'R3F', 'Three.js'],
    },
    {
      id: '02',
      name: 'SYNAPSE RUNTIME',
      category: 'Agentic Systems',
      description: 'Asynchronous multi-agent execution harness featuring WebSocket telemetry and resilient fallback queues.',
      tech: ['FastAPI', 'Python', 'Redis', 'WebSockets'],
    },
  ],
} as const;
