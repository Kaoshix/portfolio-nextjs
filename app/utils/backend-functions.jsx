import { webAppProjects as webProjectsData } from '../datas/projects';
import { softwareProjects as softwareProjectsData } from '../datas/projects';

export const getAllProjects = () => {

    const arr = [];
    const webProjects = webProjectsData;
    const softwareProjects = softwareProjectsData;

    webProjects.forEach(project => {
        arr.push(project);
    }
    )

    softwareProjects.forEach(project => {
        arr.push(project);
    }
    )

    return arr;
}

export const getWebAppProjects = () => {
    return webProjectsData;
}

export const getSoftwareProjects = () => {
    return softwareProjectsData;
}