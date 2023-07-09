import UserList from "../modules/UserList"

const Main = ({ searched, setSearched }) => {
  return (
    <main>
        <div className="container my-3 mb-5">
            <UserList searched={searched} setSearched={setSearched} />
        </div>
    </main>
  )
}

export default Main