import { aboutMe } from '../data/aboutme'
import { navigation } from '../data/navigation'

function Home() {
  const renderLinks = (text, links) => {
    if (!links) return text;

    let result = text;
    Object.entries(links).forEach(([key, url]) => {
      const linkHTML = `<a href="${url}" target="_blank" rel="noopener noreferrer">${key}</a>`;
      result = result.replace(key, linkHTML);
    });

    return result;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Sidebar */}
      <div className="lg:min-w-[250px] lg:w-[250px]">
        <div className="sticky top-8">
          {/* Profile Avatar */}
          <div className="text-center mb-6">
            <div className="avatar">
              <div className="w-32 rounded-full mx-auto mb-4">
                <img
                  src={navigation.brand.avatar}
                  alt={navigation.brand.name}
                  className="rounded-full"
                />
              </div>
            </div>
            <h2 className="text-xl font-bold text-base-content">{navigation.brand.name}</h2>
            <p className="text-base-content/70 text-sm">Microbial Genomics | Bioinformatics | Data Visualisation</p>
          </div>

          {/* Social Links */}
          <div className="card bg-base-100">
            <div className="card-body p-4">
              <div className="space-y-2">
                {navigation.brand.profileLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <div key={link.id}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-base-200 transition-colors"
                      >
                        <IconComponent className="text-lg" />
                        <span className="text-sm font-medium">{link.name}</span>
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1">
        <div className="prose prose-lg max-w-none">
          {/* Hero Image */}
          <div className="text-center mb-8">
            <img
              src={aboutMe.hero.image}
              alt={aboutMe.hero.alt}
              className="w-full max-w-4xl mx-auto rounded-lg"
            />
          </div>

          {/* Introduction */}
          <p className='mb-4'>{aboutMe.introduction}</p>

          {/* Career History */}
          <h3 className='font-bold text-xl mb-2'>{aboutMe.careerHistory.title}</h3>
          {aboutMe.careerHistory.positions.map((position, index) => (
            <div key={index} className="mb-6">
              <h4>{position.title}</h4>
              <em>{position.organization} ({position.period})</em>

              {position.responsibilities ? (
                <div>
                  <p>{position.description}</p>
                  <ul>
                    {position.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{
                  __html: renderLinks(position.description, position.links)
                }} />
              )}
            </div>
          ))}

          {/* Education */}
          <h3 className='font-bold text-xl mb-2'>{aboutMe.education.title}</h3>
          {aboutMe.education.degrees.map((degree, index) => (
            <div key={index} className="mb-6">
              <h4>{degree.degree}</h4>
              <em>{degree.institution} ({degree.year})</em>
              <p dangerouslySetInnerHTML={{
                __html: renderLinks(degree.description, degree.links)
              }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home