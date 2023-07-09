import axios from "axios";
import UserCard from "./UserCard";
import { useState } from "react";
import "./css/UserList.css"

const UserList = ({ searched, setSearched }) => {
  const [users, setUsers] = useState([]);
  const [buffer, setBuffer] = useState("")
  const [loading, setLoading] = useState(true)

  if (searched && (searched !== buffer)) {

    getSearch(`https://api.github.com/search/users?q=${searched}&client_id=${import.meta.env.VITE_ID}&client_secret=${import.meta.env.VITE_SECRET}`)
    setBuffer(searched)
  } else if (users.length === 0 && !searched) {
    getUsers("https://api.github.com/users");
  }

  async function getSearch(api) {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500)
    let res = await axios.get(api);
    setUsers(res.data.items);
  }

  async function getUsers(api) {
    let res = await axios.get(api);
    setUsers(res.data);
  }

  return (
    <div className="row gy-5 pb-3">
      {users.length !== 0 ? users.map((item) => (
        <UserCard
          key={item.id}
          name={item.login}
          url={item.html_url}
          avatar={item.avatar_url}
        />
      )) : <h3>No Results found!</h3>}

      <div className={"loader z-1 w-100 h-100 position-fixed top-0 start-0" + (loading ? "" : " d-none") } >
        <i className="fa-solid fa-spinner fa-spin position-absolute" ></i>
      </div>
    </div>
  );
};

export default UserList;
