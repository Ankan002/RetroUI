import { lazy } from "react";

export const componentConfig: {
    core: {
        [key: string]: {
            name: string;
            filePath: string;
            dependencies?: string[];
            preview?: React.LazyExoticComponent<() => JSX.Element>;
        };
    };
    examples: {
        [key: string]: {
            name: string;
            filePath: string;
            preview: React.LazyExoticComponent<() => JSX.Element>;
        };
    };
} = {
    core: {
        accordion: {
            name: "accordion",
            dependencies: ["@radix-ui/react-accordion", "lucide-react"],
            filePath: "components/ui/Accordion.tsx",
        },
        alert: {
            name: "alert",
            filePath: "components/ui/Alert.tsx",
        },
        avatar: {
            name: "avatar",
            filePath: "components/ui/Avatar.tsx",
        },
        badge: {
            name: "badge",
            filePath: "components/ui/Badge.tsx",
        },
        button: {
            name: "button",
            filePath: "components/ui/Button.tsx",
        },
        card: {
            name: "card",
            filePath: "components/ui/Card.tsx",
        },
        checkbox: {
            name: "checkbox",
            filePath: "components/ui/Checkbox.tsx",
        },
        dialog: {
            name: "dialog",
            filePath: "components/ui/Dialog.tsx",
        },
        input: {
            name: "input",
            filePath: "components/ui/Input.tsx",
        },
        label: {
            name: "label",
            filePath: "components/ui/Label.tsx",
        },
        menu: {
            name: "menu",
            filePath: "components/ui/Menu.tsx",
        },
        popover: {
            name: "popover",
            filePath: "components/ui/Popover.tsx",
        },
        radio: {
            name: "radio",
            filePath: "components/ui/Radio.tsx",
        },
        select: {
            name: "select",
            filePath: "components/ui/Select.tsx",
        },
        switch: {
            name: "switch",
            filePath: "components/ui/Switch.tsx",
        },
        sonner: {
            name: "sonner",
            filePath: "components/ui/Sonner.tsx",
        },
        text: {
            name: "text",
            filePath: "components/ui/Text.tsx",
        },
        toggle: {
            name: "toggle",
            filePath: "components/ui/Toggle.tsx",
        },
        "toggle-group": {
            name: "toggle-group",
            filePath: "components/ui/ToggleGroup.tsx",
        },
        tooltip: {
            name: "tooltip",
            filePath: "components/ui/Tooltip.tsx",
        },
    },
    examples: {
        "accordion-style-default": {
            name: "accordion-style-default",
            filePath: "preview/components/accordion-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/accordion-style-default"),
            ),
        },
        "alert-style-default": {
            name: "alert-style-default",
            filePath: "preview/components/alert-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/alert-style-default"),
            ),
        },
        "alert-style-solid": {
            name: "alert-style-solid",
            filePath: "preview/components/alert-style-solid.tsx",
            preview: lazy(
                () => import("@/preview/components/alert-style-solid"),
            ),
        },
        "alert-style-with-icon": {
            name: "alert-style-with-icon",
            filePath: "preview/components/alert-style-with-icon.tsx",
            preview: lazy(
                () => import("@/preview/components/alert-style-with-icon"),
            ),
        },
        "alert-style-all-status": {
            name: "alert-style-all-status",
            filePath: "preview/components/alert-style-all-status.tsx",
            preview: lazy(
                () => import("@/preview/components/alert-style-all-status"),
            ),
        },
        "avatar-style-circle": {
            name: "avatar-style-circle",
            filePath: "preview/components/avatar-style-circle.tsx",
            preview: lazy(
                () => import("@/preview/components/avatar-style-circle"),
            ),
        },
        "avatar-style-circle-fallbacks": {
            name: "avatar-style-fallbacks",
            filePath: "preview/components/avatar-style-circle-fallbacks.tsx",
            preview: lazy(
                () =>
                    import(
                        "@/preview/components/avatar-style-circle-fallbacks"
                    ),
            ),
        },
        "avatar-style-circle-sizes": {
            name: "avatar-style-circle-sizes",
            filePath: "preview/components/avatar-style-circle-sizes.tsx",
            preview: lazy(
                () => import("@/preview/components/avatar-style-circle-sizes"),
            ),
        },
        "badge-style-default": {
            name: "badge-style-default",
            filePath: "preview/components/badge-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/badge-style-default"),
            ),
        },
        "badge-style-variants": {
            name: "badge-style-variants",
            filePath: "preview/components/badge-style-variants.tsx",
            preview: lazy(
                () => import("@/preview/components/badge-style-variants"),
            ),
        },
        "badge-style-rounded": {
            name: "badge-style-default",
            filePath: "preview/components/badge-style-rounded.tsx",
            preview: lazy(
                () => import("@/preview/components/badge-style-rounded"),
            ),
        },
        "badge-style-sizes": {
            name: "badge-style-sizes",
            filePath: "preview/components/badge-style-sizes.tsx",
            preview: lazy(
                () => import("@/preview/components/badge-style-sizes"),
            ),
        },
        "button-style-default": {
            name: "button-style-default",
            filePath: "preview/components/button-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/button-style-default"),
            ),
        },
        "button-style-outline": {
            name: "button-style-default",
            filePath: "preview/components/button-style-outline.tsx",
            preview: lazy(
                () => import("@/preview/components/button-style-outline"),
            ),
        },
        "button-style-link": {
            name: "button-style-link",
            filePath: "preview/components/button-style-link.tsx",
            preview: lazy(
                () => import("@/preview/components/button-style-link"),
            ),
        },
        "card-style-default": {
            name: "card-style-default",
            filePath: "preview/components/card-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/card-style-default"),
            ),
        },
        "card-style-commerce": {
            name: "card-style-commerce",
            filePath: "preview/components/card-style-commerce.tsx",
            preview: lazy(
                () => import("@/preview/components/card-style-commerce"),
            ),
        },
        "card-style-testimonial": {
            name: "card-style-testimonial",
            filePath: "preview/components/card-style-testimonial.tsx",
            preview: lazy(
                () => import("@/preview/components/card-style-testimonial"),
            ),
        },
        "checkbox-style-default": {
            name: "checkbox-style-default",
            filePath: "preview/components/checkbox-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/checkbox-style-default"),
            ),
        },
        "checkbox-style-variants": {
            name: "checkbox-style-toggle",
            filePath: "preview/components/checkbox-style-variants.tsx",
            preview: lazy(
                () => import("@/preview/components/checkbox-style-variants"),
            ),
        },
        "checkbox-style-sizes": {
            name: "checkbox-style-default",
            filePath: "preview/components/checkbox-style-sizes.tsx",
            preview: lazy(
                () => import("@/preview/components/checkbox-style-sizes"),
            ),
        },
        // "dropdown-style-default": {
        //   name: "dropdown-style-default",
        //   filePath: "preview/components/dropdown-style-default.tsx",
        //   preview: lazy(() => import("@/preview/components/dropdown-style-default")),
        // },
        "input-style-default": {
            name: "input-style-default",
            filePath: "preview/components/input-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/input-style-default"),
            ),
        },
        "input-style-with-label": {
            name: "input-style-with-label",
            filePath: "preview/components/input-style-with-label.tsx",
            preview: lazy(
                () => import("@/preview/components/input-style-with-label"),
            ),
        },
        "input-style-error": {
            name: "input-style-error",
            filePath: "preview/components/input-style-error.tsx",
            preview: lazy(
                () => import("@/preview/components/input-style-error"),
            ),
        },
        "menu-style-default": {
            name: "menu-style-default",
            filePath: "preview/components/menu-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/menu-style-default"),
            ),
        },
        "popover-style-default": {
            name: "popover-style-default",
            filePath: "preview/components/popover-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/popover-style-default"),
            ),
        },
        "popover-style-primary": {
            name: "popover-style-primary",
            filePath: "preview/components/popover-style-primary.tsx",
            preview: lazy(
                () => import("@/preview/components/popover-style-primary"),
            ),
        },
        "popover-style-default-shadow": {
            name: "popover-style-default-shadow",
            filePath: "preview/components/popover-style-default-shadow.tsx",
            preview: lazy(
                () =>
                    import("@/preview/components/popover-style-default-shadow"),
            ),
        },
        "popover-style-primary-shadow": {
            name: "popover-style-primary-shadow",
            filePath: "preview/components/popover-style-primary-shadow.tsx",
            preview: lazy(
                () =>
                    import("@/preview/components/popover-style-primary-shadow"),
            ),
        },
        "radio-style-default": {
            name: "radio-style-default",
            filePath: "preview/components/radio-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/radio-style-default"),
            ),
        },
        "radio-style-variants": {
            name: "radio-style-variants",
            filePath: "preview/components/radio-style-variants.tsx",
            preview: lazy(
                () => import("@/preview/components/radio-style-variants"),
            ),
        },
        "radio-style-sizes": {
            name: "radio-style-sizes",
            filePath: "preview/components/radio-style-sizes.tsx",
            preview: lazy(
                () => import("@/preview/components/radio-style-sizes"),
            ),
        },
        "select-style-default": {
            name: "select-style-default",
            filePath: "preview/components/select-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/select-style-default"),
            ),
        },
        "switch-style-default": {
            name: "switch-style-default",
            filePath: "preview/components/switch-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/switch-style-default"),
            ),
        },
        "switch-style-disabled": {
            name: "switch-style-disabled",
            filePath: "preview/components/switch-style-disabled.tsx",
            preview: lazy(
                () => import("@/preview/components/switch-style-disabled"),
            ),
        },
        "textarea-style-default": {
            name: "textarea-style-default",
            filePath: "preview/components/textarea-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/textarea-style-default"),
            ),
        },
        "text-headings": {
            name: "text-headings",
            filePath: "preview/components/text-headings.tsx",
            preview: lazy(() => import("@/preview/components/text-headings")),
        },
        "typography-p": {
            name: "typography-p",
            filePath: "preview/components/typography-p.tsx",
            preview: lazy(() => import("@/preview/components/typography-p")),
        },
        "tab-style-default": {
            name: "typography-p",
            filePath: "preview/components/tab-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/tab-style-default"),
            ),
        },
        "dialog-style-default": {
            name: "dialog-style-default",
            filePath: "preview/components/dialog-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/dialog-style-default"),
            ),
        },
        "dialog-style-with-footer": {
            name: "dialog-style-with-footer",
            filePath: "preview/components/dialog-style-with-footer.tsx",
            preview: lazy(
                () => import("@/preview/components/dialog-style-with-footer"),
            ),
        },
        "dialog-style-width-variant": {
            name: "dialog-style-width-variant",
            filePath: "preview/components/dialog-style-width-variant.tsx",
            preview: lazy(
                () => import("@/preview/components/dialog-style-width-variant"),
            ),
        },
        "dialog-style-with-form": {
            name: "dialog-style-with-form",
            filePath: "preview/components/dialog-style-with-form.tsx",
            preview: lazy(
                () => import("@/preview/components/dialog-style-with-form"),
            ),
        },
        "toggle-style-default": {
            name: "toggle-style-default",
            filePath: "preview/components/toggle-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/toggle-style-default"),
            ),
        },
        "toggle-style-outlined": {
            name: "toggle-style-outlined",
            filePath: "preview/components/toggle-style-outlined.tsx",
            preview: lazy(
                () => import("@/preview/components/toggle-style-outlined"),
            ),
        },
        "toggle-style-solid": {
            name: "toggle-style-solid",
            filePath: "preview/components/toggle-style-solid.tsx",
            preview: lazy(
                () => import("@/preview/components/toggle-style-solid"),
            ),
        },
        "toggle-style-outline-muted": {
            name: "toggle-style-outline-muted",
            filePath: "preview/components/toggle-style-outline-muted.tsx",
            preview: lazy(
                () => import("@/preview/components/toggle-style-outline-muted"),
            ),
        },
        "sonner-style-default": {
            name: "sonner-style-default",
            filePath: "preview/components/sonner-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/sonner-style-default"),
            ),
        },
        "sonner-style-warning": {
            name: "sonner-style-warning",
            filePath: "preview/components/sonner-style-warning.tsx",
            preview: lazy(
                () => import("@/preview/components/sonner-style-warning"),
            ),
        },
        "sonner-style-error": {
            name: "sonner-style-error",
            filePath: "preview/components/sonner-style-error.tsx",
            preview: lazy(
                () => import("@/preview/components/sonner-style-error"),
            ),
        },
        "sonner-style-rich-colors": {
            name: "sonner-style-rich-colors",
            filePath: "preview/components/sonner-style-rich-colors.tsx",
            preview: lazy(
                () => import("@/preview/components/sonner-style-rich-colors"),
            ),
        },
        label: {
            name: "label",
            filePath: "preview/components/label.tsx",
            preview: lazy(() => import("@/preview/components/label")),
        },
        "tooltip-style-default": {
            name: "tooltip-style-default",
            filePath: "preview/components/tooltip-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/tooltip-style-default"),
            ),
        },
        "tooltip-style-solid": {
            name: "tooltip-style-solid",
            filePath: "preview/components/tooltip-style-solid.tsx",
            preview: lazy(
                () => import("@/preview/components/tooltip-style-solid"),
            ),
        },
        "tooltip-style-primary": {
            name: "tooltip-style-primary",
            filePath: "preview/components/tooltip-style-primary.tsx",
            preview: lazy(
                () => import("@/preview/components/tooltip-style-primary"),
            ),
        },
        "toggle-group-style-default": {
            name: "toggle-group-style-default",
            filePath: "preview/components/toggle-group-style-default.tsx",
            preview: lazy(
                () => import("@/preview/components/toggle-group-style-default"),
            ),
        },
        "toggle-group-style-outlined": {
            name: "toggle-group-style-outlined",
            filePath: "preview/components/toggle-group-style-outlined.tsx",
            preview: lazy(
                () =>
                    import("@/preview/components/toggle-group-style-outlined"),
            ),
        },
        "toggle-group-style-outline-muted": {
            name: "toggle-group-style-outline-muted",
            filePath: "preview/components/toggle-group-style-outline-muted.tsx",
            preview: lazy(
                () =>
                    import(
                        "@/preview/components/toggle-group-style-outline-muted"
                    ),
            ),
        },
        "toggle-group-style-solid": {
            name: "toggle-group-style-solid",
            filePath: "preview/components/toggle-group-style-solid.tsx",
            preview: lazy(
                () => import("@/preview/components/toggle-group-style-solid"),
            ),
        },
    },
};
