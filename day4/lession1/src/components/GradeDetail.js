import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AppContext from "../provider/Context";

function GradeDetail() {
  const { evaluations, setEvaluations, students } = useContext(AppContext);
  const [gradeMatch, setGradeMatch] = useState([]);
  const [getName, setGetName] = useState("");

  const { stdId } = useParams();
  useEffect(() => {
    const studentMatch = students.find(
      (stu) => stu.studentId === stdId
    );
    if (studentMatch) {
        setGetName(studentMatch?.name);
    }
  }, [stdId]);
  console.log(getName);
  const filterGradeMatch = evaluations.filter(
    (evalue) => evalue.studentId === stdId
  );
  console.log(filterGradeMatch);
  return (
    <div>
      <Link className="btn btn-success" to={'/'}>Back to home</Link>
      <h4 style={{ textAlign: "center" }}>{getName}'s Grade Details</h4>
      <table className="table table-hover">
        <thead>
          <th>Grade</th>
          <th>Môn Học</th>
        </thead>
        <tbody>
          {filterGradeMatch.map((mat) => (
            <tr>
              <td>{mat.grade}</td>
              <td>{mat.additionalExplanation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GradeDetail;
