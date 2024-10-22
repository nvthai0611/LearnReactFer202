import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AppContext from "../provider/Context";

function GradeDetail() {
  const { stdId } = useParams();
  const { evaluations, setEvaluations, students } = useContext(AppContext);
  const [gradeMatch, setGradeMatch] = useState([]);
  const [getName, setGetName] = useState("");
  const [addEvaluations, setAddEvaluations] = useState({
    studentId: stdId,
    grade: "",
    additionalExplanation: "",
  });

  useEffect(() => {
    const studentMatch = students.find((stu) => stu.studentId === stdId);
    if (studentMatch) {
      setGetName(studentMatch?.name);
    }
  }, [stdId]);
  console.log(getName);
  const filterGradeMatch = evaluations.filter(
    (evalue) => evalue.studentId === stdId
  );
  console.log(filterGradeMatch);
  // Bất đồng async 
  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
       const resData = await axios.post(`http://localhost:9999/evaluations`, addEvaluations);
      setEvaluations([...evaluations, resData.data]);
      } catch (error) {
      
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    const updateValue = name === "grade" ? Number(value) : value;
    setAddEvaluations({...addEvaluations, [name]: value});
    console.log(addEvaluations);
  }
  return (
    <div>
      <Link className="btn btn-success" to={"/"}>
        Back to home
      </Link>
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
      <form onSubmit={handleSubmit}>
        Grade<input type="text" name="grade" onChange={handleChange}/>
        additionalExplanation
        <input type="text" name="additionalExplanation" onChange={handleChange}/>
        <button>add</button>
      </form>
    </div>
  );
}

export default GradeDetail;
