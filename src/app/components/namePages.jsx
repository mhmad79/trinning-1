export default function NamePages({name}) {
    return (
        <div  className=" flex flex-col mb-10">
            <div className=" mb-10 ">
                <h1 className=" flex justify-end text-3xl">{name}</h1>
            </div>
            <div className=" line m-auto"></div>
        </div>
    )
}