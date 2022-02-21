import type { NextPage } from 'next'
import PlaySoundActions from '../src/components/PlaySoundActions'
import Link from 'next/link'

declare const window: any
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Prêt(e) à vous détendre ?</span>
            <span className="block">
              Faites 5 minutes de cohérence cardiaque.
            </span>
          </h2>
        </div>

        <PlaySoundActions />
      </div>

      <Link href="/aide">
        <a className="my-12" onClick={() => window.Howler.stop()}>
          Aide
        </a>
      </Link>
    </div>
  )
}

export default Home
