"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui";
import { Bold, Italic, Underline } from "lucide-react";

export default function ToogleGroupStyleDefault() {
    return (
        <ToggleGroup type="multiple" variant="default">
            <ToggleGroupItem value="bold">
                <Bold className="h-4 w-4" />
            </ToggleGroupItem>

            <ToggleGroupItem value="italic">
                <Italic className="h-4 w-4" />
            </ToggleGroupItem>

            <ToggleGroupItem value="underline">
                <Underline className="h-4 w-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    );
}
