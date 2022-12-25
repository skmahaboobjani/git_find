import { FaUser } from "react-icons/fa";
const FollowingList = ({ data }) => {
  return (
    <div className="card following-list">
      <h2>
        <FaUser style={{ fontSize: "0.7em", paddingRight: "0.4rem" }} />
        Following List
      </h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th colSpan={2}>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  <img src={elem.avatar_url} alt="Profile" />
                </td>
                <td>
                  <a href={elem.html_url} rel="noreferrer" target="_blank">
                    {elem.login}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FollowingList;