import React, { FC, useState } from "react";
import { AppLayout } from "app/layouts";
import { Header, SecondaryHeader } from "ui/components";
import { CandidatesList } from "./Components/CandidatesList";
import { ListHeader } from "./Components/Header";

export const Dashboard: FC = () => {
  const [searchText, setSearchText] = useState<string>("");

  const getSearchText = (text: string) => setSearchText(text);

  return (
    <AppLayout>
      <Header getSearchText={getSearchText} />
      <SecondaryHeader />
      <ListHeader />
      <CandidatesList searchUserName={searchText}/>
    </AppLayout>
  );
};
