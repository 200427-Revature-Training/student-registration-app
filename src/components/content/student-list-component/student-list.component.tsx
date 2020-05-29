import React from 'react';
import { Student } from '../../../models/Student';
import { prependOnceListener } from 'cluster';
import { StudentCardComponent } from '../student-card-component/student-card.component';

interface StudentListProps {
    setView: (str: 'STUDENT_LIST' | 'REGISTER') => void;
    students: Student[];
}



export const StudentListComponent: React.FC<StudentListProps> = (props) => {
    
    // Maps our array of students to an array of StudentCardComponents
    // React can then iteratively render these components
    const renderStudentComponents = () => {
        return props.students.map(student => {
            return (<StudentCardComponent student={student}></StudentCardComponent>)
        })

        // ? Effectively the same thing:
        // return props.students.map(student => {
        //     return StudentCardComponent({student: student});
        // })
    }


    return (
        <section id="student-list-container">
            <header>
                <h2>Student List</h2>
            </header>
            <div>
                <button onClick={() => props.setView('REGISTER')}>Register New Student</button>
            </div>
            <section>
                {renderStudentComponents()}
            </section>

        </section>
    );
}