const services = [
  {
    icon: '⚡',
    title: 'Full Stack Development',
    desc: 'End to end MERN stack web apps with clean architecture, REST APIs, and MongoDB.',
  },
  {
    icon: '🐳',
    title: 'DevOps & Deployment',
    desc: 'Docker, Nginx, Oracle Cloud, Cloudflare setup for production grade deployments.',
  },
  {
    icon: '🎬',
    title: 'Tech Content Creation',
    desc: 'YouTube scripts, gear reviews, and video production for tech channels.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Modern, responsive interfaces with Tailwind CSS and clean design systems.',
  },
]

export default function Services() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="gradient-text">Services</span></h2>
        <p className="text-gray-400 mb-12 text-lg">What I can do for you.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map(service => (
            <div key={service.title} className="glass glass-hover p-8 group">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:gradient-text transition-all">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
