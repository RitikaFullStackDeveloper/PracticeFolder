const Constant=({name})=>{
    const res = [
        {
            name:"student 1",
            age:1
        },
        {
            name:"student 2",
            age:2
        }
    ]
    return <div>{res.map(res => res.name)}</div>
}
export default Constant;