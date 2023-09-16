import Link from "next/link";

// export async function getStaticProps() {
//     const res = await fetch('https://nextjs-app-test-json-server.vercel.app/projects');
//     const projects = await res.json();
//     return {
//       props: {
//         projects,
//       },
//     };
//   }

  
async function getProjects() {
    const res = await fetch('https://nextjs-app-test-json-server.vercel.app/projects', {
        next: {
            revalidate: 20
        }
    })
    return res.json()
    
}


export default async function ProjectsList({ selectedOption }) {
    const projects = await getProjects();
    return (
        <>
            {
                projects.filter((project) => selectedOption === "none" || project.type === selectedOption).map((project) => (
                    <li key={project.id} className="card">
                        <h3 className="!w-fit max-w-[calc(100%-100px)] border-b-2 border-gray-300">{project.title}</h3>
                        <p className="pb-2">{project.short_description}</p>
                        <p className="pb-2">Date created: {project.date_created}</p>
                        <div className={`pill ${project.priority}`}>{project.priority} priority</div>
                        <div className={`price ${project.priority}`}>{project.price} $</div>
                        <div className={`type ${project.priority}`}>{project.type}</div>
                        <Link className='w-full text-center' href={`/projects/${project.id}`}><p className="text-blue-600 hover:text-blue-700 hover:underline">View Details</p></Link>
                    </li>
                ))
            }
        </>
    );
}
