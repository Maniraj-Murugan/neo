export interface CandidateLayoutProps {
  candidates: {
    [key: string]: { id: string; candidateName: string; company: string };
  };
  columns: {
    [key: string]: { id: string; title: string; candidateIds: string[] };
  };
  columnOrder: string[];
}

const candidateData: CandidateLayoutProps = {
  candidates: {
    candidate1: {
      id: "candidate1",
      candidateName: "Amirdharasan A",
      company: "Intellect data science",
    },
    candidate2: {
      id: "candidate2",
      candidateName: "Vimal Kumar",
      company: "Sirius Computer solutions",
    },
    candidate3: {
      id: "candidate3",
      candidateName: "Jaya Krishnan Duraisamy",
      company: "Lakeba IT solutions",
    },
    candidate4: {
      id: "candidate4",
      candidateName: "Akash P",
      company: "Centre",
    },
    candidate5: {
      id: "candidate5",
      candidateName: "Gayathri L",
      company: "Katomaran Technologies",
    },
    candidate6: {
      id: "candidate6",
      candidateName: "Suresh S",
      company: "Synopsis",
    },
    candidate7: {
      id: "candidate7",
      candidateName: "Vijay Bhupathi V",
      company: "Topclass Entertainment LLP",
    },
    candidate8: {
      id: "candidate8",
      candidateName: "Janasri M",
      company: "TCS",
    },
    candidate9: {
      id: "candidate9",
      candidateName: "Mohamed Mubarak",
      company: "MongoDB",
    },
    candidate10: {
      id: "candidate10",
      candidateName: "Arun Kumar",
      company: "Vidhya Skill School",
    },
  },
  columns: {
    col1: {
      id: "col1",
      title: "Open",
      candidateIds: ["candidate1", "candidate2", "candidate3"],
    },
    col2: {
      id: "col2",
      title: "Contacted",
      candidateIds: ["candidate4", "candidate5"],
    },
    col3: {
      id: "col3",
      title: "Written Test",
      candidateIds: ["candidate6", "candidate7", "candidate8"],
    },
    col4: {
      id: "col4",
      title: "Technical Round",
      candidateIds: ["candidate9"],
    },
    col5: {
      id: "col5",
      title: "Culture Fit Round",
      candidateIds: ["candidate10"],
    },
  },
  columnOrder: ["col1", "col2", "col3", "col4", "col5"],
};

export default candidateData;
