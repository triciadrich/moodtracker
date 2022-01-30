import React from 'react';

const ResourceList = () => {

    return (
        <div>
            <p>If you or someone you know is struggling with mental health, please seek immediate help from a licensed professional. 
                For additional information on various mental health related topics, please visit the following sites:</p>
            <ul>
                <li>
                    <a href='https://suicidepreventionlifeline.org/'>National Suicide Prevention Lifeline</a>
                </li>
                <li>
                    <a href='https://afsp.org/'>American Foundation for Suicide Prevention</a>
                </li>
                <li>
                    <a href='https://www.samhsa.gov/'>Substance Abuse and Mental Health Service Administration</a>
                </li>
                <li>
                    <a href='https://www.dbsalliance.org/'>Depression and Bipolar Support Alliance</a>
                </li>
                <li>
                    <a href='https://www.mentalhealthishealth.us/'>Mental Health Is Health</a>
                </li>
            </ul>
        </div>
    );
}

export default ResourceList;