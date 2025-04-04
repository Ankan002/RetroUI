import { Button } from "@/components/ui";
import { toast } from "sonner";

export default function SonnerStyleDefault() {
    const onClick = () => {
        toast("Event has been created", {
            description: "Sunday, December 03, 2025",
            cancel: {
                label: "Undo",
                onClick: () => {},
            },
        });
    };

    return <Button onClick={onClick}>Show Toast</Button>;
}
