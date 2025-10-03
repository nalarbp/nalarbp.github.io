import { useState } from 'react'
import { Link } from 'react-router-dom'

function BlitsfrPage() {
  const [isCopied, setIsCopied] = useState(false)
  const [isIframeLoading, setIsIframeLoading] = useState(true)
  
  const blitsfr_file = "/scifr/blitsfr.example.html"
  const blitsfr_commands = ["blitsfr assemblies -r 2.1_VIC_GCA_042929865.1_chr.gbff -q '*.fna' -m metadata_vre_st78.txt"]

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 500)
    })
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = blitsfr_file
    link.download = blitsfr_file.split('/').pop() || ''
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenInNewTab = () => {
    window.open(blitsfr_file, '_blank')
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
              BLAST Interactive Tracks in a <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>Single-File Report.</span>
            </h1>
            <p className="text-xl text-base-content/70">
              Compare the similarity of multiple sequences using BLAST and generate a single-file interactive report. 
              <a href="https://github.com/nalarbp/blitsfr" target='_blank' className="text-blue-500 hover:underline" rel="noreferrer"> Learn more</a>
            </p>
          </div>
        
        <div className="mockup-code overflow-scroll bg-gray-800 text-green-400 p-4 rounded-lg">
          {blitsfr_commands.map((command, index) => (
            <pre key={index} className="flex items-center justify-between">
              <code>$ {command}</code>
              <button 
                className="ml-4 text-blue-400 hover:text-blue-300"
                onClick={() => copyToClipboard(command)}
                title={isCopied ? 'Copied!' : 'Copy'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                </svg>
              </button>
            </pre>
          ))}
        </div>
      </div>
      
        <div className="w-full max-w-6xl px-4">
          <div className="w-full bg-base-200 border rounded-lg">
            <div className="p-4 border-b bg-base-100 rounded-t-lg">
              <div className="flex w-full flex-row items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold">BLITSFR Sample Report</h3>
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
                    <p className="text-base-content/70">Loading BLITSFR tool...</p>
                  </div>
                </div>
              )}
              <iframe
                src={blitsfr_file}
                width="100%"
                height="650"
                style={{ border: 'none' }}
                title="BLITSFR Example"
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

export default BlitsfrPage