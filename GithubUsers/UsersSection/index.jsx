//import SingleUser from "./SingleUser/Single";
import users from "../users.json";
import SingleUserv2 from "./SingleUser/SIingleUserV2";

function UsersSection() {
  function toMap(item,index){
    return (
      <SingleUserv2
      key={item.id}
      avatar_url={item.avatar_url}
      login={item.login}
      url={item.html_url}
    
      />
    );
  }
  
    return (
      <div className="flex flex-wrap">{users.map(toMap)}</div>
    )
  
}


export default UsersSection;