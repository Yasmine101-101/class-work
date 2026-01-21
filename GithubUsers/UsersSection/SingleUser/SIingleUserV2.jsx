function SingleUserv2(props) {
   // console.log(props);

    const navigate = () => {
        console.log("Navigating to user:", props.url);
        window.open(props.url, "_blank");
    };

    //onClick={navigate} added to div below for clickable user card

    function mouseOver() {
        console.log("Mouse over user:", props.login);
    }


    return (
        <div className=" m-2 rounded-md shadow-md " onMouseEnter={mouseOver}>
            <div className="rounded-md">
                <img className="rounded-md" src={props.avatar_url} />
            </div>
            <div className="p-4">
                <div>
                    Name: <b>{props.login}</b>
                </div>
                <button
                className="px-4 py-2 text-white bg-blue-500 cursor-pointer active:opacity-50"
                onClick={navigate}>
                    Github
                </button>
                
                
            </div>
        </div>
    );
}
export default SingleUserv2;