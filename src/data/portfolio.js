// Edit your portfolio here. Empty optional links are hidden automatically.
export const profile = {
  isTemplate: false,
  name: 'Zain Allateef',
  initials: 'ZA',
  role: 'AI student & creative builder',
  intro: 'Fourth-year AI student exploring natural language, building for the web, and making room for a little creative chaos.',
  about: [
    'I’m Zain, a fourth-year Artificial Intelligence student at Al-Zaytoonah University of Jordan. I build with language, logic, and a little visual flair — exploring NLP and machine learning with Python, then bringing ideas to life through responsive web interfaces.',
    'From experimenting with language models to working with React, I enjoy turning what I learn into practical projects. My interests span AI, front-end development, and graphic design. I’m looking to contribute to meaningful AI projects and connect with people who are just as curious.',
  ],
  location: 'Al-Zaytoonah University · Jordan',
  email: 'zayn.allateef@gmail.com',
  github: 'https://github.com/zaynallateef',
  linkedin: 'https://www.linkedin.com/in/zain-allateef',
  resume: '', // Add a PDF to public/, then set this to './resume.pdf'.
  currently: 'Exploring NLP, AI, and the creative side of the web',
  skills: ['Python', 'NLP', 'Machine learning', 'React', 'JavaScript', 'HTML & CSS', 'Power BI', 'Figma', 'Adobe Creative Suite'],
  interests: ['Language models', 'Web development', 'Graphic design', 'Creative coding'],
}

export const experience = {
  title: 'Oracle Reporting Intern',
  company: 'Software consultancy company',
  period: 'July — October 2026',
  description: 'An internship in the Oracle Reporting department, alongside my studies in Artificial Intelligence.',
}

// Titles and providers supplied by Zain. Links point to the original credentials.
export const certificates = [
  { title: 'NLP with Python', provider: 'Udemy', url: 'https://www.udemy.com/certificate/UC-d8e9c2ce-7d1b-4c6b-9fb2-542cf4cb857b/' },
  { title: 'Microsoft Certified: Azure AI Fundamentals', provider: 'Microsoft', url: 'https://learn.microsoft.com/en-us/users/ZainAllateef-0759/credentials/B305D193B6DB8F98' },
  { title: 'Graphic Design: Photoshop, Illustrator & InDesign', provider: 'Udemy', url: 'https://www.udemy.com/certificate/UC-8d6fdae0-0c58-4a69-9c60-f4a414e21cfd/' },
  { title: 'Full Stack Web Development', provider: 'HTU University', url: 'https://www.credential.net/f606dd15-8704-4207-aa55-a7d52d5cc412#acc.QaF4VHZ8' },
]

// Original illustrated project covers, not screenshots of live apps.
// Add liveUrl if you later host a demo. Repository links are connected.
export const projects = [
  {
    id: 'pdf-rag', number: '01', title: 'PDF Research Assistant', category: 'AI & NLP', type: 'Retrieval-augmented generation',
    description: 'From research papers to grounded answers. A PDF assistant powered by retrieval and Qwen.',
    tags: ['Python', 'Qwen 2.5', 'FAISS'], artwork: 'rag',
    details: 'A Google Colab project that extracts text from research papers, retrieves relevant passages, and uses Qwen2.5-3B-Instruct to generate answers with paper and page context.',
    highlights: ['PyMuPDF extraction and overlapping text chunks', 'Sentence Transformer embeddings and FAISS similarity search', 'Top-three passage retrieval with source and page labels'],
    note: 'Notebook project · Illustrated project cover.',
    liveUrl: '', sourceUrl: 'https://github.com/zaynallateef/pdf_RAG_system_qwenLLM',
  },
  {
    id: 'lstm-qa', number: '02', title: 'LSTM Question Answering', category: 'AI & NLP', type: 'Language understanding',
    description: 'Connecting the story to the answer with memory-based attention and an LSTM network.',
    tags: ['Python', 'TensorFlow', 'LSTM'], artwork: 'qa',
    details: 'A story-based question-answering experiment on the bAbI dataset. A memory-inspired architecture combines separate story and question representations with attention and an LSTM answer predictor.',
    highlights: ['Separate encoders for stories and questions', 'Dot-product attention and an LSTM prediction layer', 'Training notebook and a saved Keras model'],
    note: 'Notebook project · Explores question answering on a synthetic dataset.',
    liveUrl: '', sourceUrl: 'https://github.com/zaynallateef/Q-A-Chatbot-Using-LSTM',
  },
  {
    id: 'sentiment', number: '03', title: 'Reading Between the Reviews', category: 'AI & NLP', type: 'Sentiment analysis',
    description: 'Turning customer opinions into signals with rule-based and machine-learning approaches.',
    tags: ['scikit-learn', 'VADER', 'TF-IDF'], artwork: 'sentiment',
    details: 'An Amazon review sentiment-analysis project comparing VADER with TF-IDF-based LinearSVC and Logistic Regression to classify reviews as positive or negative.',
    highlights: ['Text cleaning, tokenization, and lemmatization', 'Rule-based baseline versus two machine-learning classifiers', 'Evaluation with precision, recall, F1, and confusion matrices'],
    note: 'Notebook project · Illustrated project cover.',
    liveUrl: '', sourceUrl: 'https://github.com/zaynallateef/Amazon-Reviews-Sentiment-Analysis',
  },
  {
    id: 'sales', number: '04', title: 'Sales, at a Glance', category: 'Data & dashboards', type: 'Business intelligence',
    description: 'Raw sales data, a clearer story. Python preparation meets a custom Power BI dashboard.',
    tags: ['Python', 'Power BI', 'Figma'], artwork: 'sales',
    details: 'A sales analytics project combining Python data preparation, Power BI reporting, and a custom Figma-designed dashboard background.',
    highlights: ['Combine and clean sales data with Python', 'Normalize dates and derive purchase-to-dispatch time', 'Explore the Power BI report, PDF, and screenshots in the repository'],
    note: 'Dashboard project · The repository includes actual dashboard screenshots.',
    liveUrl: '', sourceUrl: 'https://github.com/zaynallateef/sales_dashboard_1',
  },
  {
    id: 'housing', number: '05', title: 'A Model for Home', category: 'Machine learning', type: 'Housing price prediction',
    description: 'Exploring the patterns behind California home values, one feature and model at a time.',
    tags: ['pandas', 'scikit-learn', 'Random Forest'], artwork: 'housing',
    details: 'A California housing price-prediction workflow covering data preparation, exploratory analysis, feature engineering, and a comparison of Linear Regression and Random Forest models.',
    highlights: ['Engineer household, bedroom, and population ratios', 'Handle missing values, categorical encoding, and scaling', 'Compare regression approaches to median house-value prediction'],
    note: 'Notebook project · Illustrated project cover.',
    liveUrl: '', sourceUrl: 'https://github.com/zaynallateef/California-Housing-Price-Prediction',
  },
]

