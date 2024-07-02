import getIconComponent from './getIconComponent';

type IconLoaderProps = {
    iconName: keyof typeof import('@ant-design/icons');
};

const IconLoader = ({ iconName }: IconLoaderProps) => {
    const IconComponent = getIconComponent(iconName);
    return IconComponent ? <IconComponent /> : undefined;
};

export default IconLoader;