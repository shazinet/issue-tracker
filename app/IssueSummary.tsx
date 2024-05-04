import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In Progress", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed", value: closed, status: "CLOSED" },
  ];

  return (
    <Flex gap="2">
      {containers.map((container) => (
        <Card key={container.label}>
          <Flex direction="column" gap="1">
            <Link href={`/issues/list?status=${container.status}`}>
              {container.label}
            </Link>
            <Text size="7" className="font-semibold">
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
