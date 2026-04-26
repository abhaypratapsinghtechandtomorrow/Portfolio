export default function Contact() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
        <p className="text-gray-400 mb-12 text-lg">Have a project in mind? Let's talk.</p>

        <div className="glass p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Abhay Pratap"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all resize-none"
              />
            </div>
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:opacity-90 hover:scale-[1.02] transition-all duration-200 glow">
              Send Message
            </button>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mt-8 text-gray-500 text-sm">
          <a href="#" className="hover:text-purple-400 transition-colors">GitHub</a>
          <a href="#" className="hover:text-purple-400 transition-colors">YouTube</a>
          <a href="#" className="hover:text-purple-400 transition-colors">LinkedIn</a>
        </div>
      </div>
    </main>
  )
}
