import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Filters from "./Filters.component";
import { getImages } from "./Filters.actions";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getImages }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Filters);