'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { 
  Code2, FileCode, Globe, Sparkles, Zap, Layers, 
  ChevronRight, Play, Copy, Check, Terminal,
  Layout, Palette, Cpu, ArrowRight, Star,
  BookOpen, Target, Trophy, Clock
} from 'lucide-react'

// Lesson data with comprehensive content
const lessonsData = {
  html: {
    title: "HTML5 Fundamentals",
    description: "Master the building blocks of the web with semantic HTML5",
    icon: Globe,
    color: "#E53E3E",
    lessons: [
      {
        id: 1,
        title: "Document Structure",
        subtitle: "The foundation of every webpage",
        duration: "10 min",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
    <meta name="description" content="A semantic HTML5 document">
</head>
<body>
    <!-- Main content goes here -->
    <header>
        <nav><!-- Navigation --></nav>
    </header>
    <main>
        <article>
            <h1>Welcome to the Web</h1>
            <p>Building the future, one tag at a time.</p>
        </article>
    </main>
    <footer>
        <p>&copy; 2025 Your Brand</p>
    </footer>
</body>
</html>`,
        preview: `<div class="p-4 bg-white rounded-lg border border-gray-200">
  <div class="border-b pb-2 mb-2 font-semibold text-gray-700">Navigation</div>
  <h1 class="text-2xl font-bold text-gray-800 mb-2">Welcome to the Web</h1>
  <p class="text-gray-600">Building the future, one tag at a time.</p>
  <div class="border-t mt-4 pt-2 text-sm text-gray-500">© 2025 Your Brand</div>
</div>`,
        explanation: `The DOCTYPE declaration defines the document type. The html element is the root. The head contains metadata like charset, viewport settings, and title. The body contains visible content structured with semantic elements.`
      },
      {
        id: 2,
        title: "Semantic Elements",
        subtitle: "Meaningful markup for accessibility",
        duration: "15 min",
        code: `<article class="blog-post">
    <header>
        <h1>Understanding Semantic HTML</h1>
        <time datetime="2025-01-15">January 15, 2025</time>
        <address>By <a href="/author">Jane Developer</a></address>
    </header>
    
    <section>
        <h2>Why Semantics Matter</h2>
        <p>Semantic elements clearly describe their meaning 
        to both the browser and developer.</p>
    </section>
    
    <section>
        <h2>Key Benefits</h2>
        <ul>
            <li>Improved accessibility</li>
            <li>Better SEO ranking</li>
            <li>Cleaner, readable code</li>
        </ul>
    </section>
    
    <footer>
        <nav aria-label="Article navigation">
            <a href="/prev">← Previous</a>
            <a href="/next">Next →</a>
        </nav>
    </footer>
</article>`,
        preview: `<div class="p-4 bg-white rounded-lg border border-gray-200 max-w-md">
  <h1 class="text-xl font-bold text-gray-800 mb-1">Understanding Semantic HTML</h1>
  <div class="text-sm text-gray-500 mb-3">January 15, 2025 • By Jane Developer</div>
  <h2 class="text-lg font-semibold text-gray-700 mb-2">Why Semantics Matter</h2>
  <p class="text-gray-600 text-sm mb-3">Semantic elements clearly describe their meaning to both the browser and developer.</p>
  <ul class="text-sm text-gray-600 space-y-1">
    <li>✓ Improved accessibility</li>
    <li>✓ Better SEO ranking</li>
    <li>✓ Cleaner, readable code</li>
  </ul>
</div>`,
        explanation: `Semantic elements like article, section, header, footer, nav, and time provide meaning to your content. They help screen readers understand the page structure and improve SEO by giving search engines context about your content.`
      },
      {
        id: 3,
        title: "Forms & Inputs",
        subtitle: "Collecting user data effectively",
        duration: "20 min",
        code: `<form action="/submit" method="POST">
    <fieldset>
        <legend>Contact Information</legend>
        
        <div class="form-group">
            <label for="email">Email Address *</label>
            <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="you@example.com"
                required
                autocomplete="email"
            >
        </div>
        
        <div class="form-group">
            <label for="phone">Phone Number</label>
            <input 
                type="tel" 
                id="phone" 
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890"
            >
        </div>
        
        <div class="form-group">
            <label for="message">Your Message</label>
            <textarea 
                id="message" 
                name="message"
                rows="4"
                maxlength="500"
            ></textarea>
        </div>
    </fieldset>
    
    <button type="submit">Send Message</button>
</form>`,
        preview: `<div class="p-4 bg-white rounded-lg border border-gray-200 max-w-sm">
  <div class="text-sm font-semibold text-gray-700 mb-3">Contact Information</div>
  <div class="space-y-3">
    <div>
      <label class="block text-xs text-gray-500 mb-1">Email Address *</label>
      <input type="email" placeholder="you@example.com" class="w-full px-3 py-2 border rounded-lg text-sm" />
    </div>
    <div>
      <label class="block text-xs text-gray-500 mb-1">Phone Number</label>
      <input type="tel" placeholder="123-456-7890" class="w-full px-3 py-2 border rounded-lg text-sm" />
    </div>
    <div>
      <label class="block text-xs text-gray-500 mb-1">Your Message</label>
      <textarea rows="3" class="w-full px-3 py-2 border rounded-lg text-sm" placeholder="Type your message..."></textarea>
    </div>
    <button class="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">Send Message</button>
  </div>
</div>`,
        explanation: `HTML5 introduced new input types (email, tel, date, number, etc.) with built-in validation. The required attribute makes fields mandatory. Pattern provides regex validation. Proper labels with for/id pairs ensure accessibility.`
      }
    ]
  },
  css: {
    title: "CSS3 Mastery",
    description: "Create stunning layouts and animations with modern CSS",
    icon: Palette,
    color: "#3182CE",
    lessons: [
      {
        id: 1,
        title: "Flexbox Layout",
        subtitle: "Modern one-dimensional layouts",
        duration: "15 min",
        code: `/* Flexbox Container */
.container {
    display: flex;
    flex-direction: row;     /* row | column */
    justify-content: center; /* main axis */
    align-items: center;     /* cross axis */
    gap: 1.5rem;
    flex-wrap: wrap;
}

/* Flex Items */
.item {
    flex: 1;           /* grow to fill */
    flex-basis: 300px; /* ideal size */
    min-width: 0;      /* allow shrinking */
}

/* Alignment Overrides */
.item:first-child {
    align-self: flex-start;
}

/* Responsive */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}`,
        preview: `<div class="flex justify-center items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg min-h-[120px] flex-wrap">
  <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">1</div>
  <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">2</div>
  <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">3</div>
  <div class="w-16 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">4</div>
</div>`,
        explanation: `Flexbox revolutionized CSS layouts. The container becomes a flex context with display: flex. justify-content aligns items on the main axis, align-items on the cross axis. The gap property adds spacing between items without margins.`
      },
      {
        id: 2,
        title: "CSS Grid",
        subtitle: "Two-dimensional layout system",
        duration: "20 min",
        code: `/* Grid Container */
.grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: auto 1fr auto;
    gap: 2rem;
    padding: 2rem;
}

/* Named Grid Areas */
.dashboard {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: 200px 1fr 1fr;
    min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }

/* Subgrid for Nested Alignment */
.card-grid {
    display: grid;
    grid-template-rows: subgrid;
    row-gap: 1rem;
}`,
        preview: `<div class="grid grid-cols-3 gap-2 p-3 bg-gray-50 rounded-lg">
  <div class="col-span-3 bg-blue-500 text-white p-2 rounded text-center text-sm font-medium">Header</div>
  <div class="row-span-2 bg-green-500 text-white p-2 rounded flex items-center justify-center text-sm">Sidebar</div>
  <div class="col-span-2 bg-gray-700 text-white p-2 rounded flex items-center justify-center text-sm">Main Content Area</div>
  <div class="col-span-2 bg-gray-700 text-white p-2 rounded flex items-center justify-center text-sm">Additional Content</div>
  <div class="col-span-3 bg-orange-500 text-white p-2 rounded text-center text-sm font-medium">Footer</div>
</div>`,
        explanation: `CSS Grid is perfect for complex layouts. grid-template-columns defines columns, and you can use minmax() for responsive sizing. Named grid areas make layouts readable. Subgrid allows nested grids to align with parent tracks.`
      },
      {
        id: 3,
        title: "Animations & Transitions",
        subtitle: "Bringing interfaces to life",
        duration: "25 min",
        code: `/* Smooth Transitions */
.button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(0);
}

.button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

/* Keyframe Animations */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-slide {
    animation: slideIn 0.5s ease-out forwards;
}

/* Staggered Animations */
.card:nth-child(1) { animation-delay: 0s; }
.card:nth-child(2) { animation-delay: 0.1s; }
.card:nth-child(3) { animation-delay: 0.2s; }

/* Performance: Use transform & opacity */
.performant {
    will-change: transform, opacity;
    contain: layout style paint;
}`,
        preview: `<div class="p-4 bg-white rounded-lg border border-gray-200">
  <div class="text-sm text-gray-600 mb-3">Hover over the button:</div>
  <button class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
    Hover Me ✨
  </button>
  <div class="mt-4 flex gap-2">
    <div class="w-8 h-8 bg-blue-500 rounded animate-bounce"></div>
    <div class="w-8 h-8 bg-green-500 rounded animate-pulse"></div>
    <div class="w-8 h-8 bg-purple-500 rounded animate-spin"></div>
  </div>
</div>`,
        explanation: `CSS transitions create smooth state changes. Use cubic-bezier for custom easing curves. Keyframe animations define complex sequences. For performance, animate only transform and opacity—they don't trigger layout recalculations.`
      }
    ]
  },
  javascript: {
    title: "JavaScript Essentials",
    description: "Add interactivity and logic to your web applications",
    icon: Cpu,
    color: "#D69E2E",
    lessons: [
      {
        id: 1,
        title: "DOM Manipulation",
        subtitle: "Interacting with page elements",
        duration: "20 min",
        code: `// Selecting Elements
const button = document.querySelector('.btn');
const cards = document.querySelectorAll('.card');
const form = document.getElementById('contact-form');

// Modifying Elements
button.textContent = 'Click Me!';
button.classList.add('active');
button.style.transform = 'scale(1.05)';

// Creating Elements
const newCard = document.createElement('div');
newCard.className = 'card';
newCard.innerHTML = \`
    <h3>New Card</h3>
    <p>Dynamically created content</p>
\`;
document.body.appendChild(newCard);

// Event Listeners
button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Button clicked!');
    
    // Toggle class
    button.classList.toggle('clicked');
});

// Event Delegation (Performance)
document.addEventListener('click', (e) => {
    if (e.target.matches('.card')) {
        handleCardClick(e.target);
    }
});`,
        preview: `<div class="p-4 bg-white rounded-lg border border-gray-200">
  <div class="text-sm text-gray-600 mb-3">Interactive Demo:</div>
  <div class="space-y-2">
    <div id="demo-card" class="p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
      <span class="font-medium">Click me!</span>
      <span class="text-gray-400 text-sm ml-2">Count: <span id="count">0</span></span>
    </div>
    <button id="add-item-btn" class="px-4 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition">Add New Item</button>
    <div id="items-container" class="space-y-1 mt-2"></div>
  </div>
</div>`,
        explanation: `The DOM (Document Object Model) is the JavaScript representation of HTML. querySelector selects elements with CSS selectors. classList manipulates classes safely. Always use event delegation for dynamically created elements—attach listeners to a parent.`
      },
      {
        id: 2,
        title: "Async JavaScript",
        subtitle: "Promises, async/await, and fetching data",
        duration: "25 min",
        code: `// Fetch API with Async/Await
async function fetchUserData(userId) {
    try {
        const response = await fetch(
            \`https://api.example.com/users/\${userId}\`
        );
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch failed:', error);
        throw error;
    }
}

// Promise.all for Parallel Requests
async function fetchAllData() {
    const [users, posts, comments] = await Promise.all([
        fetch('/api/users').then(r => r.json()),
        fetch('/api/posts').then(r => r.json()),
        fetch('/api/comments').then(r => r.json())
    ]);
    
    return { users, posts, comments };
}

// Usage with Loading State
async function loadData() {
    showSpinner();
    const data = await fetchUserData(1);
    renderUI(data);
    hideSpinner();
}`,
        preview: `<div class="p-4 bg-white rounded-lg border border-gray-200">
  <div class="text-sm text-gray-600 mb-3">API Simulation:</div>
  <div class="space-y-2">
    <button id="fetch-btn" class="px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition flex items-center gap-2">
      <span>Fetch Data</span>
    </button>
    <div id="data-result" class="p-3 bg-gray-50 rounded-lg text-sm font-mono text-gray-600">
      Click button to simulate API call...
    </div>
  </div>
</div>`,
        explanation: `Async/await makes asynchronous code look synchronous. Always wrap fetch in try/catch. Check response.ok before parsing. Use Promise.all for parallel requests. Remember: async functions always return promises.`
      },
      {
        id: 3,
        title: "Modern ES6+ Features",
        subtitle: "Write cleaner, more powerful code",
        duration: "30 min",
        code: `// Destructuring
const { name, age, city = 'Unknown' } = user;
const [first, second, ...rest] = items;

// Spread Operator
const newArray = [...oldArray, newItem];
const mergedObject = { ...defaults, ...options };

// Arrow Functions & Implicit Returns
const double = x => x * 2;
const greet = (name) => \`Hello, \${name}!\`;

// Template Literals
const html = \`
    <div class="card">
        <h2>\${title}</h2>
        <p>\${description}</p>
    </div>
\`;

// Optional Chaining & Nullish Coalescing
const street = user?.address?.street ?? 'No address';
const theme = settings.theme ?? 'light'; // Only for null/undefined

// Array Methods
const activeUsers = users
    .filter(user => user.isActive)
    .map(user => user.name)
    .sort();

// Object Property Shorthand
const createUser = (name, email) => ({ name, email, createdAt: Date.now() });`,
        preview: `<div class="p-4 bg-white rounded-lg border border-gray-200">
  <div class="text-sm text-gray-600 mb-3">ES6+ Examples:</div>
  <div class="space-y-2 text-sm font-mono">
    <div class="p-2 bg-gray-50 rounded">
      <span class="text-purple-600">Destructuring:</span>
      <span class="text-gray-600"> const { name } = user</span>
    </div>
    <div class="p-2 bg-gray-50 rounded">
      <span class="text-green-600">Arrow:</span>
      <span class="text-gray-600"> const double = x => x * 2</span>
    </div>
    <div class="p-2 bg-gray-50 rounded">
      <span class="text-blue-600">Spread:</span>
      <span class="text-gray-600"> [...arr, newItem]</span>
    </div>
    <div class="p-2 bg-gray-50 rounded">
      <span class="text-orange-600">Optional:</span>
      <span class="text-gray-600"> user?.address?.street</span>
    </div>
  </div>
</div>`,
        explanation: `ES6+ introduced powerful features. Destructuring extracts values elegantly. Spread clones arrays/objects. Arrow functions have lexical this. Optional chaining (?.) prevents errors accessing nested properties. Nullish coalescing (??) provides defaults only for null/undefined.`
      }
    ]
  }
}

// Syntax highlighter component
function SyntaxHighlight({ code }: { code: string }) {
  const highlightCode = (code: string) => {
    return code
      .replace(/\/\/.*$/gm, '<span class="token-comment">$&</span>')
      .replace(/\/\*[\s\S]*?\*\//g, '<span class="token-comment">$&</span>')
      .replace(/\b(const|let|var|function|async|await|return|if|else|for|while|try|catch|throw|new|class|import|export|from|default)\b/g, '<span class="token-keyword">$&</span>')
      .replace(/\b(true|false|null|undefined|this)\b/g, '<span class="token-keyword">$&</span>')
      .replace(/(['"`])(?:(?!\1)[^\\]|\\.)*\1/g, '<span class="token-string">$&</span>')
      .replace(/\b(\d+\.?\d*)\b/g, '<span class="token-number">$&</span>')
      .replace(/(\.\w+)(?=\()/g, '<span class="token-function">$&</span>')
  }

  return (
    <pre className="code-editor text-sm overflow-x-auto p-4 bg-gray-900 text-gray-100 rounded-lg">
      <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
    </pre>
  )
}

// Tilt card component
function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -8
      const rotateY = ((x - centerX) / centerX) * 8
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    }

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div ref={cardRef} className={`transition-transform duration-200 ease-out ${className}`}>
      {children}
    </div>
  )
}

// Main component
export default function Home() {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'javascript'>('html')
  const [activeLesson, setActiveLesson] = useState(0)
  const [copied, setCopied] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  const currentModule = lessonsData[activeTab]
  const currentLesson = currentModule.lessons[activeLesson]

  // Scroll observer
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal-section').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const copyCode = () => {
    navigator.clipboard.writeText(currentLesson.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA]">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full filter blur-[100px] opacity-40 animate-blob"
          style={{ background: '#E6FFFA', top: '5%', left: '10%' }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full filter blur-[100px] opacity-40 animate-blob"
          style={{ background: '#EBF8FF', bottom: '10%', right: '15%', animationDelay: '5s' }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full filter blur-[100px] opacity-30 animate-blob"
          style={{ background: '#FAF5FF', top: '50%', left: '50%', animationDelay: '10s' }}
        />
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? 'top-2' : 'top-4'
        }`}
      >
        <div className={`glass rounded-full px-6 py-3 flex items-center gap-8 ${
          isScrolled ? 'shadow-lg' : 'shadow-xl'
        }`}>
          <div className="flex items-center gap-2 font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm">
              {'</>'}
            </div>
            <span className="hidden sm:inline">CodeMaster</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#learn" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition tab-indicator">Learn</a>
            <a href="#concepts" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition tab-indicator">Concepts</a>
            <a href="#playground" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition tab-indicator">Playground</a>
          </div>

          <Button className="rounded-full px-6 bg-gray-900 hover:bg-gray-800">
            Start Free
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${visibleSections.has('hero') ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Badge className="mb-6 px-4 py-2 bg-blue-50 text-blue-600 border-0 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              2025 Edition • Production-Ready Skills
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Master the Art</span>
              <br />
              <span className="text-gray-800">of Web Development</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              A comprehensive deep-dive into HTML, CSS, and JavaScript fundamentals. 
              Learn the architecture, best practices, and patterns used by top engineers.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-2">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Stats Row */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 ${visibleSections.has('hero') ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            {[
              { icon: BookOpen, label: 'Lessons', value: '50+' },
              { icon: Code2, label: 'Code Examples', value: '200+' },
              { icon: Target, label: 'Projects', value: '15' },
              { icon: Trophy, label: 'Certificates', value: '3' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/80 backdrop-blur rounded-2xl p-4 text-center shadow-sm hover-lift">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Modules Section */}
      <section id="learn" className="py-20 px-4 reveal-section" style={{ opacity: visibleSections.has('learn') ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-green-50 text-green-600 border-0">Module 01: Foundations</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Interactive Learning Lab</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Click through lessons to see code examples and live previews. Learn by doing, not just reading.
            </p>
          </div>

          {/* Module Tabs */}
          <Tabs value={activeTab} onValueChange={(v) => { setActiveTab(v as typeof activeTab); setActiveLesson(0) }} className="w-full">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-8 bg-white/80 backdrop-blur p-1 rounded-full shadow-sm">
              {Object.entries(lessonsData).map(([key, module]) => (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="rounded-full flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  <module.icon className="w-4 h-4" style={{ color: module.color }} />
                  <span className="hidden sm:inline">{module.title.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(lessonsData).map(([key, module]) => (
              <TabsContent key={key} value={key}>
                <div className="grid lg:grid-cols-[350px_1fr] gap-6">
                  {/* Lesson Sidebar */}
                  <div className="bg-white rounded-3xl p-6 shadow-float h-fit">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${module.color}15` }}>
                        <module.icon className="w-5 h-5" style={{ color: module.color }} />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-gray-500">Module</div>
                        <div className="font-semibold text-gray-800">{module.title}</div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-6">{module.description}</p>

                    <Separator className="mb-4" />

                    <div className="space-y-2">
                      {module.lessons.map((lesson, i) => (
                        <button
                          key={lesson.id}
                          onClick={() => setActiveLesson(i)}
                          className={`w-full text-left p-4 rounded-xl transition-all ${
                            activeLesson === i 
                              ? 'bg-blue-50 border-2 border-blue-200 shadow-sm' 
                              : 'hover:bg-gray-50 border-2 border-transparent'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="font-medium text-gray-800">{lesson.title}</div>
                              <div className="text-sm text-gray-500">{lesson.subtitle}</div>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <Clock className="w-3 h-3" />
                              {lesson.duration}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="mt-6">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{Math.round((activeLesson + 1) / module.lessons.length * 100)}%</span>
                      </div>
                      <Progress value={(activeLesson + 1) / module.lessons.length * 100} className="h-2" />
                    </div>
                  </div>

                  {/* Code Preview Area */}
                  <div className="bg-white rounded-3xl shadow-float overflow-hidden">
                    {/* Editor Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <FileCode className="w-4 h-4" />
                          <span>{currentLesson.title.toLowerCase().replace(/\s/g, '-')}.{key === 'html' ? 'html' : key === 'css' ? 'css' : 'js'}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={copyCode} className="gap-2">
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                        {copied ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>

                    {/* Code Display */}
                    <div className="grid lg:grid-cols-2 divide-x">
                      <div className="overflow-auto max-h-[400px]">
                        <SyntaxHighlight code={currentLesson.code} />
                      </div>
                      
                      {/* Live Preview */}
                      <div className="bg-gray-100 p-4">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 uppercase tracking-wider">
                          <Play className="w-3 h-3" />
                          Live Preview
                        </div>
                        <div 
                          className="bg-white rounded-xl p-4 min-h-[200px] shadow-inner"
                          dangerouslySetInnerHTML={{ __html: currentLesson.preview }}
                        />
                      </div>
                    </div>

                    {/* Explanation */}
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-t">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-blue-500" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 mb-1">Key Insight</div>
                          <p className="text-sm text-gray-600 leading-relaxed">{currentLesson.explanation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Advanced Concepts Section */}
      <section id="concepts" className="py-20 px-4 bg-white reveal-section" style={{ opacity: visibleSections.has('concepts') ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-purple-50 text-purple-600 border-0">Advanced Topics</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Beyond the Basics</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              These concepts distinguish junior developers from senior engineers. Master them to level up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: Layers, 
                title: 'Component Architecture', 
                description: 'Build scalable component trees with proper state management, composition patterns, and reusability principles.',
                color: '#3182CE',
                topics: ['React Patterns', 'State Lifting', 'Compound Components', 'Render Props']
              },
              { 
                icon: Zap, 
                title: 'Web Performance', 
                description: 'Achieve 100/100 Lighthouse scores with code splitting, lazy loading, and critical CSS optimization.',
                color: '#38A169',
                topics: ['Bundle Analysis', 'Tree Shaking', 'Caching Strategies', 'Core Web Vitals']
              },
              { 
                icon: Palette, 
                title: 'Design Systems', 
                description: 'Create consistent, scalable UIs with tokens, theming, and component libraries.',
                color: '#D69E2E',
                topics: ['Design Tokens', 'Theme Architecture', 'Documentation', 'Versioning']
              },
              { 
                icon: Terminal, 
                title: 'DevOps & CI/CD', 
                description: 'Automate deployments with GitHub Actions, Docker containers, and cloud platforms.',
                color: '#E53E3E',
                topics: ['Pipeline Setup', 'Docker Basics', 'Environment Config', 'Monitoring']
              },
              { 
                icon: Code2, 
                title: 'TypeScript Mastery', 
                description: 'Leverage advanced types, generics, and utility types for bulletproof applications.',
                color: '#805AD5',
                topics: ['Generic Types', 'Type Guards', 'Declaration Files', 'Strict Mode']
              },
              { 
                icon: Globe, 
                title: 'API Architecture', 
                description: 'Design RESTful and GraphQL APIs with proper authentication and error handling.',
                color: '#319795',
                topics: ['REST Design', 'GraphQL Schema', 'Authentication', 'Rate Limiting']
              }
            ].map((card, i) => (
              <TiltCard key={i} className="h-full">
                <Card className="h-full border-0 shadow-premium hover-lift bg-gradient-to-br from-white to-gray-50">
                  <CardHeader>
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${card.color}15` }}
                    >
                      <card.icon className="w-6 h-6" style={{ color: card.color }} />
                    </div>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                    <CardDescription className="text-gray-600">{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {card.topics.map((topic, j) => (
                        <Badge key={j} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section id="playground" className="py-20 px-4 reveal-section" style={{ opacity: visibleSections.has('playground') ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-orange-50 text-orange-600 border-0">Your Journey</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Learning Path</h2>
            <p className="text-gray-600">A structured approach to becoming a web development expert</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200" />

            {[
              { step: 1, title: 'HTML Fundamentals', duration: '2 weeks', status: 'current', topics: ['Document Structure', 'Semantic Elements', 'Forms & Validation', 'Accessibility'] },
              { step: 2, title: 'CSS Styling', duration: '3 weeks', status: 'upcoming', topics: ['Flexbox & Grid', 'Responsive Design', 'Animations', 'CSS Architecture'] },
              { step: 3, title: 'JavaScript Core', duration: '4 weeks', status: 'upcoming', topics: ['DOM Manipulation', 'Async Programming', 'ES6+ Features', 'Error Handling'] },
              { step: 4, title: 'Advanced Concepts', duration: '4 weeks', status: 'upcoming', topics: ['Design Patterns', 'Performance', 'Testing', 'DevOps'] }
            ].map((item, i) => (
              <div key={i} className="relative pl-20 pb-12 last:pb-0">
                <div 
                  className={`absolute left-5 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                    item.status === 'current' 
                      ? 'bg-blue-500 text-white ring-4 ring-blue-100' 
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {item.step}
                </div>
                <div className={`bg-white rounded-2xl p-6 shadow-sm ${item.status === 'current' ? 'ring-2 ring-blue-200' : ''}`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                    <Badge variant={item.status === 'current' ? 'default' : 'secondary'} className="rounded-full">
                      {item.duration}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.topics.map((topic, j) => (
                      <span key={j} className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                  {item.status === 'current' && (
                    <Button className="mt-4 rounded-full" size="sm">
                      Continue Learning
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of developers who have transformed their careers with our comprehensive curriculum.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 bg-white text-blue-600 hover:bg-gray-100">
              <Star className="w-5 h-5 mr-2" />
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white/10">
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12 px-4 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-lg mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm">
                  {'</>'}
                </div>
                <span>CodeMaster</span>
              </div>
              <p className="text-sm text-gray-600">
                Premium web development education for the modern developer.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Learn</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition">HTML Fundamentals</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">CSS Mastery</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">JavaScript Deep Dive</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Advanced Concepts</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition">Documentation</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Community</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="mb-8" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>&copy; 2025 CodeMaster. Premium Education Platform.</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                Made with <span className="text-red-500">♥</span> for developers
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
