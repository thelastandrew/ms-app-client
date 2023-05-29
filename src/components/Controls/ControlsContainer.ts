import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import { getHitsByPage, updateCategory } from '../../store/reducers/ActionCreators';
import { Controls } from './Controls';

const mapStateToProps = (state: RootState) => ({
  next: state.hitReducer.next,
  prev: state.hitReducer.prev,
});

export const ControlsContainer = connect(mapStateToProps, { getHitsByPage, updateCategory })(Controls);
