import React from "react";

import "./team.scss";

interface IMemberCard {
  fullName: string;
  photo: string;
  post: string;
  additionalInfo: string;
}

const MemberCard = ({ fullName, post, photo, additionalInfo }: IMemberCard) => {
  console.log(photo);

  return (
    <>
      <div className="member__card w-3/5 rounded-3xl bg-slate-100 p-3 my-3 flex flex-col items-center ">
        <div className="member__card__img">
          <img src={photo} />
        </div>

        <div className="member__card__post">{post}</div>

        <div className="member__card__fullname">{fullName}</div>
        <div className="member__card__description">{additionalInfo}</div>
      </div>
    </>
  );
};
export default MemberCard;
