const Cart = ({updateSelectedCourse,creditCount,priceCount}) => {
    return (
        <div>
            <div className="course-cart">
                <p className="remaining">Credit hour remaining {20 - creditCount} hr</p>
                <hr />
                <h4 className="course-name-title">Course Name</h4>
                <div className="course-names">
                    <ol className='list'>
                        {
                            updateSelectedCourse.map(course =>
                                <div key={course.id}>
                                    {
                                        <li>{course.title}</li>}
                                </div>
                            )
                        }
                        <div className="no-course-selected">
                            <span className='none'>{updateSelectedCourse.length <= 0 && 'no course selected yet'}</span>
                        </div>
                    </ol>
                </div>
                <hr />
                <p className="total-credit-hour">Total credit hour: <span>{creditCount}</span></p>
                <hr />
                <p className="total-price">Total Price: <span>{priceCount} USD</span></p>
            </div>
        </div>
    );
};
export default Cart;