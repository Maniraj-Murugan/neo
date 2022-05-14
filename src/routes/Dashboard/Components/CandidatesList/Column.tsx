import React, { FC } from "react";
import { Droppable } from "react-beautiful-dnd";
import { Candidate } from "./Candidate";
import {
  ColumnContainer,
  ColumnCandidateList,
  ColumnTitle,
} from "./Candidates.styled";

export interface ColumnProps {
  column: {
    id: string;
    title: string;
    candidateIds: string[];
  };
  candidates: { id: string; candidateName: string; company: string }[];
}

export const Column: FC<ColumnProps> = ({ column, candidates }) => (
  <ColumnContainer>
    <ColumnTitle>
      {column.title} - {candidates.length}
    </ColumnTitle>
    <Droppable droppableId={column.id}>
      {(provided) => (
        <ColumnCandidateList
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {candidates.map((candidate, index) => (
            <Candidate key={candidate.id} candidate={candidate} index={index} />
          ))}
          {provided.placeholder}
        </ColumnCandidateList>
      )}
    </Droppable>
  </ColumnContainer>
);
