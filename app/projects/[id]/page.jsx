import Link from "next/link";
import { FiSkipBack } from 'react-icons/fi';

async function getProject(id) {
  const res = await fetch("http://localhost:4000/projects/" + id, {
    next: {
      revalidate: 30,
    },
  });
  return res.json();
}

export default async function page({ params }) {
  const project = await getProject(params.id);
  return (
    <main>
        <nav className="!mb-4">
            <Link href={'/projects'}className="hover:text-white ease-in duration-300">
                <FiSkipBack />
            </Link>
            <h2>Project {project.id} Details</h2>
        </nav>
        <div className="card !w-full">
            <h3 className="!w-fit border-b-2 border-gray-300">{project.title}: {project.short_description}</h3>
            <p>{project.long_description}</p>
            <p className="userdata !my-4 w-fit">User name: {project.user_name}</p>
            <p className="userdata !my-4 w-fit">User email: {project.user_email}</p>
            <div className="flex justify-between gap-8 mb-4">
                <p className="text-green-600 font-mono font-semibold px-2 py-1 bg-green-300 rounded-md">Date created: {project.date_created}</p>
                <p className="text-red-600 font-mono font-semibold px-2 py-1 bg-red-300 rounded-md">Deadline: {project.deadline_date}</p>
            </div>
            <div className={`pill ${project.priority}`}>Priority: {project.priority}</div>
            <div className={`price ${project.priority}`}>Price: {project.price} $</div>
            <div className={`type ${project.priority}`}>Type: {project.type}</div>
        </div>
    </main>
  );
}