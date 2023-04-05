interface JobProps {
  job: string
  title: string
  description: string[]
}

export default function Job(props: JobProps) {
  const { job, description, title } = props
  let i = 0;
  const bullets: JSX.Element[] = description.map((des) => {
    i++
    return (
      <h3 className="my-3 text-xl text-orange-800 dark:text-orange-100" key={i}>
        {des}
      </h3>
    )
  })
  return (
    <section className="">
      <div className="grid grid-flow-col">
        <h2 className="">{job}</h2>
        <span className="text-right">{title}</span>
      </div>
      <ul className="">
        {bullets}
      </ul>
    </section>
  );
}