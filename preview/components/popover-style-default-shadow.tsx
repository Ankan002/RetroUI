"use client";

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Label,
    Button,
    Input,
} from "@/components/ui";

export default function PopoverStyleDefaultShadow() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button>Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent
                className="w-80 font-sans"
                variant="default"
                shadow="md"
            >
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Dimensions</h4>
                        <p className="text-sm text-muted-foreground">
                            Set the dimensions for the layer.
                        </p>
                    </div>

                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="width">Width</Label>

                            <Input
                                id="width"
                                defaultValue="100%"
                                className="col-span-2 h-8"
                            />
                        </div>

                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="width">Height</Label>

                            <Input
                                id="height"
                                defaultValue="25px"
                                className="col-span-2 h-8"
                            />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
