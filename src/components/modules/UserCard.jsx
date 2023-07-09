import "./css/UserCard.css";

const UserCard = (props) => {
  return (
    <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 px-4">
      <div className="card bg-dark text-white">
        <img src={props.avatar} className="card-img-top" alt={props.name} />
        <div className="card-body text-center">
          <h5 className="card-title mb-3">{props.name}</h5>
            <a href={props.url} className="btn btn-secondary m-auto">
              {"View Profile >"}
            </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
