import * as Icons from '@ant-design/icons';
import { ComponentType } from 'react';

const getIconComponent = (iconName: keyof typeof Icons): ComponentType | undefined => {
    const IconComponent = Icons[iconName] as ComponentType;
    return IconComponent ? IconComponent : undefined;
};

export default getIconComponent;