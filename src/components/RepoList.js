import { FaBook } from "react-icons/fa";

const RepoList = ({ data }) => {
  return (
    <div className="card repo-list">
      <h2>
        {" "}
        <FaBook style={{ fontSize: "0.7em" }} /> Repositories
      </h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((singleRepo, idx) => {
            // console.log(singleRepo);
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  <a
                    href={singleRepo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {singleRepo.name}
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

export default RepoList;