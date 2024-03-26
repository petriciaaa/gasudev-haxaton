import React from "react";
import MemberCard from "./MemberCard";
import { useSelector } from "react-redux";
import { teamReducer } from "./../../store/reducers/teamReducers";

const TeamList = () => {
  const teamInfo = useSelector<any, any>((state) => state.teamReducer);

  const totalMembers = teamInfo.totalMembers;
  const teamMembersInfo = teamInfo.membersInfo;

  const membersCards = teamMembersInfo.map((element, index) => {
    return (
      <MemberCard
        fullName={element.fullName}
        post={element.post}
        photo={element.photo}
        additionalInfo={element.additionalInfo}
      />
    );
  });

  return (
    <>
      <section className="w-full h-auto bg-violet-300 flex items-center justify-center">
        <div className="list-wrapper w-5/12 h-auto bg-red-200 flex flex-col items-center p-3">
          {membersCards}
        </div>
      </section>
    </>
  );
};
export default TeamList;
