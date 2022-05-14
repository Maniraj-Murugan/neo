import React, { FC } from "react";
import { AppLayout } from "app/layouts";
import { Header, SecondaryHeader } from "ui/components";

export const Dashboard: FC = () => {
  return (
    <AppLayout>
      <Header />
      <SecondaryHeader />
    </AppLayout>
  );
};
