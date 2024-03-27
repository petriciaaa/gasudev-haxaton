import React from "react";

import "./team.scss";

interface IMemberCard {
  fullName: string;
  photo?: string | undefined;
  post: string;
  additionalInfo?: string | any;
}

const MemberCard = ({ fullName, post, photo, additionalInfo }: IMemberCard) => {
  return (
    <>
      <div className="member__card w-3/5 rounded-3xl p-3 my-3 flex flex-col items-center ">
        <div className="member__card__img">
          {photo ? (
            <img src={photo} />
          ) : (
            <img src="src/assets/images/quiz.png" alt="" />
          )}
        </div>
        <div className="member__card__description">
          {" "}
          {additionalInfo ? (
            additionalInfo
          ) : (
            <p> Сотрудник студенческого совета.</p>
          )}
        </div>
        <div className="member__card__person-wrapper p-2">
          <div className="member__card__post">
            <span>{post}</span>
          </div>
          <div className="member__card__fullname">
            <span>{fullName} </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default MemberCard;
