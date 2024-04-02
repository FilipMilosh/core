import React from "react";
import styled from "styled-components";
import { ApplicationsTable } from "./ApplicationsTable";

const ContentLayout = styled.div`
  padding: 42px 26px 26px 26px;
  display: flex;
  flex: 1;
  .content-card {
    background-color: #353540;
    border-radius: 4px;
    padding: 30px 26px 26px 30px;
    width: 100%;
  }

  .page-title {
    color: #fff;
    font-size: 24px;
    font-weight: semi-bold;
  }
`;

export function ApplicationsContent() {
  return (
    <ContentLayout>
      <div className="content-card">
        <div className="page-title">Applications</div>
        <ApplicationsTable />
      </div>
    </ContentLayout>
  );
}
