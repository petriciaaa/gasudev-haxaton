import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Do not forget to use useEffect hook!
const TeamEditForm: React.FC = () => {
  // const news = await fetch('http://localhost:8000/api/news', )
  const teamInfo = useSelector<any, any>((state) => state.teamReducer);

  const lastThreeTeamMembers = {};
  const [newMemberName, setNewMember] = useState("");
  const [newMemberSurname, setNewMemberSurname] = useState("");
  const [newMemberPost, setNewMemberPost] = useState("");
  const [newMemberDescription, setNewMemberDescription] = useState("");

  const newMemberNameRef = null;
  const newMemberSurnameRef = null;
  const newMemberPostRef = null;
  const newMemberDescriptionRef = null;

  // const = newTeamMembe = {

  // }

  const handleChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const dispatch = useDispatch();
  return (
    <>
      <div className="team__edit w-full h-auto flex flex-col items-start p-5">
        <h2 className="dashboard__team__title">
          Всего участников: {teamInfo.totalMembers}
        </h2>
        <div className="current_team flex items-center justify-between w-full ">
          <div className="current_team__add w-1/2 h-full  flex flex-col items-start justify-center ">
            <p>Добавьте нового участника</p>
            {/*  */}
            <div className="add__block-wrapper flex flex-col items-start ">
              <span>Имя</span>
              <input
                type="text"
                onChange={(event) => handleChange(event, setNewMember)}
                value={newMemberName}
                className=""
              />
            </div>
            {/*  */}
            <p>Добавьте нового участника</p>
            <div className="add__block-wrapper flex flex-col items-start ">
              <span>Имя</span>
              <input
                type="text"
                onChange={(event) => handleChange(event, setNewMemberSurname)}
                value={newMemberSurname}
                className="mt-5"
              />
            </div>
            {/*  */}
            <div className="add__block-wrapper flex flex-col items-start ">
              <span>Имя</span>
              <input
                type="text"
                onChange={(event) => handleChange(event, setNewMemberPost)}
                value={newMemberPost}
                className="mt-5"
              />
            </div>
            {/*  */}
            {/*  */}
            <div className="add__block-wrapper flex flex-col items-start">
              <span>Имя</span>
              <input
                type="text"
                onChange={(event) =>
                  handleChange(event, setNewMemberDescription)
                }
                value={newMemberDescription}
                className="mt-5"
              />
            </div>
          </div>
          <div className="current_team__delete w-1/2 h-full"></div>
        </div>
      </div>
    </>
  );
};
export default TeamEditForm;
