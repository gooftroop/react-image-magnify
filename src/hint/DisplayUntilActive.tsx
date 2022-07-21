import { useState } from 'react';
import type { DisplayUntilActiveProps } from 'src/types';

export type PropTypes = DisplayUntilActiveProps;

export const DisplayUntilActive = (props: PropTypes): JSX.Element | null => {
    const {
        children,
        isActive,
        shouldHideHintAfterFirstActivation,
    } = props;
    const [hasShown, setHasShown] = useState(false);
    const shouldShow = !isActive && (!hasShown || !shouldHideHintAfterFirstActivation);

    if (isActive && !hasShown) {
        setHasShown(true);
    }

    return shouldShow ? children : null;
};
