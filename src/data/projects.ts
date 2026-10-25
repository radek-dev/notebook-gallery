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
    notebook?: string;
    paper?: string;
    app?: string;
    source?: string;
  };
}

// Sample projects built on synthetic data; replace or extend with real work.
export const projects: Project[] = [
  {
    title: 'Correlation Measures',
    summary: 'Nine interactive marimo notebooks exploring correlation, from Pearson and Spearman to distance correlation.',
    tags: ['marimo', 'statistics', 'correlation'],
    thumbnail: 'thumbnails/correlation-measures.svg',
    question: 'Which association measure fits your data, and when can its value mislead?',
    approach: 'A summary guide links to nine notebooks with interactive synthetic examples, formulas, worked calculations and assumptions.',
    result: 'Compare linear, ranked, binary, categorical, latent and adjusted associations, including nonlinear dependence that Pearson can miss.',
    dataNotes: 'Synthetic data only. Examples illustrate interpretation, not causal effects. Polychoric estimation assumes latent normal variables.',
    links: {
      notebook: 'https://molab.marimo.io/github/radek-dev/marimo-notebooks/blob/main/correlation_measures/summary.py/wasm?mode=read&show-code=false',
      source: 'https://github.com/radek-dev/marimo-notebooks/tree/main/correlation_measures',
    },
  },
  {
    title: 'Sales Trends Explorer',
    summary: 'An interactive marimo notebook that explores trend and seasonality in sales.',
    tags: ['marimo', 'time series', 'pandas'],
    thumbnail: 'thumbnails/sales-trends.svg',
    question: 'How do trend, seasonality and noise combine to shape a monthly sales series?',
    approach: 'Generate a synthetic series and adjust trend, seasonal amplitude and noise with sliders.',
    result: 'With the default settings, average sales peak in April and bottom out in October.',
    dataNotes: 'Synthetic data generated in the notebook; no real data. Runs in the browser via /wasm.',
    links: {
      notebook: 'https://molab.marimo.io/github/radek-dev/marimo-notebooks/blob/main/sales_trends.py/wasm',
      source: 'https://github.com/radek-dev/marimo-notebooks',
    },
  },
  {
    title: 'Customer Segments App',
    summary: 'A Streamlit app that clusters customers and lets you inspect each segment.',
    tags: ['Streamlit', 'clustering', 'scikit-learn'],
    thumbnail: 'thumbnails/customer-segments.svg',
    question: 'Can customers be grouped into distinct segments by spend, visits and basket size?',
    approach: 'K-means clustering on standardised features, with the number of segments and customers adjustable in the app.',
    result: 'With k = 3 the app recovers three distinct, similar-sized groups: high spenders, frequent visitors and low-spend shoppers.',
    dataNotes: 'Synthetic data generated in the app, with no personal information. Well-separated groups make this easier than real data.',
    links: {
      app: 'https://customer-segments-demo.streamlit.app/',
      source: 'https://github.com/radek-dev/streamlit-apps',
    },
  },
  {
    title: 'Forecasting Walkthrough',
    summary: 'A marimo notebook that compares simple baseline forecasts with a trend-plus-seasonality model.',
    tags: ['marimo', 'forecasting', 'WebAssembly'],
    thumbnail: 'thumbnails/forecasting.svg',
    question: 'How much does a trend-plus-seasonality model improve on simple baselines?',
    approach: 'Backtest naive, seasonal-naive and trend-plus-seasonality models on a held-out period, scored by mean absolute error (MAE).',
    result: 'With the default settings, the trend-plus-seasonality model has an MAE of 5.4, against 14.5 for seasonal naive and 21.1 for naive.',
    dataNotes: 'Synthetic data generated in the notebook, so results will differ on real series. Runs in the browser via /wasm.',
    links: {
      notebook: 'https://molab.marimo.io/github/radek-dev/marimo-notebooks/blob/main/forecasting.py/wasm',
      source: 'https://github.com/radek-dev/marimo-notebooks',
    },
  },
  {
    title: 'The Central Limit Theorem',
    summary: 'A reproducible Quarto article that uses simulation to illustrate the central limit theorem.',
    tags: ['Quarto', 'statistics', 'uv'],
    thumbnail: 'thumbnails/central-limit-theorem.svg',
    question: 'How quickly do means of a skewed distribution become approximately normal?',
    approach: 'Simulate 5,000 sample means at several sample sizes and compare them to the normal curve.',
    result: 'Skewness falls from about 2.0 at n = 1 to about 0.1 at n = 200.',
    dataNotes: 'Synthetic exponential data with a fixed seed. Reproduce with uv sync && uv run quarto render.',
    links: {
      notebook: 'https://radek-dev.github.io/quarto-notebooks/clt.html',
      source: 'https://github.com/radek-dev/quarto-notebooks',
    },
  },
  {
    title: 'Confidence Intervals Paper',
    summary: 'A short Typst paper on confidence intervals for a mean, published as a PDF.',
    tags: ['Typst', 'statistics', 'uv'],
    thumbnail: 'thumbnails/confidence-intervals.svg',
    question: 'How is a confidence interval for a mean built, and how does its width change with sample size?',
    approach: 'A worked t-interval example, typeset in Typst and compiled with uv.',
    result: 'The interval width shrinks in proportion to 1/√n, so quadrupling the sample size halves it.',
    dataNotes: 'Illustrative numbers only. Reproduce with uv sync && uv run typst compile papers/confidence-intervals.typ.',
    links: {
      paper: 'https://radek-dev.github.io/quarto-notebooks/papers/confidence-intervals.pdf',
      source: 'https://github.com/radek-dev/quarto-notebooks/blob/main/papers/confidence-intervals.typ',
    },
  },
];
