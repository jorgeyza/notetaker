import { useSession } from "next-auth/react";

import { api } from "~/utils/api";

export const Content: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
    undefined, // no input
    {
      enabled: sessionData?.user !== undefined,
    }
  );
  return <main>{JSON.stringify(topics)}</main>;
};
