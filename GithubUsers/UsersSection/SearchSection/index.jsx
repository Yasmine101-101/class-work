function SearchSection() { 
const userInput = (e) => {
    console.log(userInput);
    const value = e.target.value;
    console.log("input value:", value);
};
    return( 
        <div  className="flex justify-center my-4">
           <div className="flex items-center">
            <input className=" py-0.5 px-2 border"/>
        <button className="rounded px-4 text-amber-600 bg-black cursor-pointer ">
            Search
        </button>

           </div>
        </div>
    );
 }

    export default SearchSection;