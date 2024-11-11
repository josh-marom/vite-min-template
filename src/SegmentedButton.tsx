import { Button, ButtonProps } from "@mantine/core"
import { useCallback } from "react";

const getButtonStyles = (i: number) => ({
    root: {
        borderInlineStart: i === 0 ? undefined : 0,
    }
})

export type SegmentedButtonItemType<T> = {
    icon?: React.ReactNode;
    label?: string;
    value: T;
    disabled?: boolean;
    tooltip?: React.ReactNode;
};

export type SegmentedButtonProps<T = any> = ButtonProps & {
    items: ReadonlyArray<SegmentedButtonItemType<T>>;
    isMulti?: boolean;
} & ({
    isMulti?: true;
    value?: T[];
    onClick?: (value: T[]) => void;
} | {
    isMulti?: false | undefined;
    value?: T;
    onClick?: (value: T) => void;
})

export const SegmentedButton = ({
    items,
    value,
    onClick,
    isMulti,
    ...buttonProps
}: SegmentedButtonProps) => {
    const isActive = useCallback((item: typeof items[number]) => {
       return isMulti ? value?.includes(item.value) : value === item.value
    }, [isMulti, value])

    // const activeValues = useMemo(() => items.filter(isActive), [])

    const handleClick = useCallback((v: any) => {
        if (!isMulti) return onClick?.(v)

        const newValue = value?.includes(v)
            ? value.filter((item) => item !== v)
            : [value, v].flat();

        onClick?.(newValue)
    }, [isMulti, value]);

    return (
        <Button.Group>
            {
                items.map((item, i) => (
                    <Button
                        {...buttonProps}
                        onClick={() => handleClick(item.value)}
                        variant={isActive(item) ? 'filled' : 'outline'}
                        leftSection={item.icon}
                        styles={getButtonStyles(i)}>
                        {item.label}
                    </Button>
                ))
            }
        </Button.Group>
    );
}