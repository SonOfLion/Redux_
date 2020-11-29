import { connect } from "react-redux";
import { availableOptionsSelector } from "../options/options.selectors";
import Options from "../options/Options";
import { toggleOption } from "../options/options.actions";

const mapState = (state) => {
    return {
        options: availableOptionsSelector(state),
    };
};

const mapDispatch = {
    moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(Options);