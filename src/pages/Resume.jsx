import { site } from '../data/site'

function Resume() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-base-content">Resume</h1>

      <div className="card bg-base-100 border shadow-xl">
        <div className="card-body">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
            <div>
              <p className="text-base-content/70">My academic resume</p>
            </div>
            <a
              href={site.assets.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
          </div>

          <div className="w-full h-[800px] rounded-lg overflow-hidden border border-base-300">
            <iframe
              src={site.assets.cv}
              width="100%"
              height="100%"
              className="border-none"
              title={`${site.meta.author} CV`}
              loading="lazy"
            >
              <div className="alert alert-warning p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <h3 className="font-bold">Cannot display CV</h3>
                  <div className="text-xs">Your browser doesn't support PDF viewing or there's a connection issue.</div>
                  <a
                    href={site.assets.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-warning mt-2"
                  >
                    Download CV PDF
                  </a>
                </div>
              </div>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume