import React from "react";

const Table = ({data}) => {
  return <table>
    <tbody>
        <tr>
            <td>Name</td>
            <td>Surname</td>
            <td>E-mail</td>
        </tr>

        {data.map((item)=>(
            <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                </tr>
        ))}
    </tbody>
  </table>;
};

export default Table;
