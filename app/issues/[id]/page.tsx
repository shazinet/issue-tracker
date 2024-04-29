import prisma from "@/prisma/client";
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
    <>
      <p>{isssue.id}</p>
      <p>{isssue.title}</p>
      <p>{isssue.status}</p>
      <p>{isssue.description}</p>
      <p>{isssue.createdAt.toDateString()}</p>
    </>
  );
};

export default IssueSinglePage;
