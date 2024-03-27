import React, { useEffect, useState } from "react";
import MemberCard from "./MemberCard";
import { useSelector } from "react-redux";
import { teamReducer } from "./../../store/reducers/teamReducers";
import "./team.scss";

const TeamList = () => {
  const teamInfo = useSelector<any, any>((state) => state.teamReducer);

  const totalMembers = teamInfo.totalMembers;
  const teamMembersInfo = teamInfo.membersInfo;

  // const [members, setMembers] = useState();

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((resp) => resp.json())
  //     .then((data) => setMembers(data));
  // }, []);
  // console.log(members);

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
      <section className="list w-full h-auto  flex flex-col items-center justify-center">
        <h1 className="list__title">Состав студенческого совета.</h1>
        <div className="list-wrapper w-5/12 h-auto  flex flex-col items-center p-3 mt-10">
          {membersCards}
        </div>
      </section>
    </>
  );
};
export default TeamList;
