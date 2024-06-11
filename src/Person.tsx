interface Props{
    name : string;
    age : number;
    isMarried: boolean;
}


export const Person = (props:Props) => {
    return (
    <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>This person {props.isMarried? "is married.": "is not married."}</p>

    </div>   
    ) 
}