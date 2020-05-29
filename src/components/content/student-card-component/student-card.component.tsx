import React from 'react';
import { Student } from '../../../models/Student';
import './student-card.component.css';

interface StudentCardComponentProps {
    student: Student;
}

export const StudentCardComponent: React.FC<StudentCardComponentProps> = ({student}) => {
    return (
        <div className="student-card">
            <div className="student-name">{student.firstName} {student.lastName}</div>
            <div className="student-id"><span className="muted">ID: </span>{student.studentID}</div>
            <div className="email"><a href={"mailto:"+student.email}>{student.email}</a></div>
        </div>
    )
}