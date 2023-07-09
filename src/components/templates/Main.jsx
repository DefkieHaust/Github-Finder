import UserList from "../modules/UserList"

const Main = ({ searched }) => {
  return (
    <main>
        <div className="container my-3 mb-5">
            <UserList searched={searched} />
        </div>
    </main>
  )
}

export default Main