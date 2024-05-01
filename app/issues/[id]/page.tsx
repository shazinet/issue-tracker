import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const IssueSinglePage = async ({ params }: Props) => {
  const isssue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!isssue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <Heading>
          {isssue.id}: {isssue.title}
        </Heading>
        <Flex gap="3" align="center" my="2">
          <IssueStatusBadge status={isssue.status} />
          <Text>{isssue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose" mt="4">
          <Markdown>{isssue.description}</Markdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`/issues/${isssue.id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueSinglePage;
