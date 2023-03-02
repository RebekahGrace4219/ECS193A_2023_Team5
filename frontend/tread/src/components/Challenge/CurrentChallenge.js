
import AddExerciseBox from "./AddExerciseBox";
import ChallengeHeader from "./ChallengeHeader";
import CurrentChallengeForm from "./CurrentChallengeForm";
const CurrentChallenge = () => {

    return (
        <div id = "CurrentChallenge">
            <ChallengeHeader/>
            <AddExerciseBox></AddExerciseBox>
            <CurrentChallengeForm/>
        </div>
      );
}

export default CurrentChallenge;