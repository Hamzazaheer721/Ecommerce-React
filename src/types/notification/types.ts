import { IconType, NotificationPlacement } from 'antd/lib/notification';
import React from 'react';

export interface ArgsProps {
    message: React.ReactNode;
    description?: React.ReactNode;
    btn?: React.ReactNode;
    key?: string;
    onClose?: () => void;
    duration?: number | null;
    icon?: React.ReactNode;
    placement?: NotificationPlacement;
    style?: React.CSSProperties;
    prefixCls?: string;
    className?: string;
    readonly type?: IconType;
    onClick?: () => void;
    top?: number;
    bottom?: number;
    getContainer?: () => HTMLElement;
    closeIcon?: React.ReactNode;
}
