import React, { useState } from 'react';
import './register.component.css';
import { Student } from '../../../models/Student';

/* Props represent data that this component is dependent upon */
interface RegisterComponentProps {
    setView: (str: 'STUDENT_LIST' | 'REGISTER') => void;
    addStudent: (student: Student) => void;
}

export const RegisterComponent: React.FC<RegisterComponentProps> = (props) => {

    const [firstName, setFirstName] = useState('');    
    const [lastName, setLastName] = useState('');
    const [studentID, setStudentID] = useState('');
    const [email, setEmail] = useState('');

    const saveStudent = () => {
        const student = {
            firstName, lastName, studentID, email
        };
        props.addStudent(student);
        props.setView('STUDENT_LIST');
    }

    return (
        <section id="register-container">
            <header>
                <h2>Register New Student</h2>
            </header>

            <form>

                <div>
                    <label><div>First Name:</div>
                    <input 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        type="text" />
                    </label>
                </div>

                <div>
                    <label><div>Last Name:</div>
                    <input value={lastName} 
                        onChange={(e) => setLastName(e.target.value)}
                        type="text" />
                    </label>
                </div>

                <div>
                    <label><div>Student ID:</div>
                    <input value={studentID} 
                        onChange={(e) => setStudentID(e.target.value)}
                        type="text" />
                    </label>
                </div>

                <div>
                    <label><div>Email Address:</div>
                    <input value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" />
                    </label>
                </div>

            <div>
                <button onClick={() => props.setView('STUDENT_LIST')}>Back
                </button>
                <button onClick={() => saveStudent()}>Save</button>
            </div>

            </form>

        </section>
    );
}