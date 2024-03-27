import React, { useEffect, useState } from "react";
import MemberCard from "./MemberCard";
import { useSelector } from "react-redux";
import { teamReducer } from "./../../store/reducers/teamReducers";
import "./team.scss";

const TeamList = () => {
  const teamInfo = useSelector<any, any>((state) => state.teamReducer);

  const totalMembers = teamInfo.totalMembers;
  const teamMembersInfo = teamInfo.membersInfo;

   const [members, setMembers] = useState({ data: [] });

  useEffect(() => {
    fetch("http://localhost:8000/api/team")
      .then((resp) => resp.json())
      .then((data) => setMembers(data));
  }, []);

    
  const membersCards = members.data.map((element, index) => {
    return (
      <MemberCard
        fullName={element.fullname}
        post={element.post}
        photo={element.photo}
        additionalInfo={element.additionalInfo}
      />
    );
  });

  return (
    <>
      <section className="list w-full h-auto  flex flex-col items-center justify-center">
        <h1 className="list__title">Состав студенческого совета.</h1>
        <div className="list-wrapper">
          {membersCards}
        </div>
      </section>
    </>
  );
};
export default TeamList;
