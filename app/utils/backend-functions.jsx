import { Projects } from '../datas/projects';

export const getAllProjects = () => {
    return Projects;
}

export const getWebAppProjects = () => {
    return Projects.filter(project => project.platform === 'web');
}

export const getSoftwareProjects = () => {
    return Projects.filter(project => project.platform === 'software');
}