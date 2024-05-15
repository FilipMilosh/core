import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { Options } from "../../../constants/ApplicationsConstants";
import ApplicationsTable from "./ApplicationsTable";
import { useRPC } from "../../../hooks/useNear";
import { Application, NodeApp } from "../../../pages/Applications";
import apiClient from "../../../api";

const ModalWrapper = styled.div`
  background-color: #212325;
  border-radius: 0.5rem;
`;

const initialOptions = [
  {
    name: "Available",
    id: Options.AVAILABLE,
    count: 0,
  },
  {
    name: "Owned",
    id: Options.OWNED,
    count: 0,
  },
];

interface ApplicationsPopupProps {
  show: boolean;
  closeModal: () => void;
  setApplication: (application: Application) => void;
}

export interface Applications {
  available: Application[];
  owned: Application[];
}

export default function ApplicationsPopup({
  show,
  closeModal,
  setApplication,
}: ApplicationsPopupProps) {
  const { getPackage } = useRPC();
  const [currentOption, setCurrentOption] = useState(Options.AVAILABLE);
  const [tableOptions, setTableOptions] = useState(initialOptions);
  const [applicationsList, setApplicationsList] = useState<Applications>({
    available: [],
    owned: [],
  });

  useEffect(() => {
    const setApps = async () => {
      const installedApplications = await apiClient
        .admin()
        .getInstalledAplications();

      if (installedApplications.length !== 0) {
        const tempApplications = await Promise.all(
          installedApplications.map(async (app: NodeApp) => {
            const packageData = await getPackage(app.id);
            return { ...packageData, id: app.id, version: app.version };
          })
        );
        setApplicationsList((prevState) => ({
          ...prevState,
          available: tempApplications,
        }));
        setTableOptions([
          {
            name: "Available",
            id: Options.AVAILABLE,
            count: tempApplications.length,
          },
          {
            name: "Owned",
            id: Options.OWNED,
            count: 0,
          },
        ]);
      }
    };

    setApps();
  }, []);

  const selectApplication = (application: Application) => {
    setApplication(application);
    closeModal();
  };

  return (
    <Modal
      show={show}
      backdrop="static"
      keyboard={false}
      className="modal-xl"
      centered
    >
      <ModalWrapper>
        <ApplicationsTable
          applicationsList={applicationsList}
          currentOption={currentOption}
          setCurrentOption={setCurrentOption}
          tableOptions={tableOptions}
          closeModal={closeModal}
          selectApplication={selectApplication}
        />
      </ModalWrapper>
    </Modal>
  );
}
