'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Code2, Palette, Languages, GraduationCap, 
  Mail, MapPin, Download,
  Github, Linkedin, Twitter, Instagram,
  ChevronDown, Sparkles, Zap, Globe,
  Terminal, Database, Server,
  Layers, Video, FileText,
  Award, Briefcase, Heart,
  ArrowRight, Coffee, Rocket, Star,
  ExternalLink, Send, Phone, Calendar,
  Building2, Users, Trophy, Medal,
  FileCheck, Quote, MessageSquare, Eye
} from 'lucide-react'

// ============ DATA ============
const skills = {
  development: {
    title: "Full Stack Development",
    icon: Code2,
    color: "#3182CE",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "Bootstrap", level: 90 },
      { name: "PHP", level: 85 },
      { name: "Laravel", level: 82 },
      { name: "C++", level: 78 },
      { name: "Python", level: 80 },
    ]
  },
  design: {
    title: "Graphic Design",
    icon: Palette,
    color: "#D53F8C",
    items: [
      { name: "Adobe Photoshop", level: 92 },
      { name: "Adobe Illustrator", level: 88 },
      { name: "Adobe After Effects", level: 78 },
      { name: "MS Office", level: 95 },
    ]
  }
}

const languages = [
  { name: 'Balti', level: 'Mother Tongue', percent: 100 },
  { name: 'Urdu', level: 'Native', percent: 98 },
  { name: 'Shina', level: 'Native', percent: 95 },
  { name: 'English', level: 'Fluent', percent: 90 },
  { name: 'Spanish', level: 'Intermediate', percent: 72 },
  { name: 'German', level: 'Basic', percent: 65 },
]

const services = [
  { icon: Globe, title: "Web Development", desc: "Full-stack web applications with modern technologies", color: "#3182CE" },
  { icon: Palette, title: "Graphic Design", desc: "Creative visuals, branding, and digital artwork", color: "#D53F8C" },
  { icon: Server, title: "Backend Systems", desc: "Robust server-side solutions with Laravel & PHP", color: "#38A169" },
  { icon: Video, title: "Motion Graphics", desc: "Engaging animations and video editing", color: "#D69E2E" },
]

const stats = [
  { value: "50+", label: "Projects", icon: Rocket },
  { value: "30+", label: "Clients", icon: Heart },
  { value: "5+", label: "Years", icon: Coffee },
  { value: "15+", label: "Technologies", icon: Code2 },
]

const projects = [
  {
    title: "Excel Education System",
    category: "School Website",
    description: "A comprehensive school management website featuring student portals, course management, attendance tracking, and parent communication system with modern responsive design.",
    image: "/project-school.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    color: "#3182CE",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Education Registration System",
    category: "Web Application",
    description: "Full-featured student registration and enrollment system with automated workflows, document verification, payment integration, and administrative dashboard for educational institutions.",
    image: "/project-registration.png",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "AJAX"],
    color: "#805AD5",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Vehicle Number Plate Identifier",
    category: "AI/ML System",
    description: "Intelligent Automatic Number Plate Recognition (ANPR) system using computer vision and machine learning to detect, extract, and identify vehicle license plates from images and video streams.",
    image: "/project-vehicle.png",
    technologies: ["Python", "OpenCV", "TensorFlow", "Tesseract OCR", "NumPy", "Flask"],
    color: "#38A169",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Tour Master",
    category: "Travel Website",
    description: "Dynamic tourism and travel booking platform featuring destination showcases, tour package management, booking system, and interactive maps for travelers exploring beautiful regions.",
    image: "/project-tour.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Google Maps API"],
    color: "#D69E2E",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "E-Commerce Platform",
    category: "Online Store",
    description: "Feature-rich e-commerce solution with product catalog, shopping cart, secure checkout, order management, customer accounts, and admin panel for inventory control.",
    image: "/project-ecommerce.png",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Stripe API", "Bootstrap"],
    color: "#D53F8C",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Dashboard",
    category: "Analytics Platform",
    description: "Modern portfolio analytics dashboard with interactive data visualizations, project tracking, performance metrics, and beautiful reporting interface for creative professionals.",
    image: "/project-portfolio.png",
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS", "Node.js", "MongoDB"],
    color: "#E53E3E",
    liveUrl: "#",
    githubUrl: "#"
  },
]

const workExperience = [
  {
    title: "Freelance Full Stack Developer",
    company: "Self-Employed",
    location: "Skardu, Pakistan",
    period: "2020 - Present",
    description: "Delivering comprehensive web development solutions for clients worldwide. Specialized in creating responsive websites, e-commerce platforms, and custom web applications using modern technologies.",
    achievements: ["Completed 50+ projects", "Served 30+ clients globally", "5-star ratings on freelance platforms"],
    icon: Code2,
    color: "#3182CE"
  },
  {
    title: "Graphic Designer",
    company: "Creative Studios",
    location: "Remote",
    period: "2019 - Present",
    description: "Creating stunning visual designs including logos, brand identities, marketing materials, social media graphics, and UI/UX designs for various businesses and startups.",
    achievements: ["Designed 100+ brand identities", "Created marketing materials for 40+ campaigns", "Specialized in Adobe Creative Suite"],
    icon: Palette,
    color: "#D53F8C"
  },
  {
    title: "Web Development Intern",
    company: "Tech Solutions",
    location: "Gilgit-Baltistan",
    period: "2019 - 2020",
    description: "Gained hands-on experience in web development workflows, collaborated on client projects, and developed proficiency in PHP, Laravel, and front-end technologies.",
    achievements: ["Contributed to 15+ live projects", "Learned industry best practices", "Built foundation in full-stack development"],
    icon: Briefcase,
    color: "#805AD5"
  },
]

const certifications = [
  {
    name: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2023",
    credentialId: "UC-2023-FSWD",
    icon: Award,
    color: "#3182CE"
  },
  {
    name: "Graphic Design Masterclass",
    issuer: "Coursera",
    date: "2022",
    credentialId: "CG-2022-GDM",
    icon: Palette,
    color: "#D53F8C"
  },
  {
    name: "Python for Data Science",
    issuer: "edX",
    date: "2023",
    credentialId: "EX-2023-PDS",
    icon: Code2,
    color: "#38A169"
  },
  {
    name: "Laravel Framework Certification",
    issuer: "Laravel",
    date: "2022",
    credentialId: "LV-2022-CERT",
    icon: Server,
    color: "#D69E2E"
  },
]

const achievements = [
  {
    title: "Top Rated Freelancer",
    description: "Achieved Top Rated status on major freelance platforms with 100% job success score and consistent 5-star client reviews.",
    year: "2024",
    icon: Trophy,
    color: "#D69E2E"
  },
  {
    title: "50+ Projects Delivered",
    description: "Successfully completed over 50 web development and design projects for clients across multiple countries and industries.",
    year: "2024",
    icon: Rocket,
    color: "#3182CE"
  },
  {
    title: "Community Contributor",
    description: "Active contributor to open-source projects and developer communities, sharing knowledge through tutorials and code snippets.",
    year: "2023",
    icon: Users,
    color: "#805AD5"
  },
  {
    title: "Multilingual Professional",
    description: "Proficient in 6 languages including Balti, Urdu, Shina, English, Spanish, and German, enabling global client communication.",
    year: "2023",
    icon: Languages,
    color: "#38A169"
  },
]

const references = [
  {
    name: "Ahmed Khan",
    position: "CEO, TechVentures",
    company: "TechVentures Inc.",
    quote: "Syedain delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations. Highly recommended for any web development project.",
    avatar: "AK",
    color: "#3182CE"
  },
  {
    name: "Sarah Williams",
    position: "Marketing Director",
    company: "Global Brands Co.",
    quote: "Working with Syedain on our brand identity was a pleasure. He understood our vision perfectly and delivered stunning designs that truly represent our brand values.",
    avatar: "SW",
    color: "#D53F8C"
  },
  {
    name: "Muhammad Ali",
    position: "Project Manager",
    company: "Digital Solutions PK",
    quote: "Professional, reliable, and incredibly talented. Syedain's work on our registration system was flawless. He's our go-to developer for all web projects.",
    avatar: "MA",
    color: "#805AD5"
  },
]

// ============ COMPONENTS ============

// 3D Tilt Card
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

  return <div ref={cardRef} className={`transition-transform duration-200 ease-out ${className}`}>{children}</div>
}

// Skill Progress Bar
function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => setWidth(level), 200) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level])

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

// Language Progress Bar with Animation
function LanguageBar({ name, level, percent }: { name: string; level: string; percent: number }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => setWidth(percent), 200) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [percent])

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3182CE] to-[#805AD5] flex items-center justify-center text-white text-xs font-bold">
            {name.charAt(0)}
          </div>
          <span className="font-semibold text-gray-800">{name}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">{level}</span>
          <span className="text-sm font-bold text-[#3182CE]">{percent}%</span>
        </div>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#3182CE] to-[#805AD5] rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

// Section Wrapper with Animation
function Section({ id, children, className = '' }: { id: string; children: React.ReactNode; className?: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id={id} 
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </section>
  )
}

// Project Card Component
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          <div className={`absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex gap-2">
              <Button size="sm" className="bg-white text-gray-800 hover:bg-gray-100">
                <Eye className="w-4 h-4 mr-1" /> Live Demo
              </Button>
              <Button size="sm" variant="outline" className="bg-white/20 text-white border-white/40 hover:bg-white/30">
                <Github className="w-4 h-4 mr-1" /> Code
              </Button>
            </div>
          </div>
          <div className="absolute top-3 right-3">
            <Badge style={{ backgroundColor: project.color }} className="text-white border-0">
              {project.category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#3182CE] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-600 text-xs border-0">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs border-0">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// ============ MAIN PORTFOLIO ============
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => {
      setLoaded(true)
    })
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['hero', 'about', 'skills', 'services', 'projects', 'experience', 'certifications', 'achievements', 'languages', 'education', 'references', 'contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv-syedain-shigree.pdf'
    link.download = 'Syedain_Shigree_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/923125115070', '_blank')
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#1A202C] overflow-x-hidden">
      
      {/* ========== ANIMATED BACKGROUND ========== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full filter blur-[100px] opacity-50 animate-blob" 
          style={{ background: '#E6FFFA', top: '-10%', left: '-10%' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full filter blur-[100px] opacity-50 animate-blob" 
          style={{ background: '#EBF8FF', bottom: '-10%', right: '-10%', animationDelay: '7s' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full filter blur-[100px] opacity-40 animate-blob" 
          style={{ background: '#FAF5FF', top: '40%', right: '20%', animationDelay: '14s' }} />
      </div>

      {/* ========== NAVIGATION ========== */}
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? 'top-2' : 'top-4'}`}>
        <div className={`glass-nav rounded-full px-6 py-3 flex items-center gap-8 ${scrolled ? 'shadow-lg' : 'shadow-xl'}`}>
          <div className="font-bold text-xl tracking-tight">
            <span className="text-[#3182CE]">S</span>yedain
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  activeSection === item.toLowerCase() ? 'text-[#3182CE]' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3182CE] rounded-full" />
                )}
              </button>
            ))}
          </div>

          <Button 
            onClick={() => scrollTo('contact')}
            className="rounded-full px-5 bg-[#1A202C] hover:bg-[#2D3748] text-white text-sm"
          >
            Hire Me
          </Button>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-200 shadow-sm mb-8">
            <span className="w-2 h-2 bg-[#38A169] rounded-full animate-pulse" />
            <span className="text-sm text-gray-600">Available for freelance projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[1.1] tracking-tight">
            <span className="text-gray-800">Hi, I'm</span>
            <br />
            <span className="gradient-text">Syedain Shigree</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-2xl mx-auto font-medium">
            Full Stack Developer & Graphic Designer
          </p>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">
            Crafting beautiful digital experiences from the heart of Skardu, Pakistan
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg"
              onClick={() => scrollTo('projects')}
              className="rounded-full px-8 bg-gradient-to-r from-[#3182CE] to-[#805AD5] hover:from-[#2C5282] hover:to-[#6B46C1] text-white shadow-lg shadow-blue-200 text-lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              View My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={handleDownloadCV}
              className="rounded-full px-8 border-2 border-gray-200 text-gray-700 hover:bg-white text-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center gap-3">
            {[
              { icon: Github, label: 'GitHub' },
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Instagram, label: 'Instagram' },
            ].map((social, i) => (
              <button
                key={i}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#3182CE] hover:border-[#3182CE] hover:shadow-md transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </button>
            ))}
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <Section id="stats" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#3182CE]" />
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ========== ABOUT SECTION ========== */}
      <Section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
              <TiltCard>
                <div className="relative bg-white rounded-3xl p-8 shadow-float border border-gray-100">
                  <img 
                    src="/profile.jpg" 
                    className="w-40 h-40 mx-auto mb-6 rounded-full object-cover shadow-lg border-4 border-white"
                    alt="Syedain Shigree"
                  />
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">Syedain Shigree</h3>
                    <p className="text-gray-500 mb-4">Full Stack Developer & Designer</p>
                    
                    <div className="flex justify-center gap-2 mb-6">
                      <Badge className="bg-green-50 text-green-600 border-0">Available</Badge>
                      <Badge className="bg-blue-50 text-blue-600 border-0">Freelancer</Badge>
                    </div>
                  </div>

                  <Separator className="mb-4" />

                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-[#3182CE]" />
                    <span className="text-sm">Skardu, Gilgit-Baltistan, Pakistan</span>
                  </div>
                </div>
              </TiltCard>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 mb-6">
                <Zap className="w-4 h-4 text-[#3182CE]" />
                <span className="text-sm font-medium text-[#3182CE]">About Me</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Passionate Developer &
                <span className="block gradient-text">Creative Designer</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I'm a multi-skilled professional from the breathtaking region of Skardu, Pakistan. 
                With expertise spanning full-stack development and graphic design, I bridge the 
                gap between functionality and aesthetics.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether building robust web applications with Laravel, crafting stunning visuals 
                in Photoshop, or communicating in multiple languages, I bring creativity and 
                precision to every project.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-[#3182CE]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Education</div>
                    <div className="font-semibold text-gray-800">12th Complete</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Experience</div>
                    <div className="font-semibold text-gray-800">5+ Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ========== SKILLS SECTION ========== */}
      <Section id="skills" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 mb-6">
              <Code2 className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-purple-500">Skills & Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I <span className="gradient-text">Excel At</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A comprehensive toolkit of technical and creative skills honed through years of practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([key, category]) => (
              <Card key={key} className="bg-[#F5F7FA] border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      <category.icon className="w-7 h-7" style={{ color: category.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-1">
                    {category.items.map((skill, i) => (
                      <SkillBar key={i} name={skill.name} level={skill.level} color={category.color} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* ========== SERVICES SECTION ========== */}
      <Section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 mb-6">
              <Star className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-green-500">Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Professional services tailored to bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <TiltCard key={i}>
                <Card className="h-full bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <service.icon className="w-7 h-7" style={{ color: service.color }} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500">{service.desc}</p>
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>
      </Section>

      {/* ========== PROJECTS SECTION ========== */}
      <Section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 mb-6">
              <Rocket className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium text-indigo-500">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A showcase of my best work across web development, design, and AI projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* ========== WORK EXPERIENCE SECTION ========== */}
      <Section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 mb-6">
              <Briefcase className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-medium text-cyan-500">Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              My professional journey and career milestones.
            </p>
          </div>

          <div className="relative timeline-section">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3182CE] via-[#805AD5] to-[#D53F8C] timeline-line" />

            <div className="space-y-8">
              {workExperience.map((exp, i) => (
                <div key={i} className="relative pl-12 md:pl-20 timeline-item">
                  <div 
                    className="absolute left-2 md:left-5 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center shadow-lg timeline-dot"
                    style={{ backgroundColor: exp.color }}
                  >
                    <exp.icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-gray-800">{exp.title}</h3>
                          <div className="flex flex-wrap items-center gap-1 md:gap-2 text-gray-500 text-sm">
                            <Building2 className="w-3 h-3 md:w-4 md:h-4" />
                            <span>{exp.company}</span>
                            <span className="text-gray-300 hidden md:inline">|</span>
                            <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-gray-600 border-gray-200 text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm md:text-base">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, j) => (
                          <Badge key={j} variant="secondary" className="bg-gray-100 text-gray-600 border-0 text-xs">
                            <Trophy className="w-3 h-3 mr-1 text-yellow-500" />
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ========== CERTIFICATIONS SECTION ========== */}
      <Section id="certifications" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 mb-6">
              <Award className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-amber-500">Certifications</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Verified credentials and professional development achievements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <Card key={i} className="bg-[#F5F7FA] border-0 shadow-sm hover:shadow-md transition-all group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${cert.color}15` }}
                    >
                      <cert.icon className="w-7 h-7" style={{ color: cert.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{cert.name}</h3>
                      <p className="text-gray-500 text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {cert.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FileCheck className="w-3 h-3" />
                          {cert.credentialId}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* ========== ACHIEVEMENTS SECTION ========== */}
      <Section id="achievements" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 mb-6">
              <Trophy className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-medium text-rose-500">Achievements</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Notable <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Recognition and milestones throughout my career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, i) => (
              <TiltCard key={i}>
                <Card className="h-full bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${achievement.color}15` }}
                      >
                        <achievement.icon className="w-7 h-7" style={{ color: achievement.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-800">{achievement.title}</h3>
                          <Badge variant="outline" className="text-gray-500 border-gray-200">
                            {achievement.year}
                          </Badge>
                        </div>
                        <p className="text-gray-500 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>
      </Section>

      {/* ========== LANGUAGES SECTION ========== */}
      <Section id="languages" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 mb-6">
              <Languages className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-medium text-cyan-500">Languages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Multilingual <span className="gradient-text">Communication</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Connecting across cultures with fluency in multiple languages.
            </p>
          </div>

          <div className="bg-[#F5F7FA] rounded-3xl p-4 sm:p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-6">
              {languages.map((lang, i) => (
                <LanguageBar key={i} name={lang.name} level={lang.level} percent={lang.percent} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ========== EDUCATION SECTION ========== */}
      <Section id="education" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 mb-6">
              <GraduationCap className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-orange-500">Education</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Academic <span className="gradient-text">Journey</span>
            </h2>
          </div>

          <div className="relative timeline-section">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3182CE] via-[#805AD5] to-[#D53F8C] timeline-line" />

            <div className="space-y-8">
              <div className="relative pl-12 md:pl-20 timeline-item">
                <div className="absolute left-2 md:left-5 w-6 h-6 md:w-7 md:h-7 bg-[#3182CE] rounded-full flex items-center justify-center shadow-lg timeline-dot">
                  <GraduationCap className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                <Card className="bg-white border border-gray-100 shadow-sm">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-gray-800">Higher Secondary Education</h3>
                      <Badge className="bg-green-50 text-green-600 border-0">Completed</Badge>
                    </div>
                    <p className="text-gray-500">12th Grade - Science Stream</p>
                    <p className="text-sm text-gray-400 mt-1">Skardu, Pakistan</p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative pl-12 md:pl-20 timeline-item">
                <div className="absolute left-2 md:left-5 w-6 h-6 md:w-7 md:h-7 bg-[#805AD5] rounded-full flex items-center justify-center shadow-lg timeline-dot">
                  <Award className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                <Card className="bg-white border border-gray-100 shadow-sm">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Self-Taught Professional</h3>
                    <p className="text-gray-500 mb-3">Continuous Learning & Development</p>
                    <div className="flex flex-wrap gap-2">
                      {['Web Development', 'Graphic Design', 'Programming', 'UI/UX Design', 'Motion Graphics'].map((skill, i) => (
                        <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-600 border-0 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ========== REFERENCES SECTION ========== */}
      <Section id="references" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 mb-6">
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-medium text-emerald-500">References</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              What clients and collaborators say about working with me.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {references.map((ref, i) => (
              <Card key={i} className="bg-[#F5F7FA] border-0 shadow-sm hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 mb-4" style={{ color: ref.color }} />
                  <p className="text-gray-600 mb-6 italic">&quot;{ref.quote}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: ref.color }}
                    >
                      {ref.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{ref.name}</div>
                      <div className="text-sm text-gray-500">{ref.position}</div>
                      <div className="text-xs text-gray-400">{ref.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* ========== CONTACT SECTION ========== */}
      <Section id="contact" className="py-24 px-6 bg-gradient-to-br from-[#3182CE] to-[#805AD5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur mb-6">
              <Mail className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Contact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Let&apos;s Work Together
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear from you. Let&apos;s create something amazing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Email</div>
                      <div className="text-white font-medium">sishigree@gmail.com</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-white/20 cursor-pointer hover:bg-white/20 transition-all" onClick={handleWhatsApp}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">WhatsApp</div>
                      <div className="text-white font-medium">+92 312 5115070</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Location</div>
                      <div className="text-white font-medium">Skardu, Gilgit-Baltistan, Pakistan</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Send a Message</h3>
              <p className="text-gray-500 mb-6">
                Ready to start your next project? Get in touch and let&apos;s discuss how I can help.
              </p>
              
              <Button 
                size="lg"
                onClick={handleWhatsApp}
                className="w-full bg-gradient-to-r from-[#3182CE] to-[#805AD5] hover:from-[#2C5282] hover:to-[#6B46C1] text-white rounded-full"
              >
                <Send className="w-5 h-5 mr-2" />
                Start Conversation
              </Button>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-center gap-3">
                  <a href="https://github.com/Syedain-Iqbal-Shigri" target="_blank" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#3182CE] hover:text-white transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/syedain-shigri-72aa793a8/" target="_blank" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#3182CE] hover:text-white transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/SyedainShigri" target="_blank" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#3182CE] hover:text-white transition-all">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/cyyidaeyn" target="_blank" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#3182CE] hover:text-white transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-2xl font-bold">
              <span className="text-[#3182CE]">S</span>yedain Shigree
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#about" className="hover:text-[#3182CE] transition-colors">About</a>
              <a href="#skills" className="hover:text-[#3182CE] transition-colors">Skills</a>
              <a href="#projects" className="hover:text-[#3182CE] transition-colors">Projects</a>
              <a href="#contact" className="hover:text-[#3182CE] transition-colors">Contact</a>
            </div>

            <div className="text-sm text-gray-400">
              2025 Syedain Shigree
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              Crafted with <span className="text-red-500">♥</span> in Skardu, Pakistan
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
