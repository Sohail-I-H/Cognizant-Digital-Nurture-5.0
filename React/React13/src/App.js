import React from "react";
import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

    const showBooks = true;
    const showBlogs = true;
    const showCourses = true;

    return (
        <div>

            {/* Using if through logical AND */}
            {showBooks && <BookDetails />}

            {/* Using Ternary Operator */}
            {showBlogs ? <BlogDetails /> : <h2>No Blogs Available</h2>}

            {/* Using Element Variable */}
            {(() => {
                let component;

                if (showCourses) {
                    component = <CourseDetails />;
                } else {
                    component = <h2>No Courses Available</h2>;
                }

                return component;
            })()}

        </div>
    );
}

export default App;