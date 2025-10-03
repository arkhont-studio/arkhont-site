import Image from 'next/image'
import Link from 'next/link'

export default function Home(){
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Архитектурная мастерская церковного зодчества</h1>
          <p>Храмы • Часовни • Купола • Реставрация</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/projects" className="btn">Смотреть проекты</Link>
            <Link href="/contact" className="btn btn-primary">Связаться</Link>
          </div>
        </div>
      </section>

      <section className="container my-12">
        <h2 className="mb-4">Избранные проекты</h2>
        <div className="grid-3">
          {['/hero-dome.jpg','/hero-dome.jpg','/hero-dome.jpg'].map((src,i)=>(
            <article className="card" key={i}>
              <Image src={src} alt="Проект" width={1200} height={700}/>
              <div className="card-body"><h3 className="font-semibold">Проект {i+1}</h3></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
