export interface Project {
  title: string;
  summary: string;
  tags: string[];
  thumbnail: string;
  question: string;
  approach: string;
  result: string;
  dataNotes: string;
  links: {
    writeup?: string;
    notebook?: string;
    app?: string;
    source?: string;
  };
}

// Placeholder projects: replace with real ones before publishing.
export const projects: Project[] = [
  {
    title: 'Sales Trends Explorer',
    summary: 'An interactive marimo notebook exploring seasonal sales patterns.',
    tags: ['marimo', 'time series', 'pandas'],
    thumbnail: 'thumbnails/placeholder.svg',
    question: 'Which seasonal patterns drive sales, and how stable are they?',
    approach: 'Generate a synthetic series and explore trend, seasonality and noise with sliders.',
    result: 'Placeholder: key takeaway goes here.',
    dataNotes: 'Placeholder: synthetic data generated in the notebook; no real data.',
    links: {
      writeup: 'projects',
      notebook: 'https://molab.marimo.io/github/radek-dev/marimo-notebooks/blob/main/sales_trends.py/wasm',
      source: 'https://github.com/radek-dev/marimo-notebooks',
    },
  },
  {
    title: 'Customer Segments App',
    summary: 'A Streamlit app for clustering customers and inspecting segments.',
    tags: ['Streamlit', 'clustering', 'scikit-learn'],
    thumbnail: 'thumbnails/placeholder.svg',
    question: 'Can customers be grouped into meaningful, actionable segments?',
    approach: 'K-means clustering with adjustable parameters in a Streamlit UI.',
    result: 'Placeholder: key takeaway goes here.',
    dataNotes: 'Placeholder: synthetic data; no personal information.',
    links: {
      writeup: 'projects',
      app: 'https://YOUR-APP.streamlit.app',
      source: 'https://github.com/OWNER/REPO',
    },
  },
  {
    title: 'Forecasting Walkthrough',
    summary: 'A notebook walking through baseline and ML forecasting models.',
    tags: ['marimo', 'forecasting', 'WebAssembly'],
    thumbnail: 'thumbnails/placeholder.svg',
    question: 'How much do ML models improve on a simple baseline forecast?',
    approach: 'Compare naive, ETS and gradient boosting models with backtesting.',
    result: 'Placeholder: key takeaway goes here.',
    dataNotes: 'Placeholder: public dataset; runs in the browser via /wasm.',
    links: {
      writeup: 'projects',
      notebook: 'https://molab.marimo.io/github/OWNER/REPO/blob/main/forecasting.py/wasm',
      source: 'https://github.com/OWNER/REPO',
    },
  },
];
