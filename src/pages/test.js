import RowBox from "../components/Social/RowBox";

const TestDiv = () => {
    return(
        <div>
            <RowBox>{{"informationType": "Suggest", "socialType": "Friend"}}</RowBox>
            <p>Divide</p>
            <RowBox>{{"informationType": "Suggest", "socialType": "League"}}</RowBox>
            <p>Divide</p>
            <RowBox>{{"informationType": "Recent", "socialType": "League"}}</RowBox>
            <p>Divide</p>
            <RowBox>{{"informationType": "Recent", "socialType": "Friend"}}</RowBox>

        </div>
    );
}

export default TestDiv;