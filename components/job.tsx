interface JobProps {
  job: string
  title: string
  description: string[]
}

export default function Job(props: JobProps) {
  const { job, description, title } = props
  let i = 0;
  const
    bullets: JSX.Element[] = description.map((des) => {
      i++
      return (
        <h3 className="my-3 text-xl" key={i}>
          {des}
        </h3>
      )
    })
  return (
    <section className='pb-10'>
      <div className="text-3xl grid grid-flow-col pb-5 font-bold font-mono">
        <h2 className=''>{job}</h2>
        <span className="text-right pl-8">{title}</span>
      </div>
      <ul className="font-mono">
        {bullets}
      </ul>
    </section>
  );
}