import { site } from '../data/site'

function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-16">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-base-content/70 text-sm">
              {site.footer.copyright}
            </p>
          </div>

          {/* Powered by */}
          <div className="text-center md:text-right">
            <p className="text-base-content/60 text-xs">
              {site.footer.builtWith}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer