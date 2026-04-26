const projects = [
  {
    title: 'MERN Portfolio',
    desc: 'Full stack portfolio app with Docker, Nginx, Oracle Cloud deployment.',
    tags: ['React', 'Node.js', 'MongoDB', 'Docker'],
    link: '#',
  },
  {
    title: 'TechandTomorrow',
    desc: 'YouTube channel covering creator gear, tech reviews, and dev content.',
    tags: ['Content', 'YouTube', 'SEO'],
    link: '#',
  },
  {
    title: 'Cloud Deployment Setup',
    desc: 'Nginx reverse proxy + Cloudflare + Docker on Oracle Cloud ARM64.',
    tags: ['DevOps', 'Docker', 'Nginx'],
    link: '#',
  },
]

export default function Portfolio() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="gradient-text">Work</span></h2>
        <p className="text-gray-400 mb-12 text-lg">Things I've built and shipped.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.title} className="glass glass-hover p-6 group cursor-pointer">
              {/* Top accent */}
              <div className="w-10 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4"/>

              <h3 className="font-semibold text-lg mb-2 group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.desc}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
