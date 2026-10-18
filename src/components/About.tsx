import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ShoppingBag,
  Cpu,
  Layers,
  Code,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Terminal,
  Server,
  Workflow
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

type TabKey = 'ecommerce' | 'fullstack' | 'ai' | 'philosophy';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('ecommerce');
  const [showSecretFacts, setShowSecretFacts] = useState(false);

  const tabContents = {
    ecommerce: {
      title: 'E-Commerce & Shopify Specialization',
      badge: 'Production Experience',
      icon: ShoppingBag,
      description:
        'Experienced in the architecture and ongoing optimization of Shopify-powered storefronts. From writing clean Liquid templates and responsive sections to integrating customer support chat tools and debugging checkout anomalies.',
      points: [
        'Shopify Liquid template architecture and custom schema settings',
        'Storefront performance optimization and mobile-first conversions',
        'Chatwoot live-chat integration and customer communication pipelines',
        'Adobe Suite imagery and promotional video preparation for stores',
      ],
      codeSnippet: `// Custom Shopify Liquid Section
{% schema %}
{
  "name": "Featured Product Showcase",
  "settings": [
    { "type": "text", "id": "heading", "label": "Headline" },
    { "type": "product", "id": "featured_product", "label": "Product" }
  ]
}
{% endschema %}
<div class="shopify-section-container">
  <h2>{{ section.settings.heading | escape }}</h2>
  {% render 'product-card', product: section.settings.featured_product %}
</div>`,
    },
    fullstack: {
      title: 'Full Stack Engineering',
      badge: 'MERN & REST APIs',
      icon: Layers,
      description:
        'Building dynamic frontend interfaces with React paired with solid backend API services using Node.js, Express, MongoDB, and MySQL. Focused on secure authentication, state management, and clear endpoint contracts.',
      points: [
        'Component-driven architectures using React and Tailwind CSS',
        'RESTful API development with Express.js and structured schemas',
        'JSON Web Token (JWT) stateless user authorization and session guards',
        'Performance refactoring yielding reported 40% faster load times',
      ],
      codeSnippet: `// Node.js & Express REST Endpoint
router.post('/api/auth/verify', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    res.json({ success: true, user });
  } catch (err) {
    res.status(401).json({ error: 'Session expired or invalid' });
  }
});`,
    },
    ai: {
      title: 'AI-Assisted Modern Development',
      badge: 'Accelerated Delivery',
      icon: Cpu,
      description:
        'Actively utilizing advanced AI tooling such as Claude AI for prompt-engineered code generation, rigorous edge-case identification, test generation, and accelerated debugging while retaining total human architectural authority.',
      points: [
        'Structured prompt engineering for complex feature prototyping',
        'Algorithmic bias evaluation and metrics generation (co-authored research)',
        'Rapid bug diagnosis and cross-browser edge case resolution',
        'Automated documentation generation and test case scaffolding',
      ],
      codeSnippet: `// Research Evaluation Metric Pipeline
def calculate_disparity_ratio(protected_samples, benchmark_rate):
    """
    Evaluates demographic parity ratio across 1,500+ generated images
    """
    observed_rate = len(protected_samples) / TOTAL_BATCH_SIZE
    disparity = observed_rate / benchmark_rate if benchmark_rate > 0 else 0
    return {
        "disparity_ratio": round(disparity, 3),
        "parity_threshold_met": 0.8 <= disparity <= 1.25
    }`,
    },
    philosophy: {
      title: 'Development Philosophy',
      badge: 'Core Mindset',
      icon: Workflow,
      description:
        'Writing code is not just about syntax; it is about solving tangible user and business problems. I focus on creating websites that load quickly, look refined on every viewport, and are easy for teams to maintain.',
      points: [
        'Function over superficial complexity',
        'Zero-clutter, clean semantic markup and accessible structures',
        'Close communication between design and technical execution',
        'Continuous curiosity, from IoT microcontrollers to modern web stacks',
      ],
      codeSnippet: `// Guiding Principles
const developerMindset = {
  focus: 'Build digital experiences that make an impact',
  priorities: ['Speed', 'Reliability', 'Responsive Polish', 'Clean Code'],
  alwaysLearning: true,
  academicRank: 'Top 5% of B.Tech IT Cohort',
  readyToContribute: true
};`,
    },
  };

  const currentTab = tabContents[activeTab];

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>01. PROFILE & EXPERTISE</span>
            <span className="w-8 h-px bg-cyan-500/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Engineering with Clarity, Care, and Purpose
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            A software developer who bridges design aesthetics, full-stack functionality, and e-commerce growth.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left Narrative Box */}
          <div className="lg:col-span-6 space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              I’m <strong className="text-white font-medium">Anchal Chaurasiya</strong>, an Information Technology graduate (B.Tech from Dr. A.P.J. Abdul Kalam Technical University, graduating with an 8.04 CGPA in the Top 5% of my batch) currently working as a Website Developer at Ninton Technology.
            </p>
            <p className="text-slate-400">
              My hands-on experience revolves around building responsive websites, optimizing Shopify-based e-commerce storefronts, diagnosing and fixing technical bugs, designing custom Liquid templates, and integrating backend REST APIs.
            </p>
            <p className="text-slate-400">
              Beyond commercial web development, I’m deeply curious about computer science fundamentals and emerging technologies. I’ve co-authored a formal research paper on AI fairness that audited over 1,500 generated images, developed IoT environmental storage telemetry systems, and earned Red Hat Certified System Administrator (RHCSA) certification.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-300">
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">B.Tech IT (AKTU)</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">RHCSA Certified</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Top 5% Batch Merit</span>
            </div>

            {/* Playful Developer Fact Easter Egg */}
            <div className="pt-3">
              <button
                type="button"
                onClick={() => setShowSecretFacts(!showSecretFacts)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-lime-400 hover:text-lime-300 bg-lime-500/10 hover:bg-lime-500/20 px-3 py-1.5 rounded-lg border border-lime-500/30 transition-all cursor-pointer"
              >
                <span>{showSecretFacts ? 'Hide Secret Dev Facts ▲' : '⚡ Click for Anchal\'s Secret Dev Stats ▼'}</span>
              </button>

              {showSecretFacts && (
                <div className="mt-3 p-4 rounded-xl bg-[#090e18] border border-lime-400/40 text-xs font-mono space-y-1.5 shadow-xl animate-in fade-in duration-200">
                  <div className="text-lime-300 font-bold mb-1 flex items-center gap-1">
                    <span>☕ ANCHAL_CONFIDENTIAL_METRICS.LOG</span>
                  </div>
                  <div className="text-slate-300">• Coffee to Code Conversion Rate: <span className="text-lime-400">99.8%</span></div>
                  <div className="text-slate-300">• Chrome Tabs Open Right Now: <span className="text-cyan-400">47 (all mission-critical)</span></div>
                  <div className="text-slate-300">• Bugs Fixed: <span className="text-violet-400">404 (Not Found in Production!)</span></div>
                  <div className="text-slate-300">• Secret Superpower: <span className="text-amber-300">Making Shopify stores feel instant</span></div>
                </div>
              )}
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-panel p-5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1">E-Commerce First</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hands-on production maintenance of live Shopify platforms, Liquid customization, and sales funnel UX.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1">Full-Stack Capability</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                React.js, Node.js, Express, MongoDB, and MySQL with secure JWT auth and documented REST endpoints.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-3">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1">AI-Assisted Workflows</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Utilizing Claude AI and structured prompt engineering to accelerate shipping speed without compromising quality.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1">Creative Eye</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Adobe Creative Suite proficiency for image retouching, promotional videos, and high-conversion assets.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Deep-Dive Code Card with Tabs */}
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Tabs Bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-white/[0.02] overflow-x-auto">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('ecommerce')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeTab === 'ecommerce'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                E-Commerce & Shopify
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('fullstack')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeTab === 'fullstack'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Full Stack
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('ai')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeTab === 'ai'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                AI & Research
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('philosophy')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeTab === 'philosophy'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Philosophy
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
              <Terminal className="w-3.5 h-3.5 text-slate-400" />
              <span>interactive_overview.ts</span>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Description & Concrete Bullet Points */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                  {currentTab.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                {currentTab.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {currentTab.description}
              </p>
              <ul className="space-y-2.5 pt-2">
                {currentTab.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Code / Implementation Architecture Preview */}
            <div className="lg:col-span-6 bg-[#040508] p-4 rounded-xl border border-white/10 font-mono text-xs overflow-x-auto shadow-inner">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-slate-500 text-[11px]">
                <span>snippet_preview</span>
                <span className="text-cyan-400/80">utf-8</span>
              </div>
              <pre className="text-slate-300 leading-relaxed font-mono whitespace-pre-wrap">
                <code>{currentTab.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
