import { Button, ButtonProps } from "@mantine/core"

export type SegmentedButtonItemType<T> = {
    icon?: React.ReactNode;
    label?: string;
    value: T;
    disabled?: boolean;
    tooltip?: React.ReactNode;
};

export type SegmentedButtonProps<T = any> = ButtonProps & {
    items: ReadonlyArray<SegmentedButtonItemType<T>>;
    value?: T;
    onClick?: (value: T) => void;
};

export const SegmentedButton = <T = string | number,>({
    items,
    value,
    onClick,
    ...buttonProps
}: SegmentedButtonProps<T>) => (
    <Button.Group>
        {items.map((item, i) => (
            <Button
                {...buttonProps}
                onClick={() => onClick?.(item.value)}
                variant={item.value === value ? 'filled' : 'outline'}
                leftSection={item.icon}
                styles={{
                    root: {
                        borderInlineStart: i === 0 ? undefined : 0,
                    }
                }}>
                {item.label}
            </Button>
        ))}
    </Button.Group>
);