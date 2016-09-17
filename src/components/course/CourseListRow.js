import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) =>{
    return (
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
        </tr>
    )
}
