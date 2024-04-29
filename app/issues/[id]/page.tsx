import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const IssueSinglePage = async ({ params }: Props) => {
  const isssue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!isssue) notFound();

  return (
    <div className="max-w-xl">
      <Heading>
        {isssue.id}: {isssue.title}
      </Heading>
      <Flex gap="3" align="center" my="2">
        <IssueStatusBadge status={isssue.status} />
        <Text>{isssue.createdAt.toDateString()}</Text>
      </Flex>
      <Card>{isssue.description}</Card>
    </div>
  );
};

export default IssueSinglePage;
