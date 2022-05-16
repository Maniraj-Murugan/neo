import React, { FC } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
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
  index: number;
}

export const Column: FC<ColumnProps> = ({ column, candidates, index }) => (
  <Draggable draggableId={column.id} index={index}>
    {(columnProvided, columnsnapshot) => (
      <ColumnContainer
        {...columnProvided.draggableProps}
        {...columnProvided.dragHandleProps}
        isDragging={columnsnapshot.isDragging}
        ref={columnProvided.innerRef}
      >
        <ColumnTitle>
          {column.title} - {candidates.length}
        </ColumnTitle>
        <Droppable droppableId={column.id}>
          {(listProvided) => (
            <ColumnCandidateList
              ref={listProvided.innerRef}
              {...listProvided.droppableProps}
            >
              {candidates.map((candidate, idx) => (
                <Candidate
                  key={candidate.id}
                  candidate={candidate}
                  index={idx}
                />
              ))}
              {listProvided.placeholder}
            </ColumnCandidateList>
          )}
        </Droppable>
      </ColumnContainer>
    )}
  </Draggable>
);
