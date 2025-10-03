type Item = { title: string, img: string, cat: 'temple'|'chapel'|'restoration' }
const data: Item[] = [
  { title:'Храм Рождества', img:'/hero-dome.jpg', cat:'temple' },
  { title:'Часовня Святителя', img:'/hero-dome.jpg', cat:'chapel' },
  { title:'Реставрация купола', img:'/hero-dome.jpg', cat:'restoration' },
  { title:'Храм Покрова', img:'/hero-dome.jpg', cat:'temple' }
]

export default function Projects(){
  return (
    <main className="container my-10">
      <h1 className="text-4xl font-serif mb-6">Проекты</h1>
      <div className="grid-3">
        {data.map((p,i)=>(
          <article key={i} className="card">
            <img src={p.img} alt={p.title} />
            <div className="card-body">
              <h3 className="font-semibold">{p.title}</h3>
              <div className="mt-1 text-sm opacity-70">{p.cat}</div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
