import React, { useEffect } from "react";

export const IndeterminateCheckbox = React.forwardRef(({ indeterminate, ...rest }: any, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef: any = ref || defaultRef;

    useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
        <>
            <input name="select-radio" type='checkbox' ref={resolvedRef} {...rest} />
        </>
    );
});

