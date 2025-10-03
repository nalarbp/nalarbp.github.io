import { useState } from 'react'
import { Link } from 'react-router-dom'

function CreatePage() {
  const [isIframeLoading, setIsIframeLoading] = useState(true)
  const create_scifr_file = "/scifr/create.scifr.html"

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = create_scifr_file
    link.download = create_scifr_file.split('/').pop() || ''
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenInNewTab = () => {
    window.open(create_scifr_file, '_blank')
  }

  const handleIframeLoad = () => {
    setIsIframeLoading(false)
  }

  return (
    <div className="w-full min-h-screen py-4">
      {/* Back button at top */}
      <div className="px-4 mb-6">
        <Link 
          to="/scifr"
          className="btn btn-ghost btn-sm"
        >
          ← Back to SCIFR Home
        </Link>
      </div>

      <div className="flex w-full flex-col gap-6 items-center">
        <div className="px-4 flex flex-col space-y-4 mx-auto w-full max-w-6xl">
          <div>
            <h1 className="text-4xl font-bold text-left">
              Create-SCIFR <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>Boilerplate</span>
            </h1>
            <p className="text-xl text-base-content/70">
              Build result of a create-scifr boilerplate (npm run build). This demonstrates the structure and capabilities of a SCIFR project.
            </p>
          </div>
        
          <div className="mockup-code overflow-scroll bg-gray-800 text-green-400 p-4 rounded-lg">
            <pre><code>$ npx create-scifr my-awesome-scifr</code></pre>
            <pre><code>$ cd my-awesome-scifr && npm run dev</code></pre>
            <pre><code># Develop your components, add data, states, etc.</code></pre>
            <pre><code>$ npm run build</code></pre>
          </div>
        </div>
      
        <div className="w-full max-w-6xl px-4">
          <div className="w-full bg-base-200 border rounded-lg">
            <div className="p-4 border-b bg-base-100 rounded-t-lg">
              <div className="flex w-full flex-row items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold">SCIFR Boilerplate Demo</h3>
                <div className="flex gap-2">
                  <button 
                    onClick={handleOpenInNewTab}
                    className="btn btn-primary btn-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75H15.75a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.653.349 2.227.913l1.34 1.34a1.5 1.5 0 0 0 1.061.44h9A1.5 1.5 0 0 1 21 6v10.5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4.5Z" clipRule="evenodd" />
                    </svg>
                    Open in New Tab
                  </button>
                  <button 
                    onClick={handleDownload}
                    className="btn btn-secondary btn-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                    </svg>
                    Download
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-base-100 flex justify-center p-0 relative">
              {isIframeLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-base-100 z-10">
                  <div className="flex flex-col items-center gap-4">
                    <div className="loading loading-spinner loading-lg text-primary"></div>
                    <p className="text-base-content/70">Loading SCIFR Boilerplate...</p>
                  </div>
                </div>
              )}
              <iframe
                src={create_scifr_file}
                width="100%"
                height="650"
                style={{ border: 'none' }}
                title="Create SCIFR Boilerplate Example"
                className="w-full"
                onLoad={handleIframeLoad}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage