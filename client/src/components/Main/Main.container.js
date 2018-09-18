import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Main from "./Main.component";
import { getBreeds } from "./Main.actions";

function mapStateToProps({ breeds, images }) {
  return { breeds, images };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBreeds }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);