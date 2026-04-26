export default function About() {
  const skills = ['React', 'Node.js', 'MongoDB', 'Express', 'Docker', 'Tailwind CSS', 'Next.js', 'Nginx']

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
        <p className="text-gray-400 mb-12 text-lg">Developer. Creator. Problem Solver.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio */}
          <div className="glass p-8">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Who I Am</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a full stack MERN developer and tech content creator based in India.
              I run a YouTube channel called <span className="text-purple-400 font-medium">TechandTomorrow</span> where
              I cover creator gear, tech reviews, and dev content.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I love building production-ready apps, experimenting with Docker and cloud infrastructure,
              and helping the Indian creator community with honest tech reviews.
            </p>
          </div>

          {/* Skills */}
          <div className="glass p-8">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 glass glass-hover rounded-full text-sm text-gray-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="glass p-8 mt-8">
          <h3 className="text-xl font-semibold mb-6 gradient-text">Journey</h3>
          <div className="space-y-6">
            {[
              { year: '2024', title: 'Started TechandTomorrow', desc: 'Launched YouTube channel covering tech and creator gear' },
              { year: '2023', title: 'Full Stack Development', desc: 'Started building production MERN apps with Docker and cloud deployment' },
              { year: '2022', title: 'Started Coding', desc: 'Began learning web development and fell in love with building things' },
            ].map(item => (
              <div key={item.year} className="flex gap-6">
                <div className="text-purple-400 font-bold text-sm w-12 shrink-0 mt-1">{item.year}</div>
                <div>
                  <div className="font-semibold text-white">{item.title}</div>
                  <div className="text-gray-400 text-sm mt-1">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
