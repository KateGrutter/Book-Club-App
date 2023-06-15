import { CurrentBook } from "./CurrentBook";
import { DiscussionBoard } from "./DiscussionBoard/DiscussionBoard";
import { Login } from "./LoginForm";

export function BookClubHome() {

    return(
        <div>
            <Login></Login>
            <CurrentBook />
            <DiscussionBoard></DiscussionBoard>
        </div>
    )
}