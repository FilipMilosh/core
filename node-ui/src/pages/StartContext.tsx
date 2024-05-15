import React, { useState } from "react";
import { Navigation } from "../components/Navigation";
import { FlexLayout } from "../components/layout/FlexLayout";
import PageContentWrapper from "../components/common/PageContentWrapper";
import { useNavigate } from "react-router-dom";
import { ContentCard } from "../components/common/ConentCard";
import StartContextCard from "../components/context/startContext/StartContextCard";
import translations from "../constants/en.global.json";
import apiClient from "../api/index";
import { Application } from "./Applications";

export default function StartContext() {
  const t = translations.startContextPage;
  const navigate = useNavigate();
  const [application, setApplication] = useState<Application | null>(null);
  const [isArgsChecked, setIsArgsChecked] = useState(false);
  const [methodName, setMethodName] = useState("");
  const [argumentsJson, setArgumentsJson] = useState("");
  const [showBrowseApplication, setShowBrowseApplication] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [startContextStatus, setStartContextStatus] = useState({
    title: "",
    message: "",
    error: false,
  });

  const startContext = async () => {
    setIsLoading(true);
    try {
      const startContextResponse = await apiClient
        .context()
        .startContexts(application.id, methodName, argumentsJson);
      if (startContextResponse) {
        setStartContextStatus({
          title: t.startContextSuccessTitle,
          message: t.startedContextMessage,
          error: false,
        });
      } else {
        setStartContextStatus({
          title: t.startContextErrorTitle,
          message: t.startContextErrorMessage,
          error: true,
        });
      }
    } catch (error) {
      console.error(error);
      setStartContextStatus({
        title: t.startContextErrorTitle,
        message: error.message,
        error: true,
      });
    }
    setIsLoading(false);
    setShowStatusModal(true);
  };

  const closeModal = () => {
    setShowStatusModal(false);
    if (startContextStatus.error) {
      setStartContextStatus({
        title: "",
        message: "",
        error: false,
      });
      return;
    }
    navigate("/contexts");
  };

  return (
    <FlexLayout>
      <Navigation />
      <PageContentWrapper>
        <ContentCard
          headerBackText={t.backButtonText}
          headerOnBackClick={() => navigate("/contexts")}
        >
          <StartContextCard
            application={application}
            setApplication={setApplication}
            isArgsChecked={isArgsChecked}
            setIsArgsChecked={setIsArgsChecked}
            methodName={methodName}
            setMethodName={setMethodName}
            argumentsJson={argumentsJson}
            setArgumentsJson={setArgumentsJson}
            startContext={startContext}
            showBrowseApplication={showBrowseApplication}
            setShowBrowseApplication={setShowBrowseApplication}
            onUploadClick={() => navigate("/upload-app")}
            isLoading={isLoading}
            showStatusModal={showStatusModal}
            closeModal={closeModal}
            startContextStatus={startContextStatus}
          />
        </ContentCard>
      </PageContentWrapper>
    </FlexLayout>
  );
}
