import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

interface Props {
  params: { id: string };
}

const IssueSinglePage = async ({ params }: Props) => {
  const isssue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!isssue) notFound();

  await delay(2000);

  return (
    <div className="max-w-xl">
      <Heading>
        {isssue.id}: {isssue.title}
      </Heading>
      <Flex gap="3" align="center" my="2">
        <IssueStatusBadge status={isssue.status} />
        <Text>{isssue.createdAt.toDateString()}</Text>
      </Flex>
      <Card mt="4">
        <Markdown className="prose">{isssue.description}</Markdown>
      </Card>
    </div>
  );
};

export default IssueSinglePage;
