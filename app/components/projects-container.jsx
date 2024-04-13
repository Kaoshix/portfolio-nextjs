'use client';
import { useState } from 'react';
import { getAllProjects, getSoftwareProjects, getWebAppProjects } from '../utils/backend-functions';
import { ProjectCard } from './project-card';

export const ProjectsContainer = () => {

    const [projects, setProjects] = useState(getAllProjects());

    const [listFocus, setListFocus] = useState('all');

    return (
        <>
            <ul className="flex gap-3 justify-center items-center mb-5 select-none">
                <li
                    className={`cursor-pointer py-2 px-3 rounded-lg ${listFocus === 'all' ? 'bg-black text-white' : 'bg-white text-black'}`}
                    onClick={() => {
                        setProjects(getAllProjects());
                        setListFocus('all');
                    }}>All projects
                </li>

                <li
                    className={`cursor-pointer py-2 px-3 rounded-lg ${listFocus === 'web' ? 'bg-black text-white' : 'bg-white text-black'}`}
                    onClick={() => {
                        setProjects(getWebAppProjects());
                        setListFocus('web');
                    }}>Web applications
                </li>

                <li
                    className={`cursor-pointer py-2 px-3 rounded-lg ${listFocus === 'software' ? 'bg-black text-white' : 'bg-white text-black'}`}
                    onClick={() => {
                        setProjects(getSoftwareProjects());
                        setListFocus('software');
                    }}>Softwares
                </li>

                <li
                    className={`cursor-pointer py-2 px-3 rounded-lg ${listFocus === 'mobile' ? 'bg-black text-white' : 'bg-white text-black'}`}
                    onClick={() => {
                        setProjects('');
                        setListFocus('mobile');
                    }}>Mobile applications
                </li>

                <li
                    className={`cursor-pointer py-2 px-3 rounded-lg ${listFocus === 'game' ? 'bg-black text-white' : 'bg-white text-black'}`}
                    onClick={() => {
                        setProjects('');
                        setListFocus('game');
                    }}>Video games
                </li>
            </ul>

            <div className='grid grid-cols-3 gap-5 max-w-screen-xl mx-auto'>
                {projects && projects.map(project => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
        </>
    )
}