import { Projects } from '../datas/projects';

export const getAllProjects = () => {
    return Projects;
}

export const getProProjects = () => {
    return Projects.filter(project => project.platform === 'pro');
}

export const getPersonalProjects = () => {
    return Projects.filter(project => project.platform === 'perso');
}