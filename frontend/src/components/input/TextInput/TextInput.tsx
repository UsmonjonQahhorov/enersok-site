import type {
    ComponentPropsWithoutRef,
    ComponentPropsWithRef,
    ReactNode,
} from 'react';
import { forwardRef } from 'react';
import { FieldGroup } from '@/components/input/FieldGroup';
import { InputBase } from '@/components/input/InputBase';
import { LabelBase } from '@/components/input/LabelBase';
import { cn } from '@/utils/cn';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    (
        {
            id,
            displayCapitalized = false,
            label,
            labelProps,
            fieldGroupProps,
            type = 'text',
            required,
            className,
            ...props
        },
        ref,
    ) => {
        const { className: labelClassname, ...otherLabelProps } = labelProps ?? {};

        return (
            <FieldGroup {...fieldGroupProps}>
                {label && (
                    <LabelBase
                        required={required}
                        className={cn(labelClassname)}
                        htmlFor={id}
                        {...otherLabelProps}
                    >
                        {label}
                    </LabelBase>
                )}
                <InputBase
                    ref={ref}
                    className={cn(
                        {
                            'capitalize placeholder:normal-case': displayCapitalized,
                        },
                        className,
                    )}
                    required={required}
                    type={type}
                    {...props}
                />
            </FieldGroup>
        );
    },
);

TextInput.displayName = 'TextInput';

type TextInputProps = Omit<ComponentPropsWithRef<typeof InputBase>, 'type'> & {
    label?: ReactNode;
    labelProps?: Omit<ComponentPropsWithoutRef<typeof LabelBase>, 'required'>;
    type?: 'text' | 'password';
    fieldGroupProps?: ComponentPropsWithoutRef<typeof FieldGroup>;
    displayCapitalized?: boolean;
};