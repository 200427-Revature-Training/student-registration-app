import React from 'react';
import { Student } from '../../../models/Student';

interface StudentCardComponentProps {
    student: Student;
}

export const StudentCardComponent: React.FC<StudentCardComponentProps> = ({student}) => {
    return (
        <div className="student-card">
            <div>{student.firstName} {student.lastName}</div>
            <div className="student-id">{student.studentID}</div>
            <div className="email">{student.email}</div>
        </div>
    )
}