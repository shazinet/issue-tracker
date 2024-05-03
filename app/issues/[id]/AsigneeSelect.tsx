import { Select } from "@radix-ui/themes";

const AsigneeSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Assignee...</Select.Label>
          <Select.Item value="1">Monarch</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AsigneeSelect;
