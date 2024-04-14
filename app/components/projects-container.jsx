'use client';
import { useState } from 'react';
import { getAllProjects, getSoftwareProjects, getWebAppProjects } from '../utils/backend-functions';
import { ProjectCard } from './project-card';

export const ProjectsContainer = () => {

    const [projects, setProjects] = useState(getAllProjects());

    const [listFocus, setListFocus] = useState('all');

    return (
        <>
            <ul className="flex flex-col md:flex-row gap-3 justify-center items-center select-none my-8 mx-auto pb-4 px-10 w-fit border-b border-slate-600">
                <li
                    className={`cursor-pointer py-2 px-3 rounded-lg ${listFocus === 'all' ? 'bg-black text-white' : 'bg-white text-black'}`}
                    onClick={() => {
                        setProjects(getAllProjects());
                        setListFocus('all');
                    }}>All projects
                </li>

                <li
                    className={`hidden md:inline-block cursor-pointer py-2 px-3 rounded-lg ${listFocus === 'web' ? 'bg-black text-white' : 'bg-white text-black'}`}
                    onClick={() => {
                        setProjects(getWebAppProjects());
                        setListFocus('web');
                    }}>Web applications
                </li>

                <li
                    className={`hidden md:inline-block cursor-pointer py-2 px-3 rounded-lg ${listFocus === 'software' ? 'bg-black text-white' : 'bg-white text-black'}`}
                    onClick={() => {
                        setProjects(getSoftwareProjects());
                        setListFocus('software');
                    }}>Softwares
                </li>
            </ul>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 max-w-screen-xl mx-5 md:mx-auto'>
                {projects && projects.map(project => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
        </>
    )
}