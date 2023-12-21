import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";

export default function GetProfile() {
  const { User } = useContext(AuthContext);
  const [College, setCollege] = useState(null);
  const [Course, setCourse] = useState(null);
  const [Year, setYear] = useState(null);
  const [Interests, setInterests] = useState(null);
  const Navigate = useNavigate();
  useEffect(() => {
    async function getprofile(ev) {
      try {
        const token = document.cookie.split("=")[1];
        const response = await fetch("http://localhost:3001", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        });
        if (response.status === 401) {
          //Navigate("/unauthorized");
        }
        if (response.ok) {
          const { user } = await response.json();
          setCollege(user.college);
          setCourse(user.course);
          setYear(user.year);
          setInterests(user.interests);
        }
      } catch (error) {
        console.log("error");
      }
    }
    getprofile();
  });
  async function HandleSubmit(ev) {
    ev.preventDefault();
    // Navigate("/home/profile/edit");
  }
  return (
    <div className="profile">
      <div className="profileContent"></div>
    </div>
  );
}
