import { Link } from "react-router-dom"

export default function NotFoundPage(){
    return <div className="text-white" >404 not found, try going back..
        <Link className="flex text-green-300 underline"
            to="/">HomePage</Link>
    </div>;
};