async function getProjects() {
    const res = await fetch('http://localhost:4000/projects', {
        next: {
            revalidate: 0
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
                        <h3>{project.title}</h3>
                        <p>{project.body}</p>
                        <p className="useremail">{project.user_email}</p>
                        <div className={`pill ${project.priority}`}>{project.priority} priority</div>
                        <div className={`price ${project.priority}`}>{project.price} $</div>
                        <div className={`type ${project.priority}`}>{project.type}</div>
                    </li>
                ))
            }
        </>
    );
}
