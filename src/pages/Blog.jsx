import { blog } from '../data/blog'

function Blog() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-base-content">{blog.meta.title}</h1>
      <p className="text-lg text-base-content/70 mb-8">{blog.meta.description}</p>
      
      {/* Status Alert */}
      <div className="alert alert-info mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h3 className="font-bold">{blog.status.message}</h3>
          <div className="text-xs">{blog.status.migrationNote}</div>
        </div>
      </div>

      {/* Featured Topics Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {blog.featuredTopics.map((topic, index) => (
          <div key={index} className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{topic.icon}</span>
                <h3 className="card-title text-lg">{topic.title}</h3>
              </div>
              <p className="text-base-content/70">{topic.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h3 className="card-title mb-4">Upcoming Topics</h3>
          <div className="flex flex-wrap gap-2">
            {blog.categories.map((category, index) => (
              <span key={index} className="badge badge-outline badge-lg">
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Placeholder for when posts are added */}
      {blog.posts.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
          <div className="space-y-6">
            {blog.posts.map((post) => (
              <div key={post.id} className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">{post.title}</h3>
                  <p className="text-base-content/70">{post.excerpt}</p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex gap-2">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="badge badge-secondary badge-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-base-content/60">{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Blog