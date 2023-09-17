import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex flex-row items-center mt-16 mb-16 md:mb-12">
        <img
          src="https://res.cloudinary.com/thasup/image/upload/v1694936600/portfolio/godOfCat_irilft.png"
          alt="Catnip Blog Image"
          width="100"
          height="100"
        />
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Catnip Blog.
      </h1>
    </section>
  )
}
