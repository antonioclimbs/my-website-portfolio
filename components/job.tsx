interface JobProps {
  job: string
  description: string[]
}

export default function Job(props: JobProps) {
  const { job, description } = props;
  // const bullets = [] as JSX.Element[];
  for (let des in description) {
    // bullets.push(
    //   <li>{des}</li>
    // )
  }
  return (
    <section>
      <h1>{job}</h1>
      <ul>
        {/* {bullets} */}
      </ul>
    </section>
  );
}