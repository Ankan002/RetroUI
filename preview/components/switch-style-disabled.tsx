import { Switch } from "@/components/ui";
import React from "react";

export default function SwitchStyleDisabled() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="notification" disabled />
    </div>
  );
}
