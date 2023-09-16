import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./Cart";

const CourseBody = () => {
    const [allCourse,setAllCourse] = useState([]);
    const allCourseData ='../../../public/course.json'
    useEffect(()=>{

        fetch(allCourseData)
        .then(res => res.json())
        .then(data => setAllCourse(data))

    },[])

    const [updateSelectedCourse, setUpdateSelectedCourse] = useState([])
    const [creditCount, setCreditCount] = useState(0)
    const [priceCount, setPriceCount] = useState(0)
    const [matchCourse, setMatchCourse] = useState([])

    let allSelectedCourse = [];
    let storeAllSelectedCourse = [];
    const handleCourseInfo = (course) => {
        let checkCreditCount = creditCount + course.credit;
        if (checkCreditCount > 20) {
            toast.error("You can't add more than 20 credit", {
                position: "top-center",
                width: '100%'
            });
        }
        else {


            //checking if the course is already selected
            if (matchCourse.includes(course.id)) {
                toast.error("This course is already selected", {
                    position: "top-center",
                });
            }
            else {
                //adding total credit
                setCreditCount(creditCount + course.credit)

                //adding selected course in the list
                allSelectedCourse.push(...updateSelectedCourse, course)
                setUpdateSelectedCourse(allSelectedCourse)

                //adding total price
                setPriceCount(priceCount + course.price)

                //adding the course id in a array to check later if it's selected already
                storeAllSelectedCourse.push(...matchCourse, course.id);
                setMatchCourse(storeAllSelectedCourse)
            }
        }
    }
    
    return (
        <div className='course-body container'>
            <div className="all-courses">
                <div className='all-course-data'>
                    {
                        allCourse.map(course =>
                            <div className='course' key={course.id}>
                                <div className="image"><img src={course.image} alt="" /></div>
                                <h2 className="title">{course.title}</h2>
                                <p className="description">{course.description}</p>
                                <div className="price-credit">
                                    <div className="price">
                                        <p>Price: {course.price}</p>
                                    </div>
                                    <div className="credit">
                                        <p>Credit: {course.credit}hr</p>
                                    </div>
                                </div>
                                <div className="action">
                                     <button onClick={() => handleCourseInfo(course)}>Select</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            <Cart updateSelectedCourse={updateSelectedCourse} creditCount={creditCount} priceCount={priceCount}></Cart>
            <ToastContainer />

            
        </div>
    );
};

export default CourseBody;