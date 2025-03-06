import { Avatar } from "@/components/ui";

export default function AvatarStyleFallback() {
  return (
    <Avatar>
      <Avatar.Image src="broken-link" alt="Arif Logs" />
      <Avatar.Fallback>AH</Avatar.Fallback>
    </Avatar>
  );
}
