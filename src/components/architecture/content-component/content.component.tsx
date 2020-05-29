import React, { useState } from 'react';
import { StudentListComponent } from '../../content/student-list-component/student-list.component';
import { RegisterComponent } from '../../content/register-component/register.component';
import { Student } from '../../../models/Student';

export const childViews = {
    studentList: 'STUDENT_LIST',
    register: 'REGISTER'
};

/*
    ! Using Props (properties)
    Props are data passed from component to another. The 
    setView function is owned by the ContentComponent but
    needs to accessible to child components.  In this
    scenario we need to pass this value as a prop to the 
    children.  From the parents perspective, this is as 
    simple as passing it to the component tag as you would
    an attribute in HTML.

    The child component then receives a prop object which
    contains any props passed to it. In TypeScript we have
    the opportunity to provide typing information regarding
    passed props on the React.FC typing declaration.
*/

const initialStudents: Student[] = [{
    firstName: 'Abby',
    lastName: 'Adams',
    studentID: '123',
    email: 'abby@aol.com'
}, {
    firstName: 'Billy',
    lastName: 'Joel',
    studentID: '456',
    email: 'billy@bing.com'
}];

export const ContentComponent: React.FC = () => {

    const [view, setView] =
        useState<'STUDENT_LIST' | 'REGISTER'>('STUDENT_LIST');

    const [students, setStudents] = useState<Student[]>(initialStudents);

    const addStudent = (student: Student) => {
        setStudents([...students, student]);
    }

    // Stateless component - or a functional component
    const getCurrentView = () => {

        // Returning a view based on the value of the state 'view'
        switch (view) {
            case childViews.studentList: return <StudentListComponent students={students} setView={setView} />;
            case childViews.register: return <RegisterComponent setView={setView} addStudent={addStudent} />
            default: return <React.Fragment />
        }
    }

    return (
        <main>
            {getCurrentView()}
        </main>
    );
}