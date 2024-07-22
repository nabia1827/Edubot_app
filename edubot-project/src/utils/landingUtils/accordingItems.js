import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import {
    MessageOutlined,
    AlignLeftOutlined

} from '@ant-design/icons';
export const panelVariants = {
    open: {
        width: '100%',
        height: '100%',
    },
    closed: {
        width: '0%',
        height: '100%',
    },
};

export const panelVariantsSm = {
    open: {
        width: '100%',
        height: '200px',
    },
    closed: {
        width: '100%',
        height: '0px',
    },
};

export const descriptionVariants = {
    open: {
        opacity: 1,
        y: '0%',
        transition: {
            delay: 0.125,
        },
    },
    closed: { opacity: 0, y: '100%' },
};

export const items = [
    {
        id: 1,
        title: 'Earn more',
        Icon: MessageOutlined,
        imgSrc:
            'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.',
    },
    {
        id: 2,
        title: 'Play more',
        Icon: MessageOutlined,
        imgSrc:
            'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.',
    },
    {
        id: 3,
        title: 'Keep track',
        Icon: MessageOutlined,
        imgSrc:
            'https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.',
    },
    {
        id: 4,
        title: 'Grow faster',
        Icon: MessageOutlined,
        imgSrc:
            'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.',
    },
];