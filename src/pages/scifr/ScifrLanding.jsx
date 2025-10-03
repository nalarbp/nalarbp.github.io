import { useState } from 'react'
import { Link } from 'react-router-dom'
import { scifrShowcase } from '../../data/scifr'

function ScifrHeader() {
  const npx_command = 'npx create-scifr my-scifr'
  const [isCopied, setIsCopied] = useState(false)
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(npx_command)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col md:flex-row p-4 space-y-4 space-x-4 mx-auto w-full justify-center">
      <div className="flex flex-col space-y-4 relative z-10 w-full md:w-1/2">
        <div>
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-left">
            SCIFR: <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>Self-Contained Interactive Single-File Report </span>
            using SPA approach
          </h1>
          <p className="text-lg md:text-xl text-base-content/70 mt-2">
            A new approach to building interactive reports that are self-contained, easy to share, and run in any modern web browser. <a href="https://github.com/nalarbp/scifr" target='_blank' className="text-blue-500 hover:underline">Learn more</a>
          </p>
        </div>
      </div>
      
      <div className="flex flex-col w-80 md:w-1/2 overflow-x-scroll">
        <div className="mockup-code text-start overflow-auto bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm">
          <pre className="text-blue-300"><code>### Develop your Scifr </code></pre>
          <pre><code className="text-gray-500">#install scifr boilerplate</code></pre>
          <pre><code>npx create-scifr my-awesome-scifr</code></pre>
          <br />
          <pre><code className="text-gray-500">#start the development server</code></pre>
          <pre><code>cd my-awesome-scifr && npm run dev</code></pre>
          <pre className="text-gray-500"><code>### Design and add more components, input data, states, etc.</code></pre>
          <br />
          <pre><code className="text-gray-500">#then build your scifr</code></pre>
          <pre><code>npm run build</code></pre>
          <br />
        </div>
      </div>
    </div>
  )
}

function ScifrShowcase() {
  return (
    <div className='w-full flex flex-wrap gap-4 justify-center lg:gap-10'>
      {scifrShowcase.map((item, index) => (
        <div key={index} className="card shadow-xl bg-base-100 border border-base-300 w-64 lg:w-72 rounded-lg overflow-hidden">
          <figure className="card-image p-1">
            <img 
              src={item.imagePath} 
              alt={item.title} 
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </figure>
          
          <div className="card-body p-4">
            <h2 className="card-title text-lg font-bold">
              {item.title}
              {item.isShowingBadge && (
                <div className="badge badge-secondary">
                  {item.badgeText}
                </div>
              )}
            </h2>
            <p className="text-sm text-base-content/70">{item.description}</p>
            <div className='flex flex-row items-end space-x-2 mt-4'>
              <div className="card-actions justify-end">
                <Link 
                  to={item.link}
                  className="btn btn-primary btn-sm"
                >
                  See how it works
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ScifrLanding() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-400/20 via-green-500/10 to-purple-500/20">
      <div className="flex flex-col gap-8 items-center justify-center py-8">
        <div className="w-full max-w-7xl px-4">
          <div className="flex-1 w-full">
            <ScifrHeader />
          </div>
          <div className="flex-1 w-full mt-12">
            <p className="text-2xl text-center pb-6">Showcase</p>
            <ScifrShowcase />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScifrLanding