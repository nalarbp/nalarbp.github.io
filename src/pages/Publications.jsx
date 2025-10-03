import { publications } from '../data/publications'

function Publications() {
  // Sort publications by date (most recent first)
  const sortedPublications = publications.sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-base-content">Publications</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPublications.map((pub) => (
          <div key={pub.id} className="card bg-base-100 border shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-base leading-relaxed">{pub.title}</h2>
              <p className="text-base-content/70 text-sm font-medium">{pub.authors}</p>
              <p className="text-base-content/60 text-sm italic mb-4">
                <em>{pub.venue}</em>
              </p>
              {pub.url && (
                <div className="card-actions justify-end">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Read Paper
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Publications