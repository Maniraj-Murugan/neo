import { Rate, Col, Avatar } from "antd";
import React, { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  UserOutlined,
  EllipsisOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import {
  CandidateContainer,
  StyledUserName,
  StyledUserCompany,
  StyledRatingSection,
} from "./Candidates.styled";

export interface CandidateProps {
  candidate: {
    id: string;
    candidateName: string;
    company: string;
  };
  index: number;
}

export const Candidate: FC<CandidateProps> = ({ candidate, index }) => (
  <Draggable draggableId={candidate.id} index={index} key={candidate.id}>
    {(provided) => (
      <CandidateContainer
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <StyledUserName>
          {candidate.candidateName} <UsergroupAddOutlined />
        </StyledUserName>
        <StyledUserCompany> {candidate.company} </StyledUserCompany>
        <StyledRatingSection align="middle" justify="space-between">
          <Col>
            <Rate allowHalf defaultValue={4.5} />
          </Col>
          <Col>
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
            <EllipsisOutlined />
          </Col>
        </StyledRatingSection>
      </CandidateContainer>
    )}
  </Draggable>
);
