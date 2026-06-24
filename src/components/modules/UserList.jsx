import axios from "axios";
import UserCard from "./UserCard";
import { useEffect, useState } from "react";
import "./css/UserList.css"

const UserList = ({ searched }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let ignore = false;

    const loadingTimeout = setTimeout(() => setLoading(false), 2000);

    if (searched) {
      setLoading(true);
      axios.get(`https://api.github.com/search/users?q=${searched}`)
        .then(res => {
          if (!ignore) setUsers(res.data.items);
        });
    } else {
      axios.get("https://api.github.com/users")
        .then(res => {
          if (!ignore) setUsers(res.data);
        });
    }

    return () => {
      ignore = true;
      clearTimeout(loadingTimeout);
    };
  }, [searched]);

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

      <div className={"loader z-1 w-100 h-100 position-fixed top-0 start-0" + (loading ? "" : " d-none")} >
        <i className="fa-solid fa-spinner fa-spin position-absolute" ></i>
      </div>
    </div>
  );
};

export default UserList;
