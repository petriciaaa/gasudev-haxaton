import React, { useState, useEffect, useRef } from "react";
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

  const newMemberNameRef = useRef(null);
  const newMemberSurnameRef = useRef(null);
  const newMemberPostRef = useRef(null);
  const newMemberDescriptionRef = useRef(null);

  if (
    newMemberNameRef.current &&
    newMemberSurnameRef.current &&
    newMemberPostRef.current &&
    newMemberDescriptionRef.current
  ) {
    const newTeamMember = {
      id: teamInfo.totalMembers,
      fullName:
        String(newMemberNameRef.current.value) +
        " " +
        String(newMemberSurnameRef.current.value),
      post: newMemberPostRef.current.value,
      additionalInfo: newMemberDescriptionRef.current.value,
    };
    console.log(newTeamMember);
  }

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
          <div className="current_team__add w-1/2 h-full  flex flex-col items-start justify-center py-6 ">
            <p className="add__block__title">Добавьте нового участника</p>
            {/*  */}
            <div className="add__block-wrapper flex flex-col items-start mt-4 p-1 ">
              <span>Имя</span>
              <input
                ref={newMemberNameRef}
                type="text"
                onChange={(event) => handleChange(event, setNewMember)}
                value={newMemberName}
                className=""
              />
            </div>
            {/*  */}

            <div className="add__block-wrapper flex flex-col items-start mt-4 p-1 ">
              <span>Фамилия</span>
              <input
                ref={newMemberSurnameRef}
                type="text"
                onChange={(event) => handleChange(event, setNewMemberSurname)}
                value={newMemberSurname}
                className=""
              />
            </div>
            {/*  */}
            <div className="add__block-wrapper flex flex-col items-start mt-4 p-1 ">
              <span>Должность</span>
              <input
                ref={newMemberPostRef}
                type="text"
                onChange={(event) => handleChange(event, setNewMemberPost)}
                value={newMemberPost}
                className=""
              />
            </div>
            {/*  */}
            {/*  */}
            <div className="add__block-wrapper flex flex-col items-start mt-4 p-1">
              <span>Дополнительная инфромация</span>
              <input
                ref={newMemberDescriptionRef}
                type="text"
                onChange={(event) =>
                  handleChange(event, setNewMemberDescription)
                }
                value={newMemberDescription}
                className=""
              />
            </div>
            <button className="add__subimt">Добавить</button>
          </div>

          <div className="current_team__delete w-1/2 h-full"></div>
        </div>
      </div>
    </>
  );
};
export default TeamEditForm;
