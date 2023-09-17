import Container from './container'
import { SOURCE_URL } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-12 flex flex-row items-center justify-center">
          <p>
            create with ❤️ by
            <a
              href={`${SOURCE_URL}`}
              className="mx-2 font-bold hover:underline"
            >
              Thasup
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
