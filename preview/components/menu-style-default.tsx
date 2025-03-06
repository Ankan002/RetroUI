import { Button, Menu } from "@/components/ui";

export default function MenuDefault() {
  return (
    <Menu>
      <Menu.Trigger asChild>
        <Button>Menu</Button>
      </Menu.Trigger>
      <Menu.Content className="min-w-36">
        <Menu.Item>Menu Item 1</Menu.Item>
        <Menu.Item>Menu Item 2</Menu.Item>
        <Menu.Item>Menu Item 3</Menu.Item>
      </Menu.Content>
    </Menu>
  );
}
