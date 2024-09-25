import GitHub from '../Icons/GitHub'
import LinkedIn from '../Icons/LinkedIn'

function Footer() {
  return (
    <footer className="mt-auto flex flex-col gap-4 text-neutral-400">
      <p>
        Made with <span className="text-rose-500">love</span> and{' '}
        <span className="text-amber-600">coffee</span> by Laerte Quinui
      </p>
      <div className="flex w-full items-center justify-center gap-4">
        <a
          role="button"
          aria-label="Open Laerte's LinkedIn"
          className="btn hover:bg-sky-600 hover:text-white"
          href="https://www.linkedin.com/in/laerte-quinui/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>

        <a
          role="button"
          aria-label="Open Laerte's GitHub"
          className="btn hover:bg-purple-600 hover:text-white"
          href="https://github.com/Laquinui"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub />
        </a>
      </div>
    </footer>
  )
}

export default Footer
