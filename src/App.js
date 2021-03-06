import React from "react";
import user from "./components/Profile/user.json";
import statisticalData from "./components/Statistics/statistical-data.json";
import friends from './components/FriendList/friends.json'
import transactions from "./components/TransactionHistory/transactions.json";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
    return (<div>
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions}/>
    </div>
         )
};
export default App;