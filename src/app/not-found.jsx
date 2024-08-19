import Link from "next/link";


const NotFound = () => {

    return (
        <div>
            <h1>Not Found</h1>
            <p>this page does not exist</p>

           <p>Back to <Link href="/">homepage</Link></p>
        </div>
    )

};

export default NotFound;
